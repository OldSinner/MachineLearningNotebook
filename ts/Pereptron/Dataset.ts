export default class Dataset {
  points: Point[]
  constructor(numberOfPoints: number) {
    this.points = Array(numberOfPoints)
    for (let i = 0; i < this.points.length; i++) {
      this.points[i] = new Point(random(0, width), random(0, height))
    }
  }
}
export class Point {
  x: number
  y: number
  label: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.label = x < y ? 1 : -1
  }
  show() {
    push()
    this.label === 1 ? fill(66, 135, 245) : fill(255, 13, 0)
    ellipse(this.x, this.y, 8, 8)
    pop()
  }
}
