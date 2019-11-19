import paper from 'paper';
import { Howl } from 'howler';


export default class DancingCircles {

  constructor () {
    this.scope = {};
    this.sound = new Howl({ src: ['sounds/bubbles.mp3'] });
    this.circles = [];
    this.paperCanvas = document.getElementById('myCanvas');
    this.setupPaper();
    this.addEvents();
  }

  setupPaper() {
    paper.install(this.scope);
    paper.setup(this.paperCanvas);
    this.paper = this.scope.paper;
  }

  addEvents() {
    const tool = new this.paper.Tool();
    tool.onKeyDown = this.onKeyDown.bind(this);
    paper.view.onFrame = this.onFrame.bind(this);
  }

  onKeyDown() {
    const maxPoint = new paper.Point(this.paper.view.size.width, this.paper.view.size.height);
    const randomPoint = new paper.Point.random();
    const point = maxPoint.multiply(randomPoint);
    const circle = new paper.Path.Circle(point, 333);

    circle.fillColor = new paper.Color(1, 0, 0);
    this.sound.play(undefined, false);
    this.circles.push(circle);
  }

  onFrame() {
    this.circles.forEach(circle => {
      circle.fillColor.hue += 1;
      circle.scale('.9');
    });
  }

}
