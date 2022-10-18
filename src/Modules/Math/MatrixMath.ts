export default class MatrixMath {
  rows: number
  cols: number;
  [n: number]: number[]
  ///////////////////////////
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
  ///////////////////////////
  ScalarMultiply(scalar: number): MatrixMath {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this[i][j] *= scalar
      }
    }
    return this
  }
  ///////////////////////////
  Add(scalar: number | MatrixMath): MatrixMath {
    if (scalar instanceof MatrixMath) {
      if (scalar.cols != this.cols || scalar.rows != this.rows) {
        throw new Error(
          'Columns and Rows of A must match Columns and Rows of B.',
        )
      }
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this[i][j] += scalar instanceof MatrixMath ? scalar[i][j] : scalar
      }
    }
    return this
  }
  ///////////////////////////
  Randomize(): MatrixMath {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this[i][j] = Math.floor(Math.random() * 10)
      }
    }
    return this
  }
}
