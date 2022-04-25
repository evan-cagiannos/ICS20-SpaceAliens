/* global Phaser */

// Copyright (c) 2022 Evan Cagiannos ALL rights reserved 
//
// Created by: Evan Cagiannos
// Created on: April 2022
// This is the Phaser3 game configeration file

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default:"arcade",
    arcade: {
      debug: true,
    },
  },
  // set backround color 
  backgroundColor: 0x5f6e7a
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCeneter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log(game)
