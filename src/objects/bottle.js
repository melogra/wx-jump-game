import { CustomAnimation } from '../../libs/animation'
import bottleConf from '../../confs/bottle-conf'
import blockConf from '../../confs/block-conf'
const { initPosition } = bottleConf

class Bottle {
  constructor() {}

  init () {
    const {
      specularMaterail,
      middleMaterail,
      bottomMaterail
    } = this.loadTexture();

    const obj = new THREE.Object3D()
    obj.name = 'bottle'
    obj.position.set(initPosition.x, initPosition.y + 30, initPosition.z)

    const bottle = new THREE.Object3D()
    bottle.position.y = 2.2
    bottle.position.x = 0
    bottle.position.z = 0

    const headRadius = bottleConf.headRadius
    

    const head = this.head = new THREE.Mesh(
      new THREE.OctahedronGeometry(headRadius),
      // specularMaterail
      bottomMaterail
    )
    head.position.y = 3.57143 * headRadius
    head.position.x = 0
    head.position.z = 0
    head.castShadow = true

    const topGeometry = new THREE.SphereGeometry(headRadius / 1.4, 20, 20)
    topGeometry.scale(1, 0.54, 1)
    const top = new THREE.Mesh(
      topGeometry,
      specularMaterail
    )
    top.position.y = 1.8143 * headRadius
    top.position.x = 0
    top.position.z = 0
    top.castShadow = true

    const middle = new THREE.Mesh(
      new THREE.CylinderGeometry(
        headRadius / 1.4,
        headRadius / 1.4 * 0.88,
        headRadius * 1.2,
        20
      ),
      middleMaterail
    )
    middle.castShadow = true
    middle.position.y = 1.3857 * headRadius
    middle.position.x = 0
    middle.position.z = 0

    const bottom = new THREE.Mesh(
      new THREE.CylinderGeometry(
        0.62857 * headRadius,
        0.907143 * headRadius,
        1.91423 * headRadius,
        20
      ),
      bottomMaterail
    )
    bottom.castShadow = true

    const body = new THREE.Object3D()
    body.add(top)
    body.add(middle)
    body.add(bottom)

    bottle.add(head)
    bottle.add(body)

    obj.add(bottle)
    this.bottle = bottle
    this.obj = obj
  }

  loadTexture() {
    // 加载贴图
    this.loader = new THREE.TextureLoader()
    // 小游戏加载资源需要以game开始
    const specularTexture = this.loader.load('/game/res/images/head.png')
    const middleTexture = this.loader.load('/game/res/images/head.png')
    const bottomTexture = this.loader.load('/game/res/images/bottom.png')

    const specularMaterail = new THREE.MeshBasicMaterial({ map: specularTexture })
    const middleMaterail = new THREE.MeshBasicMaterial({ map: middleTexture })
    const bottomMaterail = new THREE.MeshBasicMaterial({ map: bottomTexture })

    return {
      specularMaterail,
      middleMaterail,
      bottomMaterail
    }
  }

  update() {
    this.head.rotation.y += 0.06
  }

  showUp() {
    CustomAnimation.to(this.obj.position, {
      x: initPosition.x,
      y: initPosition.y + blockConf.height / 2,
      z: initPosition.z
    }, 0.5)
  }
}

export default new Bottle()