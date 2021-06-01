import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {

  constructor() {
    super('game-scene')
  }

  preload() {
    this.load.image('spritesheet', 'assets/images/spritesheet.png')
    this.load.tilemapTiledJSON('tilemap', 'assets/maps/stage.json')

    this.load.atlas('plink', 'assets/char/plink.png', 'assets/char/plink.json')
  }

  create() {
    //SANITY CHECK - should display spritesheet
    //this.add.image(0, 0, 'spritesheet')

    const map = this.make.tilemap({ key: 'tilemap' })
    const tileset = map.addTilesetImage('tiles', 'spritesheet')

    map.createLayer('background', tileset)
    const foregroundLayer = map.createLayer('foreground', tileset)

    foregroundLayer.setCollisionByProperty({ collides: true });

    const debugGraphics = this.add.graphics().setAlpha(0.75);
    map.renderDebug(debugGraphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });

    const spawnPoint = map.findObject("objects", obj => obj.name === "spawn");

    const plink = this.add.sprite(spawnPoint.x, spawnPoint.y, 'plink', 'char_front.png')

    this.physics.add.collider(plink, foregroundLayer);
  }

  update() {

  }
}
