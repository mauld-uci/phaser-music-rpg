import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader')
  }

  preload() {
    this.load.image('spritesheet', 'assets/images/spritesheet.png')
    this.load.tilemapTiledJSON('tilemap', 'assets/maps/stage.json')

    this.load.image('particleRed', 'assets/images/particles/particle_red.png');
    this.load.image('particleYellow', 'assets/images/particles/particle_yellow.png');
    this.load.image('particleGreen', 'assets/images/particles/particle_green.png');
    this.load.image('particleBlue', 'assets/images/particles/particle_blue.png');

    this.load.atlas('plink', 'assets/objects/plink.png', 'assets/objects/plink.json')
    this.load.atlas('notePlay', 'assets/objects/notePlay.png', 'assets/objects/notePlay.json')
    this.load.atlas('noteRed', 'assets/objects/noteRed.png', 'assets/objects/noteRed.json')
    this.load.atlas('noteOrange', 'assets/objects/noteOrange.png', 'assets/objects/noteOrange.json')
    this.load.atlas('noteYellow', 'assets/objects/noteYellow.png', 'assets/objects/noteYellow.json')
    this.load.atlas('noteGreen', 'assets/objects/noteGreen.png', 'assets/objects/noteGreen.json')
    this.load.atlas('noteCyan', 'assets/objects/noteCyan.png', 'assets/objects/noteCyan.json')
    this.load.atlas('noteBlue', 'assets/objects/noteBlue.png', 'assets/objects/noteBlue.json')
    this.load.atlas('notePurple', 'assets/objects/notePurple.png', 'assets/objects/notePurple.json')
    this.load.atlas('notePink', 'assets/objects/notePink.png', 'assets/objects/notePink.json')
    this.load.atlas('door', 'assets/objects/door.png', 'assets/objects/door.json')

    this.load.audio('success', [
      'assets/sounds/victory.ogg',
      'assets/sounds/victory.mp3'
    ]);
  }

  create() {
    this.scene.start('gamescene')
  }
}