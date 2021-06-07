import Phaser from 'phaser'

export default class Button extends Phaser.Physics.Arcade.Sprite {

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
  }

  press() {
    console.log(this.name + " button pressed!")
  }
}