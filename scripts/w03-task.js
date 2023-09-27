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
function subtract(number1, number2){
    const difference = number1 - number2;
    return difference;
}

function subtractNumbers(){
    const subractNumber1 = Number(document.querySelector("#sub1").value);
    const subtractNumber2 = Number(document.querySelector("#sub2").value);
    const difference = subtract(subractNumber1 - subtractNumber2);
    document.querySelector("#difference").value = difference;
}
document.querySelector("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
multiply = (factor1, factor2) => factor1 * factor2

multiplyNumbers = () => {

    const multiplyNumbers1 = Number(document.querySelector("#mult1").value);
    const multiplyNumbers2 = Number(document.querySelector("#mult1").value);
    const product = multiply(multiplyNumbers1 * multiplyNumbers2);
    document.querySelector("#product").value = product;
}
document.querySelector("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
