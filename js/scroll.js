var isScrollingDown = true;

let nav = document.getElementById("navigation");

//set default distance
let initialScroll = 500;
var lastScroll;
var currentScroll;

// hide navigation when user scrolls down, shows up, when user scrolls up
window.addEventListener("scroll", function (e) {
  currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > initialScroll) {
    // navigation disappears
    nav.style.transform = "translate(0, -100px)";
    nav.style.transition = "transform 1s";
  }

  var fullHeight = window.innerHeight + window.scrollY;

  if (currentScroll < lastScroll || fullHeight >= document.body.offsetHeight - 10) {
    // set default layout
    nav.style.transform = "translate(0,0)";
    nav.style.transition = "transform 0.5s";
  }

  //save last y-position
  lastScroll = currentScroll;
});
