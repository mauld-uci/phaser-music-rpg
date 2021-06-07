import Phaser from 'phaser'

const createButtonAnims = (anims: Phaser.Animations.AnimationManager) => {
  anims.create({
    key: "red_up",
    frames: [{ key: 'noteRed', frame: 'noteRed.png' }]
  })
  anims.create({
    key: "red_pressed",
    frames: [
      { key: 'noteRed', frame: 'noteRed.png', duration: 1 },
      { key: 'noteRed', frame: 'noteRedPressed.png', duration: 300 },
      { key: 'noteRed', frame: 'noteRed.png' }
    ]
  })
  anims.create({
    key: "orange_up",
    frames: [{ key: 'noteOrange', frame: 'noteOrange.png' }]
  })
  anims.create({
    key: "orange_pressed",
    frames: [
      { key: 'noteOrange', frame: 'noteOrange.png', duration: 1 },
      { key: 'noteOrange', frame: 'noteOrangePressed.png', duration: 300 },
      { key: 'noteOrange', frame: 'noteOrange.png' }
    ]
  })
  anims.create({
    key: "yellow_up",
    frames: [{ key: 'noteYellow', frame: 'noteYellow.png' }]
  })
  anims.create({
    key: "yellow_pressed",
    frames: [
      { key: 'noteYellow', frame: 'noteYellow.png', duration: 1 },
      { key: 'noteYellow', frame: 'noteYellowPressed.png', duration: 300 },
      { key: 'noteYellow', frame: 'noteYellow.png' }
    ]
  })
  anims.create({
    key: "green_up",
    frames: [{ key: 'noteGreen', frame: 'noteGreen.png' }]
  })
  anims.create({
    key: "green_pressed",
    frames: [
      { key: 'noteGreen', frame: 'noteGreen.png', duration: 1 },
      { key: 'noteGreen', frame: 'noteGreenPressed.png', duration: 300 },
      { key: 'noteGreen', frame: 'noteGreen.png' }
    ]
  })
  anims.create({
    key: "cyan_up",
    frames: [{ key: 'noteCyan', frame: 'noteCyan.png' }]
  })
  anims.create({
    key: "cyan_pressed",
    frames: [
      { key: 'noteCyan', frame: 'noteCyan.png', duration: 1 },
      { key: 'noteCyan', frame: 'noteCyanPressed.png', duration: 300 },
      { key: 'noteCyan', frame: 'noteCyan.png' }
    ]
  })
  anims.create({
    key: "blue_up",
    frames: [{ key: 'noteBlue', frame: 'noteBlue.png' }]
  })
  anims.create({
    key: "blue_pressed",
    frames: [
      { key: 'noteBlue', frame: 'noteBlue.png', duration: 1 },
      { key: 'noteBlue', frame: 'noteBluePressed.png', duration: 300 },
      { key: 'noteBlue', frame: 'noteBlue.png' }
    ]
  })
  anims.create({
    key: "purple_up",
    frames: [{ key: 'notePurple', frame: 'notePurple.png' }]
  })
  anims.create({
    key: "purple_pressed",
    frames: [
      { key: 'notePurple', frame: 'notePurple.png', duration: 1 },
      { key: 'notePurple', frame: 'notePurplePressed.png', duration: 300 },
      { key: 'notePurple', frame: 'notePurple.png' }
    ]
  })
  anims.create({
    key: "pink_up",
    frames: [{ key: 'notePink', frame: 'notePink.png' }]
  })
  anims.create({
    key: "pink_pressed",
    frames: [
      { key: 'notePink', frame: 'notePink.png', duration: 1 },
      { key: 'notePink', frame: 'notePinkPressed.png', duration: 300 },
      { key: 'notePink', frame: 'notePink.png' }
    ]
  })
  anims.create({
    key: "play_up",
    frames: [{ key: 'notePlay', frame: 'notePlay.png' }]
  })
  anims.create({
    key: "play_pressed",
    frames: [
      { key: 'notePlay', frame: 'notePlay.png', duration: 1 },
      { key: 'notePlay', frame: 'notePlayPressed.png', duration: 5000 },
      { key: 'notePlay', frame: 'notePlay.png' }
    ],
  })
}

export {
  createButtonAnims
}