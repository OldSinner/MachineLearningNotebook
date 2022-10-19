import MatrixMath from '../Math/MatrixMath.js'
export default class Neuralnetwork {
  numberOfInputs: number
  numberOfOutputs: number
  numberOfHiddenNodes: number
  weightsIH: MatrixMath
  weightsHO: MatrixMath
  biasH: MatrixMath
  biasO: MatrixMath

  constructor(
    numberOfInputs: number,
    numberOfHiddenLayers: number,
    numberOfOutputs: number,
  ) {
    this.numberOfInputs = numberOfInputs
    this.numberOfHiddenNodes = numberOfHiddenLayers
    this.numberOfOutputs = numberOfOutputs

    this.weightsIH = new MatrixMath(
      this.numberOfHiddenNodes,
      this.numberOfInputs,
    )
    this.weightsHO = new MatrixMath(
      this.numberOfOutputs,
      this.numberOfHiddenNodes,
    )

    this.weightsHO.Randomize()
    this.weightsIH.Randomize()

    this.biasH = new MatrixMath(this.numberOfHiddenNodes, 1)
    this.biasO = new MatrixMath(this.numberOfOutputs, 1)

    this.biasH.Randomize()
    this.biasO.Randomize()
  }

  private sigmoid(x: number) {
    return 1 / (1 + Math.exp(-x))
  }

  FeedForward(inputs: number[]): number[] {
    // Generating the Hidden Outputs
    let hiddenOutput = MatrixMath.Multiply(
      this.weightsIH,
      MatrixMath.FromArray(inputs),
    )
    hiddenOutput = MatrixMath.Add(hiddenOutput, this.biasH)
    hiddenOutput.Map((x) => this.sigmoid(x))
    //Hidden Outputs
    let Outputs = MatrixMath.Multiply(this.weightsHO, hiddenOutput)
    Outputs = MatrixMath.Add(Outputs, this.biasO)
    Outputs.Map((x) => this.sigmoid(x))
    return MatrixMath.ToArray(Outputs)
  }
}
