import Phaser from 'phaser'

export default class Button extends Phaser.Physics.Arcade.Sprite {

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
  }

  press() {
    let note = -1;
    switch (this.name) {
      case 'red': {
        note = 60 //C
        break
      }
      case 'orange': {
        note = 62 //D
        break
      }
      case 'yellow': {
        note = 64 //E
        break
      }
      case 'green': {
        note = 65 //F
        break
      }
      case 'cyan': {
        note = 67 //G
        break
      }
      case 'blue': {
        note = 69 //A
        break
      }
      case 'purple': {
        note = 71 //B
        break
      }
      case 'pink': {
        note = 72 //C 
        break
      }
      default: {
        break
      }
    }
    console.log(note + " button pressed!")
  }
}