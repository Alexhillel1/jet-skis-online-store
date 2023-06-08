$(function () {
 $('.banner-section__slider').slick({
  dots: true,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: true,
  cssEase: 'linear',
 });

 $('.tab').on('click', function (e) {
  e.preventDefault();
  $($(this).siblings()).removeClass('tab--active');
  $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

  $(this).addClass('tab--active');
  $($(this).attr('href')).addClass('tabs-content--active');

  $('.product-slider').slick('setPosition');
 });

 var buttons = document.querySelectorAll('.search__tabs-item');

 buttons.forEach(function (button) {
  button.addEventListener('dragstart', function (event) {
   event.preventDefault();
  });
 });

 $('.product-item__favorite').on('click', function (e) {
  $(this).toggleClass('product-item__favorite--active');
 });

 $('.product-slider-tovar').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: true,
  cssEase: 'linear',
  arrows: false,
 });

 $('.product-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: true,
  cssEase: 'linear',
  arrows: false,

  responsive: [
   {
    breakpoint: 1301,
    settings: {
     dots: true,
    },
   },
   {
    breakpoint: 1201,
    settings: {
     slidesToShow: 3,
     dots: true,
    },
   },
   {
    breakpoint: 870,
    settings: {
     slidesToShow: 2,
     dots: true,
    },
   },
   {
    breakpoint: 590,
    settings: {
     slidesToShow: 1,
     dots: true,
    },
   },
  ],
 });

 $('.filter-style').styler();

 $('.filter__item-drop, .filter__extra').on('click', function () {
  $(this).toggleClass('filter__item-drop--active');
  $(this).next().slideToggle(200);
 });

 $('.js-range-slider').ionRangeSlider({
  type: 'double',
  min: 100000,
  max: 500000,
 });
 $('.catalog__filter-btn-grid').on('click', function () {
  $(this).addClass('catalog__filter-button--active');
  $('.catalog__filter-btn-line').removeClass('catalog__filter-button--active');
  $('.product-item__wrapper').removeClass('product-item__wrapper--list');
 });

 $('.catalog__filter-btn-line').on('click', function () {
  $(this).addClass('catalog__filter-button--active');
  $('.catalog__filter-btn-grid').removeClass('catalog__filter-button--active');
  $('.product-item__wrapper').addClass('product-item__wrapper--list');
 });
 $(function () {
  $('.rate-yo').rateYo({
   ratedFill: '#3a45ae',
   spacing: '7px',
   normalFill: '#c4c4c4',
  });
 });

 $('.menu-btn').on('click', function () {
  $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
 });

 $(document).on('click', function (event) {
  var menu = $('.menu-mobile__list');
  var menuBtn = $('.menu-btn');

  if (!menu.is(event.target) && !menuBtn.is(event.target) && menu.has(event.target).length === 0) {
   if (menu.hasClass('menu-mobile__list--active')) {
    menu.removeClass('menu-mobile__list--active');
   }
  }
 });

 $('.footer__topdrop').on('click', function () {
  $(this).next().slideToggle();
  $(this).toggleClass('footer__topdrop--active');
 });

 $('.aside__btn').on('click', function () {
  $(this).next().slideToggle();
 });

 AOS.init();
});
