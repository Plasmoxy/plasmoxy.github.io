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

    this.targetSpeed = 100;
    this.targetav = Math.PI;
  }

  setKeys(keys) {

    // btw remember the coordinate system is different than normal my dude
    keys.up.pressed = () => { this.speed += this.targetSpeed};
    keys.up.released = () => { this.speed -= this.targetSpeed};

    keys.down.pressed = () => { this.speed -= this.targetSpeed};
    keys.down.released = () => { this.speed += this.targetSpeed };

    keys.left.pressed = () => { this.av -= this.targetav };
    keys.left.released = () => { this.av += this.targetav};

    keys.right.pressed = () => { this.av += this.targetav };
    keys.right.released = () => { this.av -= this.targetav };
  }

  move(dt) {
    this.v.x = Math.cos(this.direction)*this.speed;
    this.v.y = Math.sin(this.direction)*this.speed;

    this.position.x += this.v.x * (dt/60);
    this.position.y += this.v.y * (dt/60);

    this.direction += this.av * (dt/60);
    console.log(this.rotation);

    // rotate sprite to the right way
    this.rotation = this.direction + Math.PI/2;
  }
}
