class Camera {
  constructor(c) {
    this.c = c;
  }

  follow(target) {
    /* set container origin to target position
     * IMPORTANT : this doesn't affect the internal container coordinate system,
     * it just changes the origin relative to parent.
     */
    this.c.pivot.x = target.position.x;
    this.c.pivot.y = target.position.y;

    /* position the camera to center of the renderer
     * -> because of the pivot above, the target will be in center too */
    this.c.position.x = app.renderer.width/2;
    this.c.position.y = app.renderer.height/2;
  }


  followRotation(directionContainer) {
    this.c.rotation = - (directionContainer.direction + Math.PI/2);
  }

}
