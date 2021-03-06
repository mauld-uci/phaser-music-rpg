import Phaser from 'phaser'

import GameScene from './scenes/GameScene'
import Preloader from './scenes/Preloader'

const config = {
  type: Phaser.AUTO,
  width: 300,
  height: 300,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  title: 'Musical Dungeon Puzzle',
  scene: [Preloader, GameScene]
}

export default new Phaser.Game(config)
