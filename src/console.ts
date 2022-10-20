import Neuralnetwork from './Modules/Brain/NeuralNetwork.js'
var nn = new Neuralnetwork(2, [2, 1, 2, 1])
var inputs = [1, 0]
var outputs = nn.FeedForward(inputs)
console.log(outputs)
