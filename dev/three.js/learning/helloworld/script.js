console.log('< BEGIN script.js >');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//dvar controls = new THREE.OrbitControls(camera, renderer.domElement);

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

// --- PROTOTYPES ---

function Room() {
  this.geo = new THREE.BoxGeometry(3, 3, 3);
  this.mat = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    wireframe: true
  });
  this.obj = new THREE.Mesh(this.geo, this.mat);
  this.box = function() {
    return new THREE.Box3().setFromObject( this.obj );
  };
  this.position = this.obj.position;
  this.rotation = this.obj.rotation;
};

function Cube() {
  this.geo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  this.mat = new THREE.MeshBasicMaterial({
    color: 0x00ffc9,
    wireframe: true
  });
  this.obj = new THREE.Mesh(this.geo, this.mat);
  this.box = function() {
    return new THREE.Box3().setFromObject( this.obj );
  };

  this.position = this.obj.position;
  this.rotation = this.obj.rotation;
}

function EdgeWireframe(augmentedObject, _color, _linewidth) {
  this.geo = new THREE.EdgesGeometry( augmentedObject.geo );
  this.mat = new THREE.LineBasicMaterial( { color: _color, linewidth: _linewidth } );
  this.obj = new THREE.LineSegments( this.geo, this.mat );
}

function Plane() {
  this.geo = new THREE.PlaneGeometry( 8, 8, 1);
  this.mat =  new THREE.MeshBasicMaterial( {
    color: 0x555555,
    side: THREE.DoubleSide
  });
  this.obj =  new THREE.Mesh( this.geo, this.mat );
  this.box = function() {
    return new THREE.Box3().setFromObject( this.obj );
  };

  this.position = this.obj.position;
  this.rotation = this.obj.rotation;
}

// -- OBJECTS --

var room = new Room();
var roomFrame = new EdgeWireframe(room, room.mat.color, 2);

var cube = new Cube();
var cubeFrame = new EdgeWireframe(cube, cube.mat.color, 2);
var plane = new Plane();

// move plane to bot
plane.rotation.x = Math.PI/2;
plane.position.y = room.position.y - room.box().getSize().y/2 - 0.01;

scene.add(roomFrame.obj);
scene.add(cube.obj);
scene.add(plane.obj);

//render
function update() {

  if (keys.up && canMove.up) cube.position.y += 0.05;
  if (keys.down && canMove.down) cube.position.y -= 0.05;
  if (keys.right && canMove.right) cube.position.x += 0.05;
  if (keys.left && canMove.left) cube.position.x -= 0.05;
  if (keys.forward && canMove.forward) cube.position.z -= 0.05;
  if (keys.backward && canMove.backward) cube.position.z += 0.05;

  var c = cube.position, cs = cube.box().getSize();
  var r = room.position, rs = room.box().getSize();

  if ( (c.x + cs.x/2) >= (r.x + rs.x/2) ) canMove.right = false;
  else canMove.right = true;

  if ( (c.x - cs.x/2) <= (r.x - rs.x/2) ) canMove.left = false;
  else canMove.left = true;

  if ( (c.y + cs.y/2) >= (r.y + rs.y/2) ) canMove.up = false;
  else canMove.up = true;

  if ( (c.y - cs.y/2) <= (r.y - rs.y/2) ) canMove.down = false;
  else canMove.down = true;

  if ( (c.z - cs.z/2) <= (r.z - rs.z/2) ) canMove.forward = false;
  else canMove.forward = true;

  if ( (c.z + cs.z/2) >= (r.z + rs.z/2) ) canMove.backward = false;
  else canMove.backward = true;

  camera.position.x = cube.position.x + 0.5;
  camera.position.y = cube.position.y;
  camera.position.z = cube.position.z + 1;

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
