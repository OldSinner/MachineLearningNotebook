import Neuralnetwork from './Modules/Brain/NeuralNetwork.js'
import MatrixMath from './Modules/Math/MatrixMath.js'
var nn = new Neuralnetwork(2, 2, 1)
var x = new MatrixMath(2, 1)
var inputs = [1, 0]
var outputs = nn.FeedForward(inputs)
console.log(outputs)
