import '../styles/index.scss';

class Works {
    constructor() {
        this.allBtn = document.querySelector('.allBtnJs');
        this.webBtn = document.querySelector('.webBtnJs');
        this.printBtn = document.querySelector('.printBtnJs');
        this.designBtn = document.querySelector('.designBtnJs');
        this.photographyBtn = document.querySelector('.photographyBtnJs');
        this.all = document.querySelectorAll('.allJs');
        this.web = document.querySelectorAll('.webJs');
        this.print = document.querySelectorAll('.printJs');
        this.design = document.querySelectorAll('.designJs');
        this.photography = document.querySelectorAll('.photographyJs');
    }

    init() {
        this.attachEvents();
    }

    attachEvents() {
        this.allBtn.addEventListener('click', () => this.filterWorks('allJs'));
        this.webBtn.addEventListener('click', () => this.filterWorks('webJs'));
        this.printBtn.addEventListener('click', () => this.filterWorks('printJs'));
        this.designBtn.addEventListener('click', () => this.filterWorks('designJs'));
        this.photographyBtn.addEventListener('click', () => this.filterWorks('photographyJs'));
    }

    filterWorks(elementClass) {
        const mq = window.matchMedia("(min-width: 800px)");
        const works = Array.from(this.all);

        return (mq.matches ? works.forEach(element => (element.classList.contains(elementClass) ? element.style.width = "20%" : element.style.width = "0")) : works.forEach(element => (element.classList.contains(elementClass) ? element.style.width = "50%" : element.style.width = "0")));
    }
}

export default Works;