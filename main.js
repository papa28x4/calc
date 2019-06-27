let displayValue = 0;
let inputArray = [];
let BigfontSize = '32px';
let smallFontSize = '16px';

let numButtons = document.querySelectorAll('.num-btn');
numButtons.forEach((numButton)=>{numButton.addEventListener('click', display)})

let operatorButtons = document.querySelectorAll('.calc-btn-operator')
operatorButtons.forEach((operatorButton)=>{operatorButton.addEventListener('click', operation)})

let calcDisplay = document.querySelector('#calc-display');

function display (e) {

    if(displayValue === 0){
        displayValue === '';
        displayValue = e.target.textContent;
    }else{
        displayValue += e.target.textContent;
    }
    if(displayValue.length >= 10){
        calcDisplay.style.fontSize = smallFontSize;
        
    }else{ calcDisplay.style.fontSize = BigfontSize;
    
}

    calcDisplay.textContent = numberWithCommas2(displayValue);
}

function operation (e){

    inputArray.push(displayValue);
    displayValue = e.target.textContent;
    if(displayValue !== '='){
        if(displayValue === '×'){
            displayValue = '*'
        }
        else if(displayValue === '÷'){
            displayValue = '/'
        }

    inputArray.push(displayValue);
    displayValue = 0;
    calcDisplay.textContent = displayValue;
    }
}

let clear = document.querySelector('#calc-clear');

clear.addEventListener('click', (e)=>{
    displayValue = 0;
    inputArray = [];
    calcDisplay.style.fontSize = BigfontSize
    calcDisplay.textContent = displayValue;
})

let backspace = document.querySelector('#calc-backspace');

backspace.addEventListener('click',(e)=>{
    let remainant = displayValue.split('')
    remainant.pop();
    displayValue = remainant.join('')
    if(displayValue === ''){
        displayValue = 0;
    }
    if(displayValue.length < 10){
        calcDisplay.style.fontSize = BigfontSize;
    }
    calcDisplay.textContent = displayValue;   
})

let equals = document.querySelector('#calc-equals');
equals.addEventListener('click', result)

function result(e){
    
    let inputArray2 = inputArray.join(' ')
    console.log(inputArray2)
    switch(inputArray[1]){
         case '+':
         displayValue = eval(inputArray2)
            break;
         case '-':
            displayValue = eval(inputArray2)
             break;
         case '*':
            displayValue = eval(inputArray2)
            break;
         case '/':
            displayValue = eval(inputArray2)
            break;
        
    } 
    calcDisplay.textContent = numberWithCommas2(displayValue);
    if (calcDisplay.textContent.length >= 10){
        calcDisplay.style.fontSize = smallFontSize; 
    }
    displayValue = 0;
    inputArray = [];
}

function numberWithCommas2(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

