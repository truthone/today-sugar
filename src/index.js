let numberDisplay = document.getElementById('number-display');
let number = 0;

function increaseNumber(increment) {
  let newNumber = number + increment;
  console.log(newNumber);
  if (newNumber <= 999) {
    number = newNumber;
    numberDisplay.textContent = number;
  } else if (newNumber > 999) {
    number = 999;
  }
  numberDisplay.textContent = number.toString().padStart(3, '0');
}

function decreaseNumber(decrement) {
  let newNumber = number - decrement;
  if (newNumber >= 0) {
    number = newNumber;
  } else if (newNumber < 0) {
    number = 0;
  }
  numberDisplay.textContent = number.toString().padStart(3, '0');
}

function resetNumber() {
  number = 0;
  numberDisplay.textContent = number.toString().padStart(3, '0');
}
