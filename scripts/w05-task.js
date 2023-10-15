/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templelist = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

temples.forEach(temple => {
    let article = document.createElement("article");
    let templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.location);
    
    article.appendChild(templeName);
    article.appendChild(img);
    
    templesElement.appendChild(article); 
});
}


/* async getTemples Function using fetch()*/
//const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
//let results = null;
//async function getTemples(url => {
    //const response = await fetch(url);
//})
const getTemples = async () => {
   const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templelist = await response.json();
    //displayTemples(templelist);
};

getTemples();
/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};

/* sortBy Function */


/*function sortBy() {
    reset();
    const sortBy = templelist.sort(compare);
    console.log("temples", sortBy);
    outputTemples(sortBy);
}

const sortBy = (temple) => {
    reset();
    switch(document.getElementById("sortBy").value){
        case "utah":
        if(temple.location === "Utah")
            return displayTemples("Utah");
        break;
        case"notutah":
        else if(temple.location !== "Utah")
            return displayTemples("notutah");
        else if(temple.dedication <= (1950,0,1))
            return displayTemples("older");
        else
            return displayTemples("all")
        
    };
 




}; */
const sortBy = (temples) => {
    reset();
    var startDate = "1950-01-01"

    switch(document.getElementById("sortBy").value){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => temple.dedication.reduce(new Date(1950,1,0))));
            break;
        case "all":
           displayTemples(temples);
           break;
    };
   
};


getTemples(); 

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => { sortBy(templelist) });
getTemples();