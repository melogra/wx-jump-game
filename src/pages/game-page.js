export default class GameOverPage {
  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init() {
    console.log('init game page')
    this.scene = 'scene'

    setTimeout(() => {
      this.callbacks.showGameOverPage()
    }, 2000)
  }

  show() {
    console.log('game page show')
  }

  hide() {
    console.log('game page hide')
  }

  restart() {
    console.log('restart game page')
  }
}
