var util = require("./../util");

exports['test Phaser completion'] = function() {
  
  // Completion for Phaser object
  util.assertCompletion("new Ph", {
	"start":{"line":0,"ch":4},
	"end":{"line":0,"ch":6},
	"isProperty":false,
	"isObjectKey":false,
	"completions":[{"name":"Phaser","type":"Phaser","origin":"phaser"}]
  });
  
  // Completion for Game object
  util.assertCompletion("new Phaser.G", {
    "name":"Game",
    "type":"fn(width: number|string, height: number|string, renderer: number, parent: string|Element, state: ?, transparent: bool, antialias: bool, physicsConfig: ?)",
    "origin":"phaser"
  }, "Game");

}

// See https://github.com/angelozerr/tern-phaser/issues/1
exports['test tween (Issue 1) completion'] = function() {
  
  // Completion for tween
  util.assertCompletion("new Phaser.Game().add.tween().", {
    "name":"chain",
    "type":"fn(tweens: Phaser.Tween) -> Phaser.Tween",
    "origin":"phaser"
  }, "chain");

}

//See https://github.com/angelozerr/tern-phaser/issues/2
exports['test Phaser.AUTO (Issue 2) completion'] = function() {
  
  // Completion for tween
  util.assertCompletion("Phaser.AUT", {
    "start":{"line":0,"ch":7},
	"end":{"line":0,"ch":10},
	"isProperty":true,
	"isObjectKey":false,
	"completions":[{"name":"AUTO","type":"number","origin":"phaser"}]
  });

}