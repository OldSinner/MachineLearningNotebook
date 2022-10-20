import Neuralnetwork from './Modules/Brain/NeuralNetwork.js'
var nn = new Neuralnetwork(2, [2, 2, 1])
var inputs = [1, 2]
var targets = [1]

nn.Train(inputs, targets)
