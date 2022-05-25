'use strict'

// Слайдер в блоке меню about-me


$(document).ready(function() {
   $('.menu-personal-info__title').click(function() {
      $(this).toggleClass('active')
      $('.menu-personal-info__item').slideToggle(300)
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

/** ======= Смена цвета при активной ссылке ==========**/

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

/** ======= Смена цвета при активной ссылке ==========**/


// $(document).ready(function() {
//    $('.menu-personal-info__subtitle').click(function(event) {
//       $(this).toggleClass('active').next('.menu-personal-info__text').slideToggle(300)
//    })
// })


// // Добавляет-удаляет белый цвет текста папок
// $(document).ready(function() {
//    $('.menu-personal-info__subtitle').click(function(event) {
//       $(this).toggleClass('white-text')
//    })
// })

// // Добавляет белый цвет тексту
// $(document).ready(function() {
//    $('.menu-personal-info__text').click(function(event) {
//       $(this).addClass('white-text')
//    })
// })

// // Удаляет белый цвет у текста
// $(document).ready(function() {
//    $('.menu-personal-info__subtitle').click(function(event) {
//       $('.menu-personal-info__text').removeClass('white-text')
//    })
// })


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


// const showMenu = document.querySelector('.menu-personal-info__item')

// const openMenu = document.querySelector('.menu-personal-info__title').addEventListener('click', function() {
//    showMenu.classList.toggle('active')
//    document.querySelector('.menu-personal-info__title').classList.toggle('active')


// })