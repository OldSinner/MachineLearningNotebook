import MatrixMath from './Modules/Math/MatrixMath.js'

var matrix = new MatrixMath(3, 3)
var matrix2 = new MatrixMath(3, 3)
matrix.Randomize()
matrix2.Randomize()
console.table(MatrixMath.Add(matrix, matrix2))
console.table(MatrixMath.Add(matrix, 5))
console.table(MatrixMath.Multiply(matrix, matrix2))
console.table(MatrixMath.Multiply(matrix, 5))
console.table(MatrixMath.Transpose(matrix))
