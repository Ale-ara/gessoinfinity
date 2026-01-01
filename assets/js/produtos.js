document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".produto-card");
  const filtros = document.querySelectorAll(".filtro-btn");
  const filtroWrapper = document.querySelector(".filtro");
  const filtroToggle = document.getElementById("filtroToggle");

  if (!cards.length || !filtros.length) return;

  /* =========================
     FILTRAR PRODUTOS
  ========================= */
  function filtrarProdutos(categoria, atualizarURL = true) {

    cards.forEach(card => {
      const match =
        categoria === "todos" ||
        card.dataset.category === categoria;

      card.style.display = match ? "flex" : "none";
    });

    filtros.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === categoria);
    });

    if (atualizarURL) {
      atualizarURLFiltro(categoria);
    }

    animarCardsVisiveis();
  }

  /* =========================
     URL DINÂMICA (SEO)
  ========================= */
  function atualizarURLFiltro(categoria) {
    const url =
      categoria === "todos"
        ? "produtos.html"
        : `produtos.html?categoria=${categoria}`;

    history.pushState({}, "", url);
  }

  /* =========================
     ANIMAÇÃO PREMIUM (STAGGER)
  ========================= */
  function animarCardsVisiveis() {
    let delay = 0;

    cards.forEach(card => {
      card.classList.remove("show");
      card.style.transitionDelay = "0ms";
    });

    setTimeout(() => {
      cards.forEach(card => {
        if (card.style.display !== "none") {
          card.style.transitionDelay = `${delay}ms`;
          card.classList.add("show");
          delay += 80;
        }
      });
    }, 40);
  }

  /* =========================
     CLIQUE NOS FILTROS
  ========================= */
  filtros.forEach(btn => {
    btn.addEventListener("click", () => {
      const categoria = btn.dataset.filter;
      filtrarProdutos(categoria);

      // fecha accordion no mobile
      if (filtroWrapper && filtroWrapper.classList.contains("active")) {
        filtroWrapper.classList.remove("active");
      }
    });
  });

  /* =========================
     FILTRO VIA URL
  ========================= */
  const params = new URLSearchParams(window.location.search);
  const categoriaURL = params.get("categoria") || "todos";

  filtrarProdutos(categoriaURL, false);

  /* =========================
     ACCORDION MOBILE
  ========================= */
  if (filtroToggle && filtroWrapper) {
    filtroToggle.addEventListener("click", () => {
      filtroWrapper.classList.toggle("active");
    });
  }

});
