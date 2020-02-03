import '../styles/index.scss';

import Slider from './slider';
import Quotation from './quotation';
import Works from './works';
import Modal from './modal';
import Recommendation from './recommendation';
import Scroll from './scroll';


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
    const scroll = new Scroll();
    scroll.init();
}

startApp();