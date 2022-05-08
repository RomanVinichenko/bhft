// HEADER

let scrollpos = window.scrollY;
const header = document.querySelector('.header');
const headerDark = document.querySelector('.header-dark');
const logo = document.querySelector('.logo');
const menuBurger = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');

const addClass = () => {
  if (header) {
    header.classList.add('header--active');
    logo.classList.add('logo--active');
  }
  if (headerDark) {
    headerDark.classList.add('header-dark--active');
  }
};
const removeClass = () => {
  if (header) {
    header.classList.remove('header--active');
    logo.classList.remove('logo--active');
  }
  if (headerDark) {
    headerDark.classList.remove('header-dark--active');
  }
};

menuBurger.addEventListener('click', function () {
  menuList.classList.toggle('menu__list--active');
});

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
