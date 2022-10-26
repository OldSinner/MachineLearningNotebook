import { MapToCanvas, MAX_VALUE, MIN_VALUE } from './Utils.js'

export default class Perceptron {
  weights: number[]
  lr: number = 0.01
  biasWeight: number
  constructor(numberOfWeight: number) {
    this.weights = Array(numberOfWeight)
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1, 1)
    }
    this.biasWeight = random(-1, 1)
  }
  Calculate(inputs: number[]) {
    if (inputs.length > this.weights.length) {
      throw 'Number of inputs must be equal to number of weights'
    }
    let sum = 0
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i]
    }
    sum += this.biasWeight * 1
    return this.Activate(sum)
  }
  Activate(sum: number) {
    return sum >= 0 ? 1 : -1
  }
  // Tune the weights to fit the inputs
  Train(inputs: number[], target: number) {
    let guess = this.Calculate(inputs)
    let error = target - guess
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * inputs[i] * this.lr
    }
    this.biasWeight += error * this.lr
  }
  GuessY(x: number) {
    return (
      -(this.biasWeight / this.weights[1]) -
      (this.weights[0] / this.weights[1]) * x
    )
  }
  DrawPredictionline() {
    var [x1, y1] = MapToCanvas(MIN_VALUE, this.GuessY(MIN_VALUE))
    var [x2, y2] = MapToCanvas(MAX_VALUE / 2, this.GuessY(MAX_VALUE / 2))
    var [x3, y3] = MapToCanvas(MAX_VALUE, this.GuessY(MAX_VALUE))
    line(x1, y1, x2, y2)
    line(x2, y2, x3, y3)
  }
}
