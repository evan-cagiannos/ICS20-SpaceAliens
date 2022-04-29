/* global Phaser */

// Created by: Evan Cagiannos
// Created on: April 2022
// This is the Phaser3 configuration file

// scene import statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"

// create the new scene
const splashscene = new SplashScene()
const titlescene = new TitleScene()

/**
 * Start Phaser Game
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default:'arcade',
    arcade: {
      debug: true
    }
  },
  // set the backround color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
   }
}

const game = new Phaser.Game(config)
console.log(game)
