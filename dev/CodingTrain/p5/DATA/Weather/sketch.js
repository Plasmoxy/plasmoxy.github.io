/* uses p5.js | by Plasmoxy | @template=hybrid */

let temp;

function setup() {
  noCanvas();
  select('#cityinput').input(loadData);
}

function getWeatherData(city, callback) {
  loadJSON(
    'https://api.openweathermap.org/data/2.5/weather?q='
    +city
    +'&appid=829d5a1402e3d3406b70ef9c8028f73f&units=metric'
  , callback);
}

function loadData() {
  getWeatherData(select('#cityinput').value(), gotData);
}

function gotData(data) {
  temp = Number(data.main.temp);
  select('#info').html('Temperature = ' + temp + ' °C');
}

function draw() {}
