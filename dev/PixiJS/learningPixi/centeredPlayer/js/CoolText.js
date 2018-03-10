class CoolText extends Text {

  constructor(t) {
    let style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 30,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fill: ['#00f7ff']
    });
    super(t,style);
  }

}
