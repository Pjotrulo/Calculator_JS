const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll("#operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const operation = document.querySelector("#operation");
const mathSign = document.querySelector(".mathSign");
const resultNumber = document.querySelector("#result");

const sqrt = document.querySelector(".sqrt");

let result = "";

function displayNumbers() {
    if (this.textContent === '.' && resultNumber.innerHTML.includes('.')) return;
    if (this.textContent === '.' && resultNumber.innerHTML === '') return resultNumber.innerHTML = '.0';

    resultNumber.innerHTML += this.textContent;
}

function operate() {
    if(resultNumber.innerHTML === '' && this.textContent === '-') {
        resultNumber.innerHTML = '-';
        return
    } else if (resultNumber.innerHTML === '') {
        return;
    }

    if(mathSign.innerHTML !== "") {
        showResult();
    }
    if(mathSign.innerHTML === "√") {
        showResult();
    }

    operation.innerHTML = resultNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    resultNumber.innerHTML = "";
}

function showResult() {
    if (operation.innerHTML === "" || resultNumber === "") return;

    let a = Number(resultNumber.innerHTML);
    let b = Number(operation.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b / a;
            break;
        case '%':
            result = (a * b) / 100;
            break;
        case '√':
            result = Math.sqrt(b);
            break;     
    }

    resultNumber.innerHTML = result;
    operation.innerHTML = "";
    mathSign.innerHTML = "";
}

function clearScreen() {
    result = "";
    resultNumber.innerHTML = "";
    operation.innerHTML = "";
    mathSign.innerHTML = "";
}


numbers.forEach(button => {
    button.addEventListener("click", displayNumbers)
})

operator.forEach(button => {
    button.addEventListener("click", operate)
})

sqrt.addEventListener("click", showResult);

equal.addEventListener("click", showResult);

clear.addEventListener("click", clearScreen);