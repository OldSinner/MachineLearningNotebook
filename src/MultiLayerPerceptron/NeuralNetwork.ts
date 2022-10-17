export default class Neuralnetwork {
  numberOfInputs: number
  numberOfOutputs: number
  numberOfHiddenNodes: number

  constructor(
    numberOfInputs: number,
    numberOfOutputs: number,
    numberOfHiddenLayers: number,
  ) {
    this.numberOfInputs = numberOfInputs
    this.numberOfOutputs = numberOfOutputs
    this.numberOfHiddenNodes = numberOfHiddenLayers
  }
}
