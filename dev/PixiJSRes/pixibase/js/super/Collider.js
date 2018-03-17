
class Collider {

  // collider is attached to an entity
  constructor(ent) {
    this.ent = ent;
  }

  // t = target entity
  detect(dt, t) {}

  setupDebug() {

  }
  // this should display
  debug() {
    this.debugGraphics = new PIXI.Graphics;
    this.debugGraphics.lineStyle(2, 0xFF0000, 1);
    this.ent.addChild(this.debugGraphics);
  }

}
