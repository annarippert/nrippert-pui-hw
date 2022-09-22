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
let thisPackSizePrice = packSize.one;
//find the price we want to be changing
let basePrice = document.getElementById("product-detail-price").innerHTML;
//make sure the price is a float
basePrice = parseFloat(basePrice);

function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    //if statements to get the price adaption
    if (priceChange=="Sugar-milk") {
        thisGlazingPrice = glazing.sugarMilk;
    }
    else if (priceChange=="Double-chocolate"){
        thisGlazingPrice = glazing.doubleChocolate;
    }
    else if (priceChange=="Keep-original"){
        thisGlazingPrice = glazing.original;
    }
    else if (priceChange=="Vanilla-milk"){
        thisGlazingPrice = glazing.vanillaMilk;
    }
    //call the compute total to compute the new price with the new selected options
    computeTotal();
    return thisGlazingPrice;
  }

function packSizeChange(element) {
    //get the current selected option
    const packSizeChange = element.value;
    //if statements to get the price adaption
    if (packSizeChange == 1) {
        thisPackSizePrice = packSize.one;
    }
    else if(packSizeChange == 3){
        thisPackSizePrice = packSize.three;
    }
    else if(packSizeChange == 6){
        thisPackSizePrice = packSize.six;
    }
    else if(packSizeChange == 12){
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
  