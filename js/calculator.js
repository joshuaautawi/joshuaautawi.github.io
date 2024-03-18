/**
 * @type {string}
 */
let currStrNum = "0";

/**
 * @type {number| null}
 */
let prevNum = null;

/**
 * @type {boolean}
 */
let isConcat = false;

/**
 * @type {string | null}
 */
let operator = null;

/**
 * @type {HTMLDivElement} - The button for going to the next image.
 */
let num = document.querySelector(".wrapper div");

/**
 * @type {NodeListOf<HTMLButtonElement>} - The button for going to the next image.
 */
let btns = document.querySelectorAll(".calc-row button");

num.innerHTML = currStrNum;
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (event) {
    //@ts-ignore
    const value = event.target.innerHTML;
    if (!isNaN(value)) {
      handleNumber(value);
    } else {
      handleOperator(value);
    }
    num.innerHTML = currStrNum;
  });
}

/**
 *
 * @param {Event} event
 */
function btnCallBack(event) {
  const target = /** @type {HTMLButtonElement} */ (event.target);
  const value = target.innerHTML;
  if (!isNaN(Number(value))) {
    handleNumber(value);
  } else {
    handleOperator(value);
  }
  num.innerHTML = currStrNum;
}

/**
 *
 * @param {string} value
 */
function handleNumber(value) {
  if (currStrNum === "0" || !isConcat) {
    isConcat = true;
    currStrNum = value;
  } else {
    currStrNum += value;
  }
}

/**
 *
 * @param {string} value
 */
function handleOperator(value) {
  switch (value) {
    case "←":
      if (currStrNum.length === 1) {
        currStrNum = "0";
      } else {
        currStrNum = currStrNum.substring(0, currStrNum.length - 1);
      }
      break;
    case "×":
    case "÷":
    case "+":
    case "-":
      operator = value;
      isConcat = false;
      prevNum = Number(currStrNum);
      break;
    case "C":
      currStrNum = "0";
      operator = null;
      prevNum = 0;
      break;
    case "=":
      currStrNum = getFinalResult().toString();
      isConcat = false;
      break;
  }
}
/**
 *
 * @return{number}
 */
function getFinalResult() {
  let result = null;
  const currNum = Number(currStrNum);
  switch (operator) {
    case "×":
      result = prevNum * currNum;
      break;
    case "÷":
      if (prevNum === 0) {
        result = 0;
      } else {
        result = prevNum / currNum;
      }
      break;
    case "+":
      result = prevNum + currNum;
      break;
    case "-":
      result = prevNum - currNum;
      break;
  }
  return result;
}
