document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const aboutMeBtn = document.getElementById("aboutMeBtn");
  const aboutMeModal = document.getElementById("aboutMeModal");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Abrir/fechar menu ao clicar no ícone do menu
  menuIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Impede a propagação do evento para o documento
    menu.classList.toggle("open");
  });

  // Fechar menu ao clicar fora do menu e do ícone do menu
  document.addEventListener("click", function (event) {
    const target = event.target;
    const isMenuOpen = menu.classList.contains("open");
    const clickedOutsideMenu =
      !menu.contains(target) && !menuIcon.contains(target);

    if (isMenuOpen && clickedOutsideMenu) {
      menu.classList.remove("open");
    }
  });

  // Script para alternar o menu em dispositivos móveis
  document.querySelector(".menu-icon").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("menu-visible");
  });

  // Script para abrir e fechar o modal "Sobre o Dr. Otávio"
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("aboutMeModal");
    const btn = document.querySelector(".about-me-icon");
    const span = document.querySelector(".close");

    btn.onclick = function () {
      modal.style.display = "block";
    };

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });

  aboutMeBtn.onclick = () => {
    aboutMeModal.style.display = "block";
  };

  closeBtn.onclick = () => {
    aboutMeModal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === aboutMeModal) {
      aboutMeModal.style.display = "none";
    }
  };
});

$(document).ready(function () {
  $(".slider").slick({
    dots: true, // Adiciona pontos indicadores de navegação
    infinite: true, // Permite navegação infinita
    speed: 500, // Velocidade da transição dos slides (milissegundos)
    slidesToShow: 1, // Quantidade de slides a serem mostrados ao mesmo tempo
    slidesToScroll: 1, // Quantidade de slides a serem rolados por vez
  });
});
