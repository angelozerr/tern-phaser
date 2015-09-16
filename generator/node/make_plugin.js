var fs = require("fs");
var jsdoc2tern = require("../phaser2tern");

var filepath =  __dirname + '/../../phaser.js';
make_plugin(filepath);

function make_plugin(fpath) {
  var filename = __dirname+"/../data/jsdoc-ast.json";
  var jsDoc = JSON.parse(fs.readFileSync(filename, "utf8"));
  var def = jsdoc2tern.Phaser.generate(jsDoc);

  var rbuff = fs.readFileSync(__dirname+"/template.js", "utf8");
  var wbuff = rbuff.replace(/'!def'/, function() { return JSON.stringify(def, null, ' ');});
  fs.writeFile(fpath, wbuff, "utf8", function (err) {
      if ( err ) {
          console.error("Failed write plugin : "+err);
          process.exit(1);
      }
      console.info("Finished make plugin : "+fpath);
  });
}