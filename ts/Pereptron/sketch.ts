import Perceptron from './Perceptron.js'
var p: Perceptron
function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10)
  background(1)
  p = new Perceptron(2)
  var result = p.Calculate([1, 1])
  console.log(result)
}

function draw() {
  background(0, 20)
}

window.setup = setup
window.draw = draw
