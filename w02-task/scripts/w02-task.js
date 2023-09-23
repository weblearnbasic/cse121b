/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Brooke Cleverly";
let currentYear = new Date().getFullYear();
let profilePicture = "images/zoo.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementsByTagName("img")[0];

/* Step 4 - Adding Content */
nameElement .innerHTML = `<strong>${fullName}</strong>`;
yearElement .textContent = currentYear;
imageElement .setAttribute("src", profilePicture);
imageElement .setAttribute("alt", `Profile image of ${fullName}`)



/* Step 5 - Array */
const favFood = ["tomatoes", "icecream", "waffles", "salsa", "salad", "brownie"];
document.getElementById("food").innerHTML = favFood.toString();
favFood.push("grape");
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;




