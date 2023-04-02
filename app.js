let firstNumber = '';
let secondNumber = '';
let operator = null;
let tempNumber = '';

const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const numbersBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');
const pointBtn = document.querySelector('#point');
const liveResult = document.querySelector('.live');

clearBtn.addEventListener('click', clearScreen);
deleteBtn.addEventListener('click', deleteLasNumber);
equalBtn.addEventListener('click', () => {
	liveResult.textContent = operate(firstNumber, operator, secondNumber);
	firstNumber = liveResult.textContent;
});
// pointBtn.addEventListener('click', setPoint);

numbersBtn.forEach((element) => {
	element.addEventListener('click', () => {
		tempNumber += element.textContent;
		liveResult.textContent += element.textContent;
		if (firstNumber) {
			secondNumber = tempNumber;
			liveResult.textContent = `${firstNumber} ${operator} ${secondNumber}`;
			tempNumber = '';
		}
	});
});

operatorBtn.forEach((element) => {
	element.addEventListener('click', () => {
		operator = element.textContent;
		if (!firstNumber) {
			firstNumber = tempNumber;
			tempNumber = '';
		}
		liveResult.textContent = `${firstNumber} ${operator} `;
	});
});

function clearScreen() {
	liveResult.textContent = '';
	firstNumber = '';
	secondNumber = '';
	operator = null;
	tempNumber = '';
}
function deleteLasNumber() {
	liveResult.textContent = liveResult.textContent.toString().slice(0, -1);
}
function setPoint() {}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(a, operator, b) {
	a = Number(a);
	b = Number(b);
	switch (operator) {
		case '+':
			return add(a, b);
		case '−':
			return substract(a, b);
		case '×':
			return multiply(a, b);
		case '÷':
			if (b === 0) return null;
			else return divide(a, b);
		default:
			return null;
	}
}
