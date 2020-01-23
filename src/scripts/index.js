import '../styles/index.scss';

console.log('webpack starterkit');

import Slider from './slider';
import Quotation from './quotation';


function startApp() {
    const slider = new Slider();
    slider.init();
    const quotation = new Quotation();
    quotation.init();
}

startApp();