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

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const manualButtons = document.querySelectorAll(".manual-btn");

  // Função para mostrar o slide atual
  function showSlide(index) {
    // Corrige o índice do slide para garantir que ele esteja sempre no intervalo correto
    if (index >= totalSlides) {
      currentSlide = 0; // Volta ao primeiro slide se passar do último
    } else if (index < 0) {
      currentSlide = totalSlides - 1; // Vai para o último slide se estiver antes do primeiro
    } else {
      currentSlide = index;
    }

    // Atualiza a posição dos slides
    const offset = currentSlide * -100;
    document.querySelector(
      ".slides"
    ).style.transform = `translateX(${offset}%)`;

    // Atualiza o botão de navegação manual ativo
    manualButtons.forEach((btn, idx) => {
      if (idx === currentSlide) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Inicializar a posição dos slides
  showSlide(currentSlide);

  // Setas de navegação
  document.querySelector(".next").addEventListener("click", function () {
    showSlide(currentSlide + 1);
  });

  document.querySelector(".prev").addEventListener("click", function () {
    showSlide(currentSlide - 1);
  });

  // Botões de navegação manual
  manualButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      showSlide(index);
    });
  });
});
