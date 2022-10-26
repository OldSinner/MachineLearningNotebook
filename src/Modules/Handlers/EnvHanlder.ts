import Brain from '../Brain'

export class EnvHandler {
  brain: Brain
  constructor() {
    this.brain = new Brain(2, [3], 1)
  }
  setup() {}
}
