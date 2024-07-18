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
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  });
});

// Função para abrir o modal pelo ID
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Modal
  const aboutMeBtn = document.getElementById("aboutMeBtn");
  const aboutMeModal = document.getElementById("aboutMeModal");
  const aboutMeModalMe = document.getElementById("aboutMeModalMe");
  const close = document.getElementsByClassName("close")[0];

  aboutMeBtn.addEventListener("click", function () {
    aboutMeModal.style.display = "block";
  });

  close.addEventListener("click", function () {
    aboutMeModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == aboutMeModal) {
      aboutMeModal.style.display = "none";
    }
  });
});
