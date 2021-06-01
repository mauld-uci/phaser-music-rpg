import Phaser from 'phaser'

import GameScene from './scenes/GameScene'

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
  scene: [GameScene]
}

export default new Phaser.Game(config)
