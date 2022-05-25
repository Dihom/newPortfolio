'use strict'

// Слайдер в блоке меню about-me

$(document).ready(function() {
   $('.menu-personal-info__title').click(function() {
      $(this).toggleClass('active')
      $('.menu-personal-info__item').slideToggle(300)
   })
})

$(document).ready(function() {
   $('.menu-contacts__title').click(function() {
      $(this).toggleClass('active')
      $('.about-menu-contacts').slideToggle(300)
   })
})

$(document).ready(function() {
   $('.info-subtitle-bio').click(function() {
      $(this).toggleClass('active')
      $(this).toggleClass('white-text')
      $('.bio').slideToggle(300)
   })
})

$(document).ready(function() {
   $('.info-subtitle-interests').click(function() {
      $(this).toggleClass('active')
      $(this).toggleClass('white-text')
      $('.interests').slideToggle(300)
   })
})

$(document).ready(function() {
   $('.info-subtitle-education').click(function() {
      $(this).toggleClass('active')
      $(this).toggleClass('white-text')
      $('.education').slideToggle(300)
   })
})

/** ======= Смена цвета подменю при активной ссылке ==========**/

$(document).ready(function() {
   $('.bio').click(function() {
      $(this).addClass('active-text-color')
      $('.interests').removeClass('active-text-color')
      $('.education').removeClass('active-text-color')
   })
})

$(document).ready(function() {
   $('.education').click(function() {
      $(this).addClass('active-text-color')
      $('.bio').removeClass('active-text-color')
      $('.interests').removeClass('active-text-color')
   })
})

$(document).ready(function() {
   $('.interests').click(function() {
      $(this).addClass('active-text-color')
      $('.bio').removeClass('active-text-color')
      $('.education').removeClass('active-text-color')
   })
})

/**================= Появление скрытие блоков details */

$(document).ready(function() {
   $('.text-details').click(function() {
      $('.details-one').slideToggle(300)
   })
})

/**=========== Ajax запрос для активных ссылок */

// $.ajax({
//    url: "index.html",
//    context: document.body
// }).done(function() {
//    $('.nav__link--one').addClass( "header-active" )
//    $('.nav__link--two').removeClass( "header-active" )
//    $('.nav__link--three').removeClass( "header-active" )
//    $('.nav__link--four').removeClass( "header-active" )
// });

$(function() {
   $('.nav [href]').each(function() {
      if (this.href == window.location.href) {
         $(this).addClass('header-active');
      }
   });
});

$(function() {
   $('nav [href]').each(function() {
      if (this.href == window.location.href) {
         $(this).addClass('header-active');
      }
   });
});





/**===== Текст в виде печатной машинки */

// document.addEventListener("DOMContentLoaded", function () {
//    new TypeIt("#element", {
//       strings: ["This is my string!"],
//    }).go();
// });

// const instance = new TypeIt('#replaceStrings', {
//    strings: ["Hello", "How are your"],
//    speed: 200,
//    breakLines: true,
//    waitUntilVisible: true,
//    nextStringDelay: 1000
// }).go();

// new TypeIt("#myElement")
//   .type("This is my first string!")
//   .pause(1000)
//   .type("Plus a little more.")
//   .go();

// const instance = new TypeIt('#hi', {
//    strings: [],
//    speed: 200,
//    breakLines: true,
//    waitUntilVisible: true,
//    cursor: true,
//    html: true
//    // nextStringDelay: 1000 
// }).go();