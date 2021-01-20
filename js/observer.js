let target = document.querySelector("#anchor-hey");

let cols = document.getElementById("navbar").getElementsByTagName("A")[0];
let cols1 = document.getElementById("navbar").getElementsByTagName("A")[1];

let options = {
  //root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const callback = function (entries, observer) {
  let observed = entries[0];

  if (observed.isIntersecting) {
    console.log("cols", cols);
    cols.style.color = "#ff00ff";
    cols1.style.color = "#ff00ff";
  } else {
    cols.style.color = "#000000";
    cols1.style.color = "#000000";
  }
};

const observer = new IntersectionObserver(callback, options);

if (target) {
  observer.observe(target);
}
