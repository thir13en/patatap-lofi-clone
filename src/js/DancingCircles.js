import paper, { Tool, Point, Path } from 'paper';
import keymap from './keymap';


export default class DancingCircles {

  constructor () {
    this.scope = {};
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
    const tool = new Tool();
    tool.onKeyDown = this.onKeyDown.bind(this);
    paper.view.onFrame = this.onFrame.bind(this);
  }

  onKeyDown(event) {
    const sound = keymap[event.key].sound;
    const maxPoint = new Point(this.paper.view.size.width, this.paper.view.size.height);
    const randomPoint = new Point.random();
    const point = maxPoint.multiply(randomPoint);
    const circle = new Path.Circle(point, 333);

    circle.fillColor = keymap[event.key].color;
    sound.play(undefined, false);
    this.circles.push(circle);
  }

  onFrame() {
    this.circles.forEach(circle => {
      circle.fillColor.hue += 1;
      circle.scale('.9');
    });
  }

}
