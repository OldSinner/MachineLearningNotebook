import MatrixMath from '../Math/MatrixMath.js'

export class NeuronLayer {
  weight: MatrixMath
  bias: MatrixMath
  constructor(
    public numberOfInputs: number,
    public numberOfNodes: number,
    public activationFunction: Function,
  ) {
    this.weight = new MatrixMath(this.numberOfNodes, this.numberOfInputs)
    this.weight.Randomize()
    this.bias = new MatrixMath(this.numberOfNodes, 1)
    this.bias.Randomize()
  }

  FeedForward(inputs: number[]): number[] {
    let outputs = MatrixMath.Multiply(this.weight, MatrixMath.FromArray(inputs))
    outputs = MatrixMath.Add(outputs, this.bias)
    outputs.Map((x) => this.activationFunction(x))

    return MatrixMath.ToArray(outputs)
  }

  Train(nextWeight : MatrixMath) {}
}
