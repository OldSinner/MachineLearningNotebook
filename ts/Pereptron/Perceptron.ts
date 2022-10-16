export default class Perceptron {
  weights: number[]
  lr: number = 0.1
  constructor(numberOfWeight: number) {
    this.weights = Array(numberOfWeight)
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1, 1)
    }
  }
  Calculate(inputs: number[]) {
    if (inputs.length > this.weights.length) {
      throw 'Number of inputs must be equal to number of weights'
    }
    let sum = 0
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i]
    }
    return this.Activate(sum)
  }
  Activate(sum: number) {
    return sum > 0 ? 1 : -1
  }
  // Tune the weights to fit the inputs
  Train(inputs: number[], target: number) {
    let guess = this.Calculate(inputs)
    let error = target - guess
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * inputs[i] * this.lr
    }
  }
}
