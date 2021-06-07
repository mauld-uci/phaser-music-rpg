import Phaser from 'phaser'

export default class Button extends Phaser.Physics.Arcade.Sprite {

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
  }

  public press() {
    let note = -1;
    switch (this.name) {
      case 'red': {
        note = 60 //C
        this.anims.play('red_pressed')
        break
      }
      case 'orange': {
        note = 62 //D
        this.anims.play('orange_pressed')
        break
      }
      case 'yellow': {
        note = 64 //E
        this.anims.play('yellow_pressed')
        break
      }
      case 'green': {
        note = 65 //F
        this.anims.play('green_pressed')
        break
      }
      case 'cyan': {
        note = 67 //G
        this.anims.play('cyan_pressed')
        break
      }
      case 'blue': {
        note = 69 //A
        this.anims.play('blue_pressed')
        break
      }
      case 'purple': {
        note = 71 //B
        this.anims.play('purple_pressed')
        break
      }
      case 'pink': {
        note = 72 //C 
        this.anims.play('pink_pressed')
        break
      }
      case 'play1': {
        this.anims.play('play_pressed')
        break
      }
      case 'play2': {
        this.anims.play('play_pressed')
        break
      }
      default: {
        break
      }
    }
    console.log(this.name)
  }
}