import sceneConf from '../../confs/scene-conf'
const frustumSize = sceneConf.frustumSize

class Camera {
  constructor() {
    this.instance = null
  }

  init () {
    const aspect = window.innerHeight / window.innerWidth
    const instance = this.instance = new THREE.OrthographicCamera(
      -frustumSize,
      frustumSize,
      frustumSize * aspect,
      -frustumSize,
      -100,
      85
    )
    instance.position.set(-10, 10, 10)
    const target = this.target = new THREE.Vector3(0, 0, 0)
    instance.lookAt(target)
  }
}
export default new Camera()