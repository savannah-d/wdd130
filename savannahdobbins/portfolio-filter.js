
window.addEventListener("DOMContentLoaded", () => {
    const photoGallery = document.querySelector(".photography-gallery");
    const graphicGallery = document.querySelector(".graphicdesign-gallery");
    const uiuxGallery = document.querySelector(".uiux-gallery");
    const photoBtn = document.querySelector('[data-filter="photo"]');
  
    // Show photography gallery by default
    photoGallery.style.display = "block";
    graphicGallery.style.display = "none";
    uiuxGallery.style.display = "none";
  
    // Set selected button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('selected'));
    photoBtn.classList.add('selected');
  });
  