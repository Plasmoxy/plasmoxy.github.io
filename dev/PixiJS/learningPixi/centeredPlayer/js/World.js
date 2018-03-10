class World extends Container {

  constructor() {
    super();
  }

  centerTo(c) {
    /* set world origin to player position
     * IMPORTANT : this doesn't affect the world internal coordinate system,
     * it just changes the origin relative to parent (stage)
     */
    world.pivot.x = c.position.x;
    world.pivot.y = c.position.y;

    /* position the world to center of renderer
     * -> because of the pivot above, it will center the player too */
    world.position.x = app.renderer.width/2;
    world.position.y = app.renderer.height/2;
  }

  rotateTo(directionContainer) {
    world.rotation = -directionContainer.direction;
  }

}
