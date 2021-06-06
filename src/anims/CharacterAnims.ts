import Phaser from 'phaser'

const createCharacterAnims = (anims: Phaser.Animations.AnimationManager) => {
  anims.create({
    key: "plink_up_idle",
    frames: [{ key: 'plink', frame: 'char_back.png' }]
  })

  anims.create({
    key: "plink_down_idle",
    frames: [{ key: 'plink', frame: 'char_front.png' }]
  })

  anims.create({
    key: "plink_up",
    frames: [{ key: 'plink', frame: 'char_back.png' }] //TO ANIMATE
  })

  anims.create({
    key: "plink_down",
    frames: [{ key: 'plink', frame: 'char_front.png' }] //TO ANIMATE
  })

  anims.create({
    key: "plink_left",
    frames: [{ key: 'plink', frame: 'char_left.png' }] //TO ANIMATE
  })

  anims.create({
    key: "plink_left_idle",
    frames: [{ key: 'plink', frame: 'char_left.png' }]
  })

  anims.create({
    key: "plink_right",
    frames: [{ key: 'plink', frame: 'char_right.png' }] //TO ANIMATE
  })

  anims.create({
    key: "plink_right_idle",
    frames: [{ key: 'plink', frame: 'char_right.png' }]
  })
}

export {
  createCharacterAnims
}