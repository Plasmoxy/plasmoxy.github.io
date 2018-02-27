console.log('< BEGINNING script.js >');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width/height;
  camera.updateProjectionMatrix();
});


camera.position.z = 3;
scene.background = new THREE.Color(0x111111);

var keys = {
  up: false,
  down: false,
  left: false,
  right: false,
  w: false,
  s: false
};

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  wireframe: true
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//render
function update() {
  if (keys.up) cube.position.y += 0.05;
  if (keys.down) cube.position.y -= 0.05;
  if (keys.right) cube.position.x += 0.05;
  if (keys.left) cube.position.x -= 0.05;
  if (keys.w) cube.position.z -= 0.05;
  if (keys.s) cube.position.z += 0.05;
}

function render() {
  renderer.render(scene, camera);
}

function loop() {
  requestAnimationFrame(loop);
  update();
  render();
}

function keyDown(event) {
  switch(event.which) {
    case 38: keys.up = true; break;
    case 40: keys.down = true; break;
    case 37: keys.left = true; break;
    case 39: keys.right = true; break;
    case 87: keys.w = true; break;
    case 83: keys.s = true; break;
  }
}

function keyUp(event) {
  switch(event.which) {
    case 38: keys.up = false; break;
    case 40: keys.down = false; break;
    case 37: keys.left = false; break;
    case 39: keys.right = false; break;
    case 87: keys.w = false; break;
    case 83: keys.s = false; break;
  }
}

document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyup', keyUp, false);

loop();
