exports['test Phaser completion'] = require('./PhaserCompletion');
exports['test Sprite completion'] = require('./SpriteCompletion');

if (require.main === module) require("test").run(exports);