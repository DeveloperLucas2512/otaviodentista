// Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const headerContent = document.querySelector(".header-content");

  // Modal
  var modal = document.getElementById("genericModal");
  var modalBody = document.getElementById("modal-body");
  var span = document.getElementsByClassName("close")[0];

  if (menuIcon && menu && headerContent) {
    menuIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      menu.classList.toggle("open");
      headerContent.classList.toggle("menu-open");
    });

    document.addEventListener("click", function (event) {
      const target = event.target;
      const isMenuOpen = menu.classList.contains("open");
      const clickedOutsideMenu =
        !menu.contains(target) && !menuIcon.contains(target);

      if (isMenuOpen && clickedOutsideMenu) {
        menu.classList.remove("open");
        headerContent.classList.remove("menu-open");
      }
    });
  }

  // Carrossel
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-btn");
    const mapContainer = document.getElementById("map-container");
    const image = document.querySelector(".map-container .image img");

    if (toggleBtn && mapContainer && image) {
      toggleBtn.addEventListener("click", function () {
        if (mapContainer.classList.contains("collapsed")) {
          mapContainer.classList.remove("collapsed");
          mapContainer.classList.add("expanded");
          toggleBtn.classList.remove("fa-arrow-down");
          toggleBtn.classList.add("fa-arrow-up");

          // Adiciona a animação à imagem quando expandida
          image.classList.add("animate");
        } else {
          mapContainer.classList.remove("expanded");
          mapContainer.classList.add("collapsed");
          toggleBtn.classList.remove("fa-arrow-up");
          toggleBtn.classList.add("fa-arrow-down");

          // Remove a animação da imagem quando recolhida
          image.classList.remove("animate");
        }
      });
    }
  });

  var contentData = {
    1: `
      <h2>Ortognática</h2>
      <p>Conteúdo detalhado sobre Ortognática.</p>
    `,
    2: `
      <h2>Implante Dentário</h2>
      <p>Conteúdo detalhado sobre Implante Dentário.</p>
    `,
    3: `
      <h2>Excesso Vertical de Maxila</h2>
      <p>Conteúdo detalhado sobre Excesso Vertical de Maxila.</p>
    `,
    4: `
      <h2>Sorriso Gengival</h2>
      <p>Conteúdo detalhado sobre Sorriso Gengival.</p>
    `,
  };

  var saibaMaisBtns = document.querySelectorAll(".saibaMaisBtn");
  saibaMaisBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      var contentId = this.getAttribute("data-content");
      modalBody.innerHTML = contentData[contentId];

      // Calcular a posição do botão clicado
      var rect = this.getBoundingClientRect();
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

      modal.style.display = "block";
      modal.style.top = rect.top + scrollTop + "px";
      modal.style.left = rect.left + scrollLeft + "px";
    });
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Toggle Map
  var toggleBtn = document.querySelector(".toggle-btn");
  var mapContainer = document.getElementById("map-container");

  toggleBtn.addEventListener("click", function () {
    mapContainer.classList.toggle("collapsed");
  });
});
