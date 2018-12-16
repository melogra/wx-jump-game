import Base from './base'

export default class Cylinder extends Base {
  constructor(x, y, z, type, width) {
    super('cylinder')
    const size = width || this.width

    const geometry = new THREE.CylinderGeometry(size / 2, size / 2, this.height, 120)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff
    })

    const instance = this.instance = new THREE.Mesh(geometry, material)
    instance.name = 'block'
    this.x = x
    this.y = y
    this.z = z

    instance.position.x = x
    instance.position.y = x
    instance.position.z = x
  }
}