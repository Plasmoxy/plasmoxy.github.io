class World extends Container {

  constructor() {
    super();
  }

  centerTo(c) {
    /* set world origin to player position
     * IMPORTANT : this doesn't affect the world internal coordinate system,
     * it just changes the origin relative to parent (stage)
     */
    this.pivot.x = c.position.x;
    this.pivot.y = c.position.y;

    /* position the world to center of renderer
     * -> because of the pivot above, it will center the player too */
    this.position.x = app.renderer.width/2;
    this.position.y = app.renderer.height/2;
  }

  rotateTo(directionContainer) {
    this.rotation = - (directionContainer.direction + Math.PI/2);
  }

  scaleTo(player) {
    let sc = (2 - (player.speed/player.maxSpeed)) - 1;
    this.scale.set(sc, sc);
  }

}
