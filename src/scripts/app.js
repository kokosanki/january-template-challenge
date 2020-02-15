import '../styles/index.scss';

import Slider from './slider';
import Quotation from './quotation';
import Works from './works';
import Modal from './modal';
import Recommendation from './recommendation';
import Nav from './nav';
import Hamburger from './hamburger';

class App {
    constructor() {
        this.slider = new Slider();
        this.quotation = new Quotation();
        this.works = new Works();
        this.modal = new Modal();
        this.recommendation = new Recommendation();
        this.nav = new Nav();
        this.hamburger = new Hamburger();
    }

    init() {
        this.slider.init();
        this.quotation.init();
        this.works.init();
        this.modal.init();
        this.recommendation.init();
        this.nav.init();
        this.hamburger.init();
    }
}

export default App;