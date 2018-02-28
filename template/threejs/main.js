/* by Plasmoxy */
/* https://plasmoxy.github.io/ */

console.log('< BEGIN main.js >');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//var controls = new THREE.OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width/height;
  camera.updateProjectionMatrix();
});

// some basic stuff
camera.position.z = 3;
scene.background = new THREE.Color(0x111111);

//render
function update() {

}

function render() {
  renderer.render(scene, camera);
}

function loop() {
  requestAnimationFrame(loop);
  update();
  render();
}

loop();
