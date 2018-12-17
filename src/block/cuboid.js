import Base from './base'

export default class Cuboid extends Base {
  constructor(x, y, z, type, width) {
    super('cuboid')
    const size = width || this.width

    const geometry = new THREE.BoxGeometry(size, this.height, size)
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff
    })

    const instance = this.instance = new THREE.Mesh(geometry, material)
    instance.name = 'block'
    this.x = x
    this.y = y
    this.z = z

    instance.position.x = x
    instance.position.y = y
    instance.position.z = z

    instance.castShadow = true
    instance.receiveShadow = true
  }
}