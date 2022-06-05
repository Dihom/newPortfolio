'use strict'; // ======= CLOCK in header START =======//

setInterval(function () {
  var time = document.querySelector('#time');
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var dayNight = 'AM';

  if (hours >= 12) {
    dayNight = 'PM';
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  time.textContent = hours + ':' + minutes + ':' + seconds + ' ' + dayNight;
}); // ======= CLOCK in header END =======//
// ======= Слайдер в блоке меню about-me ОТКРЫТИЕ ЗАКРЫТИЕ блоков START =======//

$(document).ready(function () {
  $('.personal').click(function () {
    $(this).addClass('active-icons');
    $('.professional').removeClass('active-icons');
    $('.hobbies').removeClass('active-icons');
    $('.interests').removeClass('active-text-color');
    $('.education').removeClass('active-text-color');
    $('.resume').removeClass('active-text-color');
    $('.menu-wrapper-professional').slideUp(300);
    $('.menu-wrapper-hobbies').slideUp(300);
    $('.menu-wrapper-personal').slideDown(300);
    $('.greeting-text-active').slideDown(300);
    $('.greeting-info').slideDown(300);
    $('.personal-text-active').slideUp(300);
    $('.personal-info').slideUp(300);
    $('.bio').removeClass('active-text-color');
    $('.professional-text-active').slideUp(300);
    $('.professional-info').slideUp(300);
    $('.hobbies-text-active').slideUp(300);
    $('.hobbies-info').slideUp(300);
    $('.resume-text-active').slideUp(300);
    $('.resume-info').slideUp(300);
    $('.education-text-active').slideUp(300);
    $('.education-info').slideUp(300);
    $('.interests-text-active').slideUp(300);
    $('.interests-info').slideUp(300);
  });
});
$(document).ready(function () {
  $('.professional').click(function () {
    $(this).addClass('active-icons');
    $('.personal').removeClass('active-icons');
    $('.hobbies').removeClass('active-icons');
    $('.bio').removeClass('active-text-color');
    $('.interests').removeClass('active-text-color');
    $('.personal-text-active').slideUp(100);
    $('.personal-info').slideUp(300);
    $('.greeting-text-active').slideUp(300);
    $('.greeting-info').slideUp(300);
    $('.professional-text-active').slideDown(300);
    $('.professional-info').slideDown(300);
    $('.menu-wrapper-personal').slideUp(300);
    $('.menu-wrapper-hobbies').slideUp(300);
    $('.menu-wrapper-professional').slideDown(300);
    $('.hobbies-text-active').slideUp(300);
    $('.hobbies-info').slideUp(300);
    $('.resume-text-active').slideUp(300);
    $('.resume-info').slideUp(300);
    $('.resume').removeClass('active-text-color');
    $('.education-text-active').slideUp(300);
    $('.education-info').slideUp(300);
    $('.interests-text-active').slideUp(300);
    $('.interests-info').slideUp(300);
  });
});
$(document).ready(function () {
  $('.hobbies').click(function () {
    $(this).addClass('active-icons');
    $('.personal').removeClass('active-icons');
    $('.professional').removeClass('active-icons');
    $('.bio').removeClass('active-text-color');
    $('.resume').removeClass('active-text-color');
    $('.education').removeClass('active-text-color');
    $('.personal-text-active').slideUp(100);
    $('.personal-info').slideUp(300);
    $('.menu-wrapper-personal').slideUp(300);
    $('.menu-wrapper-professional').slideUp(300);
    $('.menu-wrapper-hobbies').slideDown(300);
    $('.greeting-text-active').slideUp(300);
    $('.greeting-info').slideUp(300);
    $('.professional-text-active').slideUp(300);
    $('.professional-info').slideUp(300);
    $('.hobbies-text-active').slideDown(300);
    $('.hobbies-info').slideDown(300);
    $('.resume-text-active').slideUp(300);
    $('.resume-info').slideUp(300);
    $('.education-text-active').slideUp(300);
    $('.education-info').slideUp(300);
    $('.interests-text-active').slideUp(300);
    $('.interests-info').slideUp(300);
  });
}); // ======= Слайдер в блоке меню about-me ОТКРЫТИЕ ЗАКРЫТИЕ блоков END =======//
// ======= Слайдер в блоке меню about-me personal-info START =======//

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
  $('.menu-contacts__title').click(function () {
    $(this).toggleClass('active');
    $('.about-menu-contacts').slideToggle(300);
  });
}); // ======= Слайдер в блоке меню about-me personal-info END =======//
// ======= Слайдер в блоке меню about-me professional-info START =======//

$(document).ready(function () {
  $('.menu-professional-info__title').click(function () {
    $(this).toggleClass('active');
    $('.menu-professional-info__item').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.info-subtitle-career').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.resume').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.info-subtitle-education').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('white-text');
    $('.education').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.resume').click(function () {
    $(this).addClass('active-text-color');
    $('.education').removeClass('active-text-color');
    $('.resume-text-active').slideDown(300);
    $('.resume-info').slideDown(300);
    $('.professional-text-active').slideUp(300);
    $('.professional-info').slideUp(300);
    $('.education-text-active').slideUp(300);
    $('.education-info').slideUp(300);
  });
});
$(document).ready(function () {
  $('.education').click(function () {
    $(this).addClass('active-text-color');
    $('.resume').removeClass('active-text-color');
    $('.education-text-active').slideDown(300);
    $('.education-info').slideDown(300);
    $('.professional-text-active').slideUp(300);
    $('.professional-info').slideUp(300);
    $('.resume-text-active').slideUp(300);
    $('.resume-info').slideUp(300);
  });
}); // ======= Слайдер в блоке меню about-me professional-info END =======//
// ======= Слайдер в блоке меню about-me hobbies-info START =======//

$(document).ready(function () {
  $('.menu-hobbies-info__title').click(function () {
    $(this).toggleClass('active');
    $('.menu-hobbies-info__item').slideToggle(300);
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
  $('.interests').click(function () {
    $(this).addClass('active-text-color');
    $('.interests-text-active').slideDown(300);
    $('.interests-info').slideDown(300);
    $('.hobbies-text-active').slideUp(300);
    $('.hobbies-info').slideUp(300);
  });
}); // ======= Слайдер в блоке меню about-me hobbies-info END =======//

/** ======= Смена цвета подменю при активной ссылке START ==========**/

$(document).ready(function () {
  $('.bio').click(function () {
    $(this).addClass('active-text-color');
    $('.personal-text-active').slideDown(300);
    $('.personal-info').slideDown(300);
    $('.greeting-text-active').slideUp(300);
    $('.greeting-info').slideUp(300); // $('.interests').removeClass('active-text-color')
    // $('.education').removeClass('active-text-color')
  });
}); // $(document).ready(function() {
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

$(document).ready(function () {
  $('.details-top').click(function () {
    $(this).toggleClass('white-text');
    $('.details-bottom').removeClass('white-text');
    $('.details-one').slideToggle(300);
    $('.details-two').slideUp(300);
  });
});
$(document).ready(function () {
  $('.details-bottom').click(function () {
    $(this).toggleClass('white-text');
    $('.details-top').removeClass('white-text');
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
// ======= Слайдер в блоке меню PROJECTS-MENU START =======//

$(document).ready(function () {
  $('.projects-menu-title').click(function () {
    $(this).toggleClass('active-projects');
    $('.projects-menu-list').slideToggle(300);
  });
}); // ======= Слайдер в блоке меню PROJECTS-MENU END =======//
// ======= Слайдер в блоке меню CONTACT-ME START =======//

$(document).ready(function () {
  $('.contacts-menu__title').click(function () {
    $(this).toggleClass('active-contacts');
    $('.contacts-menu__list').slideToggle(300);
  });
});
$(document).ready(function () {
  $('.contacts-menu-find__title').click(function () {
    $(this).toggleClass('active-contacts');
    $('.contacts-menu-find__list').slideToggle(300);
  });
}); // ======= Слайдер в блоке меню CONTACT-ME END =======//
// ======= Текс написанный в форме отображается в соседнем блоке CONTACT-ME START =======//

document.getElementById('name').addEventListener('input', function () {
  document.getElementById('userName').innerText = this.value;
});
document.getElementById('email').addEventListener('input', function () {
  document.getElementById('userEmail').innerText = this.value;
});
document.getElementById('message').addEventListener('input', function () {
  document.getElementById('userMessage').innerText = this.value;
}); // ======= Текс написанный в форме отображается в соседнем блоке CONTACT-ME END =======//
// ======= Валидация формы и отправка данных на почту CONTACT-ME START =======//

new window.JustValidate('.form', {
  rules: {},
  messages: {
    name: {
      required: '_Enter your name',
      minLength: '_Enter 3 or more characters',
      maxLength: '_Enter no more than 15 characters'
    },
    email: {
      email: '_Enter the correct email',
      required: '_Enter your e-mail'
    }
  },
  submitHandler: function submitHandler(thisForm) {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbInNldEludGVydmFsIiwidGltZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGUiLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJkYXlOaWdodCIsInRleHRDb250ZW50IiwiJCIsInJlYWR5IiwiY2xpY2siLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVVcCIsInNsaWRlRG93biIsInRvZ2dsZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJlYWNoIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJUZXh0IiwidmFsdWUiLCJKdXN0VmFsaWRhdGUiLCJydWxlcyIsIm1lc3NhZ2VzIiwibmFtZSIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiZW1haWwiLCJzdWJtaXRIYW5kbGVyIiwidGhpc0Zvcm0iXSwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8gPT09PT09PSBDTE9DSyBpbiBoZWFkZXIgU1RBUlQgPT09PT09PS8vXHJcbnNldEludGVydmFsKCgpID0+IHtcclxuICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aW1lJylcclxuXHJcbiAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKClcclxuICAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gICBsZXQgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcblxyXG4gICBsZXQgZGF5TmlnaHQgPSAnQU0nXHJcblxyXG4gICBpZiAoaG91cnMgPj0gMTIpIHtcclxuICAgICAgZGF5TmlnaHQgPSAnUE0nXHJcbiAgIH1cclxuICAgaWYgKGhvdXJzID4gMTIpIHtcclxuICAgICAgaG91cnMgPSBob3VycyAtIDEyXHJcbiAgIH1cclxuICAgaWYgKGhvdXJzIDwgMTApIHtcclxuICAgICAgaG91cnMgPSAnMCcgKyBob3Vyc1xyXG4gICB9XHJcbiAgIGlmIChtaW51dGVzIDwgMTApIHtcclxuICAgICAgbWludXRlcyA9ICcwJyArIG1pbnV0ZXNcclxuICAgfVxyXG4gICBpZiAoc2Vjb25kcyA8IDEwKSB7XHJcbiAgICAgIHNlY29uZHMgPSAnMCcgKyBzZWNvbmRzXHJcbiAgIH1cclxuICAgXHJcbiAgIHRpbWUudGV4dENvbnRlbnQgPSBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmRzICsgJyAnICsgZGF5TmlnaHRcclxufSlcclxuLy8gPT09PT09PSBDTE9DSyBpbiBoZWFkZXIgRU5EID09PT09PT0vL1xyXG5cclxuXHJcblxyXG5cclxuLy8gPT09PT09PSDQodC70LDQudC00LXRgCDQsiDQsdC70L7QutC1INC80LXQvdGOIGFib3V0LW1lINCe0KLQmtCg0KvQotCY0JUg0JfQkNCa0KDQq9Ci0JjQlSDQsdC70L7QutC+0LIgU1RBUlQgPT09PT09PS8vXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcucGVyc29uYWwnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLnByb2Zlc3Npb25hbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUtaWNvbnMnKVxyXG4gICAgICAkKCcuaG9iYmllcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtaWNvbnMnKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmVkdWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5yZXN1bWUnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLXByb2Zlc3Npb25hbCcpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLWhvYmJpZXMnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1wZXJzb25hbCcpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy10ZXh0LWFjdGl2ZScpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy1pbmZvJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLnBlcnNvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5wZXJzb25hbC1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5iaW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaG9iYmllcy10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaG9iYmllcy1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLnJlc3VtZS1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5lZHVjYXRpb24tdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmVkdWNhdGlvbi1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmludGVyZXN0cy1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLnByb2Zlc3Npb25hbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtaWNvbnMnKVxyXG4gICAgICAkKCcucGVyc29uYWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLmhvYmJpZXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLmJpbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5pbnRlcmVzdHMnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucGVyc29uYWwtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDEwMClcclxuICAgICAgJCgnLnBlcnNvbmFsLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmdyZWV0aW5nLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwtdGV4dC1hY3RpdmUnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLWluZm8nKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLXBlcnNvbmFsJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItaG9iYmllcycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLXByb2Zlc3Npb25hbCcpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ob2JiaWVzLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5ob2JiaWVzLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLnJlc3VtZS10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucmVzdW1lLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLnJlc3VtZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5lZHVjYXRpb24tdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmVkdWNhdGlvbi1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmludGVyZXN0cy1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmhvYmJpZXMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLnBlcnNvbmFsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLmJpbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5yZXN1bWUnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLnBlcnNvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVVcCgxMDApXHJcbiAgICAgICQoJy5wZXJzb25hbC1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItcGVyc29uYWwnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1wcm9mZXNzaW9uYWwnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1ob2JiaWVzJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLmdyZWV0aW5nLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLnByb2Zlc3Npb25hbC1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5ob2JiaWVzLXRleHQtYWN0aXZlJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLmhvYmJpZXMtaW5mbycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLnJlc3VtZS1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5lZHVjYXRpb24tdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmVkdWNhdGlvbi1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmludGVyZXN0cy1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgIH0pXHJcbn0pXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSDQntCi0JrQoNCr0KLQmNCVINCX0JDQmtCg0KvQotCY0JUg0LHQu9C+0LrQvtCyIEVORCA9PT09PT09Ly9cclxuXHJcblxyXG5cclxuLy8gPT09PT09PSDQodC70LDQudC00LXRgCDQsiDQsdC70L7QutC1INC80LXQvdGOIGFib3V0LW1lIHBlcnNvbmFsLWluZm8gU1RBUlQgPT09PT09PS8vXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcubWVudS1wZXJzb25hbC1pbmZvX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKCcubWVudS1wZXJzb25hbC1pbmZvX19pdGVtJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5pbmZvLXN1YnRpdGxlLWJpbycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmJpbycpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcubWVudS1jb250YWN0c19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCgnLmFib3V0LW1lbnUtY29udGFjdHMnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBwZXJzb25hbC1pbmZvIEVORCA9PT09PT09Ly9cclxuXHJcblxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUgcHJvZmVzc2lvbmFsLWluZm8gU1RBUlQgPT09PT09PS8vXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcubWVudS1wcm9mZXNzaW9uYWwtaW5mb19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCgnLm1lbnUtcHJvZmVzc2lvbmFsLWluZm9fX2l0ZW0nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmluZm8tc3VidGl0bGUtY2FyZWVyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3doaXRlLXRleHQnKVxyXG4gICAgICAkKCcucmVzdW1lJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5pbmZvLXN1YnRpdGxlLWVkdWNhdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmVkdWNhdGlvbicpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcucmVzdW1lJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmVkdWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5yZXN1bWUtdGV4dC1hY3RpdmUnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcucmVzdW1lLWluZm8nKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5lZHVjYXRpb24taW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5lZHVjYXRpb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucmVzdW1lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmVkdWNhdGlvbi10ZXh0LWFjdGl2ZScpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5lZHVjYXRpb24taW5mbycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLnByb2Zlc3Npb25hbC1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLnJlc3VtZS1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgIH0pXHJcbn0pXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBwcm9mZXNzaW9uYWwtaW5mbyBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBob2JiaWVzLWluZm8gU1RBUlQgPT09PT09PS8vXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLm1lbnUtaG9iYmllcy1pbmZvX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKCcubWVudS1ob2JiaWVzLWluZm9fX2l0ZW0nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmluZm8tc3VidGl0bGUtaW50ZXJlc3RzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3doaXRlLXRleHQnKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5pbnRlcmVzdHMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzLXRleHQtYWN0aXZlJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLmludGVyZXN0cy1pbmZvJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLmhvYmJpZXMtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmhvYmJpZXMtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuLy8gPT09PT09PSDQodC70LDQudC00LXRgCDQsiDQsdC70L7QutC1INC80LXQvdGOIGFib3V0LW1lIGhvYmJpZXMtaW5mbyBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuXHJcbi8qKiA9PT09PT09INCh0LzQtdC90LAg0YbQstC10YLQsCDQv9C+0LTQvNC10L3RjiDQv9GA0Lgg0LDQutGC0LjQstC90L7QuSDRgdGB0YvQu9C60LUgU1RBUlQgPT09PT09PT09PSoqL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmJpbycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5wZXJzb25hbC10ZXh0LWFjdGl2ZScpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5wZXJzb25hbC1pbmZvJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLmdyZWV0aW5nLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgIC8vICQoJy5pbnRlcmVzdHMnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAvLyAkKCcuZWR1Y2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgfSlcclxufSlcclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAkKCcuZWR1Y2F0aW9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuLy8gICAgICAgJCgnLmJpbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbi8vICAgICAgICQoJy5pbnRlcmVzdHMnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vICAgICQoJy5pbnRlcmVzdHMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuLy8gICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4vLyAgICAgICAkKCcuYmlvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuLy8gICAgICAgJCgnLmVkdWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbi8vICAgIH0pXHJcbi8vIH0pXHJcbi8qKiA9PT09PT09INCh0LzQtdC90LAg0YbQstC10YLQsCDQv9C+0LTQvNC10L3RjiDQv9GA0Lgg0LDQutGC0LjQstC90L7QuSDRgdGB0YvQu9C60LUgRU5EID09PT09PT09PT0qKi9cclxuXHJcblxyXG5cclxuLyoqPT09PT09PT09PT09PT09PT0g0J/QvtGP0LLQu9C10L3QuNC1INGB0LrRgNGL0YLQuNC1INCx0LvQvtC60L7QsiBkZXRhaWxzIFNUQVJUID09PT09PT09PT0gKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5kZXRhaWxzLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmRldGFpbHMtYm90dG9tJykucmVtb3ZlQ2xhc3MoJ3doaXRlLXRleHQnKVxyXG4gICAgICAkKCcuZGV0YWlscy1vbmUnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgICAgICQoJy5kZXRhaWxzLXR3bycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5kZXRhaWxzLWJvdHRvbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmRldGFpbHMtdG9wJykucmVtb3ZlQ2xhc3MoJ3doaXRlLXRleHQnKVxyXG4gICAgICAkKCcuZGV0YWlscy10d28nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgICAgICQoJy5kZXRhaWxzLW9uZScpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vKio9PT09PT09PT09PT09PT09PSDQn9C+0Y/QstC70LXQvdC40LUg0YHQutGA0YvRgtC40LUg0LHQu9C+0LrQvtCyIGRldGFpbHMgRU5EID09PT09PT09PT0gKi9cclxuXHJcblxyXG5cclxuLyoqPT09PT09PT09PT0gQWpheCDQt9Cw0L/RgNC+0YEg0LTQu9GPINCw0LrRgtC40LLQvdGL0YUg0YHRgdGL0LvQvtC6IFNUQVJUID09PT09PT09PT09PSAqL1xyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAkKCcubmF2IFtocmVmXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmhyZWYgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcclxuICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaGVhZGVyLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICQoJ25hdiBbaHJlZl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5ocmVmID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XHJcbiAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hlYWRlci1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxufSk7XHJcbi8qKj09PT09PT09PT09IEFqYXgg0LfQsNC/0YDQvtGBINC00LvRjyDQsNC60YLQuNCy0L3Ri9GFINGB0YHRi9C70L7QuiBFTkQgPT09PT09PT09PT09ICovXHJcblxyXG5cclxuXHJcblxyXG4vKio9PT09PSDQotC10LrRgdGCINCyINCy0LjQtNC1INC/0LXRh9Cw0YLQvdC+0Lkg0LzQsNGI0LjQvdC60LggKi9cclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgbmV3IFR5cGVJdChcIiNlbGVtZW50XCIsIHtcclxuLy8gICAgICAgc3RyaW5nczogW1wiVGhpcyBpcyBteSBzdHJpbmchXCJdLFxyXG4vLyAgICB9KS5nbygpO1xyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IGluc3RhbmNlID0gbmV3IFR5cGVJdCgnI3JlcGxhY2VTdHJpbmdzJywge1xyXG4vLyAgICBzdHJpbmdzOiBbXCJIZWxsb1wiLCBcIkhvdyBhcmUgeW91clwiXSxcclxuLy8gICAgc3BlZWQ6IDIwMCxcclxuLy8gICAgYnJlYWtMaW5lczogdHJ1ZSxcclxuLy8gICAgd2FpdFVudGlsVmlzaWJsZTogdHJ1ZSxcclxuLy8gICAgbmV4dFN0cmluZ0RlbGF5OiAxMDAwXHJcbi8vIH0pLmdvKCk7XHJcblxyXG4vLyBuZXcgVHlwZUl0KFwiI215RWxlbWVudFwiKVxyXG4vLyAgIC50eXBlKFwiVGhpcyBpcyBteSBmaXJzdCBzdHJpbmchXCIpXHJcbi8vICAgLnBhdXNlKDEwMDApXHJcbi8vICAgLnR5cGUoXCJQbHVzIGEgbGl0dGxlIG1vcmUuXCIpXHJcbi8vICAgLmdvKCk7XHJcblxyXG4vLyBjb25zdCBpbnN0YW5jZSA9IG5ldyBUeXBlSXQoJyNoaScsIHtcclxuLy8gICAgc3RyaW5nczogW10sXHJcbi8vICAgIHNwZWVkOiAyMDAsXHJcbi8vICAgIGJyZWFrTGluZXM6IHRydWUsXHJcbi8vICAgIHdhaXRVbnRpbFZpc2libGU6IHRydWUsXHJcbi8vICAgIGN1cnNvcjogdHJ1ZSxcclxuLy8gICAgaHRtbDogdHJ1ZVxyXG4vLyAgICAvLyBuZXh0U3RyaW5nRGVsYXk6IDEwMDAgXHJcbi8vIH0pLmdvKCk7XHJcblxyXG5cclxuXHJcblxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gUFJPSkVDVFMtTUVOVSBTVEFSVCA9PT09PT09Ly9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5wcm9qZWN0cy1tZW51LXRpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1wcm9qZWN0cycpXHJcbiAgICAgICQoJy5wcm9qZWN0cy1tZW51LWxpc3QnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBQUk9KRUNUUy1NRU5VIEVORCA9PT09PT09Ly9cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBDT05UQUNULU1FIFNUQVJUID09PT09PT0vL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLmNvbnRhY3RzLW1lbnVfX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1jb250YWN0cycpXHJcbiAgICAgICQoJy5jb250YWN0cy1tZW51X19saXN0Jykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5jb250YWN0cy1tZW51LWZpbmRfX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1jb250YWN0cycpXHJcbiAgICAgICQoJy5jb250YWN0cy1tZW51LWZpbmRfX2xpc3QnKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBDT05UQUNULU1FIEVORCA9PT09PT09Ly9cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KLQtdC60YEg0L3QsNC/0LjRgdCw0L3QvdGL0Lkg0LIg0YTQvtGA0LzQtSDQvtGC0L7QsdGA0LDQttCw0LXRgtGB0Y8g0LIg0YHQvtGB0LXQtNC90LXQvCDQsdC70L7QutC1IENPTlRBQ1QtTUUgU1RBUlQgPT09PT09PS8vXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJOYW1lJykuaW5uZXJUZXh0ID0gdGhpcy52YWx1ZVxyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJFbWFpbCcpLmlubmVyVGV4dCA9IHRoaXMudmFsdWVcclxufSlcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJNZXNzYWdlJykuaW5uZXJUZXh0ID0gdGhpcy52YWx1ZVxyXG59KVxyXG4vLyA9PT09PT09INCi0LXQutGBINC90LDQv9C40YHQsNC90L3Ri9C5INCyINGE0L7RgNC80LUg0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINCyINGB0L7RgdC10LTQvdC10Lwg0LHQu9C+0LrQtSBDT05UQUNULU1FIEVORCA9PT09PT09Ly9cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0JLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC80Ysg0Lgg0L7RgtC/0YDQsNCy0LrQsCDQtNCw0L3QvdGL0YUg0L3QsCDQv9C+0YfRgtGDIENPTlRBQ1QtTUUgU1RBUlQgPT09PT09PS8vXHJcbm5ldyB3aW5kb3cuSnVzdFZhbGlkYXRlKCcuZm9ybScsIHtcclxuICAgcnVsZXM6IHtcclxuICAgICAgXHJcbiAgIH0sXHJcbiAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgIG5hbWU6IHtcclxuICAgICAgICAgcmVxdWlyZWQ6ICdfRW50ZXIgeW91ciBuYW1lJyxcclxuICAgICAgICAgbWluTGVuZ3RoOiAnX0VudGVyIDMgb3IgbW9yZSBjaGFyYWN0ZXJzJyxcclxuICAgICAgICAgbWF4TGVuZ3RoOiAnX0VudGVyIG5vIG1vcmUgdGhhbiAxNSBjaGFyYWN0ZXJzJ1xyXG4gICAgICB9LFxyXG4gICAgICBlbWFpbDoge1xyXG4gICAgICAgICBlbWFpbDogJ19FbnRlciB0aGUgY29ycmVjdCBlbWFpbCcsXHJcbiAgICAgICAgIHJlcXVpcmVkOiAnX0VudGVyIHlvdXIgZS1tYWlsJ1xyXG4gICAgICB9XHJcbiAgIH0sXHJcbiAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKHRoaXNGb3JtKSB7XHJcblxyXG5cclxuXHJcbiAgIH1cclxufSkiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTs7QUFDQUEsV0FBVyxDQUFDLFlBQU07RUFDZixJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0VBRUEsSUFBSUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBWDtFQUNBLElBQUlDLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxRQUFMLEVBQVo7RUFDQSxJQUFJQyxPQUFPLEdBQUdKLElBQUksQ0FBQ0ssVUFBTCxFQUFkO0VBQ0EsSUFBSUMsT0FBTyxHQUFHTixJQUFJLENBQUNPLFVBQUwsRUFBZDtFQUVBLElBQUlDLFFBQVEsR0FBRyxJQUFmOztFQUVBLElBQUlOLEtBQUssSUFBSSxFQUFiLEVBQWlCO0lBQ2RNLFFBQVEsR0FBRyxJQUFYO0VBQ0Y7O0VBQ0QsSUFBSU4sS0FBSyxHQUFHLEVBQVosRUFBZ0I7SUFDYkEsS0FBSyxHQUFHQSxLQUFLLEdBQUcsRUFBaEI7RUFDRjs7RUFDRCxJQUFJQSxLQUFLLEdBQUcsRUFBWixFQUFnQjtJQUNiQSxLQUFLLEdBQUcsTUFBTUEsS0FBZDtFQUNGOztFQUNELElBQUlFLE9BQU8sR0FBRyxFQUFkLEVBQWtCO0lBQ2ZBLE9BQU8sR0FBRyxNQUFNQSxPQUFoQjtFQUNGOztFQUNELElBQUlFLE9BQU8sR0FBRyxFQUFkLEVBQWtCO0lBQ2ZBLE9BQU8sR0FBRyxNQUFNQSxPQUFoQjtFQUNGOztFQUVEVCxJQUFJLENBQUNZLFdBQUwsR0FBbUJQLEtBQUssR0FBRyxHQUFSLEdBQWNFLE9BQWQsR0FBd0IsR0FBeEIsR0FBOEJFLE9BQTlCLEdBQXdDLEdB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