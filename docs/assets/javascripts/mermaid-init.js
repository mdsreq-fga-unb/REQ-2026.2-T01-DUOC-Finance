(() => {
  let isRendering = false;

  function getThemeConfig(isDark) {
    if (isDark) {
      return {
        theme: "base",
        themeVariables: {
          darkMode: true,
          background: "transparent",
          primaryColor: "#1e293b",
          primaryTextColor: "#f1f5f9",
          primaryBorderColor: "#daa520",
          secondaryColor: "#0f172a",
          secondaryTextColor: "#e2e8f0",
          secondaryBorderColor: "#475569",
          tertiaryColor: "#1e293b",
          tertiaryTextColor: "#f8fafc",
          lineColor: "#94a3b8",
          textColor: "#e2e8f0",
          mainBkg: "#1e293b",
          nodeBorder: "#daa520",
          clusterBkg: "rgba(255, 255, 255, 0.03)",
          clusterBorder: "#475569",
          actorBkg: "#1e293b",
          actorBorder: "#daa520",
          actorTextColor: "#f8fafc",
          signalColor: "#cbd5e1",
          signalTextColor: "#f8fafc",
          noteBkgColor: "#334155",
          noteTextColor: "#f8fafc",
          fontFamily: "inherit"
        }
      };
    }
    return {
      theme: "base",
      themeVariables: {
        darkMode: false,
        background: "transparent",
        primaryColor: "#f8fafc",
        primaryTextColor: "#0f172a",
        primaryBorderColor: "#971828",
        secondaryColor: "#fffbeb",
        secondaryTextColor: "#1e293b",
        secondaryBorderColor: "#daa520",
        tertiaryColor: "#f1f5f9",
        tertiaryTextColor: "#0f172a",
        lineColor: "#475569",
        textColor: "#1e293b",
        mainBkg: "#ffffff",
        nodeBorder: "#971828",
        clusterBkg: "rgba(15, 23, 42, 0.02)",
        clusterBorder: "#cbd5e1",
        actorBkg: "#ffffff",
        actorBorder: "#971828",
        actorTextColor: "#0f172a",
        signalColor: "#334155",
        signalTextColor: "#0f172a",
        noteBkgColor: "#fef3c7",
        noteTextColor: "#1e293b",
        fontFamily: "inherit"
      }
    };
  }

  function renderMermaid(isSchemeChange = false) {
    if (typeof mermaid === "undefined" || isRendering) return;

    const isDark = document.body.getAttribute("data-md-color-scheme") === "slate";
    const nodes = document.querySelectorAll(".mermaid");
    if (!nodes.length) return;

    isRendering = true;

    try {
      const cfg = getThemeConfig(isDark);
      mermaid.initialize({
        startOnLoad: false,
        theme: cfg.theme,
        themeVariables: cfg.themeVariables,
        securityLevel: "loose"
      });

      nodes.forEach((node) => {
        if (!node.hasAttribute("data-mermaid-code")) {
          node.setAttribute("data-mermaid-code", node.textContent);
        } else if (isSchemeChange) {
          node.removeAttribute("data-processed");
          node.textContent = node.getAttribute("data-mermaid-code");
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

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      renderMermaid(false);
    });
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      renderMermaid(false);
    });
  }

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
