class Fak extends PIXI.Sprite {
  constructor() {
    super(PIXI.loader.resources['fak'].texture);
    this.scale.set(0.5, 0.5);
    this.anchor.set(0.5, 0.5);

    this.velocity = new Victor(); /* lmao such vector name xD, very nice vector cus it gives also rotation */
    this.target = new Victor();
  }

  center() {
    this.x = renderer.width / 2;
    this.y = renderer.height / 2;
  }

  rotateToVelocity() {
    this.rotation = this.velocity.direction() + Math.PI/2;
  }

  headToTarget() {
    this.velocity.x = (this.target.x - this.position.x)/2;
    this.velocity.y = (this.target.y - this.position.y)/2;
  }

  move() {
    this.x += this.velocity.x/50;
    this.y += this.velocity.y/50;
  }
}
