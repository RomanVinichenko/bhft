// HEADER

let scrollpos = window.scrollY;
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

const addClass = () => {
  header.classList.add('header--active');
  logo.classList.add('logo--active');
};
const removeClass = () => {
  header.classList.remove('header--active');
  logo.classList.remove('logo--active');
};

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= 50) {
    addClass();
  } else {
    removeClass();
  }
});

// SCROLL TO TOP

$('.logo svg').click(function () {
  jQuery('html,body').animate({ scrollTop: 0 }, 800);
});
