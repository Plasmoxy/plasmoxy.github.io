class Player extends Sprite {
  constructor(x,y,texture) {
    super(texture);

    this.position.x = x;
    this.position.y = y;

    /* set anchor to center */
    this.anchor.set(0.5, 0.5);

    this.scale.set(0.5, 0.5);

    this.direction = -Math.PI/2; // global player direction, -PI/2 means up, uses y-inverted unit circle angle logic
    this.v = new Victor(); // velocity vector

    this.speed = 0; // px per sec
    this.speeda = 200; // speed acceleration, px per sec^2
    this.targetSpeed = 0; // target speed, to which animator reacts
    this.maxSpeed = 1000; // limit the speed for animator

    this.aspeed = 0; // angular speed, radians per sec
    this.targetASpeed = 0; // target angular speed
    this.aspeeda = Math.PI*2; // angular speed acceleration, radians per sec^2
    this.maxASpeed = Math.PI*1; // maximal angular speed
  }

  setKeys(keys) {

    // lambdas were defined here, therefore this always refers to player object ? hmm
    /*
    // btw remember the coordinate system is different than normal my dude
    keys.up.pressed = () => { this.targetSpeed += this.maxSpeed; };
    keys.up.released = () => { this.targetSpeed -= this.maxSpeed; };

    // key decellerate twice as fast
    keys.down.pressed = () => { this.targetSpeed -= this.maxSpeed; };
    keys.down.released = () => { this.targetSpeed += this.maxSpeed; };

    keys.left.pressed = () => { this.targetASpeed -= this.maxASpeed; };
    keys.left.released = () => { this.targetASpeed += this.maxASpeed; };

    keys.right.pressed = () => { this.targetASpeed += this.maxASpeed; };
    keys.right.released = () => { this.targetASpeed -= this.maxASpeed; };

    */

  }

  move(dt) {

    /* I decided to go for conditional handling as for various bugs when using math input handling */

    this.targetSpeed = ( () => {
      let u = keys.up.state, d = keys.down.state;
           if (u && !d) return this.maxSpeed;
      else if (!u && d) return -this.maxSpeed;
      else if ( (u && d) || (!u && !d) ) return 0;
    })();

    this.targetASpeed = ( () => {
      let l = keys.left.state, r = keys.right.state;
           if (l && !r) return -this.maxASpeed;
      else if (!l && r) return this.maxASpeed;
      else if ( (l && r) || (!l && !r) ) return 0;
    })();

    this.v.x = Math.cos(this.direction)*this.speed;
    this.v.y = Math.sin(this.direction)*this.speed;

    this.position.x += this.v.x * (dt/60);
    this.position.y += this.v.y * (dt/60);

    this.direction += (this.aspeed * (dt/60));

    // rotate sprite to the right way
    this.rotation = this.direction + Math.PI/2;
  }

  animateMovement(dt) {
    /* speed */

    // animate the speed relative to targetSpeed
    if (this.speed < this.targetSpeed) this.speed += this.speeda * (dt/60);
    else if (this.speed > this.targetSpeed) this.speed -= this.speeda * (dt/60);

    // floor speed if its too low
    if (this.speed > 0 && this.speed < this.speeda * (dt/60)) this.speed = 0;
    else if (this.speed < 0 && this.speed > this.speeda * (dt/60)) this.speed = 0;

    /* angular speed */

    if (this.aspeed < this.targetASpeed) this.aspeed += this.aspeeda * (dt/60);
    else if (this.aspeed > this.targetASpeed) this.aspeed -= this.aspeeda * (dt/60);

    if (this.aspeed > 0 && this.aspeed < (dt/60)) this.aspeed = 0;
    else if (this.aspeed < 0 && this.aspeed > -(dt/60)) this.aspeed = 0;

    console.log('speed = ' + this.speed + ', aspeed = ' + this.aspeed);


  }
}
