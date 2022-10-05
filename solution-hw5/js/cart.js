/* -------------------------------Create and add to Cart------------------------------- */
//class to help build our rolls
let glazingTest = {
    original: 0,
    sugarMilk: 0,
    vanillaMilk: 0.50,
    doubleChocolate: 1.50
}

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

function computeTotalRollPrice(basePrice, packSize, glazing){
    return (basePrice + glazing) * packSize;
}

//initiate an empty cart array
let cart = [];

//creating four new rolls
let originalRoll = new Roll("Original", "Sugar Milk", 1, rolls["Original"].basePrice)
let walnutRoll = new Roll("Walnut", "Vanilla Milk", 12, rolls["Walnut"].basePrice)
let raisinRoll = new Roll("Raisin", "Sugar Milk", 3, rolls["Raisin"].basePrice)
let appleRoll = new Roll("Apple", "Original", 3, rolls["Apple"].basePrice)
cart.push(originalRoll);
cart.push(walnutRoll);
cart.push(raisinRoll);
cart.push(appleRoll);



function createElement(roll){
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.roll');

    const btnRemove = roll.element.querySelector('.remove');
    btnRemove.addEventListener('click', () => {
        deleteRoll(roll);
      });
      
    // add the roll clone to the DOM
    // find the roll parent (#roll-list) and add our roll as its child
    const rollListElement = document.querySelector('#roll-list');
    rollListElement.prepend(roll.element); 

    // populate the roll clone with the actual roll content
    updateElement(roll);
}



let allRollsPrice = document.querySelector('#total-roll-price');

function updateElement(roll) {
    const rollImageElement = document.querySelector('.cart-product-images');
    rollImageElement.src = './assets/' + rolls[roll.type].imageFile;

    const rollTitleElement = document.querySelector('#title-roll-name');
    rollTitleElement.innerText = roll.type + " Cinnamon Roll";

    const rollGlazingElement = document.querySelector('#glazing-name');
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;

    const rollPackElement = document.querySelector('#pack-size-name');
    rollPackElement.innerText = "Pack Size: " + roll.size;

    const rollPriceElement = document.querySelector('#singular-roll-price');
    //computing price adaptions and adding price to it
    
    let glazingNameSpaceRemoved = roll.glazing.replace(" ", "");
    let glazingLowerCasedFirstLetter = glazingNameSpaceRemoved[0].toLowerCase()+glazingNameSpaceRemoved.slice(1);
    let glazingPriceAdaption = glazingTest[glazingLowerCasedFirstLetter];
    let rollTotal = computeTotalRollPrice(roll.basePrice, roll.size, glazingPriceAdaption);

    rollPriceElement.innerText = "$ " + rollTotal;

    //for total;
    
    var onlyDigitsTotal= allRollsPrice.innerText.replace("$ ", "");
    let total = (parseFloat(onlyDigitsTotal) + rollTotal).toFixed(2);;
    allRollsPrice.innerText= "$ " + total;
    console.log("roll total: " + rollTotal + " cart total: " + onlyDigitsTotal + " together: " + total);

}

function deleteRoll(roll) {
    // remove the roll DOM object from the UI
    roll.element.remove();
    // remove the actual roll object from our set of notecards
    cart.pop(roll);
    // update total price
    
     let onlyDigits = allRollsPrice.replace("$ ", "");
     let newTotal = parseInt(onlyDigits) - parseInt(roll.totalPrice); 
    // totalPrice.innerText = "$ " + newTotal
  }

for (let i=0; i<cart.length; i++) {
    createElement(cart[i]);
  }
