export default class MatrixMath {
  rows: number
  cols: number;
  [n: number]: number[]
  constructor(rows: number, cols: number) {
    this.rows = rows
    this.cols = cols

    for (let i = 0; i < this.rows; i++) {
      this[i] = []
      for (let j = 0; j < this.cols; j++) {
        this[i][j] = 0
      }
    }
  }

  ScalarMultiply(scalar: number) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this[i][j] *= scalar
      }
    }
  }
  ScalarAdd(scalar: number) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this[i][j] += scalar
      }
    }
  }
}
