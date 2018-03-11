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

app.view.style.display = "none";
document.body.appendChild(app.view);

app.renderer.backgroundColor = 0;
//app.renderer.autoResize = true;

/* load textures and setup function */
loader
  .add('roket', '/assets/sprites/aquaroket.png')
  .add('tileset', 'tileset.png')
  .add('safarik', '/assets/sprites/safarik.png')
  .add('bootlegstars', '/assets/sprites/bootlegstars.png')
  .on('progress', loadProgressHandler)
  .load(setup)
;

function loadProgressHandler(ldr, res) { // loader, resource
  console.log('LOADING [ '+Math.round(ldr.progress)+'% ] : ' + res.name + ' -> ' + res.url);
}

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
let movekeys;
let camera;

function setup() {

  document.getElementById('loading').style.display = 'none';
  app.view.style.display = "block";

  /* create background */
  bg = new Background(0.5);
  app.stage.addChild(bg);

  /* create world */
  world = new World();
  app.stage.addChild(world);

  /* create gui */
  gui = new Gui();
  app.stage.addChild(gui);

  /* create camera */
  camera = new Camera(world);
  camera.scale = 2;

  /* define control */
  movekeys = {
    up: new KeyboardKey(38),
    down: new KeyboardKey(40),
    left: new KeyboardKey(37),
    right: new KeyboardKey(39)
  };

  /* BACKGROUND STUFF */


  let bgsprite = new PIXI.extras.TilingSprite(resources.bootlegstars.texture, 10000, 10000);
  bgsprite.position.set(-5000, -5000);
  bg.addChild(bgsprite);

  /* GUI STUFF */

  let temp = new CoolText("Hello fag this is Sample Textzt");
    temp.x = 50;
    temp.y = 50;
    gui.addChild(temp);
  temp = null;

  /* WORLD STUFF */

  /* add some debug walls */
  let walls = new Container();
  walls.sprites = Array.from(new Array(5), (x,i) => new Wall((64 + 6)*i,0));
  walls.sprites.forEach((w,i) => {
    walls.addChild(w);
  });
  walls.pivot.set(walls.width/2, walls.width/2);
  walls.position.set(0,0);
  world.addChild(walls);

  /* add some Safarik xDD */
  let safarik = new Sprite(resources.safarik.texture);
  safarik.position.set(-800, -800);
  world.addChild(safarik);

  /* define control */
  movekeys = {
    up: new KeyboardKey(38),
    down: new KeyboardKey(40),
    left: new KeyboardKey(37),
    right: new KeyboardKey(39)
  };

  /* create player */
  player = new Player(100,100, resources.roket.texture, movekeys);
  world.addChild(player);

  /* setup ticker */
  app.ticker.add(tick);

  /* start rendering */
  update();
}

function update() {
  requestAnimationFrame(update);
}

function tick(dt) {
  player.animateMovement(dt);
  player.move(dt);
  camera.follow(player);
  camera.followRotation(player);
  bg.centerTo(player);
  bg.rotateTo(player);
}
