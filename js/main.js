'use strict'; // Слайдер в блоке меню about-me

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
/**=========== Ajax запрос для активных ссылок */

$(function () {
  var pathname_url = window.location.pathname;
  var href_url = window.location.href;
  $(".nav__list").each(function () {
    var link = $(this).find("a").attr("href");

    if (pathname_url == link || href_url == link) {
      $(this).addClass("header-active");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInBhdGhuYW1lX3VybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJocmVmX3VybCIsImhyZWYiLCJlYWNoIiwibGluayIsImZpbmQiLCJhdHRyIl0sInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8vINCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWVcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcubWVudS1wZXJzb25hbC1pbmZvX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKCcubWVudS1wZXJzb25hbC1pbmZvX19pdGVtJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5tZW51LWNvbnRhY3RzX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKCcuYWJvdXQtbWVudS1jb250YWN0cycpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW5mby1zdWJ0aXRsZS1iaW8nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5iaW8nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmluZm8tc3VidGl0bGUtaW50ZXJlc3RzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3doaXRlLXRleHQnKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5pbmZvLXN1YnRpdGxlLWVkdWNhdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmVkdWNhdGlvbicpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbi8qKiA9PT09PT09INCh0LzQtdC90LAg0YbQstC10YLQsCDQv9GA0Lgg0LDQutGC0LjQstC90L7QuSDRgdGB0YvQu9C60LUgPT09PT09PT09PSoqL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5iaW8nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmVkdWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmVkdWNhdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5iaW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW50ZXJlc3RzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmJpbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5lZHVjYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICB9KVxyXG59KVxyXG5cclxuXHJcbi8qKj09PT09PT09PT09IEFqYXgg0LfQsNC/0YDQvtGBINC00LvRjyDQsNC60YLQuNCy0L3Ri9GFINGB0YHRi9C70L7QuiAqL1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHJcbiAgIHZhciBwYXRobmFtZV91cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgIHZhciBocmVmX3VybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cclxuICAgJChcIi5uYXZfX2xpc3RcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBsaW5rID0gJCh0aGlzKS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgaWYocGF0aG5hbWVfdXJsID09IGxpbmsgfHwgaHJlZl91cmwgPT0gbGluaykge1xyXG4gICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiaGVhZGVyLWFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxufSk7XHJcblxyXG4vKio9PT09PSDQotC10LrRgdGCINCyINCy0LjQtNC1INC/0LXRh9Cw0YLQvdC+0Lkg0LzQsNGI0LjQvdC60LggKi9cclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgbmV3IFR5cGVJdChcIiNlbGVtZW50XCIsIHtcclxuLy8gICAgICAgc3RyaW5nczogW1wiVGhpcyBpcyBteSBzdHJpbmchXCJdLFxyXG4vLyAgICB9KS5nbygpO1xyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IGluc3RhbmNlID0gbmV3IFR5cGVJdCgnI3JlcGxhY2VTdHJpbmdzJywge1xyXG4vLyAgICBzdHJpbmdzOiBbXCJIZWxsb1wiLCBcIkhvdyBhcmUgeW91clwiXSxcclxuLy8gICAgc3BlZWQ6IDIwMCxcclxuLy8gICAgYnJlYWtMaW5lczogdHJ1ZSxcclxuLy8gICAgd2FpdFVudGlsVmlzaWJsZTogdHJ1ZSxcclxuLy8gICAgbmV4dFN0cmluZ0RlbGF5OiAxMDAwXHJcbi8vIH0pLmdvKCk7XHJcblxyXG4vLyBuZXcgVHlwZUl0KFwiI215RWxlbWVudFwiKVxyXG4vLyAgIC50eXBlKFwiVGhpcyBpcyBteSBmaXJzdCBzdHJpbmchXCIpXHJcbi8vICAgLnBhdXNlKDEwMDApXHJcbi8vICAgLnR5cGUoXCJQbHVzIGEgbGl0dGxlIG1vcmUuXCIpXHJcbi8vICAgLmdvKCk7XHJcblxyXG4vLyBjb25zdCBpbnN0YW5jZSA9IG5ldyBUeXBlSXQoJyNoaScsIHtcclxuLy8gICAgc3RyaW5nczogW10sXHJcbi8vICAgIHNwZWVkOiAyMDAsXHJcbi8vICAgIGJyZWFrTGluZXM6IHRydWUsXHJcbi8vICAgIHdhaXRVbnRpbFZpc2libGU6IHRydWUsXHJcbi8vICAgIGN1cnNvcjogdHJ1ZSxcclxuLy8gICAgaHRtbDogdHJ1ZVxyXG4vLyAgICAvLyBuZXh0U3RyaW5nRGVsYXk6IDEwMDAgXHJcbi8vIH0pLmdvKCk7Il0sIm1hcHBpbmdz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