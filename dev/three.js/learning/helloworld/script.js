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
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  wireframe: true
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//render
function update() {
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.01;
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
