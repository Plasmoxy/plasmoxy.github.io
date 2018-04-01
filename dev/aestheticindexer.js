/* Aesthetic linker js utility which creates cool folder structure index */
/* copy this anywhere where you want and run */
/* generates Bootstrap 4 html index using nodejs */

const fs = require('fs');
const path = require('path');

// your folders here
const folders = [
  '.'
];

const btnTypes = [
  'btn-outline-warning',
  'btn-outline-primary',
  'btn-outline-success',
  'btn-outline-danger',
  'btn-outline-info'
];

function safeReadFile(file) {
  return (fs.existsSync(file) ? fs.readFileSync(file) : '')
}

function base(fname, localdescription) {return `
<!DOCTYPE html>
<html lang="en">

<!-- Plasmoxy AestheticIndexer generated html index file -->

<head>
  <title></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- mobile chrome stuff-->
  <meta name="theme-color" content="#00ffe0">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

  <!-- STYLES -->
  <link rel="stylesheet" href="/assets/bs/bootstrap.min.css">


  <!-- SCRIPTS -->
  <script src="/assets/jquery.min.js"></script>
  <script src="/assets/bs/bootstrap.min.js"></script>

  <style>

  /* style for AestheticIndexer by Plasmoxy */

  .roundcorners {
      border-radius: 5px;
      background: #0f0f0f;
      padding: 15px;
  }

  /* COLORS */

  .text-cyan {
    color: #00ffe0;
  }

  .bg-cyan {
    background: #00ffe0;
  }

  .blacc {
    color: #0f0f0f;
  }

  .bg-night {
    background: #0f0f0f;
  }

  .btn-outline-white {
    border-color: white;
    color: white;
  }

  .btn-outline-white:hover {
    background: white;
    color: black;
  }

  a {
    color: #00ffe0;
  }
  a:hover {
    color: #ffc107;
  }

  </style>

</head>

<body class="bg-night text-white">

<div id="root" class="container">

  <div id="titleContainer" class="text-center bg-warning roundcorners mt-2 blacc p-2">
    <h1 class="title">`+fname+`</h1>
    <h4>`+localdescription+`</h4>
  </div>


  <div id="projrow" class="row"><!-- main row, let all just stick in here -->
`}

function endBase() { return `
  </div> <!-- end projrow -->

<footer>
    <div class="row justify-content-center mt-5 mb-1">
      <div class="card bg-dark text-white px-5">
        <div class="card-body text-center p-1 px-5">
          Bootstrap 4 project folder index generated using
          <a href="https://github.com/Plasmoxy/AestheticIndexer">AestheticIndexer by Plasmoxy</a>
        </div>
      </div>
    </div>
</footer>

</div>
</body>
</html>
`}

function card(isDirectory, target, btntype, description) {return `
    <div class="col-lg-4 d-flex align-items-center p-3">
      <div class="card bg-dark w-100">
        <div class="card-header">
          <a class="btn `+btntype+` w-100" href="`+target+`">`+target+`</a>
        </div>
        ` + (
          isDirectory ?
            `
            <div class="card-body">
              `+description+`
            </div>
            `
          : ''
        ) + `
      </div>
    </div>

`}


folders.forEach(function(folder, folderIndex) {

  console.log('PROCESSING: ' + folder);

  let html = base(
    path.resolve(folder).split(path.sep).pop(),
    safeReadFile(folder + path.sep + 'desc.txt')
  );

  // directories
  fs.readdirSync(folder).forEach(function(file, i) {
    var isDir = fs.lstatSync(folder + path.sep + file).isDirectory();
    if (isDir)
      html += card(
        true,
        file,
        btnTypes[0],
        safeReadFile(folder + path.sep + file + path.sep + 'desc.txt')
      );
  });

  // files
  fs.readdirSync(folder).forEach(function(file, i) {
    var isDir = fs.lstatSync(folder + path.sep + file).isDirectory();
    if (!isDir && file != "desc.txt" && file != "index.html")
      html += card(
        false,
        file,
        'btn-outline-white'
      );
  });

  html += endBase();


  fs.writeFileSync(path.resolve(folder) + '/index.html', html);
});
