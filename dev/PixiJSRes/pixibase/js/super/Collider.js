
class Collider {

  // collider is attached to an entity
  constructor(ent) {
    this.ent = ent;
  }

  // t = target entity
  detect(dt, t) {}
  
  // this setups the debug graphics, call super.debug() on override to save 3 lines of code lmao
  debug() {
    this.debugGraphics = new PIXI.Graphics;
    this.debugGraphics.lineStyle(2, 0xFF0000, 1);
    this.ent.addChild(this.debugGraphics);
  }

}
