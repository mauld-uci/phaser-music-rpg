import Phaser from 'phaser'
import Button from '../items/Button'
import Door from '../items/Door'
import { debugDraw } from '../utils/debug'

import '../characters/Plink'
import Plink from '../characters/Plink'
import { createCharacterAnims } from '../anims/CharacterAnims'
import { createButtonAnims } from '../anims/ButtonAnims'
import { createDoorAnims } from '../anims/DoorAnims'


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
      classType: Door
    })

    const objectLayer = map.getObjectLayer('objects')
    objectLayer.objects.forEach(obj => {
      if (obj.type === 'button') {
        if (obj.name === 'play1') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'notePlay', 'notePlay.png').setName('play1')
        } else if (obj.name === 'play2') {
          buttons.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'notePlay', 'notePlay.png').setName('play2')
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
        if (obj.name === 'door1') {
          doors.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'door', 'doorClosed.png').setName('door1')
        } else if (obj.name === 'door2') {
          doors.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'door', 'doorClosed.png').setName('door2')
        }
      }
    })

    this.plink = this.add.plink(184, 553, 'plink')
    createCharacterAnims(this.anims)
    createButtonAnims(this.anims)
    createDoorAnims(this.anims)

    this.cameras.main.startFollow(this.plink, true)

    foregroundLayer.setCollisionByProperty({ collides: true });
    //debugDraw(foregroundLayer, this);

    this.physics.add.collider(this.plink, foregroundLayer);
    this.physics.add.collider(this.plink, buttons, this.handlePlayerButtonCollision, undefined, this);
    this.physics.add.collider(this.plink, doors, this.handlePlayerDoorCollision, undefined, this);
  }

  private handlePlayerButtonCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject) {
    const button = obj2 as Button
    this.plink.setButton(button)
  }

  private handlePlayerDoorCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject) {
    const door = obj2 as Door
    console.log("Colliding Door: " + door.name)
    //door.open()
  }

  update(t, dt) {
    if (this.plink) {
      this.plink.update(this.cursors)
    }

  }
}
