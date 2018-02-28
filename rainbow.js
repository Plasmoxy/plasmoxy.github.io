console.log('starting rainbow.js')
var rainbow_hue = 360;
var titleContainer = document.getElementById("titleContainer");

var newHue;
setInterval(function() {
  newHue =  (rainbow_hue+200)%360;
  $('#titleContainer').css('background', "hsl(" + newHue + ", 70%, 50%)");
  $('meta[name=theme-color]').attr('content', pmxyjs.hslToHex(newHue, 70, 50));

  if (rainbow_hue > 0) {
    rainbow_hue--;
  } else {
    rainbow_hue = 360;
  }

}, 100);
