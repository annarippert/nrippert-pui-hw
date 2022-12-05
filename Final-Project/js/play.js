// inspired by https://www.w3schools.com/howto/howto_js_tabs.asp
tabcontent = document.getElementsByClassName("tabcontent");
tabcontent[0].style.display = "block";
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