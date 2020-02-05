import '../styles/index.scss';

class Hamburger {
    constructor() {
        this.burger = document.querySelector(".burgerJs");
        this.up = document.querySelector(".burgerUpJs");
        this.middle = document.querySelector(".burgerMiddleJs");
        this.bottom = document.querySelector(".burgerBottomJs");
        this.nav = document.querySelector(".navJs");
    }

    init() {
        this.attachEvents();
    }

    attachEvents() {
        this.burger.addEventListener('click', () => this.animate());
    }

    animate() {
        this.middle.classList.toggle("move-middle-burger");
        this.up.classList.toggle("move-top-burger");
        this.bottom.classList.toggle("move-bottom-burger");
        this.nav.classList.toggle("nav--open");
    }
}

export default Hamburger;