document.addEventListener("DOMContentLoaded", function () {
  // MENU MOBILE
  const menuIcon = document.querySelector(".mobile-menu-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Abre/Fecha o Menu Mobile ao clicar no ícone do menu
  if (menuIcon && mobileMenu) {
    menuIcon.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Fechar o menu ao clicar fora do menu e do ícone
    document.addEventListener("click", function (event) {
      if (
        !mobileMenu.contains(event.target) &&
        !menuIcon.contains(event.target)
      ) {
        mobileMenu.classList.add("hidden");
      }
    });
  }

  // MODAL ORTOGNATICA
  const openModalOrtognaticaButton = document.querySelector(
    "#open-modal-ortognatica"
  );
  const modalOrtognatica = document.querySelector("#modal-ortognatica-content");
  const fade = document.querySelector("#fade-ortognatica");

  // Função para abrir e fechar a modal
  const toggleModal = (modal, fade) => {
    if (modal) {
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
  };

  // Evento para abrir/fechar a modal Ortognatica
  if (openModalOrtognaticaButton && modalOrtognatica && fade) {
    openModalOrtognaticaButton.addEventListener("click", () =>
      toggleModal(modalOrtognatica, fade)
    );

    fade.addEventListener("click", () => toggleModal(modalOrtognatica, fade));

    const closeModalButtons = document.querySelectorAll(
      ".close-modal-ortognatica"
    );
    closeModalButtons.forEach((button) => {
      button.addEventListener("click", () =>
        toggleModal(modalOrtognatica, fade)
      );
    });
  }

  // MODAL SOBRE
  const openButtonSobre = document.getElementById("open-sobre");
  const modalSobre = document.getElementById("sobre-detalhes");
  const closeButtonSobre = document.querySelector(".fechar-modal-sobre");

  if (openButtonSobre && modalSobre) {
    openButtonSobre.addEventListener("click", function () {
      modalSobre.classList.remove("oculto");
      modalSobre.classList.add("visivel");
      document.body.classList.add("modal-open"); // Evita scroll da página
    });

    if (closeButtonSobre) {
      closeButtonSobre.addEventListener("click", function () {
        modalSobre.classList.remove("visivel");
        modalSobre.classList.add("oculto");
        document.body.classList.remove("modal-open");
      });
    }

    // Fechar modal "Sobre" ao clicar fora do conteúdo da modal
    window.addEventListener("click", function (event) {
      if (event.target === modalSobre) {
        modalSobre.classList.remove("visivel");
        modalSobre.classList.add("oculto");
        document.body.classList.remove("modal-open");
      }
    });
  }

  // CARROSSEL
  const slideContainer = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".scroll-container-img");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const thumbnails = document.querySelectorAll(".thumbnail");
  let currentIndex = 0;
  const totalImages = images.length;
  const imagesPerView = 3;

  // Atualiza a posição do carrossel
  function updateCarousel() {
    slideContainer.style.transform = `translateX(${
      -currentIndex * (100 / imagesPerView)
    }%)`;

    thumbnails.forEach((thumbnail, index) => {
      if (index >= currentIndex && index < currentIndex + imagesPerView) {
        thumbnail.classList.add("active");
      } else {
        thumbnail.classList.remove("active");
      }
    });
  }

  // Evento para o botão "Próximo"
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + imagesPerView) % totalImages;
      updateCarousel();
    });
  }

  // Evento para o botão "Anterior"
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - imagesPerView + totalImages) % totalImages;
      updateCarousel();
    });
  }

  // Evento para clicar nas miniaturas
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      currentIndex = index - (index % imagesPerView);
      updateCarousel();
    });
  });

  // Inicializa o carrossel com os primeiros slides ativos
  updateCarousel();
});
