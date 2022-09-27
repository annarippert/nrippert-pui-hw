/*
UPDATING THE DETAILS PAGE
file split into x parts
1: roll data 
2: getting query string from the URL
3: update the contents on the page with the right names/prices
4: updating the price of cart from hw3 
5: 

*/


//data given to us on canvas
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


/* ------------------------------------------------------------------------- */

// Now, we will use the URL parameter to update our page.

// Update the header text
let headerElement = document.querySelector('.heading');
headerElement.innerText = chosenRoll + " Cinnamon Roll";

// Update the image
const rollImage = document.querySelector('.product-detail-image');
rollImage.src = './assets/' + rolls[chosenRoll].imageFile;
//console.log("img: " + rollImage.textContent);

// Update the base price
const rollBase = document.querySelector('#product-detail-price');
//console.log("base: " + rollBase.textContent);
rollBase.innerText = rolls[chosenRoll].basePrice;
//console.log("price: " + chosenRoll.basePrice);


// -----------------------------Cart Price----------------------
//object for glazing
let glazing = {
    original: 0,
    sugarMilk: 0,
    vanillaMilk: 0.50,
    doubleChocolate: 1.50
}

//object for pack size
let packSize ={
    one: 1,
    three: 3,
    six:5,
    twelve: 10
}

//set the defaults
let thisGlazingPrice = glazing.original;
let glazingSelection = "Keep-original";
let packSizeSelection = 1;
let thisPackSizePrice = packSize.one;
//find the price we want to be changing
let basePrice = rolls[chosenRoll].basePrice;
//make sure the price is a float
basePrice = parseFloat(basePrice);


//function to help see what the corresponding price is for the glazing
function glazingChange(element) {
    // get value of selected glazing option
    glazingSelection = element.value;
    //if statements to get the price adaption
    if (glazingSelection=="Sugar-milk") {
        thisGlazingPrice = glazing.sugarMilk;
    }
    else if (glazingSelection=="Double-chocolate"){
        thisGlazingPrice = glazing.doubleChocolate;
    }
    else if (glazingSelection=="Keep-original"){
        thisGlazingPrice = glazing.original;
    }
    else if (glazingSelection=="Vanilla-milk"){
        thisGlazingPrice = glazing.vanillaMilk;
    }
    //call the compute total to compute the new price with the new selected options
    computeTotal();
    return thisGlazingPrice;
  }

//function to help see what the corresponding price is for the pack size
function packSizeChange(element) {
    //get the current selected option
    packSizeSelection = element.value;
    //if statements to get the price adaption
    if (packSizeSelection == 1) {
        thisPackSizePrice = packSize.one;
    }
    else if(packSizeSelection == 3){
        thisPackSizePrice = packSize.three;
    }
    else if(packSizeSelection == 6){
        thisPackSizePrice = packSize.six;
    }
    else if(packSizeSelection == 12){
        thisPackSizePrice = packSize.twelve;
    }
    //call the compute total to compute the new price with the new selected options
    computeTotal();
    return thisPackSizePrice;
}

//computes the total price using the glazing price, the pack size and the base price
function computeTotal(){
    basePrice = parseFloat(basePrice);
    let updatedPrice = (basePrice+thisGlazingPrice)*thisPackSizePrice;
    //change the text to the updated price
    document.getElementById("product-detail-price").innerHTML = updatedPrice.toFixed(2);
}

//-------------------------------
//initiate an empty cart
let cart = [];

//class to help build our rolls
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//function is called when the user clicks the "Add to Cart" button
//Creates a new instance of Roll using the selections the user picked
function addToCart(){
    let theRoll = new Roll(chosenRoll, glazingSelection, packSizeSelection, basePrice); 
    cart.push(theRoll);
    printCartItems();
}

//function prints out all rolls in the cart
function printCartItems(){
    console.log("Items in the cart: ")
    for (let i = 0; i < cart.length; i++){
        console.log(cart[i]);
    }
}



