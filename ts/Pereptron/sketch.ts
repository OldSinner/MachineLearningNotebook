import Perceptron from './Perceptron.js'
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(1)
  var x = new Perceptron()
}

function draw() {
  background(0, 20)
  circle(mouseX, mouseY, 100)
}

window.setup = setup
window.draw = draw
