class Player extends Sprite {
  constructor(x,y,texture) {
    super(texture);

    this.position.x = x;
    this.position.y = y;

    /* set anchor to center */
    this.anchor.set(0.5, 0.5);

    /* velocity vector*/
    this.v = new Victor();
    this.dir = 0; // direction
    this.speed = 300; // px per sec
  }

  setKeys(keys) {

    // btw I'm substracting y on up because of the weird coordinate system
    keys.up.pressed = () => { this.v.y -= this.speed; };
    keys.up.released = () => { this.v.y += this.speed; };

    keys.down.pressed = () => {this.v.y += this.speed; };
    keys.down.released = () => {this.v.y -= this.speed; };

    keys.left.pressed = () => {this.v.x -= this.speed; };
    keys.left.released = () => {this.v.x += this.speed; };

    keys.right.pressed = () => {this.v.x += this.speed; };
    keys.right.released = () => {this.v.x -= this.speed; };
  }

  move(dt) {
    this.position.x += (this.v.x/60)*dt;
    this.position.y += (this.v.y/60)*dt;
  }
}
