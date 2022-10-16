import Dataset from './Dataset.js'
import Perceptron from './Perceptron.js'
var p: Perceptron
var dataset: Dataset
function setup() {
  createCanvas(windowHeight - 10, windowHeight - 10)
  p = new Perceptron(2)
  dataset = new Dataset(100)
}

function draw() {
  background(0)
  drawDivider()
  strokeWeight(2)
  // Train Perceptron
  dataset.points.forEach((point) => {
    p.Train([point.x, point.y], point.target)
    var guess = p.Calculate([point.x, point.y])
    point.show(
      guess === point.target ? { r: 0, g: 255, b: 0 } : { r: 0, g: 0, b: 0 },
    )
  })
}
function drawDivider() {
  stroke(255)
  line(0, 0, width, height)
  stroke(0)
}

window.setup = setup
window.draw = draw
