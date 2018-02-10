/* by Plasmoxy */
var num = prompt("Enter number");
var power = prompt("Enter power");

var stylespan = '<span style="color:green;font-size:5em;">';
var nspan = '</span><br>';

function spanWrite(input) {
  document.write(stylespan + input + nspan);
}

function sup(input) {
  return '<sup style="font-size:0.5em;">' + input + '</sup>';
}

spanWrite("Number = " + num);
spanWrite("Power = " + power);

spanWrite("" + num + sup(power) + " = " + Math.pow(num, power));
