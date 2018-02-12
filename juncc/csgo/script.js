var text = document.getElementById("text");
var maincontainer = document.getElementById("maincontainer");

function sleep(ms) { // this promises through setTimeout
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function kys() { // create async task for rendering
  while(true) {
    maincontainer.style.background = "black"
    maincontainer.style.color = "white"
    text.style.fontSize = "5em";
    text.innerHTML = "MOŽEM";
    await sleep(1000);
    maincontainer.style.background = "red"
    maincontainer.style.color = "black"
    text.style.fontSize = "20em";
    text.innerHTML = "JEBAC";
    await sleep(1000);
    maincontainer.style.background = "black"
    maincontainer.style.color = "white"
    text.style.fontSize = "15em";
    text.innerHTML = "CSGO";
    await sleep(1000);
    maincontainer.style.color = "#ff00c3"
    text.style.fontSize = "20em";
    text.innerHTML = ";)";
    await sleep(1000);
  }
}

kys();
