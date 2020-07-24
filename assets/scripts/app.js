const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getuserInputNumber() {
	return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntry.operation);
	console.log(logEntries);
}

function calculationResult(calculationType) {
	const enteredNumber = getuserInputNumber();
	if (
		(calculationType !== 'ADD' &&
			calculationType !== 'SUBTRACT' &&
			calculationType !== 'MULTIPLY' &&
			calculationType !== 'DIVIDE') ||
		!enteredNumber
	) {
		return;
	}

	const initialResult = currentResult;
	let mathOperator;
	if (calculationType === 'ADD') {
		currentResult += enteredNumber;
		mathOperator = '+';
	} else if (calculationType === 'SUBTRACT') {
		currentResult -= enteredNumber;
		mathOperator = '-';
	} else if (calculationType === 'MULTIPLY') {
		currentResult *= enteredNumber;
		mathOperator = '*';
	} else if (calculationType === 'DIVIDE') {
		currentResult /= enteredNumber;
		mathOperator = '/';
	}
	createAndWriteOutput(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
	calculationResult('ADD');
}

function subtract() {
	calculationResult('SUBTRACT');
}

function multiply() {
	calculationResult('MULTIPLY');
}

function divide() {
	calculationResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

//let calculationDescription ='(' + currentResult + ' +10) * 3/2 - 1';

//to print single quotation inside double
//let calculationDescription = "( + 'currentResult' +  +10) * 3/2 - 1";

// This thing only works with back tics
// let calculationDescription = `(${defaultResult}+10)*3/2-1`;
