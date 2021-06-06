import Phaser from 'phaser'

import GameScene from './scenes/GameScene'
import Preloader from './scenes/Preloader'

const config = {
  type: Phaser.AUTO,
  width: 240,
  height: 240,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  title: 'Musical Dungeon Puzzle',
  scene: [Preloader, GameScene]
}

export default new Phaser.Game(config)
