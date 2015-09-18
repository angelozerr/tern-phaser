var util = require("./../util");

// See https://github.com/angelozerr/tern-phaser/issues/10
// gl-matrix.js generates memberof <anonymous>~
exports['test glMatrix (Issue 10) completion'] = function() {
  
  // Completion for glMatrix
	// in JSDoc we have "memberof": "<anonymous>~glMatrix",
  util.assertCompletion("glMatrix.", {
    "name":"setMatrixArrayType",
    "type":"fn(type: ?)",
    "origin":"phaser"
  }, "setMatrixArrayType");
  
}
