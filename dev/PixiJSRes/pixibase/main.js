/* pixibase by Plasmoxy */
/* uses my pixialiases.js snippet for shorter names */

console.log('--- The amazing Plasmoxy\'s game engine for Pixi, written in less than 20 days lmao ---');

let fmeter = new FPSMeter();

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

app.renderer.backgroundColor = 0x111111;

function loadProgressHandler(ldr, res) { // loader, resource
  console.log('LOADING [ '+Math.round(ldr.progress)+'% ] : ' + res.name + ' -> ' + res.url);
}

/* define game variables */
let bg, world, gui, camera, mkeys; // basic

let a,b;
let dcontroller;

/* PIXI loader */

let resDef = [
  ['rk', '/assets/sprites/aquaroket.png']
];

resDef.forEach(t => {
  loader.add(t[0], t[1]);
});

loader
  .on('progress', loadProgressHandler)
  .load(setup)
;

function setup() {

  /* hide loading and show app */
  document.getElementById('loading').style.display = 'none';
  app.view.style.display = "block";

  /* INIT CONTAINERS - order is important ! */
  world = new World(); app.stage.addChild(world);
  gui = new Gui(); app.stage.addChild(gui);

  // link camera to world
  camera = new Camera(world);

  /* define control */
  mkeys = {
    up: new KeyboardKey(38),
    down: new KeyboardKey(40),
    left: new KeyboardKey(37),
    right: new KeyboardKey(39)
  };


  /* -- INIT GAME --- */

  a = new Entity('A', resources.rk.texture);
  a.collider = new BoxCollider(a, 200, 200);
  a.collider.debug();
  a.colliding = (dt, t, dx, dy, ang) => {
    console.log('COLLISION : ' + a.id + ' -> ' + t.id + ' : ' + ang*180/Math.PI);
    a.x += 5*Math.sin(ang);
    a.y += 5*Math.cos(ang);
  };
  world.addChild(a);

  b = new Entity('B', resources.rk.texture);
  b.y = 100;
  b.collider = new BoxCollider(b, b.width, b.height);
  b.collider.debug();
  world.addChild(b);

  c = new Entity('C', resources.rk.texture);
  c.y = 150;
  c.collider = new BoxCollider(c, c.width, c.height);
  c.collider.debug();
  world.addChild(c);

  dcontroller = new DebugEntityController(mkeys, a, 5);

  /* --- end INIT GAME ---*/

  /* setup ticker */
  app.ticker.add(tick);
  /* start rendering */
  update();
}

function update() {
  requestAnimationFrame(update);
  if ( fmeter ) fmeter.tick()
}

function tick(dt) {
  dcontroller.update(dt);
  a.collider.detect(dt, b);
  a.collider.detect(dt, c);
}

// add some other listeners in the end

window.addEventListener('resize', function() {
  w = window.innerWidth;
  h = window.innerHeight;

  console.log(app.renderer.view.style.width)

  app.renderer.view.style.width = w + "px";
  app.renderer.view.style.height = h + "px";
  app.renderer.resize(w,h);
  camera.centerToRenderer();
});
