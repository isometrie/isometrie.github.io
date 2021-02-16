function createTable(elem, am, index) {
  const divContainer = document.createElement("div");
  divContainer.className = "project";
  document.body.appendChild(divContainer);

  console.log("bg", elem.background);

  var p = document.getElementsByClassName("project")[index];
  p.style.backgroundColor = elem.background;
  p.style.transition = "2s all ease";

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
  var t = document.createTextNode("ich bin neu " + elem.title);
  l.appendChild(t);
  divTextContainer.appendChild(l);

  // CREATE YEAR
  var l = document.createElement("div");
  var t = document.createTextNode(elem.year + " (" + imagenums + ")");
  l.appendChild(t);
  divTextContainer.appendChild(l);
  l.classList.add("year");

  var article = document.createElement("article");
  var t = document.createTextNode(elem.text);
  article.appendChild(t);
  divTextContainer.appendChild(article);

  // CREATE TOOL CLOUD
  for (var i = 0; i < elem.tools.length; i++) {
    var l = document.createElement("li");
    var t = document.createTextNode(elem.tools[i]);
    l.appendChild(t);
    divTextContainer.appendChild(l);
  }
}

function myImage(dir, filename, imagenums) {
  var randomWidth = randomInteger(300, 500) + "px";

  console.log("randomWidth", randomWidth);
  var image = document.createElement("IMG");
  image.setAttribute("src", "img/" + dir + "/" + filename);
  image.setAttribute("loading", "lazy");

  var minSize = (100 / imagenums) * 0.6;
  var maxSize = (100 / imagenums) * 0.9;

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

function fetchList() {
  fetch("json/showcase.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let amount = data.project.length;

      data.project.forEach((element, index) => createTable(element, amount, index));
    })
    .catch(function (e) {
      console.log("error: " + e);
    });
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
