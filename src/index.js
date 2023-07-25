const numberDisplay = document.getElementById('number-display');
let number = 0;

window.addEventListener('load', () => {
  handleClickTableRow();
  handleClickNumber();
});

function handleClickTableRow() {
  document.querySelector('#infoTable').addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'TD') {
      const clickedRow = clickedElement.parentNode;

      //1회제공량 cell은 5번째 column이다.
      const sugarPerOnce = Math.round(Number(clickedRow.cells[4].textContent));
      const selectedInfoName = clickedRow.cells[1].textContent;

      // 소숫점 반올림하여 정수값으로 입력한다.
      increaseNumber(sugarPerOnce);
      handleSelectedInfo(selectedInfoName);
    }
  });
}

function handleSelectedInfo(selectedInfoName) {
  const newElement = document.createElement('div');

  newElement.innerHTML = '✨' + selectedInfoName;
  document.querySelector('#selectedInfo').appendChild(newElement);
}

function increaseNumber(increment) {
  let newNumber = number + increment;
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

function handleCalculate() {
  const percentResult = calculateToPercent();
  const sugarCubeResult = calculateToSugarCube();
  document.getElementById('percentResult').textContent = percentResult;
  document.getElementById('sugarCubeResult').textContent = sugarCubeResult;
  // document.getElementById('info').style.display = 'none';
  document.getElementById('result').style.display = 'flex';
  document.getElementById('notice-back').style.display = 'flex';
}

function calculateToPercent() {
  const inputNum = Number(
    document.getElementById('number-display').textContent
  );
  const recommendGram = 25;
  const result = Math.round((Number(inputNum) / Number(recommendGram)) * 100);
  return result;
}

function calculateToSugarCube() {
  const inputNum = Number(
    document.getElementById('number-display').textContent
  );
  const standardNum = 3;
  const result = Math.round(Number(inputNum) / Number(standardNum));
  return result;
}

function handleClickNumber() {
  document.getElementById('numberButtons').addEventListener('click', (e) => {
    document.getElementById('info').style.display = 'flex';
    document.getElementById('result').style.display = 'none';
  });
}
