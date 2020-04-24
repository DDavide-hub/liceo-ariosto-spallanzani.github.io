const result = document.getElementById("result")
const buttonSum = document.getElementById("buttonSum")
const buttonDiff = document.getElementById("buttonDiff")
const buttonPer = document.getElementById("buttonPer")
const buttonDiv = document.getElementById("buttonDiv")
const buttonDel = document.getElementById("buttonDel")
const buttonCalc = document.getElementById("buttonCalc")
const operation = document.getElementById("operation")
const limitOperation = 31
const sign = ["x","/","+","-","*"/*per potenze*/,".", "(", "^"]
var signStrike = 0 //con const non funziona
var isDone = false //indica se ho appena calcolato l'espressione
//const ans = document.getElementById("result")

const clickNumber = (value) => { 
	if (isDone || (operation.innerHTML === "0")) {
		operation.innerHTML = value;
	}
	else {
		operation.innerHTML += value;
	}
};

const isSign = (value) => {
	for (let s of sign) {
		if (value == s) {
			return true;
		}
	}
	return false;
};

const isSame = (value) => value === operation.innerHTML.slice(-1);

const clickSumDiff = (value) => {
	if (isDone) {
		operation.innerHTML = result.innerHTML + value;
		isDone = false;
	}
	else{
		switch (operation.innerHTML.slice(-1)){
			case "+":
			case "-": 
				if (!isSame(value)){
					if (!isSign(operation.innerHTML.slice(-2, -1))) {
						operation.innerHTML += value;
					}
				}
				break;
			case ".":
				break;
			default:
				operation.innerHTML += value;
				break;
		}
	}
};

const clickPerDiv = (value) => {
	if (isDone) {
		operation.innerHTML = result.innerHTML + value;
		isDone = false;
	}
	else {
		!isSign(operation.innerHTML.slice(-1)) ? operation.innerHTML += value : null;
	}
}; 

const click0 = () => {
	if (operation.innerHTML === "0") {
			operation.innerHTML = value;
	}
	else {
		operation.innerHTML += value;
		signStrike = 0;
	}
};

const clickDot = () => isNaN(operation.innerHTML[operation.innerHTML.length - 1]) ? null : operation.innerHTML += ".";

const clickCalc = () => {
	eval(operation.innerHTML) == Infinity ? result.innerHTML = "Math error" : result.innerHTML = eval(operation.innerHTML);
	isDone = true;
	//ans.innerHTML = result.innerHTML.toString();
};

const clickC = () => {
	isDone ? (isDone = false, operation.innerHTML = operation.innerHTML.slice(0, (operation.innerHTML.length) - 1)) : operation.innerHTML.length === 1 ? operation.innerHTML = "0" : operation.innerHTML = operation.innerHTML.slice(0, (operation.innerHTML.length) - 1);
};