// scripts/portfolio-filter.js
window.addEventListener("DOMContentLoaded", () => {
    const galleries = {
      photo: document.querySelector(".photography-gallery"),
      graphic: document.querySelector(".graphicdesign-gallery"),
      uxui: document.querySelector(".uiux-gallery")
    };
  
    const buttons = document.querySelectorAll(".filter-btn");
  
    function showGallery(type) {
      Object.entries(galleries).forEach(([key, gallery]) => {
        if (key === type) {
          gallery.classList.add("active");
          gallery.classList.remove("hidden");
        } else {
          gallery.classList.add("hidden");
          gallery.classList.remove("active");
        }
      });
  
      buttons.forEach(btn => btn.classList.remove("selected"));
      document.querySelector(`[data-filter="${type}"]`).classList.add("selected");
    }
  
    // Add event listeners
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filterType = btn.getAttribute("data-filter");
        showGallery(filterType);
      });
    });
  
    // Initialize
    showGallery("photo");

  });
  