import Phaser from 'phaser'

export default class Button extends Phaser.Physics.Arcade.Sprite {

  private _tune1 = [60, 69, 67, 64, 65, 0]
  private _tune2 = [60, 69, 67, 64, 65, 69, 67, 65, 69, 67, 0]
  private _tune3 = [60, 69, 67, 64, 65, 69, 67, 65, 69, 67, 67, 69, 65, 64, 65, 64, 65, 69, 67, 65, 0]

  private context
  private oscillator
  private isStarted = false;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame)
  }

  public press() {
    let note = -1;
    switch (this.name) {
      case 'red': {
        note = 60 //C
        this.playSound(note)
        this.anims.play('red_pressed')
        break
      }
      case 'orange': {
        note = 62 //D
        this.playSound(note)
        this.anims.play('orange_pressed')
        break
      }
      case 'yellow': {
        note = 64 //E
        this.playSound(note)
        this.anims.play('yellow_pressed')
        break
      }
      case 'green': {
        note = 65 //F
        this.playSound(note)
        this.anims.play('green_pressed')
        break
      }
      case 'cyan': {
        note = 67 //G
        this.playSound(note)
        this.anims.play('cyan_pressed')
        break
      }
      case 'blue': {
        note = 69 //A
        this.playSound(note)
        this.anims.play('blue_pressed')
        break
      }
      case 'purple': {
        note = 71 //B
        this.playSound(note)
        this.anims.play('purple_pressed')
        break
      }
      case 'pink': {
        note = 72 //C 
        this.playSound(note)
        this.anims.play('pink_pressed')
        break
      }
      case 'play1': {
        this.anims.play('play_pressed')
        this.playTune(this._tune1)
        break
      }
      case 'play2': {
        this.anims.play('play_pressed')
        this.playTune(this._tune2)
        break
      }
      default: {
        break
      }
    }
    console.log(this.name)
  }

  private getOrCreateContext() {
    if (!this.context) {
      this.context = new AudioContext();
      this.oscillator = this.context.createOscillator();
      this.oscillator.start(0)
    }
    return this.context;
  }

  public playSound(value: number) {
    this.noteOn(value)
    this.scene.time.delayedCall(300, this.noteOff, [], this);
  }

  private noteOn(MIDI: number) {
    this.getOrCreateContext()
    this.oscillator.connect(this.context.destination);
    const freq = Math.pow(2, (MIDI - 69) / 12) * 440

    this.oscillator.frequency.setTargetAtTime(freq, this.context.currentTime, 0);
    this.context.resume();
  }

  private noteOff() {
    this.context.suspend();
  }

  public playTune(tune: Array<number>) {
    var length: number = 2
    var eps: number = 0.01
    var pairs: number[][] = []

    for (var i: number = 0; i < tune.length; ++i) {
      pairs.push([tune[i], 4])
    }

    this.getOrCreateContext()
    this.oscillator.connect(this.context.destination);
    let time = this.context.currentTime + eps
    pairs.forEach(note => {
      const freq = Math.pow(2, (note[0] - 69) / 12) * 440
      //console.log(time)
      this.oscillator.frequency.setTargetAtTime(0, time - eps, 0.001)
      this.oscillator.frequency.setTargetAtTime(freq, time, 0.001)
      time += length / note[1]
    });
  }
}