/* -------------------------homework 5 - cart page------------------------------- */

// Roll class with constructor to help create rolls
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice, totalPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.totalPrice = totalPrice;
        this.element = null;
    }
}

// helper function to help compute individial roll price
function computeTotalRollPrice(basePrice, packSize, glazing){
    return ((basePrice + glazing) * packSize).toFixed(2);
}

// // initiate an empty cart array
// let cart = [];

// creating four new rolls
let originalRoll = new Roll("Original", "Sugar Milk", "one", rolls["Original"].basePrice);
let walnutRoll = new Roll("Walnut", "Vanilla Milk", "twelve", rolls["Walnut"].basePrice);
let raisinRoll = new Roll("Raisin", "Sugar Milk", "three", rolls["Raisin"].basePrice);
let appleRoll = new Roll("Apple", "Original", "three", rolls["Apple"].basePrice);

//add each roll to the cart
cart.push(originalRoll);
cart.push(walnutRoll);
cart.push(raisinRoll);
cart.push(appleRoll);


// inspired by lab work 
// uses templete to help create a roll
function createElement(roll){
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.roll');

    // remove button will call deleterRoll function to delete the roll
    const btnRemove = roll.element.querySelector('.remove');
    btnRemove.addEventListener('click', () => {
        deleteRoll(roll);
      });
      
    // add the roll clone to the DOM
    // find the roll parent (#roll-list) and add the roll as its child
    const rollListElement = document.querySelector('#roll-list');
    rollListElement.prepend(roll.element); 

    // populate the roll clone with the actual roll content
    updateElement(roll);
}

// object to help figure out pricing to build the rolls
let glazingPricing= {
    original: 0,
    sugarMilk: 0,
    vanillaMilk: 0.50,
    doubleChocolate: 1.50
};

    //object for pack size
let packSizePricing ={
    one: 1,
    three: 3,
    six: 5,
    twelve: 10
}

// variable to help select the total price for easy access
let allRollsPrice = document.querySelector('#total-roll-price');


// inspired by lab work 
// updates individual roll elements with the correct roll info
function updateElement(roll) {
    // image
    const rollImageElement = document.querySelector('.cart-product-images');
    rollImageElement.src = './assets/' + rolls[roll.type].imageFile;

    // roll name
    const rollTitleElement = document.querySelector('#title-roll-name');
    rollTitleElement.innerText = roll.type + " Cinnamon Roll";

    // glazing
    const rollGlazingElement = document.querySelector('#glazing-name');
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;

    // pack size
    const rollPackElement = document.querySelector('#pack-size-name');
    rollPackElement.innerText = "Pack Size: " + roll.size;

    // roll price
    const rollPriceElement = document.querySelector('#singular-roll-price');
    
    // computing price adaptions based on glazing and pack size
    let glazingNameSpaceRemoved = roll.glazing.replace(" ", "");
    let glazingLowerCasedFirstLetter = glazingNameSpaceRemoved[0].toLowerCase()+glazingNameSpaceRemoved.slice(1);
    let glazingPriceAdaption = glazingPricing[glazingLowerCasedFirstLetter];
    let rollTotal = computeTotalRollPrice(roll.basePrice, packSizePricing[roll.size], glazingPriceAdaption);
    // setting the rolls total price 
    roll.totalPrice = parseFloat(rollTotal).toFixed(2);
    rollPriceElement.innerText = "$ " + rollTotal;

    // add the rolls price to the current total price
    var onlyDigitsTotal= allRollsPrice.innerText.replace("$ ", "");
    let totalComputation = parseFloat(onlyDigitsTotal) + parseFloat(rollTotal);
    let total = totalComputation.toFixed(2);
    allRollsPrice.innerText= "$ " + total;

}

// inspired by lab
function deleteRoll(roll) {
    // remove the roll DOM object from the UI
    roll.element.remove();
    // remove the actual roll object from our set of rolls
    cart.pop(roll);
    // update the total price
     let onlyDigits = allRollsPrice.innerText.replace("$ ", "");
     let newTotal = (parseFloat(onlyDigits) - parseFloat(roll.totalPrice)).toFixed(2);
     allRollsPrice.innerText = "$ " + newTotal;
  }


// finally call the createElement function for each roll in our cart
for (let i=0; i<cart.length; i++) {
    createElement(cart[i]);
}


//--------------------HOMEWORK 6 --------------------------------

function addRollToCart(type, glazing, packSize, basePrice, totalPrice){
    const roll = new Roll(type, glazing, packSize, basePrice, totalPrice);
    cart.add(roll);
    return roll;
}

function submitRoll(){
    const rollTitleElement = document.querySelector('#title-roll-name');
    const editRollTitle = rollTitleElement.value;

    const rollGlazingElement = document.querySelector('#glazing-name');
    const editGlazingText = rollGlazingElement.value;

    const packSizeElement =  document.querySelector('#pack-size-name');
    const editPackText = packSizeElement.value;

    const rollPriceElement = document.querySelector('#singular-roll-price');
    const editRollText = rollPriceElement.value;


    const totalPriceElement = document.querySelector('#total-roll-price');
    const editTotalText = totalPriceElement.value;

    console.log("submitted");
    saveToLocalStorage();
}

function saveToLocalStorage() {
   // const rollArray = Array.from(notecardSet);
    console.log(cart);
  
    const cartArrayString = JSON.stringify(cart);
    console.log(cartArrayString);
  
    localStorage.setItem('storedRolls', cartArrayString);
}

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedRolls');
    const cartArray = JSON.parse(cartArrayString);
    for (const rollData of cartArray) {
      const roll = addRollToCart(rollData.rollType, roll.glazing, roll.size, roll.basePrice, roll.totalPrice);
      createElement(roll);
    }
  }

if (localStorage.getItem('storedRolls') != null) {
    retrieveFromLocalStorage();
  }
else{
      cart=[];
  }
