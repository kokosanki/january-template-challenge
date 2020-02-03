class Scroll {
    constructor() {
        this.aboutBtn = document.querySelector('.aboutBtnJs');
        this.about = document.querySelector('.aboutJs');
        this.servicesBtn = document.querySelector('.servicesBtnJs');
        this.services = document.querySelector('.servicesJs');
        this.worksBtn = document.querySelector('.worksBtnJs');
        this.works = document.querySelector('.worksJs');
        this.contactBtn = document.querySelector('.contactBtnJs');
        this.contact = document.querySelector('.contactJs');
        this.home = document.querySelector('.navHeadJs');
        this.slider = document.querySelector('.sliderJs');
        this.scrollUpBtn = document.querySelector('.slideupBtnJs');
    }

    init() {
        this.attachEvents();
    }

    attachEvents() {
        this.aboutBtn.addEventListener('click', () => this.scroll(this.about));
        this.servicesBtn.addEventListener('click', () => this.scroll(this.services));
        this.worksBtn.addEventListener('click', () => this.scroll(this.works));
        this.contactBtn.addEventListener('click', () => this.scroll(this.contact));
        this.home.addEventListener('click', () => this.scroll(this.slider));
        this.scrollUpBtn.addEventListener('click', () => this.scroll(this.slider));
    }

    scroll(section) {
        section.scrollIntoView({behavior: "smooth"});
    }
}

export default Scroll;