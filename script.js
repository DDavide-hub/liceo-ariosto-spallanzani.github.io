const operation = document.getElementById("operation")
const operator = document.getElementById("operator")
const limitResult = 25
let isDone = false
let firstNumber = ""
let isAdding = false;
let memory1 = ""
let memory2 = ""

const clickNumber = (value) => {
	if (isDone) {
		firstNumber = "";
		isDone = false;
		operation.innerHTML = value;
		operator.innerHTML = "";
	}
	else if (isAdding && (operation.innerHTML.length !== 1) && (operation.innerHTML[operation.innerHTML.length - 1] === operator.innerHTML)) {
		operation.innerHTML = value;
	}	
	else {
		if (operation.innerHTML[operation.innerHTML.length - 1] === "0") {
			if (operation.innerHTML.length === 1) {
				operation.innerHTML = value;
			}
			else if (operation.innerHTML[operation.innerHTML.length - 2] === "-") {
				operation.innerHTML[operation.innerHTML.length - 1] = value;
			}
			else {
				operation.innerHTML += value;
			}
		}
		else {
			operation.innerHTML += value;
		}
	}
};

const AC = () => {
	isDone = false;
	operation.innerHTML = "0"; 
	firstNumber = "";
	isAdding = false;
	operator.innerHTML = "";
};

const fattoriale = (number) => {
	let result = 1;
	for (let n = number; n >= 0; n--) {
		(n !== 0) ? result *= n : n *= 1;
	}
	return result;
};

const clickDot = () => {
	if (isDone) {
		firstNumber = "";
		isDone = false;
		operation.innerHTML = "0.";
		operator.innerHTML = "";
	}
	else {
		if (operation.innerHTML[operation.innerHTML.length - 1] === operator.innerHTML) {
				operation.innerHTML = "0.";
		}
		else if (operation.innerHTML.indexOf(".")) {
				operation.innerHTML += ".";
		}
	}
};

const clickC = () => {
	if (isDone) {
		firstNumber = "";
		isDone = false;
		(operation.innerHTML.length === 1) ? operation.innerHTML = "0" : operation.innerHTML = operation.innerHTML.slice(0, -1);
	}
	else if (isAdding) {
		if (operation.innerHTML[operation.innerHTML.length - 1] === operator.innerHTML) {
			operation.innerHTML = operation.innerHTML.slice(0, operation.innerHTML.indexOf(" "));
			firstNumber = "";
			isAdding = false;
			operator.innerHTML = "";
		}
		else { //secondNumber
			if (operation.innerHTML === "0") {
				operation.innerHTML = firstNumber + " " + operator.innerHTML;
			}
			else if((operation.innerHTML.length === 2) && (operation.innerHTML[0] === "-")) {
				operation.innerHTML = "0";
			}
			else{(operation.innerHTML.length === 1) ? operation.innerHTML = "0" : operation.innerHTML = operation.innerHTML.slice(0, -1);}
		}
	}
	else {
		if ((operation.innerHTML.length === 1) || ((operation.innerHTML.length === 2) && (operation.innerHTML[0] === "-"))) {
			operation.innerHTML = "0";
		}
		else{
			operation.innerHTML = operation.innerHTML.slice(0, -1);
		}
	}
};

const clickAngleFattLog = (value) => { //rivedere con addNumber ecc
	let number = Number(operation.innerHTML);
	if (isAdding) {
		if (operation.innerHTML[operation.innerHTML.length - 1] === operator.innerHTML) {
			number = Number(firstNumber);
			firstNumber = "";
			isAdding = false;
		}
		else {
			clickCalc(); //calcola numero dell'operazione poi esegue sul numero la funzione dei vari operatori
			number = Number(operation.innerHTML);
		}
	}
	switch (value) {
		case "cos":
			operation.innerHTML = Math.cos(number * (Math.PI / 180)).toString();
			isDone = true;
			break;
		case "acos":
			if ((number > 1) || (number < -1)) {
				alert("Math error");
				break;
			}
			operation.innerHTML = (Math.acos(number) * (180 / Math.PI)).toString();
			isDone = true;
			break;
		case "sin":
			operation.innerHTML = Math.sin(number * (Math.PI / 180)).toString();
			isDone = true;
			break;
		case "asin":
			if ((number > 1) || (number < -1)) {
				alert("Math error");
				break;
			}
			operation.innerHTML = (Math.asin(number) * (180 / Math.PI)).toString();
			isDone = true;
			break;
		case "tan":
			let falseNumber = number;
			if (number < 0) {
				for (let i = 0; falseNumber >= 0; i++) {
					falseNumber += 360;
				}
				if ((falseNumber === 90) || (falseNumber === 270)) {
					alert ("Math error");
					break;
				}
			}
			else if (number > 0) {
				for (let c = 0; falseNumber <= 0; c++) {
					falseNumber -= 360;
				}
				if ((falseNumber === -90) || (falseNumber === -270)) {
					alert ("Math error");
					break;
				}
			}
			operation.innerHTML = Math.tan(number * (Math.PI / 180)).toString();
			isDone = true;
			break;
		case "atan":
			operation.innerHTML = (Math.atan(number) * (180 / Math.PI)).toString();
			isDone = true;
			break;
		case "!":
			if (number < 0) {
				alert("Math error");
				break;
			}
			else if (number > 1000) {
				alert("Too big number");
				break;
			}
			else if (!Number.isInteger(number)) {
				alert("Math error");
				break;
			}
			else {
				operation.innerHTML = fattoriale(number);
				isDone = true;
				break;
			}
		case "log":
			if (number <= 0) {
				alert("Math error");
				break;
			}
			else{
				operation.innerHTML = Math.log10(number).toString();
				isDone = true;
				break;
			}
		case "ln":
			if (number <= 0) {
				alert("Math error");
				break;
			}
			else{
				operation.innerHTML = Math.log(number).toString();
				isDone = true;
				break;
			}
	}
};

const clickOperator = (value) => {
	if (isDone) {
		isDone = false;
		firstNumber = operation.innerHTML;
		operator.innerHTML = value;
		isAdding = true;
		operation.innerHTML += " " + value;
	} 
	else if (isAdding) {
		if (operation.innerHTML.length !== 0) {
			if (operation.innerHTML[operation.innerHTML,length - 1] === operator.innerHTML){
				operator.innerHTML = value;
				operation.innerHTML[operation.innerHTML.length - 1] = value; 
			}
			else {
				clickCalc();
				firstNumber = operation.innerHTML;
				operator.innerHTML = value;
				isDone = false;
				isAdding = true;
				operation.innerHTML += " " + value;
			}
		}
	}
	else {
		isAdding = true;
		firstNumber = operation.innerHTML;
		operator.innerHTML = value;
		operation.innerHTML = operation.innerHTML + " " + value;
	}
};

const clickCalc = () => { 
	if ((operation.innerHTML[operation.innerHTML.length - 1] === operator.innerHTML) && (operator.innerHTML !== "^")) {
		operation.innerHTML = firstNumber;
	}
	else{
		switch(operator.innerHTML) {
			case "+":
				operation.innerHTML = Number(firstNumber) + Number(operation.innerHTML);
				break;
			case "-":
				if (Number(operation.innerHTML) < 0) {
					operation.innerHTML = Number(firstNumber) + Number(operation.innerHTML);
					break;
				}
				operation.innerHTML = Number(firstNumber) - Number(operation.innerHTML);
				break;
			case "*":
				operation.innerHTML = Number(firstNumber) * Number(operation.innerHTML);
				break;
			case "/":
				if (Number(operation.innerHTML) === 0){
					if (Number(firstNumber) === 0) {
						operation.innerHTML = "Infinity";
						break;
					}
					else {
						alert("Math error");
						return 0;;
					}
				}
				else {
					operation.innerHTML = Number(firstNumber) / Number(operation.innerHTML);
					break;
				}
			case "E":
				operation.innerHTML = Math.pow(Number(firstNumber), Number(operation.innerHTML));
				break;
			case "^":
				if (operation.innerHTML[operation.innerHTML.length - 1] === operator.innerHTML){
					operation.innerHTML = Math.pow(Number(firstNumber), 1/2);
					break;
				}
				else if (Number(operation.innerHTML) === 0){
					alert("Math error");
					return 0;
				}
				operation.innerHTML = Math.pow(Number(firstNumber), 1 / Number(operation.innerHTML));
				break;
		}
	}
	isDone = true;
	firstNumber = "";
	isAdding = false;
	operator.innerHTML = "";
};

const memory = (value) => {
	switch (value){
		case "M1C":
			memory1 = "";
			break;
		case "M2C":
			memory2 = "";
			break;
		case "M1":
			if (memory1 === "") {
				if (isAdding) {
					if (operation.innerHTML[operation.innerHTML.length - 1] === operator.innerHTML) {
						memory1 = firstNumber;
					}
					else {
						memory1 = operation.innerHTML;
					}
				}
				else {memory1 = operation.innerHTML;}
			}
			else {
				(isDone) ? isDone = false : null;
				operation.innerHTML = memory1;
			}
			break;
		case "M2":
			if (memory2 === "") {
				if (isAdding) {
					if (operation.innerHTML[operation.innerHTML.length - 1] === operator.innerHTML) {
						memory2 = firstNumber;
					}
					else {
						memory2 = operation.innerHTML;
					}
				}
				else {memory2 = operation.innerHTML;}
			}
			else {
				(isDone) ? isDone = false : null;
				operaion.innerHTML = memory2;
			}
			break;
	}	
}

const PiAnde = (value) => {
	switch (value) {
		case "Pi":
			operation.innerHTML = Math.PI.toString();
			break;
		case "e":
			operation.innerHTML = Math.E.toString();
			break;
	}	
	(isDone) ? isDone = false : null;	
};

const plusLess = () => {
	if (operation.innerHTML[0] === "-") {
		if (isAdding && (operation.innerHTML[operation.innerHTML.length - 1] === operator.innerHTML)) {
			firstNumber = firstNumber.slice(1);
		}
		operation.innerHTML = operation.innerHTML.slice(1);
	}
	else {
		if (isAdding && (operation.innerHTML[operation.innerHTML.length - 1] === operator.innerHTML)) {
			firstNumber = "-" + firstNumber;
		}
		operation.innerHTML = "-" + operation.innerHTML;
	}
};

const help = () => {
	const message = "Legenda:\n\n"+
              "+ somma;\n"+
              "- differenza;\n"+
              "* moltiplicazione;\n"+
              "/ divisione;\n"+
              "^ radice del numero a sinistra, il numero inserito successivamente è l'indice, di default la radice ha indice 2;\n"+
              "E esponente;\n"+
              "e costante di Nepero;\n"+
              "Pi pi greco;\n"+
              "M1, M2 salva un numero, se già salvato lo inserisce nell'operazione;\n"+
              "M1C, M2C cancella numero salvato nelle rispettive memorie;\n"+
              "DEL cancella ultimo carattere dell'operazione;\n"+
              "log logaritmo in base 10;\n"+
              "ln logaritmo in base e;\n"+
              "+- cambia segno operazione;\n"+
              "= calcola l'operazione;\n"+
              "cos, sin, tan, acos, asin, atan funzioni trigonometriche;\n"+
              ". è un punto;\n"+
              "1, 2, 3, 4, 5, 6, 7, 8, 9, 0 sono mumeri;\n"+
              "help credo tu lo abbia già capito.\n";
	alert(message);
};

const myFunction = () => {alert("It doesn't exist!")};