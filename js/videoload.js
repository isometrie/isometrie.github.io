var windowWidth = window.matchMedia("(max-width: 600px)");

if (windowWidth.matches) {
  //console.log("kleiner");

  var elem = document.createElement("img");
  elem.setAttribute("src", "mp4/displace.jpg");
  elem.setAttribute("class", "cloud");
  elem.setAttribute("width", "100%");
  document.getElementById("cloud").appendChild(elem);
} else {
  //console.log("größer");

  var video = document.createElement("video");
  video.setAttribute("class", "cloud");
  video.setAttribute("src", "mp4/displace.mp4");
  video.muted = true;
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.load();
  document.getElementById("cloud").appendChild(video);
}
