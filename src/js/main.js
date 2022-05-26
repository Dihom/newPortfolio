'use strict'

// ======= Слайдер в блоке меню about-me personal-info START =======//
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
// ======= Слайдер в блоке меню about-me personal-info END =======//



// ======= Слайдер в блоке меню about-me hobbies-info START =======//
$(document).ready(function() {
   $('.info-subtitle-interests').click(function() {
      $(this).toggleClass('active')
      $(this).toggleClass('white-text')
      $('.interests').slideToggle(300)
   })
})
// ======= Слайдер в блоке меню about-me hobbies-info END =======//


// ======= Слайдер в блоке меню about-me professional-info START =======//
$(document).ready(function() {
   $('.info-subtitle-education').click(function() {
      $(this).toggleClass('active')
      $(this).toggleClass('white-text')
      $('.education').slideToggle(300)
   })
})
// ======= Слайдер в блоке меню about-me professional-info END =======//



/** ======= Смена цвета подменю при активной ссылке START ==========**/
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
/** ======= Смена цвета подменю при активной ссылке END ==========**/



/**================= Появление скрытие блоков details START ========== */
$(document).ready(function() {
   $('.details-top').click(function() {
      $('.details-one').slideToggle(300)
      $('.details-two').slideUp(300)
   })
})

$(document).ready(function() {
   $('.details-bottom').click(function() {
      $('.details-two').slideToggle(300)
      $('.details-one').slideUp(300)
   })
})
/**================= Появление скрытие блоков details END ========== */



/**=========== Ajax запрос для активных ссылок START ============ */
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
/**=========== Ajax запрос для активных ссылок END ============ */




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