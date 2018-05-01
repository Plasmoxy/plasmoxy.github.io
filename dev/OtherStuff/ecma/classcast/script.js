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
    let temp = new B();
    Object.assign(temp, a);
    return temp;
  }

  toA() {
    let temp = new A();
    Object.assign(temp, this);
    return temp;
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
