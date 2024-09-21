document.addEventListener("DOMContentLoaded", function () {
  const detailsElements = document.querySelectorAll("details");
  const sobreLink = document.querySelector('a[href="#quemSou"]');
  const detailsOtavio = document.querySelector("summary.saibaMaisBtn");
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");

  const openModalOrtognaticaButton = document.querySelector(
    "#open-modal-ortognatica"
  );
  const closeModalButtons = document.querySelectorAll(
    ".close-modal-ortognatica"
  );

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove("active");
    }
  });

  const modalOrtognatica = document.querySelector("#modal-ortognatica-content");
  const fade = document.querySelector(".fade");
  const imgContainers = document.querySelectorAll(".img-container");

  // Função para alternar a visibilidade do modal e do fade
  const toggleModalOrtognatica = (modal) => {
    if (modal) {
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
  };

  // Evento de clique para abrir o modal de Ortognática
  if (openModalOrtognaticaButton) {
    openModalOrtognaticaButton.addEventListener("click", () =>
      toggleModalOrtognatica(modalOrtognatica)
    );
  }

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

  // Evento para ampliar a imagem ao clicar
  imgContainers.forEach((imgContainer) => {
    imgContainer.addEventListener("click", function () {
      const img = this.querySelector("img");
      if (img) {
        const overlay = document.createElement("div");
        overlay.classList.add("dark-overlay");

        const enlargedImg = document.createElement("img");
        enlargedImg.src = img.src;
        enlargedImg.classList.add("responsive-img");
        enlargedImg.style.maxWidth = "90%";
        enlargedImg.style.maxHeight = "90%";
        enlargedImg.style.position = "fixed";
        enlargedImg.style.top = "50%";
        enlargedImg.style.left = "50%";
        enlargedImg.style.transform = "translate(-50%, -50%)";
        enlargedImg.style.zIndex = "1001";
        enlargedImg.style.borderRadius = "8px";

        document.body.appendChild(overlay);
        document.body.appendChild(enlargedImg);

        overlay.addEventListener("click", function () {
          document.body.removeChild(overlay);
          document.body.removeChild(enlargedImg);
        });
      }
    });
  });

  // Evento para imagens dentro de um container de rolagem
  document.querySelectorAll(".scroll-container-img img").forEach((img) => {
    img.addEventListener("click", function () {
      const modal = document.createElement("div");
      modal.classList.add("modal-img");
      modal.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
      document.body.appendChild(modal);

      // Exibir o modal
      setTimeout(() => {
        modal.classList.add("active");
      }, 10);

      // Fechar o modal ao clicar nele
      modal.addEventListener("click", function () {
        modal.classList.remove("active");
        setTimeout(() => {
          document.body.removeChild(modal);
        }, 300);
      });
    });
  });

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

  //////////////////////////////////////////////////////////////////////////// correção js

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});
