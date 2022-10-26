import { MapToCanvas, MAX_VALUE, MIN_VALUE } from '../../Utils/P5Utils/Utils.js'

export class Data_2D {
  points: Point[]
  constructor(
    numberOfPoints: number,
    decider: (x: number, y: number) => number,
  ) {
    this.points = []
    for (let i = 0; i < numberOfPoints; i++) {
      let x = random(MIN_VALUE, MAX_VALUE)
      let y = random(MIN_VALUE, MAX_VALUE)
      let label = decider(x, y)
      this.points.push(new Point(x, y, label))
    }
  }
}

export class Point {
  x: number
  y: number
  label: number
  constructor(x: number, y: number, label: number) {
    this.x = x
    this.y = y
    this.label = label
  }
  draw() {
    const [drawx, drawy] = MapToCanvas(this.x, this.y)
  }
}
