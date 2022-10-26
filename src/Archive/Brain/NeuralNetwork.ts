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

  private dsigmoid(y: number) {
    return y * (1 - y)
  }

  FeedForward(inputs: number[]): number[] {
    // Generating the Hidden Outputs
    var previousNodesOutput = inputs
    this.layers.forEach((layer) => {
      previousNodesOutput = layer.FeedForward(previousNodesOutput)
    })

    return previousNodesOutput
  }

  GetLayersOutput(inputs: number[]): MatrixMath[] {
    var memory = new Array<MatrixMath>()
    var previousNodesOutput = inputs
    memory.push(MatrixMath.FromArray(previousNodesOutput))
    this.layers.forEach((layer) => {
      previousNodesOutput = layer.FeedForward(previousNodesOutput)
      memory.push(MatrixMath.FromArray(previousNodesOutput))
    })

    return memory
  }

  Train(inputs: number[], targets: number[]) {
    let outputsOfLayers = this.GetLayersOutput(inputs)
    let outputs = MatrixMath.ToArray(
      outputsOfLayers[outputsOfLayers.length - 1],
    )
    let errorVectors = new Array<MatrixMath>()

    // Calculate the error
    let errors = new Array<number>()
    for (let i = 0; i < outputs.length; i++) {
      errors.push(targets[i] - outputs[i])
    }

    // Calculate Error List
    let errorMatrix = MatrixMath.FromArray(errors)
    errorMatrix = MatrixMath.Transpose(errorMatrix)
    errorVectors.push(errorMatrix)

    for (let i = this.layers.length - 1; i >= 0; i--) {
      let layer = this.layers[i]
      var newError = MatrixMath.Multiply(
        MatrixMath.Transpose(layer.weight),
        errorVectors[errorVectors.length - 1],
      )
      errorVectors.push(newError)
    }
    errorVectors.reverse()

    // Calculate the gradient
    outputsOfLayers.map((x) => this.dsigmoid)
  }
}
