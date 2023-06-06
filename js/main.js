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
  prevArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="/images/icons/arrow-left.svg" alt="arrow-left" /></button>',
  nextArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="/images/icons/arrow-right.svg" alt="arrow-right" /></button>',
 });

 $('.product-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: true,
  cssEase: 'linear',
  prevArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="/images/icons/arrow-left.svg" alt="arrow-left" /></button>',
  nextArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="/images/icons/arrow-right.svg" alt="arrow-right" /></button>',
  responsive: [
   {
    breakpoint: 1301,
    settings: {
     arrows: false,
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

 $('.footer__topdrop').on('click', function () {
  $(this).next().slideToggle();
  $(this).toggleClass('footer__topdrop--active');
 });

 $('.aside__btn').on('click', function () {
  $(this).next().slideToggle();
 });
});
