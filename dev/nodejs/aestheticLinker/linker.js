const fs = require('fs');
const path = require('path');

const folder = '../../js/testing';

const before = `<!DOCTYPE html>
<html>
<!-- by Plasmoxy -->

<head>
  <title>STRUCTURE</title>
  <style>
    body {
      text-align: center;
      background: #333;
      color: white;
    }
    body > a {
      transition: all 0.5s ease;
    }

    a {
      color: inherit;
      font-size: 4em;
      text-decoration: none;
    }
    a:hover {
      color: #ff006b;
      font-size: 6em;
    }

    .dir {
      color: #09ece5;
    }

    .title {
      font-size: 5em;
      color: #333;
      background: #fc217d;
    }
  </style>
</head>

<body>
<div class="title"<span>` + path.resolve(folder).split(path.sep).pop() + `</span></div><br>
`;

const after = `</body>
</html>`;

var stuff = '';

// first dirs
fs.readdirSync(folder).forEach(file => {
  var isDir = fs.lstatSync(folder + path.sep + file).isDirectory();
  if (file != "linker.js" && file != "index.html" && isDir)
    stuff += '<a class="dir" ' + 'href="' + file + '">' + file + '/</a><br>' + '\n';
});

// then files
fs.readdirSync(folder).forEach(file => {
  var isDir = fs.lstatSync(folder + path.sep + file).isDirectory();
  if (file != "linker.js" && file != "index.html" && !isDir)
    stuff += '<a ' + 'href="' + file + '">' + file + '</a><br>' + '\n';
});


fs.writeFile('./index.html', before + stuff + after, undefined);
