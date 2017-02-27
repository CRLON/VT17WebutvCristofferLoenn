"use strict"
//API-Nyckel: 7bfcd321e8203f59

var userInput = document.getElementById("numberInput");
userInput.addEventListener("input", inputModifier)
var ingredientAmountList = document.getElementsByClassName("ingredients__amount");
var currentAmount = parseFloat(document.getElementById("numberInput").value);
var stars = document.getElementsByClassName("stars");
var starValue = 5;
var loadingAnimation = document.getElementById("loading__gif");
var numberOfBatches = localStorage.getItem("numberOfBatches");
var xhttp = new XMLHttpRequest();
var response;
var hasVoted;

if(localStorage.getItem("numberOfBatches") == "null") {
    localStorage.setItem("numberOfBatches", "1");
	}
	else {
    userInput.value = localStorage.getItem("numberOfBatches");
	}

if(localStorage.getItem("hasVoted") == "null") {
    localStorage.setItem("hasVoted", "true");
  }
  else {
    var hasVoted = localStorage.getItem("hasVoted")
  }

function inputModifier() {
  var newAmount = document.getElementById("numberInput").value;
  for(var i = 0; i < ingredientAmountList.length; i++) {
    var temp = parseFloat(ingredientAmountList[i].innerText, 10);
    ingredientAmountList[i].innerText = (temp / currentAmount) * newAmount;
    }
  currentAmount = parseFloat(document.getElementById("numberInput").value);
  localStorage.setItem("numberOfBatches", currentAmount);
}
inputModifier();

for(var i = 0; i < stars.length; i++) {
	stars[i].addEventListener("click", addVote);
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

function getRating() {
  showLoadingAnimation();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText);
  xhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=7bfcd321e8203f59&recipe=blåbärspaj", true);
   }
  }
}
getRating();

function showLoadingAnimation() {
  loadingAnimation.style.visibility = "visible";
}

function hideLoadingAnimation() {
  loadingAnimation.style.visibility = "hidden";
}

function addVote() {
  if(hasVoted == "false") {
    fillStars(this.value);
  }
}
