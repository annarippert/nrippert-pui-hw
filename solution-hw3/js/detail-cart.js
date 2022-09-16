let glazing = {
    original: 0,
    sugarMilk: 0,
    vanillaMilk: 0.50,
    doubleChocolate: 1.50
}

let packSize ={
    one: 1,
    three: 3,
    six:5,
    twelve: 10
}

let thisGlazingPrice = glazing.original;
let thisPackSizePrice = packSize.one;

function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    console.log(priceChange);
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
    return thisGlazingPrice;
  }

function packSizeChange(element) {
    const packSizeChange = element.value;
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
    return thisPackSizePrice;
}

 
function computeTotal(){
    console.log("here");
    let basePrice = document.getElementById("inline").innerHTML;
    basePrice = parseFloat(basePrice);
    thisGlazingPrice = parseFloat(thisGlazingPrice);
    thisPackSizePrice = parseFloat(thisPackSizePrice);

    let updatedPrice = (basePrice+thisGlazingPrice)*thisPackSizePrice;
    console.log("updated: " + updatedPrice);
    console.log("pack size price: "+ thisPackSizePrice);
    console.log("glazing price: "+ thisGlazingPrice);
    console.log("base price: " + basePrice);
    document.getElementById("inline").innerHTML = updatedPrice.toFixed(2);
    return updatedPrice;
  }
  