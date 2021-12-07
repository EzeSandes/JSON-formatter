/*Personal and little project. Not necessary refactored. */

const inputArealEl = document.querySelector(".large-area-input");
const outputAreaEl = document.querySelector(".large-area-output");
const btnFormatEl = document.querySelector(".btn-control--format");
const btnMinifyEl = document.querySelector(".btn-control--minify");

const TOTAL_SPACES_FORMATTED = 4;

btnFormatEl.addEventListener("click", function () {
  if (inputArealEl.value === "") {
    outputAreaEl.value = "Please, put a valid string to format or minify";
    return;
  }

  const formatted = JSON.stringify(
    JSON.parse(inputArealEl.value),
    null,
    TOTAL_SPACES_FORMATTED
  );

  outputAreaEl.value = formatted;
});

btnMinifyEl.addEventListener("click", function () {
  if (inputArealEl.value === "") {
    outputAreaEl.value = "Please, put a valid string to format or minify";
    return;
  }

  const minified = JSON.stringify(JSON.parse(inputArealEl.value));

  outputAreaEl.value = minified;
});
