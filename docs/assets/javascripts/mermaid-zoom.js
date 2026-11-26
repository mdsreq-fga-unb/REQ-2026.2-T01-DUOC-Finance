/*
 * Zoom para diagramas Mermaid (opt-in)
 * Segue o padrão visual e de interação da Pirâmide de Abstração interativa
 * (piramide-interativa.js): moldura, barra superior, canvas pontilhado e rodapé.
 *
 * Uso no Markdown:
 *   <div class="mermaid-zoom" markdown="1">
 *   <div class="mermaid-zoom-legend">...</div>   (opcional: vai para a barra superior)
 *   ```mermaid
 *   ...
 *   ```
 *   </div>
 *
 * O zoom altera a largura do SVG (vetorial), então o texto permanece nítido e a
 * escala sobrevive à troca de tema, que re-renderiza o SVG em mermaid-init.js.
 */
(() => {
  const MIN = 0.5;
  const MAX = 4;
  const FACTOR = 1.28; // mesmo passo de zoom da pirâmide interativa

  function setup(container) {
    if (container.dataset.zoomReady) return;
    const diagram = container.querySelector(".mermaid");
    if (!diagram) return;
    container.dataset.zoomReady = "true";

    const legend = container.querySelector(".mermaid-zoom-legend");

    const toolbar = document.createElement("div");
    toolbar.className = "mermaid-zoom-toolbar";
    toolbar.innerHTML = `
      <div class="mermaid-zoom-controls">
        <button type="button" class="mermaid-zoom-btn" data-action="in" title="Aproximar Zoom">+</button>
        <button type="button" class="mermaid-zoom-btn" data-action="out" title="Afastar Zoom">−</button>
        <button type="button" class="mermaid-zoom-btn" data-action="fit" title="Enquadrar Diagrama Completo">Ver Tudo</button>
        <button type="button" class="mermaid-zoom-btn" data-action="full" title="Alternar Tela Cheia">Tela Cheia</button>
      </div>
    `;
    if (legend) toolbar.insertBefore(legend, toolbar.firstChild);

    const viewport = document.createElement("div");
    viewport.className = "mermaid-zoom-viewport";
    const stage = document.createElement("div");
    stage.className = "mermaid-zoom-stage";

    const footer = document.createElement("div");
    footer.className = "mermaid-zoom-footer";
    footer.innerHTML = `
      <span>Arraste com o mouse para mover o diagrama · Use a roda do mouse (scroll) ou os botões para dar zoom</span>
      <span class="mermaid-zoom-level">Zoom: 100%</span>
    `;

    diagram.parentNode.insertBefore(toolbar, diagram);
    diagram.parentNode.insertBefore(viewport, diagram);
    viewport.appendChild(stage);
    stage.appendChild(diagram);
    container.appendChild(footer);

    const levelLabel = footer.querySelector(".mermaid-zoom-level");
    const fullButton = toolbar.querySelector('[data-action="full"]');
    let scale = 1;

    function apply(newScale, originX, originY) {
      const clamped = Math.min(MAX, Math.max(MIN, newScale));
      if (clamped === scale) return;

      // Mantém fixo o ponto sob o cursor (ou o centro) durante o zoom
      const ox = originX ?? viewport.clientWidth / 2;
      const oy = originY ?? viewport.clientHeight / 2;
      const ratio = clamped / scale;
      const targetLeft = (viewport.scrollLeft + ox) * ratio - ox;
      const targetTop = (viewport.scrollTop + oy) * ratio - oy;

      scale = clamped;
      stage.style.width = `${scale * 100}%`;
      levelLabel.textContent = `Zoom: ${Math.round(scale * 100)}%`;

      viewport.scrollLeft = targetLeft;
      viewport.scrollTop = targetTop;
    }

    function setFullscreen(active) {
      container.classList.toggle("is-fullscreen", active);
      fullButton.textContent = active ? "Sair da Tela Cheia" : "Tela Cheia";
    }

    toolbar.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const action = button.dataset.action;
      if (action === "in") apply(scale * FACTOR);
      if (action === "out") apply(scale / FACTOR);
      if (action === "fit") apply(1);
      if (action === "full") setFullscreen(!container.classList.contains("is-fullscreen"));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && container.classList.contains("is-fullscreen")) setFullscreen(false);
    });

    viewport.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
        const rect = viewport.getBoundingClientRect();
        const next = event.deltaY < 0 ? scale * FACTOR : scale / FACTOR;
        apply(next, event.clientX - rect.left, event.clientY - rect.top);
      },
      { passive: false }
    );

    // Arrastar para mover quando o diagrama excede a área visível
    let drag = null;
    viewport.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || event.target.closest("a, button")) return;
      drag = { x: event.clientX, y: event.clientY, left: viewport.scrollLeft, top: viewport.scrollTop };
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add("is-dragging");
    });
    viewport.addEventListener("pointermove", (event) => {
      if (!drag) return;
      viewport.scrollLeft = drag.left - (event.clientX - drag.x);
      viewport.scrollTop = drag.top - (event.clientY - drag.y);
    });
    const endDrag = (event) => {
      if (!drag) return;
      drag = null;
      viewport.classList.remove("is-dragging");
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    };
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
  }

  function init() {
    document.querySelectorAll(".mermaid-zoom").forEach(setup);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
