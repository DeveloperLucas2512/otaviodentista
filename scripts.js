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
  const saibaMaisBtn = document.getElementById("saibaMaisBtn");
  const modal = document.getElementById("conteudo-ortognatica");
  const closeBtn = document.getElementById("closeBtn");

  saibaMaisBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
