/* uses p5.js | by Plasmoxy | @template=hybrid */

let temp;

function setup() {
  noCanvas();
  select('#cityinput').input(loadData);
}

function getWeatherData(city, callback, errorcallback) {
  loadJSON(
    'https://api.openweathermap.org/data/2.5/weather?q='
    +city
    +'&appid=829d5a1402e3d3406b70ef9c8028f73f&units=metric'
  , callback, errorcallback);
}

function loadData() {
  getWeatherData(select('#cityinput').value(), gotData, loadError);
}

function gotData(data) {
  console.log(data);
  temp = Number(data.main.temp);
  select('#info').html('Temperature = ' + temp + ' °C');
}

function loadError() {
  select('#info').html('No such city.');
}

function draw() {}
