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

  // Script para abrir e fechar o modal "Sobre o Dr. Otávio"
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

// Carrousel
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const items = Array.from(document.querySelectorAll(".item"));
  const totalItems = items.length;
  let currentIndex = 0;

  const prevButton = document.querySelector(".arrow-left");
  const nextButton = document.querySelector(".arrow-right");

  // Clone the first and last items to create an infinite scroll effect
  const firstItemClone = items[0].cloneNode(true);
  const lastItemClone = items[totalItems - 1].cloneNode(true);
  gallery.appendChild(firstItemClone); // Append clone to end
  gallery.insertBefore(lastItemClone, items[0]); // Insert clone to start

  const adjustedItems = Array.from(document.querySelectorAll(".item")); // Updated list of items
  const itemWidth = adjustedItems[0].offsetWidth + 15; // Including gap

  // Move gallery to the position of the first item clone
  gallery.style.transform = `translateX(-${itemWidth}px)`;

  function updateCarousel() {
    adjustedItems.forEach((item, index) => {
      item.classList.remove("current-item");
      item.style.opacity = "0.6";
      item.style.transform = "scale(1)";
    });

    adjustedItems[currentIndex + 1].classList.add("current-item");
    adjustedItems[currentIndex + 1].style.opacity = "1";
    adjustedItems[currentIndex + 1].style.transform = "scale(1.4)";

    // Move the gallery to the position of the current item
    gallery.style.transition = "transform 0.5s ease";
    gallery.style.transform = `translateX(-${
      (currentIndex + 1) * itemWidth
    }px)`;
  }

  function autoScroll() {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
      gallery.style.transition = "none"; // Disable transition for smooth jump
      gallery.style.transform = `translateX(-${itemWidth}px)`; // Jump to the real first item
      setTimeout(() => {
        gallery.style.transition = "transform 0.5s ease"; // Re-enable transition
        currentIndex = 0; // Reset index
      }, 50); // Small delay to ensure transition kicks in
    }
    updateCarousel();
  }

  function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(autoScroll, 3000);
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex = totalItems - 1;
      gallery.style.transition = "none";
      gallery.style.transform = `translateX(-${
        (totalItems + 1) * itemWidth
      }px)`;
      setTimeout(() => {
        gallery.style.transition = "transform 0.5s ease";
        gallery.style.transform = `translateX(-${totalItems * itemWidth}px)`;
        currentIndex = totalItems - 1;
      }, 50);
    } else {
      currentIndex--;
    }
    updateCarousel();
    resetAutoScroll();
  });

  nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
      gallery.style.transition = "none";
      gallery.style.transform = `translateX(-${itemWidth}px)`;
      setTimeout(() => {
        gallery.style.transition = "transform 0.5s ease";
        gallery.style.transform = `translateX(-${itemWidth}px)`;
      }, 50);
    }
    updateCarousel();
    resetAutoScroll();
  });

  // Initial display
  updateCarousel();

  // Automatic scroll every 3 seconds
  let autoScrollInterval = setInterval(autoScroll, 3000);
});
