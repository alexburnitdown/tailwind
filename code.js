const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
let upButton = document.querySelector('.up-button');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

window.onscroll = function () { 
    console.log(window.pageYOffset);
    if (window.pageYOffset > 70) {
        upButton.classList.remove('hidden');
      } else {
          if (!upButton.classList.contains('hidden')) {
            upButton.classList.add('hidden');
          }
      }
};

upButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
    
