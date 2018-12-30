import { scene } from '../scene/index'
import Cylinder from '../block/cylinder'
import Cuboid from '../block/cuboid'
import ground from '../objects/ground'
import bottle from '../objects/bottle'

export default class GameOverPage {
  constructor(callbacks) {
    this.callbacks = callbacks
  }

  init() {
    console.log('init game page')
    this.scene = scene
    this.ground = ground
    this.bottle = bottle
    this.scene.init()
    this.ground.init()
    this.bottle.init()
    this.addInitBlock()
    this.addGround()
    this.addBottle()

    this.render()
  }

  addInitBlock() {
    const cylinderBlock = new Cuboid(-15, 0, 0)
    const cuboidBlock = new Cylinder(23, 0, 0)
    this.scene.instance.add(cylinderBlock.instance)
    this.scene.instance.add(cuboidBlock.instance)
  }

  addGround() {
    this.scene.instance.add(ground.instance)
  }

  addBottle() {
    this,scene.instance.add(this.bottle.obj)
    this.bottle.showUp()
  }

  render() {
    this.scene.render()
    if (this.bottle) {
      this.bottle.update()
    }
    requestAnimationFrame(this.render.bind(this))
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
