function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    var text;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                text = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return text;
}

function main() {
  var folder = window.location.href.replace("index.html", "");
  var lmao = readTextFile(folder + "lmao.txt");
  if (lmao.replace("\n", "").replace("\r", "") == "HENLO") document.write("YES");
}

main();
