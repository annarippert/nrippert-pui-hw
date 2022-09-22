// class Roll{
//     constructor(name, price, imageURL, elementID){
//         this.name = name;
//         this.price = price;
//         this.imageURL = imageURL;
//         this.element = document.querySelector(elementID);
//         this.updateElement();
//     }

//     updateElement(){
//         const rollTitle = this.element.querySelector('.heading')
//         const rollPrice = this.element.querySelector('#product-detail-price');
//         const rollImage = this.element.querySelector('#product-detail-price');
//         rollTitle.innerText = this.name;
//         rollPrice.innerText = this.price;
//         rollImage.src = this.imageURL;
//     }
// }

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};


// taken from URL Params Lab code
//First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;


// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);


// Finally, we can access the parameter we want using the "get" method:
const chosenRoll = params.get('roll')

console.log(chosenRoll);
console.log("chosenRoll: " + chosenRoll.basePrice);
// console.log("here: " + rolls.chosenRoll.basePrice);
// console.log("img: " + chosenRoll.imageFile);

/* ------------------------------------------------------------------------- */

// Now, we will use the URL parameter to update our page.

// Update the header text
let headerElement = document.querySelector('.heading');
headerElement.innerText = chosenRoll + " Cinnamon Roll";

// Update the image
const rollImage = document.querySelector('.product-detail-image');
//rollImage.src = './assets/' + chosenRoll.imageFile;
//console.log("img: " + rollImage.textContent);

// Update the base price
const rollBase = document.querySelector('#product-detail-price');
//console.log("base: " + rollBase.textContent);
rollBase.innerText = chosenRoll.basePrice;
//console.log("price: " + chosenRoll.basePrice);