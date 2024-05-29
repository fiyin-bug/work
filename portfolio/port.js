let menuIcon=document.querySelector('.menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec=> {
let top=window.scrollY;
let offset=sec.offsetTop- 150;
let height=sec.offsetHeight;
let id=sec.getAttribute('id');

if(top >= offset &&top<offset + height) {
    navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a')
    //     [href*=' +id + ']').classList.add('active')
   })
}
    })
}
menuIcon.onclick=() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle(`active`);
}

// Get the body element
const body = document.body;

// Add an event listener for the scroll event
body.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // If the user is scrolling down
  if (scrollPosition > 0) {
    // Add a class to the body element to enable smooth scrolling
    body.classList.add("smooth-scrolling");
  } else {
    // Remove the class to disable smooth scrolling
    body.classList.remove("smooth-scrolling");
  }
});

// Add a CSS style rule to enable smooth scrolling
const style = document.createElement("style");
style.innerHTML = `
  .smooth-scrolling {
    scroll-behavior: smooth;
  }
`;
document.head.appendChild(style);