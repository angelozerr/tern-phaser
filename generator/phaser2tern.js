(function(root, mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("./jsdoc2tern")); // CommonJS
    if (typeof define == "function" && define.amd) return define([ "exports", "jsdoc2tern" ], mod); // AMD
    mod(root.jsdoc2tern, root.jsdoc2tern); // Plain browser env
})(this, function(exports, jsdoc2tern) {
  "use strict";
  
  var Phaser = exports.Phaser = {};
  Phaser.generate = function(jsDoc) {
    var options = {
      "name" : "phaser",
      getTernType: function(name) {
    	if (name == "Rectangle-like") return "Rectangle";
      }
    };
    var generator = new jsdoc2tern.Generator(options);
    return generator.process(jsDoc);
  }
   
});  