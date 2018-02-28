/* Aesthetic linker js utility which creates cool folder structure index */
/* generates html using nodejs */

const fs = require('fs');
const path = require('path');

const folders = [
  '.',
  'CodingTrain',
  'CSS',
  'CSS/sololearn',
  'Javascript',
  'Javascript/gudobjects',
  'Javascript/sololearn',
  'Javascript/testing',
  'nodejs',
  'p5.js',
  'three.js',
  'three.js/learning',
  'particlesjs',
  'sockets',
  'testing',
  'trackingjs'
];

const before = `<!DOCTYPE html>
<html>
<!-- by Plasmoxy -->
<!-- Generated using my aestheticLiner NodeJS script -->

<head>
  <title>STRUCTURE</title>

  <!-- mobile chrome stuff-->
  <meta name="theme-color" content="#00ffe0">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

  <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://plasmoxy.github.io/assets/js/pmxy.js"></script>
  <style>
    body {
      font-family: 'Amatic SC', cursive;
      background: #111;
      color: white;
    }

    .nodeBreak {
      display: none;
    }

    .centered {
      text-align: center;
    }

    #content {
      margin: 1em 0.1em 1em 0.1em;
      padding: 0em 0.1em 0em 0.1em;
      text-align: center;
      white-space: nowrap;
      display: inline-block;
    }

    #content a{
      transition: all 0.5s ease;
    }

    a {
      display: inline-block;
      color: #111;
      font-size: 100px;
      text-decoration: none;
      margin: 0.1em 0.1em 0.1em 0.1em;
      padding: 0 0.1em 0 0.1em;
      background: white;
      border: solid white 10px;
      border-radius: 50px;
    }
    a:hover {
      font-size: 200px;
    }

    .dir {
      background: #111;
      border: solid #111 10px;
    }

    #title {
      text-align: center;
    }

    #titleText {
      font-size: 150px;
      color: #111;
      background: #111;
      border: solid #111 10px;
      border-width: 0px 10px 0px 10px;
      border-radius: 10px;
      padding: 0 30px 0 30px;
    }

    .titleEmoji {
      height: 5px;
      width: 5px;
    }

    #bacc {
      transition: all 0.5s ease;
      cursor: pointer;
      width: 20em;
    }
    #bacc:hover {
      width: 50em;
    }
  </style>
</head>

<body>
<div class="centered">
<div id="content">
<div style="text-align: center;">
  <img id="bacc" onclick="window.history.back();" src="/assets/img/bacc.jpg"/>
</div>
`;

// exit centerd and content divs on beginning
const after = `</div></div>

<div style="height: 200px;"></div>

<script>
var rainbow_hue = 180;
var dirs = document.getElementsByClassName("dir");
var title = document.getElementById("titleText");
var initContentWidth = 0;

setTimeout(function() {
  initContentWidth = $('#content').width();
}, 500);

function oneLineLayout(state) {
  $('.nodeBreakOrdered').each(function(i, obj) {
    $(obj).css({'display': (state ? 'none' : 'inline')});
  });
  $('.nodeBreak').each(function(i, obj) {
    $(obj).css({'display': (state ? 'inline' : 'none')});
  });
}



setInterval(function() { // render thread

  //rainbow
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

  $('meta[name=theme-color]').attr('content', pmxyjs.hslToHex(rainbow_hue, 70, 50));

  // responsivity
  if (  initContentWidth >= $(window).width()  ) {
    oneLineLayout(true);
  } else {
    oneLineLayout(false);
  }

}, 100);
</script>
</body>

</html>`;

folders.forEach(function(folder, folderIndex) {

  console.log('PROCESSING: ' + folder);

  var mid = `
  <div id="title"><span id="titleText"> 👏 ` + path.resolve(folder).split(path.sep).pop() + ` 👌</span>
  </div><br>
  `;
  var stuff = '';


  // first dirs
  fs.readdirSync(folder).forEach(function(file, i) {
    var isDir = fs.lstatSync(folder + path.sep + file).isDirectory();
    if (file != "linker.js" && file != "index.html" && isDir)
      stuff += '<a class="dir" ' + 'href="' + file + '">' + file + '</a>';
    stuff += '<br class="nodeBreak">';
    if (i!=0 && i%3 == 0) stuff += '<br class="nodeBreakOrdered">';
    stuff += '\n';
  });

  // then files
  fs.readdirSync(folder).forEach(function(file, i) {
    var isDir = fs.lstatSync(folder + path.sep + file).isDirectory();
    if (file != "linker.js" && file != "index.html" && !isDir)
      stuff += '<a class="file" ' + 'href="' + file + '">' + file + '</a>';
    stuff += '<br class="nodeBreak">';
    if (i!=0 && i%3 == 0) stuff += '<br class="nodeBreakOrdered">';
    stuff += '\n';
  });


  fs.writeFileSync(path.resolve(folder) + '/index.html', before + mid + stuff + after);
});
