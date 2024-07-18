document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const aboutMeBtn = document.getElementById("aboutMeBtn");
  const aboutMeModal = document.getElementById("aboutMeModal");
  const closeBtn = document.querySelector(".about-me-modal .close");

  // Abrir/fechar menu ao clicar no ícone do menu
  menuIcon.addEventListener("click", function () {
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

  // Abrir modal "Sobre o Dr. Otávio"
  aboutMeBtn.addEventListener("click", function () {
    aboutMeModal.style.display = "block";
  });

  // Fechar modal "Sobre o Dr. Otávio"
  closeBtn.addEventListener("click", function () {
    aboutMeModal.style.display = "none";
  });

  // Fechar modal "Sobre o Dr. Otávio" ao clicar fora dele
  window.addEventListener("click", function (event) {
    if (event.target === aboutMeModal) {
      aboutMeModal.style.display = "none";
    }
  });

  // Inicialização do slick slider
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
