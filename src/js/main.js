'use strict'


// ======= CLOCK in header START =======//
setInterval(() => {
   const time = document.querySelector('#time')

   let date = new Date()
   let hours = date.getHours()
   let minutes = date.getMinutes()
   let seconds = date.getSeconds()

   let dayNight = 'AM'

   if (hours >= 12) {
      dayNight = 'PM'
   }
   if (hours > 12) {
      hours = hours - 12
   }
   if (hours < 10) {
      hours = '0' + hours
   }
   if (minutes < 10) {
      minutes = '0' + minutes
   }
   if (seconds < 10) {
      seconds = '0' + seconds
   }
   
   time.textContent = hours + ':' + minutes + ':' + seconds + ' ' + dayNight
})
// ======= CLOCK in header END =======//




// ======= Слайдер в блоке меню about-me ОТКРЫТИЕ ЗАКРЫТИЕ блоков START =======//
$(document).ready(function() {
   $('.personal').click(function() {
      $(this).addClass('active-icons')
      $('.professional').removeClass('active-icons')
      $('.hobbies').removeClass('active-icons')
      $('.interests').removeClass('active-text-color')
      $('.education').removeClass('active-text-color')
      $('.resume').removeClass('active-text-color')
      $('.menu-wrapper-professional').slideUp(300)
      $('.menu-wrapper-hobbies').slideUp(300)
      $('.menu-wrapper-personal').slideDown(300)
      $('.greeting-text-active').slideDown(300)
      $('.greeting-info').slideDown(300)
      $('.personal-text-active').slideUp(300)
      $('.personal-info').slideUp(300)
      $('.bio').removeClass('active-text-color')
      $('.professional-text-active').slideUp(300)
      $('.professional-info').slideUp(300)
      $('.hobbies-text-active').slideUp(300)
      $('.hobbies-info').slideUp(300)
   })
})

$(document).ready(function() {
   $('.professional').click(function() {
      $(this).addClass('active-icons')
      $('.personal').removeClass('active-icons')
      $('.hobbies').removeClass('active-icons')
      $('.bio').removeClass('active-text-color')
      $('.interests').removeClass('active-text-color')
      $('.personal-text-active').slideUp(100)
      $('.personal-info').slideUp(300)
      $('.greeting-text-active').slideUp(300)
      $('.greeting-info').slideUp(300)
      $('.professional-text-active').slideDown(300)
      $('.professional-info').slideDown(300)
      $('.menu-wrapper-personal').slideUp(300)
      $('.menu-wrapper-hobbies').slideUp(300)
      $('.menu-wrapper-professional').slideDown(300)
      $('.hobbies-text-active').slideUp(300)
      $('.hobbies-info').slideUp(300)
   })
})

$(document).ready(function() {
   $('.hobbies').click(function() {
      $(this).addClass('active-icons')
      $('.personal').removeClass('active-icons')
      $('.professional').removeClass('active-icons')
      $('.bio').removeClass('active-text-color')
      $('.resume').removeClass('active-text-color')
      $('.education').removeClass('active-text-color')
      $('.personal-text-active').slideUp(100)
      $('.personal-info').slideUp(300)
      $('.menu-wrapper-personal').slideUp(300)
      $('.menu-wrapper-professional').slideUp(300)
      $('.menu-wrapper-hobbies').slideDown(300)
      $('.greeting-text-active').slideUp(300)
      $('.greeting-info').slideUp(300)
      $('.professional-text-active').slideUp(300)
      $('.professional-info').slideUp(300)
      $('.hobbies-text-active').slideDown(300)
      $('.hobbies-info').slideDown(300)
   })
})
// ======= Слайдер в блоке меню about-me ОТКРЫТИЕ ЗАКРЫТИЕ блоков END =======//



// ======= Слайдер в блоке меню about-me personal-info START =======//
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
   $('.menu-contacts__title').click(function() {
      $(this).toggleClass('active')
      $('.about-menu-contacts').slideToggle(300)
   })
})
// ======= Слайдер в блоке меню about-me personal-info END =======//


// ======= Слайдер в блоке меню about-me professional-info START =======//
$(document).ready(function() {
   $('.menu-professional-info__title').click(function() {
      $(this).toggleClass('active')
      $('.menu-professional-info__item').slideToggle(300)
   })
})

$(document).ready(function() {
   $('.info-subtitle-career').click(function() {
      $(this).toggleClass('active')
      $(this).toggleClass('white-text')
      $('.resume').slideToggle(300)
   })
})

$(document).ready(function() {
   $('.info-subtitle-education').click(function() {
      $(this).toggleClass('active')
      $(this).toggleClass('white-text')
      $('.education').slideToggle(300)
   })
})

$(document).ready(function() {
   $('.resume').click(function() {
      $(this).addClass('active-text-color')
      $('.education').removeClass('active-text-color')
   })
})

$(document).ready(function() {
   $('.education').click(function() {
      $(this).addClass('active-text-color')
      $('.resume').removeClass('active-text-color')
   })
})
// ======= Слайдер в блоке меню about-me professional-info END =======//



// ======= Слайдер в блоке меню about-me hobbies-info START =======//

$(document).ready(function() {
   $('.menu-hobbies-info__title').click(function() {
      $(this).toggleClass('active')
      $('.menu-hobbies-info__item').slideToggle(300)
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
   $('.interests').click(function() {
      $(this).addClass('active-text-color')
      
   })
})

// ======= Слайдер в блоке меню about-me hobbies-info END =======//



/** ======= Смена цвета подменю при активной ссылке START ==========**/
$(document).ready(function() {
   $('.bio').click(function() {
      $(this).addClass('active-text-color')
      $('.personal-text-active').slideDown(300)
      $('.personal-info').slideDown(300)
      $('.greeting-text-active').slideUp(300)
      $('.greeting-info').slideUp(300)
      // $('.interests').removeClass('active-text-color')
      // $('.education').removeClass('active-text-color')
   })
})

// $(document).ready(function() {
//    $('.education').click(function() {
//       $(this).addClass('active-text-color')
//       $('.bio').removeClass('active-text-color')
//       $('.interests').removeClass('active-text-color')
//    })
// })

// $(document).ready(function() {
//    $('.interests').click(function() {
//       $(this).addClass('active-text-color')
//       $('.bio').removeClass('active-text-color')
//       $('.education').removeClass('active-text-color')
//    })
// })
/** ======= Смена цвета подменю при активной ссылке END ==========**/



/**================= Появление скрытие блоков details START ========== */
$(document).ready(function() {
   $('.details-top').click(function() {
      $(this).toggleClass('white-text')
      $('.details-bottom').removeClass('white-text')
      $('.details-one').slideToggle(300)
      $('.details-two').slideUp(300)
   })
})

$(document).ready(function() {
   $('.details-bottom').click(function() {
      $(this).toggleClass('white-text')
      $('.details-top').removeClass('white-text')
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