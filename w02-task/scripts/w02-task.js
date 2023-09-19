/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Brooke Cleverly";
let currentYear = date();
let profilePicture = "images/zoo.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementsByName(profilePicture);

/* Step 4 - Adding Content */
nameElement .innerHTML = `<strong>${fullName}</strong>`;
yearElement .textContent = `<strong>${currentYear}</{strong>}`;
imageElement .setAttribute("src", profilePicture); 
imageElement .setAttribute("alt", `Profile image of ${fullName}`);




/* Step 5 - Array */
const food = [tomatoes, ice-cream, waffles, salsa, salad, brownie]
document.getElementById("food").innerHTML = food.toString();
food.push("grape");
foodElement.innerHTML += `<br>${food}`;
food.pop(0);
foodElement.innerHTML += `<br>${food}`;
food.pop();
foodElement.innerHTML += `<br>${food}`;




