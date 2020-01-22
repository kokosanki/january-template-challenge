import '../styles/index.scss';

console.log('webpack starterkit');

import Slider from './slider';
import Quotation from './quotation';


function moveIt() {
    const slider = new Slider();
    slider.init();
    const quotation = new Quotation();
    quotation.init();
}

moveIt();

// let quotationLeft = document.querySelector('.quotationLeftJs');
// let quotationRight = document.querySelector('.quotationImgJs');

// let quotationContainer = document.querySelector('.quotation');
// // window.onscroll = function () {
// //     if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
// //         qL.classList.add('slide-back');
// //         qR.classList.add('slide-back');
// //        // alert('At the bottom!');
// //     }
// // };

// window.onscroll = function () {
//     if (window.scrollY >= (quotationContainer.offsetHeight)) {
//         quotationLeft.classList.add('slide-back');
//         quotationRight.classList.add('slide-back');
//     }
// };