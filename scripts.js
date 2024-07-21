// Carregamento do AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init(); // Inicializa o AOS para animações na rolagem
});

// Função para configurar os modais
function setupModal(modalId, btnClass) {
  const modal = document.getElementById(modalId);
  const btn = document.querySelector(btnClass);
  const span = modal ? modal.querySelector(".close") : null;

  if (btn) {
    btn.onclick = function () {
      modal.style.display = "block";
    };
  }

  if (span) {
    span.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

// Configuração dos modais
setupModal("aboutMeModal", ".btn-sobre-eu");
setupModal("specialtiesModal", ".btn-especialidades");
setupModal("aboutMeModalEquipe", ".btn-minha-equipe");

// Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const headerContent = document.querySelector(".header-content");

  menuIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    menu.classList.toggle("open");
    headerContent.classList.toggle("menu-open");
  });

  document.addEventListener("click", function (event) {
    const target = event.target;
    const isMenuOpen = menu.classList.contains("open");
    const clickedOutsideMenu =
      !menu.contains(target) && !menuIcon.contains(target);

    if (isMenuOpen && clickedOutsideMenu) {
      menu.classList.remove("open");
      headerContent.classList.remove("menu-open");
    }
  });
});

// Carrossel
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const items = Array.from(document.querySelectorAll(".item"));
  const totalItems = items.length;
  let currentIndex = 0;

  if (gallery && totalItems > 0) {
    // Clonar a primeira e a última imagem para criar um efeito de rotação infinita
    const firstItemClone = items[0].cloneNode(true);
    const lastItemClone = items[totalItems - 1].cloneNode(true);
    gallery.appendChild(firstItemClone);
    gallery.insertBefore(lastItemClone, items[0]);

    const adjustedItems = Array.from(document.querySelectorAll(".item"));
    const itemWidth = adjustedItems[0].offsetWidth;

    // Ajustar a posição inicial do carrossel
    gallery.style.transform = `translateX(-${itemWidth}px)`;

    function updateCarousel() {
      adjustedItems.forEach((item) => {
        item.classList.remove("current-item");
        item.style.opacity = "0.6";
        item.style.transform = "scale(1)";
      });

      const centeredIndex = currentIndex + 1;
      adjustedItems[centeredIndex].classList.add("current-item");
      adjustedItems[centeredIndex].style.opacity = "1";
      adjustedItems[centeredIndex].style.transform = "scale(1.4)";
    }

    function moveToIndex(index) {
      gallery.style.transform = `translateX(-${(index + 1) * itemWidth}px)`;
    }

    function handleTransitionEnd() {
      if (currentIndex === totalItems) {
        currentIndex = 0;
        gallery.style.transition = "none";
        moveToIndex(currentIndex);
        setTimeout(() => {
          gallery.style.transition = "transform 0.5s ease";
        }, 0);
      } else if (currentIndex === -1) {
        currentIndex = totalItems - 1;
        gallery.style.transition = "none";
        moveToIndex(currentIndex + 1);
        setTimeout(() => {
          gallery.style.transition = "transform 0.5s ease";
        }, 0);
      }
    }

    const prevButton = document.querySelector(".arrow-left");
    const nextButton = document.querySelector(".arrow-right");

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = totalItems - 1;
        moveToIndex(currentIndex + 1);
        updateCarousel();
        handleTransitionEnd();
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= totalItems) currentIndex = 0;
        moveToIndex(currentIndex + 1);
        updateCarousel();
        handleTransitionEnd();
      });
    }

    gallery.addEventListener("transitionend", handleTransitionEnd);

    // Inicializar exibição
    updateCarousel();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const mapContainer = document.getElementById("map-container");
  const image = document.querySelector(".image img");

  toggleBtn.addEventListener("click", function () {
    if (mapContainer.classList.contains("collapsed")) {
      mapContainer.classList.remove("collapsed");
      mapContainer.classList.add("expanded");
      toggleBtn.classList.remove("fa-arrow-down");
      toggleBtn.classList.add("fa-arrow-up");

      // Adiciona a animação à imagem quando expandida
      image.classList.add("animate");
    } else {
      mapContainer.classList.remove("expanded");
      mapContainer.classList.add("collapsed");
      toggleBtn.classList.remove("fa-arrow-up");
      toggleBtn.classList.add("fa-arrow-down");

      // Remove a animação da imagem quando recolhida
      image.classList.remove("animate");
    }
  });
});
