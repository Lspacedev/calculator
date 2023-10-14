//operator functions
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

//variables
let first = '';
let operator = '';
let last = '';
let result = 0;

//
function operate(first, operator, last){
    switch (operator) {
        case '+':
            add(first, last);
            break;
        case '-':
            subtract(first, last);
            break;
        case '*':
            multiply(first, last);
            break;
        case '/':
            divide(first, last);
            break;
        default:
            break;
    }
}