import '../styles/index.scss';

class Slider {
    constructor() {
        this.btnD = document.querySelector(".btnDownJs");
        this.btnU = document.querySelector(".btnUpJs");
        this.moveJs = document.querySelector('.moveJs');
        this.x = -50;
    }

    init() {
        this.attachEvents();
    }

    attachEvents() {
        this.btnD.addEventListener('click', () => this.down());
        this.btnU.addEventListener('click', () => this.up());
    }

    down() {
        this.btnD.style.pointerEvents = 'none';
        this.moveJs.style.animationName = 'none';
        this.transitioning();
        this.moveJs.style.transition = `1s`;
        if (this.x !== -50) {

            this.x += 50;
            this.moveJs.style.transform = `translateY(${this.x}px)`;
            this.btnD.style.pointerEvents = 'auto';

        } else if (this.x === -50) {
            this.slideDown();
            setTimeout(() => {
                this.jumpDown();
                this.btnD.style.pointerEvents = 'auto';
            }, 1000);
        }
    };

    up() {
        this.btnU.style.pointerEvents = 'none';
        this.moveJs.style.animationName = 'none';
        this.transitioning();
        if (this.x !== -150) {
            this.moveJs.style.transition = `1s`;
            this.x -= 50;

            this.moveJs.style.transform = `translateY(${this.x}px)`;
            this.btnU.style.pointerEvents = 'auto';
        } else {
            this.slideUp();
            setTimeout(() => {
                this.jumpUp();
                this.btnU.style.pointerEvents = 'auto';
            }, 1000);

        }

    };

    slideDown() {
        this.x += 50;
        this.moveJs.style.transform = `translateY(${this.x}px)`;
        return true;
    }

    slideUp() {
        this.x -= 50;
        this.moveJs.style.transform = `translateY(${this.x}px)`;
        return true;
    }

    jumpUp() {
        this.moveJs.style.transition = `none`;
        this.x = -50;
        this.moveJs.style.transform = `translateY(${this.x}px)`;
        return;
    }

    jumpDown() {
        this.moveJs.style.transition = `none`;
        this.x = -150;
        this.moveJs.style.transform = `translateY(${this.x}px)`;
        return;
    }

    transitioning() {
        this.moveJs.style.transition = `1s`;
        return;
    }
}

export default Slider;
