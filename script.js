document.addEventListener("DOMContentLoaded", function () {
  const detailsElements = document.querySelectorAll("details");
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const images = document.querySelectorAll(".scroll-container-img");
  const overlay = document.getElementById("overlay");
  const openModalOrtognaticaButton = document.querySelector("#open-modal-ortognatica");
  const modalOrtognatica = document.querySelector("#modal-ortognatica-content");
  const closeModalButtons = document.querySelectorAll(".close-modal-ortognatica");
  const fade = document.querySelector("#fade-ortognatica");
  const modalSobre = document.getElementById("sobre-detalhes");
  const closeButtonSobre = document.querySelector('.fechar-modal-sobre');
  const menuLinks = document.querySelectorAll(".menu-link");
  const openButtonSobre = document.getElementById('open-sobre');
  let expandedImage = null; // Variável para controlar imagem expandida

  const toggleModalOrtognatica = (modal) => {
    if (modal) {
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
      modal.style.opacity = modal.classList.contains("hide") ? "0" : "1";
      fade.style.opacity = fade.classList.contains("hide") ? "0" : "1";
    }
  };

  if (openModalOrtognaticaButton) {
    openModalOrtognaticaButton.addEventListener("click", () => toggleModalOrtognatica(modalOrtognatica));

    closeModalButtons.forEach((button) => {
      button.addEventListener("click", () => toggleModalOrtognatica(modalOrtognatica));
    });

    fade.addEventListener("click", () => toggleModalOrtognatica(modalOrtognatica));
  }

  // Controle do modal "Sobre"
  if (openButtonSobre && modalSobre) {
    openButtonSobre.addEventListener('click', function () {
      modalSobre.classList.remove('oculto');
      modalSobre.classList.add('visivel');
      document.body.classList.add('modal-open');  // Evita scroll da página
    });

    if (closeButtonSobre) {
      closeButtonSobre.addEventListener('click', function () {
        modalSobre.classList.remove('visivel');
        modalSobre.classList.add('oculto');
        document.body.classList.remove('modal-open');
      });
    }

    window.addEventListener('click', function (event) {
      if (event.target === modalSobre) {
        modalSobre.classList.remove('visivel');
        modalSobre.classList.add('oculto');
        document.body.classList.remove('modal-open');
      }
    });
  }

  // Menu mobile
  if (menuIcon && menu) {
    menuIcon.addEventListener("click", function () {
      menu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("active");
      }
    });
  }

  // Imagens clicáveis para expandir
  if (images.length > 0 && overlay) {
    images.forEach(function (image) {
      image.addEventListener("click", function () {
        images.forEach((img) => img.classList.remove("expand")); // Remove a classe expand de todas as imagens
        image.classList.add("expand"); // Adiciona a classe expand à imagem clicada
        overlay.classList.add("active"); // Ativa o overlay
      });
    });

    overlay.addEventListener("click", function () {
      images.forEach((img) => img.classList.remove("expand")); // Remove expand de todas as imagens
      overlay.classList.remove("active"); // Desativa o overlay
    });
  }

  // Controle do scroll suave para seções da página
  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href") ? this.getAttribute("href").substring(1) : null;

        if (this.id === "open-sobre") {
          event.preventDefault(); // Prevent default action
          modalSobre.classList.remove('oculto');
          modalSobre.classList.add('visivel');
          document.body.classList.add('modal-open');
        } else if (targetId) {
          event.preventDefault();
          document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Controle de <details>
  function closeAllDetails() {
    detailsElements.forEach((detail) => {
      detail.removeAttribute("open");
    });
  }

  detailsElements.forEach((detail) => {
    const summary = detail.querySelector("summary");

    if (summary) {
      summary.addEventListener("click", function (event) {
        event.preventDefault();
        const isOpen = detail.hasAttribute("open");
        closeAllDetails(); // Fecha todos os <details>

        if (!isOpen) {
          detail.setAttribute("open", "open"); // Abre o detalhe clicado
        }
      });
    }
  });

  // Modal para o link "Sobre"
  document.getElementById("sobre-link").addEventListener("click", function (event) {
    event.preventDefault();
    const sobreDetalhes = document.getElementById("sobre-detalhes");

    if (!sobreDetalhes.open) {
      sobreDetalhes.open = true;
    }

    sobreDetalhes.scrollIntoView({ behavior: "smooth" });
  });
});
