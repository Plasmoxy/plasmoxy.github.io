/* uses p5.js | by Plasmoxy | @template=hybrid */

let temp, winddeg, humidity;

function setup() {
  createCanvas(350, 100);
  select('#cityinput').input(loadData);
  textAlign(CENTER);
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
  humidity = Number(data.main.humidity);
  winddeg = Number(data.wind.deg);
  select('#info').html(
    'Temperature = ' + temp + ' °C<br>'
    +'( min '+data.main.temp_min+' °C | max '+data.main.temp_max+' °C )<br>'
    +'Humidity = ' + humidity + ' %<br>'
    +'Pressure = ' + data.main.pressure + ' hPa<br>'
    +'Wind = ' + data.wind.speed + ' m/s<br>'
  );
  select('#countrycode').html(data.sys.country);
}

function loadError() {
  select('#info').html('No such city.');
  select('#countrycode').html('');
  temp = undefined;
  humidity = undefined;
}

function draw() {
  background(8, 8, 13); // blend in

  if (temp) { push();
    let temppixels = map(temp, -20, 40, 0, 100);
    fill(255, 0, 122);
    noStroke();
    ellipse(50, 50, temppixels, temppixels);
    textSize(15);
    fill(0);
    text(parseInt(temp), 50, 55);
  pop();}

  if (humidity) { push();
    let humipixels = map(humidity, 0, 100, 0, 100); // change if canvas size changes
    noFill();
    stroke(0, 255, 255);
    rect(150, 0, 25, 99);

    fill(0, 255, 255);
    rect(150, 100, 25, -humipixels);
  pop();}

  if (winddeg) { push();
    noFill();
    stroke(0, 255, 255);

  pop();}


}
