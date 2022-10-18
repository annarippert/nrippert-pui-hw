
// taken from URL Params Lab code
//First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")

const queryString = window.location.search;

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

// Finally, we can access the parameter we want using the "get" method:
const chosenRoll = params.get('roll');


// if we are on the details page, we want to change some texts
if ( document.URL.includes("details.html") ) {
        
    let headerElement = document.querySelector('.heading');
    headerElement.innerText = chosenRoll + " Cinnamon Roll";

    // Update the image
    const rollImage = document.querySelector('.product-detail-image');
    rollImage.src = './assets/' + rolls[chosenRoll].imageFile;

    // Update the base price
    const rollBase = document.querySelector('#product-detail-price');
    rollBase.innerText = rolls[chosenRoll].basePrice;
}

// object for glazing
let glazingObj = {
    original: 0,
    sugarMilk: 0,
    vanillaMilk: 0.50,
    doubleChocolate: 1.50
};

// object for pack size
let packSize ={
    one: 1,
    three: 3,
    six: 5,
    twelve: 10
};


// class to help build out the rolls
class Roll {
    constructor(rollType, rollGlazing, glazingAdaption, packSize, packAdaption, basePrice, image, totalPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.glazingAdaption = glazingAdaption;
        this.size = packSize;
        this.packAdaption = packAdaption;
        this.basePrice = basePrice;
        this.image = image;
        this.totalPrice = totalPrice;
        this.element = null;
    }
}

// initiate an empty cart array
let cart = [];

// if there are stored rolls then we want to get them from our storage
if (localStorage.getItem('storedRolls') != null) {
    retrieveFromLocalStorage();
}

// lets us access our cart by using JSON and localStorage
function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedRolls');
    // console.log(cartArrayString);
    const cartArray = JSON.parse(cartArrayString);
    for (const rollData of cartArray) {
        cart.push(rollData);
    }
    console.log(localStorage.getItem('storedRolls'));
}

//set the defaults
let thisglazingObjPrice = glazingObj.original;
let glazingObjSelection = "Keep-original";
let packSizeSelection = 1;
let thisPackSizePrice = packSize.one;



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

function computeTotal(){
    let basePrice = rolls[chosenRoll].basePrice;
    //make sure the price is a float
    basePrice = parseFloat(basePrice);
    newBasePrice = basePrice;
    let updatedPrice = (newBasePrice + thisglazingObjPrice) * thisPackSizePrice;
    //change the text to the updated price
    document.getElementById("product-detail-price").innerHTML = updatedPrice.toFixed(2);

}
//rollType, rollGlazing, glazingAdaption, packSize, packAdaption, basePrice, image, totalPrice) {
function addToCart(){
    let basePrice = rolls[chosenRoll].basePrice;
    //make sure the price is a float
    basePrice = parseFloat(basePrice);

    let totalPrice = (basePrice + thisglazingObjPrice) * thisPackSizePrice;
    let rollImage = './assets/' + rolls[chosenRoll].imageFile;
    let theRoll = new Roll(chosenRoll, glazingObjSelection, thisglazingObjPrice, packSizeSelection, thisPackSizePrice, basePrice, rollImage, totalPrice); 
    cart.push(theRoll);
    saveToLocalStorage();
    return theRoll;
}

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart);
    console.log(cartArrayString);
    localStorage.setItem('storedRolls', cartArrayString);
}
