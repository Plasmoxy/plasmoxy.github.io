/*
 * A Javascript utility library by Seb Petrík aka Plasmoxy.
 * I'll just paste useful stuff here if ya all don't mind.
 */

var pmxyjs = {
  readFile : function(fileURL) {
      var rawFile = new XMLHttpRequest();
      var text;
      rawFile.open("GET", fileURL, false);
      rawFile.onreadystatechange = function () {
          if(rawFile.readyState === 4) {
              if(rawFile.status === 200 || rawFile.status == 0) {
                  text = rawFile.responseText;
              }
          }
      }
      rawFile.send(null);
      return text;
  },

  readLocalFile : function(localURL) {
    return this.readFile(window.location.href + localURL);
  }
};
