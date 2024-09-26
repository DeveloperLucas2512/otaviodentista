document.addEventListener("DOMContentLoaded", function () {
  const detailsElements = document.querySelectorAll("details");
  
  const detailsOtavio = document.querySelector("summary.saibaMaisBtn");
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const images = document.querySelectorAll(".scroll-container-img");
  const overlay = document.getElementById("overlay");
  const openModalOrtognaticaButton = document.querySelector("#open-modal-ortognatica");
  const modalOrtognatica = document.querySelector("#modal-ortognatica-content");
  const closeModalButtons = document.querySelectorAll(".close-modal-ortognatica");
  const fade = document.querySelector("#fade-ortognatica");
  const modalSobre = document.getElementById("sobre-modal");
  const closeButton = document.querySelector(".close-button");
  const sobreLink = document.getElementById("sobre-link");

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
  if (sobreLink && modalSobre) {
    sobreLink.addEventListener("click", function (event) {
      event.preventDefault(); // Evita o comportamento padrão do link
      modalSobre.style.display = "flex"; // Abre o modal
    });
  }

  // Evento para fechar o modal
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      modalSobre.style.display = "none"; // Fecha o modal
    });
  }

  // Fecha o modal se o usuário clicar fora do conteúdo
  window.addEventListener("click", function (event) {
    if (event.target === modalSobre) {
      modalSobre.style.display = "none"; // Fecha o modal
    }
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

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href") ? this.getAttribute("href").substring(1) : null;
  
      // Check if it's the "Sobre" link
      if (this.id === "sobre-link") {
        event.preventDefault(); // Prevent the default action
        modalSobre.style.display = "block"; // Open the modal
      } else if (targetId) {
        event.preventDefault(); // Prevent the default action for other links
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" }); // Scroll to the target
      }
    });
  });


  // Função para expandir a imagem e escurecer o fundo
  images.forEach(function (img) {
    img.addEventListener("click", function () {
      // Verifica se há uma imagem já expandida, e se sim, a minimiza
      if (expandedImage && expandedImage !== img) {
        expandedImage.parentElement.classList.remove("active");
      }

      // Expande a imagem clicada
      img.parentElement.classList.add("active");
      overlay.style.display = "block";
      document.body.classList.add("no-scroll");
      expandedImage = img;
    });

    overlay.addEventListener("click", function () {
      if (expandedImage) {
        expandedImage.parentElement.classList.remove("active");
        overlay.style.display = "none";
        document.body.classList.remove("no-scroll");
        expandedImage = null;
      }
    });
  });
});
