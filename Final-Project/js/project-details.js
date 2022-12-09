//---------------PROGRESS BAR--------------------
// as the user scrolls, the progress bar moves to indicate the position on the page
window.onscroll = function() {progressBar()};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//---------------JS LIBRARY SCROLL REVEAL--------------------
// inspired by https://scrollrevealjs.org/guide/user-experience.html
// using JS library ScrollReveal 

ScrollReveal({ reset: true });
//adding each item I want to put a reveal on, aka all major sections in the project detail page
ScrollReveal().reveal('.project-problem', { delay: 500 })
ScrollReveal().reveal('.project-research', { delay: 500 })
ScrollReveal().reveal('.project-findings-container', { delay: 500 })
ScrollReveal().reveal('.project-solution', { delay: 500 })
ScrollReveal().reveal('.project-other', { delay: 500 })
ScrollReveal().reveal('.about_table', { delay: 500 })


//---------------SCROLL TO TOP FUNCTION--------------------
//inspired by https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// first call the button
let goToTop = document.getElementById("backUpbutton");

// button shows when user scrolls down
window.onscroll = function() {ScrollToTop()};

// functuon that checks where the user is with the scroll
function ScrollToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTop.style.display = "block";
  } else {
    goToTop.style.display = "none";
  }
}

// if the button is clicked, they will be redirected to the top
function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}