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

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const manualButtons = document.querySelectorAll(".manual-btn");

  // Função para mostrar o slide atual
  function showSlide(index) {
    if (index >= totalSlides) {
      currentSlide = 0; // Volta ao primeiro slide se passar do último
    } else if (index < 0) {
      currentSlide = totalSlides - 1; // Vai para o último slide se estiver antes do primeiro
    } else {
      currentSlide = index;
    }

    const slidesContainer = document.querySelector(".slides");
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Atualiza o botão de navegação manual ativo
    manualButtons.forEach((btn, idx) => {
      if (idx === currentSlide) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

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

  // Inicializar com o primeiro slide
  showSlide(currentSlide);
});
