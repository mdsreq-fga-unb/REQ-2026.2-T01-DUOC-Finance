/**
 * Barra de Busca e Filtro Rápido de Capítulos na Navbar
 * Projeto: DUOC Finance — Cascata Ágil
 */

(function () {
  function normalizeText(text) {
    return (text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function initNavSearch() {
    // Localiza a navegação primária da barra lateral
    const sidebar = document.querySelector(".md-sidebar--primary .md-nav--primary");
    if (!sidebar) return;

    // Evita duplicação caso já exista
    if (sidebar.querySelector(".nav-search-wrapper")) return;

    const navList = sidebar.querySelector(".md-nav__list");
    if (!navList) return;

    // Cria o elemento da barra de busca
    const wrapper = document.createElement("div");
    wrapper.className = "nav-search-wrapper";
    wrapper.innerHTML = `
      <div class="nav-search-box">
        <svg class="nav-search-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
        </svg>
        <input type="text" id="nav-chapter-search" placeholder="Buscar capítulos..." autocomplete="off" spellcheck="false" />
        <button type="button" id="nav-search-clear" title="Limpar busca" aria-label="Limpar busca" style="display: none;">&times;</button>
      </div>
      <div id="nav-search-count" class="nav-search-count" style="display: none;"></div>
    `;

    sidebar.insertBefore(wrapper, navList);

    const input = wrapper.querySelector("#nav-chapter-search");
    const clearBtn = wrapper.querySelector("#nav-search-clear");
    const countEl = wrapper.querySelector("#nav-search-count");

    // Itens de primeiro nível da navegação
    const topItems = Array.from(navList.children).filter(function (el) {
      return el.classList.contains("md-nav__item");
    });

    function filterChapters(query) {
      const term = normalizeText(query);

      if (!term) {
        clearBtn.style.display = "none";
        countEl.style.display = "none";
        topItems.forEach(function (item) {
          item.style.display = "";
          const subItems = item.querySelectorAll(".md-nav__item");
          subItems.forEach(function (sub) {
            sub.style.display = "";
          });
          // Restaura estado inicial de fechamento se não for o item ativo
          const toggle = item.querySelector("input.md-nav__toggle");
          if (toggle && !item.classList.contains("md-nav__item--active") && !item.querySelector(".md-nav__item--active")) {
            toggle.checked = false;
          }
        });
        return;
      }

      clearBtn.style.display = "inline-flex";
      let matchCount = 0;

      topItems.forEach(function (item) {
        const topLink = item.querySelector(":scope > .md-nav__link");
        const topText = topLink ? normalizeText(topLink.textContent) : "";
        const isTopMatch = topText.includes(term);

        const subItems = Array.from(item.querySelectorAll(".md-nav__list > .md-nav__item"));
        let hasSubMatch = false;

        if (subItems.length > 0) {
          subItems.forEach(function (sub) {
            const subLink = sub.querySelector(".md-nav__link");
            const subText = subLink ? normalizeText(subLink.textContent) : "";
            if (subText.includes(term) || isTopMatch) {
              sub.style.display = "";
              hasSubMatch = true;
              matchCount++;
            } else {
              sub.style.display = "none";
            }
          });
        } else if (isTopMatch) {
          matchCount++;
        }

        if (isTopMatch || hasSubMatch) {
          item.style.display = "";
          // Abre o acordeão automaticamente para exibir o resultado
          const toggle = item.querySelector("input.md-nav__toggle");
          if (toggle) toggle.checked = true;
        } else {
          item.style.display = "none";
        }
      });

      countEl.style.display = "block";
      if (matchCount === 0) {
        countEl.textContent = "Nenhum capítulo ou artefato encontrado";
        countEl.style.color = "#e57373";
      } else {
        countEl.textContent = `${matchCount} ${matchCount === 1 ? "item encontrado" : "itens encontrados"}`;
        countEl.style.color = "var(--duoc-gold)";
      }
    }

    input.addEventListener("input", function (e) {
      filterChapters(e.target.value);
    });

    clearBtn.addEventListener("click", function () {
      input.value = "";
      filterChapters("");
      input.focus();
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        input.value = "";
        filterChapters("");
        input.blur();
      } else if (e.key === "Enter") {
        // Se pressionar Enter, sincroniza com a busca global do MkDocs
        const globalSearchInput = document.querySelector(".md-search__input");
        if (globalSearchInput && input.value.trim()) {
          globalSearchInput.focus();
          globalSearchInput.value = input.value;
          globalSearchInput.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }
    });
  }

  // Inicialização compatível com Material for MkDocs
  if (typeof document$ !== "undefined") {
    document$.subscribe(initNavSearch);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavSearch);
  } else {
    initNavSearch();
  }
})();
