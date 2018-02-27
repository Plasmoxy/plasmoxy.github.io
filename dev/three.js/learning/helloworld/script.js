console.log('< BEGIN script.js >');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

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
  forward: false,
  backward: false
};

var canMove = {
  up: true,
  down: true,
  left: true,
  right: true,
  forward: true,
  backward: true
};


var roomGeometry = new THREE.BoxGeometry(3, 3, 3);
var roomMaterial = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  wireframe: true
});
var room = new THREE.Mesh(roomGeometry, roomMaterial);

var cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ffc9,
  wireframe: true
});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

var geometry = new THREE.PlaneGeometry( 8, 8, 1);
var material = new THREE.MeshBasicMaterial( {color: 0x555555, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
plane.rotation.x = Math.PI/2;
plane.position.y = room.position.y - (new THREE.Box3().setFromObject( room )).getSize().y/2 - 0.01;

var geo = new THREE.EdgesGeometry( roomGeometry );

var mat = new THREE.LineBasicMaterial( { color: 0xFFFFFF, linewidth: 2 } );

var wireframe = new THREE.LineSegments( geo, mat );

scene.add( wireframe );

scene.add(cube);
scene.add( plane );

//render
function update() {
  if (keys.up && canMove.up) cube.position.y += 0.05;
  if (keys.down && canMove.down) cube.position.y -= 0.05;
  if (keys.right && canMove.right) cube.position.x += 0.05;
  if (keys.left && canMove.left) cube.position.x -= 0.05;
  if (keys.forward && canMove.forward) cube.position.z -= 0.05;
  if (keys.backward && canMove.backward) cube.position.z += 0.05;

  var cubeB = new THREE.Box3().setFromObject( cube );
  var roomB = new THREE.Box3().setFromObject( room );
  var c = cube.position, cs = cubeB.getSize();
  var r = room.position, rs = roomB.getSize();

  if ( (c.x + cs.x/2) >= (r.x + rs.x/2) ) canMove.right = false;
  else canMove.right = true;

  if ( (c.x - cs.x/2) <= (r.x - rs.x/2) ) canMove.left = false;
  else canMove.left = true;

  if ( (c.y + cs.y/2) >= (r.y - rs.y/2) ) canMove.up = false;
  else canMove.up = true;

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
    case 69: keys.up = true; break;
    case 81: keys.down = true; break;
    case 65: keys.left = true; break;
    case 68: keys.right = true; break;
    case 87: keys.forward = true; break;
    case 83: keys.backward = true; break;
  }
}

function keyUp(event) {
  switch(event.which) {
    case 69: keys.up = false; break;
    case 81: keys.down = false; break;
    case 65: keys.left = false; break;
    case 68: keys.right = false; break;
    case 87: keys.forward = false; break;
    case 83: keys.backward = false; break;
  }
}

document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyup', keyUp, false);

loop();
