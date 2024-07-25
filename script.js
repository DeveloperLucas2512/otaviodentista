document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const headerContent = document.querySelector(".header-content");

  // Modal
  const modal = document.getElementById("genericModal");
  const modalBody = document.getElementById("modal-body");
  const span = document.getElementsByClassName("close")[0];

  if (menuIcon && menu && headerContent) {
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
  }

  // Carrossel e Saiba Mais
  const saibaMaisBtns = document.querySelectorAll(".saibaMaisBtn");
  const contentData = {
    1: `
      <h3>Ortognática</h3>
      <p>A Ortognática é uma especialidade da cirurgia bucomaxilofacial que se concentra no tratamento de irregularidades nos ossos da face e maxilares.</p>
      <p>O objetivo é corrigir problemas como o desalinhamento dos dentes e mandíbulas, melhorando a função mastigatória, a estética facial e a saúde geral.</p>
      <p>Este tipo de cirurgia é indicado para pessoas com discrepâncias significativas entre os maxilares superior e inferior, que podem causar dificuldades na fala, mastigação ou problemas respiratórios. A Ortognática pode também aliviar problemas de mordida e melhorar a aparência facial, proporcionando um sorriso mais harmonioso e equilibrado.</p>
    `,
    2: `
      <h3>Implante Dentário</h3>
      <p>O implante dentário é uma solução moderna e eficaz para substituir dentes perdidos ou danificados. Consiste em um pequeno parafuso de titânio que é inserido cirurgicamente no osso maxilar, servindo como uma raiz artificial para suportar uma coroa dentária.</p>
      <p>Esse procedimento visa restaurar a função mastigatória e melhorar a estética do sorriso, proporcionando uma aparência e sensação natural. Os implantes dentários são uma opção durável e de longo prazo, que também ajuda a preservar a estrutura óssea e a saúde bucal geral.</p>
      <p>Ideal para pessoas que perderam dentes devido a cáries, traumas ou doenças periodontais, o implante dentário oferece uma alternativa sólida e segura às próteses removíveis e pontes dentárias, promovendo conforto e estabilidade.</p>
    `,
    3: `
      <h3>Excesso Vertical de Maxila</h3>
      <p>O excesso vertical de maxila é uma condição onde há um aumento anormal no comprimento da maxila, a parte superior do maxilar. Este problema pode resultar em um perfil facial desproporcional, onde a parte superior da face parece exageradamente alongada em comparação com a parte inferior.</p>
      <p>Este distúrbio pode causar dificuldades funcionais, como problemas de mordida e mastigação, além de afetar a estética facial. O tratamento para o excesso vertical de maxila geralmente envolve cirurgia ortognática para reduzir a altura da maxila e melhorar o equilíbrio facial.</p>
      <p>O objetivo da cirurgia é restaurar a harmonia facial, melhorar a função mastigatória e promover um sorriso mais estético e confortável.</p>
    `,
    4: `
      <h3>Sorriso Gengival</h3>
      <p>O sorriso gengival ocorre quando uma quantidade excessiva de gengiva é visível ao sorrir, o que pode causar desconforto estético para muitas pessoas. Esta condição pode ser causada por fatores genéticos, hiperatividade dos músculos que elevam o lábio superior, ou por um crescimento desigual dos dentes.</p>
      <p>Os tratamentos para o sorriso gengival variam de acordo com a causa. Pode incluir procedimentos estéticos, como a correção da linha gengival através de cirurgia plástica gengival, ou tratamentos ortodônticos para ajustar a posição dos dentes. O objetivo é alcançar um sorriso mais equilibrado, onde a quantidade de gengiva visível é reduzida, melhorando a aparência e a confiança do paciente.</p>
      <p>Em alguns casos, a correção pode envolver uma combinação de abordagens para garantir resultados duradouros e satisfatórios.</p>
    `,
  };

  saibaMaisBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      const contentId = this.getAttribute("data-content");
      modalBody.innerHTML = contentData[contentId];
      modal.style.display = "block";
    });
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Toggle Map
  const toggleBtn = document.querySelector(".toggle-btn");
  const mapContainer = document.getElementById("map-container");

  if (toggleBtn && mapContainer) {
    toggleBtn.addEventListener("click", function () {
      mapContainer.classList.toggle("collapsed");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnEspecialidades = document.getElementById("btn-especialidades");
  const modalTratamento = document.getElementById("modalTratamentos");
  const caretIcon = document.getElementById("caret-icon");
  const spanTratamento = document.getElementsByClassName("close-tratamento")[0];

  btnEspecialidades.onclick = function () {
    modalTratamento.classList.toggle("show");
    caretIcon.classList.toggle("fa-caret-down");
    caretIcon.classList.toggle("fa-caret-up");
  };

  spanTratamento.onclick = function () {
    modalTratamento.classList.remove("show");
    caretIcon.classList.toggle("fa-caret-down");
    caretIcon.classList.toggle("fa-caret-up");
  };

  window.onclick = function (event) {
    if (event.target == modalTratamento) {
      modalTratamento.classList.remove("show");
      caretIcon.classList.toggle("fa-caret-down");
      caretIcon.classList.toggle("fa-caret-up");
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const btnEspecialidades = document.getElementById("btn-especialidades");
  const modalTratamento = document.getElementById("modalTratamentos");
  const caretIcon = document.getElementById("caret-icon");
  const closeTratamento = document.querySelector(".close-tratamento");
  const tratamentoLista = document.getElementById("tratamento-lista");

  // Dados para a lista de tratamentos
  const tratamentoData = `
        <li>Cirurgia Ortognatica</li>
        <li>Tratamentos de DTM/ATM</li>
        <li>Implantes Dentários</li>
        <li>Sisos Complexos</li>
        <li>Preenchimento, Toxina Botulínica</li>
        <li>Bioestimuladores de Colágeno e Fios de PDO</li>
    `;

  // Função para abrir a modal
  btnEspecialidades.onclick = function () {
    modalTratamento.classList.add("show");
    caretIcon.classList.toggle("fa-caret-down");
    caretIcon.classList.toggle("fa-caret-up");
    tratamentoLista.innerHTML = tratamentoData;
  };

  // Função para fechar a modal ao clicar no "X"
  closeTratamento.onclick = function () {
    modalTratamento.classList.remove("show");
    caretIcon.classList.toggle("fa-caret-down");
    caretIcon.classList.toggle("fa-caret-up");
  };

  // Fechar a modal ao clicar fora dela
  window.onclick = function (event) {
    if (event.target == modalTratamento) {
      modalTratamento.classList.remove("show");
      caretIcon.classList.toggle("fa-caret-down");
      caretIcon.classList.toggle("fa-caret-up");
    }
  };
});
