let isClosed = true;

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function chatForm() {
    if(isClosed){
        openForm();
    }
    else closeForm();
    isClosed = !isClosed;
}