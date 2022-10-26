import { MapToCanvas, MAX_VALUE, MIN_VALUE } from '../../Utils/P5Utils/Utils.js'

export class Data_2D {
  data: Point[]
  constructor(
    numberOfPoints: number,
    decider: (x: number, y: number) => number,
  ) {
    this.data = []
    for (let i = 0; i < numberOfPoints; i++) {
      let x = random(MIN_VALUE, MAX_VALUE)
      let y = random(MIN_VALUE, MAX_VALUE)
      let label = decider(x, y)
      this.data.push(new Point(x, y, label, i))
    }
  }
  map(action: (x: number, y: number, guess: number) => number) {
    for (let i = 0; i < this.data.length; i++) {
      action(this.data[i].x, this.data[i].y, this.data[i].label)
    }
  }
}

export class Point {
  x: number
  y: number
  label: number
  id: number
  constructor(x: number, y: number, label: number, id: number) {
    this.x = x
    this.y = y
    this.label = label
    this.id = id
  }
}
