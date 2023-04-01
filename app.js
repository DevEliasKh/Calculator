const userInput = document.querySelectorAll('.btn');
const liveResult = document.querySelector('.live');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equal');
const operatorBtn = document.querySelectorAll('.operator');

let firstNumber = '';
let secondNumber = '';
let operator;
let displayValue = '';

function add() {
	return firstNumber + secondNumber;
}
function subtract() {
	return firstNumber - secondNumber;
}
function multiply() {
	return firstNumber * secondNumber;
}
function divide() {
	if (secondNumber === 0) {
		alert("You can't divide numbers to zero");
	} else {
		return firstNumber / secondNumber;
	}
}

function equal() {}

function operate(operator) {
	if (operator === 'add') {
		add();
	} else if (operator === 'subtract') {
		subtract();
	} else if (operator === 'multiply') {
		multiply();
	} else if (operator === 'divide') {
		divide();
	} else if (operator === 'equal') {
		equal();
	}
}

userInput.forEach((element) => {
	element.addEventListener('click', () => {
		displayValue += element.innerText;
		liveResult.innerText += element.innerText;
	});
});

operatorBtn.forEach((element) => {
	element.addEventListener('click', () => {
		if (element.id === 'add') {
			operate('add');
		} else if (element.id === 'subtract') {
			operate('subtract');
		} else if (element.id === 'multiply') {
			operate('multiply');
		} else if (element.id === 'divide') {
			operate('divide');
		} else if (element.id === 'equal') {
			operate('equal');
		}
		firstNumber = liveResult.innerText;
		secondNumber = firstNumber;
		firstNumber = '';
		liveResult.innerText += element.innerText;
	});
});
