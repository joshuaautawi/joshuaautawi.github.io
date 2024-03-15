function init() {
  let currStrNum = "0";
  let prevNum = null;
  let isConcat = false;
  let operator = null;

  let num = document.querySelector(".wrapper div");
  let btns = document.querySelectorAll(".calc-row button");
  num.innerHTML = currStrNum;

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
      const value = event.target.innerHTML;
      if (!isNaN(value)) {
        [currStrNum, isConcat] = handleNumber(value, currStrNum, isConcat);
      } else {
        [currStrNum, prevNum, isConcat, operator] = handleOperator(
          value,
          currStrNum,
          prevNum,
          isConcat,
          operator
        );
      }
      num.innerHTML = currStrNum;
    });
  }

  //all this function can be inside init , so it manipulate the variable that in init function
  function handleNumber(value, currStrNum, isConcat) {
    if (currStrNum === "0" || !isConcat) {
      isConcat = true;
      currStrNum = value;
    } else {
      currStrNum += value;
    }
    return [currStrNum, isConcat];
  }

  function handleOperator(value, currStrNum, prevNum, isConcat, operator) {
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
        currStrNum = getFinalResult(currStrNum, operator, prevNum);
        isConcat = false;
        break;
    }
    return [currStrNum, prevNum, isConcat, operator];
  }

  function getFinalResult(currStrNum, operator, prevNum) {
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
}
init();
