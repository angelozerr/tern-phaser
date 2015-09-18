exports['test Phaser completion'] = require('./completion/Phaser');
exports['test Sprite completion'] = require('./completion/Sprite');
exports['test Sprite completion'] = require('./completion/glMatrix');

if (require.main === module) require("test").run(exports);