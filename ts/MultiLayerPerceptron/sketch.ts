import NeuralNetwork from './NeuralNetwork'

var brain
function setup() {
  createCanvas(1000, 1000)
  brain = new NeuralNetwork(3, 4, 2)
}

function draw() {}

window.setup = setup
window.draw = draw
