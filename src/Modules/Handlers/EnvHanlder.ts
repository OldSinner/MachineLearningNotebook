import Brain from '../Brain'
import { Data_2D } from '../Learning/2D_Data/Data_2D'
import { MapToCanvas } from '../Utils/P5Utils/Utils'

export class EnvHandler {
  brain: Brain
  data: Data_2D
  epoch: number = 0
  constructor() {
    this.brain = new Brain(2, [16, 16], 1)
  }
  setup() {
    this.data = new Data_2D(1000, (x, y) => {
      return y > x * x * x * sin(x) ? 1 : 0
    })
  }
  draw() {
    this.brain.trainOnce(this.data)
    this.epoch++
    textSize(32)
    text('Epoch: ' + this.epoch, 10, 30)
    this.drawCartesian()
    push()
    const drawPoint = (x, y, guess) => {
      const [px, py] = MapToCanvas(x, y)
      strokeWeight(8)
      var output = this.brain.activate([x, y])
      if (output == 1) {
        stroke(255, 0, 0)
      } else {
        stroke(0, 255, 0)
      }
      point(px, py)

      return 0
    }
    this.data.map(drawPoint)
    pop()
  }

  drawCartesian = () => {
    stroke(80)
    line(width / 2, 0, width / 2, height)
    line(0, height / 2, width, height / 2)
    stroke(255)
  }
}
