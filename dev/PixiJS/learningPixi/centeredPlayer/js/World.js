class World extends Container {

  constructor() {
    super();
  }

  centerTo(player) {
    /* set world origin to player position
     * this doesn't affect the world coordinate system,
     * it just changes the origin relative to parent (stage)
     */
    world.pivot.x = player.position.x;
    world.pivot.y = player.position.y;

    /* position the world to center of renderer
     * -> because of the pivot above, it will center the player too */
    world.position.x = app.renderer.width/2;
    world.position.y = app.renderer.height/2;
  }

}
