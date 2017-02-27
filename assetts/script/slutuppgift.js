"use strict"
//API-Nyckel: 7bfcd321e8203f59

var userInput = document.getElementById('numberInput');
userInput.addEventListener('input', inputModifier)
var ingredientAmountList = document.getElementsByClassName('ingredients__amount');
var currentAmount = parseFloat(document.getElementById('numberInput').value);
var stars = document.getElementsByClassName('stars');
var starValue = 5;
var loadingAnimation = document.getElementById('loading__gif');
var numberOfBatches = localStorage.getItem('numberOfBatches');
//window.onloadend = setLocalStorage();

//function setLocalStorage() {
if(localStorage.getItem('numberOfBatches') != 'null') {
	userInput.value = localStorage.getItem('numberOfBatches');
	}
	else {
		localStorage.setItem('numberOfBatches', '1');
	}
inputModifier();



function inputModifier() {
  var newAmount = document.getElementById('numberInput').value;
  for(var i = 0; i < ingredientAmountList.length; i++) {
    var temp = parseFloat(ingredientAmountList[i].innerText, 10);
    ingredientAmountList[i].innerText = (temp / currentAmount) * newAmount;
  }
  currentAmount = parseFloat(document.getElementById('numberInput').value);
  localStorage.setItem('numberOfBatches', currentAmount);
}

for(var i = 0; i < stars.length; i++) {
	stars[i].addEventListener('click', addVote);
	stars[i].value = starValue;
	starValue--;
}

function fillStars (value) {

	var starNumber = 4;

	for (var i = 0; i < value; i++) {
		stars[starNumber].innerHTML = "&starf;";
		starNumber--;
	}
}


function addVote() {

	showLoadAnimation();
	console.log(loadingAnimation.style.visibility)
	fillStars(this.value);
	console.log(this.value);
	loadingAnimation.style.visibility = 'hidden';
}

function showLoadAnimation() {
	if (loadingAnimation.style.visibility == 'hidden') {
		loadingAnimation.style.visibility = 'visible';
	}
	else if (loadingAnimation.style.visibility == 'visible') {
		loadingAnimation.style.visibility = 'hidden';
	}
}