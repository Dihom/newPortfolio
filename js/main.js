'use strict'; // ======= CLOCK in header START =======//

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  function formSend(_x) {
    return _formSend.apply(this, arguments);
  }

  function _formSend() {
    _formSend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              error = formValidate(form);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _formSend.apply(this, arguments);
  }

  function formValidate(form) {
    var error = 0;
    var formReq = document.querySelectorAll('._req');

    for (var index = 0; index < formReq.length; index++) {
      var input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbInNldEludGVydmFsIiwidGltZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGUiLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJkYXlOaWdodCIsInRleHRDb250ZW50IiwiJCIsInJlYWR5IiwiY2xpY2siLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVVcCIsInNsaWRlRG93biIsInRvZ2dsZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJlYWNoIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJUZXh0IiwidmFsdWUiLCJmb3JtIiwiZm9ybVNlbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImZvcm1WYWxpZGF0ZSIsImZvcm1SZXEiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5kZXgiLCJsZW5ndGgiLCJpbnB1dCIsImZvcm1SZW1vdmVFcnJvciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZW1haWxUZXN0IiwiZm9ybUFkZEVycm9yIiwicGFyZW50RWxlbWVudCIsImFkZCIsInJlbW92ZSIsInRlc3QiXSwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuXHJcbi8vID09PT09PT0gQ0xPQ0sgaW4gaGVhZGVyIFNUQVJUID09PT09PT0vL1xyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZScpXHJcblxyXG4gICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKClcclxuICAgbGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKVxyXG5cclxuICAgbGV0IGRheU5pZ2h0ID0gJ0FNJ1xyXG5cclxuICAgaWYgKGhvdXJzID49IDEyKSB7XHJcbiAgICAgIGRheU5pZ2h0ID0gJ1BNJ1xyXG4gICB9XHJcbiAgIGlmIChob3VycyA+IDEyKSB7XHJcbiAgICAgIGhvdXJzID0gaG91cnMgLSAxMlxyXG4gICB9XHJcbiAgIGlmIChob3VycyA8IDEwKSB7XHJcbiAgICAgIGhvdXJzID0gJzAnICsgaG91cnNcclxuICAgfVxyXG4gICBpZiAobWludXRlcyA8IDEwKSB7XHJcbiAgICAgIG1pbnV0ZXMgPSAnMCcgKyBtaW51dGVzXHJcbiAgIH1cclxuICAgaWYgKHNlY29uZHMgPCAxMCkge1xyXG4gICAgICBzZWNvbmRzID0gJzAnICsgc2Vjb25kc1xyXG4gICB9XHJcbiAgIFxyXG4gICB0aW1lLnRleHRDb250ZW50ID0gaG91cnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kcyArICcgJyArIGRheU5pZ2h0XHJcbn0pXHJcbi8vID09PT09PT0gQ0xPQ0sgaW4gaGVhZGVyIEVORCA9PT09PT09Ly9cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSDQntCi0JrQoNCr0KLQmNCVINCX0JDQmtCg0KvQotCY0JUg0LHQu9C+0LrQvtCyIFNUQVJUID09PT09PT0vL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLnBlcnNvbmFsJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLmhvYmJpZXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLmludGVyZXN0cycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5lZHVjYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucmVzdW1lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1wcm9mZXNzaW9uYWwnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1ob2JiaWVzJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItcGVyc29uYWwnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcuZ3JlZXRpbmctdGV4dC1hY3RpdmUnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcuZ3JlZXRpbmctaW5mbycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5wZXJzb25hbC10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucGVyc29uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuYmlvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLnByb2Zlc3Npb25hbC10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmhvYmJpZXMtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmhvYmJpZXMtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucmVzdW1lLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5lZHVjYXRpb24taW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5wcm9mZXNzaW9uYWwnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWljb25zJylcclxuICAgICAgJCgnLnBlcnNvbmFsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5ob2JiaWVzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5iaW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLnBlcnNvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVVcCgxMDApXHJcbiAgICAgICQoJy5wZXJzb25hbC1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZ3JlZXRpbmctaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLnByb2Zlc3Npb25hbC1pbmZvJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1wZXJzb25hbCcpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLWhvYmJpZXMnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLm1lbnUtd3JhcHBlci1wcm9mZXNzaW9uYWwnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcuaG9iYmllcy10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaG9iYmllcy1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtdGV4dC1hY3RpdmUnKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLnJlc3VtZS1pbmZvJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5lZHVjYXRpb24taW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5ob2JiaWVzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5wZXJzb25hbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUtaWNvbnMnKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1pY29ucycpXHJcbiAgICAgICQoJy5iaW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucmVzdW1lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmVkdWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5wZXJzb25hbC10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMTAwKVxyXG4gICAgICAkKCcucGVyc29uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcubWVudS13cmFwcGVyLXBlcnNvbmFsJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItcHJvZmVzc2lvbmFsJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5tZW51LXdyYXBwZXItaG9iYmllcycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZ3JlZXRpbmctaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaG9iYmllcy10ZXh0LWFjdGl2ZScpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ob2JiaWVzLWluZm8nKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcucmVzdW1lLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5lZHVjYXRpb24taW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuaW50ZXJlc3RzLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUg0J7QotCa0KDQq9Ci0JjQlSDQl9CQ0JrQoNCr0KLQmNCVINCx0LvQvtC60L7QsiBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBwZXJzb25hbC1pbmZvIFNUQVJUID09PT09PT0vL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLm1lbnUtcGVyc29uYWwtaW5mb19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCgnLm1lbnUtcGVyc29uYWwtaW5mb19faXRlbScpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW5mby1zdWJ0aXRsZS1iaW8nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5iaW8nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLm1lbnUtY29udGFjdHNfX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQoJy5hYm91dC1tZW51LWNvbnRhY3RzJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUgcGVyc29uYWwtaW5mbyBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuLy8gPT09PT09PSDQodC70LDQudC00LXRgCDQsiDQsdC70L7QutC1INC80LXQvdGOIGFib3V0LW1lIHByb2Zlc3Npb25hbC1pbmZvIFNUQVJUID09PT09PT0vL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLm1lbnUtcHJvZmVzc2lvbmFsLWluZm9fX3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICQoJy5tZW51LXByb2Zlc3Npb25hbC1pbmZvX19pdGVtJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5pbmZvLXN1YnRpdGxlLWNhcmVlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLnJlc3VtZScpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW5mby1zdWJ0aXRsZS1lZHVjYXRpb24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5lZHVjYXRpb24nKS5zbGlkZVRvZ2dsZSgzMDApXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLnJlc3VtZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5lZHVjYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucmVzdW1lLXRleHQtYWN0aXZlJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLnJlc3VtZS1pbmZvJykuc2xpZGVEb3duKDMwMClcclxuICAgICAgJCgnLnByb2Zlc3Npb25hbC10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgICAgJCgnLmVkdWNhdGlvbi10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuZWR1Y2F0aW9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLnJlc3VtZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgICAgICQoJy5lZHVjYXRpb24tdGV4dC1hY3RpdmUnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcuZWR1Y2F0aW9uLWluZm8nKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcucHJvZmVzc2lvbmFsLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5wcm9mZXNzaW9uYWwtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcucmVzdW1lLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5yZXN1bWUtaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUgcHJvZmVzc2lvbmFsLWluZm8gRU5EID09PT09PT0vL1xyXG5cclxuXHJcblxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gYWJvdXQtbWUgaG9iYmllcy1pbmZvIFNUQVJUID09PT09PT0vL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5tZW51LWhvYmJpZXMtaW5mb19fdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuICAgICAgJCgnLm1lbnUtaG9iYmllcy1pbmZvX19pdGVtJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5pbmZvLXN1YnRpdGxlLWludGVyZXN0cycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmludGVyZXN0cycpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuaW50ZXJlc3RzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgJCgnLmludGVyZXN0cy10ZXh0LWFjdGl2ZScpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5pbnRlcmVzdHMtaW5mbycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ob2JiaWVzLXRleHQtYWN0aXZlJykuc2xpZGVVcCgzMDApXHJcbiAgICAgICQoJy5ob2JiaWVzLWluZm8nKS5zbGlkZVVwKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBhYm91dC1tZSBob2JiaWVzLWluZm8gRU5EID09PT09PT0vL1xyXG5cclxuXHJcblxyXG4vKiogPT09PT09PSDQodC80LXQvdCwINGG0LLQtdGC0LAg0L/QvtC00LzQtdC90Y4g0L/RgNC4INCw0LrRgtC40LLQvdC+0Lkg0YHRgdGL0LvQutC1IFNUQVJUID09PT09PT09PT0qKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5iaW8nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4gICAgICAkKCcucGVyc29uYWwtdGV4dC1hY3RpdmUnKS5zbGlkZURvd24oMzAwKVxyXG4gICAgICAkKCcucGVyc29uYWwtaW5mbycpLnNsaWRlRG93bigzMDApXHJcbiAgICAgICQoJy5ncmVldGluZy10ZXh0LWFjdGl2ZScpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAkKCcuZ3JlZXRpbmctaW5mbycpLnNsaWRlVXAoMzAwKVxyXG4gICAgICAvLyAkKCcuaW50ZXJlc3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuICAgICAgLy8gJCgnLmVkdWNhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbiAgIH0pXHJcbn0pXHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAgJCgnLmVkdWNhdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbi8vICAgICAgICQoJy5iaW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4vLyAgICAgICAkKCcuaW50ZXJlc3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuLy8gICAgfSlcclxuLy8gfSlcclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAkKCcuaW50ZXJlc3RzJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0LWNvbG9yJylcclxuLy8gICAgICAgJCgnLmJpbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dC1jb2xvcicpXHJcbi8vICAgICAgICQoJy5lZHVjYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQtY29sb3InKVxyXG4vLyAgICB9KVxyXG4vLyB9KVxyXG4vKiogPT09PT09PSDQodC80LXQvdCwINGG0LLQtdGC0LAg0L/QvtC00LzQtdC90Y4g0L/RgNC4INCw0LrRgtC40LLQvdC+0Lkg0YHRgdGL0LvQutC1IEVORCA9PT09PT09PT09KiovXHJcblxyXG5cclxuXHJcbi8qKj09PT09PT09PT09PT09PT09INCf0L7Rj9Cy0LvQtdC90LjQtSDRgdC60YDRi9GC0LjQtSDQsdC70L7QutC+0LIgZGV0YWlscyBTVEFSVCA9PT09PT09PT09ICovXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuZGV0YWlscy10b3AnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5kZXRhaWxzLWJvdHRvbScpLnJlbW92ZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmRldGFpbHMtb25lJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICAgICAkKCcuZGV0YWlscy10d28nKS5zbGlkZVVwKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuZGV0YWlscy1ib3R0b20nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnd2hpdGUtdGV4dCcpXHJcbiAgICAgICQoJy5kZXRhaWxzLXRvcCcpLnJlbW92ZUNsYXNzKCd3aGl0ZS10ZXh0JylcclxuICAgICAgJCgnLmRldGFpbHMtdHdvJykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICAgICAkKCcuZGV0YWlscy1vbmUnKS5zbGlkZVVwKDMwMClcclxuICAgfSlcclxufSlcclxuLyoqPT09PT09PT09PT09PT09PT0g0J/QvtGP0LLQu9C10L3QuNC1INGB0LrRgNGL0YLQuNC1INCx0LvQvtC60L7QsiBkZXRhaWxzIEVORCA9PT09PT09PT09ICovXHJcblxyXG5cclxuXHJcbi8qKj09PT09PT09PT09IEFqYXgg0LfQsNC/0YDQvtGBINC00LvRjyDQsNC60YLQuNCy0L3Ri9GFINGB0YHRi9C70L7QuiBTVEFSVCA9PT09PT09PT09PT0gKi9cclxuJChmdW5jdGlvbigpIHtcclxuICAgJCgnLm5hdiBbaHJlZl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5ocmVmID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XHJcbiAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hlYWRlci1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAkKCduYXYgW2hyZWZdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuaHJlZiA9PSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xyXG4gICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdoZWFkZXItYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcbn0pO1xyXG4vKio9PT09PT09PT09PSBBamF4INC30LDQv9GA0L7RgSDQtNC70Y8g0LDQutGC0LjQstC90YvRhSDRgdGB0YvQu9C+0LogRU5EID09PT09PT09PT09PSAqL1xyXG5cclxuXHJcblxyXG5cclxuLyoqPT09PT0g0KLQtdC60YHRgiDQsiDQstC40LTQtSDQv9C10YfQsNGC0L3QvtC5INC80LDRiNC40L3QutC4ICovXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgIG5ldyBUeXBlSXQoXCIjZWxlbWVudFwiLCB7XHJcbi8vICAgICAgIHN0cmluZ3M6IFtcIlRoaXMgaXMgbXkgc3RyaW5nIVwiXSxcclxuLy8gICAgfSkuZ28oKTtcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBpbnN0YW5jZSA9IG5ldyBUeXBlSXQoJyNyZXBsYWNlU3RyaW5ncycsIHtcclxuLy8gICAgc3RyaW5nczogW1wiSGVsbG9cIiwgXCJIb3cgYXJlIHlvdXJcIl0sXHJcbi8vICAgIHNwZWVkOiAyMDAsXHJcbi8vICAgIGJyZWFrTGluZXM6IHRydWUsXHJcbi8vICAgIHdhaXRVbnRpbFZpc2libGU6IHRydWUsXHJcbi8vICAgIG5leHRTdHJpbmdEZWxheTogMTAwMFxyXG4vLyB9KS5nbygpO1xyXG5cclxuLy8gbmV3IFR5cGVJdChcIiNteUVsZW1lbnRcIilcclxuLy8gICAudHlwZShcIlRoaXMgaXMgbXkgZmlyc3Qgc3RyaW5nIVwiKVxyXG4vLyAgIC5wYXVzZSgxMDAwKVxyXG4vLyAgIC50eXBlKFwiUGx1cyBhIGxpdHRsZSBtb3JlLlwiKVxyXG4vLyAgIC5nbygpO1xyXG5cclxuLy8gY29uc3QgaW5zdGFuY2UgPSBuZXcgVHlwZUl0KCcjaGknLCB7XHJcbi8vICAgIHN0cmluZ3M6IFtdLFxyXG4vLyAgICBzcGVlZDogMjAwLFxyXG4vLyAgICBicmVha0xpbmVzOiB0cnVlLFxyXG4vLyAgICB3YWl0VW50aWxWaXNpYmxlOiB0cnVlLFxyXG4vLyAgICBjdXJzb3I6IHRydWUsXHJcbi8vICAgIGh0bWw6IHRydWVcclxuLy8gICAgLy8gbmV4dFN0cmluZ0RlbGF5OiAxMDAwIFxyXG4vLyB9KS5nbygpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT0g0KHQu9Cw0LnQtNC10YAg0LIg0LHQu9C+0LrQtSDQvNC10L3RjiBQUk9KRUNUUy1NRU5VIFNUQVJUID09PT09PT0vL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgJCgnLnByb2plY3RzLW1lbnUtdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlLXByb2plY3RzJylcclxuICAgICAgJCgnLnByb2plY3RzLW1lbnUtbGlzdCcpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuLy8gPT09PT09PSDQodC70LDQudC00LXRgCDQsiDQsdC70L7QutC1INC80LXQvdGOIFBST0pFQ1RTLU1FTlUgRU5EID09PT09PT0vL1xyXG5cclxuXHJcblxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gQ09OVEFDVC1NRSBTVEFSVCA9PT09PT09Ly9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICQoJy5jb250YWN0cy1tZW51X190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtY29udGFjdHMnKVxyXG4gICAgICAkKCcuY29udGFjdHMtbWVudV9fbGlzdCcpLnNsaWRlVG9nZ2xlKDMwMClcclxuICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAkKCcuY29udGFjdHMtbWVudS1maW5kX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtY29udGFjdHMnKVxyXG4gICAgICAkKCcuY29udGFjdHMtbWVudS1maW5kX19saXN0Jykuc2xpZGVUb2dnbGUoMzAwKVxyXG4gICB9KVxyXG59KVxyXG4vLyA9PT09PT09INCh0LvQsNC50LTQtdGAINCyINCx0LvQvtC60LUg0LzQtdC90Y4gQ09OVEFDVC1NRSBFTkQgPT09PT09PS8vXHJcblxyXG5cclxuLy8gPT09PT09PSDQotC10LrRgSDQvdCw0L/QuNGB0LDQvdC90YvQuSDQsiDRhNC+0YDQvNC1INC+0YLQvtCx0YDQsNC20LDQtdGC0YHRjyDQsiDRgdC+0YHQtdC00L3QtdC8INCx0LvQvtC60LUgQ09OVEFDVC1NRSBTVEFSVCA9PT09PT09Ly9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKS5pbm5lclRleHQgPSB0aGlzLnZhbHVlXHJcbn0pXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckVtYWlsJykuaW5uZXJUZXh0ID0gdGhpcy52YWx1ZVxyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck1lc3NhZ2UnKS5pbm5lclRleHQgPSB0aGlzLnZhbHVlXHJcbn0pXHJcbi8vID09PT09PT0g0KLQtdC60YEg0L3QsNC/0LjRgdCw0L3QvdGL0Lkg0LIg0YTQvtGA0LzQtSDQvtGC0L7QsdGA0LDQttCw0LXRgtGB0Y8g0LIg0YHQvtGB0LXQtNC90LXQvCDQsdC70L7QutC1IENPTlRBQ1QtTUUgRU5EID09PT09PT0vL1xyXG5cclxuXHJcbi8vID09PT09PT0g0JLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC80Ysg0Lgg0L7RgtC/0YDQsNCy0LrQsCDQtNCw0L3QvdGL0YUg0L3QsCDQv9C+0YfRgtGDIENPTlRBQ1QtTUUgU1RBUlQgPT09PT09PS8vXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpXHJcbiAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZm9ybVNlbmQpXHJcblxyXG4gICBhc3luYyBmdW5jdGlvbiBmb3JtU2VuZChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgbGV0IGVycm9yID0gZm9ybVZhbGlkYXRlKGZvcm0pXHJcbiAgIH1cclxuXHJcbiAgIGZ1bmN0aW9uIGZvcm1WYWxpZGF0ZShmb3JtKSB7XHJcbiAgICAgIGxldCBlcnJvciA9IDBcclxuICAgICAgbGV0IGZvcm1SZXEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuX3JlcScpXHJcblxyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybVJlcS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgY29uc3QgaW5wdXQgPSBmb3JtUmVxW2luZGV4XVxyXG4gICAgICAgICBmb3JtUmVtb3ZlRXJyb3IoaW5wdXQpXHJcblxyXG4gICAgICAgICBpZiAoaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfZW1haWwnKSkge1xyXG4gICAgICAgICAgICBpZiAoZW1haWxUZXN0KGlucHV0KSkge1xyXG4gICAgICAgICAgICAgICBmb3JtQWRkRXJyb3IoaW5wdXQpXHJcbiAgICAgICAgICAgICAgIGVycm9yKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgZm9ybUFkZEVycm9yKGlucHV0KVxyXG4gICAgICAgICAgICAgICBlcnJvcisrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZnVuY3Rpb24gZm9ybUFkZEVycm9yKGlucHV0KSB7XHJcbiAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2Vycm9yJylcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnX2Vycm9yJylcclxuICAgfVxyXG5cclxuICAgZnVuY3Rpb24gZm9ybVJlbW92ZUVycm9yKGlucHV0KSB7XHJcbiAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2Vycm9yJylcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnX2Vycm9yJylcclxuICAgfVxyXG5cclxuICAgZnVuY3Rpb24gZW1haWxUZXN0KGlucHV0KSB7XHJcbiAgICAgIHJldHVybiAhL15cXHcrKFtcXC5dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsOH0pKyQvLnRlc3QoaW5wdXQudmFsdWUpXHJcbiAgIH1cclxufSlcclxuIl0sIm1hcHBpbmdzIjoiQUFBQSxhLENBR0E7Ozs7K0NBRkEsb0o7Ozs7OztBQUdBQSxXQUFXLENBQUMsWUFBTTtFQUNmLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7RUFFQSxJQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0VBQ0EsSUFBSUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLFFBQUwsRUFBWjtFQUNBLElBQUlDLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxVQUFMLEVBQWQ7RUFDQSxJQUFJQyxPQUFPLEdBQUdOLElBQUksQ0FBQ08sVUFBTCxFQUFkO0VBRUEsSUFBSUMsUUFBUSxHQUFHLElBQWY7O0VBRUEsSUFBSU4sS0FBSyxJQUFJLEVBQWIsRUFBaUI7SUFDZE0sUUFBUSxHQUFHLElBQVg7RUFDRjs7RUFDRCxJQUFJTixLQUFLLEdBQUcsRUFBWixFQUFnQjtJQUNiQSxLQUFLLEdBQUdBLEtBQUssR0FBRyxFQUFoQjtFQUNGOztFQUNELElBQUlBLEtBQUssR0FBRyxFQUFaLEVBQWdCO0lBQ2JBLEtBQUssR0FBRyxNQUFNQSxLQUFkO0VBQ0Y7O0VBQ0QsSUFBSUUsT0FBTyxHQUFHLEVBQWQsRUFBa0I7SUFDZkEsT0FBTyxHQUFHLE1BQU1BLE9BQWhCO0VBQ0Y7O0VBQ0QsSUFBSUUsT0FBTyxHQUFHLEVBQWQsRUFBa0I7SUFDZkEsT0FBTyxHQUFHLE1BQU1BLE9BQWhCO0VBQ0Y7O0VBRURULElBQUksQ0FBQ1ksV0FBTCxHQUFtQlAsS0FBSyxHQUFHLEdBQVIsR0FBY0UsT0FBZCxHQUF3QixHQUF4QixHQUE4QkUsT0FBOUIsR0FBd0MsR0FBeEMsR0FBOENFLFFBQWpFO0FBQ0YsQ0EzQlUsQ0FBWCxDLENBNEJBO0FBS0E7O0FBQ0FFLENBQUMsQ0FBQ1osUUFBRCxDQUFELENBQVlhLEtBQVosQ0FBa0IsWUFBVztFQUMxQkQsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlRSxLQUFmLENBQXFCLFlBQVc7SUFDN0JGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsUUFBUixDQUFpQixjQUFqQjtJQUNBSCxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CSSxXQUFuQixDQUErQixjQUEvQjtJQUNBSixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNJLFdBQWQsQ0FBMEIsY0FBMUI7SUFDQUosQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkksV0FBaEIsQ0FBNEIsbUJBQTVCO0lBQ0FKLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JJLFdBQWhCLENBQTRCLG1CQUE1QjtJQUNBSixDQUFDLENBQUMsU0FBRCxDQUFELENBQWFJLFdBQWIsQ0FBeUIsbUJBQXpCO0lBQ0FKLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDSyxPQUFoQyxDQUF3QyxHQUF4QztJQUNBTCxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkssT0FBM0IsQ0FBbUMsR0FBbkM7SUFDQUwsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJNLFNBQTVCLENBQXNDLEdBQXRDO0lBQ0FOLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCTSxTQUEzQixDQUFxQyxHQUFyQztJQUNBTixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk0sU0FBcEIsQ0FBOEIsR0FBOUI7SUFDQU4sQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJLLE9BQTNCLENBQW1DLEdBQW5DO0lBQ0FMLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CSyxPQUFwQixDQUE0QixHQUE1QjtJQUNBTCxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVJLFdBQVYsQ0FBc0IsbUJBQXRCO0lBQ0FKLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCSyxPQUEvQixDQUF1QyxHQUF2QztJQUNBTCxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QkssT0FBeEIsQ0FBZ0MsR0FBaEM7SUFDQUwsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJLLE9BQTFCLENBQWtDLEdBQWxDO0lBQ0FMLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJLLE9BQW5CLENBQTJCLEdBQTNCO0lBQ0FMLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCSyxPQUF6QixDQUFpQyxHQUFqQztJQUNBTCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCSyxPQUFsQixDQUEwQixHQUExQjtJQUNBTCxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkssT0FBNUIsQ0FBb0MsR0FBcEM7SUFDQUwsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJLLE9BQXJCLENBQTZCLEdBQTdCO0lBQ0FMLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCSyxPQUE1QixDQUFvQyxHQUFwQztJQUNBTCxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkssT0FBckIsQ0FBNkIsR0FBN0I7RUFDRixDQXpCRDtBQTBCRixDQTNCRDtBQTZCQUwsQ0FBQyxDQUFDWixRQUFELENBQUQsQ0FBWWEsS0FBWixDQUFrQixZQUFXO0VBQzFCRCxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CRSxLQUFuQixDQUF5QixZQUFXO0lBQ2pDRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLFFBQVIsQ0FBaUIsY0FBakI7SUFDQUgsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlSSxXQUFmLENBQTJCLGNBQTNCO0lBQ0FKLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY0ksV0FBZCxDQUEwQixjQUExQjtJQUNBSixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVJLFdBQVYsQ0FBc0IsbUJBQXRCO0lBQ0FKLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JJLFdBQWhCLENBQTRCLG1CQUE1QjtJQUNBSixDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkssT0FBM0IsQ0FBbUMsR0FBbkM7SUFDQUwsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JLLE9BQXBCLENBQTRCLEdBQTVCO0lBQ0FMLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCSyxPQUEzQixDQUFtQyxHQUFuQztJQUNBTCxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkssT0FBcEIsQ0FBNEIsR0FBNUI7SUFDQUwsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JNLFNBQS9CLENBQXlDLEdBQXpDO0lBQ0FOLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCTSxTQUF4QixDQUFrQyxHQUFsQztJQUNBTixDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkssT0FBNUIsQ0FBb0MsR0FBcEM7SUFDQUwsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJLLE9BQTNCLENBQW1DLEdBQW5DO0lBQ0FMLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDTSxTQUFoQyxDQUEwQyxHQUExQztJQUNBTixDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkssT0FBMUIsQ0FBa0MsR0FBbEM7SUFDQUwsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkssT0FBbkIsQ0FBMkIsR0FBM0I7SUFDQUwsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJLLE9BQXpCLENBQWlDLEdBQWpDO0lBQ0FMLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JLLE9BQWxCLENBQTBCLEdBQTFCO0lBQ0FMLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUksV0FBYixDQUF5QixtQkFBekI7SUFDQUosQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJLLE9BQTVCLENBQW9DLEdBQXBDO0lBQ0FMLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSyxPQUFyQixDQUE2QixHQUE3QjtJQUNBTCxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkssT0FBNUIsQ0FBb0MsR0FBcEM7SUFDQUwsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJLLE9BQXJCLENBQTZCLEdBQTdCO0VBQ0YsQ0F4QkQ7QUF5QkYsQ0ExQkQ7QUE0QkFMLENBQUMsQ0FBQ1osUUFBRCxDQUFELENBQVlhLEtBQVosQ0FBa0IsWUFBVztFQUMxQkQsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjRSxLQUFkLENBQW9CLFlBQVc7SUFDNUJGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsUUFBUixDQUFpQixjQUFqQjtJQUNBSCxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVJLFdBQWYsQ0FBMkIsY0FBM0I7SUFDQUosQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkksV0FBbkIsQ0FBK0IsY0FBL0I7SUFDQUosQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVSSxXQUFWLENBQXNCLG1CQUF0QjtJQUNBSixDQUFDLENBQUMsU0FBRCxDQUFELENBQWFJLFdBQWIsQ0FBeUIsbUJBQXpCO0lBQ0FKLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JJLFdBQWhCLENBQTRCLG1CQUE1QjtJQUNBSixDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkssT0FBM0IsQ0FBbUMsR0FBbkM7SUFDQUwsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JLLE9BQXBCLENBQTRCLEdBQTVCO0lBQ0FMLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCSyxPQUE1QixDQUFvQyxHQUFwQztJQUNBTCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ0ssT0FBaEMsQ0FBd0MsR0FBeEM7SUFDQUwsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJNLFNBQTNCLENBQXFDLEdBQXJDO0lBQ0FOLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCSyxPQUEzQixDQUFtQyxHQUFuQztJQUNBTCxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkssT0FBcEIsQ0FBNEIsR0FBNUI7SUFDQUwsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JLLE9BQS9CLENBQXVDLEdBQXZDO0lBQ0FMLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCSyxPQUF4QixDQUFnQyxHQUFoQztJQUNBTCxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQk0sU0FBMUIsQ0FBb0MsR0FBcEM7SUFDQU4sQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQk0sU0FBbkIsQ0FBNkIsR0FBN0I7SUFDQU4sQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJLLE9BQXpCLENBQWlDLEdBQWpDO0lBQ0FMLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JLLE9BQWxCLENBQTBCLEdBQTFCO0lBQ0FMLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCSyxPQUE1QixDQUFvQyxHQUFwQztJQUNBTCxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkssT0FBckIsQ0FBNkIsR0FBN0I7SUFDQUwsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJLLE9BQTVCLENBQW9DLEdBQXBDO0lBQ0FMLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSyxPQUFyQixDQUE2QixHQUE3QjtFQUNGLENBeEJEO0FBeUJGLENBMUJELEUsQ0EyQkE7QUFJQTs7QUFDQUwsQ0FBQyxDQUFDWixRQUFELENBQUQsQ0FBWWEsS0FBWixDQUFrQixZQUFXO0VBQzFCRCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ0UsS0FBaEMsQ0FBc0MsWUFBVztJQUM5Q0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxXQUFSLENBQW9CLFFBQXBCO0lBQ0FQLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCUSxXQUEvQixDQUEyQyxHQUEzQztFQUNGLENBSEQ7QUFJRixDQUxEO0FBT0FSLENBQUMsQ0FBQ1osUUFBRCxDQUFELENBQVlhLEtBQVosQ0FBa0IsWUFBVztFQUMxQkQsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JFLEtBQXhCLENBQThCLFlBQVc7SUFDdENGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sV0FBUixDQUFvQixRQUFwQjtJQUNBUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFdBQVIsQ0FBb0IsWUFBcEI7SUFDQVAsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVUSxXQUFWLENBQXNCLEdBQXRCO0VBQ0YsQ0FKRDtBQUtGLENBTkQ7QUFRQVIsQ0FBQyxDQUFDWixRQUFELENBQUQsQ0FBWWEsS0FBWixDQUFrQixZQUFXO0VBQzFCRCxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkUsS0FBM0IsQ0FBaUMsWUFBVztJQUN6Q0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxXQUFSLENBQW9CLFFBQXBCO0lBQ0FQLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCUSxXQUExQixDQUFzQyxHQUF0QztFQUNGLENBSEQ7QUFJRixDQUxELEUsQ0FNQTtBQUdBOztBQUNBUixDQUFDLENBQUNaLFFBQUQsQ0FBRCxDQUFZYSxLQUFaLENBQWtCLFlBQVc7RUFDMUJELENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DRSxLQUFwQyxDQUEwQyxZQUFXO0lBQ2xERixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFdBQVIsQ0FBb0IsUUFBcEI7SUFDQVAsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNRLFdBQW5DLENBQStDLEdBQS9DO0VBQ0YsQ0FIRDtBQUlGLENBTEQ7QUFPQVIsQ0FBQyxDQUFDWixRQUFELENBQUQsQ0FBWWEsS0FBWixDQUFrQixZQUFXO0VBQzFCRCxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkUsS0FBM0IsQ0FBaUMsWUFBVztJQUN6Q0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxXQUFSLENBQW9CLFFBQXBCO0lBQ0FQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sV0FBUixDQUFvQixZQUFwQjtJQUNBUCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFRLFdBQWIsQ0FBeUIsR0FBekI7RUFDRixDQUpEO0FBS0YsQ0FORDtBQVFBUixDQUFDLENBQUNaLFFBQUQsQ0FBRCxDQUFZYSxLQUFaLENBQWtCLFlBQVc7RUFDMUJELENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCRSxLQUE5QixDQUFvQyxZQUFXO0lBQzVDRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFdBQVIsQ0FBb0IsUUFBcEI7SUFDQVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxXQUFSLENBQW9CLFlBQXBCO0lBQ0FQLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JRLFdBQWhCLENBQTRCLEdBQTVCO0VBQ0YsQ0FKRDtBQUtGLENBTkQ7QUFRQVIsQ0FBQyxDQUFDWixRQUFELENBQUQsQ0FBWWEsS0FBWixDQUFrQixZQUFXO0VBQzFCRCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFFLEtBQWIsQ0FBbUIsWUFBVztJQUMzQkYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxRQUFSLENBQWlCLG1CQUFqQjtJQUNBSCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCSSxXQUFoQixDQUE0QixtQkFBNUI7SUFDQUosQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJNLFNBQXpCLENBQW1DLEdBQW5DO0lBQ0FOLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JNLFNBQWxCLENBQTRCLEdBQTVCO0lBQ0FOLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCSyxPQUEvQixDQUF1QyxHQUF2QztJQUNBTCxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QkssT0FBeEIsQ0FBZ0MsR0FBaEM7SUFDQUwsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJLLE9BQTVCLENBQW9DLEdBQXBDO0lBQ0FMLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSyxPQUFyQixDQUE2QixHQUE3QjtFQUNGLENBVEQ7QUFVRixDQVhEO0FBYUFMLENBQUMsQ0FBQ1osUUFBRCxDQUFELENBQVlhLEtBQVosQ0FBa0IsWUFBVztFQUMxQkQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkUsS0FBaEIsQ0FBc0IsWUFBVztJQUM5QkYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxRQUFSLENBQWlCLG1CQUFqQjtJQUNBSCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFJLFdBQWIsQ0FBeUIsbUJBQXpCO0lBQ0FKLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCTSxTQUE1QixDQUFzQyxHQUF0QztJQUNBTixDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQk0sU0FBckIsQ0FBK0IsR0FBL0I7SUFDQU4sQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JLLE9BQS9CLENBQXVDLEdBQXZDO0lBQ0FMLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCSyxPQUF4QixDQUFnQyxHQUFoQztJQUNBTCxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkssT0FBekIsQ0FBaUMsR0FBakM7SUFDQUwsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkssT0FBbEIsQ0FBMEIsR0FBMUI7RUFDRixDQVREO0FBVUYsQ0FYRCxFLENBWUE7QUFJQTs7QUFFQUwsQ0FBQyxDQUFDWixRQUFELENBQUQsQ0FBWWEsS0FBWixDQUFrQixZQUFXO0VBQzFCRCxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQkUsS0FBL0IsQ0FBcUMsWUFBVztJQUM3Q0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxXQUFSLENBQW9CLFFBQXBCO0lBQ0FQLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCUSxXQUE5QixDQUEwQyxHQUExQztFQUNGLENBSEQ7QUFJRixDQUxEO0FBT0FSLENBQUMsQ0FBQ1osUUFBRCxDQUFELENBQVlhLEtBQVosQ0FBa0IsWUFBVztFQUMxQkQsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJFLEtBQTlCLENBQW9DLFlBQVc7SUFDNUNGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sV0FBUixDQUFvQixRQUFwQjtJQUNBUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFdBQVIsQ0FBb0IsWUFBcEI7SUFDQVAsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlEsV0FBaEIsQ0FBNEIsR0FBNUI7RUFDRixDQUpEO0FBS0YsQ0FORDtBQVFBUixDQUFDLENBQUNaLFFBQUQsQ0FBRCxDQUFZYSxLQUFaLENBQWtCLFlBQVc7RUFDMUJELENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JFLEtBQWhCLENBQXNCLFlBQVc7SUFDOUJGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsUUFBUixDQUFpQixtQkFBakI7SUFDQUgsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJNLFNBQTVCLENBQXNDLEdBQXRDO0lBQ0FOLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTSxTQUFyQixDQUErQixHQUEvQjtJQUNBTixDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkssT0FBMUIsQ0FBa0MsR0FBbEM7SUFDQUwsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkssT0FBbkIsQ0FBMkIsR0FBM0I7RUFDRixDQU5EO0FBT0YsQ0FSRCxFLENBVUE7O0FBSUE7O0FBQ0FMLENBQUMsQ0FBQ1osUUFBRCxDQUFELENBQVlhLEtBQVosQ0FBa0IsWUFBVztFQUMxQkQsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRSxLQUFWLENBQWdCLFlBQVc7SUFDeEJGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsUUFBUixDQUFpQixtQkFBakI7SUFDQUgsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJNLFNBQTNCLENBQXFDLEdBQXJDO0lBQ0FOLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CTSxTQUFwQixDQUE4QixHQUE5QjtJQUNBTixDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkssT0FBM0IsQ0FBbUMsR0FBbkM7SUFDQUwsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JLLE9BQXBCLENBQTRCLEdBQTVCLEVBTHdCLENBTXhCO0lBQ0E7RUFDRixDQVJEO0FBU0YsQ0FWRCxFLENBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFJQTs7QUFDQUwsQ0FBQyxDQUFDWixRQUFELENBQUQsQ0FBWWEsS0FBWixDQUFrQixZQUFXO0VBQzFCRCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCRSxLQUFsQixDQUF3QixZQUFXO0lBQ2hDRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFdBQVIsQ0FBb0IsWUFBcEI7SUFDQVAsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJJLFdBQXJCLENBQWlDLFlBQWpDO0lBQ0FKLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JRLFdBQWxCLENBQThCLEdBQTlCO0lBQ0FSLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JLLE9BQWxCLENBQTBCLEdBQTFCO0VBQ0YsQ0FMRDtBQU1GLENBUEQ7QUFTQUwsQ0FBQyxDQUFDWixRQUFELENBQUQsQ0FBWWEsS0FBWixDQUFrQixZQUFXO0VBQzFCRCxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkUsS0FBckIsQ0FBMkIsWUFBVztJQUNuQ0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxXQUFSLENBQW9CLFlBQXBCO0lBQ0FQLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JJLFdBQWxCLENBQThCLFlBQTlCO0lBQ0FKLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JRLFdBQWxCLENBQThCLEdBQTlCO0lBQ0FSLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JLLE9BQWxCLENBQTBCLEdBQTFCO0VBQ0YsQ0FMRDtBQU1GLENBUEQ7QUFRQTs7QUFJQTs7QUFDQUwsQ0FBQyxDQUFDLFlBQVc7RUFDVkEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlMsSUFBakIsQ0FBc0IsWUFBVztJQUM5QixJQUFJLEtBQUtDLElBQUwsSUFBYUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCRixJQUFqQyxFQUF1QztNQUNwQ1YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxRQUFSLENBQWlCLGVBQWpCO0lBQ0Y7RUFDSCxDQUpEO0FBS0YsQ0FOQSxDQUFEO0FBUUFILENBQUMsQ0FBQyxZQUFXO0VBQ1ZBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JTLElBQWhCLENBQXFCLFlBQVc7SUFDN0IsSUFBSSxLQUFLQyxJQUFMLElBQWFDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkYsSUFBakMsRUFBdUM7TUFDcENWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsUUFBUixDQUFpQixlQUFqQjtJQUNGO0VBQ0gsQ0FKRDtBQUtGLENBTkEsQ0FBRDtBQU9BOztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOztBQUNBSCxDQUFDLENBQUNaLFFBQUQsQ0FBRCxDQUFZYSxLQUFaLENBQWtCLFlBQVc7RUFDMUJELENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCRSxLQUExQixDQUFnQyxZQUFXO0lBQ3hDRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFdBQVIsQ0FBb0IsaUJBQXBCO0lBQ0FQLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCUSxXQUF6QixDQUFxQyxHQUFyQztFQUNGLENBSEQ7QUFJRixDQUxELEUsQ0FNQTtBQUlBOztBQUNBUixDQUFDLENBQUNaLFFBQUQsQ0FBRCxDQUFZYSxLQUFaLENBQWtCLFlBQVc7RUFDMUJELENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCRSxLQUEzQixDQUFpQyxZQUFXO0lBQ3pDRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLFdBQVIsQ0FBb0IsaUJBQXBCO0lBQ0FQLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCUSxXQUExQixDQUFzQyxHQUF0QztFQUNGLENBSEQ7QUFJRixDQUxEO0FBT0FSLENBQUMsQ0FBQ1osUUFBRCxDQUFELENBQVlhLEtBQVosQ0FBa0IsWUFBVztFQUMxQkQsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NFLEtBQWhDLENBQXNDLFlBQVc7SUFDOUNGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sV0FBUixDQUFvQixpQkFBcEI7SUFDQVAsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JRLFdBQS9CLENBQTJDLEdBQTNDO0VBQ0YsQ0FIRDtBQUlGLENBTEQsRSxDQU1BO0FBR0E7O0FBQ0FwQixRQUFRLENBQUN5QixjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxnQkFBaEMsQ0FBaUQsT0FBakQsRUFBMEQsWUFBVztFQUNsRTFCLFFBQVEsQ0FBQ3lCLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NFLFNBQXBDLEdBQWdELEtBQUtDLEtBQXJEO0FBQ0YsQ0FGRDtBQUlBNUIsUUFBUSxDQUFDeUIsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsZ0JBQWpDLENBQWtELE9BQWxELEVBQTJELFlBQVc7RUFDbkUxQixRQUFRLENBQUN5QixjQUFULENBQXdCLFdBQXhCLEVBQXFDRSxTQUFyQyxHQUFpRCxLQUFLQyxLQUF0RDtBQUNGLENBRkQ7QUFJQTVCLFFBQVEsQ0FBQ3lCLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLGdCQUFuQyxDQUFvRCxPQUFwRCxFQUE2RCxZQUFXO0VBQ3JFMUIsUUFBUSxDQUFDeUIsY0FBVCxDQUF3QixhQUF4QixFQUF1Q0UsU0FBdkMsR0FBbUQsS0FBS0MsS0FBeEQ7QUFDRixDQUZELEUsQ0FHQTtBQUdBOztBQUNBNUIsUUFBUSxDQUFDMEIsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7RUFDdkQsSUFBTUcsSUFBSSxHQUFHN0IsUUFBUSxDQUFDeUIsY0FBVCxDQUF3QixNQUF4QixDQUFiO0VBQ0FJLElBQUksQ0FBQ0gsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0NJLFFBQWhDOztFQUZ1RCxTQUl4Q0EsUUFKd0M7SUFBQTtFQUFBOztFQUFBO0lBQUEsdUVBSXZELGlCQUF3QkMsQ0FBeEI7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQ0dBLENBQUMsQ0FBQ0MsY0FBRjtjQUVJQyxLQUhQLEdBR2VDLFlBQVksQ0FBQ0wsSUFBRCxDQUgzQjs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUp1RDtJQUFBO0VBQUE7O0VBVXZELFNBQVNLLFlBQVQsQ0FBc0JMLElBQXRCLEVBQTRCO0lBQ3pCLElBQUlJLEtBQUssR0FBRyxDQUFaO0lBQ0EsSUFBSUUsT0FBTyxHQUFHbkMsUUFBUSxDQUFDb0MsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBZDs7SUFFQSxLQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHRixPQUFPLENBQUNHLE1BQXBDLEVBQTRDRCxLQUFLLEVBQWpELEVBQXFEO01BQ2xELElBQU1FLEtBQUssR0FBR0osT0FBTyxDQUFDRSxLQUFELENBQXJCO01BQ0FHLGVBQWUsQ0FBQ0QsS0FBRCxDQUFmOztNQUVBLElBQUlBLEtBQUssQ0FBQ0UsU0FBTixDQUFnQkMsUUFBaEIsQ0FBeUIsUUFBekIsQ0FBSixFQUF3QztRQUNyQyxJQUFJQyxTQUFTLENBQUNKLEtBQUQsQ0FBYixFQUFzQjtVQUNuQkssWUFBWSxDQUFDTCxLQUFELENBQVo7VUFDQU4sS0FBSztRQUNQO01BQ0gsQ0FMRCxNQUtNO1FBQ0gsSUFBSU0sS0FBSyxDQUFDWCxLQUFOLEtBQWdCLEVBQXBCLEVBQXdCO1VBQ3JCZ0IsWUFBWSxDQUFDTCxLQUFELENBQVo7VUFDQU4sS0FBSztRQUNQO01BQ0g7SUFHSDtFQUNIOztFQUVELFNBQVNXLFlBQVQsQ0FBc0JMLEtBQXRCLEVBQTZCO0lBQzFCQSxLQUFLLENBQUNNLGFBQU4sQ0FBb0JKLFNBQXBCLENBQThCSyxHQUE5QixDQUFrQyxRQUFsQztJQUNBUCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JLLEdBQWhCLENBQW9CLFFBQXBCO0VBQ0Y7O0VBRUQsU0FBU04sZUFBVCxDQUF5QkQsS0FBekIsRUFBZ0M7SUFDN0JBLEtBQUssQ0FBQ00sYUFBTixDQUFvQkosU0FBcEIsQ0FBOEJNLE1BQTlCLENBQXFDLFFBQXJDO0lBQ0FSLEtBQUssQ0FBQ0UsU0FBTixDQUFnQk0sTUFBaEIsQ0FBdUIsUUFBdkI7RUFDRjs7RUFFRCxTQUFTSixTQUFULENBQW1CSixLQUFuQixFQUEwQjtJQUN2QixPQUFPLENBQUMsK0NBQStDUyxJQUEvQyxDQUFvRFQsS0FBSyxDQUFDWCxLQUExRCxDQUFSO0VBQ0Y7QUFDSCxDQS9DRCJ9