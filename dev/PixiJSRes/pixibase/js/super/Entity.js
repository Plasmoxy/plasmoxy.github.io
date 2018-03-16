/* Entity class by Plasmoxy */

class Entity extends Container {

  get x() {return this.position.x;}
  set x(val) {this.position.x = val;}
  get y() {return this.position.y;}
  set y(val) {this.position.y = val;}

  constuctor(sprite_texture) {
    super()
    this.sprite = new Sprite(sprite_texture);
    this.sprite.anchor.set(0.5, 0.5);
  }

  update(dt) {

  }

}
