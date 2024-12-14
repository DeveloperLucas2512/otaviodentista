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

  // Configurar largura dinâmica para o contêiner de slides
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.width = `${100 * totalSlides}%`;

  // Mostrar o slide atual
  function showSlide(index) {
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    const offset = currentSlide * -100;
    slidesContainer.style.transform = `translateX(${offset}%)`;

    manualButtons.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === currentSlide);
    });
  }

  showSlide(currentSlide);

  document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  manualButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      showSlide(index);
    });
  });
});
