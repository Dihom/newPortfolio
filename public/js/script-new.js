"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

console.log('Init!'); // inputmask

var form = document.querySelector('.form');
var telSelector = form.querySelector('input[type="tel"]');
var inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
var validation = new JustValidate('.form');
validation.addField('.input-name', [{
  rule: 'minLength',
  value: 3
}, {
  rule: 'maxLength',
  value: 30
}, {
  rule: 'required',
  value: true,
  errorMessage: 'Введите имя!'
}]).addField('.input-mail', [{
  rule: 'required',
  value: true,
  errorMessage: 'Email обязателен'
}, {
  rule: 'email',
  value: true,
  errorMessage: 'Введите корректный Email'
}]).addField('.input-tel', [{
  rule: 'required',
  value: true,
  errorMessage: 'Телефон обязателен'
}, {
  rule: 'function',
  validator: function validator() {
    var phone = telSelector.inputmask.unmaskedvalue();
    return phone.length === 10;
  },
  errorMessage: 'Введите корректный телефон'
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
      }
    }
  };

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);
  event.target.reset();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LW5ldy5qcyIsIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVsU2VsZWN0b3IiLCJpbnB1dE1hc2siLCJJbnB1dG1hc2siLCJtYXNrIiwidmFsaWRhdGlvbiIsIkp1c3RWYWxpZGF0ZSIsImFkZEZpZWxkIiwicnVsZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdG9yIiwicGhvbmUiLCJpbnB1dG1hc2siLCJ1bm1hc2tlZHZhbHVlIiwibGVuZ3RoIiwib25TdWNjZXNzIiwiZXZlbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwib3BlbiIsInNlbmQiLCJyZXNldCJdLCJzb3VyY2VzIjpbInNjcmlwdC1uZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0luaXQhJyk7XG5cbi8vIGlucHV0bWFza1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5jb25zdCB0ZWxTZWxlY3RvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRlbFwiXScpO1xuY29uc3QgaW5wdXRNYXNrID0gbmV3IElucHV0bWFzaygnKzcgKDk5OSkgOTk5LTk5LTk5Jyk7XG5pbnB1dE1hc2subWFzayh0ZWxTZWxlY3Rvcik7XG5cbmNvbnN0IHZhbGlkYXRpb24gPSBuZXcgSnVzdFZhbGlkYXRlKCcuZm9ybScpO1xuXG52YWxpZGF0aW9uXG4gIC5hZGRGaWVsZCgnLmlucHV0LW5hbWUnLCBbXG4gICAge1xuICAgICAgcnVsZTogJ21pbkxlbmd0aCcsXG4gICAgICB2YWx1ZTogMyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJ1bGU6ICdtYXhMZW5ndGgnLFxuICAgICAgdmFsdWU6IDMwLFxuICAgIH0sXG4gICAge1xuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLQstC10LTQuNGC0LUg0LjQvNGPISdcbiAgICB9XG4gIF0pXG4gIC5hZGRGaWVsZCgnLmlucHV0LW1haWwnLCBbXG4gICAge1xuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnRW1haWwg0L7QsdGP0LfQsNGC0LXQu9C10L0nLFxuICAgIH0sXG4gICAge1xuICAgICAgcnVsZTogJ2VtYWlsJyxcbiAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0LkgRW1haWwnLFxuICAgIH0sXG4gIF0pXG4gIC5hZGRGaWVsZCgnLmlucHV0LXRlbCcsIFtcbiAgICB7XG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxuICAgICAgdmFsdWU6IHRydWUsXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQotC10LvQtdGE0L7QvSDQvtCx0Y/Qt9Cw0YLQtdC70LXQvScsXG4gICAgfSxcbiAgICB7XG4gICAgICBydWxlOiAnZnVuY3Rpb24nLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGhvbmUgPSB0ZWxTZWxlY3Rvci5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xuICAgICAgICByZXR1cm4gcGhvbmUubGVuZ3RoID09PSAxMDtcbiAgICAgIH0sXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDRgtC10LvQtdGE0L7QvScsXG4gICAgfSxcbiAgXSkub25TdWNjZXNzKChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdWYWxpZGF0aW9uIHBhc3NlcyBhbmQgZm9ybSBzdWJtaXR0ZWQnLCBldmVudCk7XG5cbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcblxuICAgIGNvbnNvbGUubG9nKC4uLmZvcm1EYXRhKTtcblxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfQntGC0L/RgNCw0LLQu9C10L3QvicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9wZW4oJ1BPU1QnLCAnbWFpbC5waHAnLCB0cnVlKTtcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG5cbiAgICBldmVudC50YXJnZXQucmVzZXQoKTtcbiAgfSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRSxDQUVBOztBQUNBLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNQyxXQUFXLEdBQUdILElBQUksQ0FBQ0UsYUFBTCxDQUFtQixtQkFBbkIsQ0FBcEI7QUFDQSxJQUFNRSxTQUFTLEdBQUcsSUFBSUMsU0FBSixDQUFjLG9CQUFkLENBQWxCO0FBQ0FELFNBQVMsQ0FBQ0UsSUFBVixDQUFlSCxXQUFmO0FBRUEsSUFBTUksVUFBVSxHQUFHLElBQUlDLFlBQUosQ0FBaUIsT0FBakIsQ0FBbkI7QUFFQUQsVUFBVSxDQUNQRSxRQURILENBQ1ksYUFEWixFQUMyQixDQUN2QjtFQUNFQyxJQUFJLEVBQUUsV0FEUjtFQUVFQyxLQUFLLEVBQUU7QUFGVCxDQUR1QixFQUt2QjtFQUNFRCxJQUFJLEVBQUUsV0FEUjtFQUVFQyxLQUFLLEVBQUU7QUFGVCxDQUx1QixFQVN2QjtFQUNFRCxJQUFJLEVBQUUsVUFEUjtFQUVFQyxLQUFLLEVBQUUsSUFGVDtFQUdFQyxZQUFZLEVBQUU7QUFIaEIsQ0FUdUIsQ0FEM0IsRUFnQkdILFFBaEJILENBZ0JZLGFBaEJaLEVBZ0IyQixDQUN2QjtFQUNFQyxJQUFJLEVBQUUsVUFEUjtFQUVFQyxLQUFLLEVBQUUsSUFGVDtFQUdFQyxZQUFZLEVBQUU7QUFIaEIsQ0FEdUIsRUFNdkI7RUFDRUYsSUFBSSxFQUFFLE9BRFI7RUFFRUMsS0FBSyxFQUFFLElBRlQ7RUFHRUMsWUFBWSxFQUFFO0FBSGhCLENBTnVCLENBaEIzQixFQTRCR0gsUUE1QkgsQ0E0QlksWUE1QlosRUE0QjBCLENBQ3RCO0VBQ0VDLElBQUksRUFBRSxVQURSO0VBRUVDLEtBQUssRUFBRSxJQUZUO0VBR0VDLFlBQVksRUFBRTtBQUhoQixDQURzQixFQU10QjtFQUNFRixJQUFJLEVBQUUsVUFEUjtFQUVFRyxTQUFTLEVBQUUscUJBQVc7SUFDcEIsSUFBTUMsS0FBSyxHQUFHWCxXQUFXLENBQUNZLFNBQVosQ0FBc0JDLGFBQXRCLEVBQWQ7SUFDQSxPQUFPRixLQUFLLENBQUNHLE1BQU4sS0FBaUIsRUFBeEI7RUFDRCxDQUxIO0VBTUVMLFlBQVksRUFBRTtBQU5oQixDQU5zQixDQTVCMUIsRUEwQ0tNLFNBMUNMLENBMENlLFVBQUNDLEtBQUQsRUFBVztFQUFBOztFQUN0QnJCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNDQUFaLEVBQW9Eb0IsS0FBcEQ7RUFFQSxJQUFJQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixDQUFhRixLQUFLLENBQUNHLE1BQW5CLENBQWY7O0VBRUEsWUFBQXhCLE9BQU8sRUFBQ0MsR0FBUixvQ0FBZXFCLFFBQWY7O0VBRUEsSUFBSUcsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjs7RUFFQUQsR0FBRyxDQUFDRSxrQkFBSixHQUF5QixZQUFZO0lBQ25DLElBQUlGLEdBQUcsQ0FBQ0csVUFBSixLQUFtQixDQUF2QixFQUEwQjtNQUN4QixJQUFJSCxHQUFHLENBQUNJLE1BQUosS0FBZSxHQUFuQixFQUF3QjtRQUN0QjdCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7TUFDRDtJQUNGO0VBQ0YsQ0FORDs7RUFRQXdCLEdBQUcsQ0FBQ0ssSUFBSixDQUFTLE1BQVQsRUFBaUIsVUFBakIsRUFBNkIsSUFBN0I7RUFDQUwsR0FBRyxDQUFDTSxJQUFKLENBQVNULFFBQVQ7RUFFQUQsS0FBSyxDQUFDRyxNQUFOLENBQWFRLEtBQWI7QUFDRCxDQS9ESCJ9