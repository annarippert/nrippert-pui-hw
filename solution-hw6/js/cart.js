/* -------------------------homework 5 - cart page------------------------------- */
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
// variable to help select the total price for easy access
let allRollsPrice = document.querySelector('#total-roll-price');


// inspired by lab work 
// updates individual roll elements with the correct roll info
function updateElement(roll) {
    // image
    const rollImageElement = roll.element.querySelector('.cart-product-images');
    rollImageElement.src = roll.image;

    // roll name
    const rollTitleElement = roll.element.querySelector('#title-roll-name');
    rollTitleElement.innerText = roll.type + " Cinnamon Roll";

    // glazing
    const rollGlazingElement = roll.element.querySelector('#glazing-name');
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;

    // pack size
    const rollPackElement = roll.element.querySelector('#pack-size-name');
    rollPackElement.innerText = "Pack Size: " + roll.size;

    // roll price
    const rollPriceElement = document.querySelector('#singular-roll-price');
    
    // final roll price 

    rollPriceElement.innerText = "$ " + roll.totalPrice.toFixed(2);

    // add the rolls price to the current total price
    var onlyDigitsTotal= allRollsPrice.innerText.replace("$ ", "");
    let totalComputation = parseFloat(onlyDigitsTotal) + parseFloat(roll.totalPrice);
    let total = totalComputation.toFixed(2);
    allRollsPrice.innerText= "$ " + total;
}

// inspired by lab
function deleteRoll(roll) {
    // remove the roll DOM object from the UI
    roll.element.remove();
    // Got help from https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    const rollIndex = cart.indexOf(roll);
    if(rollIndex >-1){
        cart.splice(rollIndex, 1);
    }
    // remove the actual roll object from our set of rolls
    // update the total price
     let onlyDigits = allRollsPrice.innerText.replace("$ ", "");
     let newTotal = (parseFloat(onlyDigits) - parseFloat(roll.totalPrice)).toFixed(2);
     allRollsPrice.innerText = "$ " + newTotal;

     // want to save the cart 
     saveToLocalStorage();
  }

// finally call the createElement function for each roll in our cart
for (let i=0; i<cart.length; i++) {
    createElement(cart[i]);
}
