import '../styles/index.scss';

import Slider from './slider';
import Quotation from './quotation';
import Works from './works';
import Modal from './modal';
import Recommendation from './recommendation';
import Nav from './nav';
import Hamburger from './hamburger';


function startApp() {
    const slider = new Slider();
    slider.init();
    const quotation = new Quotation();
    quotation.init();
    const works = new Works();
    works.init();
    const modal = new Modal();
    modal.init();
    const recommendation = new Recommendation();
    recommendation.init();
    const nav = new Nav();
    nav.init();
    const hamburger = new Hamburger();
    hamburger.init();
}

startApp();