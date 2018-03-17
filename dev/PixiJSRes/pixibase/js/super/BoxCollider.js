
class BoxCollider extends Collider {

  constructor(ent) {
    super(ent);
    this.ent = ent;

    this.w = ent.width;
    this.h = ent.height;
  }


  detect(dt, t) { // delta time, target
    let tcl = t.collider, angle;
    let dx = this.ent.x - t.x;
    let dy = this.ent.y - t.y;
    if ( tcl instanceof BoxCollider ) {

      if (
        ( Math.abs(dx)*2 < (this.w + tcl.w) ) &&
        ( Math.abs(dy)*2 < (this.h + tcl.h) )
      ){
        /* !! -> angle = at what angle is THIS entity colliding with TARGET entity ?
         * ( we're looking at this entity from perspective of target entity )
         */
        angle = Math.atan2(dx, dy);
        this.ent.colliding(dt, t, dx, dy, angle);
      }
    }
  }

}