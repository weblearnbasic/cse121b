/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    const sum = number1 + number2;
    return sum;
}

function addNumbers(){
    const addnumber1 = Number(document.querySelector("#add1").value);
    const addnumber2 = Number(document.querySelector("#add2").value);
    const sum = add(addnumber1, addnumber2);
    document.querySelector("#sum").value = sum;
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2){
    const difference = subtract1 - subtract2;
    return difference;
}

function subtractNumbers(){
    const number1 = Number(document.querySelector("#subtract1").value);
    const number2 = Number(document.querySelector("#subtract2").value);
    const difference = subtract(number1, number2);
    document.querySelector("#difference").value = difference;
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
multiply = (factor1, factor2) => factor1 * factor2

multiplyNumbers = () => {

    const multiplyNumbers1 = Number(document.querySelector("#factor1").value);
    const multiplyNumbers2 = Number(document.querySelector("#factor2").value);
    const product = multiply(multiplyNumbers1, multiplyNumbers2);
    document.querySelector("#product").value = product;
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
divide = (dividend, divisor) => dividend/divisor

divideNumbers = () => {

    const divideNumbers1 = Number(document.getElementById("dividend").value);
    const divideNumbers2 = Number(document.getElementById("divisor").value);
    const quotient = divide(divideNumbers1, divideNumbers2);
    document.getElementById("quotient").value = quotient;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let current_date = new Date();
let current_Year = "";
current_Year = current_date.getFullYear();
document.getElementById("year").textContent = current_Year;

//document.getElementById("year").textContent = newDate().getFullYear();
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").value = numbers
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbers.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbers.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
sum_array = numbers.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").innerHTML = sum_array; 
/* Output Multiplied by 2 Array */
let times_2 = numbers.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = times_2;
/* Output Sum of Multiplied by 2 Array */
let product = times_2.reduce((sum, number) => sum + number);
document.querySelector("#sumOfMultiplied").innerHTML = product;