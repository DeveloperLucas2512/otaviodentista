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
    document.querySelector(".header-content").classList.toggle("menu-open");
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

  var modal = document.getElementById("aboutMeModal");

  // Obtém o botão que abre o modal
  var btn = document.querySelector(".btn-saiba-mais");

  // Obtém o <span> que fecha o modal
  var span = document.querySelector(".close");

  // Quando o usuário clica no botão, abre o modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // Quando o usuário clica no <span> (x), fecha o modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Quando o usuário clica fora do modal, fecha o modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

var modal = document.getElementById("aboutMeModalMe");

// Obtém o botão que abre o modal
var btn = document.querySelector(".btn-sobre-eu");

// Obtém o <span> que fecha o modal
var span = document.querySelector(".close");

// Quando o usuário clica no botão, abre o modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function () {
  modal.style.display = "none";
};

// Quando o usuário clica fora do modal, fecha o modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal = document.getElementById("aboutMeModalEquipe");

// Obtém o botão que abre o modal
var btn = document.querySelector(".btnminha-equipe");

// Obtém o <span> que fecha o modal
var span = document.querySelector(".close");

// Quando o usuário clica no botão, abre o modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function () {
  modal.style.display = "none";
};

// Quando o usuário clica fora do modal, fecha o modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Carrousel
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const items = Array.from(document.querySelectorAll(".item"));
  const totalItems = items.length;
  let currentIndex = 0;

  // Clonar a primeira e a última imagem para criar um efeito de rotação infinita
  const firstItemClone = items[0].cloneNode(true);
  const lastItemClone = items[totalItems - 1].cloneNode(true);
  gallery.appendChild(firstItemClone); // Adicionar clone ao final
  gallery.insertBefore(lastItemClone, items[0]); // Inserir clone no início

  const adjustedItems = Array.from(document.querySelectorAll(".item")); // Lista atualizada de itens
  const itemWidth = adjustedItems[0].offsetWidth; // Largura dos itens

  // Ajustar o carrossel para a posição do primeiro item clone
  gallery.style.transform = `translateX(-${itemWidth}px)`;

  function updateCarousel() {
    adjustedItems.forEach((item, index) => {
      item.classList.remove("current-item");
      item.style.opacity = "0.6";
      item.style.transform = "scale(1)";
    });

    const centeredIndex = currentIndex + 1; // Índice da imagem no centro
    adjustedItems[centeredIndex].classList.add("current-item");
    adjustedItems[centeredIndex].style.opacity = "1";
    adjustedItems[centeredIndex].style.transform = "scale(1.4)";
  }

  function moveToIndex(index) {
    gallery.style.transform = `translateX(-${(index + 1) * itemWidth}px)`;
  }

  function handleTransitionEnd() {
    if (currentIndex === totalItems) {
      currentIndex = 0;
      gallery.style.transition = "none";
      moveToIndex(currentIndex);
      setTimeout(() => {
        gallery.style.transition = "transform 0.5s ease";
      }, 0);
    } else if (currentIndex === -1) {
      currentIndex = totalItems - 1;
      gallery.style.transition = "none";
      moveToIndex(currentIndex + 1);
      setTimeout(() => {
        gallery.style.transition = "transform 0.5s ease";
      }, 0);
    }
  }

  const prevButton = document.querySelector(".arrow-left");
  const nextButton = document.querySelector(".arrow-right");

  prevButton.addEventListener("click", () => {
    currentIndex--;
    moveToIndex(currentIndex + 1);
    updateCarousel();
    handleTransitionEnd();
  });

  nextButton.addEventListener("click", () => {
    currentIndex++;
    moveToIndex(currentIndex + 1);
    updateCarousel();
    handleTransitionEnd();
  });

  gallery.addEventListener("transitionend", handleTransitionEnd);

  // Inicializar exibição
  updateCarousel();
});
