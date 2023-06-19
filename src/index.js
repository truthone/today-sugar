var numberDisplay = document.getElementById('number-display');
var number = 0;

function increaseNumber(increment) {
  var newNumber = number + increment;
  if (newNumber <= 999) {
    number = newNumber;
  } else if (newNumber > 999){
    number = 999;
  }
  numberDisplay.textContent = number.toString().padStart(3, '0');
}

function decreaseNumber(decrement) {
  var newNumber = number - decrement;
  if (newNumber >= 0) {
    number = newNumber;
  } else if (newNumber < 0){
    number = 0;
  }
  numberDisplay.textContent = number.toString().padStart(3, '0'); 
}

function resetNumber() {
  number = 0;
  numberDisplay.textContent = number.toString().padStart(3, '0');
}