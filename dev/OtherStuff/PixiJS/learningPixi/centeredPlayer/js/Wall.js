
class Wall extends Sprite {
  constructor(x,y) {
    let texture = resources.tileset.texture;
    texture.frame = new Rectangle(0,0,64,64);
    super(texture);
    this.position.x = x;
    this.position.y = y;
    this.v = new Victor();
  }
}
