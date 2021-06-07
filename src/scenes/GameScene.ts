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

    const doors = this.physics.add.staticGroup({
    })

    const objectLayer = map.getObjectLayer('objects')
    objectLayer.objects.forEach(obj => {
      if (obj.type === 'button') {
        if (obj.name === 'play') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'notePlay', 'notePlay.png').setName('play')
        } else if (obj.name === 'noteRed') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'noteRed', 'noteRed.png').setName('red')
        } else if (obj.name === 'noteOrange') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'noteOrange', 'noteOrange.png').setName('orange')
        } else if (obj.name === 'noteYellow') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'noteYellow', 'noteYellow.png').setName('yellow')
        } else if (obj.name === 'noteGreen') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'noteGreen', 'noteGreen.png').setName('green')
        } else if (obj.name === 'noteCyan') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'noteCyan', 'noteCyan.png').setName('cyan')
        } else if (obj.name === 'noteBlue') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'noteBlue', 'noteBlue.png').setName('blue')
        } else if (obj.name === 'notePurple') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'notePurple', 'notePurple.png').setName('purple')
        } else if (obj.name === 'notePink') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'notePink', 'notePink.png').setName('pink')
        }
      } else if (obj.type === 'door') {

      }
    })

    this.plink = this.add.plink(184, 553, 'plink')
    createCharacterAnims(this.anims)

    this.cameras.main.startFollow(this.plink, true)

    foregroundLayer.setCollisionByProperty({ collides: true });
    debugDraw(foregroundLayer, this);

    this.physics.add.collider(this.plink, foregroundLayer);
    this.physics.add.overlap(this.plink, buttons, this.handlePlayerButtonCollision, undefined, this);
  }

  private handlePlayerButtonCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject) {
    const button = obj2 as Button
    button.press()
  }

  update(t, dt) {
    if (this.plink) {
      this.plink.update(this.cursors)
    }
  }
}
