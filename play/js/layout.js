function createLayout(elem, am, index) {
  const divContainer = document.createElement("div");
  divContainer.className = "project";
  document.body.appendChild(divContainer);

  console.log("bg", elem.background);

  var p = document.getElementsByClassName("project")[index];
  p.style.backgroundColor = elem.background;

  const divImgContainer = document.createElement("div");
  divImgContainer.className = "gallery";
  divContainer.appendChild(divImgContainer);

  var imagenums = elem.images.length;

  for (var i = 0; i < imagenums; i++) {
    var img = myImage(elem.title, elem.images[i], imagenums);
    divImgContainer.appendChild(img);
  }

  const divTextContainer = document.createElement("div");
  divTextContainer.className = "text";
  divContainer.appendChild(divTextContainer);

  // CREATE TITLE
  var l = document.createElement("h1");
  var t = document.createTextNode(elem.title);
  l.appendChild(t);
  divTextContainer.appendChild(l);

  // CREATE YEAR
  var l = document.createElement("div");
  var t = document.createTextNode(elem.year);
  l.appendChild(t);
  divTextContainer.appendChild(l);
  l.classList.add("year");

  // CREATE TEXT
  var article = document.createElement("article");
  var t = document.createTextNode(elem.text);
  article.appendChild(t);
  //divTextContainer.appendChild(article);

  // CREATE TOOL CLOUD
  var ul = document.createElement("ul");
  divTextContainer.appendChild(ul);

  var res;

  if (typeof elem.background !== "undefined") {
    mycolor = brighten(elem.background, 0.6); // "e.g. #ff0000"
  }
  if (elem.background == "#000000") {
    mycolor = "#999999";
  }

  for (var i = 0; i < elem.tools.length; i++) {
    var l = document.createElement("li");
    l.style.borderColor = mycolor;
    l.style.backgroundColor = mycolor;

    l.style.color = "#ffffff";

    var t = document.createTextNode(elem.tools[i]);
    l.appendChild(t);

    ul.appendChild(l);
  }
}

function myImage(dir, filename, imagenums) {
  var randomWidth = randomInteger(300, 500) + "px";

  console.log("randomWidth", randomWidth);
  var image = document.createElement("IMG");
  image.setAttribute("src", "img/" + dir + "/" + filename);
  image.setAttribute("loading", "lazy");

  var minSize = (100 / imagenums) * 1;
  var maxSize = (100 / imagenums) * 1;

  image.style.maxWidth = randomInteger(minSize, maxSize) + "%";
  image.classList.add("fader");

  return image;
}

function select(value) {
  fetch("json/showcase.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      filterProjects(data, value);
    });
}

function filterProjects(data, value) {
  var num = 0;
  function list(tools, index) {
    if (!data.project[index].tools.includes(value)) {
      var project = document.getElementsByClassName("project");
      project[index].style.display = "none";

      console.log((data.project.length -= 1));
    }
  }
  data.project.forEach(list);
}

function fetchData() {
  fetch("json/showcase.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let amount = data.project.length;

      data.project.forEach((element, index) => createLayout(element, amount, index));
    })
    .catch(function (e) {
      console.log("error: " + e);
    });
}

window.onload = function () {
  fetchData();
  console.log("loaded");
};

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
var chapter = 0;
var flag = true;
var randomColor;


window.addEventListener("scroll", function (e) {
  var fromtop = document.querySelectorAll(".project")[chapter].getBoundingClientRect().top;

  if (flag) {
    randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    var p = document.getElementsByClassName("project")[chapter];
    p.style.backgroundColor = randomColor;
    // p.style.transition = "5s all ease";

    var q = document.getElementsByClassName("project")[chapter + 1];
    q.style.backgroundColor = randomColor;
    q.style.transition = "4s all ease";

    flag = false;
  }

  if (fromtop <= 0) {
    console.log("fromtop", fromtop, randomColor);
    chapter += 1;
    console.log("ich bin da", fromtop, chapter);
    flag = true;
  }
});
*/

function brighten(color, c) {
  const calc = (sub1, sub2) =>
    Math.min(255, Math.floor(parseInt(color.substr(sub1, sub2), 16) * c))
      .toString(16)
      .padStart(2, "0");
  return `#${calc(1, 2)}${calc(3, 2)}${calc(5, 2)}`;
}
