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

/* load textures and setup function */
loader
  .add('roket', '/assets/sprites/aquaroket.png')
  .add('tileset', 'tileset.png')
  .add('safarik', '/assets/sprites/safarik.png')
  .add('bootlegstars', '/assets/sprites/bootlegstars.png')
  .load(setup)
;

window.addEventListener('resize', function() {
  w = window.innerWidth;
  h = window.innerHeight;

  app.renderer.view.style.width = w + "px";
  app.renderer.view.style.height = h + "px";
  app.renderer.resize(w,h);
});

/* logic */

let world, gui, bg;
let player;
let keys;

function setup() {

  /* create world */
  world = new World();
  app.stage.addChild(world);

  let bg = new PIXI.extras.TilingSprite(resources.bootlegstars.texture, 10000, 10000);
  bg.position.set(-5000, -5000);
  world.addChild(bg);

  /* create gui */
  gui = new Gui();
  app.stage.addChild(gui);
  let temp = new CoolText("Hello fag this is Sample Textzt");
    temp.x = 50;
    temp.y = 50;
    gui.addChild(temp);
  temp = null;

  /* create player */
  player = new Player(100,100, resources.roket.texture);
  world.addChild(player);

  /* add some debug walls */
  let walls = new Container();
  walls.sprites = Array.from(new Array(5), (x,i) => new Wall((64 + 6)*i,0));
  walls.sprites.forEach((w,i) => {
    walls.addChild(w);
  });
  walls.position.set(0,0);
  world.addChild(walls);

  /* add some Safarik xDD */
  let safarik = new Sprite(resources.safarik.texture);
  safarik.position.set(-800, -800);
  world.addChild(safarik);

  /* setup ticker */
  app.ticker.add(tick);

  /* define control */
  keys = {
    up: new KeyboardKey(38),
    down: new KeyboardKey(40),
    left: new KeyboardKey(37),
    right: new KeyboardKey(39)
  };
  player.setKeys(keys);

  /* start rendering */
  update();
}

function update() {
  requestAnimationFrame(update);
}

function tick(dt) {
  player.animateMovement(dt);
  player.move(dt);
  world.centerTo(player);
  world.rotateTo(player);
}
