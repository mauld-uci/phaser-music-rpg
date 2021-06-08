import Phaser from 'phaser'
import Button from '../items/Button'
import Door from '../items/Door'
import { debugDraw } from '../utils/debug'

import '../characters/Plink'
import Plink from '../characters/Plink'
import { createCharacterAnims } from '../anims/CharacterAnims'
import { createButtonAnims } from '../anims/ButtonAnims'
import { createDoorAnims } from '../anims/DoorAnims'
import { sceneEvents } from '../events/EventsCenter'

export default class GameScene extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  private plink!: Plink
  private door1!: Door
  private door2!: Door

  private tune1Answer = [60, 69, 67, 64, 65]
  private tune2Answer = [60, 69, 67, 64, 65, 69, 67, 65, 69, 67]

  private tune1Progress = [-1, -1, -1, -1, -1]
  private tune2Progress = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]

  private successSound

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
          this.door1 = doors.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'door', 'doorClosed.png').setName('door1')
        } else if (obj.name === 'door2') {
          this.door2 = doors.get(obj.x! + obj.width! * 0.5, obj.y! - obj.height! * 0.5, 'door', 'doorClosed.png').setName('door2')
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

    sceneEvents.on('note-played', this.handleNotePuzzle, this)
    sceneEvents.on('door-open', this.handleDoorUnlock, this)

    this.successSound = this.sound.add('success');
  }

  private handleDoorUnlock(doorNum: number) {
    console.log("UNLOCKING: ", doorNum)
    if (doorNum === 1) {
      this.door1.open()
      this.successSound.play()
    } else if (doorNum === 2) {
      this.door2.open()
      this.successSound.play()
    }
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

  private handleNotePuzzle(note: number) {
    //console.log("note: " + note)
    this.addToPuzzle(this.tune1Progress, note)
    //console.log("T1: " + this.tune1Progress)

    this.addToPuzzle(this.tune2Progress, note)
    //console.log("T2: " + this.tune2Progress)

    if (this.numArraysEqual(this.tune1Progress, this.tune1Answer)) {
      sceneEvents.emit('door-open', 1)
    }
    if (this.numArraysEqual(this.tune2Progress, this.tune2Answer)) {
      sceneEvents.emit('door-open', 2)
      this.celebration()
    }
  }

  private numArraysEqual(arr1: number[], arr2: number[]) {
    if (arr1.length != arr2.length) {
      return false
    }
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] != arr2[i]) {
        return false
      }
    }
    return true
  }

  private addToPuzzle(progress: number[], num: number) {
    for (let i = 0; i < progress.length; ++i) {
      progress[i] = progress[i + 1]
    }
    progress[progress.length - 1] = num
  }

  private celebration() {
    let x = 472
    let y = 88

    this.add.particles('particleRed').createEmitter({
      x: x,
      y: y,
      speed: { min: -200, max: 200 },
      angle: { min: 225, max: 315 },
      scale: { start: 0.7, end: 0 },
      //active: false,
      lifespan: 1000,
      gravityY: 500
    });
    this.add.particles('particleBlue').createEmitter({
      x: x,
      y: y,
      speed: { min: -200, max: 200 },
      angle: { min: 225, max: 315 },
      scale: { start: 0.7, end: 0 },
      //active: false,
      lifespan: 1000,
      gravityY: 500
    });
    this.add.particles('particleGreen').createEmitter({
      x: x,
      y: y,
      speed: { min: -200, max: 200 },
      angle: { min: 225, max: 315 },
      scale: { start: 0.7, end: 0 },
      //active: false,
      lifespan: 1000,
      gravityY: 500
    });
    this.add.particles('particleYellow').createEmitter({
      x: x,
      y: y,
      speed: { min: -200, max: 200 },
      angle: { min: 225, max: 315 },
      scale: { start: 0.7, end: 0 },
      //active: false,
      lifespan: 1000,
      gravityY: 500
    });
  }

  update(t, dt) {
    if (this.plink) {
      this.plink.update(this.cursors)
    }



  }
}
