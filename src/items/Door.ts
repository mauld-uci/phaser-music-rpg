import Phaser from 'phaser'

export default class Door extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
  }

  public open() {
    this.anims.play('door_open')
    this.body.checkCollision.none = true
  }

  public getName() {
    return this.name
  }
}
