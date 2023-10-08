/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Brooke",
    photo: "images/zoo.png",
    favoriteFoods: ["Burritos", "Chocolate Cake", "Icecream", "Pizza", "Loaded-Nachos"],
    hobbies: ["Singing", "Playing Piano", "Running", "Exercise", "Baking"],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Rexburg, Idaho",
        length: "6 months"
    }
);
myProfile.placesLived.push(
    {
        place: "Casper, Wyoming",
        length: "22 years"
    }
);


/* DOM Manipulation - Output */
document.getElementById("name").textContent = myProfile.name;
const photo = document.getElementById("photo");
photo.setAttribute("src", myProfile.photo);
photo.setAttribute("alt", `Profile image of ${myProfile.name}`);


myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})
myProfile.placesLived.forEach(placelived => {
    let dt = document.createElement("dt");
    dt.textContent = placelived.place
    let dd = document.createElement("dd");
    dd.textContent = placelived.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
