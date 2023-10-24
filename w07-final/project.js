
var maybellineElement = document.getElementById("maybelline");
var maybellineList =[];


var displayMaybelline = (maybelline) => {

   /*var sorted = maybelline.sort((price1, price2) =>{
        if (price1.price > price2.price)
            return 1
        else if (price1.price < price2.price)
            return -1
        else
            return 0
    });

    sorted.forEach(price)*/


    maybelline.forEach(one => {
        let article = document.createElement("article");
        let mname = document.createElement("h3");
        mname.textContent = one.name;

        let price = document.createElement("h4");
        price.textContent = one.price;

        let img = document.createElement("img");
        img.setAttribute("src", one.api_featured_image);
        img.setAttribute("alt", `Description: ${one.description}`);
    

        article.appendChild(mname);
        article.appendChild(img);
        article.appendChild(price);
    
      

        maybellineElement.appendChild(article);



    });
}
var getMaybelline = async () => {
    const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
     maybellineList = await response.json();
 };

 getMaybelline();
 /* reset Function */
 var reset = () => {
    maybellineElement.innerHTML = "";
 };


 var sortBy = (maybelline) => {
    reset();
    switch(document.getElementById("sortBy").value){
        case "bronzer":
            displayMaybelline(maybelline.filter(one => one.product_type.includes("bronzer")));
            break;
        case "lip":
            displayMaybelline(maybelline.filter(one => one.product_type.includes("lip")));
            break;
        case "foundation":
            displayMaybelline(maybelline.filter(one => one.product_type.includes("foundation")));
            break;
        case "blush":
            displayMaybelline(maybelline.filter(one => one.product_type.includes("blush")));
            break;
        case "mascara":
            displayMaybelline(maybelline.filter(one => one.product_type.includes("mascara")));
            break;
        case "eyeliner":
            displayMaybelline(maybelline.filter(one => one.product_type.includes("eyeliner")));
            break;
        case "pricerange":
            displayMaybelline(maybelline.sort((price1, price2) => {
                if (price2.price > price1.price)
                    return -1
                else if (price2.price < price1.price)
                    return 1
                else
                    return 0
        }));
            break;
 };
};
getMaybelline();

document.getElementById("sortBy").addEventListener("change", () => { sortBy(maybellineList) });
getMaybelline();

