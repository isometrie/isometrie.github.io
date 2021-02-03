var fading = document.querySelectorAll(".text-fade");

for (var i = 0; i < fading.length; i++) {
  var randomsize = Math.floor(Math.random() * 500 + 100);
  //console.log(randomsize);

  fading[i].style.backgroundSize = randomsize + "%";
}

var gray = 255;

window.addEventListener("scroll", function (e) {
  var labfromtop = document.querySelector("#anchor-lab").getBoundingClientRect().top;
  var labheight = document.querySelector("#anchor-lab").getBoundingClientRect().height;
  var fac = labheight / 255;

  var brightness = labheight / 100;

  var brightnesslevel = Math.floor((labfromtop + labheight) / brightness);
  var bb = document.querySelectorAll(".brightness-box")[0];

  var bs = document.querySelectorAll(".brightness-scala")[0];
  var pb = document.querySelectorAll(".progress-bar")[0];

  var al = document.querySelector("#anchor-lab");

  //console.log("top", labfromtop, "height", labheight, "fac", fac);
  bb.style.visibility = "hidden";

  //scroll down
  if (labfromtop <= 0) {
    gray = Math.floor((labfromtop + labheight) / fac);
    var bg = document.querySelector("#anchor-lab");
    bg.style.backgroundColor = "rgb(" + (gray - 2) + "," + (gray - 2) + "," + gray + ")";

    if (gray < 0) {
      bg.style.backgroundColor = "rgb(0, 0, 0)";
    }
  }

  //scroll up
  if (labfromtop > 0) {
    gray = Math.floor((labfromtop + labheight) * fac);
    var bg = document.querySelector("#anchor-lab");
    bg.style.backgroundColor = "rgb(" + gray + "," + gray + "," + gray + ")";
  }

  if (brightnesslevel <= 100 && brightnesslevel >= 0) {
    //show only when used
    bb.style.visibility = "visible";

    //show brightness as text string
    bs.innerHTML = brightnesslevel + "%";

    //progress-bar width from 100% to 0%
    pb.style.width = brightnesslevel * 3 + "px";
  }
});

function setText(requestselect) {
  var emailtemplate = "Hey,\nplease send me the documentation of the " + requestselect + " that you mentioned above.\n\nThanks you";
  document.getElementById("text-message").value = emailtemplate;
}
