document.addEventListener("DOMContentLoaded", function () {
  // MENU MOBILE
  const menuIcon = document.querySelector(".menu-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu-links a");

  // Abre/Fecha o Menu Mobile ao clicar no ícone do menu
  if (menuIcon && mobileMenu) {
    menuIcon.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });

    // Fechar o menu ao clicar fora do menu e do ícone
    document.addEventListener("click", function (event) {
      if (
        !mobileMenu.contains(event.target) &&
        !menuIcon.contains(event.target)
      ) {
        mobileMenu.classList.remove("active");
      }
    });

    // Fechar menu ao clicar em qualquer link dentro do menu mobile
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
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
  const openButtonSobre = document.querySelectorAll("#open-sobre");
  const modalSobre = document.getElementById("sobre-detalhes");
  const closeButtonSobre = document.querySelector(".fechar-modal-sobre");

  if (openButtonSobre.length > 0 && modalSobre) {
    // Adiciona evento para cada botão "Sobre Mim" tanto do desktop quanto do mobile
    openButtonSobre.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Previne comportamento padrão do link

        // Fecha o menu mobile, se estiver ativo
        if (mobileMenu.classList.contains("active")) {
          mobileMenu.classList.remove("active");
        }

        // Abre a modal
        modalSobre.classList.remove("oculto");
        modalSobre.classList.add("visivel");
        document.body.classList.add("modal-open"); // Evita scroll da página
      });
    });

    // Fecha a modal "Sobre Mim" pelo botão de fechar
    if (closeButtonSobre) {
      closeButtonSobre.addEventListener("click", function () {
        modalSobre.classList.remove("visivel");
        modalSobre.classList.add("oculto");
        document.body.classList.remove("modal-open");
      });
    }

    // Fechar modal "Sobre" ao clicar fora do conteúdo da modal
    window.addEventListener("click", function (event) {
      if (
        modalSobre.classList.contains("visivel") && // Se a modal estiver visível
        !modalSobre.contains(event.target) && // Se o clique não for dentro da modal
        !event.target.closest("#open-sobre") && // Evitar fechar se clicar no link que abre a modal
        !event.target.classList.contains("fechar-modal-sobre") // Evitar fechar se clicar no botão de fechar
      ) {
        modalSobre.classList.remove("visivel");
        modalSobre.classList.add("oculto");
        document.body.classList.remove("modal-open");
      }
    });
  }

  // CARROSSEL
  const slideContainer = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".scroll-container-img");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const thumbnails = document.querySelectorAll(".thumbnail");

  let currentIndex = 0;
  const totalImages = images.length;
  const imagesPerView = 3;

  // Função para atualizar o carrossel
  function updateCarousel() {
    slideContainer.style.transform = `translateX(${
      -(currentIndex * 100) / imagesPerView
    }%)`;

    // Atualiza o estado das miniaturas
    thumbnails.forEach((thumbnail, index) => {
      if (index === currentIndex % totalImages) {
        thumbnail.classList.add("active");
      } else {
        thumbnail.classList.remove("active");
      }
    });
  }

  // Evento para o botão "Próximo"
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    });
  }

  // Evento para o botão "Anterior"
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
    });
  }

  // Evento para clicar nas miniaturas
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Inicializa o carrossel na posição correta
  updateCarousel();
});
