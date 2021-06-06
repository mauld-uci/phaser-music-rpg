import Phaser from 'phaser'
import Button from '../items/Button'
import { debugDraw } from '../utils/debug'

import '../characters/Plink'
import Plink from '../characters/Plink'
import { createCharacterAnims } from '../anims/CharacterAnims'

export default class GameScene extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  private plink!: Plink

  constructor() {
    super('gamescene')
  }

  preload() {
    this.load.image('spritesheet', 'assets/images/spritesheet.png')
    this.load.tilemapTiledJSON('tilemap', 'assets/maps/stage.json')

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

    this.cursors = this.input.keyboard.createCursorKeys()
  }

  create() {
    //SANITY CHECK - should display spritesheet
    //this.add.image(0, 0, 'spritesheet')

    const map = this.make.tilemap({ key: 'tilemap' })
    const tileset = map.addTilesetImage('tiles', 'spritesheet')

    map.createLayer('background', tileset)
    const foregroundLayer = map.createLayer('foreground', tileset)

    const buttons = this.physics.add.staticGroup({
      classType: Button
    })

    const objectLayer = map.getObjectLayer('objects')
    objectLayer.objects.forEach(buttonObj => {
      console.log(buttonObj)
      if (buttonObj.name === 'play') {
        buttons.get(buttonObj.x! + buttonObj.width! * 0.5, buttonObj.y! - buttonObj.height! * 0.5, 'notePlay', 'notePlay.png')
      } else if (buttonObj.name === 'noteRed') {
        buttons.get(buttonObj.x! + buttonObj.width! * 0.5, buttonObj.y! - buttonObj.height! * 0.5, 'noteRed', 'noteRed.png')
      } else if (buttonObj.name === 'noteOrange') {
        buttons.get(buttonObj.x! + buttonObj.width! * 0.5, buttonObj.y! - buttonObj.height! * 0.5, 'noteOrange', 'noteOrange.png')
      } else if (buttonObj.name === 'noteYellow') {
        buttons.get(buttonObj.x! + buttonObj.width! * 0.5, buttonObj.y! - buttonObj.height! * 0.5, 'noteYellow', 'noteYellow.png')
      } else if (buttonObj.name === 'noteGreen') {
        buttons.get(buttonObj.x! + buttonObj.width! * 0.5, buttonObj.y! - buttonObj.height! * 0.5, 'noteGreen', 'noteGreen.png')
      } else if (buttonObj.name === 'noteCyan') {
        buttons.get(buttonObj.x! + buttonObj.width! * 0.5, buttonObj.y! - buttonObj.height! * 0.5, 'noteCyan', 'noteCyan.png')
      } else if (buttonObj.name === 'noteBlue') {
        buttons.get(buttonObj.x! + buttonObj.width! * 0.5, buttonObj.y! - buttonObj.height! * 0.5, 'noteBlue', 'noteBlue.png')
      } else if (buttonObj.name === 'notePurple') {
        buttons.get(buttonObj.x! + buttonObj.width! * 0.5, buttonObj.y! - buttonObj.height! * 0.5, 'notePurple', 'notePurple.png')
      } else if (buttonObj.name === 'notePink') {
        buttons.get(buttonObj.x! + buttonObj.width! * 0.5, buttonObj.y! - buttonObj.height! * 0.5, 'notePink', 'notePink.png')
      }
    })

    this.plink = this.add.plink(119, 217, 'plink')
    createCharacterAnims(this.anims)

    this.cameras.main.startFollow(this.plink, true)

    foregroundLayer.setCollisionByProperty({ collides: true });
    //debugDraw(foregroundLayer, this);

    this.physics.add.collider(this.plink, foregroundLayer);
    this.physics.add.collider(this.plink, buttons, this.handlePlayerButtonCollision, undefined, this);
  }

  private handlePlayerButtonCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject) {
    const button = obj2 as Button

  }

  update(t, dt) {
    if (this.plink) {
      this.plink.update(this.cursors)
    }
  }
}
