'use strict'; // ======= CLOCK in header START =======//

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var validation = new JustValidate('.form', {
  errorLabelStyle: {
    color: '#FEA55F'
  }
});
validation.addField('.input-name', [// {
//    rule: 'minLength',
//    value: 3,
// },
// {
//    rule: 'maxLength',
//    value: 30,
// },
{
  rule: 'required',
  value: true,
  errorMessage: '_Enter your name'
}]).addField('.input-mail', [{
  rule: 'required',
  value: true,
  errorMessage: '_Enter your e-mail'
}, {
  rule: 'email',
  value: true,
  errorMessage: '_Enter the correct email'
}]).onSuccess(function (event) {
  var _console;

  console.log('Validation passes and form submitted', event);
  var formData = new FormData(event.target);

  (_console = console).log.apply(_console, _toConsumableArray(formData));

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Отправлено');
        var modalWindow = document.querySelector('.contacts-form-modal');
        var overlay = document.querySelector('.contacts-form-modal__overlay');
        var btnCloseModalWindow = document.querySelector('.contacts-form-modal__btn');
        var btnShowModalWindow = document.querySelector('.contacts-form__btn');

        var showModalWindow = function showModalWindow() {
          modalWindow.classList.remove('hidden');
          overlay.classList.remove('hidden');
        };

        var closeModalWindow = function closeModalWindow() {
          modalWindow.classList.add('hidden');
          overlay.classList.add('hidden');
        };

        showModalWindow(); // btnShowModalWindow.addEventListener('click', showModalWindow);

        btnCloseModalWindow.addEventListener('click', closeModalWindow);
        overlay.addEventListener('click', closeModalWindow);
        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
            closeModalWindow();
          }
        });
      }
    }
  };

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);
  event.target.reset();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbInNldEludGVydmFsIiwidGltZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGUiLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJkYXlOaWdodCIsInRleHRDb250ZW50IiwiJCIsInJlYWR5IiwiY2xpY2siLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVVcCIsInNsaWRlRG93biIsInRvZ2dsZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJlYWNoIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJUZXh0IiwidmFsdWUiLCJ2YWxpZGF0aW9uIiwiSnVzdFZhbGlkYXRlIiwiZXJyb3JMYWJlbFN0eWxlIiwiY29sb3IiLCJhZGRGaWVsZCIsInJ1bGUiLCJlcnJvck1lc3NhZ2UiLCJvblN1Y2Nlc3MiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwibW9kYWxXaW5kb3ciLCJvdmVybGF5IiwiYnRuQ2xvc2VNb2RhbFdpbmRvdyIsImJ0blNob3dNb2RhbFdpbmRvdyIsInNob3dNb2RhbFdpbmRvdyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNsb3NlTW9kYWxXaW5kb3ciLCJhZGQiLCJlIiwia2V5IiwiY29udGFpbnMiLCJvcGVuIiwic2VuZCIsInJlc2V0Il0sInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8vID09PT09PT0gQ0xPQ0sgaW4gaGVhZGVyIFNUQVJUID09PT09PT0vL1xyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZScpXHJcblxyXG4gICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKClcclxuICAgbGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKVxyXG5cclxuICAgbGV0IGRheU5pZ2h0ID0gJ0FNJ1xyXG5cclxuICAgaWYgKGhvdXJzID49IDEyKSB7XHJcbiAgICAgIGRheU5pZ2h0ID0gJ1BNJ1xyXG4gICB9XHJcbiAgIGlmIChob3VycyA+IDEyKSB7XHJcbiAgICAgIGhvdXJzID0gaG91cnMgLSAxMlxyXG4gICB9XHJcbiAgIGlmIChob3VycyA8IDEwKSB7XHJcbiAgICAgIGhvdXJzID0gJzAnICsgaG91cnNcclxuICAgfVxyXG4gICBpZiAobWludXRlcyA8IDEwKSB7XHJcbiAgICAgIG1pbnV0ZXMgPSAnMCcgKyBtaW51dGVzXHJcbiAgIH1cclxuICAgaWYgKHNlY29uZHMgPCAxMCkge1xyXG4gICAgICBzZWNvbmRzID0gJzAnICsgc2Vjb25kc1xyXG4gICB9XHJcbiAgIFxyXG4gICB0aW1lLnRleHRDb250ZW50ID0gaG91cnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kcyArICcgJyArIGRheU5pZ2h0XHJcbn0pXHJcbi8vID09PT09PT0gQ0xPQ0sgaW4gaGVhZGVyIEVORCA9PT09PT09Ly9cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSDQntCi0JrQoNCr0KLQmNCVINCX0JDQmtCg0KvQotCY0JUg0LHQu9C+0LrQvtCyIFNUQVJUID09PT09PT0vL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLnBlcnNvbmFsJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLmhvYmJpZXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLmludGVyZXN0cycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5lZHVjYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucmVzdW1lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1wcm9mZXNzaW9uYWwnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1ob2JiaWVzJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItcGVyc29uYWwnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcuZ3JlZXRpbmctdGV4dC1hY3RpdmUnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcuZ3JlZXRpbmctaW5mbycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5wZXJzb25hbC10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucGVyc29uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuYmlvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLnByb2Zlc3Npb25hbC10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmhvYmJpZXMtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmhvYmJpZXMtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucmVzdW1lLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5lZHVjYXRpb24taW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5wcm9mZXNzaW9uYWwnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLnBlcnNvbmFsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5ob2JiaWVzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5iaW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLnBlcnNvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVVcCgxMDApXHJcbiAgICAgICQoJy5wZXJzb25hbC1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZ3JlZXRpbmctaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLnByb2Zlc3Npb25hbC1pbmZvJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1wZXJzb25hbCcpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLWhvYmJpZXMnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1wcm9mZXNzaW9uYWwnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcuaG9iYmllcy10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaG9iYmllcy1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLnJlc3VtZS1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5lZHVjYXRpb24taW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5ob2JiaWVzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5wZXJzb25hbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUtaWNvbnMnKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5iaW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucmVzdW1lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmVkdWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5wZXJzb25hbC10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMTAwKVxyXG4gICAgICAkKCcucGVyc29uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLXBlcnNvbmFsJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItcHJvZmVzc2lvbmFsJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItaG9iYmllcycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZ3JlZXRpbmctaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaG9iYmllcy10ZXh0LWFjdGl2ZScpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ob2JiaWVzLWluZm8nKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcucmVzdW1lLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5lZHVjYXRpb24taW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUg0J7QotCa0KDQq9Ci0JjQlSDQl9CQ0JrQoNCr0KLQmNCVINCx0LvQvtC60L7QsiBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBwZXJzb25hbC1pbmZvIFNUQVJUID09PT09PT0vL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLm1lbnUtcGVyc29uYWwtaW5mb19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCgnLm1lbnUtcGVyc29uYWwtaW5mb19faXRlbScpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW5mby1zdWJ0aXRsZS1iaW8nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5iaW8nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLm1lbnUtY29udGFjdHNfX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQoJy5hYm91dC1tZW51LWNvbnRhY3RzJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUgcGVyc29uYWwtaW5mbyBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuLy8gPT09PT09PSDQodC70LDQudC00LXRgCDQsiDQsdC70L7QutC1INC80LXQvdGOIGFib3V0LW1lIHByb2Zlc3Npb25hbC1pbmZvIFNUQVJUID09PT09PT0vL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLm1lbnUtcHJvZmVzc2lvbmFsLWluZm9fX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQoJy5tZW51LXByb2Zlc3Npb25hbC1pbmZvX19pdGVtJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5pbmZvLXN1YnRpdGxlLWNhcmVlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLnJlc3VtZScpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW5mby1zdWJ0aXRsZS1lZHVjYXRpb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5lZHVjYXRpb24nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLnJlc3VtZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5lZHVjYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucmVzdW1lLXRleHQtYWN0aXZlJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLnJlc3VtZS1pbmZvJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLnByb2Zlc3Npb25hbC10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmVkdWNhdGlvbi10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuZWR1Y2F0aW9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLnJlc3VtZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5lZHVjYXRpb24tdGV4dC1hY3RpdmUnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLWluZm8nKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucmVzdW1lLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUgcHJvZmVzc2lvbmFsLWluZm8gRU5EID09PT09PT0vL1xyXG5cclxuXHJcblxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUgaG9iYmllcy1pbmZvIFNUQVJUID09PT09PT0vL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5tZW51LWhvYmJpZXMtaW5mb19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCgnLm1lbnUtaG9iYmllcy1pbmZvX19pdGVtJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5pbmZvLXN1YnRpdGxlLWludGVyZXN0cycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmludGVyZXN0cycpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW50ZXJlc3RzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmludGVyZXN0cy10ZXh0LWFjdGl2ZScpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtaW5mbycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ob2JiaWVzLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5ob2JiaWVzLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBob2JiaWVzLWluZm8gRU5EID09PT09PT0vL1xyXG5cclxuXHJcblxyXG4vKiogPT09PT09PSDQodC80LXQvdCwINGG0LLQtdGC0LAg0L/QvtC00LzQtdC90Y4g0L/RgNC4INCw0LrRgtC40LLQvdC+0Lkg0YHRgdGL0LvQutC1IFNUQVJUID09PT09PT09PT0qKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5iaW8nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucGVyc29uYWwtdGV4dC1hY3RpdmUnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcucGVyc29uYWwtaW5mbycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZ3JlZXRpbmctaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAvLyAkKCcuaW50ZXJlc3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgLy8gJCgnLmVkdWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAgJCgnLmVkdWNhdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbi8vICAgICAgICQoJy5iaW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4vLyAgICAgICAkKCcuaW50ZXJlc3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuLy8gICAgfSlcclxuLy8gfSlcclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAkKCcuaW50ZXJlc3RzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuLy8gICAgICAgJCgnLmJpbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbi8vICAgICAgICQoJy5lZHVjYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG4vKiogPT09PT09PSDQodC80LXQvdCwINGG0LLQtdGC0LAg0L/QvtC00LzQtdC90Y4g0L/RgNC4INCw0LrRgtC40LLQvdC+0Lkg0YHRgdGL0LvQutC1IEVORCA9PT09PT09PT09KiovXHJcblxyXG5cclxuXHJcbi8qKj09PT09PT09PT09PT09PT09INCf0L7Rj9Cy0LvQtdC90LjQtSDRgdC60YDRi9GC0LjQtSDQsdC70L7QutC+0LIgZGV0YWlscyBTVEFSVCA9PT09PT09PT09ICovXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuZGV0YWlscy10b3AnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5kZXRhaWxzLWJvdHRvbScpLnJlbW92ZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmRldGFpbHMtb25lJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICAgICAkKCcuZGV0YWlscy10d28nKS5zbGlkZVVwKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuZGV0YWlscy1ib3R0b20nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5kZXRhaWxzLXRvcCcpLnJlbW92ZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmRldGFpbHMtdHdvJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICAgICAkKCcuZGV0YWlscy1vbmUnKS5zbGlkZVVwKDMwMClcclxuICAgfSlcclxufSlcclxuLyoqPT09PT09PT09PT09PT09PT0g0J/QvtGP0LLQu9C10L3QuNC1INGB0LrRgNGL0YLQuNC1INCx0LvQvtC60L7QsiBkZXRhaWxzIEVORCA9PT09PT09PT09ICovXHJcblxyXG5cclxuXHJcbi8qKj09PT09PT09PT09IEFqYXgg0LfQsNC/0YDQvtGBINC00LvRjyDQsNC60YLQuNCy0L3Ri9GFINGB0YHRi9C70L7QuiBTVEFSVCA9PT09PT09PT09PT0gKi9cclxuJChmdW5jdGlvbigpIHtcclxuICAgJCgnLm5hdiBbaHJlZl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5ocmVmID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XHJcbiAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hlYWRlci1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAkKCduYXYgW2hyZWZdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuaHJlZiA9PSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xyXG4gICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdoZWFkZXItYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcbn0pO1xyXG4vKio9PT09PT09PT09PSBBamF4INC30LDQv9GA0L7RgSDQtNC70Y8g0LDQutGC0LjQstC90YvRhSDRgdGB0YvQu9C+0LogRU5EID09PT09PT09PT09PSAqL1xyXG5cclxuXHJcblxyXG5cclxuLyoqPT09PT0g0KLQtdC60YHRgiDQsiDQstC40LTQtSDQv9C10YfQsNGC0L3QvtC5INC80LDRiNC40L3QutC4ICovXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgIG5ldyBUeXBlSXQoXCIjZWxlbWVudFwiLCB7XHJcbi8vICAgICAgIHN0cmluZ3M6IFtcIlRoaXMgaXMgbXkgc3RyaW5nIVwiXSxcclxuLy8gICAgfSkuZ28oKTtcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBpbnN0YW5jZSA9IG5ldyBUeXBlSXQoJyNyZXBsYWNlU3RyaW5ncycsIHtcclxuLy8gICAgc3RyaW5nczogW1wiSGVsbG9cIiwgXCJIb3cgYXJlIHlvdXJcIl0sXHJcbi8vICAgIHNwZWVkOiAyMDAsXHJcbi8vICAgIGJyZWFrTGluZXM6IHRydWUsXHJcbi8vICAgIHdhaXRVbnRpbFZpc2libGU6IHRydWUsXHJcbi8vICAgIG5leHRTdHJpbmdEZWxheTogMTAwMFxyXG4vLyB9KS5nbygpO1xyXG5cclxuLy8gbmV3IFR5cGVJdChcIiNteUVsZW1lbnRcIilcclxuLy8gICAudHlwZShcIlRoaXMgaXMgbXkgZmlyc3Qgc3RyaW5nIVwiKVxyXG4vLyAgIC5wYXVzZSgxMDAwKVxyXG4vLyAgIC50eXBlKFwiUGx1cyBhIGxpdHRsZSBtb3JlLlwiKVxyXG4vLyAgIC5nbygpO1xyXG5cclxuLy8gY29uc3QgaW5zdGFuY2UgPSBuZXcgVHlwZUl0KCcjaGknLCB7XHJcbi8vICAgIHN0cmluZ3M6IFtdLFxyXG4vLyAgICBzcGVlZDogMjAwLFxyXG4vLyAgICBicmVha0xpbmVzOiB0cnVlLFxyXG4vLyAgICB3YWl0VW50aWxWaXNpYmxlOiB0cnVlLFxyXG4vLyAgICBjdXJzb3I6IHRydWUsXHJcbi8vICAgIGh0bWw6IHRydWVcclxuLy8gICAgLy8gbmV4dFN0cmluZ0RlbGF5OiAxMDAwIFxyXG4vLyB9KS5nbygpO1xyXG5cclxuXHJcblxyXG5cclxuLy8gPT09PT09PSDQodC70LDQudC00LXRgCDQsiDQsdC70L7QutC1INC80LXQvdGOIFBST0pFQ1RTLU1FTlUgU1RBUlQgPT09PT09PS8vXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcucHJvamVjdHMtbWVudS10aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtcHJvamVjdHMnKVxyXG4gICAgICAkKCcucHJvamVjdHMtbWVudS1saXN0Jykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gUFJPSkVDVFMtTUVOVSBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuXHJcblxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gQ09OVEFDVC1NRSBTVEFSVCA9PT09PT09Ly9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5jb250YWN0cy1tZW51X190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtY29udGFjdHMnKVxyXG4gICAgICAkKCcuY29udGFjdHMtbWVudV9fbGlzdCcpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuY29udGFjdHMtbWVudS1maW5kX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtY29udGFjdHMnKVxyXG4gICAgICAkKCcuY29udGFjdHMtbWVudS1maW5kX19saXN0Jykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gQ09OVEFDVC1NRSBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuXHJcblxyXG4vLyA9PT09PT09INCi0LXQutGBINC90LDQv9C40YHQsNC90L3Ri9C5INCyINGE0L7RgNC80LUg0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINCyINGB0L7RgdC10LTQvdC10Lwg0LHQu9C+0LrQtSBDT05UQUNULU1FIFNUQVJUID09PT09PT0vL1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTmFtZScpLmlubmVyVGV4dCA9IHRoaXMudmFsdWVcclxufSlcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyRW1haWwnKS5pbm5lclRleHQgPSB0aGlzLnZhbHVlXHJcbn0pXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTWVzc2FnZScpLmlubmVyVGV4dCA9IHRoaXMudmFsdWVcclxufSlcclxuLy8gPT09PT09PSDQotC10LrRgSDQvdCw0L/QuNGB0LDQvdC90YvQuSDQsiDRhNC+0YDQvNC1INC+0YLQvtCx0YDQsNC20LDQtdGC0YHRjyDQsiDRgdC+0YHQtdC00L3QtdC8INCx0LvQvtC60LUgQ09OVEFDVC1NRSBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuXHJcblxyXG4vLyA9PT09PT09INCS0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvNGLINC4INC+0YLQv9GA0LDQstC60LAg0LTQsNC90L3Ri9GFINC90LAg0L/QvtGH0YLRgyBDT05UQUNULU1FIFNUQVJUID09PT09PT0vL1xyXG5jb25zdCB2YWxpZGF0aW9uID0gbmV3IEp1c3RWYWxpZGF0ZSgnLmZvcm0nLCB7XHJcbiAgIGVycm9yTGFiZWxTdHlsZToge1xyXG4gICAgICBjb2xvcjogJyNGRUE1NUYnLFxyXG4gICB9XHJcbn0pXHJcblxyXG52YWxpZGF0aW9uXHJcbiAgIC5hZGRGaWVsZCgnLmlucHV0LW5hbWUnLCBbXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICAgcnVsZTogJ21pbkxlbmd0aCcsXHJcbiAgICAgIC8vICAgIHZhbHVlOiAzLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgIHJ1bGU6ICdtYXhMZW5ndGgnLFxyXG4gICAgICAvLyAgICB2YWx1ZTogMzAsXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgIGVycm9yTWVzc2FnZTogJ19FbnRlciB5b3VyIG5hbWUnXHJcbiAgICAgIH1cclxuICAgXSlcclxuICAgLmFkZEZpZWxkKCcuaW5wdXQtbWFpbCcsIFtcclxuICAgICAge1xyXG4gICAgICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgZXJyb3JNZXNzYWdlOiAnX0VudGVyIHlvdXIgZS1tYWlsJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIHJ1bGU6ICdlbWFpbCcsXHJcbiAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICBlcnJvck1lc3NhZ2U6ICdfRW50ZXIgdGhlIGNvcnJlY3QgZW1haWwnXHJcbiAgICAgIH0sXHJcbiAgIF0pLm9uU3VjY2VzcygoZXZlbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1ZhbGlkYXRpb24gcGFzc2VzIGFuZCBmb3JtIHN1Ym1pdHRlZCcsIGV2ZW50KVxyXG5cclxuXHJcbiAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xyXG5cclxuICAgY29uc29sZS5sb2coLi4uZm9ybURhdGEpO1xyXG5cclxuICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ce0YLQv9GA0LDQstC70LXQvdC+Jyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cy1mb3JtLW1vZGFsJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtZm9ybS1tb2RhbF9fb3ZlcmxheScpO1xyXG4gICAgICAgICAgICBjb25zdCBidG5DbG9zZU1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzLWZvcm0tbW9kYWxfX2J0bicpO1xyXG4gICAgICAgICAgICBjb25zdCBidG5TaG93TW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtZm9ybV9fYnRuJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvd01vZGFsV2luZG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlTW9kYWxXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2hvd01vZGFsV2luZG93KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBidG5TaG93TW9kYWxXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TW9kYWxXaW5kb3cpO1xyXG5cclxuICAgICAgICAgICAgYnRuQ2xvc2VNb2RhbFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWxXaW5kb3cpO1xyXG5cclxuICAgICAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWxXaW5kb3cpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScgJiYgIW1vZGFsV2luZG93LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbFdpbmRvdygpXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnbWFpbC5waHAnLCB0cnVlKTtcclxuICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XHJcbiAgIH0pOyJdLCJtYXBwaW5ncyI6IkFBQUEsYSxDQUVBOzs7Ozs7Ozs7Ozs7OztBQUNBQSxXQUFXLENBQUMsWUFBTTtFQUNmLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENB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