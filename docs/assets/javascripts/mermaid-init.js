(() => {
  let isRendering = false;

  function renderMermaid(isSchemeChange = false) {
    if (typeof mermaid === "undefined" || isRendering) return;

    const isDark = document.body.getAttribute("data-md-color-scheme") === "slate";
    const nodes = document.querySelectorAll(".mermaid");
    if (!nodes.length) return;

    isRendering = true;

    try {
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? "dark" : "default",
        securityLevel: "loose"
      });

      nodes.forEach((node) => {
        if (!node.hasAttribute("data-mermaid-code")) {
          node.setAttribute("data-mermaid-code", node.textContent);
        } else if (isSchemeChange) {
          node.removeAttribute("data-processed");
          node.innerHTML = `<code>${node.getAttribute("data-mermaid-code")}</code>`;
        }
      });

      mermaid.run({
        nodes: Array.from(nodes)
      }).catch((err) => {
        console.warn("Mermaid run error:", err);
      }).finally(() => {
        isRendering = false;
      });
    } catch (e) {
      console.warn("Mermaid init error:", e);
      isRendering = false;
    }
  }

  // Subscribe to MkDocs instant navigation
  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      renderMermaid(false);
    });
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      renderMermaid(false);
    });
  }

  // Observe theme palette changes (light/dark mode toggle)
  let currentScheme = document.body.getAttribute("data-md-color-scheme");
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes" && mutation.attributeName === "data-md-color-scheme") {
        const newScheme = document.body.getAttribute("data-md-color-scheme");
        if (newScheme !== currentScheme) {
          currentScheme = newScheme;
          renderMermaid(true);
        }
        break;
      }
    }
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["data-md-color-scheme"]
  });
})();
