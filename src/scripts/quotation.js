import '../styles/index.scss';

class Quotation {
    constructor() {
        this.quotationLeft = document.querySelector('.quotationLeftJs');
        this.quotationRight = document.querySelector('.quotationImgJs');
        this.quotationContainer = document.querySelector('.quotation');
    }

    init() {
        this.attachEvents();
    }

    attachEvents() {
        window.addEventListener('scroll', () => this.quotationSlide());
    }

    quotationSlide() {
        if (window.scrollY >= (this.quotationContainer.offsetHeight)) {
            this.quotationLeft.classList.add('slide-back');
            this.quotationRight.classList.add('slide-back');
        }
    }
}

export default Quotation;

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