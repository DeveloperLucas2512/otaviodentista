document.addEventListener("DOMContentLoaded", function () {
  // Seletores dos botões e do modal
  const openModalOrtognaticaButton = document.querySelector(
    "#open-modal-ortognatica"
  );
  const closeModalButtons = document.querySelectorAll(
    ".close-modal-ortognatica"
  );
  const modalOrtognatica = document.querySelector("#modal-ortognatica-content");
  const fade = document.querySelector(".fade");

  // Função para alternar a visibilidade do modal e do fade
  const toggleModalOrtognatica = (modal) => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };

  // Evento de clique para abrir o modal de Ortognática
  if (openModalOrtognaticaButton) {
    openModalOrtognaticaButton.addEventListener("click", () =>
      toggleModalOrtognatica(modalOrtognatica)
    );
  }

  // Eventos de clique para fechar o modal de Ortognática
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!modalOrtognatica.classList.contains("hide")) {
        toggleModalOrtognatica(modalOrtognatica);
      }
    });
  });

  imgContainer.addEventListener("click", function () {
    const img = this.querySelector("img");
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
  });

  document.querySelectorAll('.scroll-container-img img').forEach((img) => {
    img.addEventListener('click', function () {
      const modal = document.createElement('div');
      modal.classList.add('modal-img');
      modal.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
      document.body.appendChild(modal);
      
      // Exibir o modal
      setTimeout(() => {
        modal.classList.add('active');
      }, 10);
  
      // Fechar o modal ao clicar nele
      modal.addEventListener('click', function () {
        modal.classList.remove('active');
        setTimeout(() => {
          document.body.removeChild(modal);
        }, 300);
      });
    });
  });

  // Seleciona todos os elementos <details>
const detailsElements = document.querySelectorAll('details');

// Função para fechar todos os modais <details>
function closeAllDetails() {
  detailsElements.forEach((detail) => {
    if (detail.open) {
      detail.open = false;
    }
  });
}

// Adiciona um event listener a todos os elementos <details>
detailsElements.forEach((detail) => {
  const summary = detail.querySelector('summary');

  // Fecha todos os <details> quando um novo <details> é clicado
  summary.addEventListener('click', function (event) {
    // Impede a propagação para evitar fechamento imediato ao clicar
    event.stopPropagation();

    // Fecha todos os outros <details>
    closeAllDetails();

    // Abre o detalhe clicado (se ainda não estiver aberto)
    detail.open = true;
  });
});

  // Fecha os <details> quando o usuário clica fora
  document.addEventListener('click', function (event) {
    // Verifica se o clique foi fora de qualquer <details> aberto
    const isClickInside = [...detailsElements].some((detail) =>
      detail.contains(event.target)
    );

    if (!isClickInside) {
      closeAllDetails();
    }
  });



$(document).ready(function(){
  $('.scroll_container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});
});
