document$.subscribe(() => {
  if (typeof mermaid !== "undefined") {
    const isDark = document.body.getAttribute("data-md-color-scheme") === "slate";
    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? "dark" : "default",
      securityLevel: "loose"
    });
    mermaid.run({
      nodes: document.querySelectorAll(".mermaid")
    });
  }
});
