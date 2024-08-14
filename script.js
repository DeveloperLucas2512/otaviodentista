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
});
