import { MapToCanvas } from './Utils.js'

export default class Dataset {
  points: Point[]
  fun: Function
  constructor(
    numberOfPoints: number,
    fun: Function = (x: number, y: number) => y,
  ) {
    this.points = Array(numberOfPoints)
    for (let i = 0; i < this.points.length; i++) {
      this.points[i] = new Point(random(-1, 1), random(-1, 1), fun)
    }
  }
}
export class Point {
  x: number
  y: number
  target: number
  constructor(x: number, y: number, fun: Function) {
    this.x = x
    this.y = y
    this.target = fun(x, y) >= y ? 1 : -1
  }
  show(rgb: { r: number; g: number; b: number } = { r: 0, g: 0, b: 0 }) {
    push()
    stroke(rgb.r, rgb.g, rgb.b)
    var [px, py] = MapToCanvas(this.x, this.y)
    this.target === 1 ? fill(66, 135, 245) : fill(255, 13, 0)
    ellipse(px, py, 10, 10)
    pop()
  }
}
