'use strict'; // Слайдер в блоке меню about-me

$(document).ready(function () {
  $('.menu-personal-info__title').click(function () {
    $(this).toggleClass('active');
    $('.menu-personal-info__item').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.info-subtitle-bio').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.bio').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.info-subtitle-interests').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.interests').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.info-subtitle-education').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.education').slideToggle(300);
  });
});
/** ======= Смена цвета при активной ссылке ==========**/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyJdLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vLyDQodC70LDQudC00LXRgCDQsiDQsdC70L7QutC1INC80LXQvdGOIGFib3V0LW1lXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5tZW51LXBlcnNvbmFsLWluZm9fX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQoJy5tZW51LXBlcnNvbmFsLWluZm9fX2l0ZW0nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmluZm8tc3VidGl0bGUtYmlvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3doaXRlLXRleHQnKVxyXG4gICAgICAkKCcuYmlvJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5pbmZvLXN1YnRpdGxlLWludGVyZXN0cycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmludGVyZXN0cycpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW5mby1zdWJ0aXRsZS1lZHVjYXRpb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5lZHVjYXRpb24nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4vKiogPT09PT09PSDQodC80LXQvdCwINGG0LLQtdGC0LAg0L/RgNC4INCw0LrRgtC40LLQvdC+0Lkg0YHRgdGL0LvQutC1ID09PT09PT09PT0qKi9cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuYmlvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmludGVyZXN0cycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5lZHVjYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5lZHVjYXRpb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuYmlvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmludGVyZXN0cycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmludGVyZXN0cycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5iaW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgfSlcclxufSlcclxuXHJcbi8qKiA9PT09PT09INCh0LzQtdC90LAg0YbQstC10YLQsCDQv9GA0Lgg0LDQutGC0LjQstC90L7QuSDRgdGB0YvQu9C60LUgPT09PT09PT09PSoqL1xyXG5cclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAkKCcubWVudS1wZXJzb25hbC1pbmZvX19zdWJ0aXRsZScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoJy5tZW51LXBlcnNvbmFsLWluZm9fX3RleHQnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbi8vICAgIH0pXHJcbi8vIH0pXHJcblxyXG5cclxuLy8gLy8g0JTQvtCx0LDQstC70Y/QtdGCLdGD0LTQsNC70Y/QtdGCINCx0LXQu9GL0Lkg0YbQstC10YIg0YLQtdC60YHRgtCwINC/0LDQv9C+0LpcclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vICAgICQoJy5tZW51LXBlcnNvbmFsLWluZm9fX3N1YnRpdGxlJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuLy8gICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbi8vICAgIH0pXHJcbi8vIH0pXHJcblxyXG4vLyAvLyDQlNC+0LHQsNCy0LvRj9C10YIg0LHQtdC70YvQuSDRhtCy0LXRgiDRgtC10LrRgdGC0YNcclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vICAgICQoJy5tZW51LXBlcnNvbmFsLWluZm9fX3RleHQnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4vLyAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd3aGl0ZS10ZXh0JylcclxuLy8gICAgfSlcclxuLy8gfSlcclxuXHJcbi8vIC8vINCj0LTQsNC70Y/QtdGCINCx0LXQu9GL0Lkg0YbQstC10YIg0YMg0YLQtdC60YHRgtCwXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAkKCcubWVudS1wZXJzb25hbC1pbmZvX19zdWJ0aXRsZScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgICAgICQoJy5tZW51LXBlcnNvbmFsLWluZm9fX3RleHQnKS5yZW1vdmVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbi8vICAgIH0pXHJcbi8vIH0pXHJcblxyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICBuZXcgVHlwZUl0KFwiI2VsZW1lbnRcIiwge1xyXG4vLyAgICAgICBzdHJpbmdzOiBbXCJUaGlzIGlzIG15IHN0cmluZyFcIl0sXHJcbi8vICAgIH0pLmdvKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgaW5zdGFuY2UgPSBuZXcgVHlwZUl0KCcjcmVwbGFjZVN0cmluZ3MnLCB7XHJcbi8vICAgIHN0cmluZ3M6IFtcIkhlbGxvXCIsIFwiSG93IGFyZSB5b3VyXCJdLFxyXG4vLyAgICBzcGVlZDogMjAwLFxyXG4vLyAgICBicmVha0xpbmVzOiB0cnVlLFxyXG4vLyAgICB3YWl0VW50aWxWaXNpYmxlOiB0cnVlLFxyXG4vLyAgICBuZXh0U3RyaW5nRGVsYXk6IDEwMDBcclxuLy8gfSkuZ28oKTtcclxuXHJcbi8vIG5ldyBUeXBlSXQoXCIjbXlFbGVtZW50XCIpXHJcbi8vICAgLnR5cGUoXCJUaGlzIGlzIG15IGZpcnN0IHN0cmluZyFcIilcclxuLy8gICAucGF1c2UoMTAwMClcclxuLy8gICAudHlwZShcIlBsdXMgYSBsaXR0bGUgbW9yZS5cIilcclxuLy8gICAuZ28oKTtcclxuXHJcbi8vIGNvbnN0IGluc3RhbmNlID0gbmV3IFR5cGVJdCgnI2hpJywge1xyXG4vLyAgICBzdHJpbmdzOiBbXSxcclxuLy8gICAgc3BlZWQ6IDIwMCxcclxuLy8gICAgYnJlYWtMaW5lczogdHJ1ZSxcclxuLy8gICAgd2FpdFVudGlsVmlzaWJsZTogdHJ1ZSxcclxuLy8gICAgY3Vyc29yOiB0cnVlLFxyXG4vLyAgICBodG1sOiB0cnVlXHJcbi8vICAgIC8vIG5leHRTdHJpbmdEZWxheTogMTAwMCBcclxuLy8gfSkuZ28oKTtcclxuXHJcblxyXG4vLyBjb25zdCBzaG93TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBlcnNvbmFsLWluZm9fX2l0ZW0nKVxyXG5cclxuLy8gY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wZXJzb25hbC1pbmZvX190aXRsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgIHNob3dNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbi8vICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBlcnNvbmFsLWluZm9fX3RpdGxlJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuXHJcblxyXG4vLyB9KSJdLCJtYXBwaW5ncyI6IkFBQUEsYSxDQUVBOztBQUdBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7RUFDMUJGLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDRyxLQUFoQyxDQUFzQyxZQUFXO0lBQzlDSCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLFdBQVIsQ0FBb0IsUUFBcEI7SUFDQUosQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JLLFdBQS9CLENBQTJDLEdBQTNDO0VBQ0YsQ0FIRDtBQUlGLENBTEQ7QUFPQUwsQ0FBQyxDQUFDQyxRQUFELENBQUQs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