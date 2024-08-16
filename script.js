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
});
