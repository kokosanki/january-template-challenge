import '../styles/index.scss';

class Quotation {
    constructor() {
        this.quotationText = document.querySelector('.quotationLeftJs');
        this.quotationImg = document.querySelector('.quotationImgJs');
        this.quotationContainer = document.querySelector('.quotation');
    }

    init() {
        this.attachEvents();
    }

    attachEvents() {
        window.addEventListener('scroll', () => this.quotationSlide());
    }

    quotationSlide() {

        const rect = this.quotationImg.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

        if (isVisible) {
            this.quotationText.classList.add('slide-back');
            this.quotationImg.classList.add('slide-back');
            return true;
        }
    }
}

export default Quotation;
