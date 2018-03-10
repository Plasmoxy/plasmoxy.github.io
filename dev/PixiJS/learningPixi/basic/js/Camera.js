/* simple camera reference controller for a stage Container */

class Camera {
  constructor(container) {
    this.c = container;
    this.v = new Victor(); // velocity
    this.speed = 5;
  }
  move(dt) {

    this.c.position.x -= this.v.x*dt;
    this.c.position.y += this.v.y*dt; // y is already inverted in right way
  }

  linkControlHandlers(keys) {
    keys.up.pressed = () => { this.v.y += this.speed; };
    keys.up.released = () => { this.v.y -= this.speed; };

    keys.down.pressed = () => {this.v.y -= this.speed; };
    keys.down.released = () => {this.v.y += this.speed; };

    keys.left.pressed = () => {this.v.x -= this.speed; };
    keys.left.released = () => {this.v.x += this.speed; };

    keys.right.pressed = () => {this.v.x += this.speed; };
    keys.right.released = () => {this.v.x -= this.speed; };
  }
}
