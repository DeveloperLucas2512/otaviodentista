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

  // MODAL SOBRE
  const openButtonSobre = document.querySelectorAll("#open-sobre");
  const modalSobre = document.getElementById("sobre-detalhes");
  const closeButtonSobre = document.querySelector(".fechar-modal-sobre");

  if (openButtonSobre.length > 0 && modalSobre) {
    openButtonSobre.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        if (mobileMenu.classList.contains("active")) {
          mobileMenu.classList.remove("active");
        }
        modalSobre.classList.remove("oculto");
        modalSobre.classList.add("visivel");
        document.body.classList.add("modal-open");
      });
    });

    if (closeButtonSobre) {
      closeButtonSobre.addEventListener("click", function () {
        modalSobre.classList.remove("visivel");
        modalSobre.classList.add("oculto");
        document.body.classList.remove("modal-open");
      });
    }

    window.addEventListener("click", function (event) {
      if (
        modalSobre.classList.contains("visivel") &&
        !modalSobre.contains(event.target) &&
        !event.target.closest("#open-sobre") &&
        !event.target.classList.contains("fechar-modal-sobre")
      ) {
        modalSobre.classList.remove("visivel");
        modalSobre.classList.add("oculto");
        document.body.classList.remove("modal-open");
      }
    });
  }

  // Função para inicializar um carrossel
  function initializeCarousel(carousel) {
    let currentSlide = 0;
    const slides = carousel.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const manualButtons = carousel.querySelectorAll(".manual-btn");

    // Configurar largura dinâmica para o contêiner de slides
    const slidesContainer = carousel.querySelector(".slides");
    slidesContainer.style.width = `${100 * totalSlides}%`;

    // Mostrar o slide atual
    function showSlide(index) {
      // Ajustar o índice para looping circular
      if (index >= totalSlides) {
        currentSlide = 0; // Voltar para o primeiro slide
      } else if (index < 0) {
        currentSlide = totalSlides - 1; // Ir para o último slide
      } else {
        currentSlide = index; // Manter o índice atual
      }

      // Atualizar a posição do carrossel
      const offset = currentSlide * -100;
      slidesContainer.style.transform = `translateX(${offset}%)`;

      // Atualizar o estado dos botões de navegação manual
      manualButtons.forEach((btn, idx) => {
        btn.classList.toggle("active", idx === currentSlide);
      });
    }

    // Inicializar o carrossel
    showSlide(currentSlide);

    // Configurar eventos dos botões de navegação
    const nextButton = carousel.querySelector(".next");
    const prevButton = carousel.querySelector(".prev");

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1); // Ir para o próximo slide
      });
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        showSlide(currentSlide - 1); // Voltar para o slide anterior
      });
    }

    // Configurar eventos dos botões de navegação manual
    manualButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        showSlide(index);
      });
    });
  }

  // Inicializar todos os carrosséis na página
  document.querySelectorAll(".slider").forEach((carousel) => {
    initializeCarousel(carousel);
  });
});
