const operation = document.getElementById("operation")
const sign = ['+', '-', ':', 'x']
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const command = ["0"]
const ans = ""
const signLeng = sign.length

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

const click1 = () => {
	if (command.length === 1 && command[0] === "0") {
		command[0] = "1";
		operation.innerHTML = "1";
	}
	else {
		operation.innerHTML += "1";
		command[command.length - 1] += "1";
	}
};

const click2 = () => {
	if (command.length === 1 && command[0] === "0") {
		command[0] = "2";
		operation.innerHTML = "2";
	}
	else {
		operation.innerHTML += "2";
		command[command.length - 1] += "2";
	}
}; 

const click3 = () => {
	if (command.length === 1 && command[0] === "0") {
		command[0] = "3";
		operation.innerHTML = "3";
	}
	else {
		operation.innerHTML += "3";
		command[command.length - 1] += "3";
	}
};

const click4 = () => {
	if (command.length === 1 && command[0] === "0") {
		command[0] = "4";
		operation.innerHTML = "4";
	}
	else {
		operation.innerHTML += "4";
		command[command.length - 1] += "4";
	}
};

const click5 = () => {
	if (command.length === 1 && command[0] === "0") {
		command[0] = "5";
		operation.innerHTML = "5";
	}
	else {
		operation.innerHTML += "5";
		command[command.length - 1] += "5";
	}
};

const click6 = () => {
	if (command.length === 1 && command[0] === "0") {
		command[0] = "6";
		operation.innerHTML = "6";
	}
	else {
		operation.innerHTML += "6";
		command[command.length - 1] += "6";
	}
}; 

const click7 = () => {
	if (command.length === 1 && command[0] === "0") {
		command[0] = "7";
		operation.innerHTML = "7";
	}
	else {
		operation.innerHTML += "7";
		command[command.length - 1] += "7";
	}
};

const click8 = () => {
	if (command.length === 1 && command[0] === "0") {
		command[0] = "8";
		operation.innerHTML = "8";
	}
	else {
		operation.innerHTML += "8";
		command[command.length - 1] += "8";
	}
};

const click9 = () => {
	if (command.length === 1 && command[0] === "0") {
		command[0] = "9";
		operation.innerHTML = "9";
	}
	else {
		operation.innerHTML += "9";
		command[command.length - 1] += "9";
	}
};
/*
const click0 = () => {
	if (!((command.length === 1) && (command[0] === "0"))) {
		if (!((command[command.length - 1] == "0") && ((command[command.length - 2] == "+") || (command[command.length - 2] == "-") || (command[command.length - 2] == ":") || (command[command.length - 2] == "x")))) {
			command[command.length - 1] += "0";
		}
	}
}
*/

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


/*
const clickSum = () => {
	const l = operation.innerHTML.length - 1
	for (let i = 0; i ++; i <= signLeng) {
		if (operation.innerHTML[l]===sign[i]){
			throw "Syntax error"
		}
	}operation.innerHTML += "+"
}

const clickDiff = () => {
	const l = operation.innerHTML.length - 1
	for (let i = 0; i ++; i <= signLeng) {
		if (operation.innerHTML[signLeng]===sign[i]){
			throw "Syntax error"
		}
	}operation.innerHTML += "-"
}

const clickPer = () => {
	const l = operation.length - 1
	for (let i = 0; i ++; i <= signLeng) {
		if (operation.innerHTML[signLeng]===sign[i]){
			throw "Syntax error"
		}
	}operation.innerHTML += "x"
}

const clickDiv = () => {
	const l = operation.length - 1
	for (let i = 0; i ++; i <= signLeng) {
		if (operation.innerHTML[legSingn]===sign[i]){
			throw "Syntax error"
		}
	}operation.innerHTML += ":"
}

const clickDel = () => {
	const l = operation.length - 1
	(operation.innerHTML==="0") ? null : operation.innerHTML[l] = "";
}
*/