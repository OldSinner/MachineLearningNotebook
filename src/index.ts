import { EnvHandler } from './Modules/Handlers/EnvHanlder'

var envHanlder = new EnvHandler()

function setup() {
  createCanvas(1000, 1000)
  envHanlder.setup()
  frameRate(50)
  background(30)
}
function draw() {
  background(30)
  envHanlder.draw()
}
// @ts-ignore
window.setup = setup
// @ts-ignore
window.draw = draw

onclick = () => {
  console.log(envHanlder.data.data[0])
}
