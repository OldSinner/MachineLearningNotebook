import CanvasHandler from './Modules/Handlers/CanvasHandler'
import { EnvHandler } from './Modules/Handlers/EnvHanlder'

var envHanlder = new EnvHandler()
var canvasHandler = new CanvasHandler()

function setup() {
  createCanvas(1000, 1000)
  envHanlder.setup()
  canvasHandler.setup()
}
function draw() {
  background(30)
  canvasHandler.draw()
}

// @ts-ignore
window.setup = setup
// @ts-ignore
window.draw = draw
