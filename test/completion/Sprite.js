var util = require("./../util");

// See https://github.com/angelozerr/tern-phaser/issues/6
exports['test Sprite (Issue 6) completion'] = function() {
  
  // Completion for Sprite object
  util.assertCompletion("new Phaser.Game().add.sprite().anchor.", {
    "name":"add",
    "type":"fn(x: number, y: number) -> Phaser.Point",
    "origin":"phaser"
  }, "add");

}