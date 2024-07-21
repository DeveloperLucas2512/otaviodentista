// Carregamento do AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init(); // Inicializa o AOS para animações na rolagem
});

// Função para configurar os modais
function setupModal(modalId, btnClass) {
  const modal = document.getElementById(modalId);
  const btn = document.querySelector(btnClass);
  const span = modal ? modal.querySelector(".close") : null;

  if (btn) {
    btn.onclick = function () {
      modal.style.display = "block";
    };
  }

  if (span) {
    span.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

// Configuração dos modais
setupModal("aboutMeModal", ".btn-sobre-eu");
setupModal("specialtiesModal", ".btn-especialidades");
setupModal("aboutMeModalEquipe", ".btn-minha-equipe");

// Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const headerContent = document.querySelector(".header-content");

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
});

// Carrossel

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const mapContainer = document.getElementById("map-container");
  const image = document.querySelector(".image img");

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
});
