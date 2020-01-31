import '../styles/index.scss';

class Quotation {
    constructor() {
        this.quotationLeft = document.querySelector('.quotationLeftJs');
        this.quotationRight = document.querySelector('.quotationImgJs');
        this.quotationContainer = document.querySelector('.quotation');
    }

    init() {
        this.attachEvents();
    }

    attachEvents() {
        window.addEventListener('scroll', () => this.quotationSlide());
    }

    quotationSlide() {
        if (window.scrollY >= (this.quotationContainer.offsetHeight)) {
            this.quotationLeft.classList.add('slide-back');
            this.quotationRight.classList.add('slide-back');
        }
    }
}

export default Quotation;
