import { Modal } from "modal.js";

document.addEventListener("DOMContentLoaded", () => {
  const modal = new Modal(".modal");
  let currentIndex = 0;

  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleries = {
    photography: document.querySelector(".photography-gallery"),
    uiux: document.querySelector(".uiux-gallery"),
    graphics: document.querySelector(".graphics-gallery"),
  };

  // Function to display selected gallery and highlight button
  function showGallery(type) {
    for (let key in galleries) {
      galleries[key].style.display = key === type ? "block" : "none";
    }

    filterButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === type);
    });

    if (type === "photography") {
      setupModalGallery(galleries.photography, true);
    }
  }

  // Set up modal on selected gallery
  function setupModalGallery(galleryElement, openFirst = false) {
    const galleryImages = galleryElement.querySelectorAll(".gallery_img");

    const galleryItems = Array.from(galleryImages).map((img, index) => ({
      id: index,
      title: img.alt || `Image ${index + 1}`,
      imgSrc: img.src,
    }));

    function updateModal(index) {
      if (index < 0 || index >= galleryItems.length) return;
      currentIndex = index;
      const { title, imgSrc } = galleryItems[currentIndex];

      const content = `
        <span class="close"></span>
        <h2>${title}</h2>
        <img src="${imgSrc}" alt="${title}" style="width:100%;">
        <div class="modal-nav">
          <button class="prev" ${currentIndex === 0 ? "disabled" : ""}>&#10094; Prev</button>
          <button class="next" ${currentIndex === galleryItems.length - 1 ? "disabled" : ""}>Next &#10095;</button>
        </div>
      `;

      modal.open(content);

      document.querySelector(".prev")?.addEventListener("click", () => updateModal(currentIndex - 1));
      document.querySelector(".next")?.addEventListener("click", () => updateModal(currentIndex + 1));
      document.querySelector(".close")?.addEventListener("click", () => modal.close());
    }

    // Click listeners
    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => updateModal(index));
    });

    // Open the first image if specified
    if (openFirst && galleryItems.length > 0) {
      updateModal(0);
    }
  }

  // Default load = show photography and open modal
  showGallery("photography");

  // Button click listeners
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      showGallery(button.dataset.filter);
    });
  });
});
