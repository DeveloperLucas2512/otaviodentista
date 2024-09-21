document.addEventListener("DOMContentLoaded", function () {
  const detailsElements = document.querySelectorAll("details");
  const sobreLink = document.querySelector('a[href="#quemSou"]');
  const detailsOtavio = document.querySelector("summary.saibaMaisBtn");
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const images = document.querySelectorAll(".scroll-container-img");
  const overlay = document.getElementById("overlay");
  const openModalOrtognaticaButton = document.querySelector(
    "#open-modal-ortognatica"
  );
  const modalOrtognatica = document.querySelector("#modal-ortognatica-content");
  const closeModalButtons = document.querySelectorAll(
    ".close-modal-ortognatica"
  );
  const fade = document.querySelector("#fade-ortognatica");

  const toggleModalOrtognatica = (modal) => {
    if (modal) {
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
      modal.style.opacity = modal.classList.contains("hide") ? "0" : "1";
      fade.style.opacity = fade.classList.contains("hide") ? "0" : "1";
    }
  };

  if (openModalOrtognaticaButton) {
    openModalOrtognaticaButton.addEventListener("click", () =>
      toggleModalOrtognatica(modalOrtognatica)
    );

    closeModalButtons.forEach((button) => {
      button.addEventListener("click", () =>
        toggleModalOrtognatica(modalOrtognatica)
      );
    });

    // Fecha o modal ao clicar no fundo escuro (fade)
    fade.addEventListener("click", () =>
      toggleModalOrtognatica(modalOrtognatica)
    );
  }

  // Evento de clique para fechar o modal ao clicar no fundo escuro (fade)
  fade.addEventListener("click", () =>
    toggleModalOrtognatica(modalOrtognatica)
  );

  //menu cabeçalho exibir e fechar em modo mobile
  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove("active");
    }
  });

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      // Remove expand de todas as imagens
      images.forEach((img) => img.classList.remove("expand"));

      // Adiciona classe expand à imagem clicada
      image.classList.add("expand");

      // Ativa o overlay para escurecer o fundo
      overlay.classList.add("active");
    });
  });

  // Fecha a imagem expandida ao clicar no overlay
  overlay.addEventListener("click", function () {
    images.forEach((img) => img.classList.remove("expand"));
    overlay.classList.remove("active");
  });

  // Evento para o botão "Sobre"
  if (sobreLink && detailsOtavio) {
    sobreLink.addEventListener("click", function (event) {
      // Evita o comportamento padrão do link
      event.preventDefault();

      // Força a abertura do <details> do Dr. Otávio
      const parentDetail = detailsOtavio.closest("details");
      if (parentDetail) {
        parentDetail.setAttribute("open", "open");

        // Rola a página até a imagem do Dr. Otávio
        detailsOtavio.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  // Função para fechar todos os <details>
  function closeAllDetails() {
    detailsElements.forEach((detail) => {
      detail.removeAttribute("open");
    });
  }

  // Fecha o modal ao clicar fora (na backdrop)
  const modalBackdrop = document.querySelector(".modal-backdrop");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", function () {
      closeAllDetails();
    });
  }

  // Fecha o modal quando um <summary> for clicado novamente
  detailsElements.forEach((detail) => {
    const summary = detail.querySelector("summary");

    // Adiciona um event listener ao <summary>
    if (summary) {
      summary.addEventListener("click", function (event) {
        // Evita o comportamento padrão do summary (abre/fecha)
        event.preventDefault();

        // Fecha todos os <details> antes de abrir o clicado
        const isOpen = detail.hasAttribute("open");
        closeAllDetails();

        // Se o detalhe não estava aberto, abre-o
        if (!isOpen) {
          detail.setAttribute("open", "open");
        }
      });
    }
  });

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});
