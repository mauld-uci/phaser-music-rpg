import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'

const config = {
  type: Phaser.AUTO,
  width: 240,
  height: 240,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
  title: 'Musical Dungeon Puzzle',
  scene: [HelloWorldScene]
}

export default new Phaser.Game(config)
