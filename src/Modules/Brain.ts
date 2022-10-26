import { Layer, Network } from 'synaptic'

export default class Brain {
  network: Network
  constructor(input: number, hidden: number[], output: number) {
    var inputLayer = new Layer(input)
    var hidenLayers = hidden.map((hidenLayer) => new Layer(hidenLayer))
    var outputLayer = new Layer(output)
    inputLayer.project(hidenLayers[0])
    for (let i = 0; i < hidenLayers.length - 2; i++) {
      hidenLayers[i].project(hidenLayers[i + 1])
    }
    hidenLayers[hidenLayers.length - 1].project(outputLayer)

    this.network = new Network({
      input: inputLayer,
      hidden: hidenLayers,
      output: outputLayer,
    })
  }
  activate(input: number[]) {
    return this.network.activate(input)
  }
}
