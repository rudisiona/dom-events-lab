/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')

/*-------------------------------- Variables --------------------------------*/
let screen = document.querySelector('.display')
let currentInput = ''
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});

// calculator.addEventListener('click', (event) => {
//     // console.log(event.target.innerText)
//  if (event.target.classList.contains('number')) {
//     screen.textContent = `${event.target.innerText}`
//     clickedValue = event.target.innerText; // Store clicked text in the variable
//  } 
// })
/*-------------------------------- Functions --------------------------------*/

function handleButtonClick(event) {
    const value = event.target.innerText
  
    if (value === 'C') {
        clearDisplay();
      } else if (value === '=') {
        calculateResult(value);
      } else {
        appendToInput(value);
      }
    }





function appendToInput(value){
 if (screen.textContent === '0'){
 currentInput = value
 } else {
   currentInput += value;
  

}
screen.textContent = currentInput
}

function calculateResult(value){
    console.log(value)
}


function clearDisplay() {
    currentInput = ''
    screen.textContent = '0'
    
}


 


