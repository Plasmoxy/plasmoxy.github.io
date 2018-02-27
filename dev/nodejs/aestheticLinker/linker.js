/* Aesthetic linker js utility which creates cool folder structure index */
/* generates html using nodejs */

const fs = require('fs');
const path = require('path');

const folders = [
  '../..',
  '../../CodingTrain',
  '../../css',
  '../../js',
  '../../nodejs',
  '../../p5',
  '../../particlesjs',
  '../../sockets',
  '../../testing',
  '../../trackingjs'
];

const before = `<!DOCTYPE html>
<html>
<!-- by Plasmoxy -->

<head>
  <title>STRUCTURE</title>

  <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">

  <style>
    body {
      font-family: 'Amatic SC', cursive;
      background: #111;
      color: white;
    }

    .content {
      margin: 1em 0.1em 1em 0.1em;
      padding: 0em 0.1em 0em 0.1em;
      text-align: center;
      white-space: nowrap;
    }

    .content a{
      transition: all 0.5s ease;
    }

    a {
      display: inline-block;
      color: #111;
      font-size: 5em;
      text-decoration: none;
      margin: 0.1em 0.1em 0.1em 0.1em;
      padding: 0 0.1em 0 0.1em;
      background: white;
      border: solid white 10px;
      border-radius: 50px;
    }
    a:hover {
      font-size: 8em;
    }

    .dir {
      background: #111;
      border: solid #111 10px;
    }

    #title {
      text-align: center;
    }

    #titleText {
      font-size: 8em;
      color: #111;
      background: #111;
      border: solid #111 10px;
      border-width: 0px 10px 0px 10px;
      border-radius: 10px;
      padding: 0 2em 0 2em;
    }

    .titleEmoji {
      height: 5px;
      width: 5px;
    }

    #bacc {
      transition: all 0.5s ease;
      cursor: pointer;
      width: 5em;
    }
    #bacc:hover {
      width: 20em;
    }
  </style>
</head>

<body>
`;

const after = `</div>
<script>
var rainbow_hue = 180;
var dirs = document.getElementsByClassName("dir");
var title = document.getElementById("titleText");

setInterval(function() {
  for(i = 0; i<dirs.length; i++) {
    dirs[i].style.background = "hsl(" + rainbow_hue + ", 70%, 50%)";
    dirs[i].style.borderColor = "hsl(" + rainbow_hue + ", 70%, 50%)";
    title.style.background = "hsl(" + (rainbow_hue - 100)%360 + ", 70%, 50%)";
    title.style.borderColor = "hsl(" + (rainbow_hue - 100)%360 + ", 70%, 50%)";
  }
  if (rainbow_hue > 0) {
    rainbow_hue--;
  } else {
    rainbow_hue = 360;
  }
}, 100);
</script>
</body>

</html>`;

folders.forEach(function(folder, folderIndex) {

  var mid = `<div class="content">
  <div style="text-align: center;">
    <img id="bacc" onclick="window.history.back();" src="/assets/img/bacc.jpg"/>
  </div>
  <div id="title"><span id="titleText"> 👏 ` + path.resolve(folder).split(path.sep).pop() + ` 👌</span>
  </div><br>
  `;
  var stuff = '';


  // first dirs
  fs.readdirSync(folder).forEach(function(file, i) {
    var isDir = fs.lstatSync(folder + path.sep + file).isDirectory();
    if (file != "linker.js" && file != "index.html" && isDir)
      stuff += '<a class="dir" ' + 'href="' + file + '">' + file + '</a>';
    if (i!=0 && i%3 == 0) stuff += '<br>';
    stuff += '\n';
  });

  // then files
  fs.readdirSync(folder).forEach(function(file, i) {
    var isDir = fs.lstatSync(folder + path.sep + file).isDirectory();
    if (file != "linker.js" && file != "index.html" && !isDir)
      stuff += '<a class="file" ' + 'href="' + file + '">' + file + '</a>';
    if (i!=0 && i%3 == 0) stuff += '<br>';
    stuff += '\n';
  });


  fs.writeFile(path.resolve(folder) + '/index.html', before + mid + stuff + after, undefined);
});
