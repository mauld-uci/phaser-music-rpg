import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  private plink!: Phaser.Physics.Arcade.Sprite

  constructor() {
    super('gamescene')
  }

  preload() {
    this.load.image('spritesheet', 'assets/images/spritesheet.png')
    this.load.tilemapTiledJSON('tilemap', 'assets/maps/stage.json')

    this.load.atlas('plink', 'assets/char/plink.png', 'assets/char/plink.json')

    this.cursors = this.input.keyboard.createCursorKeys()
  }

  create() {
    //SANITY CHECK - should display spritesheet
    //this.add.image(0, 0, 'spritesheet')

    const map = this.make.tilemap({ key: 'tilemap' })
    const tileset = map.addTilesetImage('tiles', 'spritesheet')

    map.createLayer('background', tileset)
    map.createLayer('DEMO', tileset)
    const foregroundLayer = map.createLayer('foreground', tileset)

    foregroundLayer.setCollisionByProperty({ collides: true });

    // const debugGraphics = this.add.graphics().setAlpha(0.75);
    // map.renderDebug(debugGraphics, {
    //   tileColor: null, // Color of non-colliding tiles
    //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    // });

    //const spawnPoint = map.findObject("objects", obj => obj.name === "spawn");

    this.plink = this.physics.add.sprite(119, 217, 'plink', 'char_front.png')

    this.anims.create({
      key: "plink_up_idle",
      frames: [{ key: 'plink', frame: 'char_back.png' }]
    })

    this.anims.create({
      key: "plink_down_idle",
      frames: [{ key: 'plink', frame: 'char_front.png' }]
    })

    this.anims.create({
      key: "plink_up",
      frames: [{ key: 'plink', frame: 'char_back.png' }] //TO ANIMATE
    })

    this.anims.create({
      key: "plink_down",
      frames: [{ key: 'plink', frame: 'char_front.png' }] //TO ANIMATE
    })

    this.anims.create({
      key: "plink_left",
      frames: [{ key: 'plink', frame: 'char_left.png' }] //TO ANIMATE
    })

    this.anims.create({
      key: "plink_left_idle",
      frames: [{ key: 'plink', frame: 'char_left.png' }]
    })

    this.anims.create({
      key: "plink_right",
      frames: [{ key: 'plink', frame: 'char_right.png' }] //TO ANIMATE
    })

    this.anims.create({
      key: "plink_right_idle",
      frames: [{ key: 'plink', frame: 'char_right.png' }]
    })

    this.plink.anims.play('plink_down_idle')

    this.physics.add.collider(this.plink, foregroundLayer);
  }

  update(t, dt) {
    if (!this.cursors || !this.plink) {
      return
    }

    const speed = 80;

    if (this.cursors.left?.isDown) {
      this.plink.anims.play('plink_left')
      this.plink.setVelocity(-speed, 0)
    } else if (this.cursors.right?.isDown) {
      this.plink.anims.play('plink_right')
      this.plink.setVelocity(speed, 0)
    } else if (this.cursors.up?.isDown) {
      this.plink.anims.play('plink_up')
      this.plink.setVelocity(0, -speed)
    } else if (this.cursors.down?.isDown) {
      this.plink.anims.play('plink_down')
      this.plink.setVelocity(0, speed)
    } else {
      this.plink.setVelocity(0, 0)
    }
  }
}
