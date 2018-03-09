

let app = new Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  transparent: false,
  resolution: 1
});

document.body.appendChild(app.view);

app.renderer.backgroundColor = 0;
//app.renderer.autoResize = true;

loader
  .add('roket', '/assets/sprites/aquaroket.png')
  .load(setup)
;

function setup() {
  let roket = new Sprite(
    resources['roket'].texture
  );
  app.stage.addChild(roket);
  roket.position.x =50;
}
