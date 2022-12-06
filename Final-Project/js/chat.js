//creating a variabel to keep track of the chat status, if its open or not
let isClosed = true;

//function that shows the form box
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

//fucntion that hides the form box
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//this function is called within the html and checks the isClosed variable
//depending on that variable, it will either open or close the form
function chatForm() {
    if(isClosed){
        openForm();
    }
    else closeForm();
    isClosed = !isClosed;
}