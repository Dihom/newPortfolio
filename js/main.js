'use strict'; // Слайдер в блоке меню about-me
// $(document).ready(function() {
//    $('.menu-personal-info__title').click(function(event) {
//       $(this).toggleClass('active').nextAll('.menu-personal-info__subtitle').slideToggle(300)
//    })
// })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZVxyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vICAgICQoJy5tZW51LXBlcnNvbmFsLWluZm9fX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuLy8gICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJykubmV4dEFsbCgnLm1lbnUtcGVyc29uYWwtaW5mb19fc3VidGl0bGUnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbi8vICAgIH0pXHJcbi8vIH0pXHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAgJCgnLm1lbnUtcGVyc29uYWwtaW5mb19fc3VidGl0bGUnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4vLyAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCcubWVudS1wZXJzb25hbC1pbmZvX190ZXh0Jykuc2xpZGVUb2dnbGUoMzAwKVxyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG5cclxuXHJcbi8vIC8vINCU0L7QsdCw0LLQu9GP0LXRgi3Rg9C00LDQu9GP0LXRgiDQsdC10LvRi9C5INGG0LLQtdGCINGC0LXQutGB0YLQsCDQv9Cw0L/QvtC6XHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAkKCcubWVudS1wZXJzb25hbC1pbmZvX19zdWJ0aXRsZScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3doaXRlLXRleHQnKVxyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG5cclxuLy8gLy8g0JTQvtCx0LDQstC70Y/QtdGCINCx0LXQu9GL0Lkg0YbQstC10YIg0YLQtdC60YHRgtGDXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAkKCcubWVudS1wZXJzb25hbC1pbmZvX190ZXh0JykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuLy8gICAgICAgJCh0aGlzKS5hZGRDbGFzcygnd2hpdGUtdGV4dCcpXHJcbi8vICAgIH0pXHJcbi8vIH0pXHJcblxyXG4vLyAvLyDQo9C00LDQu9GP0LXRgiDQsdC10LvRi9C5INGG0LLQtdGCINGDINGC0LXQutGB0YLQsFxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAgJCgnLm1lbnUtcGVyc29uYWwtaW5mb19fc3VidGl0bGUnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4vLyAgICAgICAkKCcubWVudS1wZXJzb25hbC1pbmZvX190ZXh0JykucmVtb3ZlQ2xhc3MoJ3doaXRlLXRleHQnKVxyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUEsYSxDQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EifQ==