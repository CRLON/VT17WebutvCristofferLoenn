"use strict"
var numberKeys = document.getElementsByClassName("calc__number");
var operatorKeys = document.getElementsByClassName("calc__sign");
var display = document.getElementById("result");
var ul = document.getElementById("results");
var isValidCalculation = true;

for(var i = 0; i < numberKeys.length; i++) {
	numberKeys[i].addEventListener("click", numberInput);
}

for(var i = 0; i < operatorKeys.length; i++) {
	operatorKeys[i].addEventListener("click", operatorInput);
}

function numberInput() {
  if(isValidCalculation === false) {
    clearWindow();
  }
  if(isLastInputZero(this.innerText) != true) {
  if(display.innerText != "0") {
    display.innerText += this.innerText;
  }
  else if(display.innerText === "0") {
    display.innerText = this.innerText;
  }
  }
}

function operatorInput() {
  if(isValidCalculation === false) {
    clearWindow();
  }
  if(this.innerText === "+") {
    add();
  }
  else if(this.innerText === "-") {
    subtract();
  }
  else if(this.innerText === "=") {
    calculate();
  }
}

function isLastInputZero(value) {
  if (value === "0" && isValidInput() != true) {
    return true;
  }
  else {
    return false;
  }
}

function isValidInput() {
  var input = (display.innerText[display.innerText.length - 1]);
  if(input == "+" || input == "-") {
    return false;
  }
  else {
    return true;
  }
}

function add() {
  if(isValidInput() && display.innerText != "0") {
    display.innerText += "+";
  }

}

function subtract() {
  if(isValidInput() && display.innerText != "0") {
    display.innerText += "-";
  }
}

function clearWindow() {
  display.innerText = "0";
  isValidCalculation = true;
}

function resultList(value) {
  var listItem = document.createElement("li");
  var paragraph = document.createElement("p");
  var resultText = document.createTextNode(value);
  paragraph.appendChild(resultText);
  listItem.appendChild(paragraph);
  ul.insertBefore(listItem, ul.childNodes[0]);
}

function calculate() {
  if(isValidInput()) {
  isValidCalculation = false;
  var result = eval(display.innerText);
  display.innerText += "=" + result;
  resultList(display.innerText);
  }
}