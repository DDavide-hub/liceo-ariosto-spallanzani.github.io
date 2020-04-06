const result = document.getElementById("result")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")
const button0 = document.getElementById("button0")
const buttonSum = document.getElementById("buttonSum")
const buttonDiff = document.getElementById("buttonDiff")
const buttonPer = document.getElementById("buttonPer")
const buttonDiv = document.getElementById("buttonDiv")
const buttonDel = document.getElementById("buttonDel")
const buttonCalc = document.getElementById("buttonCalc")
const operation = document.getElementById("operation")
//document.getElementById("demo").innerHTML = 1 / 0; //usato per fare prove

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const command = ["0"]
const ans = "0"

const syntError = () => result.innerHTML = "Syntax error"; setTimeout(x => result.innerHTML = ans, 2000);


const click1 = () => {
	if (command[command.length - 1] === "0") {
		command[command.length - 1] = "1";
		if (command.length === 1) {
			operation.innerHTML = "1";
		}
		else {
			operation.innerHTML = operation.innerHTML.slice(0, ((operation.innerHTML.length) - 1)) + "1";
		}
	}
	else {
		operation.innerHTML += "1";
		command[command.length - 1] += "1";
	}
	//document.getElementById("demo").innerHTML = commandCopy; //usato per fare prove
};

const click2 = () => {
	if (command[command.length - 1] === "0") {
		command[command.length - 1] = "2";
		if (command.length === 1) {
			operation.innerHTML = "2";
		}
		else {
			operation.innerHTML = operation.innerHTML.slice(0, ((operation.innerHTML.length) - 1)) + "2";
		}
	}
	else {
		operation.innerHTML += "2";
		command[command.length - 1] += "2";
	}
}; 

const click3 = () => {
	if (command[command.length - 1] === "0") {
		command[command.length - 1] = "3";
		if (command.length === 1) {
			operation.innerHTML = "3";
		}
		else {
			operation.innerHTML = operation.innerHTML.slice(0, ((operation.innerHTML.length) - 1)) + "3";
		}
	}
	else {
		operation.innerHTML += "3";
		command[command.length - 1] += "3";
	}
};

const click4 = () => {
	if (command[command.length - 1] === "0") {
		command[command.length - 1] = "4";
		if (command.length === 1) {
			operation.innerHTML = "4";
		}
		else {
			operation.innerHTML = operation.innerHTML.slice(0, ((operation.innerHTML.length) - 1)) + "4";
		}
	}
	else {
		operation.innerHTML += "4";
		command[command.length - 1] += "4";
	}
};

const click5 = () => {
	if (command[command.length - 1] === "0") {
		command[command.length - 1] = "5";
		if (command.length === 1) {
			operation.innerHTML = "5";
		}
		else {
			operation.innerHTML = operation.innerHTML.slice(0, ((operation.innerHTML.length) - 1)) + "5";
		}
	}
	else {
		operation.innerHTML += "5";
		command[command.length - 1] += "5";
	}
};

const click6 = () => {
	if (command[command.length - 1] === "0") {
		command[command.length - 1] = "6";
		if (command.length === 1) {
			operation.innerHTML = "6";
		}
		else {
			operation.innerHTML = operation.innerHTML.slice(0, ((operation.innerHTML.length) - 1)) + "6";
		}
	}
	else {
		operation.innerHTML += "6";
		command[command.length - 1] += "6";
	}
}; 

const click7 = () => {
	if (command[command.length - 1] === "0") {
		command[command.length - 1] = "7";
		if (command.length === 1) {
			operation.innerHTML = "7";
		}
		else {
			operation.innerHTML = operation.innerHTML.slice(0, ((operation.innerHTML.length) - 1)) + "7";
		}
	}
	else {
		operation.innerHTML += "7";
		command[command.length - 1] += "7";
	}
};

const click8 = () => {
	if (command[command.length - 1] === "0") {
		command[command.length - 1] = "8";
		if (command.length === 1) {
			operation.innerHTML = "8";
		}
		else {
			operation.innerHTML = operation.innerHTML.slice(0, ((operation.innerHTML.length) - 1)) + "8";
		}
	}
	else {
		operation.innerHTML += "8";
		command[command.length - 1] += "8";
	}
};

const click9 = () => {
	if (command[command.length - 1] === "0") {
		command[command.length - 1] = "9";
		if (command.length === 1) {
			operation.innerHTML = "9";
		}
		else {
			operation.innerHTML = operation.innerHTML.slice(0, ((operation.innerHTML.length) - 1)) + "9";
		}
	}
	else {
		operation.innerHTML += "9";
		command[command.length - 1] += "9";
	}
};

const click0 = () => {
	if (command[(command.length - 1)] != "0") {
		command[command.length - 1] += "0";
		operation.innerHTML += "0";
	}

};

const clickSum = () => {
	if (command[(command.length - 1)] == "") {
		syntError();
	}
	else{
		operation.innerHTML += "+";
		command.push("+");
		command.push("");
	}	
};

const clickDiff = () =>{
	if (command[(command.length - 1)] == "") {
		syntError();
	}
	else{
		operation.innerHTML += "-";
		command.push("-");
		command.push("");
	}		
};

const clickPer = () => {
	/*if (command[(command.length - 1)] == "") {
		syntError();
	}*/
	//else{
		operation.innerHTML += "*"
		command.push("x");
		command.push("");
	//}	
};

const clickDiv = () => {
	if (command[(command.length - 1)] == "") {
		syntError();
	}
	else{
		operation.innerHTML += " / ";
		command.push(":");
		command.push("");
	}	
};

const clickDel = () => {
	if (command[command.length - 1] == "") {
		command.pop(); //elimina spazio vuoto
		command.pop(); //elimina segno
	}
	else{
		command[command.length - 1] = command[command.length - 1].slice(0, (command[command.length - 1].length - 1)); //slice restituisce parte che taglia
	}
	operation.innerHTML = operation.innerHTML.slice(0, ((operation.innerHTML.length) - 1)); 
};

const clickCalc = () => {
	result.innerHTML = eval(operation.innerHTML);



	/*
	if (command.length % 2 === 0) {
		syntError();
	}
	else {
		const commandCopy = command.map(x => (x.length === 1) ? x : parseFloat(x));
		const l = commandCopy.length;
		for (let i = (l - 2); i -= 2; i >= 1) {
			let r = 0;
			if (commandCopy[i] === "x") {
				r = per(commandCopy[i - 1], commandCopy[i + 1]);
				commandCopy[i - 1] = r;
				commandCopy.pop();
				commandCopy.pop();
			} 
			else if (commandCopy[i] === ":") {
				r = div(commandCopy[i - 1], commandCopy[i + 1]);
				commandCopy[i - 1] = r;
				commandCopy.pop();
				commandCopy.pop();
			}
		}
		let times = Math.floor(commandCopy.length % 2); //numero operazioni
		for (let t = 0; t ++; t < times) {
			let c = commandCopy[1]; //segno operazione
			let partialResult = 0;
			c === "+" ? partialResult = sum(commandCopy[0], commandCopy[2]) : partialResult = diff(commandCopy[0], commandCopy[2]); //da cambiare se si mettono altre operazioni
			commandCopy.shift();
			commandCopy.shift();
			commandCopy[0] = partialResult;
		}
		result.innerHTML = commandCopy[0];
	}
	do {
		let a = order[0];
		let s = order[1];
		let b = order [2];
		let r = 0;
		switch (s) {
			case "x":
				r = per(a, b);
				break;
			case ":":
				if (b === 0) {
					if (a === 0) {
						r = "Undefined";
					}
					else {
						r = "Math error";
					}
				}
				else {
					r = div(a, b);
				}
				break;
			case "+":
				r = sum(a, b);
				break;
			case "-":
				r = diff(a, b);
				break;
		}
		if ((r == "Undefined") || (r == "Math error")) {
			order = [];
			order[0] = r;
		}
		else {
			order.shift();
			order.shift();
			order[0] = r;
		}
	} while (order.length !== 1);*/
	//result.innerHTML = order[0].innerHTML;
};


button1.onclick = click1
button2.onclick = click2
button3.onclick = click3
button4.onclick = click4
button5.onclick = click5
button6.onclick = click6
button7.onclick = click7
button8.onclick = click8
button9.onclick = click9
button0.onclick = click0
buttonSum.onclick = clickSum
buttonDiff.onclick = clickDiff
buttonPer.onclick = clickPer
buttonDiv.onclick = clickDiv
buttonDel.onclick = clickDel
buttonCalc.onclick = clickCalc