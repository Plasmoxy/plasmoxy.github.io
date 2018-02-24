/* Aesthetic linker js utility which creates cool folder structure index */
/* generates html using nodejs */

const fs = require('fs');
const path = require('path');

const folder = '../../sockets';

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
      margin: 3em 0.1em 3em 0.1em;
      padding: 0em 0.1em 0em 0.1em;
      text-align: center;
      white-space: nowrap;
    }

    .content > a {
      transition: all 0.5s ease;
    }

    a {
      display: inline-block;
      color: #111;
      font-size: 6em;
      text-decoration: none;
      margin: 0.1em 0.3em 0.1em 0.3em;
      background: white;
      border: solid white 10px;
      border-radius: 50px;
    }
    a:hover {
      background: #ff006b;
      border: solid #ff006b 10px;
      font-size: 8em;
    }

    .dir {
      background: #00fff0;
      border: solid #00fff0 10px;
    }

    .title {
      text-align: center;
      font-size: 8em;
      color: #111;
      background: #fc217d;
    }
  </style>
</head>

<body>
<div class="content"><div class="title"<span>` + path.resolve(folder).split(path.sep).pop() + `</span></div><br>
`;

const after = `</div></body>
</html>`;

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
    stuff += '<a ' + 'href="' + file + '">' + file + '</a>';
  if (i!=0 && i%3 == 0) stuff += '<br>';
  stuff += '\n';
});


fs.writeFile(path.resolve(folder) + '/index.html', before + stuff + after, undefined);
