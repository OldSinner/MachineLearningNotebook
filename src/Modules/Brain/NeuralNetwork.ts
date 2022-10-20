import MatrixMath from '../Math/MatrixMath.js'
import { NeuronLayer } from './NeuronLayer.js'
export default class Neuralnetwork {
  numberOfOutputs: number
  layers: NeuronLayer[]
  constructor(numberOfInputs: number, HiddenLayerConfig: number[]) {
    this.layers = new Array<NeuronLayer>()
    var previousNodes = numberOfInputs

    HiddenLayerConfig.forEach((layer) => {
      this.layers.push(new NeuronLayer(previousNodes, layer, this.sigmoid))
      previousNodes = layer
    })
  }

  private sigmoid(x: number) {
    return 1 / (1 + Math.exp(-x))
  }

  FeedForward(inputs: number[]): number[] {
    // Generating the Hidden Outputs
    var previousNodesOutput = inputs
    this.layers.forEach((layer) => {
      previousNodesOutput = layer.FeedForward(previousNodesOutput)
    })

    return previousNodesOutput
  }

  Train(inputs: number[], targets: number[]) {
    let outputs = this.FeedForward(inputs)
    let errorsArray = new Array<MatrixMath>()

    // Calculate the error
    let errors = new Array<number>()
    for (let i = 0; i < outputs.length; i++) {
      errors.push(targets[i] - outputs[i])
    }

    // Calculate Error List
    let errorMatrix = MatrixMath.FromArray(errors)
    errorMatrix = MatrixMath.Transpose(errorMatrix)
    errorsArray.push(errorMatrix)

    for (let i = this.layers.length - 1; i >= 0; i--) {
      let layer = this.layers[i]
      var newError = MatrixMath.Multiply(
        MatrixMath.Transpose(layer.weight),
        errorsArray[errorsArray.length - 1],
      )
      errorsArray.push(newError)
    }

    console.table(errorsArray)
  }
}
