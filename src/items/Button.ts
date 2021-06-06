import Phaser from 'phaser'

export default class Button extends Phaser.Physics.Arcade.Sprite {

  private _note;
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
  }

  press() {

  }
}