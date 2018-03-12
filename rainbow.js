/* rainbow.js by Plasmoxy */

(function() {
  console.log('[rainbow.js] starting loop ...')

  let rainbow_hue = 360;
  let newHue, newColor;
  setInterval(function() {
    newHue =  (rainbow_hue+50)%360;
    newColor = "hsl(" + newHue + ", 70%, 50%)";
    $('#titleContainer').css('background', newColor);
    $('meta[name=theme-color]').attr('content', pmxyjs.hslToHex(newHue, 70, 50));
    $('.pmxyloader').css('border-left-color', newColor);
    $('.pmxyloader').css('border-right-color', newColor);

    if (rainbow_hue > 0) {
      rainbow_hue--;
    } else {
      rainbow_hue = 360;
    }

  }, 100);
})();
