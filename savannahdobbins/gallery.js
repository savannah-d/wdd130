import { Modal } from "./modal.js";

// Initialize modal
const modal = new Modal(".modal");

// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery_img");

// Create an array to store image data
const galleryItems = Array.from(galleryImages).map((img, index) => ({
    id: index,
    title: img.alt || `Image ${index + 1}`,
    imgSrc: img.src,
}));

let currentIndex = 0;

// Function to update modal content
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

    // Re-add event listeners for new buttons
    document.querySelector(".prev")?.addEventListener("click", () => updateModal(currentIndex - 1));
    document.querySelector(".next")?.addEventListener("click", () => updateModal(currentIndex + 1));
    document.querySelector(".close")?.addEventListener("click", () => modal.close());
}

// Add event listeners to gallery images
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => updateModal(index));
});
