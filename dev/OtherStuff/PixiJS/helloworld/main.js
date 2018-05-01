var MOBILE = window.mobileAndTabletCheck();

/* setup renderer */
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
  transparent: false,
  resolution: 1
});
renderer.backgroundColor = 0x111111;
document.getElementById('display').appendChild(renderer.view); // append renderer to display div


var stage = new PIXI.Container();
var ticker = new PIXI.ticker.Ticker();

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

  if(!MOBILE) window.addEventListener('mousemove', function(e) {
    fak.target.x = e.pageX;
    fak.target.y = e.pageY;
  });

  if(MOBILE) document.body.addEventListener('touchstart', function(e){ // only on mobile
      var t = e.changedTouches;
      fak.target.x = t[0].pageX;
      fak.target.y = t[0].pageY;
  }, false)

  ticker.add(tick);
  ticker.start();
}

function update() {
  requestAnimationFrame(update);
  //console.log(fak.velocity.toString());

  renderer.render(stage);
}

function tick(dt) {
  fak.headToTarget();
  fak.rotateToVelocity();
  fak.move(dt);
}
