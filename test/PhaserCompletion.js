var util = require("./util");

// See 

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