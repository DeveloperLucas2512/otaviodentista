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
        modalSobre.classList.contains("visivel") &&
        !modalSobre.contains(event.target) &&
        !event.target.classList.contains("menu-link") && // evita fechar se clicar no link que abre a modal
        event.target !== modalSobre
      ) {
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

  // Evento de clique para o link "Home"
  const clickHome = document.getElementById("home-link");
  if (clickHome) {
    clickHome.addEventListener("click", function () {
      // Move o scroll para o topo de forma suave
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Após uma pequena pausa, recarrega a página
      setTimeout(() => {
        window.location.reload();
      }, 30); // Tempo de 30ms para garantir que o scroll seja processado
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
