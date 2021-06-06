import Phaser from 'phaser'

declare global {
  namespace Phaser.GameObjects {
    interface GameObjectFactory {
      plink(x: number, y: number, texture: string, frame?: string | number): Plink
    }
  }
}

export default class Plink extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)

    //this.anims.play('plink_down')
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    if (!cursors) {
      return
    }
    const speed = 100

    if (cursors.left?.isDown) {
      this.anims.play('plink_left')
      this.setVelocity(-speed, 0)
    } else if (cursors.right?.isDown) {
      this.anims.play('plink_right')
      this.setVelocity(speed, 0)
    } else if (cursors.up?.isDown) {
      this.anims.play('plink_up')
      this.setVelocity(0, -speed)
    } else if (cursors.down?.isDown) {
      this.anims.play('plink_down')
      this.setVelocity(0, speed)
    } else {
      this.setVelocity(0, 0)
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