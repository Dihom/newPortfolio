'use strict'; // ======= Слайдер в блоке меню about-me personal-info START =======//

$(document).ready(function () {
  $('.menu-personal-info__title').click(function () {
    $(this).toggleClass('active');
    $('.menu-personal-info__item').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.menu-contacts__title').click(function () {
    $(this).toggleClass('active');
    $('.about-menu-contacts').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.info-subtitle-bio').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.bio').slideToggle(300);
  });
}); // ======= Слайдер в блоке меню about-me personal-info END =======//
// ======= Слайдер в блоке меню about-me hobbies-info START =======//

$(document).ready(function () {
  $('.info-subtitle-interests').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.interests').slideToggle(300);
  });
}); // ======= Слайдер в блоке меню about-me hobbies-info END =======//
// ======= Слайдер в блоке меню about-me professional-info START =======//

$(document).ready(function () {
  $('.info-subtitle-education').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.education').slideToggle(300);
  });
}); // ======= Слайдер в блоке меню about-me professional-info END =======//

/** ======= Смена цвета подменю при активной ссылке START ==========**/

$(document).ready(function () {
  $('.bio').click(function () {
    $(this).addClass('active-text-color');
    $('.interests').removeClass('active-text-color');
    $('.education').removeClass('active-text-color');
  });
});
$(document).ready(function () {
  $('.education').click(function () {
    $(this).addClass('active-text-color');
    $('.bio').removeClass('active-text-color');
    $('.interests').removeClass('active-text-color');
  });
});
$(document).ready(function () {
  $('.interests').click(function () {
    $(this).addClass('active-text-color');
    $('.bio').removeClass('active-text-color');
    $('.education').removeClass('active-text-color');
  });
});
/** ======= Смена цвета подменю при активной ссылке END ==========**/

/**================= Появление скрытие блоков details START ========== */

$(document).ready(function () {
  $('.details-top').click(function () {
    $('.details-one').slideToggle(300);
    $('.details-two').slideUp(300);
  });
});
$(document).ready(function () {
  $('.details-bottom').click(function () {
    $('.details-two').slideToggle(300);
    $('.details-one').slideUp(300);
  });
});
/**================= Появление скрытие блоков details END ========== */

/**=========== Ajax запрос для активных ссылок START ============ */

$(function () {
  $('.nav [href]').each(function () {
    if (this.href == window.location.href) {
      $(this).addClass('header-active');
    }
  });
});
$(function () {
  $('nav [href]').each(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlVXAiLCJlYWNoIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIl0sInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBwZXJzb25hbC1pbmZvIFNUQVJUID09PT09PT0vL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLm1lbnUtcGVyc29uYWwtaW5mb19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCgnLm1lbnUtcGVyc29uYWwtaW5mb19faXRlbScpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcubWVudS1jb250YWN0c19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCgnLmFib3V0LW1lbnUtY29udGFjdHMnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmluZm8tc3VidGl0bGUtYmlvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3doaXRlLXRleHQnKVxyXG4gICAgICAkKCcuYmlvJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUgcGVyc29uYWwtaW5mbyBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBob2JiaWVzLWluZm8gU1RBUlQgPT09PT09PS8vXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW5mby1zdWJ0aXRsZS1pbnRlcmVzdHMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5pbnRlcmVzdHMnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBob2JiaWVzLWluZm8gRU5EID09PT09PT0vL1xyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBwcm9mZXNzaW9uYWwtaW5mbyBTVEFSVCA9PT09PT09Ly9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5pbmZvLXN1YnRpdGxlLWVkdWNhdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmVkdWNhdGlvbicpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuLy8gPT09PT09PSDQodC70LDQudC00LXRgCDQsiDQsdC70L7QutC1INC80LXQvdGOIGFib3V0LW1lIHByb2Zlc3Npb25hbC1pbmZvIEVORCA9PT09PT09Ly9cclxuXHJcblxyXG5cclxuLyoqID09PT09PT0g0KHQvNC10L3QsCDRhtCy0LXRgtCwINC/0L7QtNC80LXQvdGOINC/0YDQuCDQsNC60YLQuNCy0L3QvtC5INGB0YHRi9C70LrQtSBTVEFSVCA9PT09PT09PT09KiovXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuYmlvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmludGVyZXN0cycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5lZHVjYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5lZHVjYXRpb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuYmlvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmludGVyZXN0cycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmludGVyZXN0cycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5iaW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgfSlcclxufSlcclxuLyoqID09PT09PT0g0KHQvNC10L3QsCDRhtCy0LXRgtCwINC/0L7QtNC80LXQvdGOINC/0YDQuCDQsNC60YLQuNCy0L3QvtC5INGB0YHRi9C70LrQtSBFTkQgPT09PT09PT09PSoqL1xyXG5cclxuXHJcblxyXG4vKio9PT09PT09PT09PT09PT09PSDQn9C+0Y/QstC70LXQvdC40LUg0YHQutGA0YvRgtC40LUg0LHQu9C+0LrQvtCyIGRldGFpbHMgU1RBUlQgPT09PT09PT09PSAqL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmRldGFpbHMtdG9wJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5kZXRhaWxzLW9uZScpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgICAgJCgnLmRldGFpbHMtdHdvJykuc2xpZGVVcCgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmRldGFpbHMtYm90dG9tJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5kZXRhaWxzLXR3bycpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgICAgJCgnLmRldGFpbHMtb25lJykuc2xpZGVVcCgzMDApXHJcbiAgIH0pXHJcbn0pXHJcbi8qKj09PT09PT09PT09PT09PT09INCf0L7Rj9Cy0LvQtdC90LjQtSDRgdC60YDRi9GC0LjQtSDQsdC70L7QutC+0LIgZGV0YWlscyBFTkQgPT09PT09PT09PSAqL1xyXG5cclxuXHJcblxyXG4vKio9PT09PT09PT09PSBBamF4INC30LDQv9GA0L7RgSDQtNC70Y8g0LDQutGC0LjQstC90YvRhSDRgdGB0YvQu9C+0LogU1RBUlQgPT09PT09PT09PT09ICovXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5uYXYgW2hyZWZdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuaHJlZiA9PSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xyXG4gICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdoZWFkZXItYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgJCgnbmF2IFtocmVmXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmhyZWYgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcclxuICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaGVhZGVyLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG59KTtcclxuLyoqPT09PT09PT09PT0gQWpheCDQt9Cw0L/RgNC+0YEg0LTQu9GPINCw0LrRgtC40LLQvdGL0YUg0YHRgdGL0LvQvtC6IEVORCA9PT09PT09PT09PT0gKi9cclxuXHJcblxyXG5cclxuXHJcbi8qKj09PT09INCi0LXQutGB0YIg0LIg0LLQuNC00LUg0L/QtdGH0LDRgtC90L7QuSDQvNCw0YjQuNC90LrQuCAqL1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICBuZXcgVHlwZUl0KFwiI2VsZW1lbnRcIiwge1xyXG4vLyAgICAgICBzdHJpbmdzOiBbXCJUaGlzIGlzIG15IHN0cmluZyFcIl0sXHJcbi8vICAgIH0pLmdvKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgaW5zdGFuY2UgPSBuZXcgVHlwZUl0KCcjcmVwbGFjZVN0cmluZ3MnLCB7XHJcbi8vICAgIHN0cmluZ3M6IFtcIkhlbGxvXCIsIFwiSG93IGFyZSB5b3VyXCJdLFxyXG4vLyAgICBzcGVlZDogMjAwLFxyXG4vLyAgICBicmVha0xpbmVzOiB0cnVlLFxyXG4vLyAgICB3YWl0VW50aWxWaXNpYmxlOiB0cnVlLFxyXG4vLyAgICBuZXh0U3RyaW5nRGVsYXk6IDEwMDBcclxuLy8gfSkuZ28oKTtcclxuXHJcbi8vIG5ldyBUeXBlSXQoXCIjbXlFbGVtZW50XCIpXHJcbi8vICAgLnR5cGUoXCJUaGlzIGlzIG15IGZpcnN0IHN0cmluZyFcIilcclxuLy8gICAucGF1c2UoMTAwMClcclxuLy8gICAudHlwZShcIlBsdXMgYSBsaXR0bGUgbW9yZS5cIilcclxuLy8gICAuZ28oKTtcclxuXHJcbi8vIGNvbnN0IGluc3RhbmNlID0gbmV3IFR5cGVJdCgnI2hpJywge1xyXG4vLyAgICBzdHJpbmdzOiBbXSxcclxuLy8gICAgc3BlZWQ6IDIwMCxcclxuLy8gICAgYnJlYWtMaW5lczogdHJ1ZSxcclxuLy8gICAgd2FpdFVudGlsVmlzaWJsZTogdHJ1ZSxcclxuLy8gICAgY3Vyc29yOiB0cnVlLFxyXG4vLyAgICBodG1sOiB0cnVlXHJcbi8vICAgIC8vIG5leHRTdHJpbmdEZWxheTogMTAwMCBcclxuLy8gfSkuZ28oKTsiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7QUFDQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0VBQzFCRixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ0csS0FBaEMsQ0FBc0MsWUFBVztJQUM5Q0gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxXQUFSLENBQW9CLFFBQXBCO0lBQ0FKLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCSyxXQUEvQixDQUEyQyxHQUEzQztFQUNGLENBSEQ7QUFJRixDQUxEO0FBT0FMLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztFQUMxQkYsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJHLEtBQTNCLENBQWlDLFlBQVc7SUFDekNILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksV0FBUixDQUFvQixRQUFwQjtJQUNBSixDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkssV0FBMUIsQ0FBc0MsR0FBdEM7RUFDRixDQUhEO0FBSUYsQ0FMRDtBQU9BTCxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtC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