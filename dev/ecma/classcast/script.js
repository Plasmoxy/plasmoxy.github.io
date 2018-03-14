class A { // pure data class for transfer
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
}


class B extends A { // augmented class for performance

  constructor(id,x,y) {
    super(id,x,y);
    this.bonus = 44;
  }

  static fromA(a) {
    return new B(a.id, a.x, a.y);
  }

  toA() {
    return new A(this.id, this.x, this.y)
  }

  print() {
    console.log('<B> -> ' + this.id + ' ' + this.x + ' ' + this.y);
  }

}

let p = new A("XD",2,3);
console.log(p); // shows only simple A data class

let g = B.fromA(p);
console.log(g); // shows complete B class with print function
g.print();

let q = g.toA(); // back to A
console.log(q);
