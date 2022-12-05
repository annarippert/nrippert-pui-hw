function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// inspired by https://scrollrevealjs.org/guide/user-experience.html
// using JS library ScrollReveal 

ScrollReveal({ reset: true });
//adding each item I want to put a reveal on 
ScrollReveal().reveal('#cards_items')
ScrollReveal().reveal('.project-problem', { delay: 500 })
ScrollReveal().reveal('.project-research', { delay: 500 })
ScrollReveal().reveal('.project-findings-container', { delay: 500 })
ScrollReveal().reveal('.project-solution', { delay: 500 })
ScrollReveal().reveal('.project-other', { delay: 500 })
ScrollReveal().reveal('.about_table', { delay: 500 })
