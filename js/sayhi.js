let say = ["hey", "hello", "hi"];

var rnd = Math.ceil(Math.random() * say.length) - 1;
var sayhi = document.getElementsByClassName("sayhi")[0];

sayhi.innerHTML = "Say " + say[rnd];
