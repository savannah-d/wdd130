export class Modal {
    constructor(modalSelector) {
        this.modal = document.querySelector(modalSelector);
        this.modalContent = this.modal.querySelector(".modal-content");
        this.closeBtn = this.modal.querySelector(".close");
        this.init();
    }

    init() {
        // Close modal when the close button is clicked
        this.closeBtn.addEventListener("click", () => this.close());

        // Close modal when clicking outside the content
        window.addEventListener("click", (event) => {
            if (event.target === this.modal) {
                this.close();
            }
        });
    }

    open(content) {
        if (!content) {
            console.warn("No content provided for the modal.");
            return;
        }
        this.modalContent.innerHTML = content;
        this.modal.style.display = "block";
    }

    close() {
        this.modal.style.display = "none";
    }
}
