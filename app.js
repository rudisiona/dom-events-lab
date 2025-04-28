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
//     clickedValue = event.target.innerText;
//  } 
// })
/*-------------------------------- Functions --------------------------------*/

function handleButtonClick(event) {
    const value = event.target.innerText
  
    if (value === 'C') {
        clearDisplay();
      } else if (value === '=') {
        calculateResult();
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

function calculateResult(){ 
  let subCheck = screen.innerText.includes('-')
   if (subCheck) {
    let subtract = screen.innerText.split('-')
    screen.innerText = subtract[0] - subtract[1]
    currentInput = screen.innerText
   } 
  let addCheck = screen.innerText.includes('+')
   if (addCheck) {
    let add = screen.innerText.split('+')
    screen.innerText = +add[0] + +add[1]
    currentInput = screen.innerText
   } 
   let multCheck = screen.innerText.includes('*')
    if (multCheck) {
    let multiply = screen.innerText.split('*')
    screen.innerText = multiply[0] * multiply[1]
    currentInput = screen.innerText
   } 
  let divCheck = screen.innerText.includes('/')
    if (divCheck) {
    let divide = screen.innerText.split('/')
    screen.innerText = divide[0] / divide[1]
    currentInput = screen.innerText
  }
}

function clearDisplay() {
    currentInput = ''
    screen.textContent = '0'
}


 


