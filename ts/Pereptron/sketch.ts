import Dataset from './Dataset.js'
import Perceptron from './Perceptron.js'
var p: Perceptron
var dataset: Dataset
function setup() {
  createCanvas(windowHeight - 10, windowHeight - 10)
  background(1)
  p = new Perceptron(2)
  dataset = new Dataset(100)
  var result = p.Calculate([1, 1])
  console.log(result)
}

function draw() {
  background(0, 20)
  dataset.points.forEach((point) => point.show())
  stroke(255)
  line(0, 0, width, height)
  stroke(0)
}

window.setup = setup
window.draw = draw
