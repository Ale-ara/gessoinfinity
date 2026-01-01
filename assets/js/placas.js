const placas = {
  standard: {
    title: "Placa Drywall Standard",
    desc: "Indicada para áreas internas secas.",
    images: [
      "assets/images/placas/standard-1.jpg",
      "assets/images/placas/standard-2.jpg"
    ]
  },
  ru: {
    title: "Placa Drywall RU",
    desc: "Resistente à umidade, ideal para cozinhas e banheiros.",
    images: [
      "assets/images/placas/ru-1.jpg",
      "assets/images/placas/ru-2.jpg"
    ]
  },
  rf: {
    title: "Placa Drywall RF",
    desc: "Resistente ao fogo.",
    images: [
      "assets/images/placas/rf-1.jpg"
    ]
  }
};

const modal = document.getElementById("placaModal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const mainImg = document.getElementById("modalMainImage");
const thumbs = document.getElementById("modalThumbs");

document.querySelectorAll(".placa-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.placa;
    const data = placas[key];

    title.textContent = data.title;
    desc.textContent = data.desc;
    mainImg.src = data.images[0];

    thumbs.innerHTML = "";
    data.images.forEach(img => {
      const t = document.createElement("img");
      t.src = img;
      t.onclick = () => mainImg.src = img;
      thumbs.appendChild(t);
    });

    modal.classList.add("active");
  });
});

document.getElementById("closeModal").onclick = () => {
  modal.classList.remove("active");
};

modal.onclick = e => {
  if (e.target === modal) modal.classList.remove("active");
};
