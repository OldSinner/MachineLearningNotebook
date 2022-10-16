import Dataset, { Point } from './Dataset.js'
import Perceptron from './Perceptron.js'
import { MapToCanvas, MapToCaresian, MAX_VALUE, MIN_VALUE } from './Utils.js'
var p: Perceptron
var dataset: Dataset
var checkbox
const divideFunction = (x: number) => {
  return 2 * x + 0.1
}

function setup() {
  createCanvas(1000, 1000)
  p = new Perceptron(2)
  dataset = new Dataset(100, divideFunction)
  checkbox = createCheckbox('L', false)
}

function draw() {
  background(0)
  stroke(255)
  drawDivider()
  stroke(255, 0, 0)
  p.DrawPredictionline()
  strokeWeight(2)
  stroke(0)

  // Train Perceptron
  dataset.points.forEach((point) => {
    //Train if Avalible
    if (checkbox.checked()) {
      p.Train([point.x, point.y], point.target)
    }
    // Show Point
    var guess = p.Calculate([point.x, point.y])
    point.show(
      guess === point.target ? { r: 0, g: 0, b: 0 } : { r: 0, g: 0, b: 0 },
    )
  })
}
function drawDivider(min = MIN_VALUE, max = MAX_VALUE) {
  // line(width, 0, 0, height)
  var [x1, y1] = MapToCanvas(MIN_VALUE, divideFunction(MIN_VALUE))
  var [x2, y2] = MapToCanvas(MAX_VALUE, divideFunction(MAX_VALUE))
  line(x1, y1, x2, y2)
}
window.mousePressed = () => {
  var [px, py] = MapToCaresian(mouseX, mouseY)
  console.log(px, py)
  var point = new Point(px, py, divideFunction)
  dataset.points.push(point)
}

window.setup = setup
window.draw = draw
