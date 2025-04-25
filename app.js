/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
let screen = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // console.log(event.target.innerText)
        screen.textContent = `${event.target.innerText}`
 
    })
})

calculator.addEventListener('click', (event) => {
    // console.log(event.target.innerText)
 
    
})
/*-------------------------------- Functions --------------------------------*/
