import '../styles/index.scss';

class Recommendation {
    constructor() {
        this.recommendationLeft = document.querySelector('.recommendationLeftJs');
        this.recommendationImg = document.querySelector('.recommendationImgJs');
        this.recommendation = document.querySelector('.recommendation');
    }

    init() {
        this.attachEvents();
    }

    attachEvents() {
        window.addEventListener('scroll', () => this.recommendationSlide());
    }

    recommendationSlide() {
        //const rect = this.recommendation.getBoundingClientRect();
        const rect = this.recommendationImg.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

        if (isVisible) {
            this.recommendationLeft.classList.add('slide-back');
            this.recommendationImg.classList.add('slide-back');
            return true;
        }
    }
}

export default Recommendation;