<html>
<!-- by Plasmoxy -->

<head>
  <title>greeter</title>
</head>

<body>
  <script>
  var name = prompt("Enter your name :");
  if (name!=null && name!="") {
    document.write("Hello " + String(name));
  } else {
    alert("You must enter name.");
    location.reload();
  }
  </script>
</body>
</html>
