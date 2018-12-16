import camera from './camera'

class Scene {
  constructor() {
    this.instance = null
  }

  init() {
    const instance = this.instance = new THREE.Scene()
    const renderer = this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      // 开启抗锯齿
      antilias: true,
      preserveDrawingBuffer: true
    })

    this.camera = camera
    this.camera.init()

    this.axesHelper = new THREE.AxesHelper(100)

    instance.add(this.axesHelper)
    instance.add(camera.instance)
  }

  render() {
    this.renderer.render(this.instance, this.camera.instance)
  }
}
export default new Scene()