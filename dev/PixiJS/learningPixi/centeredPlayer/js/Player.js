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
    this.speed = 50; // px per sec
  }
}
