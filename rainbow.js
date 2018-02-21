var rainbow_hue = 0;
var titleContainer = document.getElementById("titleContainer");

setInterval(function() {
  titleContainer.style.background = "hsl(" + rainbow_hue + ", 70%, 50%)";
  if (rainbow_hue < 360) {
    rainbow_hue++;
  } else {
    rainbow_hue = 0;
  }
}, 10);
