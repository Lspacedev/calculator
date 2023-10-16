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
//not more than one operator
//include .
//minus instances

//variables
var current = '';
let operator = '';
let last = '';
let result = 0;

let lst = '';
let secondL = '';
const display = document.querySelector('.display');
const eval = document.querySelector('.eval');

//get Operators
function getOperator(e){
    operator =  e.textContent;

    //current = current + operator;
    
    lst = current[current.length - 1];
    secondL = current[current.length - 2];
    let reg = /[-+*\/]/;

    if(operator !== '-' && reg.test(operator)){
        if(reg.test(lst) && lst === '-' && reg.test(secondL)){
            current = current.slice(0, - 2) + operator;
            return;
        }

        if(reg.test(lst)){
            current = current.slice(0, - 1) + operator;
            return;
        }
    }
    if(!(/[-]+([-])/g).test(current)){
        current = current + operator;
    }

    
    
}

//get Numbers 
function getValue(e){
  
    current = current + e.textContent;

    display.textContent =  current;
 
    //console.log(current);
    
    //arr.push(current);
    

}

function getDot(e){
    let arr = current.split(/[^0-9.]/g);
    
    let lastChar = arr[arr.length - 1];

    if(!lastChar.includes('.') && Number.isInteger(parseInt(lastChar))){
        current = current + '.';
    }else if(lastChar.includes('.')){
        return;
    }else{
        return;
    }
    
    display.textContent =  current;
 
    //console.log(current);
    
    //arr.push(current);
    
}
//current = display.textContent;
//console.log(arr)


//Equate
function operate(){
  
    let re  = /(?!\.)\W/;
    let valueArr = current.split(re);

   // let val = valueArr.join('');
    //let valArr = val.split("");
    //console.log(valArr)

    let opArr = current.split(/[^-+*\/]/);
    console.log(opArr)
    let str = opArr.join('');

    let opArray = str.split("");

    console.log(opArray)

    result = parseFloat(valueArr[0]);

    for(let i = 0; i < opArray.length; i++){
       
        if(opArray[i] === '+' && opArray[i+1] !== '-'){
            result = result + parseFloat(valueArr[i + 1]);
            display.textContent = result; 

        }else if(opArray[i] === '+' && opArray[i+1] === '-' ){
            result = result - parseFloat(valueArr[i + 1]);
            display.textContent = result;   

        }else if(opArray[i] === '*'  && opArray[i+1] !== '-'){
            result = result * parseFloat(valueArr[i + 1]);
            display.textContent = result; 

        }else if(opArray[i] === '*'  && opArray[i+1] === '-'){
            result = result * parseFloat(valueArr[i + 1]);
            display.textContent = result; 

        }else if(opArray[i] === '-' && opArray[i+1] !== '-'){
            result = result - parseFloat(valueArr[i + 1]);
            display.textContent = result; 

        }else if(opArray[i] === '-' && opArray[i+1] === '-'){
            result = result + parseFloat(valueArr[i + 1]);
            display.textContent = result; 

        }else if(opArray[i] === '/'  && opArray[i+1] !== '-'){
            result = result / parseFloat(valueArr[i + 1]);
            display.textContent = result; 
        }else if(opArray[i] === '/'  && opArray[i+1] === '-'){
            result = result / (parseFloat(valueArr[i + 1]) * -1);
            display.textContent = result; 
        }

    }



    //console.log(valueArr);
    //console.log(opArray);
   // console.log(str);
   // console.log(arr[0]);
    //console.log(arr[1]);
    /*
    switch (operator) {
        case '+':
           // result = add(arr[0], arr[1]);
            //console.log(result)
            break;
        case '-':
            //result = subtract(first, last);
            
            break;
        case '*':
            //result = multiply(first, last);
            
            break;
        case '/':
            //result = divide(first, last);
            
            break;
        default:
            break;
    }*/
    current = '';
}
