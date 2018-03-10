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

let world, gui;
let player, walls;
let keys;

let temp;

function setup() {

  /* create world */
  world = new World();
  app.stage.addChild(world);

  /* create gui */
  gui = new Gui();
  app.stage.addChild(gui);
  temp = new CoolText("Hello darkness");
    temp.x = 50;
    temp.y = 50;
    gui.addChild(temp);
  temp = null;

  /* create player */
  player = new Player(0,0, resources.roket.texture);
  world.addChild(player);

  /* add some debug walls */
  walls = new Container();
  walls.sprites = Array.from(new Array(5), (x,i) => new Wall((64 + 6)*i,0));
  walls.sprites.forEach((w,i) => {
    walls.addChild(w);
  });
  walls.position.set(0,0);
  world.addChild(walls);

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
  player.move(dt);
  world.centerTo(player);
}
