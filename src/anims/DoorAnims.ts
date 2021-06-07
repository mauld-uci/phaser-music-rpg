import Phaser from 'phaser'

const createDoorAnims = (anims: Phaser.Animations.AnimationManager) => {
  anims.create({
    key: "door_open",
    frames: [{ key: 'door', frame: 'doorOpen.png' }]
  })
  anims.create({
    key: "door_closed",
    frames: [{ key: 'door', frame: 'doorClosed.png' }]
  })
}

export {
  createDoorAnims
}