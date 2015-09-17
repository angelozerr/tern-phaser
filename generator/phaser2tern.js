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
      tweek: tweek,
      getTernType: function(name) {
    	if (name == "Rectangle-like") return "Rectangle";
    	// tweek for https://github.com/angelozerr/tern-phaser/issues/6
    	if (name == "Point") return "Phaser.Point";
      }
    };
    var generator = new jsdoc2tern.Generator(options);
    return generator.process(jsDoc);
  }
  
  function tweek(jsdocItem) {
    if (jsdocItem.scope === "global" && jsdocItem.kind === "constant" && !jsdocItem.memberof) {
      // tweek to support Phaser.AUTO, etc 
      // see https://github.com/angelozerr/tern-phaser/issues/2
      jsdocItem.memberof = "Phaser";
    }    
  }
   
});  