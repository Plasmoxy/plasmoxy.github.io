PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer(1000, 800, {
  transparent: false,
  resolution: 1
});
renderer.backgroundColor = 0x111111;
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
  .add('fak', '/assets/img/bacc.jpg')
  .load(setup)
;

var fak;

function setup() {
  fak = new PIXI.Sprite(
    PIXI.loader.resources['fak'].texture
  );

  fak.scale.set(0.5, 0.5);
  fak.anchor.set(0.5, 0.5);
  fak.x = renderer.width / 2;
  fak.y = renderer.height / 2;

  stage.addChild(fak);
  renderer.render(stage);

  update(); // start render chain
}

function update() {
  requestAnimationFrame(update);

  fak.rotation += 0.01;

  renderer.render(stage);
}
