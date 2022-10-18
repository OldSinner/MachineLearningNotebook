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
  static Multiply(matrix: MatrixMath, scalar: number | MatrixMath): MatrixMath {
    if (scalar instanceof MatrixMath) {
      if (matrix.cols != scalar.rows) {
        throw new Error('Columns of A must match rows of B.')
      }

      var result = new MatrixMath(matrix.rows, scalar.cols)

      for (let i = 0; i < result.rows; i++) {
        for (let j = 0; j < result.cols; j++) {
          let sum = 0
          for (let k = 0; k < matrix.cols; k++) {
            sum += matrix[i][k] * scalar[k][j]
          }
          result[i][j] = sum
        }
      }

      return result
    } else {
      var newMatrix = matrix.clone()

      for (let i = 0; i < newMatrix.rows; i++) {
        for (let j = 0; j < newMatrix.cols; j++) {
          newMatrix[i][j] *= scalar
        }
      }

      return newMatrix
    }
  }

  ///////////////////////////
  static Add(matrix: MatrixMath, scalar: number | MatrixMath): MatrixMath {
    var newMatrix = matrix.clone()

    if (scalar instanceof MatrixMath) {
      if (scalar.cols != newMatrix.cols || scalar.rows != newMatrix.rows) {
        throw new Error(
          'Columns and Rows of A must match Columns and Rows of B.',
        )
      }
    }

    for (let i = 0; i < newMatrix.rows; i++) {
      for (let j = 0; j < newMatrix.cols; j++) {
        newMatrix[i][j] += scalar instanceof MatrixMath ? scalar[i][j] : scalar
      }
    }
    return newMatrix
  }

  ///////////////////////////
  static Transpose(matrix: MatrixMath): MatrixMath {
    var result = new MatrixMath(matrix.cols, matrix.rows)
    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.cols; j++) {
        result[j][i] = matrix[i][j]
      }
    }
    return result
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
  ///////////////////////////
  clone(): MatrixMath {
    return JSON.parse(JSON.stringify(this))
  }
}
