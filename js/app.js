// IMPORT SORTING ALGORITHMS
import bubbleSort from './algorithms/bubbleSort.js';
import quickSort from './algorithms/quickSort.js';


// Cache the DOM
const arraySizeSlider = document.querySelector('#change-size');
const arrayBody = document.querySelector('#array-body');
const generateNewArrayEl = document.querySelector('#generate-array');
const arraySizeValueEl = document.querySelector('.array-value');
const algoSortButtons = document.querySelectorAll('.algo-button');
const sortStartButton = document.querySelector('#sort-start');
const stopVisualisationButton = document.querySelector('#stop-visualisation');





// GENERATE ARRAY ON PAGE LOAD
createArrayElement(arraySizeSlider.value);


// DETECTING THE SLIDER CHANGE
arraySizeSlider.oninput = function() {
  let arraySize = Number(arraySizeSlider.value); // PARSING SLIDERING INT
  arrayBody.innerHTML = ""; // CLEARING THE ARRAY BODY
  arraySizeValueEl.innerHTML = arraySize + 1; // UPDATING THE SLIDER/ARRAY VALUE TO THE USER
  createArrayElement(arraySize); // GENERATING THE ARRAY IN THE DOM
}

// DRAW ARRAY ELEMENT ON SCREEN

function createArrayElement(arrayTotal) {
  for (let i = 0; i <= arrayTotal; i++){
    const value = Math.floor(Math.random() * 180 + 1);
    let divToAdd = document.createElement('div');
    divToAdd.classList.add("array-element");
    divToAdd.style.height = `${value * 3}px`;
    const blockLabel = document.createElement("label");
    blockLabel.classList.add("element-id");
    blockLabel.style.marginTop = divToAdd.style.height;
    blockLabel.innerHTML = value;
    divToAdd.appendChild(blockLabel);
    arrayBody.appendChild(divToAdd);
  }
}

function generateNewArray(){
  arrayBody.innerHTML = "";
  let arraySize = arraySizeSlider.value;
  createArrayElement(arraySize);
}


// HANDLE ALGO SELECTION
function handleAlgoButtonClick(e){
  let current = e.target.parentElement.querySelector('.active');
  let element = e.currentTarget;

  if (current != null){
    current.classList.remove('active');
    element.classList.add('active');
  } else {
    element.classList.add('active');
  }
  sortStartButton.disabled = false;  
}

// CALL ALGO FUNCTION
function runAlgo(e){
  let current = e.target.parentElement.querySelector('.active');
  let selectedAlog = current.dataset.description;

  switch(selectedAlog){
    case "bubbleSort":
      disableSelection();
      bubbleSort.bubbleSort();
      break;
    case "quickSort":
      quickSort.cacheDOM();
      break;
  }
  
}

function disableSelection() {
  arraySizeSlider.disabled = true;
  generateNewArrayEl.classList.add('button-disabled');
  algoSortButtons.forEach(button => button.classList.add('button-disabled'));
  sortStartButton.disabled = true;
  stopVisualisationButton.style.opacity = "1.0";
}

function enableSelection() {
  arraySizeSlider.disabled = false;
  generateNewArrayEl.classList.remove('button-disabled');
  algoSortButtons.forEach(button => button.classList.remove('button-disabled'));
  sortStartButton.disabled = false;
  stopVisualisationButton.style.opacity = "0.0";
}

function softReset(){
  document.location.reload(false);
}

// Event Listeners

sortStartButton.addEventListener('click', runAlgo);

algoSortButtons.forEach(button => {
  button.addEventListener('click', handleAlgoButtonClick)
})

generateNewArrayEl.addEventListener('click', generateNewArray);

stopVisualisationButton.addEventListener('click', softReset);

// EXPORTS 
export default {enableSelection}