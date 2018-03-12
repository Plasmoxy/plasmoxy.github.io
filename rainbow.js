/* rainbow.js by Plasmoxy */

(function() {
  console.log('[rainbow.js] starting loop ...')

  let rainbow_hue = 360;
  let newHue;
  setInterval(function() {
    newHue =  (rainbow_hue+50)%360;
    $('#titleContainer').css('background', "hsl(" + newHue + ", 70%, 50%)");
    $('meta[name=theme-color]').attr('content', pmxyjs.hslToHex(newHue, 70, 50));

    if (rainbow_hue > 0) {
      rainbow_hue--;
    } else {
      rainbow_hue = 360;
    }

  }, 100);
})();
