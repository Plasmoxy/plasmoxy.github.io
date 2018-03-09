/* constants/aliases */
const pi = Math.PI;

/* setup pixi */
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
  .add('tileset', 'tileset.png')
  .load(setup)
;

/* logic */

let player, walls, camera;

let keys;


function setup() {

  /* add walls to scene */
  walls = new Container();
  walls.sprites = Array.from(new Array(5), (x,i) => new Wall((64 + 6)*i,0));
  walls.sprites.forEach((w,i) => {
    walls.addChild(w);
  });
  walls.position.set(0,0);
  app.stage.addChild(walls);

  /* add player */
  player = new Player(resources.roket.texture);
  player.position.set(100,100);
  app.stage.addChild(player);

  /* setup ticker */
  app.ticker.add(tick);

  /* define control */
  keys = {
    up: new KeyboardKey(38),
    down: new KeyboardKey(40),
    left: new KeyboardKey(37),
    right: new KeyboardKey(39)
  };

  /* create camera */
  camera = new Camera(app.stage);
  camera.linkControlHandlers(keys);

  /* start rendering */
  update();
}

function update() {
  requestAnimationFrame(update);
}

function tick(dt) {
  player.position.x = app.renderer.width/2 - app.stage.position.x;
  player.position.y = app.renderer.height/2 - app.stage.position.y;
  camera.move(dt);
}
