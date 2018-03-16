
class BoxCollider extends Collider {

  constructor(ent) {
    super(ent);
    this.ent = ent;

    this.w = ent.width;
    this.h = ent.height;
  }


  detect(t) {
    let tcl = t.collider;
    if ( tcl instanceof BoxCollider ) {

      if (
        ( Math.abs(this.ent.x - t.x)*2 < (this.w + tcl.w) ) &&
        ( Math.abs(this.ent.y - t.y)*2 < (this.h + tcl.h) )
      ) console.log('COL');

    }
  }

}
