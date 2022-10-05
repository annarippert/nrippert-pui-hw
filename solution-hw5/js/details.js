/*
UPDATING THE DETAILS PAGE HOMEWORK 4

/* -------------------- getting query string from the URL------------- */
// taken from URL Params Lab code
//First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

// Finally, we can access the parameter we want using the "get" method:
const chosenRoll = params.get('roll')


/* ---------------------------Update Page elements------------------------ */
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


/* --------------------------Cart Prices (same as hw3)------------------------ */
//object for glazingObj
let glazingObj = {
    original: 0,
    sugarMilk: 0,
    vanillaMilk: 0.50,
    doubleChocolate: 1.50
}

//object for pack size
let packSize ={
    one: 1,
    three: 3,
    six: 5,
    twelve: 10
}

//set the defaults
let thisglazingObjPrice = glazingObj.original;
let glazingObjSelection = "Keep-original";
let packSizeSelection = 1;
let thisPackSizePrice = packSize.one;
//find the price we want to be changing
let basePrice = rolls[chosenRoll].basePrice;
//make sure the price is a float
basePrice = parseFloat(basePrice);


//function to help see what the corresponding price is for the glazingObj
function glazingObjChange(element) {
    // get value of selected glazingObj option
    glazingObjSelection = element.value;
    //if statements to get the price adaption
    if (glazingObjSelection == "Sugar milk") {
        thisglazingObjPrice = glazingObj.sugarMilk;
    }
    else if (glazingObjSelection == "Double chocolate"){
        thisglazingObjPrice = glazingObj.doubleChocolate;
    }
    else if (glazingObjSelection == "Original"){
        thisglazingObjPrice = glazingObj.original;
    }
    else if (glazingObjSelection == "Vanilla milk"){
        thisglazingObjPrice = glazingObj.vanillaMilk;
    }
    //call the compute total to compute the new price with the new selected options
    computeTotal();
    return thisglazingObjPrice;
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

//computes the total price using the glazingObj price, the pack size and the base price
function computeTotal(){
    basePrice = parseFloat(basePrice);
    let updatedPrice = (basePrice + thisglazingObjPrice) * thisPackSizePrice;
    //change the text to the updated price
    document.getElementById("product-detail-price").innerHTML = updatedPrice.toFixed(2);

}

//function is called when the user clicks the "Add to Cart" button
//Creates a new instance of Roll using the selections the user picked
function addToCart(){
    // let totalPrice = (basePrice + thisglazingObjPrice) * thisPackSizePrice
     let theRoll = new Roll(chosenRoll, glazingObjSelection, packSizeSelection, basePrice); 
     cart.push(theRoll);
     //print out the items in the cart
     console.log(cart);
     return theRoll;
 }



