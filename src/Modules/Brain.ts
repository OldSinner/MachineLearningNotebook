import { Layer, Network } from 'synaptic'
import { Data_2D } from './Learning/2D_Data/Data_2D'
import { IData } from './Learning/IData'

export default class Brain {
  network: Network
  learningRate = 0.01
  constructor(input: number, hidden: number[], output: number) {
    var inputLayer = new Layer(input)
    var hidenLayers = hidden.map((hidenLayer) => new Layer(hidenLayer))
    console.log(hidenLayers)
    var outputLayer = new Layer(output)
    inputLayer.project(hidenLayers[0])
    for (let i = 0; i < hidenLayers.length - 1; i++) {
      hidenLayers[i].project(hidenLayers[i + 1])
    }
    hidenLayers[hidenLayers.length - 1].project(outputLayer)

    this.network = new Network({
      input: inputLayer,
      hidden: hidenLayers,
      output: outputLayer,
    })
  }
  activate(input: number[]): number {
    return this.network.activate(input)[0] > 0.5 ? 1 : 0
  }
  trainOnce(data: IData) {
    if (data instanceof Data_2D) {
      this.train2D(data)
    }
  }
  private train2D(data: Data_2D) {
    for (let i = 0; i < data.data.length; i++) {
      this.network.activate([data.data[i].x, data.data[i].y])

      this.network.propagate(this.learningRate, [data.data[i].label])
    }
  }
}
