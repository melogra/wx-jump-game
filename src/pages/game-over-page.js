export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init(options) {
    this.scene = options.scene
    this.initGameOverCanvas(options)
  }

  initGameOverCanvas(options) {
    const aspect = window.innerHeight / window.innerWidth
    const canvas = this.canvas = document.createElement('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const texture = this.texture = new THREE.Texture(canvas)
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      // PlaneGeometry有正反面 MeshBasicMaterial是单面
      side: THREE.DoubleSide
    })

    const geometry = this.geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)
    const obj = this.obj = new THREE.Mesh({
      geometry,
      material
    })

    obj.position.z = 1
    obj.rotation.y = Math.PI
    obj.visible = false

    const context = this.context = canvas.getContext('2d')
    context.fillStyle = '#333'
    context.fillRect((window.innerWidth - 200) / 2, (window.innerHeight - 100) / 2, 200, 100)

    context.fillStyle = '#eee'
    context.font = '20px Georgia'
    context.fillText('Game Over', (window.innerWidth - 200) / 2 + 50, (window.innerHeight - 100) / 2 + 55)

    // canvas内容改变 需要update贴图
    texture.needsUpdate = true

    // this.scene.add(obj)
  }

  show() {
    this.obj.visible = true
    console.log('game over page show')
  }

  hide () {
    this.obj.visible = false
    console.log('game over page hide')
  }
}
