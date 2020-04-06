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
const ans = document.getElementById("result")

const click1 = () => {
	operation.innerHTML === "0" ? operation.innerHTML = "1" : operation.innerHTML += "1"; 
};

const click2 = () => {
	operation.innerHTML === "0" ? operation.innerHTML = "2" : operation.innerHTML += "2"; 
};

const click3 = () => {
	operation.innerHTML === "0" ? operation.innerHTML = "3" : operation.innerHTML += "3"; 
};

const click4 = () => {
	operation.innerHTML === "0" ? operation.innerHTML = "4" : operation.innerHTML += "4"; 
};

const click5 = () => {
	operation.innerHTML === "0" ? operation.innerHTML = "5" : operation.innerHTML += "5"; 
};

const click6 = () => {
	operation.innerHTML === "0" ? operation.innerHTML = "6" : operation.innerHTML += "6"; 
};

const click7 = () => {
	operation.innerHTML === "0" ? operation.innerHTML = "7" : operation.innerHTML += "7"; 
};

const click8 = () => {
	operation.innerHTML === "0" ? operation.innerHTML = "8" : operation.innerHTML += "8"; 
};

const click9 = () => {
	operation.innerHTML === "0" ? operation.innerHTML = "9" : operation.innerHTML += "9"; 
};

const click0 = () => {
	operation.innerHTML === "0" ? null : operation.innerHTML += "0"; 
};

const clickDot = () => {
	operation.innerHTML += ".";
};

const clickSum = () => {
	operation.innerHTML += "+"
};

const clickDiff = () => {
	operation.innerHTML += "-"
};

const clickPer = () => {
	operation.innerHTML += "*"
};

const clickDiv = () => {
	operation.innerHTML += "/"
};

const clickCalc = () => {
	eval(operation.innerHTML) == Infinity ? result.innerHTML = "Math error" : result.innerHTML = eval(operation.innerHTML);
	ans.innerHTML = result.innerHTML.toString();
};

const clickDel = () => {
	operation.innerHTML.length === 1 ? operation.innerHTML = "0" : operation.innerHTML = operation.innerHTML.slice(0, (operation.innerHTML.length) - 1);
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
buttonDot.onclick= clickDot
buttonCalc.onclick = clickCalc
buttonSum.onclick = clickSum
buttonDiff.onclick = clickDiff
buttonPer.onclick = clickPer
buttonDiv.onclick = clickDiv
buttonDel.onclick = clickDel