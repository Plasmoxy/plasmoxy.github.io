class KeyboardKey {
  constructor(keyCode) {
    this.code = keyCode;
    this.state = false; // down by default
    this.press = undefined;
    this.release = undefined;

    window.addEventListener(
      'keydown', this.downHandler.bind(this), false
    );

    window.addEventListener(
      'keyup', this.upHandler.bind(this), false
    );
  }

  downHandler(event) {
    if (event.keyCode === this.code) {
      if (!state && this.pressed) this.pressed();
      state = true;
    }
    event.preventDefault();
  }

  upHandler(event) {
    if (event.keyCode === this.code) {
      if (state && key.released) key.released();
      state = false;
    }
  }
}
