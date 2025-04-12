let num1 = '';
let num2 = '';
let operator = '';

const resultDisplay = document.querySelector('.result');
const numberButtons = document.querySelectorAll('.numButton'); 
const clearButton = document.querySelector('#clear-btn')
const operatorButton = document.querySelectorAll('.operator')
const equalButton = document.querySelector('#equals')
const miniDisplay = document.querySelector('#mini-display');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const digit = button.textContent;
        if (num1.length >= 10) return;
        if (num1 === '' && digit === '0'){
            num1 = '0';
            resultDisplay.textContent = num1;
            miniDisplay.textContent = num1;
            return;
        }
        if (num1 === '0' && digit === '0') return;
        if (num1 === '0' && digit !== '0'){
            num1 = digit;
        }else { num1 += digit;}
        
        resultDisplay.textContent = num1;

        if (operator === ''){
            miniDisplay.textContent = num1;
        }else{
            miniDisplay.textContent = num2 + ' ' + operator + ' ' + num1;
        }
    });
});

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        if (num1 === '' && num2 === '') return;
        if (num2 && num1 === ''){
            operator = button.textContent;
            resultDisplay.textContent = operator;
            miniDisplay.textContent = num2 + ' ' + operator;
        }else if (num1 !== ''){
            operator = button.textContent;
            num2 = num1;
            num1 = '';
            resultDisplay.textContent = operator;
            miniDisplay.textContent = num2 + ' ' + operator; 
        };
    });
  });

equalButton.addEventListener('click', () => {
    operate(num1, num2, operator);
    resultDisplay.textContent = result;
    miniDisplay.textContent = result;
    num1 = result;
});

clearButton.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    resultDisplay.textContent = '';
    miniDisplay.textContent = '';
    operator = '';
}); 

function operate(num1, num2, operator){
    switch (operator){
        case '+':
            result = Number(num2) + Number(num1);
            break;
        case '-':
            result = Number(num2) - Number(num1);
            break;
        case '*':
            result = Number(num2) * Number(num1);
            break;
        case '/':
            result = Number(num2) / Number(num1);
            break;
        default:
            result = "Invalid Operator";
    }
}