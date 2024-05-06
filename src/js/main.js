import $ from 'jquery';
import ScrollReveal from 'scrollreveal';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// scrollで出現するアニメーション
const slideUp = {
  distance: '130%',
  origin: 'bottom',
  opacity: 0,
  duration: 600,
  delay: 400,
  easing: 'ease-out'
};
const slideUpSmall = {
  distance: '105%',
  origin: 'bottom',
  opacity: 0,
  duration: 600,
  delay: 400,
  easing: 'ease-out'
};
const slideInLeft = {
  distance: '110%',
  origin: 'left',
  opacity: 0,
  duration: 600,
  delay: 400,
  easing: 'ease-out'
};
const slideInRight = {
  distance: '110%',
  origin: 'right',
  opacity: 0,
  duration: 600,
  delay: 400,
  easing: 'ease-out'
};
const fadeIn = {
  opacity: 0,
  duration: 400,
  delay: 400,
  easing: 'ease-in-out'
};

ScrollReveal().reveal('.slideUp', slideUp);
ScrollReveal().reveal('.slideInLeft', slideInLeft);
ScrollReveal().reveal('.slideInRight', slideInRight);
ScrollReveal().reveal('.fadeIn', fadeIn);
ScrollReveal().reveal('.slideUpSmall', slideUpSmall);

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  spaceBetween: 20
});

$(function () {});
