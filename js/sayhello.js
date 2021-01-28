let say = ["Hey", "Hello", "Hi"];

var rnd = Math.ceil(Math.random() * say.length) - 1;
var sayhi = document.getElementsByClassName("sayhello")[0];

sayhi.innerHTML = say[rnd];
