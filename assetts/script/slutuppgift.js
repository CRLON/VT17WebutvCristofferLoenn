"use strict"

var userInput = document.getElementById('numberInput');
userInput.addEventListener('input', inputModifier)
var ingredientAmountList = document.getElementsByClassName('ingredients__amount');
var currentAmount = parseFloat(document.getElementById('numberInput').value);

function inputModifier() {

  var newAmount = document.getElementById('numberInput').value;
  
  for(var i = 0; i < ingredientAmountList.length; i++) {
    
    var temp = parseFloat(ingredientAmountList[i].innerText, 10);
    ingredientAmountList[i].innerText = (temp / currentAmount) * newAmount;
    currentAmount = parseFloat(document.getElementById('numberInput').value);
    console.log(currentAmount)
    //console.log(ingredientAmountList[i].innerText);

  }
}