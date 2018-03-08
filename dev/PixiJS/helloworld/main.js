PIXI.utils.sayHello();

/* setup renderer */
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
  transparent: false,
  resolution: 1
});
renderer.backgroundColor = 0x111111;
document.getElementById('display').appendChild(renderer.view); // append renderer to display div


var stage = new PIXI.Container();

PIXI.loader
  .add('fak', '/assets/img/bacc.jpg')
  .load(setup)
;

var fak;

function setup() {
  fak = new Fak();
  fak.center();

  stage.addChild(fak);
  renderer.render(stage);

  update(); // start render chain

  setInterval(function() {
    console.log('pos = '+fak.position.x+' '+fak.position.y+', v = '+fak.velocity+', tar = '+fak.target)
  }, 1000);

  /* add responsivity to renderer */
  window.addEventListener("resize", function() {
    renderer.resize(window.innerWidth, window.innerHeight);
  });

  window.addEventListener('mousemove', function(e) {
    fak.target.x = e.pageX;
    fak.target.y = e.pageY;
  });
}

function update() {
  requestAnimationFrame(update);

  fak.headToTarget();
  fak.rotateToVelocity();
  fak.move();
  //console.log(fak.velocity.toString());

  renderer.render(stage);
}
