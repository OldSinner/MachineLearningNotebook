export default class CanvasHandler {
  setup() {}
  draw() {
    this.drawCartesian()
  }
  drawCartesian = () => {
    stroke(80)
    line(width / 2, 0, width / 2, height)
    line(0, height / 2, width, height / 2)
    stroke(255)
  }
}
