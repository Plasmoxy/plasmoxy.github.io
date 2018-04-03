
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];
  }
  
  update() {
    this.x += random(-30, 30);
    this.y += random(-30, 30);
    
    if (this.x > width) this.x -= 20;
    if (this.y > height) this.y -= 20;
    if (this.x < 0) this.x += 20;
    if (this.y < 0) this.y += 20;
    
    this.history.push(createVector(this.x, this.y));
    
    if (this.history.length > 25) {
      this.history.splice(0, 1);
    }
  }
  
  draw() {
    
    noStroke();
    fill(0, 200);
    for (let v of this.history) {
      ellipse(v.x, v.y, 30, 30);
    }

    fill(0);
    ellipse(this.x, this.y, 40, 40);
    
    
  }
  
}
