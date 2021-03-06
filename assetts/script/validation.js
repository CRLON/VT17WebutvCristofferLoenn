"use strict"

var idInput = document.getElementById('idNumber');
idInput.addEventListener('input', checkIdNumber);
var idMark = document.getElementById('idNumberResult');
idMark.innerHTML = "\u2718";

function checkIdNumber() {
  var inputInt = 0;
  var idSum = 0;

  if(idInput.value != 10 || idInput.value != 12) {
    idMark.innerHTML = "\u2718";
  }

  if(idInput.value.length == 12) {
    idInput.value = idInput.value.substring(2, 12);
  }

  if(idInput.value.length == 10) {
    for(var i = 0; i < 10; i++) {
         inputInt = parseInt(idInput.value[i]);
      if(i % 2 == 0) {
        inputInt *= 2;
        if(inputInt > 9) {
          inputInt -= 9;
        }
        idSum += inputInt;
      }
      else {
        idSum += inputInt;
      }
    }
     if(idSum % 10 == 0) {
      idMark.innerHTML = "\u2714";
     }
     else {
      idMark.innerHTML = "\u2718";
     }
  }
}

var leapYearInput = document.getElementById('leapYear');
leapYearInput.addEventListener('input', checkLeapYear);
var leapMark = document.getElementById('leapYearResult');
leapMark.innerHTML = "\u2012";

function checkLeapYear() {
  var leapYearInt = parseInt(leapYearInput.value, 10);

  if(leapYearInt % 4 == 0 && leapYearInt % 100 != 0 || leapYearInt % 400 == 0) {
    leapMark.innerHTML = "\u2714";
  }
  else {
    leapMark.innerHTML = "\u2718";
  }
}

var numberSumInput = document.getElementById('numberSum');
numberSumInput.addEventListener('input', numberSumCalc);
var numberSumResult = document.getElementById('numberSumResult');
numberSumResult.innerHTML = 0;

function numberSumCalc() {
  var returnSum = 0;
 for(var i = 0; i < numberSumInput.value.length; i++) {
    returnSum += parseInt(numberSumInput.value[i], 10);
  }
  numberSumResult.innerHTML = returnSum;
}