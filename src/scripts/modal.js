import '../styles/index.scss';

class Modal {
    constructor() {
        this.modal = document.querySelector('.modalJs');
        this.modalContent = document.querySelector('.modalContentJs');
        this.modalPreview = document.querySelector('.modalPreviewJs');
        this.modalImg = document.querySelector('.modalImageJs');
        this.modalBtnClose = document.querySelector('.modalBtnCloseJs');
        this.modalLoader = document.querySelector('.modalLoaderJs');
        this.portfolioItem = document.querySelectorAll('.portfolioItemJs');
        this.overlay = document.querySelector('.overlayJs');
        this.loaderWrapper = document.querySelector('.loaderWrapperJs');
    }

    init() {
        this.attachEvents();
    }

    attachEvents() {
        this.portfolioItem.forEach(item => item.addEventListener('click', () => this.openModal()));
        this.modalBtnClose.addEventListener('click', () => this.closeModal());
        this.overlay.addEventListener('click', () => this.closeModal());
    }
    
    closeModal() {
        this.modal.style.display = "none";
        this.removeOverlay();
    }

    openModal() {
        this.modal.style.display = "flex";
        this.modal.classList.add('enlarge-modal');
        this.modalContent.classList.add('make-visible');
        this.loaderWrapper.classList.add('make-invisible');
        this.addOverlay();
    }

    addOverlay() {
        this.overlay.classList.add('add-overlay');
    }

    removeOverlay() {
        this.overlay.classList.remove('add-overlay');
    }
}

export default Modal;