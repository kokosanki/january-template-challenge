import '../styles/index.scss';

console.log('webpack starterkit');

import Slider from './slider';

// class App {
//     constructor() {
//         this.slider = new Slider();
//     }
// }
function moveIt() {
    const slider = new Slider();
    slider.init();
}

moveIt();

// const btnD = document.querySelector(".btnDownJs");
// const btnU = document.querySelector(".btnUpJs");

// let x = 0;
// btnD.addEventListener('click', function () {
//     transitioning();
//     console.log(x);
//     document.querySelector('.moveJs').style.transition = `1s`;
//     if (x !== -150) {

//         x -= 50;
//         document.querySelector('.moveJs').style.transform = `translateY(${x}px)`;

//     } else if (x === -150) {
//         console.log('slide up ${x}');
//         slideDown();
//         setTimeout(function () {
//             jumpDown();
//         }, 1000);
//     } 
// });

// btnU.addEventListener('click', function () {
//     transitioning();
//     console.log(x);
//     if (x !== -50) {
//         document.querySelector('.moveJs').style.transition = `1s`;
//         x += 50;

//         console.log('click u');
//         document.querySelector('.moveJs').style.transform = `translateY(${x}px)`;

//         console.log(x);
//     } else {
//         slideUp();
//         setTimeout(function () {
//             jumpUp();
//         }, 1000);

//     }

// });

// function slideDown() {
//     x -= 50;
//     console.log(`X po zmianie ${x}`);
//     document.querySelector('.moveJs').style.transform = `translateY(${x}px)`;
//     console.log('slide down');
//     return true;
// }

// function slideUp() {
//     x += 50;
//     console.log(`X po zmianie ${x}`);
//     document.querySelector('.moveJs').style.transform = `translateY(${x}px)`;
//     console.log('slide up');
//     return true;
// }

// function jumpUp() {
//     document.querySelector('.moveJs').style.transition = `none`;
//     x = -150;
//     document.querySelector('.moveJs').style.transform = `translateY(${x}px)`;
//     console.log('jump up');
//     return;
// }

// function jumpDown() {
//     document.querySelector('.moveJs').style.transition = `none`;
//     x = -50;
//     document.querySelector('.moveJs').style.transform = `translateY(${x}px)`;
//     console.log('jump down');
//     return;
// }

// function transitioning() {
//     document.querySelector('.moveJs').style.transition = `1s`;
//     console.log('transition 1s');
//     return;
// }