document.addEventListener("DOMContentLoaded", function () {
  const openModalTratamentosButton = document.querySelector(
    "#open-modal-tratamentos"
  );
  const openModalOrtognaticaButton = document.querySelector(
    "#open-modal-ortognatica"
  );
  const openModalImplanteButton = document.querySelector(
    "#open-modal-implante"
  );

  const closeModalButtons = document.querySelectorAll(
    ".close-modal-ortognatica"
  );
  const modalOrtognatica = document.querySelector("#modal-ortognatica-content");
  const modalImplante = document.querySelector("modal-implante-content");
  const modalMaxila = document.querySelector("modal-maxila-content");
  const modalSorrisoGengival = document.querySelector(
    "modal-sorriso-gengival-content"
  );
  const modalTratamentos = document.querySelector("#modal-tratamentos-content");
  const fade = document.querySelector(".fade");

  const toggleModalOrtognatica = (modal) => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };

  const toggleModalImplante = (modal) => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };

  if (openModalOrtognaticaButton) {
    openModalOrtognaticaButton.addEventListener("click", () =>
      toggleModalOrtognatica(modalOrtognatica)
    );
  }

  if (openModalImplanteButton) {
    openModalImplanteButton.addEventListener("click", () =>
      toggleModalImplante(modalOrtognatica)
    );
  }

  if (openModalTratamentosButton) {
    openModalTratamentosButton.addEventListener("click", () =>
      toggleModalOrtognatica(modalTratamentos)
    );
  }

  if (openModalTratamentosButton) {
    openModalTratamentosButton.addEventListener("click", () =>
      toggleModalImplante(modalTratamentos)
    );
  }

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!modalOrtognatica.classList.contains("hide"))
        toggleModalOrtognatica(modalOrtognatica);
      if (!modalTratamentos.classList.contains("hide"))
        toggleModalOrtognatica(modalTratamentos);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!modalOrtognatica.classList.contains("hide"))
        toggleModalImplante(modalOrtognatica);
      if (!modalTratamentos.classList.contains("hide"))
        toggleModalImplante(modalTratamentos);
    });
  });

  fade.addEventListener("click", () => {
    if (!modalOrtognatica.classList.contains("hide"))
      toggleModalOrtognatica(modalOrtognatica);
    if (!modalTratamentos.classList.contains("hide"))
      toggleModalOrtognatica(modalTratamentos);
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!modalOrtognatica.classList.contains("hide"))
        toggleModalOrtognatica(modalOrtognatica);
      if (!modalTratamentos.classList.contains("hide"))
        toggleModalOrtognatica(modalTratamentos);
    });
  });

  fade.addEventListener("click", () => {
    if (!modalOrtognatica.classList.contains("hide"))
      toggleModalImplante(modalOrtognatica);
    if (!modalTratamentos.classList.contains("hide"))
      toggleModalImplante(modalTratamentos);
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
