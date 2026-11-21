#!/usr/bin/env python3
"""Sincroniza evidencias visuais, criterios e rastreabilidade de PRs para o MkDocs."""

from __future__ import annotations

import argparse
import json
import os
import re
import unicodedata
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
EVIDENCIAS_DIR = ROOT / "docs" / "assets" / "images" / "evidencias"
DOD_FILE = ROOT / "docs" / "mvp" / "dod.md"
START_MARKER = "<!-- AUTO-EVIDENCIAS-PR:START -->"
END_MARKER = "<!-- AUTO-EVIDENCIAS-PR:END -->"


def github_get(url: str, token: str | None) -> object:
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "duoc-finance-sync-evidencias",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def slugify(text: str, fallback: str) -> str:
    norm = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", norm).strip("-").lower()
    if not slug or re.fullmatch(r"[0-9a-f-]+", slug):
        return fallback
    return slug[:48]


def detect_ext(content_type: str, data: bytes, url: str) -> str:
    ct = (content_type or "").lower()
    if "png" in ct or data.startswith(b"\x89PNG"):
        return "png"
    if "jpeg" in ct or "jpg" in ct or data.startswith(b"\xff\xd8\xff"):
        return "jpg"
    if "webp" in ct or data[:4] == b"RIFF":
        return "webp"
    if "gif" in ct or data[:3] == b"GIF":
        return "gif"
    m = re.search(r"\.(png|jpg|jpeg|webp|gif)(?:\?|$)", url, re.IGNORECASE)
    if m:
        ext = m.group(1).lower()
        return "jpg" if ext == "jpeg" else ext
    return "png"


def extract_images(markdown_text: str) -> list[tuple[str, str]]:
    found: list[tuple[str, str]] = []
    seen: set[str] = set()

    # HTML <img ... src="..." ...>
    for m in re.finditer(r"<img\b[^>]*>", markdown_text, flags=re.IGNORECASE):
        tag = m.group(0)
        src_m = re.search(r'src=["\']([^"\']+)["\']', tag, flags=re.IGNORECASE)
        if not src_m:
            continue
        url = src_m.group(1).strip()
        alt_m = re.search(r'alt=["\']([^"\']*)["\']', tag, flags=re.IGNORECASE)
        alt = alt_m.group(1).strip() if alt_m else ""
        if url not in seen:
            seen.add(url)
            found.append((alt, url))

    # Markdown ![alt](url)
    for m in re.finditer(r"!\[([^\]]*)\]\(([^)\s]+)\)", markdown_text):
        alt = m.group(1).strip()
        url = m.group(2).strip()
        if url not in seen:
            seen.add(url)
            found.append((alt, url))

    return found


def download_image(url: str, dest_dir: Path, idx: int, alt: str, token: str | None) -> tuple[str, str] | None:
    headers = {"User-Agent": "duoc-finance-sync-evidencias"}
    if token and "api.github.com" in url:
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            ct = resp.headers.get("Content-Type", "")
            data = resp.read()
    except (urllib.error.URLError, TimeoutError) as exc:
        print(f"Aviso: falha ao baixar {url}: {exc}")
        return None

    if not data or ("text/html" in ct.lower() and not data.startswith((b"\x89PNG", b"\xff\xd8\xff", b"GIF", b"RIFF"))):
        print(f"Aviso: URL ignorada (nao e imagem): {url}")
        return None

    ext = detect_ext(ct, data, url)
    name = f"{idx:02d}-{slugify(alt, f'evidencia-{idx:02d}')}.{ext}"
    dest_dir.mkdir(parents=True, exist_ok=True)
    (dest_dir / name).write_bytes(data)
    caption = alt if alt and not re.fullmatch(r"[\{\}0-9A-Fa-f-]+", alt) and not alt.lower().startswith("screenshot_") else f"Evidência {idx:02d}"
    return name, caption


def extract_traceability(text: str) -> dict[str, list[str]]:
    issues = sorted(set(re.findall(r"(?:Closes|Fixes|Resolves|Issue[^#\n]*)\s*#(\d+)", text, flags=re.IGNORECASE)), key=int)
    rfs = sorted(set(m.upper() for m in re.findall(r"\bRF-?(\d{2})\b", text, flags=re.IGNORECASE)))
    rnfs = sorted(set(m.upper() for m in re.findall(r"\bRNF-?(\d{2})\b", text, flags=re.IGNORECASE)))
    cars = sorted(set(m.upper() for m in re.findall(r"\bCAR-?(\d{2})\b", text, flags=re.IGNORECASE)))
    return {
        "issues": [f"#{i}" for i in issues],
        "rfs": [f"RF{n}" for n in rfs],
        "rnfs": [f"RNF{n}" for n in rnfs],
        "cars": [f"CAR-{n}" for n in cars],
    }


def extract_checklists(text: str) -> tuple[list[str], list[str]]:
    done: list[str] = []
    pending: list[str] = []
    for line in text.splitlines():
        m = re.match(r"^\s*[-*]\s*\[([ xX])\]\s*(.+)$", line)
        if not m:
            continue
        mark, label = m.group(1), m.group(2).strip()
        if mark.lower() == "x":
            done.append(label)
        else:
            pending.append(label)
    return done, pending


def build_pr_block(
    pr_num: int,
    pr_data: dict,
    trace: dict[str, list[str]],
    done: list[str],
    pending: list[str],
    saved_imgs: list[tuple[str, str]],
    ci_summary: str,
) -> str:
    title = pr_data.get("title", f"PR #{pr_num}").replace("|", "/")
    url = pr_data.get("html_url", "")
    author = (pr_data.get("user") or {}).get("login", "desconhecido")
    merged_at = (pr_data.get("merged_at") or pr_data.get("updated_at") or "")[:10]
    req_tokens = trace["cars"] + trace["rfs"] + trace["rnfs"]
    req_str = ", ".join(f"`{t}`" for t in req_tokens) if req_tokens else "—"
    issues_str = ", ".join(trace["issues"]) if trace["issues"] else "—"

    lines = [
        f"<!-- PR-{pr_num}:START -->",
        f"??? info \"PR #{pr_num} — {title} ({author} • {merged_at})\"",
        "",
        f"    - **Pull Request:** [#{pr_num}]({url}) • **Issues:** {issues_str} • **Requisitos:** {req_str}",
        f"    - **CI / Verificações:** {ci_summary} • **Critérios marcados:** {len(done)} aceito(s), {len(pending)} pendente(s)",
        "",
    ]

    if saved_imgs:
        lines.append('    <div class="req-evidence-media-grid">')
        for fname, caption in saved_imgs:
            rel = f"../../assets/images/evidencias/pr-{pr_num}/{fname}"
            lines.extend([
                '      <div class="req-evidence-media-card">',
                f'        <img src="{rel}" alt="{caption}">',
                f'        <span class="req-evidence-media-caption">{caption} (<code>pr-{pr_num}/{fname}</code>)</span>',
                "      </div>",
            ])
        lines.append("    </div>")
    else:
        lines.append("    *Nenhuma imagem anexada na descrição ou comentários do autor deste PR.*")

    lines.append("")
    lines.append(f"<!-- PR-{pr_num}:END -->")
    return "\n".join(lines)


def update_dod_markdown(pr_num: int, pr_block: str) -> None:
    content = DOD_FILE.read_text(encoding="utf-8")
    if START_MARKER not in content or END_MARKER not in content:
        raise RuntimeError(f"Marcadores {START_MARKER} / {END_MARKER} não encontrados em {DOD_FILE}")

    before, rest = content.split(START_MARKER, 1)
    middle, after = rest.split(END_MARKER, 1)

    pr_pattern = re.compile(rf"<!-- PR-{pr_num}:START -->.*?<!-- PR-{pr_num}:END -->\n*", flags=re.DOTALL)
    middle_clean = pr_pattern.sub("", middle)
    middle_clean = middle_clean.replace("*Aguardando sincronização automática de PRs mergeados.*", "").strip()
    if middle_clean:
        new_middle = f"\n\n{pr_block}\n\n{middle_clean}\n\n"
    else:
        new_middle = f"\n\n{pr_block}\n\n"

    DOD_FILE.write_text(f"{before}{START_MARKER}{new_middle}{END_MARKER}{after}", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Sincroniza evidências de um PR para o MkDocs.")
    parser.add_argument("--repo", default=os.environ.get("GITHUB_REPOSITORY", ""), help="owner/repo")
    parser.add_argument("--pr", type=int, default=0, help="Número do Pull Request")
    args = parser.parse_args()

    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    pr_num = args.pr

    if not pr_num and os.environ.get("GITHUB_EVENT_PATH"):
        event = json.loads(Path(os.environ["GITHUB_EVENT_PATH"]).read_text(encoding="utf-8"))
        pr_num = int((event.get("pull_request") or {}).get("number") or 0)

    if not args.repo or not pr_num:
        raise SystemExit("Informe --repo e --pr (ou execute via evento pull_request do GitHub Actions).")

    pr_data = github_get(f"https://api.github.com/repos/{args.repo}/pulls/{pr_num}", token)
    assert isinstance(pr_data, dict)
    pr_author = (pr_data.get("user") or {}).get("login", "")
    pr_body = pr_data.get("body") or ""

    comments = github_get(f"https://api.github.com/repos/{args.repo}/issues/{pr_num}/comments?per_page=100", token)
    assert isinstance(comments, list)
    author_comments = [
        c.get("body") or ""
        for c in comments
        if (c.get("user") or {}).get("login") == pr_author or "<!-- evidencia -->" in (c.get("body") or "")
    ]

    combined_text = pr_body + "\n" + "\n".join(author_comments)
    images = extract_images(combined_text)

    dest_dir = EVIDENCIAS_DIR / f"pr-{pr_num}"
    saved_imgs: list[tuple[str, str]] = []
    for idx, (alt, img_url) in enumerate(images, 1):
        saved = download_image(img_url, dest_dir, idx, alt, token)
        if saved:
            saved_imgs.append(saved)

    head_sha = (pr_data.get("head") or {}).get("sha", "")
    ci_summary = "Não verificado"
    if head_sha:
        try:
            checks = github_get(f"https://api.github.com/repos/{args.repo}/commits/{head_sha}/check-runs", token)
            runs = (checks or {}).get("check_runs", []) if isinstance(checks, dict) else []
            if runs:
                ok = sum(1 for r in runs if r.get("conclusion") == "success")
                ci_summary = f"{ok}/{len(runs)} check(s) aprovado(s)"
        except urllib.error.URLError:
            pass

    trace = extract_traceability(combined_text)
    done, pending = extract_checklists(pr_body)
    pr_block = build_pr_block(pr_num, pr_data, trace, done, pending, saved_imgs, ci_summary)
    update_dod_markdown(pr_num, pr_block)

    print(f"PR #{pr_num}: {len(saved_imgs)} imagem(ns) salva(s) em {dest_dir.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
