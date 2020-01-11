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
        console.log(this.x);
        this.btnD.addEventListener('click', () => this.down());
        this.btnU.addEventListener('click', () => this.up());
    }

    down() {
        this.transitioning();
        console.log(this.x);
        this.moveJs.style.transition = `1s`;
        if (this.x !== -50) {

            this.x += 50;
            this.moveJs.style.transform = `translateY(${this.x}px)`;

        } else if (this.x === -50) {
            console.log('slide up ${x}');
            this.slideDown();
            setTimeout(() => {
                this.jumpDown();
            }, 1000);
        }
    };

    up() {
        this.transitioning();
        if (this.x !== -150) {
            this.moveJs.style.transition = `1s`;
            this.x -= 50;

            this.moveJs.style.transform = `translateY(${this.x}px)`;

        } else {
            this.slideUp();
            setTimeout(() => {
                this.jumpUp();
            }, 1000);

        }

    };

    slideDown() {
        this.x += 50;
        console.log(`X po zmianie ${this.x}`);
        this.moveJs.style.transform = `translateY(${this.x}px)`;
        console.log('slide down');
        return true;
    }

    slideUp() {
        this.x -= 50;
        console.log(`X po zmianie ${this.x}`);
        this.moveJs.style.transform = `translateY(${this.x}px)`;
        console.log('slide up');
        return true;
    }

    jumpUp() {
        this.moveJs.style.transition = `none`;
        this.x = -50;
        this.moveJs.style.transform = `translateY(${this.x}px)`;
        console.log('jump up');
        return;
    }

    jumpDown() {
        this.moveJs.style.transition = `none`;
        this.x = -150;
        this.moveJs.style.transform = `translateY(${this.x}px)`;
        console.log('jump down');
        return;
    }

    transitioning() {
        this.moveJs.style.transition = `1s`;
        console.log('transition 1s');
        return;
    }
}

export default Slider;
