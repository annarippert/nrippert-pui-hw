// inspired by https://www.w3schools.com/howto/howto_js_tabs.asp
//keeping this outside of function so that content is always displayed and is not blank
tabcontent = document.getElementsByClassName("tabcontent");
tabcontent[0].style.display = "block";

//function will see what tab has been clicked and make sure the correct associated content is shown
function openOption(evt, option) {
    var i, tablinks;
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(option).style.display = "block";
    evt.currentTarget.className += " active";
}