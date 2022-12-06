// as the user scrolls, the progress bar moves to indicate the position on the page
window.onscroll = function() {progressBar()};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

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