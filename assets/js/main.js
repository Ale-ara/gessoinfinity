/* ================= HERO SLIDER ================= */
const heroSlides = document.querySelectorAll(".hero-slide");
let heroIndex = 0;

if (heroSlides.length > 0) {
  setInterval(() => {
    heroSlides[heroIndex].classList.remove("active");
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add("active");
  }, 6000);
}

/* ================= MENU MOBILE ================= */
const menuToggle = document.getElementById("menuToggle");
const menuMobile = document.getElementById("menuMobile");
const menuOverlay = document.getElementById("menuOverlay");

if (menuToggle && menuMobile && menuOverlay) {
  menuToggle.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  });

  menuOverlay.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    menuOverlay.classList.remove("active");
  });

  menuMobile.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuMobile.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  });
}

/* ================= DROPDOWN PRODUTOS MOBILE ================= */
const mobileProductsBtn = document.getElementById("mobileProductsBtn");
const mobileDropdown = document.querySelector(".menu-dropdown");

if (mobileProductsBtn && mobileDropdown) {
  mobileProductsBtn.addEventListener("click", () => {
    mobileDropdown.classList.toggle("active");
  });
}

/* ================= HEADER SHRINK ================= */
const header = document.querySelector(".header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("shrink", window.scrollY > 80);
  });
}

/* ================= FILTRO DE PRODUTOS ================= */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".produto-card");
  const filtros = document.querySelectorAll(".filtro-btn");

  if (!cards.length || !filtros.length) return;

  function filtrar(categoria) {
    cards.forEach(card => {
      if (categoria === "todos" || card.dataset.category === categoria) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });

    filtros.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === categoria);
    });
  }

  filtros.forEach(btn => {
    btn.addEventListener("click", () => {
      filtrar(btn.dataset.filter);
    });
  });

  // 🔥 MOSTRA TODOS AO CARREGAR
  filtrar("todos");
});

/* ================= FAQ ================= */
const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length > 0) {
  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!btn || !answer) return;

    btn.addEventListener("click", () => {
      item.classList.toggle("active");
      answer.style.maxHeight = item.classList.contains("active")
        ? answer.scrollHeight + "px"
        : null;
    });
  });
}

/* ================= LOADER ================= */
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");
  if (loader) loader.classList.remove("active");

  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("http") &&
      !link.hasAttribute("target")
    ) {
      link.addEventListener("click", () => {
        loader.classList.add("active");
      });
    }
  });
});

/* ================= ANIMAÇÃO DOS PRODUTOS ================= */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".produto-card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 80);
  });
});

/* ================= ANIMAÇÃO AO CLICAR NO PRODUTO ================= */
document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".produto-card");

  productCards.forEach(card => {
    card.addEventListener("click", event => {
      event.preventDefault(); // impede navegação imediata

      const link = card.getAttribute("href");

      card.classList.add("exiting");

      // tempo da animação antes de navegar
      setTimeout(() => {
        window.location.href = link;
      }, 250);
    });
  });
});


/* ================= WHATSAPP BALÃO AUTOMÁTICO ================= */
document.addEventListener("DOMContentLoaded", () => {
  const whatsapp = document.querySelector(".whatsapp-fixo");
  if (!whatsapp) return;

  // mostra o balão ao carregar
  setTimeout(() => {
    whatsapp.classList.add("show-balao");
  }, 1500);

  // esconde depois de alguns segundos
  setTimeout(() => {
    whatsapp.classList.remove("show-balao");
  }, 6000);
});


/* ================= ANIMAÇÃO AO SCROLL ================= */
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-bottom");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  reveals.forEach(el => observer.observe(el));
});

/* ================= FILTRO PRODUTOS (MOBILE) ================= */
document.addEventListener("DOMContentLoaded", () => {
  const filtro = document.querySelector(".filtro");
  const filtroToggle = document.getElementById("filtroToggle");

  if (!filtro || !filtroToggle) return;

  filtroToggle.addEventListener("click", () => {
    filtro.classList.toggle("active");
  });
});

