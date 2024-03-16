class Calculator {
  currStrNum = "0";
  prevNum = null;
  isConcat = false;
  operator = null;
  num = document.querySelector(".wrapper div");
  btns = document.querySelectorAll(".calc-row button");
  handleNumber(value) {
    if (this.currStrNum === "0" || !this.isConcat) {
      this.isConcat = true;
      this.currStrNum = value;
    } else {
      this.currStrNum += value;
    }
  }
  handleOperator(value) {
    switch (value) {
      case "←":
        if (this.currStrNum.length === 1) {
          this.currStrNum = "0";
        } else {
          this.currStrNum = this.currStrNum.substring(
            0,
            this.currStrNum.length - 1
          );
        }
        break;
      case "×":
      case "÷":
      case "+":
      case "-":
        this.operator = value;
        this.isConcat = false;
        this.prevNum = Number(this.currStrNum);
        break;
      case "C":
        this.currStrNum = "0";
        this.operator = null;
        this.prevNum = 0;
        break;
      case "=":
        this.currStrNum = this.getFinalResult();
        this.isConcat = false;
        break;
    }
  }
  getFinalResult() {
    let result = null;
    const currNum = Number(this.currStrNum);
    switch (this.operator) {
      case "×":
        result = this.prevNum * currNum;
        break;
      case "÷":
        result = this.prevNum / currNum;
        break;
      case "+":
        result = this.prevNum + currNum;
        break;
      case "-":
        result = this.prevNum - currNum;
        break;
    }
    return result || 0;
  }
  init() {
    this.num.innerHTML = this.currStrNum;
    for (let i = 0; i < this.btns.length; i++) {
      this.btns[i].addEventListener("click", (event) => {
        const value = event.target.innerHTML;
        if (!isNaN(value)) {
          this.handleNumber(value);
        } else {
          this.handleOperator(value);
        }
        this.num.innerHTML = this.currStrNum;
      });
    }
  }
}
new Calculator().init();
