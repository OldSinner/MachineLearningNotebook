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

  Train(inputs: number[], target: number) {}
}
