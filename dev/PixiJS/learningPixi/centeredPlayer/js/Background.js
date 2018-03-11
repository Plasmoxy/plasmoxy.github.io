class Background extends Container {

  constructor(parallax) {
    super();
    this.parallax = parallax;
    this.defaultScale = 1;
    this.scale.set(this.defaultScale, this.defaultScale);
  }

  centerTo(c) {
    /* same as World class, just add paralax */
    this.pivot.x = this.parallax * c.position.x;
    this.pivot.y = this.parallax * c.position.y;
    this.position.x = app.renderer.width/2;
    this.position.y = app.renderer.height/2;
  }

  rotateTo(directionContainer) {
    this.rotation = - (directionContainer.direction + Math.PI/2);
  }

}
