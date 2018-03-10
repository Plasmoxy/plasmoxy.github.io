class Player extends Sprite {
  constructor(x,y,texture) {
    super(texture);

    this.position.x = x;
    this.position.y = y;

    /* set anchor to center */
    this.anchor.set(0.5, 0.5);

    this.direction = -Math.PI/2; // global player direction, -Math.PI/2 means up, uses y-inverted unit circle angle logic
    this.v = new Victor(); // velocity vector
    this.av = 0; // angular velocity, radians per sec
    this.speed = 0; // px per sec

    this.speeda = 200; // speed acceleration, px per sec^2
    this.targetSpeed = 0;
    this.maxSpeed = 1000;

    this.targetav = Math.PI; // target angular velocity
  }

  setKeys(keys) {

    // btw remember the coordinate system is different than normal my dude
    keys.up.pressed = () => { this.targetSpeed += this.maxSpeed; };
    keys.up.released = () => { this.targetSpeed -= this.maxSpeed; };

    // decellerate twice as fast
    keys.down.pressed = () => { this.targetSpeed -= 2*this.maxSpeed; };
    keys.down.released = () => { this.targetSpeed += 2*this.maxSpeed; };

    keys.left.pressed = () => { this.av -= this.targetav };
    keys.left.released = () => { this.av += this.targetav };

    keys.right.pressed = () => { this.av += this.targetav };
    keys.right.released = () => { this.av -= this.targetav };
  }

  move(dt) {
    this.v.x = Math.cos(this.direction)*this.speed;
    this.v.y = Math.sin(this.direction)*this.speed;

    this.position.x += this.v.x * (dt/60);
    this.position.y += this.v.y * (dt/60);

    this.direction += this.av * (dt/60);

    // rotate sprite to the right way
    this.rotation = this.direction + Math.PI/2;
  }

  animateMovement(dt) {
    // animate the speed relative to targetSpeed
    if (this.speed < this.targetSpeed) this.speed += this.speeda * (dt/60);
    else if (this.speed > this.targetSpeed) this.speed -= this.speeda * (dt/60);

    // floor speed if its too low
    if (this.speed > 0 && this.speed < 1) this.speed = 0;
    else if (this.speed < 0 && this.speed > -1) this.speed = 0;
  }
}
