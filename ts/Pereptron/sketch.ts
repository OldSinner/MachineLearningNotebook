import Dataset, { Point } from './Dataset.js'
import Perceptron from './Perceptron.js'
var p: Perceptron
var dataset: Dataset
var checkbox
function setup() {
  createCanvas(1000, 1000)
  p = new Perceptron(2)
  dataset = new Dataset(100)
  checkbox = createCheckbox('L', false)
}

function draw() {
  background(0)
  drawDivider()
  strokeWeight(2)
  // Train Perceptron
  dataset.points.forEach((point) => {
    //Train if Avalible
    if (checkbox.checked()) {
      p.Train([point.x, point.y], point.target)
    }
    // Show Point
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
window.mousePressed = () => {
  var point = new Point(mouseX, mouseY)
  dataset.points.push(point)
}

window.setup = setup
window.draw = draw
