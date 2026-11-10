/**
 * Navegacao Universal por Ancoras e Filtro Interativo
 * DUOC Finance - Cascata Agil
 */
(() => {
  /**
   * Localiza o elemento <details> associado a um alvo (seja ele o proprio details,
   * um elemento interno, ou uma tag <a> de ancora imediatamente precedente).
   */
  function findTargetDetails(target) {
    if (!target) return null;
    if (target.tagName === "DETAILS") return target;
    if (target.closest("details")) return target.closest("details");

    // Procura irmao seguinte que seja details
    let sibling = target.nextElementSibling;
    while (sibling) {
      if (sibling.tagName === "DETAILS") return sibling;
      sibling = sibling.nextElementSibling;
    }

    // Se estiver envelopado em <p> (padrao gerado pelo Markdown do MkDocs)
    let parentSibling = target.parentElement ? target.parentElement.nextElementSibling : null;
    while (parentSibling) {
      if (parentSibling.tagName === "DETAILS") return parentSibling;
      parentSibling = parentSibling.nextElementSibling;
    }

    return null;
  }

  /**
   * Navegacao universal por hash com abertura automatica de cards
   * e posicionamento compensado abaixo do cabecalho fixo.
   */
  function handleUniversalHashNavigation() {
    if (!window.location.hash) return;
    const rawHash = window.location.hash.substring(1);
    const targetId = decodeURIComponent(rawHash).toLowerCase();
    if (!targetId) return;

    // Busca exata pelo ID ou em minusculo
    const target = document.getElementById(targetId) || document.getElementById(rawHash);
    if (!target) return;

    const details = findTargetDetails(target);
    if (details) {
      details.open = true;
      if (details.classList.contains("req-card")) {
        details.classList.remove("req-card-hidden");
      }
    }

    const elementToScroll = details || target;

    setTimeout(() => {
      const headerOffset = 90;
      const elementPosition = elementToScroll.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth"
      });

      elementToScroll.classList.add("req-card-highlight");
      setTimeout(() => elementToScroll.classList.remove("req-card-highlight"), 2500);
    }, 60);
  }

  /**
   * Filtro e Pesquisa Interativa para o Catalogo Geral de Requisitos (RF, RN e RNF)
   */
  function initRequirementsFilter() {
    const searchInput = document.getElementById("req-search-input");
    const searchClearBtn = document.getElementById("req-search-clear");
    const toggleFiltersBtn = document.getElementById("req-toggle-filters-btn");
    const filtersDrawer = document.getElementById("req-filters-drawer");
    const filterTabBtns = document.querySelectorAll(".req-filter-tab-btn");
    const filterTabPanes = document.querySelectorAll(".req-filter-tab-pane");
    const filterPills = document.querySelectorAll(".req-filter-pill");
    const reqCards = document.querySelectorAll(".req-card[data-type], .req-card.req-card-rf, .req-card.req-card-rn, .req-card.req-card-rnf");
    const countBadge = document.getElementById("req-count-badge");
    const noResults = document.getElementById("req-no-results");
    const expandAllBtn = document.getElementById("req-expand-all");
    const collapseAllBtn = document.getElementById("req-collapse-all");

    if (reqCards.length === 0) return;

    let currentTypeFilter = "all";
    let currentOeFilter = "all";
    let currentMvpFilter = "all";
    let currentQuadFilter = "all";
    let searchQuery = "";

    function filterCards() {
      const q = searchQuery.toLowerCase().trim();
      const terms = q.split(/\s+/).filter(Boolean);
      let visibleCount = 0;
      let countRf = 0;
      let countRn = 0;
      let countRnf = 0;

      reqCards.forEach((card) => {
        const text = (card.getAttribute("data-text") || card.getAttribute("data-search-text") || card.textContent).toLowerCase();
        const type = (card.getAttribute("data-type") || (card.classList.contains("req-card-rf") ? "rf" : card.classList.contains("req-card-rn") ? "rn" : card.classList.contains("req-card-rnf") ? "rnf" : "")).toLowerCase();
        const oe = (card.getAttribute("data-oe") || "").toLowerCase();
        const mvp = (card.getAttribute("data-mvp") || "").toLowerCase();
        const quad = (card.getAttribute("data-quad") || "").toLowerCase();

        const matchesSearch = terms.length === 0 || terms.every((term) => text.includes(term));
        const matchesType = currentTypeFilter === "all" || type === currentTypeFilter;
        const matchesOe = currentOeFilter === "all" || oe === currentOeFilter;
        const matchesMvp = currentMvpFilter === "all" || mvp === currentMvpFilter;
        const matchesQuad = currentQuadFilter === "all" || quad === currentQuadFilter;

        if (matchesSearch && matchesType && matchesOe && matchesMvp && matchesQuad) {
          card.classList.remove("req-card-hidden");
          visibleCount++;
          if (type === "rf") countRf++;
          else if (type === "rn") countRn++;
          else if (type === "rnf") countRnf++;

          if (terms.length > 0 && q.length >= 2) {
            card.open = true;
          }
        } else {
          card.classList.add("req-card-hidden");
        }
      });

      if (countBadge) {
        countBadge.textContent = `${countRf} RFs, ${countRn} RNs e ${countRnf} RNFs`;
      }

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
      }
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        filterCards();
      });
    }

    if (searchClearBtn && searchInput) {
      searchClearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        filterCards();
        searchInput.focus();
      });
    }

    if (toggleFiltersBtn && filtersDrawer) {
      toggleFiltersBtn.addEventListener("click", () => {
        const isOpen = filtersDrawer.style.display !== "none";
        filtersDrawer.style.display = isOpen ? "none" : "block";
        toggleFiltersBtn.classList.toggle("active", !isOpen);
        toggleFiltersBtn.setAttribute("aria-expanded", !isOpen ? "true" : "false");
      });
    }

    filterTabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-filter-tab");
        if (!targetTab) return;

        filterTabBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        filterTabPanes.forEach((pane) => {
          if (pane.getAttribute("data-filter-pane") === targetTab) {
            pane.classList.add("active");
          } else {
            pane.classList.remove("active");
          }
        });
      });
    });

    filterPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const type = pill.getAttribute("data-filter-type");
        const val = pill.getAttribute("data-filter") || "all";
        const parentPane = pill.closest(".req-filter-tab-pane");

        if (parentPane) {
          parentPane.querySelectorAll(".req-filter-pill").forEach((p) => p.classList.remove("active"));
        }
        pill.classList.add("active");

        if (type === "type") {
          currentTypeFilter = val;
        } else if (type === "oe") {
          currentOeFilter = val;
        } else if (type === "mvp") {
          currentMvpFilter = val;
        } else if (type === "quad") {
          currentQuadFilter = val;
        }

        filterCards();
      });
    });

    if (expandAllBtn) {
      expandAllBtn.addEventListener("click", () => {
        reqCards.forEach((card) => {
          if (!card.classList.contains("req-card-hidden")) {
            card.open = true;
          }
        });
      });
    }

    if (collapseAllBtn) {
      collapseAllBtn.addEventListener("click", () => {
        reqCards.forEach((card) => {
          card.open = false;
        });
      });
    }
  }

  /**
   * Alternancia de Abas em qualquer Card Expansivel (.req-card)
   */
  function initCardTabs() {
    const cards = document.querySelectorAll(".req-card");
    cards.forEach((card) => {
      const tabBtns = card.querySelectorAll(".req-tab-btn");
      tabBtns.forEach((btn) => {
        if (btn.getAttribute("data-tab-init")) return;
        btn.setAttribute("data-tab-init", "true");

        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();

          const targetPane = btn.getAttribute("data-target");
          if (!targetPane) return;

          tabBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          const panes = card.querySelectorAll(".req-tab-pane");
          panes.forEach((pane) => {
            if (pane.getAttribute("data-pane") === targetPane) {
              pane.classList.add("active");
            } else {
              pane.classList.remove("active");
            }
          });
        });
      });
    });
  }

  // Delegacao global de cliques em ancoras de hash na mesma pagina
  document.addEventListener("click", (e) => {
    const anchor = e.target.closest('a[href*="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href) return;

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const pathPart = href.substring(0, hashIndex);
    const hashPart = href.substring(hashIndex);

    // Se o link for para a mesma pagina
    if (!pathPart || window.location.pathname.endsWith(pathPart) || pathPart === window.location.pathname) {
      if (hashPart && hashPart.length > 1) {
        e.preventDefault();
        history.pushState(null, "", hashPart);
        handleUniversalHashNavigation();
      }
    }
  });

  window.addEventListener("hashchange", handleUniversalHashNavigation);

  // Inicializacao com suporte ao carregamento instantaneo do Material for MkDocs
  function initAll() {
    initRequirementsFilter();
    initCardTabs();
    handleUniversalHashNavigation();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      initAll();
    });
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
