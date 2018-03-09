class Player extends Sprite {
  constructor(texture) {
    super(texture);

    /* bind references to simpler notation */
    this.x = this.position.x;
    this.y = this.position.y;

    /* set anchor to center */
    this.anchor.set(0.5, 0.5);

    /* velocity vector*/
    this.v = new Victor();
  }
}
