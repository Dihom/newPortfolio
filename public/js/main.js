'use strict'; // Слайдер в блоке меню about-me

$(document).ready(function () {
  $('.menu-personal-info__title').click(function (event) {
    $(this).toggleClass('active').nextAll('.menu-personal-info__subtitle').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.menu-personal-info__subtitle').click(function (event) {
    $(this).toggleClass('active').next('.menu-personal-info__text').slideToggle(300);
  });
});