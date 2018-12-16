import controller from './controller'

class Game {
  constructor() {
    console.log('new Game')
    this.gameController = controller
  }

  init() {
    this.gameController.initPages()
  }
}

export default new Game()