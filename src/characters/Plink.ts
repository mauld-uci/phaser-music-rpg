import Phaser from 'phaser'
import Button from '../items/Button'


declare global {
  namespace Phaser.GameObjects {
    interface GameObjectFactory {
      plink(x: number, y: number, texture: string, frame?: string | number): Plink
    }
  }
}

export default class Plink extends Phaser.Physics.Arcade.Sprite {
  private _health = 5;
  private activeButton?: Button

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)

    //this.anims.play('plink_down')
  }

  setButton(button: Button) {
    this.activeButton = button
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    if (!cursors) {
      return
    }
    const speed = 100

    if (cursors.up?.isDown && cursors.left?.isDown) { //UP LEFT 
      this.anims.play('plink_left')
      this.setVelocity(-(speed / 1.414), -(speed / 1.414))
    } else if (cursors.up?.isDown && cursors.right?.isDown) { //UP RIGHT
      this.anims.play('plink_right')
      this.setVelocity((speed / 1.414), -(speed / 1.414))
    } else if (cursors.down?.isDown && cursors.left?.isDown) { //DOWN LEFT
      this.anims.play('plink_left')
      this.setVelocity(-(speed / 1.414), (speed / 1.414))
    } else if (cursors.down?.isDown && cursors.right?.isDown) { //DOWN RIGHT
      this.anims.play('plink_right')
      this.setVelocity((speed / 1.414), (speed / 1.414))
    } else if (cursors.left?.isDown) { // LEFT
      this.anims.play('plink_left')
      this.setVelocity(-speed, 0)
    } else if (cursors.right?.isDown) { // RIGHT
      this.anims.play('plink_right')
      this.setVelocity(speed, 0)
    } else if (cursors.up?.isDown) { // UP
      this.anims.play('plink_up')
      this.setVelocity(0, -speed)
    } else if (cursors.down?.isDown) { // DOWN
      this.anims.play('plink_down')
      this.setVelocity(0, speed)
    } else {
      this.setVelocity(0, 0)
    }

    if (Phaser.Input.Keyboard.JustDown(cursors.space!)) {
      if (this.activeButton) {
        this.activeButton.press()
      }
    }

    if (cursors.left?.isDown || cursors.right?.isDown || cursors.up?.isDown || cursors.down?.isDown) {
      this.activeButton = undefined
    }
  }
}

Phaser.GameObjects.GameObjectFactory.register('plink', function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, texture: string, frame?: string | number) {
  var sprite = new Plink(this.scene, x, y, texture, frame)

  this.displayList.add(sprite)
  this.updateList.add(sprite)

  this.scene.physics.world.enableBody(sprite, Phaser.Physics.Arcade.DYNAMIC_BODY)

  sprite.body.setSize(sprite.width * 0.85, sprite.height * 0.85)

  return sprite
})