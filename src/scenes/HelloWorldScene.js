import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super('hello-world')
  }

  preload() {
    this.load.image('spritesheet', 'assets/images/spritesheet.png')
    this.load.tilemapTiledJSON('tiles', 'assets/maps/stage.json')
  }

  create() {
    this.add.image(0, 0, 'spritesheet')
  }
}
