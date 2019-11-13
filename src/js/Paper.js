import paper from 'paper'
import { Howl } from 'howler'

export default class PaperBase {
  constructor () {
  // this.sound = new Howl({
  //   src: ['sounds/bubbles.mp3']
  // });
  //   this.circles = []
  //   this.canvas = document.getElementById('myCanvas')
  //   this.scope = {}
  //   paper.install(this.scope)
  //   paper.setup(this.canvas)
  //   this.paper = this.scope.paper
  //   this.addEvents()
  // }
  //
  // addEvents () {
  //   const tool = new this.paper.Tool()
  //   tool.onKeyDown = this.onKeyDown.bind(this)
  //   paper.view.onFrame = this.onFrame.bind(this)
  // }
  //
  // onKeyDown (event) {
  //   // this.sound.play()
  //   const maxPoint = new paper.Point(this.paper.view.size.width, this.paper.view.size.height);
  //   const randomPoint = new paper.Point.random()
  //   const point = maxPoint * randomPoint
  //
  //   const circle = new paper.Path.Circle(point, 333)
  //   circle.fillColor = 'red'
  //   this.circles.push(maxPoint)
  // }
  //
  // onFrame (event) {
  //   this.circles.forEach(circle => {
  //     circle.fillColor.hue += 1
  //     circle.scale('.9')
  //   })
  // }
  //
  // addEvent (object, type, callback) {
  //   if (object == null || typeof (object) === 'undefined') return
  //   if (object.addEventListener) {
  //     object.addEventListener(type, callback, false)
  //   } else if (object.attachEvent) {
  //     object.attachEvent('on' + type, callback)
  //   } else {
  //     object['on' + type] = callback
  //   }
  // }
}
