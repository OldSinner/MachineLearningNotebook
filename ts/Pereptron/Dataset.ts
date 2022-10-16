export default class Dataset {}
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
