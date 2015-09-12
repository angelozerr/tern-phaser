(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("phaser", function(server, options) {
    server.addDefs(defs);
  });
  
  var defs = {
		  "!name": "delite",
		  "!define": {},
		  "Phaser": {
		   "Animation": {
		    "!type": "fn(game: +Phaser.Game, parent: +Phaser.Sprite, name: string, frameData: +Phaser.FrameData, frames: [?]|[?], frameRate: number, loop: bool, loop: bool)",
		    "loop": {},
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "_parent": {
		      "!type": "+Phaser.Sprite"
		     },
		     "_frameData": {
		      "!type": "+Phaser.FrameData"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "_frames": {
		      "!type": "+array"
		     },
		     "delay": {
		      "!type": "number"
		     },
		     "loop": {
		      "!type": "bool"
		     },
		     "loopCount": {
		      "!type": "number"
		     },
		     "killOnComplete": {
		      "!type": "bool"
		     },
		     "isFinished": {
		      "!type": "bool"
		     },
		     "isPlaying": {
		      "!type": "bool"
		     },
		     "isPaused": {
		      "!type": "bool"
		     },
		     "_pauseStartTime": {
		      "!type": "bool"
		     },
		     "_frameIndex": {
		      "!type": "number"
		     },
		     "_frameDiff": {
		      "!type": "number"
		     },
		     "_frameSkip": {
		      "!type": "number"
		     },
		     "currentFrame": {
		      "!type": "+Phaser.Frame"
		     },
		     "onStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onUpdate": {
		      "!type": "+Phaser.Signal|+null"
		     },
		     "onComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onLoop": {
		      "!type": "+Phaser.Signal"
		     },
		     "play": {
		      "!type": "fn()"
		     },
		     "restart": {
		      "!type": "fn()"
		     },
		     "setFrame": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "onPause": {
		      "!type": "fn()"
		     },
		     "onResume": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "updateCurrentFrame": {
		      "!type": "fn()"
		     },
		     "next": {
		      "!type": "fn()"
		     },
		     "previous": {
		      "!type": "fn()"
		     },
		     "updateFrameData": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "complete": {
		      "!type": "fn()"
		     },
		     "paused": {
		      "!type": "bool"
		     },
		     "frameTotal": {
		      "!type": "number"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "speed": {
		      "!type": "number"
		     },
		     "enableUpdate": {
		      "!type": "bool"
		     }
		    },
		    "generateFrameNames": {
		     "!type": "fn()",
		     "suffix": {},
		     "output": {},
		     "frame": {},
		     "i": {}
		    }
		   },
		   "Animation#play": {
		    "prototype": {
		     "delay": {},
		     "loop": {},
		     "killOnComplete": {},
		     "isPlaying": {},
		     "isFinished": {},
		     "paused": {},
		     "loopCount": {},
		     "_timeLastFrame": {},
		     "_timeNextFrame": {},
		     "_frameIndex": {}
		    }
		   },
		   "Animation#play#_parent": {
		    "animations": {
		     "currentAnim": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#restart": {
		    "prototype": {
		     "isPlaying": {},
		     "isFinished": {},
		     "paused": {},
		     "loopCount": {},
		     "_timeLastFrame": {},
		     "_timeNextFrame": {},
		     "_frameIndex": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#restart#_parent": {
		    "animations": {
		     "currentAnim": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#setFrame": {
		    "frameIndex": {},
		    "useLocalFrameIndex": {},
		    "i": {},
		    "prototype": {
		     "_frameIndex": {},
		     "_timeNextFrame": {}
		    }
		   },
		   "Animation#stop": {
		    "resetFrame": {},
		    "dispatchComplete": {},
		    "prototype": {
		     "isPlaying": {},
		     "isFinished": {},
		     "paused": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#onPause": {
		    "prototype": {
		     "_frameDiff": {}
		    }
		   },
		   "Animation#onResume": {
		    "prototype": {
		     "_timeNextFrame": {}
		    }
		   },
		   "Animation#update": {
		    "prototype": {
		     "_frameSkip": {},
		     "_frameDiff": {},
		     "_timeLastFrame": {},
		     "_timeNextFrame": {},
		     "_frameIndex": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#updateCurrentFrame": {
		    "fromPlay": {},
		    "idx": {},
		    "prototype": {
		     "currentFrame": {}
		    }
		   },
		   "Animation#next": {
		    "quantity": {},
		    "frame": {},
		    "prototype": {
		     "_frameIndex": {}
		    }
		   },
		   "Animation#previous": {
		    "quantity": {},
		    "frame": {},
		    "prototype": {
		     "_frameIndex": {}
		    }
		   },
		   "Animation#updateFrameData": {
		    "prototype": {
		     "_frameData": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#destroy": {
		    "prototype": {
		     "game": {},
		     "_parent": {},
		     "_frames": {},
		     "_frameData": {},
		     "currentFrame": {},
		     "isPlaying": {}
		    }
		   },
		   "Animation#complete": {
		    "prototype": {
		     "_frameIndex": {},
		     "currentFrame": {},
		     "isPlaying": {},
		     "isFinished": {},
		     "paused": {}
		    }
		   },
		   "AnimationManager": {
		    "!type": "fn(sprite: +Phaser.Sprite)",
		    "prototype": {
		     "sprite": {
		      "!type": "+Phaser.Sprite"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "currentFrame": {
		      "!type": "+Phaser.Frame"
		     },
		     "currentAnim": {
		      "!type": "+Phaser.Animation"
		     },
		     "updateIfVisible": {
		      "!type": "bool"
		     },
		     "isLoaded": {
		      "!type": "bool"
		     },
		     "_frameData": {
		      "!type": "+Phaser.FrameData"
		     },
		     "_anims": {},
		     "_outputFrames": {},
		     "loadFrameData": {
		      "!type": "fn()"
		     },
		     "copyFrameData": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "validateFrames": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "next": {
		      "!type": "fn()"
		     },
		     "previous": {
		      "!type": "fn()"
		     },
		     "getAnimation": {
		      "!type": "fn()"
		     },
		     "refreshFrame": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "frameData": {
		      "!type": "+Phaser.FrameData"
		     },
		     "frameTotal": {
		      "!type": "number"
		     },
		     "paused": {
		      "!type": "bool"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     }
		    }
		   },
		   "AnimationManager#loadFrameData": {
		    "anim": {},
		    "prototype": {
		     "_frameData": {},
		     "frame": {},
		     "frameName": {},
		     "isLoaded": {}
		    }
		   },
		   "AnimationManager#copyFrameData": {
		    "prototype": {
		     "_frameData": {},
		     "frame": {},
		     "frameName": {},
		     "isLoaded": {}
		    },
		    "anim": {}
		   },
		   "AnimationManager#add": {
		    "frames": {},
		    "frameRate": {},
		    "loop": {},
		    "useNumericIndex": {},
		    "prototype": {
		     "_outputFrames": {},
		     "_anims[undefined]": {},
		     "currentAnim": {}
		    }
		   },
		   "AnimationManager#add#sprite": {
		    "refreshTexture": {}
		   },
		   "AnimationManager#validateFrames": {
		    "useNumericIndex": {},
		    "i": {}
		   },
		   "AnimationManager#play#currentAnim": {
		    "paused": {}
		   },
		   "AnimationManager#play": {
		    "prototype": {
		     "currentAnim": {},
		     "currentFrame": {}
		    }
		   },
		   "AnimationManager#stop": {
		    "resetFrame": {},
		    "prototype": {
		     "currentAnim": {}
		    }
		   },
		   "AnimationManager#update": {
		    "prototype": {
		     "currentFrame": {}
		    }
		   },
		   "AnimationManager#next": {
		    "prototype": {
		     "currentFrame": {}
		    }
		   },
		   "AnimationManager#previous": {
		    "prototype": {
		     "currentFrame": {}
		    }
		   },
		   "AnimationManager#destroy": {
		    "anim": {},
		    "prototype": {
		     "_anims": {},
		     "_outputFrames": {},
		     "_frameData": {},
		     "currentAnim": {},
		     "currentFrame": {},
		     "sprite": {},
		     "game": {}
		    }
		   },
		   "AnimationParser": {
		    "!type": "fn()",
		    "spriteSheet": {
		     "!type": "fn()",
		     "img": {},
		     "width": {},
		     "height": {},
		     "frameWidth": {},
		     "frameHeight": {},
		     "row": {},
		     "column": {},
		     "total": {},
		     "data": {},
		     "x": {},
		     "y": {},
		     "i": {}
		    },
		    "JSONData": {
		     "!type": "fn()",
		     "data": {},
		     "frames": {},
		     "newFrame": {},
		     "i": {}
		    },
		    "JSONDataHash": {
		     "!type": "fn()",
		     "data": {},
		     "frames": {},
		     "newFrame": {},
		     "i": {},
		     "key": {}
		    },
		    "XMLData": {
		     "!type": "fn()",
		     "data": {},
		     "frames": {},
		     "newFrame": {},
		     "name": {},
		     "frame": {},
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {},
		     "frameX": {},
		     "frameY": {},
		     "frameWidth": {},
		     "frameHeight": {},
		     "i": {}
		    }
		   },
		   "Frame": {
		    "!type": "fn(index: number, x: number, y: number, width: number, height: number, name: string)",
		    "prototype": {
		     "index": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "centerX": {
		      "!type": "number"
		     },
		     "centerY": {
		      "!type": "number"
		     },
		     "distance": {
		      "!type": "number"
		     },
		     "rotated": {
		      "!type": "bool"
		     },
		     "rotationDirection": {
		      "!type": "string"
		     },
		     "trimmed": {
		      "!type": "bool"
		     },
		     "sourceSizeW": {
		      "!type": "number"
		     },
		     "sourceSizeH": {
		      "!type": "number"
		     },
		     "spriteSourceSizeX": {
		      "!type": "number"
		     },
		     "spriteSourceSizeY": {
		      "!type": "number"
		     },
		     "spriteSourceSizeW": {
		      "!type": "number"
		     },
		     "spriteSourceSizeH": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "setTrim": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "getRect": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Frame#resize": {
		    "prototype": {
		     "width": {},
		     "height": {},
		     "centerX": {},
		     "centerY": {},
		     "distance": {},
		     "sourceSizeW": {},
		     "sourceSizeH": {},
		     "right": {},
		     "bottom": {}
		    }
		   },
		   "Frame#setTrim": {
		    "prototype": {
		     "trimmed": {},
		     "sourceSizeW": {},
		     "sourceSizeH": {},
		     "centerX": {},
		     "centerY": {},
		     "spriteSourceSizeX": {},
		     "spriteSourceSizeY": {},
		     "spriteSourceSizeW": {},
		     "spriteSourceSizeH": {}
		    }
		   },
		   "Frame#clone": {
		    "output": {},
		    "prop": {}
		   },
		   "Frame#clone~output": {
		    "undefined]": {}
		   },
		   "Frame#getRect": {
		    "out": {}
		   },
		   "FrameData": {
		    "!type": "fn()",
		    "prototype": {
		     "_frames": {
		      "!type": "[?]"
		     },
		     "_frameNames": {
		      "!type": "[?]"
		     },
		     "addFrame": {
		      "!type": "fn()"
		     },
		     "getFrame": {
		      "!type": "fn()"
		     },
		     "getFrameByName": {
		      "!type": "fn()"
		     },
		     "checkFrameName": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "getFrameRange": {
		      "!type": "fn()"
		     },
		     "getFrames": {
		      "!type": "fn()"
		     },
		     "getFrameIndexes": {
		      "!type": "fn()"
		     },
		     "total": {
		      "!type": "number"
		     }
		    }
		   },
		   "FrameData#addFrame": {
		    "prototype": {
		     "_frameNames[undefined]": {}
		    }
		   },
		   "FrameData#getFrame": {
		    "index": {}
		   },
		   "FrameData#clone": {
		    "output": {},
		    "i": {},
		    "p": {}
		   },
		   "FrameData#getFrameRange": {
		    "output": {},
		    "i": {}
		   },
		   "FrameData#getFrames": {
		    "useNumericIndex": {},
		    "output": {},
		    "i": {}
		   },
		   "FrameData#getFrameIndexes": {
		    "useNumericIndex": {},
		    "output": {},
		    "i": {}
		   },
		   "Camera": {
		    "!type": "fn(game: +Phaser.Game, id: number, x: number, y: number, width: number, height: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "world": {
		      "!type": "+Phaser.World"
		     },
		     "id": {
		      "!type": "number"
		     },
		     "view": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "deadzone": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "roundPx": {
		      "!type": "bool"
		     },
		     "atLimit": {
		      "!type": "bool"
		     },
		     "target": {
		      "!type": "+Phaser.Sprite"
		     },
		     "displayObject": {
		      "!type": "+PIXI.DisplayObject"
		     },
		     "scale": {
		      "!type": "+Phaser.Point"
		     },
		     "totalInView": {
		      "!type": "number"
		     },
		     "_targetPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "_edge": {
		      "!type": "number"
		     },
		     "_position": {
		      "!type": "+Phaser.Point"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "follow": {
		      "!type": "fn()"
		     },
		     "unfollow": {
		      "!type": "fn()"
		     },
		     "focusOn": {
		      "!type": "fn()"
		     },
		     "focusOnXY": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "updateTarget": {
		      "!type": "fn()"
		     },
		     "setBoundsToWorld": {
		      "!type": "fn()"
		     },
		     "checkBounds": {
		      "!type": "fn()"
		     },
		     "setPosition": {
		      "!type": "fn()"
		     },
		     "setSize": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "position": {
		      "!type": "+Phaser.Point"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     }
		    },
		    "FOLLOW_LOCKON": {
		     "!type": "number"
		    },
		    "FOLLOW_PLATFORMER": {
		     "!type": "number"
		    },
		    "FOLLOW_TOPDOWN": {
		     "!type": "number"
		    },
		    "FOLLOW_TOPDOWN_TIGHT": {
		     "!type": "number"
		    }
		   },
		   "Camera#atLimit": {
		    "x": {},
		    "y": {}
		   },
		   "Camera#preUpdate": {
		    "prototype": {
		     "totalInView": {}
		    }
		   },
		   "Camera#follow": {
		    "style": {},
		    "prototype": {
		     "target": {},
		     "deadzone": {}
		    },
		    "helper": {},
		    "w": {},
		    "h": {}
		   },
		   "Camera#unfollow": {
		    "prototype": {
		     "target": {}
		    }
		   },
		   "Camera#update#displayObject": {
		    "position": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Camera#updateTarget": {
		    "prototype": {
		     "_edge": {}
		    }
		   },
		   "Camera#updateTarget#view": {
		    "x": {},
		    "y": {}
		   },
		   "Camera#checkBounds#atLimit": {
		    "x": {},
		    "y": {}
		   },
		   "Camera#checkBounds#view": {
		    "x": {},
		    "y": {}
		   },
		   "Camera#setPosition#view": {
		    "x": {},
		    "y": {}
		   },
		   "Camera#setSize#view": {
		    "width": {},
		    "height": {}
		   },
		   "Camera#reset": {
		    "prototype": {
		     "target": {}
		    }
		   },
		   "Camera#reset#view": {
		    "x": {},
		    "y": {}
		   },
		   "Create": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "bmd": {
		      "!type": "+Phaser.BitmapData"
		     },
		     "canvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "ctx": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "palettes": {
		      "!type": "+array"
		     },
		     "texture": {
		      "!type": "fn()"
		     },
		     "grid": {
		      "!type": "fn()"
		     }
		    },
		    "PALETTE_ARNE": {
		     "!type": "number"
		    },
		    "PALETTE_JMP": {
		     "!type": "number"
		    },
		    "PALETTE_CGA": {
		     "!type": "number"
		    },
		    "PALETTE_C64": {
		     "!type": "number"
		    },
		    "PALETTE_JAPANESE_MACHINE": {
		     "!type": "number"
		    }
		   },
		   "Create#texture": {
		    "pixelWidth": {},
		    "pixelHeight": {},
		    "palette": {},
		    "w": {},
		    "h": {},
		    "y": {},
		    "row": {},
		    "x": {},
		    "d": {}
		   },
		   "Create#texture#ctx": {
		    "fillStyle": {}
		   },
		   "Create#grid#ctx": {
		    "fillStyle": {}
		   },
		   "Create#grid": {
		    "y": {},
		    "x": {}
		   },
		   "Filter": {
		    "!type": "fn(game: +Phaser.Game, uniforms: ?, fragmentSrc: [?]|string)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "passes": {
		      "!type": "+array"
		     },
		     "shaders": {
		      "!type": "+array"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "padding": {
		      "!type": "number"
		     },
		     "prevPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "uniforms": {},
		     "uniforms[undefined]": {},
		     "fragmentSrc": {
		      "!type": "+array|string"
		     },
		     "init": {
		      "!type": "fn()"
		     },
		     "setResolution": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     }
		    },
		    "d": {},
		    "key": {}
		   },
		   "Filter#uniforms": {
		    "resolution": {
		     "type": {},
		     "value": {
		      "x": {},
		      "y": {}
		     }
		    },
		    "time": {
		     "type": {},
		     "value": {}
		    },
		    "mouse": {
		     "type": {},
		     "value": {
		      "x": {},
		      "y": {}
		     }
		    },
		    "date": {
		     "type": {},
		     "value": {}
		    },
		    "sampleRate": {
		     "type": {},
		     "value": {}
		    },
		    "iChannel0": {
		     "type": {},
		     "value": {},
		     "textureData": {
		      "repeat": {}
		     }
		    },
		    "iChannel1": {
		     "type": {},
		     "value": {},
		     "textureData": {
		      "repeat": {}
		     }
		    },
		    "iChannel2": {
		     "type": {},
		     "value": {},
		     "textureData": {
		      "repeat": {}
		     }
		    },
		    "iChannel3": {
		     "type": {},
		     "value": {},
		     "textureData": {
		      "repeat": {}
		     }
		    }
		   },
		   "Filter#setResolution#uniforms": {
		    "resolution": {
		     "value": {
		      "x": {},
		      "y": {}
		     }
		    }
		   },
		   "Filter#update": {
		    "x": {},
		    "y": {}
		   },
		   "Filter#update#uniforms": {
		    "mouse": {
		     "value": {
		      "x": {},
		      "y": {}
		     }
		    },
		    "time": {
		     "value": {}
		    }
		   },
		   "Filter#destroy": {
		    "prototype": {
		     "game": {}
		    }
		   },
		   "FlexGrid": {
		    "!type": "fn(manager: +Phaser.ScaleManager, width: number, height: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "manager": {
		      "!type": "+Phaser.ScaleManager"
		     },
		     "width": {},
		     "height": {},
		     "boundsCustom": {},
		     "boundsFluid": {},
		     "boundsFull": {},
		     "boundsNone": {},
		     "positionCustom": {
		      "!type": "+Phaser.Point"
		     },
		     "positionFluid": {},
		     "positionFull": {},
		     "positionNone": {},
		     "scaleCustom": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleFluid": {},
		     "scaleFluidInversed": {},
		     "scaleFull": {},
		     "scaleNone": {},
		     "customWidth": {},
		     "customHeight": {},
		     "customOffsetX": {},
		     "customOffsetY": {},
		     "ratioH": {},
		     "ratioV": {},
		     "multiplier": {},
		     "layers": {},
		     "setSize": {
		      "!type": "fn()"
		     },
		     "createCustomLayer": {
		      "!type": "fn()"
		     },
		     "createFluidLayer": {
		      "!type": "fn()"
		     },
		     "createFullLayer": {
		      "!type": "fn()"
		     },
		     "createFixedLayer": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "onResize": {
		      "!type": "fn()"
		     },
		     "refresh": {
		      "!type": "fn()"
		     },
		     "fitSprite": {
		      "!type": "fn()"
		     },
		     "debug": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "FlexGrid#setSize": {
		    "prototype": {
		     "width": {},
		     "height": {},
		     "ratioH": {},
		     "ratioV": {},
		     "scaleNone": {}
		    }
		   },
		   "FlexGrid#setSize#boundsNone": {
		    "width": {},
		    "height": {}
		   },
		   "FlexGrid#createCustomLayer": {
		    "addToWorld": {},
		    "prototype": {
		     "customWidth": {},
		     "customHeight": {}
		    },
		    "layer": {}
		   },
		   "FlexGrid#createCustomLayer#boundsCustom": {
		    "width": {},
		    "height": {}
		   },
		   "FlexGrid#createFluidLayer": {
		    "addToWorld": {},
		    "layer": {}
		   },
		   "FlexGrid#createFullLayer": {
		    "layer": {}
		   },
		   "FlexGrid#createFixedLayer": {
		    "layer": {}
		   },
		   "FlexGrid#reset": {
		    "i": {}
		   },
		   "FlexGrid#reset#layers[undefined]": {
		    "position": {},
		    "scale": {}
		   },
		   "FlexGrid#onResize": {
		    "prototype": {
		     "ratioH": {},
		     "ratioV": {}
		    }
		   },
		   "FlexGrid#refresh": {
		    "prototype": {
		     "multiplier": {}
		    }
		   },
		   "FlexGrid#refresh#boundsFluid": {
		    "width": {},
		    "height": {}
		   },
		   "FlexGrid#refresh#boundsFull": {
		    "width": {},
		    "height": {}
		   },
		   "FlexLayer": {
		    "!type": "fn(manager: +Phaser.FlexGrid, position: +Phaser.Point, bounds: +Phaser.Rectangle, scale: +Phaser.Point)",
		    "prototype": {
		     "manager": {
		      "!type": "+Phaser.ScaleManager"
		     },
		     "grid": {
		      "!type": "+Phaser.FlexGrid"
		     },
		     "persist": {},
		     "position": {
		      "!type": "+Phaser.Point"
		     },
		     "bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "scale": {
		      "!type": "+Phaser.Point"
		     },
		     "topLeft": {
		      "!type": "+Phaser.Point"
		     },
		     "topMiddle": {
		      "!type": "+Phaser.Point"
		     },
		     "topRight": {
		      "!type": "+Phaser.Point"
		     },
		     "bottomLeft": {
		      "!type": "+Phaser.Point"
		     },
		     "bottomMiddle": {
		      "!type": "+Phaser.Point"
		     },
		     "bottomRight": {
		      "!type": "+Phaser.Point"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "debug": {
		      "!type": "fn()"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "z": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "ignoreDestroy": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "classType": {},
		     "cursor": {
		      "!type": "+DisplayObject"
		     },
		     "enableBody": {
		      "!type": "bool"
		     },
		     "enableBodyDebug": {
		      "!type": "bool"
		     },
		     "physicsBodyType": {
		      "!type": "number"
		     },
		     "physicsSortDirection": {
		      "!type": "number"
		     },
		     "onDestroy": {
		      "!type": "+Phaser.Signal"
		     },
		     "cursorIndex": {
		      "!type": "number"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "hash": {
		      "!type": "+array"
		     },
		     "_sortProperty": {
		      "!type": "string"
		     },
		     "add": {
		      "!type": "fn(child: +DisplayObject, silent: bool) -> ?"
		     },
		     "addToHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "removeFromHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "addMultiple": {
		      "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> ?"
		     },
		     "addAt": {
		      "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> ?"
		     },
		     "getAt": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "create": {
		      "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> ?"
		     },
		     "createMultiple": {
		      "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "next": {
		      "!type": "fn() -> ?"
		     },
		     "previous": {
		      "!type": "fn() -> ?"
		     },
		     "swap": {
		      "!type": "fn(child1: +any, child2: +any)"
		     },
		     "bringToTop": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveUp": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveDown": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "xy": {
		      "!type": "fn(index: number, x: number, y: number)"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "replace": {
		      "!type": "fn(oldChild: +any, newChild: +any) -> ?"
		     },
		     "hasProperty": {
		      "!type": "fn(child: +any, key: [?]) -> ?"
		     },
		     "setProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> ?"
		     },
		     "checkProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> ?"
		     },
		     "set": {
		      "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> ?"
		     },
		     "setAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "setAllChildren": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "checkAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		     },
		     "addAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "subAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "multiplyAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "divideAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "callAllExists": {
		      "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		     },
		     "callbackFromArray": {
		      "!type": "fn(child: ?, callback: +array, length: number)"
		     },
		     "callAll": {
		      "!type": "fn(method: string, context: string, args: +any)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn(predicate: +function, checkExists: bool) -> ?"
		     },
		     "forEach": {
		      "!type": "fn(callback: +function, callbackContext: ?, checkExists: bool, args: +any)"
		     },
		     "forEachExists": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachAlive": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachDead": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "sort": {
		      "!type": "fn(key: string, order: number)"
		     },
		     "customSort": {
		      "!type": "fn(sortHandler: +function, context: ?)"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "descendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "iterate": {
		      "!type": "fn(key: string, value: +any, returnType: number, callback: +function, callbackContext: ?, args: [?]) -> ?"
		     },
		     "getFirstExists": {
		      "!type": "fn(exists: bool) -> ?"
		     },
		     "getFirstAlive": {
		      "!type": "fn() -> ?"
		     },
		     "getFirstDead": {
		      "!type": "fn() -> ?"
		     },
		     "getTop": {
		      "!type": "fn() -> ?"
		     },
		     "getBottom": {
		      "!type": "fn() -> ?"
		     },
		     "countLiving": {
		      "!type": "fn() -> ?"
		     },
		     "countDead": {
		      "!type": "fn() -> ?"
		     },
		     "getRandom": {
		      "!type": "fn(startIndex: number, length: number) -> ?"
		     },
		     "remove": {
		      "!type": "fn(child: +any, destroy: bool, silent: bool) -> ?"
		     },
		     "moveAll": {
		      "!type": "fn(group: +Phaser.Group, silent: bool) -> ?"
		     },
		     "removeAll": {
		      "!type": "fn(destroy: bool, silent: bool)"
		     },
		     "removeBetween": {
		      "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool, soft: bool)"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "rotation": {
		      "!type": "number"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "alpha": {
		      "!type": "number"
		     },
		     "children": {}
		    }
		   },
		   "Game": {
		    "!type": "fn(width: number|string, height: number|string, renderer: number, parent: string|+HTMLElement, state: ?, transparent: bool, antialias: bool, physicsConfig: ?)",
		    "prototype": {
		     "id": {
		      "!type": "number"
		     },
		     "config": {},
		     "physicsConfig": {},
		     "parent": {
		      "!type": "string|+HTMLElement"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "resolution": {
		      "!type": "number"
		     },
		     "_width": {
		      "!type": "number"
		     },
		     "_height": {
		      "!type": "number"
		     },
		     "transparent": {
		      "!type": "bool"
		     },
		     "antialias": {
		      "!type": "bool"
		     },
		     "preserveDrawingBuffer": {
		      "!type": "bool"
		     },
		     "renderer": {
		      "!type": "+PIXI.CanvasRenderer|+PIXI.WebGLRenderer"
		     },
		     "renderType": {
		      "!type": "number"
		     },
		     "state": {
		      "!type": "+Phaser.StateManager"
		     },
		     "isBooted": {
		      "!type": "bool"
		     },
		     "isRunning": {
		      "!type": "bool"
		     },
		     "raf": {
		      "!type": "+Phaser.RequestAnimationFrame"
		     },
		     "add": {
		      "!type": "+Phaser.GameObjectFactory"
		     },
		     "make": {
		      "!type": "+Phaser.GameObjectCreator"
		     },
		     "cache": {
		      "!type": "+Phaser.Cache"
		     },
		     "input": {
		      "!type": "+Phaser.Input"
		     },
		     "load": {
		      "!type": "+Phaser.Loader"
		     },
		     "math": {
		      "!type": "+Phaser.Math"
		     },
		     "net": {
		      "!type": "+Phaser.Net"
		     },
		     "scale": {
		      "!type": "+Phaser.ScaleManager"
		     },
		     "sound": {
		      "!type": "+Phaser.SoundManager"
		     },
		     "stage": {
		      "!type": "+Phaser.Stage"
		     },
		     "time": {
		      "!type": "+Phaser.Time"
		     },
		     "tweens": {
		      "!type": "+Phaser.TweenManager"
		     },
		     "world": {
		      "!type": "+Phaser.World"
		     },
		     "physics": {
		      "!type": "+Phaser.Physics"
		     },
		     "plugins": {
		      "!type": "+Phaser.PluginManager"
		     },
		     "rnd": {
		      "!type": "+Phaser.RandomDataGenerator"
		     },
		     "device": {
		      "!type": "+Phaser.Device"
		     },
		     "camera": {
		      "!type": "+Phaser.Camera"
		     },
		     "canvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "context": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "debug": {
		      "!type": "+Phaser.Utils.Debug"
		     },
		     "particles": {
		      "!type": "+Phaser.Particles"
		     },
		     "create": {
		      "!type": "+Phaser.Create"
		     },
		     "lockRender": {
		      "!type": "bool"
		     },
		     "stepping": {
		      "!type": "bool"
		     },
		     "pendingStep": {
		      "!type": "bool"
		     },
		     "stepCount": {
		      "!type": "number"
		     },
		     "onPause": {
		      "!type": "+Phaser.Signal"
		     },
		     "onResume": {
		      "!type": "+Phaser.Signal"
		     },
		     "onBlur": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFocus": {
		      "!type": "+Phaser.Signal"
		     },
		     "_paused": {
		      "!type": "bool"
		     },
		     "_codePaused": {
		      "!type": "bool"
		     },
		     "currentUpdateID": {
		      "!type": "number"
		     },
		     "updatesThisFrame": {
		      "!type": "number"
		     },
		     "_deltaTime": {
		      "!type": "number"
		     },
		     "_lastCount": {
		      "!type": "number"
		     },
		     "_spiraling": {
		      "!type": "number"
		     },
		     "_kickstart": {
		      "!type": "bool"
		     },
		     "fpsProblemNotifier": {
		      "!type": "+Phaser.Signal"
		     },
		     "forceSingleUpdate": {
		      "!type": "bool"
		     },
		     "_nextFpsNotification": {
		      "!type": "number"
		     },
		     "parseConfig": {
		      "!type": "fn()"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "showDebugHeader": {
		      "!type": "fn()"
		     },
		     "setUpRenderer": {
		      "!type": "fn()"
		     },
		     "contextLost": {
		      "!type": "fn()"
		     },
		     "contextRestored": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "updateLogic": {
		      "!type": "fn()"
		     },
		     "updateRender": {
		      "!type": "fn()"
		     },
		     "enableStep": {
		      "!type": "fn()"
		     },
		     "disableStep": {
		      "!type": "fn()"
		     },
		     "step": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "gamePaused": {
		      "!type": "fn()"
		     },
		     "gameResumed": {
		      "!type": "fn()"
		     },
		     "focusLoss": {
		      "!type": "fn()"
		     },
		     "focusGain": {
		      "!type": "fn()"
		     },
		     "paused": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Game#config": {
		    "enableDebug": {}
		   },
		   "Game#parseConfig": {
		    "prototype": {
		     "config": {},
		     "_width": {},
		     "_height": {},
		     "renderType": {},
		     "parent": {},
		     "transparent": {},
		     "antialias": {},
		     "resolution": {},
		     "preserveDrawingBuffer": {},
		     "physicsConfig": {},
		     "rnd": {},
		     "state": {}
		    },
		    "seed": {},
		    "state": {}
		   },
		   "Game#parseConfig#config": {
		    "enableDebug": {}
		   },
		   "Game#boot": {
		    "prototype": {
		     "onPause": {},
		     "onResume": {},
		     "onBlur": {},
		     "onFocus": {},
		     "isBooted": {},
		     "math": {},
		     "scale": {},
		     "stage": {},
		     "world": {},
		     "add": {},
		     "make": {},
		     "cache": {},
		     "load": {},
		     "time": {},
		     "tweens": {},
		     "input": {},
		     "sound": {},
		     "physics": {},
		     "particles": {},
		     "create": {},
		     "plugins": {},
		     "net": {},
		     "debug": {},
		     "isRunning": {},
		     "raf": {},
		     "_kickstart": {}
		    }
		   },
		   "Game#boot#debug": {
		    "preUpdate": {
		     "!type": "fn()"
		    },
		    "update": {
		     "!type": "fn()"
		    },
		    "reset": {
		     "!type": "fn()"
		    }
		   },
		   "Game#showDebugHeader": {
		    "v": {},
		    "r": {},
		    "a": {},
		    "c": {},
		    "args": {},
		    "i": {}
		   },
		   "Game#setUpRenderer": {
		    "prototype": {
		     "canvas": {},
		     "renderType": {},
		     "renderer": {},
		     "context": {}
		    }
		   },
		   "Game#setUpRenderer#canvas": {
		    "style": {
		     "'-webkit-full-screen'": {}
		    },
		    "screencanvas": {}
		   },
		   "Game#setUpRenderer#stage": {
		    "smoothed": {}
		   },
		   "Game#contextLost#renderer": {
		    "contextLost": {}
		   },
		   "Game#contextRestored#renderer": {
		    "contextLost": {}
		   },
		   "Game#update": {
		    "prototype": {
		     "_kickstart": {},
		     "_nextFpsNotification": {},
		     "_deltaTime": {},
		     "_spiraling": {},
		     "updatesThisFrame": {},
		     "currentUpdateID": {},
		     "_lastCount": {}
		    },
		    "slowStep": {},
		    "count": {}
		   },
		   "Game#updateLogic": {
		    "prototype": {
		     "pendingStep": {}
		    }
		   },
		   "Game#enableStep": {
		    "prototype": {
		     "stepping": {},
		     "pendingStep": {},
		     "stepCount": {}
		    }
		   },
		   "Game#disableStep": {
		    "prototype": {
		     "stepping": {},
		     "pendingStep": {}
		    }
		   },
		   "Game#step": {
		    "prototype": {
		     "pendingStep": {}
		    }
		   },
		   "Game#destroy": {
		    "prototype": {
		     "state": {},
		     "cache": {},
		     "input": {},
		     "load": {},
		     "sound": {},
		     "stage": {},
		     "time": {},
		     "world": {},
		     "isBooted": {}
		    }
		   },
		   "GAMES[undefined]": {},
		   "Game#gamePaused": {
		    "prototype": {
		     "_paused": {},
		     "lockRender": {}
		    }
		   },
		   "Game#gameResumed": {
		    "prototype": {
		     "_paused": {},
		     "lockRender": {}
		    }
		   },
		   "Group": {
		    "!type": "fn()",
		    "addToStage": {},
		    "enableBody": {},
		    "physicsBodyType": {},
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "z": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "ignoreDestroy": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "classType": {},
		     "cursor": {
		      "!type": "+DisplayObject"
		     },
		     "enableBody": {
		      "!type": "bool"
		     },
		     "enableBodyDebug": {
		      "!type": "bool"
		     },
		     "physicsBodyType": {
		      "!type": "number"
		     },
		     "physicsSortDirection": {
		      "!type": "number"
		     },
		     "onDestroy": {
		      "!type": "+Phaser.Signal"
		     },
		     "cursorIndex": {
		      "!type": "number"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "hash": {
		      "!type": "+array"
		     },
		     "_sortProperty": {
		      "!type": "string"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "addToHash": {
		      "!type": "fn()"
		     },
		     "removeFromHash": {
		      "!type": "fn()"
		     },
		     "addMultiple": {
		      "!type": "fn()"
		     },
		     "addAt": {
		      "!type": "fn()"
		     },
		     "getAt": {
		      "!type": "fn()"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "createMultiple": {
		      "!type": "fn()"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn()"
		     },
		     "next": {
		      "!type": "fn()"
		     },
		     "previous": {
		      "!type": "fn()"
		     },
		     "swap": {
		      "!type": "fn()"
		     },
		     "bringToTop": {
		      "!type": "fn()"
		     },
		     "sendToBack": {
		      "!type": "fn()"
		     },
		     "moveUp": {
		      "!type": "fn()"
		     },
		     "moveDown": {
		      "!type": "fn()"
		     },
		     "xy": {
		      "!type": "fn()"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn()"
		     },
		     "replace": {
		      "!type": "fn()"
		     },
		     "hasProperty": {
		      "!type": "fn()"
		     },
		     "setProperty": {
		      "!type": "fn()"
		     },
		     "checkProperty": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "setAll": {
		      "!type": "fn()"
		     },
		     "setAllChildren": {
		      "!type": "fn()"
		     },
		     "checkAll": {
		      "!type": "fn()"
		     },
		     "addAll": {
		      "!type": "fn()"
		     },
		     "subAll": {
		      "!type": "fn()"
		     },
		     "multiplyAll": {
		      "!type": "fn()"
		     },
		     "divideAll": {
		      "!type": "fn()"
		     },
		     "callAllExists": {
		      "!type": "fn()"
		     },
		     "callbackFromArray": {
		      "!type": "fn()"
		     },
		     "callAll": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn()"
		     },
		     "forEach": {
		      "!type": "fn()"
		     },
		     "forEachExists": {
		      "!type": "fn()"
		     },
		     "forEachAlive": {
		      "!type": "fn()"
		     },
		     "forEachDead": {
		      "!type": "fn()"
		     },
		     "sort": {
		      "!type": "fn()"
		     },
		     "customSort": {
		      "!type": "fn()"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn()"
		     },
		     "descendingSortHandler": {
		      "!type": "fn()"
		     },
		     "iterate": {
		      "!type": "fn()"
		     },
		     "getFirstExists": {
		      "!type": "fn()"
		     },
		     "getFirstAlive": {
		      "!type": "fn()"
		     },
		     "getFirstDead": {
		      "!type": "fn()"
		     },
		     "getTop": {
		      "!type": "fn()"
		     },
		     "getBottom": {
		      "!type": "fn()"
		     },
		     "countLiving": {
		      "!type": "fn()"
		     },
		     "countDead": {
		      "!type": "fn()"
		     },
		     "getRandom": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "moveAll": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "removeBetween": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "rotation": {
		      "!type": "number"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "alpha": {
		      "!type": "number"
		     },
		     "children": {}
		    },
		    "parent": {},
		    "RETURN_NONE": {
		     "!type": "number"
		    },
		    "RETURN_TOTAL": {
		     "!type": "number"
		    },
		    "RETURN_CHILD": {
		     "!type": "number"
		    },
		    "SORT_ASCENDING": {
		     "!type": "number"
		    },
		    "SORT_DESCENDING": {
		     "!type": "number"
		    }
		   },
		   "Group#add": {
		    "silent": {},
		    "prototype": {
		     "cursor": {}
		    }
		   },
		   "Group#addToHash": {
		    "index": {}
		   },
		   "Group#removeFromHash": {
		    "index": {}
		   },
		   "Group#addMultiple": {
		    "i": {}
		   },
		   "Group#addAt": {
		    "silent": {},
		    "prototype": {
		     "cursor": {}
		    }
		   },
		   "Group#create": {
		    "exists": {},
		    "child": {},
		    "prototype": {
		     "cursor": {}
		    }
		   },
		   "Group#create~child": {
		    "exists": {},
		    "visible": {},
		    "alive": {},
		    "z": {}
		   },
		   "Group#createMultiple": {
		    "exists": {},
		    "i": {}
		   },
		   "Group#updateZ": {
		    "i": {}
		   },
		   "Group#updateZ#children[undefined]": {
		    "z": {}
		   },
		   "Group#resetCursor": {
		    "index": {},
		    "prototype": {
		     "cursorIndex": {},
		     "cursor": {}
		    }
		   },
		   "Group#next": {
		    "prototype": {
		     "cursorIndex": {},
		     "cursor": {}
		    }
		   },
		   "Group#previous": {
		    "prototype": {
		     "cursorIndex": {},
		     "cursor": {}
		    }
		   },
		   "Group#moveUp": {
		    "a": {},
		    "b": {}
		   },
		   "Group#moveDown": {
		    "a": {},
		    "b": {}
		   },
		   "Group#xy~": {
		    "x": {},
		    "y": {}
		   },
		   "Group#replace": {
		    "index": {}
		   },
		   "Group#hasProperty": {
		    "len": {}
		   },
		   "Group#setProperty": {
		    "force": {},
		    "operation": {},
		    "len": {}
		   },
		   "Group#checkProperty": {
		    "force": {}
		   },
		   "Group#set": {
		    "force": {},
		    "key": {},
		    "checkAlive": {},
		    "checkVisible": {}
		   },
		   "Group#setAll": {
		    "checkAlive": {},
		    "checkVisible": {},
		    "force": {},
		    "key": {},
		    "operation": {},
		    "i": {}
		   },
		   "Group#setAllChildren": {
		    "checkAlive": {},
		    "checkVisible": {},
		    "force": {},
		    "operation": {},
		    "i": {}
		   },
		   "Group#checkAll": {
		    "checkAlive": {},
		    "checkVisible": {},
		    "force": {},
		    "i": {}
		   },
		   "Group#callAllExists": {
		    "args": {},
		    "i": {}
		   },
		   "Group#callAll": {
		    "method": {},
		    "methodLength": {},
		    "context": {},
		    "contextLength": {},
		    "args": {},
		    "i": {},
		    "callback": {},
		    "callbackContext": {}
		   },
		   "Group#preUpdate": {
		    "prototype": {
		     "renderOrderID": {}
		    },
		    "i": {}
		   },
		   "Group#update": {
		    "i": {}
		   },
		   "Group#postUpdate": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    },
		    "i": {}
		   },
		   "Group#filter": {
		    "index": {},
		    "length": {},
		    "results": {},
		    "child": {}
		   },
		   "Group#forEach": {
		    "checkExists": {},
		    "i": {},
		    "args": {}
		   },
		   "Group#forEach~args": {
		    "0]": {}
		   },
		   "Group#forEachExists": {
		    "args": {},
		    "i": {}
		   },
		   "Group#forEachAlive": {
		    "args": {},
		    "i": {}
		   },
		   "Group#forEachDead": {
		    "args": {},
		    "i": {}
		   },
		   "Group#sort": {
		    "key": {},
		    "order": {},
		    "prototype": {
		     "_sortProperty": {}
		    }
		   },
		   "Group#iterate": {
		    "total": {},
		    "i": {}
		   },
		   "Group#getFirstExists": {
		    "exists": {}
		   },
		   "Group#getRandom": {
		    "startIndex": {},
		    "length": {}
		   },
		   "Group#remove": {
		    "destroy": {},
		    "silent": {},
		    "removed": {}
		   },
		   "Group#moveAll": {
		    "silent": {},
		    "prototype": {
		     "hash": {},
		     "cursor": {}
		    }
		   },
		   "Group#removeAll": {
		    "destroy": {},
		    "silent": {},
		    "removed": {},
		    "prototype": {
		     "hash": {},
		     "cursor": {}
		    }
		   },
		   "Group#removeBetween": {
		    "endIndex": {},
		    "destroy": {},
		    "silent": {},
		    "i": {},
		    "removed": {},
		    "prototype": {
		     "cursor": {}
		    }
		   },
		   "Group#destroy": {
		    "destroyChildren": {},
		    "soft": {},
		    "prototype": {
		     "cursor": {},
		     "filters": {},
		     "pendingDestroy": {},
		     "game": {},
		     "exists": {}
		    }
		   },
		   "Plugin": {
		    "!type": "fn(game: +Phaser.Game, parent: +any)",
		    "parent": {},
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "parent": {
		      "!type": "+any"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "hasPreUpdate": {
		      "!type": "bool"
		     },
		     "hasUpdate": {
		      "!type": "bool"
		     },
		     "hasPostUpdate": {
		      "!type": "bool"
		     },
		     "hasRender": {
		      "!type": "bool"
		     },
		     "hasPostRender": {
		      "!type": "bool"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "postRender": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Plugin#destroy": {
		    "prototype": {
		     "game": {},
		     "parent": {},
		     "active": {},
		     "visible": {}
		    }
		   },
		   "PluginManager": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "plugins": {
		      "!type": "[?]"
		     },
		     "_len": {
		      "!type": "number"
		     },
		     "_i": {
		      "!type": "number"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "postRender": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "PluginManager#add": {
		    "args": {},
		    "result": {},
		    "plugin": {},
		    "prototype": {
		     "_len": {}
		    }
		   },
		   "PluginManager#add~plugin": {
		    "game": {},
		    "parent": {},
		    "hasPreUpdate": {},
		    "hasUpdate": {},
		    "hasPostUpdate": {},
		    "hasRender": {},
		    "hasPostRender": {},
		    "active": {},
		    "visible": {}
		   },
		   "PluginManager#remove": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#removeAll": {
		    "prototype": {
		     "_i": {},
		     "_len": {}
		    }
		   },
		   "PluginManager#removeAll#plugins": {
		    "length": {}
		   },
		   "PluginManager#preUpdate": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#update": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#postUpdate": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#render": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#postRender": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#destroy": {
		    "prototype": {
		     "game": {}
		    }
		   },
		   "ScaleManager": {
		    "!type": "fn(game: +Phaser.Game, width: number|string, height: number|string)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "dom": {
		      "!type": "+Phaser.DOM"
		     },
		     "grid": {
		      "!type": "+Phaser.FlexGrid"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "minWidth": {
		      "!type": "number"
		     },
		     "maxWidth": {
		      "!type": "number"
		     },
		     "minHeight": {
		      "!type": "number"
		     },
		     "maxHeight": {
		      "!type": "number"
		     },
		     "offset": {
		      "!type": "+Phaser.Point"
		     },
		     "forceLandscape": {
		      "!type": "bool"
		     },
		     "forcePortrait": {
		      "!type": "bool"
		     },
		     "incorrectOrientation": {
		      "!type": "bool"
		     },
		     "_pageAlignHorizontally": {
		      "!type": "bool"
		     },
		     "_pageAlignVertically": {
		      "!type": "bool"
		     },
		     "onOrientationChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "enterIncorrectOrientation": {
		      "!type": "+Phaser.Signal"
		     },
		     "leaveIncorrectOrientation": {
		      "!type": "+Phaser.Signal"
		     },
		     "fullScreenTarget": {
		      "!type": "+DOMElement"
		     },
		     "_createdFullScreenTarget": {
		      "!type": "+DOMElement"
		     },
		     "onFullScreenInit": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFullScreenChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFullScreenError": {
		      "!type": "+Phaser.Signal"
		     },
		     "screenOrientation": {
		      "!type": "string"
		     },
		     "scaleFactor": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleFactorInversed": {
		      "!type": "+Phaser.Point"
		     },
		     "margin": {
		      "!type": "+Bounds-like"
		     },
		     "bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "aspectRatio": {
		      "!type": "number"
		     },
		     "sourceAspectRatio": {
		      "!type": "number"
		     },
		     "event": {
		      "!type": "+any"
		     },
		     "windowConstraints": {
		      "!type": "string"
		     },
		     "compatibility": {
		      "!type": "bool"
		     },
		     "_scaleMode": {
		      "!type": "number"
		     },
		     "_fullScreenScaleMode": {},
		     "parentIsWindow": {
		      "!type": "bool"
		     },
		     "parentNode": {
		      "!type": "+DOMElement"
		     },
		     "parentScaleFactor": {
		      "!type": "+Phaser.Point"
		     },
		     "trackParentInterval": {
		      "!type": "number"
		     },
		     "onSizeChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "onResize": {
		      "!type": "+function"
		     },
		     "onResizeContext": {},
		     "_pendingScaleMode": {
		      "!type": "number"
		     },
		     "_fullScreenRestore": {},
		     "_gameSize": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_userScaleFactor": {
		      "!type": "+Phaser.Point"
		     },
		     "_userScaleTrim": {
		      "!type": "+Phaser.Point"
		     },
		     "_lastUpdate": {
		      "!type": "number"
		     },
		     "_updateThrottle": {
		      "!type": "number"
		     },
		     "_updateThrottleReset": {
		      "!type": "number"
		     },
		     "_parentBounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_tempBounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_lastReportedCanvasSize": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_lastReportedGameSize": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_booted": {
		      "!type": "bool"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "parseConfig": {
		      "!type": "fn()"
		     },
		     "setupScale": {
		      "!type": "fn()"
		     },
		     "_gameResumed": {
		      "!type": "fn()"
		     },
		     "setGameSize": {
		      "!type": "fn()"
		     },
		     "setUserScale": {
		      "!type": "fn()"
		     },
		     "setResizeCallback": {
		      "!type": "fn()"
		     },
		     "signalSizeChange": {
		      "!type": "fn()"
		     },
		     "setMinMax": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "pauseUpdate": {
		      "!type": "fn()"
		     },
		     "updateDimensions": {
		      "!type": "fn()"
		     },
		     "updateScalingAndBounds": {
		      "!type": "fn()"
		     },
		     "forceOrientation": {
		      "!type": "fn()"
		     },
		     "classifyOrientation": {
		      "!type": "fn()"
		     },
		     "updateOrientationState": {
		      "!type": "fn()"
		     },
		     "orientationChange": {
		      "!type": "fn()"
		     },
		     "windowResize": {
		      "!type": "fn()"
		     },
		     "scrollTop": {
		      "!type": "fn()"
		     },
		     "refresh": {
		      "!type": "fn()"
		     },
		     "updateLayout": {
		      "!type": "fn()"
		     },
		     "getParentBounds": {
		      "!type": "fn()"
		     },
		     "alignCanvas": {
		      "!type": "fn()"
		     },
		     "reflowGame": {
		      "!type": "fn()"
		     },
		     "reflowCanvas": {
		      "!type": "fn()"
		     },
		     "resetCanvas": {
		      "!type": "fn()"
		     },
		     "queueUpdate": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "setMaximum": {
		      "!type": "fn()"
		     },
		     "setShowAll": {
		      "!type": "fn()"
		     },
		     "setExactFit": {
		      "!type": "fn()"
		     },
		     "createFullScreenTarget": {
		      "!type": "fn()"
		     },
		     "startFullScreen": {
		      "!type": "fn()"
		     },
		     "stopFullScreen": {
		      "!type": "fn()"
		     },
		     "cleanupCreatedTarget": {
		      "!type": "fn()"
		     },
		     "prepScreenMode": {
		      "!type": "fn()"
		     },
		     "fullScreenChange": {
		      "!type": "fn()"
		     },
		     "fullScreenError": {
		      "!type": "fn()"
		     },
		     "scaleSprite": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "boundingParent": {
		      "!type": "+DOMElement"
		     },
		     "scaleMode": {
		      "!type": "number"
		     },
		     "fullScreenScaleMode": {
		      "!type": "number"
		     },
		     "currentScaleMode": {
		      "!type": "number"
		     },
		     "pageAlignHorizontally": {
		      "!type": "bool"
		     },
		     "pageAlignVertically": {
		      "!type": "bool"
		     },
		     "isFullScreen": {
		      "!type": "bool"
		     },
		     "isPortrait": {
		      "!type": "bool"
		     },
		     "isLandscape": {
		      "!type": "bool"
		     },
		     "isGamePortrait": {
		      "!type": "bool"
		     },
		     "isGameLandscape": {
		      "!type": "bool"
		     }
		    },
		    "EXACT_FIT": {
		     "!type": "number"
		    },
		    "NO_SCALE": {
		     "!type": "number"
		    },
		    "SHOW_ALL": {
		     "!type": "number"
		    },
		    "RESIZE": {
		     "!type": "number"
		    },
		    "USER_SCALE": {
		     "!type": "number"
		    }
		   },
		   "ScaleManager#margin": {
		    "left": {},
		    "top": {},
		    "right": {},
		    "bottom": {},
		    "x": {},
		    "y": {}
		   },
		   "ScaleManager#windowConstraints": {
		    "right": {},
		    "bottom": {}
		   },
		   "ScaleManager#compatibility": {
		    "supportsFullScreen": {},
		    "orientationFallback": {},
		    "noMargins": {},
		    "scrollTo": {},
		    "forceMinimumDocumentHeight": {},
		    "canExpandParent": {},
		    "clickTrampoline": {}
		   },
		   "ScaleManager#boot": {
		    "compat": {},
		    "_this": {},
		    "prototype": {
		     "_orientationChange": {
		      "!type": "fn()"
		     },
		     "_windowResize": {
		      "!type": "fn()"
		     },
		     "_fullScreenChange": {
		      "!type": "fn()"
		     },
		     "_fullScreenError": {
		      "!type": "fn()"
		     },
		     "screenOrientation": {},
		     "grid": {},
		     "_booted": {},
		     "scaleMode": {},
		     "_pendingScaleMode": {}
		    }
		   },
		   "ScaleManager#boot~compat": {
		    "supportsFullScreen": {},
		    "scrollTo": {},
		    "orientationFallback": {},
		    "clickTrampoline": {}
		   },
		   "ScaleManager#parseConfig": {
		    "prototype": {
		     "scaleMode": {},
		     "_pendingScaleMode": {},
		     "fullScreenScaleMode": {},
		     "fullScreenTarget": {}
		    }
		   },
		   "ScaleManager#setupScale": {
		    "target": {},
		    "rect": {},
		    "prototype": {
		     "parentNode": {},
		     "parentIsWindow": {}
		    },
		    "newWidth": {},
		    "newHeight": {}
		   },
		   "ScaleManager#setupScale~rect": {
		    "width": {},
		    "height": {}
		   },
		   "ScaleManager#setupScale#parentScaleFactor": {
		    "x": {},
		    "y": {}
		   },
		   "ScaleManager#setResizeCallback": {
		    "prototype": {
		     "onResize": {},
		     "onResizeContext": {}
		    }
		   },
		   "ScaleManager#signalSizeChange": {
		    "width": {},
		    "height": {}
		   },
		   "ScaleManager#setMinMax": {
		    "prototype": {
		     "minWidth": {},
		     "minHeight": {},
		     "maxWidth": {},
		     "maxHeight": {}
		    }
		   },
		   "ScaleManager#preUpdate": {
		    "prevThrottle": {},
		    "prototype": {
		     "_updateThrottleReset": {},
		     "_updateThrottle": {},
		     "_lastUpdate": {}
		    },
		    "prevWidth": {},
		    "prevHeight": {},
		    "bounds": {},
		    "boundsChanged": {},
		    "orientationChanged": {},
		    "throttle": {}
		   },
		   "ScaleManager#pauseUpdate": {
		    "prototype": {
		     "_updateThrottle": {}
		    }
		   },
		   "ScaleManager#updateDimensions": {
		    "prototype": {
		     "width": {},
		     "height": {},
		     "sourceAspectRatio": {}
		    }
		   },
		   "ScaleManager#updateDimensions#game": {
		    "width": {},
		    "height": {}
		   },
		   "ScaleManager#updateScalingAndBounds#scaleFactor": {
		    "x": {},
		    "y": {}
		   },
		   "ScaleManager#updateScalingAndBounds#scaleFactorInversed": {
		    "x": {},
		    "y": {}
		   },
		   "ScaleManager#updateScalingAndBounds": {
		    "prototype": {
		     "aspectRatio": {}
		    }
		   },
		   "ScaleManager#forceOrientation": {
		    "forcePortrait": {},
		    "prototype": {
		     "forceLandscape": {},
		     "forcePortrait": {}
		    }
		   },
		   "ScaleManager#updateOrientationState": {
		    "previousOrientation": {},
		    "previouslyIncorrect": {},
		    "prototype": {
		     "screenOrientation": {},
		     "incorrectOrientation": {}
		    },
		    "changed": {},
		    "correctnessChanged": {}
		   },
		   "ScaleManager#orientationChange": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "ScaleManager#windowResize": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "ScaleManager#scrollTop": {
		    "scrollTo": {}
		   },
		   "ScaleManager#updateLayout": {
		    "scaleMode": {},
		    "prototype": {
		     "width": {},
		     "height": {}
		    },
		    "bounds": {}
		   },
		   "ScaleManager#getParentBounds": {
		    "bounds": {},
		    "parentNode": {},
		    "visualBounds": {},
		    "layoutBounds": {},
		    "clientRect": {},
		    "wc": {},
		    "windowBounds": {}
		   },
		   "ScaleManager#getParentBounds~bounds": {
		    "right": {},
		    "bottom": {}
		   },
		   "ScaleManager#alignCanvas": {
		    "parentBounds": {},
		    "canvas": {},
		    "margin": {},
		    "canvasBounds": {},
		    "currentEdge": {},
		    "targetEdge": {},
		    "offset": {}
		   },
		   "ScaleManager#alignCanvas~margin": {
		    "left": {},
		    "right": {},
		    "top": {},
		    "bottom": {},
		    "x": {},
		    "y": {}
		   },
		   "ScaleManager#alignCanvas~canvas": {
		    "style_marginLeft": {},
		    "style_marginRight": {},
		    "style_marginTop": {},
		    "style_marginBottom": {}
		   },
		   "ScaleManager#reflowGame": {
		    "bounds": {}
		   },
		   "ScaleManager#reflowCanvas": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "ScaleManager#resetCanvas": {
		    "cssWidth": {},
		    "cssHeight": {},
		    "canvas": {}
		   },
		   "ScaleManager#resetCanvas~canvas": {
		    "style_marginLeft": {},
		    "style_marginTop": {},
		    "style_marginRight": {},
		    "style_marginBottom": {},
		    "style_width": {},
		    "style_height": {}
		   },
		   "ScaleManager#queueUpdate#_parentBounds": {
		    "width": {},
		    "height": {}
		   },
		   "ScaleManager#queueUpdate": {
		    "prototype": {
		     "_updateThrottle": {}
		    }
		   },
		   "ScaleManager#setMaximum": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "ScaleManager#setShowAll": {
		    "bounds": {},
		    "width": {},
		    "height": {},
		    "multiplier": {},
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "ScaleManager#setExactFit": {
		    "bounds": {},
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "ScaleManager#createFullScreenTarget": {
		    "fsTarget": {}
		   },
		   "ScaleManager#createFullScreenTarget~fsTarget": {
		    "style_margin": {},
		    "style_padding": {},
		    "style_background": {}
		   },
		   "ScaleManager#startFullScreen": {
		    "_this": {},
		    "input": {},
		    "fsTarget": {},
		    "prototype": {
		     "_createdFullScreenTarget": {}
		    },
		    "initData": {},
		    "canvas": {},
		    "parent": {}
		   },
		   "ScaleManager#startFullScreen#game": {
		    "stage": {
		     "smoothed": {}
		    }
		   },
		   "ScaleManager#startFullScreen~initData": {
		    "targetElement": {}
		   },
		   "ScaleManager#cleanupCreatedTarget": {
		    "fsTarget": {},
		    "parent": {},
		    "prototype": {
		     "_createdFullScreenTarget": {}
		    }
		   },
		   "ScaleManager#prepScreenMode": {
		    "createdTarget": {},
		    "fsTarget": {},
		    "prototype": {
		     "_fullScreenRestore": {}
		    }
		   },
		   "ScaleManager#prepScreenMode#_fullScreenRestore": {
		    "targetWidth": {},
		    "targetHeight": {}
		   },
		   "ScaleManager#prepScreenMode~fsTarget": {
		    "style_width": {},
		    "style_height": {}
		   },
		   "ScaleManager#fullScreenChange": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "ScaleManager#fullScreenError": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "ScaleManager#scaleSprite": {
		    "width": {},
		    "height": {},
		    "letterBox": {},
		    "scaleX1": {},
		    "scaleY1": {},
		    "scaleX2": {},
		    "scaleY2": {},
		    "scaleOnWidth": {}
		   },
		   "Signal": {
		    "!type": "fn()",
		    "prototype": {
		     "_bindings": {
		      "!type": "[?]"
		     },
		     "_prevParams": {
		      "!type": "+any"
		     },
		     "memorize": {
		      "!type": "bool"
		     },
		     "_shouldPropagate": {
		      "!type": "bool"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "_boundDispatch": {
		      "!type": "+function"
		     },
		     "validateListener": {
		      "!type": "fn()"
		     },
		     "_registerListener": {
		      "!type": "fn()"
		     },
		     "_addBinding": {
		      "!type": "fn()"
		     },
		     "_indexOfListener": {
		      "!type": "fn()"
		     },
		     "has": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "addOnce": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "getNumListeners": {
		      "!type": "fn()"
		     },
		     "halt": {
		      "!type": "fn()"
		     },
		     "dispatch": {
		      "!type": "fn()"
		     },
		     "forget": {
		      "!type": "fn()"
		     },
		     "dispose": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Signal#_registerListener": {
		    "prevIndex": {},
		    "binding": {}
		   },
		   "Signal#_addBinding": {
		    "prototype": {
		     "_bindings": {}
		    },
		    "n": {}
		   },
		   "Signal#_indexOfListener": {
		    "context": {},
		    "n": {},
		    "cur": {}
		   },
		   "Signal#add": {
		    "args": {},
		    "i": {}
		   },
		   "Signal#addOnce": {
		    "args": {},
		    "i": {}
		   },
		   "Signal#remove": {
		    "i": {}
		   },
		   "Signal#removeAll": {
		    "context": {},
		    "n": {}
		   },
		   "Signal#removeAll#_bindings": {
		    "length": {}
		   },
		   "Signal#halt": {
		    "prototype": {
		     "_shouldPropagate": {}
		    }
		   },
		   "Signal#dispatch": {
		    "paramsArr": {},
		    "n": {},
		    "bindings": {},
		    "prototype": {
		     "_prevParams": {},
		     "_shouldPropagate": {}
		    }
		   },
		   "Signal#forget": {
		    "prototype": {
		     "_prevParams": {}
		    }
		   },
		   "Signal#dispose": {
		    "prototype": {
		     "_bindings": {},
		     "_prevParams": {}
		    }
		   },
		   "SignalBinding": {
		    "!type": "fn(signal: +Phaser.Signal, listener: +function, isOnce: bool, listenerContext: ?, priority: number, args: +any)",
		    "prototype": {
		     "_listener": {
		      "!type": "+Phaser.Game"
		     },
		     "_isOnce": {
		      "!type": "bool"
		     },
		     "context": {},
		     "_signal": {
		      "!type": "+Phaser.Signal"
		     },
		     "_priority": {
		      "!type": "number"
		     },
		     "_args": {
		      "!type": "+array"
		     },
		     "callCount": {
		      "!type": "number"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "params": {
		      "!type": "+array|+null"
		     },
		     "execute": {
		      "!type": "fn()"
		     },
		     "detach": {
		      "!type": "fn()"
		     },
		     "isBound": {
		      "!type": "fn()"
		     },
		     "isOnce": {
		      "!type": "fn()"
		     },
		     "getListener": {
		      "!type": "fn()"
		     },
		     "getSignal": {
		      "!type": "fn()"
		     },
		     "_destroy": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "SignalBinding#execute": {
		    "handlerReturn": {},
		    "params": {}
		   },
		   "Stage": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "disableVisibilityChange": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "currentRenderOrderID": {
		      "!type": "number"
		     },
		     "_hiddenVar": {
		      "!type": "string"
		     },
		     "_onChange": {
		      "!type": "+function"
		     },
		     "_backgroundColor": {
		      "!type": "number"
		     },
		     "parseConfig": {
		      "!type": "fn()"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "checkVisibility": {
		      "!type": "fn()"
		     },
		     "visibilityChange": {
		      "!type": "fn()"
		     },
		     "setBackgroundColor": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "backgroundColor": {
		      "!type": "number|string"
		     },
		     "smoothed": {
		      "!type": "bool"
		     },
		     "worldTransform": {}
		    }
		   },
		   "Stage#parseConfig": {
		    "prototype": {
		     "disableVisibilityChange": {},
		     "backgroundColor": {}
		    }
		   },
		   "Stage#preUpdate": {
		    "prototype": {
		     "currentRenderOrderID": {}
		    },
		    "i": {}
		   },
		   "Stage#update": {
		    "i": {}
		   },
		   "Stage#postUpdate": {
		    "i": {}
		   },
		   "Stage#updateTransform": {
		    "prototype": {
		     "worldAlpha": {}
		    },
		    "i": {}
		   },
		   "Stage#checkVisibility": {
		    "prototype": {
		     "_hiddenVar": {},
		     "_onChange": {
		      "!type": "fn()"
		     }
		    },
		    "_this": {}
		   },
		   "Stage#setBackgroundColor": {
		    "rgb": {},
		    "prototype": {
		     "_backgroundColor": {},
		     "backgroundColorSplit": {},
		     "backgroundColorString": {}
		    }
		   },
		   "State": {
		    "!type": "fn()",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "add": {
		      "!type": "+Phaser.GameObjectFactory"
		     },
		     "make": {
		      "!type": "+Phaser.GameObjectCreator"
		     },
		     "camera": {
		      "!type": "+Phaser.Camera"
		     },
		     "cache": {
		      "!type": "+Phaser.Cache"
		     },
		     "input": {
		      "!type": "+Phaser.Input"
		     },
		     "load": {
		      "!type": "+Phaser.Loader"
		     },
		     "math": {
		      "!type": "+Phaser.Math"
		     },
		     "sound": {
		      "!type": "+Phaser.SoundManager"
		     },
		     "scale": {
		      "!type": "+Phaser.ScaleManager"
		     },
		     "stage": {
		      "!type": "+Phaser.Stage"
		     },
		     "time": {
		      "!type": "+Phaser.Time"
		     },
		     "tweens": {
		      "!type": "+Phaser.TweenManager"
		     },
		     "world": {
		      "!type": "+Phaser.World"
		     },
		     "particles": {
		      "!type": "+Phaser.Particles"
		     },
		     "physics": {
		      "!type": "+Phaser.Physics"
		     },
		     "rnd": {
		      "!type": "+Phaser.RandomDataGenerator"
		     },
		     "init": {
		      "!type": "fn()"
		     },
		     "preload": {
		      "!type": "fn()"
		     },
		     "loadUpdate": {
		      "!type": "fn()"
		     },
		     "loadRender": {
		      "!type": "fn()"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "preRender": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "paused": {
		      "!type": "fn()"
		     },
		     "resumed": {
		      "!type": "fn()"
		     },
		     "pauseUpdate": {
		      "!type": "fn()"
		     },
		     "shutdown": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "StateManager": {
		    "!type": "fn(game: +Phaser.Game, pendingState: +Phaser.State|?)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "states": {},
		     "_pendingState": {
		      "!type": "+Phaser.State"
		     },
		     "_clearWorld": {
		      "!type": "bool"
		     },
		     "_clearCache": {
		      "!type": "bool"
		     },
		     "_created": {
		      "!type": "bool"
		     },
		     "_args": {
		      "!type": "[?]"
		     },
		     "current": {
		      "!type": "string"
		     },
		     "onStateChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInitCallback": {
		      "!type": "+function"
		     },
		     "onPreloadCallback": {
		      "!type": "+function"
		     },
		     "onCreateCallback": {
		      "!type": "+function"
		     },
		     "onUpdateCallback": {
		      "!type": "+function"
		     },
		     "onRenderCallback": {
		      "!type": "+function"
		     },
		     "onResizeCallback": {
		      "!type": "+function"
		     },
		     "onPreRenderCallback": {
		      "!type": "+function"
		     },
		     "onLoadUpdateCallback": {
		      "!type": "+function"
		     },
		     "onLoadRenderCallback": {
		      "!type": "+function"
		     },
		     "onPausedCallback": {
		      "!type": "+function"
		     },
		     "onResumedCallback": {
		      "!type": "+function"
		     },
		     "onPauseUpdateCallback": {
		      "!type": "+function"
		     },
		     "onShutDownCallback": {
		      "!type": "+function"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "restart": {
		      "!type": "fn()"
		     },
		     "dummy": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "clearCurrentState": {
		      "!type": "fn()"
		     },
		     "checkState": {
		      "!type": "fn()"
		     },
		     "link": {
		      "!type": "fn()"
		     },
		     "unlink": {
		      "!type": "fn()"
		     },
		     "setCurrentState": {
		      "!type": "fn()"
		     },
		     "getCurrentState": {
		      "!type": "fn()"
		     },
		     "loadComplete": {
		      "!type": "fn()"
		     },
		     "pause": {
		      "!type": "fn()"
		     },
		     "resume": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "pauseUpdate": {
		      "!type": "fn()"
		     },
		     "preRender": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "created": {
		      "!type": "bool"
		     }
		    }
		   },
		   "StateManager#add": {
		    "autoStart": {},
		    "newState": {},
		    "prototype": {
		     "states[undefined]": {},
		     "_pendingState": {}
		    }
		   },
		   "StateManager#add~newState": {
		    "game": {}
		   },
		   "StateManager#remove": {
		    "prototype": {
		     "callbackContext": {},
		     "onInitCallback": {},
		     "onShutDownCallback": {},
		     "onPreloadCallback": {},
		     "onLoadRenderCallback": {},
		     "onLoadUpdateCallback": {},
		     "onCreateCallback": {},
		     "onUpdateCallback": {},
		     "onPreRenderCallback": {},
		     "onRenderCallback": {},
		     "onResizeCallback": {},
		     "onPausedCallback": {},
		     "onResumedCallback": {},
		     "onPauseUpdateCallback": {}
		    }
		   },
		   "StateManager#start": {
		    "clearWorld": {},
		    "clearCache": {},
		    "prototype": {
		     "_pendingState": {},
		     "_clearWorld": {},
		     "_clearCache": {},
		     "_args": {}
		    }
		   },
		   "StateManager#restart": {
		    "clearWorld": {},
		    "clearCache": {},
		    "prototype": {
		     "_pendingState": {},
		     "_clearWorld": {},
		     "_clearCache": {},
		     "_args": {}
		    }
		   },
		   "StateManager#preUpdate": {
		    "previousStateKey": {},
		    "prototype": {
		     "_pendingState": {}
		    }
		   },
		   "StateManager#checkState": {
		    "valid": {}
		   },
		   "StateManager#link#states[undefined]": {
		    "game": {},
		    "add": {},
		    "make": {},
		    "camera": {},
		    "cache": {},
		    "input": {},
		    "load": {},
		    "math": {},
		    "sound": {},
		    "scale": {},
		    "state": {},
		    "stage": {},
		    "time": {},
		    "tweens": {},
		    "world": {},
		    "particles": {},
		    "rnd": {},
		    "physics": {},
		    "key": {}
		   },
		   "StateManager#unlink#states[undefined]": {
		    "game": {},
		    "add": {},
		    "make": {},
		    "camera": {},
		    "cache": {},
		    "input": {},
		    "load": {},
		    "math": {},
		    "sound": {},
		    "scale": {},
		    "state": {},
		    "stage": {},
		    "time": {},
		    "tweens": {},
		    "world": {},
		    "particles": {},
		    "rnd": {},
		    "physics": {}
		   },
		   "StateManager#setCurrentState": {
		    "prototype": {
		     "callbackContext": {},
		     "onInitCallback": {},
		     "onPreloadCallback": {},
		     "onLoadRenderCallback": {},
		     "onLoadUpdateCallback": {},
		     "onCreateCallback": {},
		     "onUpdateCallback": {},
		     "onPreRenderCallback": {},
		     "onRenderCallback": {},
		     "onResizeCallback": {},
		     "onPausedCallback": {},
		     "onResumedCallback": {},
		     "onPauseUpdateCallback": {},
		     "onShutDownCallback": {},
		     "current": {},
		     "_created": {},
		     "_args": {}
		    }
		   },
		   "StateManager#setCurrentState#game": {
		    "_kickstart": {}
		   },
		   "StateManager#loadComplete": {
		    "prototype": {
		     "_created": {}
		    }
		   },
		   "StateManager#destroy": {
		    "prototype": {
		     "callbackContext": {},
		     "onInitCallback": {},
		     "onShutDownCallback": {},
		     "onPreloadCallback": {},
		     "onLoadRenderCallback": {},
		     "onLoadUpdateCallback": {},
		     "onCreateCallback": {},
		     "onUpdateCallback": {},
		     "onRenderCallback": {},
		     "onPausedCallback": {},
		     "onResumedCallback": {},
		     "onPauseUpdateCallback": {},
		     "game": {},
		     "states": {},
		     "_pendingState": {},
		     "current": {}
		    }
		   },
		   "World": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "camera": {
		      "!type": "+Phaser.Camera"
		     },
		     "_definedSize": {
		      "!type": "bool"
		     },
		     "_width": {
		      "!type": "number"
		     },
		     "_height": {
		      "!type": "number"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "stateChange": {
		      "!type": "fn()"
		     },
		     "setBounds": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "shutdown": {
		      "!type": "fn()"
		     },
		     "wrap": {
		      "!type": "fn()"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "centerX": {
		      "!type": "number"
		     },
		     "centerY": {
		      "!type": "number"
		     },
		     "randomX": {
		      "!type": "number"
		     },
		     "randomY": {
		      "!type": "number"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "z": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "ignoreDestroy": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "classType": {},
		     "cursor": {
		      "!type": "+DisplayObject"
		     },
		     "enableBody": {
		      "!type": "bool"
		     },
		     "enableBodyDebug": {
		      "!type": "bool"
		     },
		     "physicsBodyType": {
		      "!type": "number"
		     },
		     "physicsSortDirection": {
		      "!type": "number"
		     },
		     "onDestroy": {
		      "!type": "+Phaser.Signal"
		     },
		     "cursorIndex": {
		      "!type": "number"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "hash": {
		      "!type": "+array"
		     },
		     "_sortProperty": {
		      "!type": "string"
		     },
		     "add": {
		      "!type": "fn(child: +DisplayObject, silent: bool) -> ?"
		     },
		     "addToHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "removeFromHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "addMultiple": {
		      "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> ?"
		     },
		     "addAt": {
		      "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> ?"
		     },
		     "getAt": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "create": {
		      "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> ?"
		     },
		     "createMultiple": {
		      "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "next": {
		      "!type": "fn() -> ?"
		     },
		     "previous": {
		      "!type": "fn() -> ?"
		     },
		     "swap": {
		      "!type": "fn(child1: +any, child2: +any)"
		     },
		     "bringToTop": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveUp": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveDown": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "xy": {
		      "!type": "fn(index: number, x: number, y: number)"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "replace": {
		      "!type": "fn(oldChild: +any, newChild: +any) -> ?"
		     },
		     "hasProperty": {
		      "!type": "fn(child: +any, key: [?]) -> ?"
		     },
		     "setProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> ?"
		     },
		     "checkProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> ?"
		     },
		     "set": {
		      "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> ?"
		     },
		     "setAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "setAllChildren": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "checkAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		     },
		     "addAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "subAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "multiplyAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "divideAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "callAllExists": {
		      "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		     },
		     "callbackFromArray": {
		      "!type": "fn(child: ?, callback: +array, length: number)"
		     },
		     "callAll": {
		      "!type": "fn(method: string, context: string, args: +any)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn(predicate: +function, checkExists: bool) -> ?"
		     },
		     "forEach": {
		      "!type": "fn(callback: +function, callbackContext: ?, checkExists: bool, args: +any)"
		     },
		     "forEachExists": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachAlive": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachDead": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "sort": {
		      "!type": "fn(key: string, order: number)"
		     },
		     "customSort": {
		      "!type": "fn(sortHandler: +function, context: ?)"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "descendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "iterate": {
		      "!type": "fn(key: string, value: +any, returnType: number, callback: +function, callbackContext: ?, args: [?]) -> ?"
		     },
		     "getFirstExists": {
		      "!type": "fn(exists: bool) -> ?"
		     },
		     "getFirstAlive": {
		      "!type": "fn() -> ?"
		     },
		     "getFirstDead": {
		      "!type": "fn() -> ?"
		     },
		     "getTop": {
		      "!type": "fn() -> ?"
		     },
		     "getBottom": {
		      "!type": "fn() -> ?"
		     },
		     "countLiving": {
		      "!type": "fn() -> ?"
		     },
		     "countDead": {
		      "!type": "fn() -> ?"
		     },
		     "getRandom": {
		      "!type": "fn(startIndex: number, length: number) -> ?"
		     },
		     "remove": {
		      "!type": "fn(child: +any, destroy: bool, silent: bool) -> ?"
		     },
		     "moveAll": {
		      "!type": "fn(group: +Phaser.Group, silent: bool) -> ?"
		     },
		     "removeAll": {
		      "!type": "fn(destroy: bool, silent: bool)"
		     },
		     "removeBetween": {
		      "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool, soft: bool)"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "rotation": {
		      "!type": "number"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "alpha": {
		      "!type": "number"
		     },
		     "children": {}
		    }
		   },
		   "World#boot": {
		    "prototype": {
		     "camera": {}
		    }
		   },
		   "World#boot#camera": {
		    "displayObject": {},
		    "scale": {}
		   },
		   "World#boot#game": {
		    "camera": {}
		   },
		   "World#stateChange": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "World#setBounds": {
		    "prototype": {
		     "_definedSize": {},
		     "_width": {},
		     "_height": {},
		     "x": {},
		     "y": {}
		    }
		   },
		   "World#resize": {
		    "width": {},
		    "height": {}
		   },
		   "World#resize#bounds": {
		    "width": {},
		    "height": {}
		   },
		   "World#wrap": {
		    "padding": {},
		    "useBounds": {},
		    "horizontal": {},
		    "vertical": {}
		   },
		   "BitmapData": {
		    "!type": "fn(game: +Phaser.Game, key: string, width: number, height: number)",
		    "width": {},
		    "height": {},
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "canvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "context": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "ctx": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "imageData": {
		      "!type": "+ImageData"
		     },
		     "data": {
		      "!type": "+Uint8ClampedArray"
		     },
		     "pixels": {
		      "!type": "+Uint32Array"
		     },
		     "buffer": {},
		     "baseTexture": {
		      "!type": "+PIXI.BaseTexture"
		     },
		     "texture": {
		      "!type": "+PIXI.Texture"
		     },
		     "textureFrame": {
		      "!type": "+Phaser.Frame"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "disableTextureUpload": {
		      "!type": "bool"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "cls": {
		      "!type": "fn()"
		     },
		     "_image": {
		      "!type": "number"
		     },
		     "_pos": {
		      "!type": "+Phaser.Point"
		     },
		     "_size": {
		      "!type": "+Phaser.Point"
		     },
		     "_scale": {
		      "!type": "+Phaser.Point"
		     },
		     "_rotate": {
		      "!type": "number"
		     },
		     "_alpha": {},
		     "_anchor": {
		      "!type": "+Phaser.Point"
		     },
		     "_tempR": {
		      "!type": "number"
		     },
		     "_tempG": {
		      "!type": "number"
		     },
		     "_tempB": {
		      "!type": "number"
		     },
		     "_circle": {
		      "!type": "+Phaser.Circle"
		     },
		     "_swapCanvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "move": {
		      "!type": "fn()"
		     },
		     "moveH": {
		      "!type": "fn()"
		     },
		     "moveV": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "load": {
		      "!type": "fn()"
		     },
		     "clear": {
		      "!type": "fn()"
		     },
		     "fill": {
		      "!type": "fn()"
		     },
		     "generateTexture": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "processPixelRGB": {
		      "!type": "fn()"
		     },
		     "processPixel": {
		      "!type": "fn()"
		     },
		     "replaceRGB": {
		      "!type": "fn()"
		     },
		     "setHSL": {
		      "!type": "fn()"
		     },
		     "shiftHSL": {
		      "!type": "fn()"
		     },
		     "setPixel32": {
		      "!type": "fn()"
		     },
		     "setPixel": {
		      "!type": "fn()"
		     },
		     "getPixel": {
		      "!type": "fn()"
		     },
		     "getPixel32": {
		      "!type": "fn()"
		     },
		     "getPixelRGB": {
		      "!type": "fn()"
		     },
		     "getPixels": {
		      "!type": "fn()"
		     },
		     "getFirstPixel": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "addToWorld": {
		      "!type": "fn()"
		     },
		     "copy": {
		      "!type": "fn()"
		     },
		     "copyRect": {
		      "!type": "fn()"
		     },
		     "draw": {
		      "!type": "fn()"
		     },
		     "drawGroup": {
		      "!type": "fn()"
		     },
		     "drawFull": {
		      "!type": "fn()"
		     },
		     "shadow": {
		      "!type": "fn()"
		     },
		     "alphaMask": {
		      "!type": "fn()"
		     },
		     "extract": {
		      "!type": "fn()"
		     },
		     "rect": {
		      "!type": "fn()"
		     },
		     "text": {
		      "!type": "fn()"
		     },
		     "circle": {
		      "!type": "fn()"
		     },
		     "line": {
		      "!type": "fn()"
		     },
		     "textureLine": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "blendReset": {
		      "!type": "fn()"
		     },
		     "blendSourceOver": {
		      "!type": "fn()"
		     },
		     "blendSourceIn": {
		      "!type": "fn()"
		     },
		     "blendSourceOut": {
		      "!type": "fn()"
		     },
		     "blendSourceAtop": {
		      "!type": "fn()"
		     },
		     "blendDestinationOver": {
		      "!type": "fn()"
		     },
		     "blendDestinationIn": {
		      "!type": "fn()"
		     },
		     "blendDestinationOut": {
		      "!type": "fn()"
		     },
		     "blendDestinationAtop": {
		      "!type": "fn()"
		     },
		     "blendXor": {
		      "!type": "fn()"
		     },
		     "blendAdd": {
		      "!type": "fn()"
		     },
		     "blendMultiply": {
		      "!type": "fn()"
		     },
		     "blendScreen": {
		      "!type": "fn()"
		     },
		     "blendOverlay": {
		      "!type": "fn()"
		     },
		     "blendDarken": {
		      "!type": "fn()"
		     },
		     "blendLighten": {
		      "!type": "fn()"
		     },
		     "blendColorDodge": {
		      "!type": "fn()"
		     },
		     "blendColorBurn": {
		      "!type": "fn()"
		     },
		     "blendHardLight": {
		      "!type": "fn()"
		     },
		     "blendSoftLight": {
		      "!type": "fn()"
		     },
		     "blendDifference": {
		      "!type": "fn()"
		     },
		     "blendExclusion": {
		      "!type": "fn()"
		     },
		     "blendHue": {
		      "!type": "fn()"
		     },
		     "blendSaturation": {
		      "!type": "fn()"
		     },
		     "blendColor": {
		      "!type": "fn()"
		     },
		     "blendLuminosity": {
		      "!type": "fn()"
		     }
		    },
		    "getTransform": {
		     "!type": "fn()",
		     "translateX": {},
		     "translateY": {},
		     "scaleX": {},
		     "scaleY": {},
		     "skewX": {},
		     "skewY": {}
		    }
		   },
		   "BitmapData#texture": {
		    "frame": {}
		   },
		   "BitmapData#_alpha": {
		    "prev": {},
		    "current": {}
		   },
		   "BitmapData#moveH": {
		    "c": {},
		    "ctx": {},
		    "h": {},
		    "src": {},
		    "distance": {},
		    "w": {}
		   },
		   "BitmapData#moveV": {
		    "c": {},
		    "ctx": {},
		    "w": {},
		    "src": {},
		    "distance": {},
		    "h": {}
		   },
		   "BitmapData#add": {
		    "i": {}
		   },
		   "BitmapData#load": {
		    "source": {}
		   },
		   "BitmapData#clear": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#fill": {
		    "a": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#fill#context": {
		    "fillStyle": {}
		   },
		   "BitmapData#generateTexture": {
		    "image": {},
		    "obj": {}
		   },
		   "BitmapData#generateTexture~image": {
		    "src": {}
		   },
		   "BitmapData#resize": {
		    "prototype": {
		     "width": {},
		     "height": {},
		     "dirty": {}
		    }
		   },
		   "BitmapData#resize#canvas": {
		    "width": {},
		    "height": {}
		   },
		   "BitmapData#resize#_swapCanvas": {
		    "width": {},
		    "height": {}
		   },
		   "BitmapData#resize#baseTexture": {
		    "width": {},
		    "height": {}
		   },
		   "BitmapData#resize#textureFrame": {
		    "width": {},
		    "height": {}
		   },
		   "BitmapData#resize#texture": {
		    "width": {},
		    "height": {},
		    "crop": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "BitmapData#update": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "prototype": {
		     "imageData": {},
		     "data": {},
		     "buffer": {},
		     "pixels": {}
		    }
		   },
		   "BitmapData#processPixelRGB": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "w": {},
		    "h": {},
		    "pixel": {},
		    "result": {},
		    "dirty": {},
		    "ty": {},
		    "tx": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#processPixelRGB~result": {
		    "r": {},
		    "g": {},
		    "b": {},
		    "a": {}
		   },
		   "BitmapData#processPixel": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "w": {},
		    "h": {},
		    "pixel": {},
		    "result": {},
		    "dirty": {},
		    "ty": {},
		    "tx": {},
		    "prototype": {
		     "pixels[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "BitmapData#replaceRGB": {
		    "sx": {},
		    "sy": {},
		    "w": {},
		    "h": {},
		    "source": {},
		    "y": {},
		    "x": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#setHSL": {
		    "h": {},
		    "s": {},
		    "l": {},
		    "region": {},
		    "pixel": {},
		    "y": {},
		    "x": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#setHSL~pixel": {
		    "h": {},
		    "s": {},
		    "l": {}
		   },
		   "BitmapData#shiftHSL": {
		    "h": {},
		    "s": {},
		    "l": {},
		    "region": {},
		    "pixel": {},
		    "y": {},
		    "x": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#shiftHSL~pixel": {
		    "h": {},
		    "s": {},
		    "l": {}
		   },
		   "BitmapData#setPixel32": {
		    "immediate": {},
		    "prototype": {
		     "pixels[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "BitmapData#getPixel": {
		    "out": {},
		    "index": {}
		   },
		   "BitmapData#getPixel~out": {
		    "r": {},
		    "g": {},
		    "b": {},
		    "a": {}
		   },
		   "BitmapData#getFirstPixel": {
		    "direction": {},
		    "pixel": {},
		    "x": {},
		    "y": {},
		    "v": {},
		    "scan": {}
		   },
		   "BitmapData#getFirstPixel~pixel": {
		    "x": {},
		    "y": {}
		   },
		   "BitmapData#getBounds": {
		    "rect": {}
		   },
		   "BitmapData#getBounds~rect": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {}
		   },
		   "BitmapData#addToWorld": {
		    "scaleX": {},
		    "scaleY": {},
		    "image": {}
		   },
		   "BitmapData#copy": {
		    "source": {},
		    "prototype": {
		     "_image": {},
		     "_rotate": {},
		     "op": {},
		     "dirty": {}
		    },
		    "tx": {},
		    "ty": {},
		    "x": {},
		    "y": {},
		    "newWidth": {},
		    "newHeight": {},
		    "blendMode": {},
		    "roundPx": {},
		    "ctx": {}
		   },
		   "BitmapData#copy#_alpha": {
		    "current": {},
		    "prev": {}
		   },
		   "BitmapData#copy~source": {
		    "cachedTint": {},
		    "tintedTexture": {}
		   },
		   "BitmapData#copy#_size": {
		    "x": {},
		    "y": {}
		   },
		   "BitmapData#copy#_anchor": {
		    "x": {},
		    "y": {}
		   },
		   "BitmapData#copy#_scale": {
		    "x": {},
		    "y": {}
		   },
		   "BitmapData#copy~ctx": {
		    "globalAlpha": {}
		   },
		   "BitmapData#drawFull": {
		    "bounds": {},
		    "i": {}
		   },
		   "BitmapData#shadow": {
		    "ctx": {}
		   },
		   "BitmapData#shadow~ctx": {
		    "shadowColor": {},
		    "shadowBlur": {},
		    "shadowOffsetX": {},
		    "shadowOffsetY": {}
		   },
		   "BitmapData#extract": {
		    "a": {},
		    "resize": {},
		    "r2": {},
		    "g2": {},
		    "b2": {}
		   },
		   "BitmapData#rect#context": {
		    "fillStyle": {}
		   },
		   "BitmapData#text": {
		    "x": {},
		    "y": {},
		    "font": {},
		    "color": {},
		    "shadow": {},
		    "ctx": {},
		    "prevFont": {}
		   },
		   "BitmapData#text~ctx": {
		    "font": {},
		    "fillStyle": {}
		   },
		   "BitmapData#circle": {
		    "ctx": {}
		   },
		   "BitmapData#circle~ctx": {
		    "fillStyle": {}
		   },
		   "BitmapData#line": {
		    "color": {},
		    "width": {},
		    "ctx": {}
		   },
		   "BitmapData#line~ctx": {
		    "lineWidth": {},
		    "strokeStyle": {}
		   },
		   "BitmapData#textureLine": {
		    "repeat": {},
		    "image": {},
		    "width": {},
		    "ctx": {},
		    "prototype": {
		     "_circle": {},
		     "dirty": {}
		    }
		   },
		   "BitmapData#textureLine~ctx": {
		    "fillStyle": {}
		   },
		   "BitmapData#render": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#blendReset": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSourceOver": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSourceIn": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSourceOut": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSourceAtop": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDestinationOver": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDestinationIn": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDestinationOut": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDestinationAtop": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendXor": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendAdd": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendMultiply": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendScreen": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendOverlay": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDarken": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendLighten": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendColorDodge": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendColorBurn": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendHardLight": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSoftLight": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDifference": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendExclusion": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendHue": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSaturation": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendColor": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendLuminosity": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapText": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, font: string, text: string, size: number, align: string)",
		    "x": {},
		    "y": {},
		    "font": {},
		    "text": {},
		    "size": {},
		    "align": {},
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "textWidth": {
		      "!type": "number"
		     },
		     "textHeight": {
		      "!type": "number"
		     },
		     "anchor": {
		      "!type": "+Phaser.Point"
		     },
		     "_prevAnchor": {
		      "!type": "+Phaser.Point"
		     },
		     "_glyphs": {
		      "!type": "+array"
		     },
		     "_maxWidth": {
		      "!type": "number"
		     },
		     "_text": {
		      "!type": "string"
		     },
		     "_data": {
		      "!type": "string"
		     },
		     "_font": {
		      "!type": "string"
		     },
		     "_fontSize": {
		      "!type": "number"
		     },
		     "_align": {
		      "!type": "string"
		     },
		     "_tint": {
		      "!type": "number"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "preUpdatePhysics": {},
		     "preUpdateLifeSpan": {},
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn() -> ?"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "setText": {
		      "!type": "fn()"
		     },
		     "scanLine": {
		      "!type": "fn()"
		     },
		     "updateText": {
		      "!type": "fn()"
		     },
		     "purgeGlyphs": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "align": {
		      "!type": "string"
		     },
		     "tint": {
		      "!type": "number"
		     },
		     "font": {
		      "!type": "string"
		     },
		     "fontSize": {
		      "!type": "number"
		     },
		     "text": {
		      "!type": "string"
		     },
		     "maxWidth": {
		      "!type": "number"
		     },
		     "smoothed": {
		      "!type": "bool"
		     },
		     "children": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "_outOfBoundsFired": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     }
		    }
		   },
		   "BitmapText#setText": {
		    "prototype": {
		     "text": {}
		    }
		   },
		   "BitmapText#scanLine": {
		    "x": {},
		    "w": {},
		    "lastSpace": {},
		    "prevCharCode": {},
		    "maxWidth": {},
		    "chars": {},
		    "i": {},
		    "end": {},
		    "charCode": {},
		    "charData": {},
		    "c": {},
		    "kerning": {}
		   },
		   "BitmapText#updateText": {
		    "data": {},
		    "text": {},
		    "scale": {},
		    "lines": {},
		    "y": {},
		    "prototype": {
		     "textWidth": {},
		     "textHeight": {}
		    },
		    "line": {},
		    "t": {},
		    "align": {},
		    "ax": {},
		    "ay": {},
		    "i": {},
		    "c": {},
		    "charCode": {},
		    "charData": {},
		    "g": {}
		   },
		   "BitmapText#updateText~line": {
		    "y": {}
		   },
		   "BitmapText#updateText~g": {
		    "texture": {},
		    "name": {},
		    "position.x": {},
		    "position.y": {},
		    "tint": {},
		    "texture.requiresReTint": {}
		   },
		   "BitmapText#purgeGlyphs": {
		    "len": {},
		    "kept": {},
		    "i": {},
		    "prototype": {
		     "_glyphs": {}
		    }
		   },
		   "BitmapText#updateTransform": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Button": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string, callback: +function, callbackContext: ?, overFrame: string|number, outFrame: string|number, downFrame: string|number, upFrame: string|number)",
		    "x": {},
		    "y": {},
		    "key": {},
		    "callback": {},
		    "callbackContext": {},
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "_onOverFrame": {
		      "!type": "string|number"
		     },
		     "_onOutFrame": {
		      "!type": "string|number"
		     },
		     "_onDownFrame": {
		      "!type": "string|number"
		     },
		     "_onUpFrame": {
		      "!type": "string|number"
		     },
		     "onOverSound": {
		      "!type": "+Phaser.Sound|+Phaser.AudioSprite|+null"
		     },
		     "onOutSound": {
		      "!type": "+Phaser.Sound|+Phaser.AudioSprite|+null"
		     },
		     "onDownSound": {
		      "!type": "+Phaser.Sound|+Phaser.AudioSprite|+null"
		     },
		     "onUpSound": {
		      "!type": "+Phaser.Sound|+Phaser.AudioSprite|+null"
		     },
		     "onOverSoundMarker": {
		      "!type": "string"
		     },
		     "onOutSoundMarker": {
		      "!type": "string"
		     },
		     "onDownSoundMarker": {
		      "!type": "string"
		     },
		     "onUpSoundMarker": {
		      "!type": "string"
		     },
		     "onInputOver": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputOut": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputDown": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "onOverMouseOnly": {
		      "!type": "bool"
		     },
		     "freezeFrames": {
		      "!type": "bool"
		     },
		     "forceOut": {
		      "!type": "bool"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "clearFrames": {
		      "!type": "fn()"
		     },
		     "removedFromWorld": {
		      "!type": "fn()"
		     },
		     "setStateFrame": {
		      "!type": "fn()"
		     },
		     "changeStateFrame": {
		      "!type": "fn()"
		     },
		     "setFrames": {
		      "!type": "fn()"
		     },
		     "setStateSound": {
		      "!type": "fn()"
		     },
		     "playStateSound": {
		      "!type": "fn()"
		     },
		     "setSounds": {
		      "!type": "fn()"
		     },
		     "setOverSound": {
		      "!type": "fn()"
		     },
		     "setOutSound": {
		      "!type": "fn()"
		     },
		     "setDownSound": {
		      "!type": "fn()"
		     },
		     "setUpSound": {
		      "!type": "fn()"
		     },
		     "onInputOverHandler": {
		      "!type": "fn()"
		     },
		     "onInputOutHandler": {
		      "!type": "fn()"
		     },
		     "onInputDownHandler": {
		      "!type": "fn()"
		     },
		     "onInputUpHandler": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Button#input": {
		    "useHandCursor": {}
		   },
		   "Button#removedFromWorld": {
		    "prototype": {
		     "inputEnabled": {}
		    }
		   },
		   "Button#setStateFrame": {
		    "frameKey": {}
		   },
		   "Button#changeStateFrame": {
		    "frameKey": {},
		    "frame": {},
		    "prototype": {
		     "frameName": {},
		     "frame": {}
		    }
		   },
		   "Button#setStateSound": {
		    "soundKey": {},
		    "markerKey": {}
		   },
		   "Button#playStateSound": {
		    "soundKey": {},
		    "sound": {},
		    "markerKey": {},
		    "marker": {}
		   },
		   "Button#onInputUpHandler": {
		    "changedUp": {}
		   },
		   "Component": {
		    "Angle": {
		     "!type": "fn()",
		     "prototype": {
		      "angle": {
		       "!type": "number"
		      }
		     }
		    },
		    "Angle#angle": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()",
		      "prototype": {
		       "rotation": {}
		      }
		     }
		    },
		    "Animation": {
		     "!type": "fn()",
		     "prototype": {
		      "play": {
		       "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
		      }
		     }
		    },
		    "AutoCull": {
		     "!type": "fn()",
		     "prototype": {
		      "autoCull": {
		       "!type": "bool"
		      },
		      "inCamera": {
		       "!type": "bool"
		      }
		     }
		    },
		    "AutoCull#inCamera": {
		     "get": {
		      "!type": "fn()"
		     },
		     "get#_bounds": {
		      "x": {},
		      "y": {}
		     }
		    },
		    "Bounds": {
		     "!type": "fn()",
		     "prototype": {
		      "offsetX": {
		       "!type": "number"
		      },
		      "offsetY": {
		       "!type": "number"
		      },
		      "left": {
		       "!type": "number"
		      },
		      "right": {
		       "!type": "number"
		      },
		      "top": {
		       "!type": "number"
		      },
		      "bottom": {
		       "!type": "number"
		      }
		     }
		    },
		    "Bounds#offsetX": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Bounds#offsetY": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Bounds#left": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Bounds#right": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Bounds#top": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Bounds#bottom": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "BringToTop": {
		     "!type": "fn()",
		     "prototype": {
		      "bringToTop": {
		       "!type": "fn() -> ?"
		      },
		      "sendToBack": {
		       "!type": "fn() -> ?"
		      },
		      "moveUp": {
		       "!type": "fn() -> ?"
		      },
		      "moveDown": {
		       "!type": "fn() -> ?"
		      }
		     }
		    },
		    "!type": "fn()",
		    "Core": {
		     "!type": "fn()",
		     "install": {
		      "!type": "fn()",
		      "prototype": {
		       "components": {},
		       "components[undefined]": {}
		      },
		      "i": {},
		      "id": {},
		      "replace": {}
		     },
		     "init": {
		      "!type": "fn()",
		      "prototype": {
		       "game": {},
		       "key": {},
		       "world": {},
		       "previousPosition": {},
		       "events": {},
		       "_bounds": {},
		       "body": {},
		       "animations": {},
		       "cameraOffset": {}
		      }
		     },
		     "preUpdate": {
		      "!type": "fn()",
		      "prototype": {
		       "previousRotation": {},
		       "renderOrderID": {}
		      },
		      "i": {}
		     },
		     "preUpdate#texture": {
		      "requiresReTint": {}
		     },
		     "prototype": {
		      "game": {
		       "!type": "+Phaser.Game"
		      },
		      "name": {
		       "!type": "string"
		      },
		      "components": {},
		      "z": {
		       "!type": "number"
		      },
		      "events": {
		       "!type": "+Phaser.Events"
		      },
		      "animations": {
		       "!type": "+Phaser.AnimationManager"
		      },
		      "key": {
		       "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		      },
		      "world": {
		       "!type": "+Phaser.Point"
		      },
		      "debug": {
		       "!type": "bool"
		      },
		      "previousPosition": {
		       "!type": "+Phaser.Point"
		      },
		      "previousRotation": {
		       "!type": "number"
		      },
		      "renderOrderID": {
		       "!type": "number"
		      },
		      "fresh": {
		       "!type": "bool"
		      },
		      "pendingDestroy": {
		       "!type": "bool"
		      },
		      "_bounds": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "_exists": {
		       "!type": "bool"
		      },
		      "exists": {
		       "!type": "bool"
		      },
		      "update": {
		       "!type": "fn()"
		      },
		      "postUpdate": {
		       "!type": "fn()"
		      }
		     }
		    },
		    "Core#exists": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()",
		      "prototype": {
		       "_exists": {},
		       "visible": {}
		      }
		     }
		    },
		    "Core#postUpdate": {
		     "i": {}
		    },
		    "Crop": {
		     "!type": "fn()",
		     "prototype": {
		      "cropRect": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "_crop": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "crop": {
		       "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		      },
		      "updateCrop": {
		       "!type": "fn()"
		      }
		     }
		    },
		    "Crop#crop": {
		     "copy": {},
		     "prototype": {
		      "cropRect": {},
		      "_crop": {}
		     }
		    },
		    "Crop#updateCrop": {
		     "prototype": {
		      "_crop": {}
		     },
		     "cx": {},
		     "cy": {},
		     "cw": {},
		     "ch": {}
		    },
		    "Crop#updateCrop#_crop": {
		     "x": {},
		     "y": {}
		    },
		    "Crop#updateCrop#texture": {
		     "crop": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {}
		     },
		     "frame": {
		      "width": {},
		      "height": {}
		     },
		     "width": {},
		     "height": {}
		    },
		    "Delta": {
		     "!type": "fn()",
		     "prototype": {
		      "deltaX": {
		       "!type": "number"
		      },
		      "deltaY": {
		       "!type": "number"
		      },
		      "deltaZ": {
		       "!type": "number"
		      }
		     }
		    },
		    "Delta#deltaX": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Delta#deltaY": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Delta#deltaZ": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Destroy": {
		     "!type": "fn()",
		     "prototype": {
		      "destroyPhase": {
		       "!type": "bool"
		      },
		      "destroy": {
		       "!type": "fn(destroyChildren: bool)"
		      }
		     }
		    },
		    "Destroy#destroy": {
		     "destroyChildren": {},
		     "prototype": {
		      "destroyPhase": {},
		      "_crop": {},
		      "_frame": {},
		      "_glyphs": {},
		      "alive": {},
		      "exists": {},
		      "visible": {},
		      "filters": {},
		      "mask": {},
		      "game": {},
		      "renderable": {},
		      "transformCallback": {},
		      "transformCallbackContext": {},
		      "hitArea": {},
		      "parent": {},
		      "stage": {},
		      "worldTransform": {},
		      "filterArea": {},
		      "_bounds": {},
		      "_currentBounds": {},
		      "_mask": {},
		      "pendingDestroy": {}
		     },
		     "i": {}
		    },
		    "FixedToCamera": {
		     "!type": "fn()",
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "postUpdate#position": {
		      "x": {},
		      "y": {}
		     },
		     "prototype": {
		      "_fixedToCamera": {
		       "!type": "bool"
		      },
		      "fixedToCamera": {
		       "!type": "bool"
		      },
		      "cameraOffset": {
		       "!type": "+Phaser.Point"
		      }
		     }
		    },
		    "FixedToCamera#fixedToCamera": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()",
		      "prototype": {
		       "_fixedToCamera": {}
		      }
		     }
		    },
		    "Health": {
		     "!type": "fn()",
		     "prototype": {
		      "health": {
		       "!type": "number"
		      },
		      "maxHealth": {
		       "!type": "number"
		      },
		      "damage": {},
		      "heal": {}
		     }
		    },
		    "Health#damage": {
		     "prototype": {
		      "health": {}
		     }
		    },
		    "Health#heal": {
		     "prototype": {
		      "health": {}
		     }
		    },
		    "InCamera": {
		     "!type": "fn()",
		     "prototype": {
		      "inCamera": {
		       "!type": "bool"
		      }
		     }
		    },
		    "InCamera#inCamera": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "InputEnabled": {
		     "!type": "fn()",
		     "prototype": {
		      "input": {
		       "!type": "+Phaser.InputHandler|+null"
		      },
		      "inputEnabled": {
		       "!type": "bool"
		      }
		     }
		    },
		    "InputEnabled#inputEnabled": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()",
		      "prototype": {
		       "input": {}
		      }
		     }
		    },
		    "InWorld": {
		     "!type": "fn()",
		     "preUpdate": {
		      "!type": "fn()",
		      "prototype": {
		       "renderable": {},
		       "_outOfBoundsFired": {}
		      }
		     },
		     "preUpdate#_bounds": {
		      "x": {},
		      "y": {}
		     },
		     "prototype": {
		      "checkWorldBounds": {
		       "!type": "bool"
		      },
		      "outOfBoundsKill": {
		       "!type": "bool"
		      },
		      "_outOfBoundsFired": {
		       "!type": "bool"
		      },
		      "inWorld": {
		       "!type": "bool"
		      }
		     }
		    },
		    "InWorld#inWorld": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "LifeSpan": {
		     "!type": "fn()",
		     "preUpdate": {
		      "!type": "fn()",
		      "prototype": {
		       "lifespan": {}
		      }
		     },
		     "prototype": {
		      "alive": {
		       "!type": "bool"
		      },
		      "lifespan": {
		       "!type": "number"
		      },
		      "revive": {
		       "!type": "fn(health: number) -> ?"
		      },
		      "kill": {
		       "!type": "fn() -> ?"
		      }
		     }
		    },
		    "LifeSpan#revive": {
		     "health": {},
		     "prototype": {
		      "alive": {},
		      "exists": {},
		      "visible": {},
		      "health": {}
		     }
		    },
		    "LifeSpan#kill": {
		     "prototype": {
		      "alive": {},
		      "exists": {},
		      "visible": {}
		     }
		    },
		    "LoadTexture": {
		     "!type": "fn()",
		     "prototype": {
		      "customRender": {
		       "!type": "bool"
		      },
		      "_frame": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "loadTexture": {
		       "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		      },
		      "setFrame": {
		       "!type": "fn(frame: +Phaser.Frame)"
		      },
		      "resizeFrame": {
		       "!type": "fn(parent: ?, width: number, height: number)"
		      },
		      "resetFrame": {
		       "!type": "fn()"
		      },
		      "frame": {
		       "!type": "number"
		      },
		      "frameName": {
		       "!type": "string"
		      }
		     }
		    },
		    "LoadTexture#loadTexture": {
		     "frame": {},
		     "prototype": {
		      "key": {},
		      "customRender": {},
		      "_frame": {}
		     },
		     "cache": {},
		     "setFrame": {},
		     "smoothed": {},
		     "valid": {},
		     "img": {}
		    },
		    "LoadTexture#loadTexture#texture": {
		     "valid": {},
		     "baseTexture": {
		      "scaleMode": {}
		     }
		    },
		    "LoadTexture#setFrame": {
		     "prototype": {
		      "_frame": {},
		      "refreshTexture": {}
		     }
		    },
		    "LoadTexture#setFrame#texture": {
		     "frame": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {}
		     },
		     "crop": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {}
		     },
		     "trim": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {}
		     },
		     "width": {},
		     "height": {},
		     "requiresReTint": {}
		    },
		    "LoadTexture#frame": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "set#animations": {
		      "frame": {}
		     }
		    },
		    "LoadTexture#frameName": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "set#animations": {
		      "frameName": {}
		     }
		    },
		    "Overlap": {
		     "!type": "fn()",
		     "prototype": {
		      "overlap": {
		       "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		      }
		     }
		    },
		    "PhysicsBody": {
		     "!type": "fn()",
		     "preUpdate": {
		      "!type": "fn()",
		      "prototype": {
		       "previousRotation": {},
		       "fresh": {},
		       "renderOrderID": {}
		      }
		     },
		     "preUpdate#worldTransform": {
		      "tx": {},
		      "ty": {}
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "prototype": {
		      "body": {
		       "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		      },
		      "x": {
		       "!type": "number"
		      },
		      "y": {
		       "!type": "number"
		      }
		     }
		    },
		    "PhysicsBody#x": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "set#position": {
		      "x": {}
		     },
		     "set#body": {
		      "_reset": {}
		     }
		    },
		    "PhysicsBody#y": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "set#position": {
		      "y": {}
		     },
		     "set#body": {
		      "_reset": {}
		     }
		    },
		    "Reset": {
		     "!type": "fn()",
		     "prototype": {
		      "reset": {
		       "!type": "fn(x: number, y: number, health: number) -> ?"
		      }
		     }
		    },
		    "Reset#reset": {
		     "health": {},
		     "prototype": {
		      "fresh": {},
		      "exists": {},
		      "visible": {},
		      "renderable": {},
		      "_outOfBoundsFired": {},
		      "alive": {},
		      "health": {}
		     }
		    },
		    "ScaleMinMax": {
		     "!type": "fn()",
		     "prototype": {
		      "transformCallback": {
		       "!type": "+function"
		      },
		      "transformCallbackContext": {},
		      "scaleMin": {
		       "!type": "+Phaser.Point"
		      },
		      "scaleMax": {
		       "!type": "+Phaser.Point"
		      },
		      "checkTransform": {
		       "!type": "fn(wt: +PIXI.Matrix)"
		      },
		      "setScaleMinMax": {
		       "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		      }
		     }
		    },
		    "ScaleMinMax#setScaleMinMax": {
		     "minY": {},
		     "maxX": {},
		     "maxY": {},
		     "prototype": {
		      "scaleMin": {},
		      "scaleMax": {}
		     }
		    },
		    "ScaleMinMax#setScaleMinMax~minY": {
		     "maxY": {}
		    },
		    "Smoothed": {
		     "!type": "fn()",
		     "prototype": {
		      "smoothed": {
		       "!type": "bool"
		      }
		     }
		    },
		    "Smoothed#smoothed": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "set#texture": {
		      "baseTexture": {
		       "scaleMode": {}
		      }
		     }
		    }
		   },
		   "Events": {
		    "!type": "fn(sprite: +Phaser.Sprite)",
		    "prototype": {
		     "parent": {
		      "!type": "+Phaser.Sprite"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "onAddedToGroup": {
		      "!type": "+Phaser.Signal"
		     },
		     "onRemovedFromGroup": {
		      "!type": "+Phaser.Signal"
		     },
		     "onRemovedFromWorld": {
		      "!type": "+Phaser.Signal"
		     },
		     "onDestroy": {
		      "!type": "+Phaser.Signal"
		     },
		     "onKilled": {
		      "!type": "+Phaser.Signal"
		     },
		     "onRevived": {
		      "!type": "+Phaser.Signal"
		     },
		     "onOutOfBounds": {
		      "!type": "+Phaser.Signal"
		     },
		     "onEnterBounds": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputOver": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputOut": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputDown": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "onDragStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onDragUpdate": {
		      "!type": "+Phaser.Signal"
		     },
		     "onDragStop": {
		      "!type": "+Phaser.Signal"
		     },
		     "onAnimationStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onAnimationComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onAnimationLoop": {
		      "!type": "+Phaser.Signal"
		     },
		     "[undefined]": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Events#destroy": {
		    "prototype": {
		     "_parent": {}
		    }
		   },
		   "Creature": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+PIXI.Texture, mesh: string, animation: string)",
		    "animation": {},
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "_creature": {
		      "!type": "+Creature"
		     },
		     "animation": {
		      "!type": "+CreatureAnimation"
		     },
		     "manager": {
		      "!type": "+CreatureManager"
		     },
		     "timeDelta": {
		      "!type": "number"
		     },
		     "texture": {
		      "!type": "+PIXI.Texture"
		     },
		     "dirty": {},
		     "blendMode": {},
		     "creatureBoundsMin": {
		      "!type": "+Phaser.Point"
		     },
		     "creatureBoundsMax": {
		      "!type": "+Phaser.Point"
		     },
		     "vertices": {
		      "!type": "+PIXI.Float32Array"
		     },
		     "uvs": {
		      "!type": "+PIXI.Float32Array"
		     },
		     "indices": {
		      "!type": "+PIXI.Uint16Array"
		     },
		     "indices[undefined]": {},
		     "colors": {
		      "!type": "+PIXI.Uint16Array"
		     },
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "_initWebGL": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCreature": {
		      "!type": "fn()"
		     },
		     "updateCreatureBounds": {
		      "!type": "fn()"
		     },
		     "updateData": {
		      "!type": "fn()"
		     },
		     "updateRenderData": {
		      "!type": "fn()"
		     },
		     "setAnimation": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "isPlaying": {
		      "!type": "bool"
		     },
		     "loop": {
		      "!type": "bool"
		     },
		     "children": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "bringToTop": {
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     }
		    },
		    "meshData": {},
		    "texture": {},
		    "target": {},
		    "i": {}
		   },
		   "Creature#_initWebGL": {
		    "gl": {},
		    "prototype": {
		     "_vertexBuffer": {},
		     "_indexBuffer": {},
		     "_uvBuffer": {},
		     "_colorBuffer": {}
		    }
		   },
		   "Creature#_renderCreature": {
		    "gl": {},
		    "projection": {},
		    "offset": {},
		    "shader": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Creature#updateCreatureBounds": {
		    "target": {}
		   },
		   "Creature#updateData": {
		    "target": {},
		    "read_pts": {},
		    "read_uvs": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Creature#updateRenderData": {
		    "target": {},
		    "pt_index": {},
		    "uv_index": {},
		    "write_pt_index": {},
		    "i": {},
		    "prototype": {
		     "vertices[undefined]": {},
		     "uvs[undefined]": {}
		    }
		   },
		   "Creature#play": {
		    "loop": {},
		    "prototype": {
		     "loop": {}
		    }
		   },
		   "GameObjectCreator": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "world": {
		      "!type": "+Phaser.World"
		     },
		     "image": {
		      "!type": "fn()"
		     },
		     "sprite": {
		      "!type": "fn()"
		     },
		     "tween": {
		      "!type": "fn()"
		     },
		     "group": {
		      "!type": "fn()"
		     },
		     "spriteBatch": {
		      "!type": "fn()"
		     },
		     "audio": {
		      "!type": "fn()"
		     },
		     "audioSprite": {
		      "!type": "fn()"
		     },
		     "sound": {
		      "!type": "fn()"
		     },
		     "tileSprite": {
		      "!type": "fn()"
		     },
		     "rope": {
		      "!type": "fn()"
		     },
		     "text": {
		      "!type": "fn()"
		     },
		     "button": {
		      "!type": "fn()"
		     },
		     "graphics": {
		      "!type": "fn()"
		     },
		     "emitter": {
		      "!type": "fn()"
		     },
		     "retroFont": {
		      "!type": "fn()"
		     },
		     "bitmapText": {
		      "!type": "fn()"
		     },
		     "tilemap": {
		      "!type": "fn()"
		     },
		     "renderTexture": {
		      "!type": "fn()"
		     },
		     "bitmapData": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "GameObjectCreator#spriteBatch": {
		    "name": {},
		    "addToStage": {}
		   },
		   "GameObjectCreator#renderTexture": {
		    "key": {},
		    "addToCache": {},
		    "texture": {}
		   },
		   "GameObjectCreator#bitmapData": {
		    "addToCache": {},
		    "key": {},
		    "texture": {}
		   },
		   "GameObjectCreator#filter": {
		    "args": {},
		    "filter": {}
		   },
		   "GameObjectFactory": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "world": {
		      "!type": "+Phaser.World"
		     },
		     "existing": {
		      "!type": "fn()"
		     },
		     "image": {
		      "!type": "fn()"
		     },
		     "sprite": {
		      "!type": "fn()"
		     },
		     "creature": {
		      "!type": "fn()"
		     },
		     "tween": {
		      "!type": "fn()"
		     },
		     "group": {
		      "!type": "fn()"
		     },
		     "physicsGroup": {
		      "!type": "fn()"
		     },
		     "spriteBatch": {
		      "!type": "fn()"
		     },
		     "audio": {
		      "!type": "fn()"
		     },
		     "sound": {
		      "!type": "fn()"
		     },
		     "audioSprite": {
		      "!type": "fn()"
		     },
		     "tileSprite": {
		      "!type": "fn()"
		     },
		     "rope": {
		      "!type": "fn()"
		     },
		     "text": {
		      "!type": "fn()"
		     },
		     "button": {
		      "!type": "fn()"
		     },
		     "graphics": {
		      "!type": "fn()"
		     },
		     "emitter": {
		      "!type": "fn()"
		     },
		     "retroFont": {
		      "!type": "fn()"
		     },
		     "bitmapText": {
		      "!type": "fn()"
		     },
		     "tilemap": {
		      "!type": "fn()"
		     },
		     "renderTexture": {
		      "!type": "fn()"
		     },
		     "video": {
		      "!type": "fn()"
		     },
		     "bitmapData": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn()"
		     },
		     "plugin": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "GameObjectFactory#image": {
		    "group": {}
		   },
		   "GameObjectFactory#sprite": {
		    "group": {}
		   },
		   "GameObjectFactory#creature": {
		    "group": {},
		    "obj": {}
		   },
		   "GameObjectFactory#spriteBatch": {
		    "parent": {},
		    "name": {},
		    "addToStage": {}
		   },
		   "GameObjectFactory#tileSprite": {
		    "group": {}
		   },
		   "GameObjectFactory#rope": {
		    "group": {}
		   },
		   "GameObjectFactory#text": {
		    "group": {}
		   },
		   "GameObjectFactory#button": {
		    "group": {}
		   },
		   "GameObjectFactory#graphics": {
		    "group": {}
		   },
		   "GameObjectFactory#bitmapText": {
		    "group": {}
		   },
		   "GameObjectFactory#renderTexture": {
		    "key": {},
		    "addToCache": {},
		    "texture": {}
		   },
		   "GameObjectFactory#bitmapData": {
		    "addToCache": {},
		    "key": {},
		    "texture": {}
		   },
		   "GameObjectFactory#filter": {
		    "args": {},
		    "filter": {}
		   },
		   "Graphics": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number)",
		    "x": {},
		    "y": {},
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "preUpdatePhysics": {},
		     "preUpdateLifeSpan": {},
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "drawTriangle": {
		      "!type": "fn()"
		     },
		     "drawTriangles": {
		      "!type": "fn()"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "_outOfBoundsFired": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     }
		    }
		   },
		   "Graphics#drawTriangle": {
		    "cull": {},
		    "triangle": {},
		    "cameraToFace": {},
		    "ab": {},
		    "cb": {},
		    "faceNormal": {}
		   },
		   "Graphics#drawTriangles": {
		    "cull": {},
		    "point1": {},
		    "point2": {},
		    "point3": {},
		    "points": {},
		    "i": {}
		   },
		   "Graphics#drawTriangles~point1": {
		    "x": {},
		    "y": {}
		   },
		   "Graphics#drawTriangles~point2": {
		    "x": {},
		    "y": {}
		   },
		   "Graphics#drawTriangles~point3": {
		    "x": {},
		    "y": {}
		   },
		   "Image": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
		    "x": {},
		    "y": {},
		    "key": {},
		    "frame": {},
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Particle": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
		    "prototype": {
		     "autoScale": {
		      "!type": "bool"
		     },
		     "scaleData": {
		      "!type": "+array"
		     },
		     "_s": {
		      "!type": "number"
		     },
		     "autoAlpha": {
		      "!type": "bool"
		     },
		     "alphaData": {
		      "!type": "+array"
		     },
		     "_a": {
		      "!type": "number"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "onEmit": {
		      "!type": "fn()"
		     },
		     "setAlphaData": {
		      "!type": "fn()"
		     },
		     "setScaleData": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn() -> ?"
		     },
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "deltaX": {
		      "!type": "number"
		     },
		     "deltaY": {
		      "!type": "number"
		     },
		     "deltaZ": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "health": {
		      "!type": "number"
		     },
		     "maxHealth": {
		      "!type": "number"
		     },
		     "damage": {},
		     "heal": {},
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "_outOfBoundsFired": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "transformCallback": {
		      "!type": "+function"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "checkTransform": {
		      "!type": "fn(wt: +PIXI.Matrix)"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Particle#update": {
		    "prototype": {
		     "autoScale": {},
		     "alpha": {},
		     "autoAlpha": {}
		    }
		   },
		   "Particle#setAlphaData": {
		    "prototype": {
		     "alphaData": {},
		     "_a": {},
		     "alpha": {},
		     "autoAlpha": {}
		    }
		   },
		   "Particle#setScaleData": {
		    "prototype": {
		     "scaleData": {},
		     "_s": {},
		     "autoScale": {}
		    }
		   },
		   "Particle#reset": {
		    "prototype": {
		     "alpha": {},
		     "autoScale": {},
		     "autoAlpha": {}
		    }
		   },
		   "RenderTexture": {
		    "!type": "fn(game: +Phaser.Game, key: string, width: number, height: number, key: string, scaleMode: number, resolution: number)",
		    "key": {},
		    "scaleMode": {},
		    "resolution": {},
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "_tempMatrix": {
		      "!type": "+PIXI.Matrix"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "renderXY": {
		      "!type": "fn()"
		     },
		     "renderRawXY": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "RenderTexture#renderXY#_tempMatrix": {
		    "tx": {},
		    "ty": {}
		   },
		   "RetroFont": {
		    "!type": "fn(game: +Phaser.Game, key: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing: number, ySpacing: number, xOffset: number, yOffset: number)",
		    "charsPerRow": {},
		    "prototype": {
		     "characterWidth": {
		      "!type": "number"
		     },
		     "characterHeight": {
		      "!type": "number"
		     },
		     "characterSpacingX": {
		      "!type": "number"
		     },
		     "characterSpacingY": {
		      "!type": "number"
		     },
		     "characterPerRow": {
		      "!type": "number"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "align": {
		      "!type": "string"
		     },
		     "multiLine": {
		      "!type": "bool"
		     },
		     "autoUpperCase": {
		      "!type": "bool"
		     },
		     "customSpacingX": {
		      "!type": "number"
		     },
		     "customSpacingY": {
		      "!type": "number"
		     },
		     "fixedWidth": {
		      "!type": "number"
		     },
		     "fontSet": {
		      "!type": "+Image"
		     },
		     "_text": {
		      "!type": "string"
		     },
		     "grabData": {
		      "!type": "+array"
		     },
		     "frameData": {
		      "!type": "+Phaser.FrameData"
		     },
		     "grabData[undefined]": {},
		     "stamp": {
		      "!type": "+Phaser.Image"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "setFixedWidth": {
		      "!type": "fn()"
		     },
		     "setText": {
		      "!type": "fn()"
		     },
		     "buildRetroFontText": {
		      "!type": "fn()"
		     },
		     "pasteLine": {
		      "!type": "fn()"
		     },
		     "getLongestLine": {
		      "!type": "fn()"
		     },
		     "removeUnsupportedCharacters": {
		      "!type": "fn()"
		     },
		     "updateOffset": {
		      "!type": "fn()"
		     },
		     "text": {
		      "!type": "string"
		     },
		     "smoothed": {
		      "!type": "string"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "_tempMatrix": {
		      "!type": "+PIXI.Matrix"
		     },
		     "renderXY": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, x: number, y: number, clear: bool)"
		     },
		     "renderRawXY": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, x: number, y: number, clear: bool)"
		     },
		     "render": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, matrix: +Phaser.Matrix, clear: bool)"
		     }
		    },
		    "currentX": {},
		    "currentY": {},
		    "r": {},
		    "c": {},
		    "frame": {},
		    "ALIGN_LEFT": {
		     "!type": "string"
		    },
		    "ALIGN_RIGHT": {
		     "!type": "string"
		    },
		    "ALIGN_CENTER": {
		     "!type": "string"
		    },
		    "TEXT_SET1": {
		     "!type": "string"
		    },
		    "TEXT_SET2": {
		     "!type": "string"
		    },
		    "TEXT_SET3": {
		     "!type": "string"
		    },
		    "TEXT_SET4": {
		     "!type": "string"
		    },
		    "TEXT_SET5": {
		     "!type": "string"
		    },
		    "TEXT_SET6": {
		     "!type": "string"
		    },
		    "TEXT_SET7": {
		     "!type": "string"
		    },
		    "TEXT_SET8": {
		     "!type": "string"
		    },
		    "TEXT_SET9": {
		     "!type": "string"
		    },
		    "TEXT_SET10": {
		     "!type": "string"
		    },
		    "TEXT_SET11": {
		     "!type": "string"
		    }
		   },
		   "RetroFont#setFixedWidth": {
		    "lineAlignment": {},
		    "prototype": {
		     "fixedWidth": {},
		     "align": {}
		    }
		   },
		   "RetroFont#setText": {
		    "prototype": {
		     "multiLine": {},
		     "customSpacingX": {},
		     "customSpacingY": {},
		     "align": {},
		     "autoUpperCase": {},
		     "text": {}
		    }
		   },
		   "RetroFont#buildRetroFontText": {
		    "cx": {},
		    "cy": {},
		    "lines": {},
		    "i": {},
		    "prototype": {
		     "requiresReTint": {}
		    }
		   },
		   "RetroFont#pasteLine": {
		    "c": {},
		    "x": {}
		   },
		   "RetroFont#pasteLine#stamp": {
		    "frame": {}
		   },
		   "RetroFont#getLongestLine": {
		    "longestLine": {},
		    "lines": {},
		    "i": {}
		   },
		   "RetroFont#removeUnsupportedCharacters": {
		    "newString": {},
		    "c": {},
		    "aChar": {},
		    "code": {}
		   },
		   "RetroFont#updateOffset": {
		    "diffX": {},
		    "diffY": {},
		    "frames": {},
		    "i": {}
		   },
		   "RetroFont#updateOffset~frames": {
		    "undefined].x": {},
		    "undefined].y": {}
		   },
		   "Rope": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number, points: [?])",
		    "prototype": {
		     "points": {},
		     "_hasUpdateAnimation": {},
		     "_updateAnimationCallback": {},
		     "type": {
		      "!type": "number"
		     },
		     "_scroll": {
		      "!type": "+Phaser.Point"
		     },
		     "preUpdatePhysics": {},
		     "preUpdateLifeSpan": {},
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "updateAnimation": {
		      "!type": "+function"
		     },
		     "segments": {
		      "!type": "[?]"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "deltaX": {
		      "!type": "number"
		     },
		     "deltaY": {
		      "!type": "number"
		     },
		     "deltaZ": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "_outOfBoundsFired": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "transformCallback": {
		      "!type": "+function"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "checkTransform": {
		      "!type": "fn(wt: +PIXI.Matrix)"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    },
		    "x": {},
		    "y": {},
		    "key": {},
		    "frame": {}
		   },
		   "Rope#preUpdate#tilePosition": {
		    "x": {},
		    "y": {}
		   },
		   "Rope#reset#tilePosition": {
		    "x": {},
		    "y": {}
		   },
		   "Sprite": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
		    "x": {},
		    "y": {},
		    "key": {},
		    "frame": {},
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "preUpdatePhysics": {},
		     "preUpdateLifeSpan": {},
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn() -> ?"
		     },
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "deltaX": {
		      "!type": "number"
		     },
		     "deltaY": {
		      "!type": "number"
		     },
		     "deltaZ": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "health": {
		      "!type": "number"
		     },
		     "maxHealth": {
		      "!type": "number"
		     },
		     "damage": {},
		     "heal": {},
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "_outOfBoundsFired": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     },
		     "transformCallback": {
		      "!type": "+function"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "checkTransform": {
		      "!type": "fn(wt: +PIXI.Matrix)"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "SpriteBatch": {
		    "!type": "fn(game: +Phaser.Game, parent: +Phaser.Group|+Phaser.Sprite|+null, name: string, addToStage: bool)",
		    "parent": {},
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "z": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "ignoreDestroy": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "classType": {},
		     "cursor": {
		      "!type": "+DisplayObject"
		     },
		     "enableBody": {
		      "!type": "bool"
		     },
		     "enableBodyDebug": {
		      "!type": "bool"
		     },
		     "physicsBodyType": {
		      "!type": "number"
		     },
		     "physicsSortDirection": {
		      "!type": "number"
		     },
		     "onDestroy": {
		      "!type": "+Phaser.Signal"
		     },
		     "cursorIndex": {
		      "!type": "number"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "hash": {
		      "!type": "+array"
		     },
		     "_sortProperty": {
		      "!type": "string"
		     },
		     "add": {
		      "!type": "fn(child: +DisplayObject, silent: bool) -> ?"
		     },
		     "addToHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "removeFromHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "addMultiple": {
		      "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> ?"
		     },
		     "addAt": {
		      "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> ?"
		     },
		     "getAt": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "create": {
		      "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> ?"
		     },
		     "createMultiple": {
		      "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "next": {
		      "!type": "fn() -> ?"
		     },
		     "previous": {
		      "!type": "fn() -> ?"
		     },
		     "swap": {
		      "!type": "fn(child1: +any, child2: +any)"
		     },
		     "bringToTop": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveUp": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveDown": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "xy": {
		      "!type": "fn(index: number, x: number, y: number)"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "replace": {
		      "!type": "fn(oldChild: +any, newChild: +any) -> ?"
		     },
		     "hasProperty": {
		      "!type": "fn(child: +any, key: [?]) -> ?"
		     },
		     "setProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> ?"
		     },
		     "checkProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> ?"
		     },
		     "set": {
		      "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> ?"
		     },
		     "setAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "setAllChildren": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "checkAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		     },
		     "addAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "subAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "multiplyAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "divideAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "callAllExists": {
		      "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		     },
		     "callbackFromArray": {
		      "!type": "fn(child: ?, callback: +array, length: number)"
		     },
		     "callAll": {
		      "!type": "fn(method: string, context: string, args: +any)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn(predicate: +function, checkExists: bool) -> ?"
		     },
		     "forEach": {
		      "!type": "fn(callback: +function, callbackContext: ?, checkExists: bool, args: +any)"
		     },
		     "forEachExists": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachAlive": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachDead": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "sort": {
		      "!type": "fn(key: string, order: number)"
		     },
		     "customSort": {
		      "!type": "fn(sortHandler: +function, context: ?)"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "descendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "iterate": {
		      "!type": "fn(key: string, value: +any, returnType: number, callback: +function, callbackContext: ?, args: [?]) -> ?"
		     },
		     "getFirstExists": {
		      "!type": "fn(exists: bool) -> ?"
		     },
		     "getFirstAlive": {
		      "!type": "fn() -> ?"
		     },
		     "getFirstDead": {
		      "!type": "fn() -> ?"
		     },
		     "getTop": {
		      "!type": "fn() -> ?"
		     },
		     "getBottom": {
		      "!type": "fn() -> ?"
		     },
		     "countLiving": {
		      "!type": "fn() -> ?"
		     },
		     "countDead": {
		      "!type": "fn() -> ?"
		     },
		     "getRandom": {
		      "!type": "fn(startIndex: number, length: number) -> ?"
		     },
		     "remove": {
		      "!type": "fn(child: +any, destroy: bool, silent: bool) -> ?"
		     },
		     "moveAll": {
		      "!type": "fn(group: +Phaser.Group, silent: bool) -> ?"
		     },
		     "removeAll": {
		      "!type": "fn(destroy: bool, silent: bool)"
		     },
		     "removeBetween": {
		      "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool, soft: bool)"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "rotation": {
		      "!type": "number"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "alpha": {
		      "!type": "number"
		     },
		     "children": {}
		    }
		   },
		   "Text": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, text: string, style: ?, style_font: string, style_fontStyle: string, style_fontVariant: string, style_fontWeight: string, style_fontSize: string|number, style_backgroundColor: string, style_fill: string, style_align: string, style_boundsAlignH: string, style_boundsAlignV: string, style_stroke: string, style_strokeThickness: number, style_wordWrap: bool, style_wordWrapWidth: number, style_tabs: number)",
		    "x": {},
		    "y": {},
		    "text": {},
		    "style": {},
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "padding": {
		      "!type": "+Phaser.Point"
		     },
		     "textBounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "canvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "context": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "colors": {
		      "!type": "+array"
		     },
		     "strokeColors": {
		      "!type": "+array"
		     },
		     "fontStyles": {
		      "!type": "+array"
		     },
		     "fontWeights": {
		      "!type": "+array"
		     },
		     "autoRound": {
		      "!type": "bool"
		     },
		     "_res": {
		      "!type": "number"
		     },
		     "_text": {
		      "!type": "string"
		     },
		     "_fontComponents": {},
		     "_lineSpacing": {
		      "!type": "number"
		     },
		     "_charCount": {
		      "!type": "number"
		     },
		     "_width": {
		      "!type": "number"
		     },
		     "_height": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "setShadow": {
		      "!type": "fn()"
		     },
		     "setStyle": {
		      "!type": "fn()"
		     },
		     "updateText": {
		      "!type": "fn()"
		     },
		     "renderTabLine": {
		      "!type": "fn()"
		     },
		     "updateShadow": {
		      "!type": "fn()"
		     },
		     "updateLine": {
		      "!type": "fn()"
		     },
		     "clearColors": {
		      "!type": "fn()"
		     },
		     "clearFontValues": {
		      "!type": "fn()"
		     },
		     "addColor": {
		      "!type": "fn()"
		     },
		     "addStrokeColor": {
		      "!type": "fn()"
		     },
		     "addFontStyle": {
		      "!type": "fn()"
		     },
		     "addFontWeight": {
		      "!type": "fn()"
		     },
		     "runWordWrap": {
		      "!type": "fn()"
		     },
		     "updateFont": {
		      "!type": "fn()"
		     },
		     "fontToComponents": {
		      "!type": "fn()"
		     },
		     "componentsToFont": {
		      "!type": "fn()"
		     },
		     "setText": {
		      "!type": "fn()"
		     },
		     "parseList": {
		      "!type": "fn()"
		     },
		     "setTextBounds": {
		      "!type": "fn()"
		     },
		     "updateTexture": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     },
		     "determineFontProperties": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "text": {
		      "!type": "string"
		     },
		     "cssFont": {
		      "!type": "string"
		     },
		     "font": {
		      "!type": "string"
		     },
		     "fontSize": {
		      "!type": "number|string"
		     },
		     "fontWeight": {
		      "!type": "string"
		     },
		     "fontStyle": {
		      "!type": "string"
		     },
		     "fontVariant": {
		      "!type": "string"
		     },
		     "fill": {},
		     "align": {
		      "!type": "string"
		     },
		     "resolution": {
		      "!type": "number"
		     },
		     "tabs": {
		      "!type": "number|+array"
		     },
		     "boundsAlignH": {
		      "!type": "string"
		     },
		     "boundsAlignV": {
		      "!type": "string"
		     },
		     "stroke": {
		      "!type": "string"
		     },
		     "strokeThickness": {
		      "!type": "number"
		     },
		     "wordWrap": {
		      "!type": "bool"
		     },
		     "wordWrapWidth": {
		      "!type": "number"
		     },
		     "lineSpacing": {
		      "!type": "number"
		     },
		     "shadowOffsetX": {
		      "!type": "number"
		     },
		     "shadowOffsetY": {
		      "!type": "number"
		     },
		     "shadowColor": {
		      "!type": "string"
		     },
		     "shadowBlur": {
		      "!type": "number"
		     },
		     "shadowStroke": {
		      "!type": "bool"
		     },
		     "shadowFill": {
		      "!type": "bool"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "anchor": {},
		     "texture": {},
		     "tint": {},
		     "cachedTint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "deltaX": {
		      "!type": "number"
		     },
		     "deltaY": {
		      "!type": "number"
		     },
		     "deltaZ": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "health": {
		      "!type": "number"
		     },
		     "maxHealth": {
		      "!type": "number"
		     },
		     "damage": {},
		     "heal": {},
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "_outOfBoundsFired": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     },
		     "transformCallback": {
		      "!type": "+function"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "checkTransform": {
		      "!type": "fn(wt: +PIXI.Matrix)"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    },
		    "fontPropertiesCache[undefined]": {},
		    "fontPropertiesCache": {},
		    "fontPropertiesCanvas": {},
		    "fontPropertiesContext": {}
		   },
		   "Text#setShadow": {
		    "x": {},
		    "y": {},
		    "color": {},
		    "blur": {},
		    "shadowStroke": {},
		    "shadowFill": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Text#setShadow#style": {
		    "shadowOffsetX": {},
		    "shadowOffsetY": {},
		    "shadowColor": {},
		    "shadowBlur": {},
		    "shadowStroke": {},
		    "shadowFill": {}
		   },
		   "Text#setStyle": {
		    "style": {},
		    "components": {},
		    "prototype": {
		     "_fontComponents": {},
		     "style": {},
		     "dirty": {}
		    }
		   },
		   "Text#setStyle~style": {
		    "font": {},
		    "backgroundColor": {},
		    "fill": {},
		    "align": {},
		    "boundsAlignH": {},
		    "boundsAlignV": {},
		    "stroke": {},
		    "strokeThickness": {},
		    "wordWrap": {},
		    "wordWrapWidth": {},
		    "shadowOffsetX": {},
		    "shadowOffsetY": {},
		    "shadowColor": {},
		    "shadowBlur": {},
		    "tabs": {},
		    "fontSize": {}
		   },
		   "Text#setStyle~components": {
		    "fontStyle": {},
		    "fontVariant": {},
		    "fontWeight": {},
		    "fontSize": {}
		   },
		   "Text#updateText#texture": {
		    "baseTexture": {
		     "resolution": {}
		    }
		   },
		   "Text#updateText#context": {
		    "font": {},
		    "fillStyle": {},
		    "strokeStyle": {},
		    "textBaseline": {},
		    "lineWidth": {},
		    "lineCap": {},
		    "lineJoin": {}
		   },
		   "Text#updateText": {
		    "outputText": {},
		    "lines": {},
		    "tabs": {},
		    "lineWidths": {},
		    "maxLineWidth": {},
		    "fontProperties": {},
		    "i": {},
		    "lineWidth": {},
		    "line": {},
		    "tab": {},
		    "c": {},
		    "section": {},
		    "diff": {},
		    "width": {},
		    "lineHeight": {},
		    "height": {},
		    "lineSpacing": {},
		    "linePositionX": {},
		    "linePositionY": {},
		    "prototype": {
		     "_charCount": {}
		    }
		   },
		   "Text#updateText~lineWidths": {
		    "undefined]": {}
		   },
		   "Text#updateText#canvas": {
		    "width": {},
		    "height": {}
		   },
		   "Text#renderTabLine": {
		    "text": {},
		    "tabs": {},
		    "snap": {},
		    "tab": {},
		    "c": {},
		    "section": {},
		    "x": {}
		   },
		   "Text#updateShadow#context": {
		    "shadowOffsetX": {},
		    "shadowOffsetY": {},
		    "shadowColor": {},
		    "shadowBlur": {}
		   },
		   "Text#updateLine": {
		    "i": {},
		    "letter": {},
		    "components": {},
		    "x": {}
		   },
		   "Text#updateLine~components": {
		    "fontStyle": {},
		    "fontWeight": {}
		   },
		   "Text#updateLine#context": {
		    "font": {},
		    "strokeStyle": {},
		    "fillStyle": {}
		   },
		   "Text#clearColors": {
		    "prototype": {
		     "colors": {},
		     "strokeColors": {},
		     "dirty": {}
		    }
		   },
		   "Text#clearFontValues": {
		    "prototype": {
		     "fontStyles": {},
		     "fontWeights": {},
		     "dirty": {}
		    }
		   },
		   "Text#addColor": {
		    "prototype": {
		     "colors[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "Text#addStrokeColor": {
		    "prototype": {
		     "strokeColors[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "Text#addFontStyle": {
		    "prototype": {
		     "fontStyles[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "Text#addFontWeight": {
		    "prototype": {
		     "fontWeights[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "Text#runWordWrap": {
		    "result": {},
		    "lines": {},
		    "i": {},
		    "spaceLeft": {},
		    "words": {},
		    "j": {},
		    "wordWidth": {},
		    "wordWidthWithSpace": {}
		   },
		   "Text#updateFont": {
		    "font": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Text#updateFont#style": {
		    "font": {}
		   },
		   "Text#fontToComponents": {
		    "m": {}
		   },
		   "Text#componentsToFont": {
		    "parts": {},
		    "v": {}
		   },
		   "Text#setText": {
		    "prototype": {
		     "text": {},
		     "dirty": {}
		    }
		   },
		   "Text#parseList": {
		    "s": {},
		    "i": {},
		    "prototype": {
		     "text": {},
		     "dirty": {}
		    }
		   },
		   "Text#setTextBounds": {
		    "prototype": {
		     "textBounds": {}
		    }
		   },
		   "Text#setTextBounds#style": {
		    "wordWrapWidth": {}
		   },
		   "Text#updateTexture": {
		    "base": {},
		    "crop": {},
		    "frame": {},
		    "w": {},
		    "h": {},
		    "prototype": {
		     "_width": {},
		     "_height": {},
		     "renderable": {}
		    },
		    "x": {},
		    "y": {}
		   },
		   "Text#updateTexture~base": {
		    "width": {},
		    "height": {}
		   },
		   "Text#updateTexture~crop": {
		    "width": {},
		    "height": {}
		   },
		   "Text#updateTexture~frame": {
		    "width": {},
		    "height": {}
		   },
		   "Text#updateTexture#texture": {
		    "width": {},
		    "height": {},
		    "requiresReTint": {}
		   },
		   "Text#updateTexture#pivot": {
		    "x": {},
		    "y": {}
		   },
		   "Text#_renderWebGL": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Text#_renderCanvas": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Text#determineFontProperties": {
		    "properties": {},
		    "canvas": {},
		    "context": {},
		    "width": {},
		    "baseline": {},
		    "height": {},
		    "imagedata": {},
		    "pixels": {},
		    "line": {},
		    "i": {},
		    "j": {},
		    "idx": {},
		    "stop": {}
		   },
		   "Text#determineFontProperties~context": {
		    "font": {},
		    "fillStyle": {},
		    "textBaseline": {}
		   },
		   "Text#determineFontProperties~canvas": {
		    "width": {},
		    "height": {}
		   },
		   "Text#determineFontProperties~properties": {
		    "ascent": {},
		    "descent": {},
		    "fontSize": {}
		   },
		   "Text#getBounds": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "TileSprite": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, width: number, height: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "key": {},
		    "frame": {},
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "_scroll": {
		      "!type": "+Phaser.Point"
		     },
		     "preUpdatePhysics": {},
		     "preUpdateLifeSpan": {},
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "autoScroll": {
		      "!type": "fn()"
		     },
		     "stopScroll": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "_width": {},
		     "_height": {},
		     "tileScale": {},
		     "tileScaleOffset": {},
		     "tilePosition": {},
		     "renderable": {},
		     "tint": {},
		     "textureDebug": {},
		     "blendMode": {},
		     "canvasBuffer": {},
		     "tilingTexture": {},
		     "tilePattern": {},
		     "refreshTexture": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "health": {
		      "!type": "number"
		     },
		     "maxHealth": {
		      "!type": "number"
		     },
		     "damage": {},
		     "heal": {},
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "_outOfBoundsFired": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    },
		    "def": {}
		   },
		   "TileSprite#preUpdate#tilePosition": {
		    "x": {},
		    "y": {}
		   },
		   "TileSprite#reset#tilePosition": {
		    "x": {},
		    "y": {}
		   },
		   "Video": {
		    "!type": "fn(game: +Phaser.Game, key: string|+null, url: string|+null)",
		    "key": {},
		    "url": {},
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "disableTextureUpload": {
		      "!type": "bool"
		     },
		     "touchLocked": {
		      "!type": "bool"
		     },
		     "onPlay": {
		      "!type": "+Phaser.Signal"
		     },
		     "onChangeSource": {
		      "!type": "+Phaser.Signal"
		     },
		     "onComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onAccess": {
		      "!type": "+Phaser.Signal"
		     },
		     "onError": {
		      "!type": "+Phaser.Signal"
		     },
		     "onTimeout": {
		      "!type": "+Phaser.Signal"
		     },
		     "timeout": {
		      "!type": "number"
		     },
		     "_timeOutID": {
		      "!type": "number"
		     },
		     "video": {
		      "!type": "+HTMLVideoElement"
		     },
		     "videoStream": {
		      "!type": "+MediaStream"
		     },
		     "isStreaming": {
		      "!type": "bool"
		     },
		     "retryLimit": {
		      "!type": "number"
		     },
		     "retry": {
		      "!type": "number"
		     },
		     "retryInterval": {
		      "!type": "number"
		     },
		     "_retryID": {
		      "!type": "number"
		     },
		     "_codeMuted": {
		      "!type": "bool"
		     },
		     "_muted": {
		      "!type": "bool"
		     },
		     "_codePaused": {
		      "!type": "bool"
		     },
		     "_paused": {
		      "!type": "bool"
		     },
		     "_pending": {
		      "!type": "bool"
		     },
		     "_autoplay": {
		      "!type": "bool"
		     },
		     "baseTexture": {},
		     "texture": {
		      "!type": "+PIXI.Texture"
		     },
		     "textureFrame": {
		      "!type": "+Phaser.Frame"
		     },
		     "snapshot": {
		      "!type": "+Phaser.BitmapData"
		     },
		     "connectToMediaStream": {
		      "!type": "fn()"
		     },
		     "startMediaStream": {
		      "!type": "fn()"
		     },
		     "getUserMediaTimeout": {
		      "!type": "fn()"
		     },
		     "getUserMediaError": {
		      "!type": "fn()"
		     },
		     "getUserMediaSuccess": {
		      "!type": "fn()"
		     },
		     "createVideoFromBlob": {
		      "!type": "fn()"
		     },
		     "createVideoFromURL": {
		      "!type": "fn()"
		     },
		     "updateTexture": {
		      "!type": "fn()"
		     },
		     "complete": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn()"
		     },
		     "playHandler": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "addToWorld": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "setMute": {
		      "!type": "fn()"
		     },
		     "unsetMute": {
		      "!type": "fn()"
		     },
		     "setPause": {
		      "!type": "fn()"
		     },
		     "setResume": {
		      "!type": "fn()"
		     },
		     "changeSource": {
		      "!type": "fn()"
		     },
		     "checkVideoProgress": {
		      "!type": "fn()"
		     },
		     "setTouchLock": {
		      "!type": "fn()"
		     },
		     "unlock": {
		      "!type": "fn()"
		     },
		     "grab": {
		      "!type": "fn()"
		     },
		     "removeVideoElement": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "mute": {
		      "!type": "bool"
		     },
		     "paused": {
		      "!type": "bool"
		     },
		     "volume": {
		      "!type": "number"
		     },
		     "playbackRate": {
		      "!type": "number"
		     },
		     "loop": {
		      "!type": "bool"
		     },
		     "playing": {
		      "!type": "bool"
		     }
		    },
		    "_video": {}
		   },
		   "Video#texture": {
		    "valid": {}
		   },
		   "Video~_video": {
		    "locked": {}
		   },
		   "Video#connectToMediaStream": {
		    "prototype": {
		     "video": {},
		     "videoStream": {},
		     "isStreaming": {}
		    }
		   },
		   "Video#connectToMediaStream#baseTexture": {
		    "source": {}
		   },
		   "Video#startMediaStream": {
		    "captureAudio": {},
		    "width": {},
		    "height": {},
		    "prototype": {
		     "video": {},
		     "_timeOutID": {}
		    }
		   },
		   "Video#startMediaStream#videoStream": {
		    "active": {}
		   },
		   "Video#startMediaStream#video": {
		    "width": {},
		    "height": {}
		   },
		   "Video#getUserMediaSuccess": {
		    "prototype": {
		     "videoStream": {}
		    },
		    "self": {}
		   },
		   "Video#getUserMediaSuccess#video": {
		    "mozSrcObject": {},
		    "src": {},
		    "onloadeddata": {
		     "!type": "fn()",
		     "retry": {},
		     "checkStream": {
		      "!type": "fn()"
		     }
		    },
		    "onloadeddata~checkStream": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Video#getUserMediaSuccess~self": {
		    "isStreaming": {},
		    "baseTexture.source": {}
		   },
		   "Video#createVideoFromBlob": {
		    "_this": {},
		    "prototype": {
		     "video": {}
		    }
		   },
		   "Video#createVideoFromBlob#video": {
		    "controls": {},
		    "src": {},
		    "canplay": {}
		   },
		   "Video#createVideoFromURL": {
		    "autoplay": {},
		    "prototype": {
		     "video": {},
		     "retry": {},
		     "_retryID": {},
		     "key": {}
		    }
		   },
		   "Video#createVideoFromURL#texture": {
		    "valid": {}
		   },
		   "Video#createVideoFromURL#video": {
		    "controls": {},
		    "src": {},
		    "canplay": {}
		   },
		   "Video#updateTexture": {
		    "change": {},
		    "width": {},
		    "height": {},
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Video#updateTexture#baseTexture": {
		    "source": {}
		   },
		   "Video#updateTexture#texture": {
		    "width": {},
		    "height": {},
		    "valid": {}
		   },
		   "Video#play": {
		    "loop": {},
		    "playbackRate": {},
		    "prototype": {
		     "_pending": {},
		     "retry": {},
		     "_retryID": {}
		    }
		   },
		   "Video#play#video": {
		    "loop": {},
		    "playbackRate": {}
		   },
		   "Video#stop#video": {
		    "src": {}
		   },
		   "Video#stop#videoStream": {
		    "active": {}
		   },
		   "Video#stop": {
		    "prototype": {
		     "videoStream": {},
		     "isStreaming": {},
		     "_pending": {}
		    }
		   },
		   "Video#add": {
		    "i": {}
		   },
		   "Video#addToWorld": {
		    "scaleX": {},
		    "scaleY": {},
		    "image": {}
		   },
		   "Video#setMute": {
		    "prototype": {
		     "_muted": {}
		    }
		   },
		   "Video#setMute#video": {
		    "muted": {}
		   },
		   "Video#unsetMute": {
		    "prototype": {
		     "_muted": {}
		    }
		   },
		   "Video#unsetMute#video": {
		    "muted": {}
		   },
		   "Video#setPause": {
		    "prototype": {
		     "_paused": {}
		    }
		   },
		   "Video#setResume": {
		    "prototype": {
		     "_paused": {}
		    }
		   },
		   "Video#changeSource": {
		    "autoplay": {},
		    "prototype": {
		     "retry": {},
		     "_retryID": {},
		     "_autoplay": {},
		     "paused": {}
		    }
		   },
		   "Video#changeSource#texture": {
		    "valid": {}
		   },
		   "Video#changeSource#video": {
		    "src": {}
		   },
		   "Video#checkVideoProgress": {
		    "prototype": {
		     "_retryID": {}
		    }
		   },
		   "Video#setTouchLock": {
		    "prototype": {
		     "touchLocked": {}
		    }
		   },
		   "Video#unlock": {
		    "prototype": {
		     "touchLocked": {}
		    },
		    "_video": {}
		   },
		   "Video#unlock~_video": {
		    "locked": {}
		   },
		   "Video#grab": {
		    "clear": {},
		    "alpha": {},
		    "blendMode": {}
		   },
		   "Video#removeVideoElement": {
		    "prototype": {
		     "video": {}
		    }
		   },
		   "Circle": {
		    "!type": "fn(x: number, y: number, diameter: number)",
		    "x": {},
		    "y": {},
		    "diameter": {},
		    "prototype": {
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "_diameter": {
		      "!type": "number"
		     },
		     "_radius": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "circumference": {
		      "!type": "fn()"
		     },
		     "random": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "copyFrom": {
		      "!type": "fn()"
		     },
		     "copyTo": {
		      "!type": "fn()"
		     },
		     "distance": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "contains": {
		      "!type": "fn()"
		     },
		     "circumferencePoint": {
		      "!type": "fn()"
		     },
		     "offset": {
		      "!type": "fn()"
		     },
		     "offsetPoint": {
		      "!type": "fn()"
		     },
		     "diameter": {
		      "!type": "number"
		     },
		     "radius": {
		      "!type": "number"
		     },
		     "left": {},
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "area": {
		      "!type": "number"
		     },
		     "empty": {
		      "!type": "bool"
		     }
		    },
		    "contains": {
		     "!type": "fn()",
		     "dx": {},
		     "dy": {}
		    },
		    "equals": {
		     "!type": "fn()"
		    },
		    "intersects": {
		     "!type": "fn()"
		    },
		    "circumferencePoint": {
		     "!type": "fn()",
		     "asDegrees": {},
		     "out": {},
		     "angle": {}
		    },
		    "circumferencePoint~out": {
		     "x": {},
		     "y": {}
		    },
		    "intersectsRectangle": {
		     "!type": "fn()",
		     "cx": {},
		     "xDist": {},
		     "cy": {},
		     "yDist": {},
		     "xCornerDist": {},
		     "yCornerDist": {},
		     "xCornerDistSq": {},
		     "yCornerDistSq": {},
		     "maxCornerDistSq": {}
		    }
		   },
		   "Circle#random": {
		    "out": {},
		    "t": {},
		    "u": {},
		    "r": {},
		    "x": {},
		    "y": {}
		   },
		   "Circle#random~out": {
		    "x": {},
		    "y": {}
		   },
		   "Circle#setTo": {
		    "prototype": {
		     "x": {},
		     "y": {},
		     "_diameter": {},
		     "_radius": {}
		    }
		   },
		   "Circle#distance": {
		    "distance": {}
		   },
		   "Circle#clone": {
		    "output": {}
		   },
		   "Circle#offset": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Ellipse": {
		    "!type": "fn(x: number, y: number, width: number, height: number)",
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "prototype": {
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "copyFrom": {
		      "!type": "fn()"
		     },
		     "copyTo": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "contains": {
		      "!type": "fn()"
		     },
		     "random": {
		      "!type": "fn()"
		     },
		     "left": {},
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "empty": {
		      "!type": "bool"
		     }
		    },
		    "contains": {
		     "!type": "fn()",
		     "normx": {},
		     "normy": {}
		    }
		   },
		   "Ellipse#setTo": {
		    "prototype": {
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "Ellipse#clone": {
		    "output": {}
		   },
		   "Ellipse#random": {
		    "out": {},
		    "p": {},
		    "r": {}
		   },
		   "Ellipse#random~out": {
		    "x": {},
		    "y": {}
		   },
		   "Line": {
		    "!type": "fn(x1: number, y1: number, x2: number, y2: number)",
		    "x1": {},
		    "y1": {},
		    "x2": {},
		    "y2": {},
		    "prototype": {
		     "start": {
		      "!type": "+Phaser.Point"
		     },
		     "end": {
		      "!type": "+Phaser.Point"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "fromSprite": {
		      "!type": "fn()"
		     },
		     "fromAngle": {
		      "!type": "fn()"
		     },
		     "rotate": {
		      "!type": "fn()"
		     },
		     "rotateAround": {
		      "!type": "fn()"
		     },
		     "intersects": {
		      "!type": "fn()"
		     },
		     "reflect": {
		      "!type": "fn()"
		     },
		     "midPoint": {
		      "!type": "fn()"
		     },
		     "centerOn": {
		      "!type": "fn()"
		     },
		     "pointOnLine": {
		      "!type": "fn()"
		     },
		     "pointOnSegment": {
		      "!type": "fn()"
		     },
		     "random": {
		      "!type": "fn()"
		     },
		     "coordinatesOnLine": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "slope": {
		      "!type": "number"
		     },
		     "perpSlope": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "normalX": {
		      "!type": "number"
		     },
		     "normalY": {
		      "!type": "number"
		     },
		     "normalAngle": {
		      "!type": "number"
		     }
		    },
		    "intersectsPoints": {
		     "!type": "fn()",
		     "asSegment": {},
		     "result": {},
		     "a1": {},
		     "a2": {},
		     "b1": {},
		     "b2": {},
		     "c1": {},
		     "c2": {},
		     "denom": {},
		     "uc": {},
		     "ua": {},
		     "ub": {}
		    },
		    "intersectsPoints~result": {
		     "x": {},
		     "y": {}
		    },
		    "intersects": {
		     "!type": "fn()"
		    },
		    "reflect": {
		     "!type": "fn()"
		    }
		   },
		   "Line#fromSprite": {
		    "useCenter": {}
		   },
		   "Line#rotate": {
		    "cx": {},
		    "cy": {}
		   },
		   "Line#midPoint": {
		    "out": {}
		   },
		   "Line#midPoint~out": {
		    "x": {},
		    "y": {}
		   },
		   "Line#centerOn": {
		    "cx": {},
		    "cy": {},
		    "tx": {},
		    "ty": {}
		   },
		   "Line#pointOnSegment": {
		    "xMin": {},
		    "xMax": {},
		    "yMin": {},
		    "yMax": {}
		   },
		   "Line#random": {
		    "out": {},
		    "t": {}
		   },
		   "Line#random~out": {
		    "x": {},
		    "y": {}
		   },
		   "Line#coordinatesOnLine": {
		    "stepRate": {},
		    "results": {},
		    "x1": {},
		    "y1": {},
		    "x2": {},
		    "y2": {},
		    "dx": {},
		    "dy": {},
		    "sx": {},
		    "sy": {},
		    "err": {},
		    "i": {},
		    "e2": {}
		   },
		   "Line#clone": {
		    "output": {}
		   },
		   "Matrix": {
		    "!type": "fn(a: number, b: number, c: number, d: number, tx: number, ty: number)",
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {},
		    "prototype": {
		     "a": {
		      "!type": "number"
		     },
		     "b": {
		      "!type": "number"
		     },
		     "c": {
		      "!type": "number"
		     },
		     "d": {
		      "!type": "number"
		     },
		     "tx": {
		      "!type": "number"
		     },
		     "ty": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "fromArray": {
		      "!type": "fn()"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "copyTo": {
		      "!type": "fn()"
		     },
		     "copyFrom": {
		      "!type": "fn()"
		     },
		     "toArray": {
		      "!type": "fn()"
		     },
		     "apply": {
		      "!type": "fn()"
		     },
		     "applyInverse": {
		      "!type": "fn()"
		     },
		     "translate": {
		      "!type": "fn()"
		     },
		     "scale": {
		      "!type": "fn()"
		     },
		     "rotate": {
		      "!type": "fn()"
		     },
		     "append": {
		      "!type": "fn()"
		     },
		     "identity": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Matrix#setTo": {
		    "prototype": {
		     "a": {},
		     "b": {},
		     "c": {},
		     "d": {},
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "Matrix#clone": {
		    "output": {}
		   },
		   "Matrix#clone~output": {
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {}
		   },
		   "Matrix#copyFrom": {
		    "prototype": {
		     "a": {},
		     "b": {},
		     "c": {},
		     "d": {},
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "Matrix#toArray": {
		    "array": {}
		   },
		   "Matrix#toArray~array": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {},
		    "6]": {},
		    "7]": {},
		    "8]": {}
		   },
		   "Matrix#apply": {
		    "newPos": {}
		   },
		   "Matrix#apply~newPos": {
		    "x": {},
		    "y": {}
		   },
		   "Matrix#applyInverse": {
		    "newPos": {},
		    "id": {},
		    "x": {},
		    "y": {}
		   },
		   "Matrix#applyInverse~newPos": {
		    "x": {},
		    "y": {}
		   },
		   "Matrix#translate": {
		    "prototype": {
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "Matrix#scale": {
		    "prototype": {
		     "a": {},
		     "d": {},
		     "c": {},
		     "b": {},
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "Matrix#rotate": {
		    "cos": {},
		    "sin": {},
		    "a1": {},
		    "c1": {},
		    "tx1": {},
		    "prototype": {
		     "a": {},
		     "b": {},
		     "c": {},
		     "d": {},
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "Matrix#append": {
		    "a1": {},
		    "b1": {},
		    "c1": {},
		    "d1": {},
		    "prototype": {
		     "a": {},
		     "b": {},
		     "c": {},
		     "d": {},
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "identityMatrix": {},
		   "Point": {
		    "!type": "fn(x: number, y: number)",
		    "x": {},
		    "y": {},
		    "prototype": {
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "copyFrom": {
		      "!type": "fn()"
		     },
		     "invert": {
		      "!type": "fn()"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "subtract": {
		      "!type": "fn()"
		     },
		     "multiply": {
		      "!type": "fn()"
		     },
		     "divide": {
		      "!type": "fn()"
		     },
		     "clampX": {
		      "!type": "fn()"
		     },
		     "clampY": {
		      "!type": "fn()"
		     },
		     "clamp": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "copyTo": {
		      "!type": "fn()"
		     },
		     "distance": {
		      "!type": "fn()"
		     },
		     "equals": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "fn()"
		     },
		     "rotate": {
		      "!type": "fn()"
		     },
		     "getMagnitude": {
		      "!type": "fn()"
		     },
		     "getMagnitudeSq": {
		      "!type": "fn()"
		     },
		     "setMagnitude": {
		      "!type": "fn()"
		     },
		     "normalize": {
		      "!type": "fn()"
		     },
		     "isZero": {
		      "!type": "fn()"
		     },
		     "dot": {
		      "!type": "fn()"
		     },
		     "cross": {
		      "!type": "fn()"
		     },
		     "perp": {
		      "!type": "fn()"
		     },
		     "rperp": {
		      "!type": "fn()"
		     },
		     "normalRightHand": {
		      "!type": "fn()"
		     },
		     "floor": {
		      "!type": "fn()"
		     },
		     "ceil": {
		      "!type": "fn()"
		     }
		    },
		    "add": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "add~out": {
		     "x": {},
		     "y": {}
		    },
		    "subtract": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "subtract~out": {
		     "x": {},
		     "y": {}
		    },
		    "multiply": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "multiply~out": {
		     "x": {},
		     "y": {}
		    },
		    "divide": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "divide~out": {
		     "x": {},
		     "y": {}
		    },
		    "equals": {
		     "!type": "fn()"
		    },
		    "angle": {
		     "!type": "fn()"
		    },
		    "negative": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "multiplyAdd": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "interpolate": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "perp": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "rperp": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "distance": {
		     "!type": "fn()",
		     "distance": {}
		    },
		    "project": {
		     "!type": "fn()",
		     "out": {},
		     "amt": {}
		    },
		    "projectUnit": {
		     "!type": "fn()",
		     "out": {},
		     "amt": {}
		    },
		    "normalRightHand": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "normalize": {
		     "!type": "fn()",
		     "out": {},
		     "m": {}
		    },
		    "rotate": {
		     "!type": "fn()",
		     "angle": {},
		     "s": {},
		     "c": {},
		     "tx": {},
		     "ty": {},
		     "t": {}
		    },
		    "centroid": {
		     "!type": "fn()",
		     "out": {},
		     "pointslength": {},
		     "i": {}
		    },
		    "parse": {
		     "!type": "fn()",
		     "xProp": {},
		     "yProp": {},
		     "point": {}
		    },
		    "parse~point": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#setTo": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#set": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#add": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#subtract": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#multiply": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#divide": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#clampX": {
		    "prototype": {
		     "x": {}
		    }
		   },
		   "Point#clampY": {
		    "prototype": {
		     "y": {}
		    }
		   },
		   "Point#clamp": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#clone": {
		    "output": {}
		   },
		   "Point#angle": {
		    "asDegrees": {}
		   },
		   "Point#normalize": {
		    "m": {},
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Polygon": {
		    "!type": "fn(points: [?]|[?]|+Phaser.Point|number)",
		    "prototype": {
		     "area": {
		      "!type": "number"
		     },
		     "_points": {
		      "!type": "+array"
		     },
		     "closed": {
		      "!type": "bool"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "toNumberArray": {
		      "!type": "fn()"
		     },
		     "flatten": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "contains": {
		      "!type": "fn()"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "calculateArea": {
		      "!type": "fn()"
		     },
		     "points": {
		      "!type": "[?]"
		     }
		    }
		   },
		   "Polygon#toNumberArray": {
		    "output": {},
		    "i": {}
		   },
		   "Polygon#flatten": {
		    "prototype": {
		     "_points": {}
		    }
		   },
		   "Polygon#clone": {
		    "points": {},
		    "output": {}
		   },
		   "Polygon#contains": {
		    "length": {},
		    "inside": {},
		    "i": {},
		    "j": {},
		    "ix": {},
		    "iy": {},
		    "jx": {},
		    "jy": {}
		   },
		   "Polygon#setTo": {
		    "prototype": {
		     "area": {},
		     "_points": {}
		    },
		    "points": {},
		    "y0": {},
		    "i": {},
		    "len": {},
		    "p": {}
		   },
		   "Polygon#calculateArea": {
		    "p1": {},
		    "p2": {},
		    "avgHeight": {},
		    "width": {},
		    "i": {},
		    "len": {},
		    "prototype": {
		     "area": {}
		    }
		   },
		   "Rectangle": {
		    "!type": "fn(x: number, y: number, width: number, height: number)",
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "prototype": {
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "offset": {
		      "!type": "fn()"
		     },
		     "offsetPoint": {
		      "!type": "fn()"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "scale": {
		      "!type": "fn()"
		     },
		     "centerOn": {
		      "!type": "fn()"
		     },
		     "floor": {
		      "!type": "fn()"
		     },
		     "floorAll": {
		      "!type": "fn()"
		     },
		     "ceil": {
		      "!type": "fn()"
		     },
		     "ceilAll": {
		      "!type": "fn()"
		     },
		     "copyFrom": {
		      "!type": "fn()"
		     },
		     "copyTo": {
		      "!type": "fn()"
		     },
		     "inflate": {
		      "!type": "fn()"
		     },
		     "size": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "contains": {
		      "!type": "fn()"
		     },
		     "containsRect": {
		      "!type": "fn()"
		     },
		     "equals": {
		      "!type": "fn()"
		     },
		     "intersection": {
		      "!type": "fn()"
		     },
		     "intersects": {
		      "!type": "fn()"
		     },
		     "intersectsRaw": {
		      "!type": "fn()"
		     },
		     "union": {
		      "!type": "fn()"
		     },
		     "random": {
		      "!type": "fn()"
		     },
		     "halfWidth": {
		      "!type": "number"
		     },
		     "halfHeight": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bottomLeft": {
		      "!type": "+Phaser.Point"
		     },
		     "bottomRight": {
		      "!type": "+Phaser.Point"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "volume": {
		      "!type": "number"
		     },
		     "perimeter": {
		      "!type": "number"
		     },
		     "centerX": {
		      "!type": "number"
		     },
		     "centerY": {
		      "!type": "number"
		     },
		     "randomX": {
		      "!type": "number"
		     },
		     "randomY": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "topLeft": {
		      "!type": "+Phaser.Point"
		     },
		     "topRight": {
		      "!type": "+Phaser.Point"
		     },
		     "empty": {
		      "!type": "bool"
		     },
		     "aabb": {
		      "!type": "fn(points: [?], out: +Phaser.Rectangle) -> ?"
		     }
		    },
		    "inflate": {
		     "!type": "fn()"
		    },
		    "inflatePoint": {
		     "!type": "fn()"
		    },
		    "size": {
		     "!type": "fn()",
		     "output": {}
		    },
		    "clone": {
		     "!type": "fn()",
		     "output": {}
		    },
		    "contains": {
		     "!type": "fn()"
		    },
		    "containsRaw": {
		     "!type": "fn()"
		    },
		    "containsPoint": {
		     "!type": "fn()"
		    },
		    "containsRect": {
		     "!type": "fn()"
		    },
		    "equals": {
		     "!type": "fn()"
		    },
		    "sameDimensions": {
		     "!type": "fn()"
		    },
		    "intersection": {
		     "!type": "fn()",
		     "output": {}
		    },
		    "intersection~output": {
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {}
		    },
		    "intersects": {
		     "!type": "fn()"
		    },
		    "intersectsRaw": {
		     "!type": "fn()",
		     "tolerance": {}
		    },
		    "union": {
		     "!type": "fn()",
		     "output": {}
		    },
		    "aabb": {
		     "!type": "fn()",
		     "out": {},
		     "xMax": {},
		     "xMin": {},
		     "yMax": {},
		     "yMin": {}
		    }
		   },
		   "Rectangle#offset": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Rectangle#setTo": {
		    "prototype": {
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "Rectangle#scale": {
		    "y": {},
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Rectangle#centerOn": {
		    "prototype": {
		     "centerX": {},
		     "centerY": {}
		    }
		   },
		   "Rectangle#floor": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Rectangle#floorAll": {
		    "prototype": {
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "Rectangle#ceil": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Rectangle#ceilAll": {
		    "prototype": {
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "Rectangle#resize": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Rectangle#random": {
		    "out": {}
		   },
		   "Rectangle#random~out": {
		    "x": {},
		    "y": {}
		   },
		   "RoundedRectangle": {
		    "!type": "fn(x: number, y: number, width: number, height: number, radius: number)",
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "radius": {},
		    "prototype": {
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "radius": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "contains": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "RoundedRectangle#contains": {
		    "x1": {},
		    "y1": {}
		   },
		   "DeviceButton": {
		    "!type": "fn(parent: +Phaser.Pointer|+Phaser.SinglePad, buttonCode: number)",
		    "prototype": {
		     "parent": {
		      "!type": "+Phaser.Pointer|+Phaser.SinglePad"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "event": {},
		     "isDown": {
		      "!type": "bool"
		     },
		     "isUp": {
		      "!type": "bool"
		     },
		     "timeDown": {
		      "!type": "number"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "timeUp": {
		      "!type": "number"
		     },
		     "repeats": {
		      "!type": "number"
		     },
		     "altKey": {
		      "!type": "bool"
		     },
		     "shiftKey": {
		      "!type": "bool"
		     },
		     "ctrlKey": {
		      "!type": "bool"
		     },
		     "value": {
		      "!type": "number"
		     },
		     "buttonCode": {
		      "!type": "number"
		     },
		     "onDown": {
		      "!type": "+Phaser.Signal"
		     },
		     "onUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFloat": {
		      "!type": "+Phaser.Signal"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "padFloat": {
		      "!type": "fn()"
		     },
		     "justPressed": {
		      "!type": "fn()"
		     },
		     "justReleased": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "DeviceButton#start": {
		    "prototype": {
		     "isDown": {},
		     "isUp": {},
		     "timeDown": {},
		     "duration": {},
		     "repeats": {},
		     "event": {},
		     "value": {},
		     "altKey": {},
		     "shiftKey": {},
		     "ctrlKey": {}
		    }
		   },
		   "DeviceButton#stop": {
		    "prototype": {
		     "isDown": {},
		     "isUp": {},
		     "timeUp": {},
		     "event": {},
		     "value": {},
		     "altKey": {},
		     "shiftKey": {},
		     "ctrlKey": {}
		    }
		   },
		   "DeviceButton#padFloat": {
		    "prototype": {
		     "value": {}
		    }
		   },
		   "DeviceButton#justPressed": {
		    "duration": {}
		   },
		   "DeviceButton#justReleased": {
		    "duration": {}
		   },
		   "DeviceButton#reset": {
		    "prototype": {
		     "isDown": {},
		     "isUp": {},
		     "timeDown": {},
		     "duration": {},
		     "repeats": {},
		     "altKey": {},
		     "shiftKey": {},
		     "ctrlKey": {}
		    }
		   },
		   "DeviceButton#destroy": {
		    "prototype": {
		     "parent": {},
		     "game": {}
		    }
		   },
		   "Gamepad": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "_gamepadIndexMap": {},
		     "_rawPads": {
		      "!type": "[?]"
		     },
		     "_active": {
		      "!type": "bool"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "_gamepadSupportAvailable": {
		      "!type": "bool"
		     },
		     "_prevRawGamepadTypes": {
		      "!type": "[?]"
		     },
		     "_prevTimestamps": {
		      "!type": "[?]"
		     },
		     "callbackContext": {},
		     "onConnectCallback": {
		      "!type": "+function"
		     },
		     "onDisconnectCallback": {
		      "!type": "+function"
		     },
		     "onDownCallback": {
		      "!type": "+function"
		     },
		     "onUpCallback": {
		      "!type": "+function"
		     },
		     "onAxisCallback": {
		      "!type": "+function"
		     },
		     "onFloatCallback": {
		      "!type": "+function"
		     },
		     "_ongamepadconnected": {
		      "!type": "+function"
		     },
		     "_gamepaddisconnected": {
		      "!type": "+function"
		     },
		     "_gamepads": {
		      "!type": "[?]"
		     },
		     "addCallbacks": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "onGamepadConnected": {
		      "!type": "fn()"
		     },
		     "onGamepadDisconnected": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "_pollGamepads": {
		      "!type": "fn()"
		     },
		     "setDeadZones": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "justPressed": {
		      "!type": "fn(buttonCode: number, duration: number) -> ?"
		     },
		     "justReleased": {
		      "!type": "fn()"
		     },
		     "isDown": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "supported": {
		      "!type": "bool"
		     },
		     "padsConnected": {
		      "!type": "number"
		     },
		     "pad1": {
		      "!type": "+Phaser.SinglePad"
		     },
		     "pad2": {
		      "!type": "+Phaser.SinglePad"
		     },
		     "pad3": {
		      "!type": "+Phaser.SinglePad"
		     },
		     "pad4": {
		      "!type": "+Phaser.SinglePad"
		     }
		    },
		    "BUTTON_0": {},
		    "BUTTON_1": {},
		    "BUTTON_2": {},
		    "BUTTON_3": {},
		    "BUTTON_4": {},
		    "BUTTON_5": {},
		    "BUTTON_6": {},
		    "BUTTON_7": {},
		    "BUTTON_8": {},
		    "BUTTON_9": {},
		    "BUTTON_10": {},
		    "BUTTON_11": {},
		    "BUTTON_12": {},
		    "BUTTON_13": {},
		    "BUTTON_14": {},
		    "BUTTON_15": {},
		    "AXIS_0": {},
		    "AXIS_1": {},
		    "AXIS_2": {},
		    "AXIS_3": {},
		    "AXIS_4": {},
		    "AXIS_5": {},
		    "AXIS_6": {},
		    "AXIS_7": {},
		    "AXIS_8": {},
		    "AXIS_9": {},
		    "XBOX360_A": {},
		    "XBOX360_B": {},
		    "XBOX360_X": {},
		    "XBOX360_Y": {},
		    "XBOX360_LEFT_BUMPER": {},
		    "XBOX360_RIGHT_BUMPER": {},
		    "XBOX360_LEFT_TRIGGER": {},
		    "XBOX360_RIGHT_TRIGGER": {},
		    "XBOX360_BACK": {},
		    "XBOX360_START": {},
		    "XBOX360_STICK_LEFT_BUTTON": {},
		    "XBOX360_STICK_RIGHT_BUTTON": {},
		    "XBOX360_DPAD_LEFT": {},
		    "XBOX360_DPAD_RIGHT": {},
		    "XBOX360_DPAD_UP": {},
		    "XBOX360_DPAD_DOWN": {},
		    "XBOX360_STICK_LEFT_X": {},
		    "XBOX360_STICK_LEFT_Y": {},
		    "XBOX360_STICK_RIGHT_X": {},
		    "XBOX360_STICK_RIGHT_Y": {},
		    "PS3XC_X": {},
		    "PS3XC_CIRCLE": {},
		    "PS3XC_SQUARE": {},
		    "PS3XC_TRIANGLE": {},
		    "PS3XC_L1": {},
		    "PS3XC_R1": {},
		    "PS3XC_L2": {},
		    "PS3XC_R2": {},
		    "PS3XC_SELECT": {},
		    "PS3XC_START": {},
		    "PS3XC_STICK_LEFT_BUTTON": {},
		    "PS3XC_STICK_RIGHT_BUTTON": {},
		    "PS3XC_DPAD_UP": {},
		    "PS3XC_DPAD_DOWN": {},
		    "PS3XC_DPAD_LEFT": {},
		    "PS3XC_DPAD_RIGHT": {},
		    "PS3XC_STICK_LEFT_X": {},
		    "PS3XC_STICK_LEFT_Y": {},
		    "PS3XC_STICK_RIGHT_X": {},
		    "PS3XC_STICK_RIGHT_Y": {}
		   },
		   "Gamepad#addCallbacks": {
		    "prototype": {
		     "onConnectCallback": {},
		     "onDisconnectCallback": {},
		     "onDownCallback": {},
		     "onUpCallback": {},
		     "onAxisCallback": {},
		     "onFloatCallback": {},
		     "callbackContext": {}
		    }
		   },
		   "Gamepad#start": {
		    "prototype": {
		     "_active": {},
		     "_onGamepadConnected": {
		      "!type": "fn()"
		     },
		     "_onGamepadDisconnected": {
		      "!type": "fn()"
		     }
		    },
		    "_this": {}
		   },
		   "Gamepad#onGamepadConnected": {
		    "newPad": {}
		   },
		   "Gamepad#onGamepadDisconnected": {
		    "removedPad": {},
		    "i": {}
		   },
		   "Gamepad#_pollGamepads": {
		    "rawGamepads": {},
		    "prototype": {
		     "_rawPads": {},
		     "_prevRawGamepadTypes[undefined]": {}
		    },
		    "gamepadsChanged": {},
		    "i": {},
		    "validConnections": {},
		    "singlePad": {},
		    "j": {},
		    "k": {},
		    "l": {},
		    "m": {},
		    "rawPad": {}
		   },
		   "Gamepad#_pollGamepads~validConnections": {
		    "rawIndices": {},
		    "padIndices": {},
		    "rawIndices[undefined]": {},
		    "padIndices[undefined]": {}
		   },
		   "Gamepad#setDeadZones": {
		    "i": {}
		   },
		   "Gamepad#setDeadZones#_gamepads[undefined]": {
		    "deadZone": {}
		   },
		   "Gamepad#stop": {
		    "prototype": {
		     "_active": {}
		    }
		   },
		   "Gamepad#reset": {
		    "i": {}
		   },
		   "Gamepad#justPressed": {
		    "i": {}
		   },
		   "Gamepad#justReleased": {
		    "i": {}
		   },
		   "Gamepad#isDown": {
		    "i": {}
		   },
		   "Gamepad#destroy": {
		    "i": {}
		   },
		   "Input": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "hitCanvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "hitContext": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "moveCallbacks": {
		      "!type": "+array"
		     },
		     "pollRate": {
		      "!type": "number"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "multiInputOverride": {
		      "!type": "number"
		     },
		     "position": {
		      "!type": "+Phaser.Point"
		     },
		     "speed": {
		      "!type": "+Phaser.Point"
		     },
		     "circle": {
		      "!type": "+Phaser.Circle"
		     },
		     "scale": {
		      "!type": "+Phaser.Point"
		     },
		     "maxPointers": {
		      "!type": "number"
		     },
		     "tapRate": {
		      "!type": "number"
		     },
		     "doubleTapRate": {
		      "!type": "number"
		     },
		     "holdRate": {
		      "!type": "number"
		     },
		     "justPressedRate": {
		      "!type": "number"
		     },
		     "justReleasedRate": {
		      "!type": "number"
		     },
		     "recordPointerHistory": {
		      "!type": "bool"
		     },
		     "recordRate": {
		      "!type": "number"
		     },
		     "recordLimit": {
		      "!type": "number"
		     },
		     "pointer1": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer2": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer3": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer4": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer5": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer6": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer7": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer8": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer9": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer10": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointers": {
		      "!type": "[?]"
		     },
		     "activePointer": {
		      "!type": "+Phaser.Pointer"
		     },
		     "mousePointer": {
		      "!type": "+Pointer"
		     },
		     "mouse": {
		      "!type": "+Phaser.Mouse"
		     },
		     "keyboard": {
		      "!type": "+Phaser.Keyboard"
		     },
		     "touch": {
		      "!type": "+Phaser.Touch"
		     },
		     "mspointer": {
		      "!type": "+Phaser.MSPointer"
		     },
		     "gamepad": {
		      "!type": "+Phaser.Gamepad"
		     },
		     "resetLocked": {
		      "!type": "bool"
		     },
		     "onDown": {
		      "!type": "+Phaser.Signal"
		     },
		     "onUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "onTap": {
		      "!type": "+Phaser.Signal"
		     },
		     "onHold": {
		      "!type": "+Phaser.Signal"
		     },
		     "minPriorityID": {
		      "!type": "number"
		     },
		     "interactiveItems": {
		      "!type": "+Phaser.ArraySet"
		     },
		     "_localPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "_pollCounter": {
		      "!type": "number"
		     },
		     "_oldPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "_x": {
		      "!type": "number"
		     },
		     "_y": {
		      "!type": "number"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "addMoveCallback": {
		      "!type": "fn()"
		     },
		     "deleteMoveCallback": {
		      "!type": "fn()"
		     },
		     "addPointer": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "resetSpeed": {
		      "!type": "fn()"
		     },
		     "startPointer": {
		      "!type": "fn()"
		     },
		     "updatePointer": {
		      "!type": "fn()"
		     },
		     "stopPointer": {
		      "!type": "fn()"
		     },
		     "countActivePointers": {
		      "!type": "fn()"
		     },
		     "getPointer": {
		      "!type": "fn()"
		     },
		     "getPointerFromIdentifier": {
		      "!type": "fn()"
		     },
		     "getPointerFromId": {
		      "!type": "fn()"
		     },
		     "getLocalPosition": {
		      "!type": "fn()"
		     },
		     "hitTest": {
		      "!type": "fn()"
		     },
		     "onClickTrampoline": {
		      "!type": "fn()"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "pollLocked": {
		      "!type": "bool"
		     },
		     "totalInactivePointers": {
		      "!type": "number"
		     },
		     "totalActivePointers": {
		      "!type": "+integers"
		     },
		     "worldX": {
		      "!type": "number"
		     },
		     "worldY": {
		      "!type": "number"
		     }
		    },
		    "MOUSE_OVERRIDES_TOUCH": {
		     "!type": "number"
		    },
		    "TOUCH_OVERRIDES_MOUSE": {
		     "!type": "number"
		    },
		    "MOUSE_TOUCH_COMBINE": {
		     "!type": "number"
		    },
		    "MAX_POINTERS": {
		     "!type": "number"
		    }
		   },
		   "Input#boot": {
		    "prototype": {
		     "mousePointer": {},
		     "mouse": {},
		     "touch": {},
		     "mspointer": {},
		     "keyboard": {},
		     "gamepad": {},
		     "onDown": {},
		     "onUp": {},
		     "onTap": {},
		     "onHold": {},
		     "scale": {},
		     "speed": {},
		     "position": {},
		     "_oldPosition": {},
		     "circle": {},
		     "activePointer": {},
		     "hitCanvas": {},
		     "hitContext": {},
		     "_onClickTrampoline": {
		      "!type": "fn()"
		     }
		    },
		    "_this": {}
		   },
		   "Input#boot#mousePointer": {
		    "active": {}
		   },
		   "Input#destroy": {
		    "prototype": {
		     "moveCallbacks": {}
		    }
		   },
		   "Input#deleteMoveCallback": {
		    "i": {}
		   },
		   "Input#addPointer": {
		    "id": {},
		    "pointer": {}
		   },
		   "Input#update#speed": {
		    "x": {},
		    "y": {}
		   },
		   "Input#update": {
		    "i": {},
		    "prototype": {
		     "_pollCounter": {}
		    }
		   },
		   "Input#reset": {
		    "hard": {},
		    "i": {},
		    "prototype": {
		     "onDown": {},
		     "onUp": {},
		     "onTap": {},
		     "onHold": {},
		     "moveCallbacks": {},
		     "_pollCounter": {}
		    }
		   },
		   "Input#reset#game": {
		    "canvas": {
		     "style": {
		      "cursor": {}
		     }
		    }
		   },
		   "Input#startPointer": {
		    "i": {},
		    "pointer": {}
		   },
		   "Input#updatePointer": {
		    "i": {},
		    "pointer": {}
		   },
		   "Input#stopPointer": {
		    "i": {},
		    "pointer": {}
		   },
		   "Input#countActivePointers": {
		    "limit": {},
		    "count": {},
		    "i": {},
		    "pointer": {}
		   },
		   "Input#getPointer": {
		    "isActive": {},
		    "i": {},
		    "pointer": {}
		   },
		   "Input#getPointerFromIdentifier": {
		    "i": {},
		    "pointer": {}
		   },
		   "Input#getPointerFromId": {
		    "i": {},
		    "pointer": {}
		   },
		   "Input#getLocalPosition": {
		    "output": {},
		    "wt": {},
		    "id": {}
		   },
		   "Input#hitTest": {
		    "width": {},
		    "height": {},
		    "x1": {},
		    "y1": {},
		    "i": {},
		    "data": {},
		    "len": {}
		   },
		   "InputHandler": {
		    "!type": "fn(sprite: +Phaser.Sprite)",
		    "prototype": {
		     "sprite": {
		      "!type": "+Phaser.Sprite"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "checked": {
		      "!type": "bool"
		     },
		     "priorityID": {
		      "!type": "number"
		     },
		     "useHandCursor": {
		      "!type": "bool"
		     },
		     "_setHandCursor": {
		      "!type": "bool"
		     },
		     "isDragged": {
		      "!type": "bool"
		     },
		     "allowHorizontalDrag": {
		      "!type": "bool"
		     },
		     "allowVerticalDrag": {
		      "!type": "bool"
		     },
		     "bringToTop": {
		      "!type": "bool"
		     },
		     "snapOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "snapOnDrag": {
		      "!type": "bool"
		     },
		     "snapOnRelease": {
		      "!type": "bool"
		     },
		     "snapX": {
		      "!type": "number"
		     },
		     "snapY": {
		      "!type": "number"
		     },
		     "snapOffsetX": {
		      "!type": "number"
		     },
		     "snapOffsetY": {
		      "!type": "number"
		     },
		     "pixelPerfectOver": {
		      "!type": "bool"
		     },
		     "pixelPerfectClick": {
		      "!type": "bool"
		     },
		     "pixelPerfectAlpha": {
		      "!type": "number"
		     },
		     "draggable": {
		      "!type": "bool"
		     },
		     "boundsRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "boundsSprite": {
		      "!type": "+Phaser.Sprite"
		     },
		     "consumePointerEvent": {
		      "!type": "bool"
		     },
		     "scaleLayer": {
		      "!type": "bool"
		     },
		     "dragOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "dragFromCenter": {
		      "!type": "bool"
		     },
		     "dragStartPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "snapPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "_dragPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "_dragPhase": {
		      "!type": "bool"
		     },
		     "_wasEnabled": {
		      "!type": "bool"
		     },
		     "_tempPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "_pointerData": {
		      "!type": "+array"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "addedToGroup": {
		      "!type": "fn()"
		     },
		     "removedFromGroup": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "validForInput": {
		      "!type": "fn()"
		     },
		     "isPixelPerfect": {
		      "!type": "fn()"
		     },
		     "pointerX": {
		      "!type": "fn()"
		     },
		     "pointerY": {
		      "!type": "fn()"
		     },
		     "pointerDown": {
		      "!type": "fn()"
		     },
		     "pointerUp": {
		      "!type": "fn()"
		     },
		     "pointerTimeDown": {
		      "!type": "fn()"
		     },
		     "pointerTimeUp": {
		      "!type": "fn()"
		     },
		     "pointerOver": {
		      "!type": "fn()"
		     },
		     "pointerOut": {
		      "!type": "fn()"
		     },
		     "pointerTimeOver": {
		      "!type": "fn()"
		     },
		     "pointerTimeOut": {
		      "!type": "fn()"
		     },
		     "pointerDragged": {
		      "!type": "fn()"
		     },
		     "checkPointerDown": {
		      "!type": "fn()"
		     },
		     "checkPointerOver": {
		      "!type": "fn()"
		     },
		     "checkPixel": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "_pointerOverHandler": {
		      "!type": "fn()"
		     },
		     "_pointerOutHandler": {
		      "!type": "fn()"
		     },
		     "_touchedHandler": {
		      "!type": "fn()"
		     },
		     "_releasedHandler": {
		      "!type": "fn()"
		     },
		     "updateDrag": {
		      "!type": "fn()"
		     },
		     "justOver": {
		      "!type": "fn()"
		     },
		     "justOut": {
		      "!type": "fn()"
		     },
		     "justPressed": {
		      "!type": "fn()"
		     },
		     "justReleased": {
		      "!type": "fn()"
		     },
		     "overDuration": {
		      "!type": "fn()"
		     },
		     "downDuration": {
		      "!type": "fn()"
		     },
		     "enableDrag": {
		      "!type": "fn()"
		     },
		     "disableDrag": {
		      "!type": "fn()"
		     },
		     "startDrag": {
		      "!type": "fn()"
		     },
		     "globalToLocalX": {
		      "!type": "fn()"
		     },
		     "globalToLocalY": {
		      "!type": "fn()"
		     },
		     "stopDrag": {
		      "!type": "fn()"
		     },
		     "setDragLock": {
		      "!type": "fn()"
		     },
		     "enableSnap": {
		      "!type": "fn()"
		     },
		     "disableSnap": {
		      "!type": "fn()"
		     },
		     "checkBoundsRect": {
		      "!type": "fn()"
		     },
		     "checkBoundsSprite": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "InputHandler#start": {
		    "priority": {},
		    "useHandCursor": {},
		    "prototype": {
		     "useHandCursor": {},
		     "priorityID": {},
		     "_pointerData[undefined]": {},
		     "snapOffset": {},
		     "enabled": {},
		     "_wasEnabled": {},
		     "flagged": {}
		    },
		    "i": {}
		   },
		   "InputHandler#start#_pointerData[undefined]": {
		    "id": {},
		    "x": {},
		    "y": {},
		    "isDown": {},
		    "isUp": {},
		    "isOver": {},
		    "isOut": {},
		    "timeOver": {},
		    "timeOut": {},
		    "timeDown": {},
		    "timeUp": {},
		    "downDuration": {},
		    "isDragged": {}
		   },
		   "InputHandler#removedFromGroup": {
		    "prototype": {
		     "_wasEnabled": {}
		    }
		   },
		   "InputHandler#reset": {
		    "prototype": {
		     "enabled": {},
		     "flagged": {},
		     "_pointerData[undefined]": {}
		    },
		    "i": {}
		   },
		   "InputHandler#reset#_pointerData[undefined]": {
		    "id": {},
		    "x": {},
		    "y": {},
		    "isDown": {},
		    "isUp": {},
		    "isOver": {},
		    "isOut": {},
		    "timeOver": {},
		    "timeOut": {},
		    "timeDown": {},
		    "timeUp": {},
		    "downDuration": {},
		    "isDragged": {}
		   },
		   "InputHandler#stop": {
		    "prototype": {
		     "enabled": {}
		    }
		   },
		   "InputHandler#destroy#game": {
		    "canvas": {
		     "style": {
		      "cursor": {}
		     }
		    }
		   },
		   "InputHandler#destroy": {
		    "prototype": {
		     "_setHandCursor": {},
		     "enabled": {},
		     "boundsRect": {},
		     "boundsSprite": {},
		     "sprite": {}
		    }
		   },
		   "InputHandler#destroy#_pointerData": {
		    "length": {}
		   },
		   "InputHandler#validForInput": {
		    "includePixelPerfect": {}
		   },
		   "InputHandler#pointerX": {
		    "pointer": {}
		   },
		   "InputHandler#pointerY": {
		    "pointer": {}
		   },
		   "InputHandler#pointerDown": {
		    "pointer": {}
		   },
		   "InputHandler#pointerUp": {
		    "pointer": {}
		   },
		   "InputHandler#pointerTimeDown": {
		    "pointer": {}
		   },
		   "InputHandler#pointerTimeUp": {
		    "pointer": {}
		   },
		   "InputHandler#pointerOver": {
		    "i": {}
		   },
		   "InputHandler#pointerOut": {
		    "i": {}
		   },
		   "InputHandler#pointerTimeOver": {
		    "pointer": {}
		   },
		   "InputHandler#pointerTimeOut": {
		    "pointer": {}
		   },
		   "InputHandler#pointerDragged": {
		    "pointer": {}
		   },
		   "InputHandler#checkPointerDown": {
		    "fastTest": {}
		   },
		   "InputHandler#checkPointerOver": {
		    "fastTest": {}
		   },
		   "InputHandler#checkPixel": {
		    "x": {},
		    "y": {},
		    "prototype": {
		     "_dx": {},
		     "_dy": {}
		    },
		    "rgb": {}
		   },
		   "InputHandler#update#_pointerData[undefined]": {
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#_pointerOverHandler": {
		    "data": {},
		    "prototype": {
		     "_setHandCursor": {}
		    }
		   },
		   "InputHandler#_pointerOverHandler~data": {
		    "isOver": {},
		    "isOut": {},
		    "timeOver": {},
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#_pointerOverHandler#game": {
		    "canvas": {
		     "style": {
		      "cursor": {}
		     }
		    }
		   },
		   "InputHandler#_pointerOutHandler": {
		    "data": {},
		    "prototype": {
		     "_setHandCursor": {}
		    }
		   },
		   "InputHandler#_pointerOutHandler~data": {
		    "isOver": {},
		    "isOut": {},
		    "timeOut": {}
		   },
		   "InputHandler#_pointerOutHandler#game": {
		    "canvas": {
		     "style": {
		      "cursor": {}
		     }
		    }
		   },
		   "InputHandler#_touchedHandler": {
		    "data": {}
		   },
		   "InputHandler#_touchedHandler~data": {
		    "isDown": {},
		    "isUp": {},
		    "timeDown": {}
		   },
		   "InputHandler#_releasedHandler": {
		    "data": {},
		    "isOver": {},
		    "prototype": {
		     "_setHandCursor": {}
		    }
		   },
		   "InputHandler#_releasedHandler~data": {
		    "isDown": {},
		    "isUp": {},
		    "timeUp": {},
		    "downDuration": {},
		    "isOver": {}
		   },
		   "InputHandler#_releasedHandler#game": {
		    "canvas": {
		     "style": {
		      "cursor": {}
		     }
		    }
		   },
		   "InputHandler#updateDrag": {
		    "px": {},
		    "py": {}
		   },
		   "InputHandler#updateDrag#sprite": {
		    "cameraOffset": {
		     "x": {},
		     "y": {}
		    },
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#justOver": {
		    "pointer": {},
		    "delay": {}
		   },
		   "InputHandler#justOut": {
		    "pointer": {},
		    "delay": {}
		   },
		   "InputHandler#justPressed": {
		    "pointer": {},
		    "delay": {}
		   },
		   "InputHandler#justReleased": {
		    "pointer": {},
		    "delay": {}
		   },
		   "InputHandler#overDuration": {
		    "pointer": {}
		   },
		   "InputHandler#downDuration": {
		    "pointer": {}
		   },
		   "InputHandler#enableDrag": {
		    "lockCenter": {},
		    "bringToTop": {},
		    "pixelPerfect": {},
		    "alphaThreshold": {},
		    "boundsRect": {},
		    "boundsSprite": {},
		    "prototype": {
		     "_dragPoint": {},
		     "draggable": {},
		     "bringToTop": {},
		     "dragOffset": {},
		     "dragFromCenter": {},
		     "pixelPerfectClick": {},
		     "pixelPerfectAlpha": {},
		     "boundsRect": {},
		     "boundsSprite": {}
		    }
		   },
		   "InputHandler#disableDrag": {
		    "i": {},
		    "prototype": {
		     "draggable": {},
		     "isDragged": {},
		     "_draggedPointerID": {}
		    }
		   },
		   "InputHandler#disableDrag#_pointerData[undefined]": {
		    "isDragged": {}
		   },
		   "InputHandler#startDrag": {
		    "x": {},
		    "y": {},
		    "prototype": {
		     "isDragged": {},
		     "_draggedPointerID": {},
		     "_dragPhase": {}
		    },
		    "bounds": {}
		   },
		   "InputHandler#startDrag#_pointerData[undefined]": {
		    "isDragged": {}
		   },
		   "InputHandler#startDrag#sprite": {
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#globalToLocalX": {
		    "x": {}
		   },
		   "InputHandler#globalToLocalY": {
		    "y": {}
		   },
		   "InputHandler#stopDrag": {
		    "prototype": {
		     "isDragged": {},
		     "_draggedPointerID": {},
		     "_dragPhase": {}
		    }
		   },
		   "InputHandler#stopDrag#_pointerData[undefined]": {
		    "isDragged": {}
		   },
		   "InputHandler#stopDrag#sprite": {
		    "cameraOffset": {
		     "x": {},
		     "y": {}
		    },
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#setDragLock": {
		    "allowHorizontal": {},
		    "allowVertical": {},
		    "prototype": {
		     "allowHorizontalDrag": {},
		     "allowVerticalDrag": {}
		    }
		   },
		   "InputHandler#enableSnap": {
		    "onDrag": {},
		    "onRelease": {},
		    "snapOffsetX": {},
		    "snapOffsetY": {},
		    "prototype": {
		     "snapX": {},
		     "snapY": {},
		     "snapOffsetX": {},
		     "snapOffsetY": {},
		     "snapOnDrag": {},
		     "snapOnRelease": {}
		    }
		   },
		   "InputHandler#disableSnap": {
		    "prototype": {
		     "snapOnDrag": {},
		     "snapOnRelease": {}
		    }
		   },
		   "InputHandler#checkBoundsRect#sprite": {
		    "cameraOffset": {
		     "x": {},
		     "y": {}
		    },
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#checkBoundsSprite#sprite": {
		    "cameraOffset": {
		     "x": {},
		     "y": {}
		    },
		    "x": {},
		    "y": {}
		   },
		   "Key": {
		    "!type": "fn(game: +Phaser.Game, keycode: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "_enabled": {
		      "!type": "bool"
		     },
		     "event": {},
		     "isDown": {
		      "!type": "bool"
		     },
		     "isUp": {
		      "!type": "bool"
		     },
		     "altKey": {
		      "!type": "bool"
		     },
		     "ctrlKey": {
		      "!type": "bool"
		     },
		     "shiftKey": {
		      "!type": "bool"
		     },
		     "timeDown": {
		      "!type": "number"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "timeUp": {
		      "!type": "number"
		     },
		     "repeats": {
		      "!type": "number"
		     },
		     "keyCode": {
		      "!type": "number"
		     },
		     "onDown": {
		      "!type": "+Phaser.Signal"
		     },
		     "onHoldCallback": {
		      "!type": "+function"
		     },
		     "onHoldContext": {},
		     "onUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "_justDown": {
		      "!type": "bool"
		     },
		     "_justUp": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "processKeyDown": {
		      "!type": "fn()"
		     },
		     "processKeyUp": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "downDuration": {
		      "!type": "fn()"
		     },
		     "upDuration": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Key#update": {
		    "prototype": {
		     "duration": {}
		    }
		   },
		   "Key#processKeyDown": {
		    "prototype": {
		     "event": {},
		     "altKey": {},
		     "ctrlKey": {},
		     "shiftKey": {},
		     "isDown": {},
		     "isUp": {},
		     "timeDown": {},
		     "duration": {},
		     "repeats": {},
		     "_justDown": {}
		    }
		   },
		   "Key#processKeyUp": {
		    "prototype": {
		     "event": {},
		     "isDown": {},
		     "isUp": {},
		     "timeUp": {},
		     "duration": {},
		     "_justUp": {}
		    }
		   },
		   "Key#reset": {
		    "hard": {},
		    "prototype": {
		     "isDown": {},
		     "isUp": {},
		     "timeUp": {},
		     "duration": {},
		     "_enabled": {},
		     "_justDown": {},
		     "_justUp": {},
		     "onHoldCallback": {},
		     "onHoldContext": {}
		    }
		   },
		   "Key#downDuration": {
		    "duration": {}
		   },
		   "Key#upDuration": {
		    "duration": {}
		   },
		   "Keyboard": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "event": {},
		     "pressEvent": {},
		     "callbackContext": {},
		     "onDownCallback": {
		      "!type": "+function"
		     },
		     "onPressCallback": {
		      "!type": "+function"
		     },
		     "onUpCallback": {
		      "!type": "+function"
		     },
		     "_keys": {
		      "!type": "+array.<Phaser.Key>"
		     },
		     "_capture": {
		      "!type": "+array"
		     },
		     "_onKeyDown": {
		      "!type": "+function"
		     },
		     "_onKeyPress": {
		      "!type": "+function"
		     },
		     "_onKeyUp": {
		      "!type": "+function"
		     },
		     "_i": {
		      "!type": "number"
		     },
		     "_k": {
		      "!type": "number"
		     },
		     "addCallbacks": {
		      "!type": "fn()"
		     },
		     "addKey": {
		      "!type": "fn()"
		     },
		     "addKeys": {
		      "!type": "fn()"
		     },
		     "removeKey": {
		      "!type": "fn()"
		     },
		     "createCursorKeys": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "addKeyCapture": {
		      "!type": "fn()"
		     },
		     "removeKeyCapture": {
		      "!type": "fn()"
		     },
		     "clearCaptures": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "processKeyDown": {
		      "!type": "fn()"
		     },
		     "processKeyPress": {
		      "!type": "fn()"
		     },
		     "processKeyUp": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "downDuration": {
		      "!type": "fn()"
		     },
		     "upDuration": {
		      "!type": "fn()"
		     },
		     "isDown": {
		      "!type": "fn()"
		     },
		     "lastChar": {
		      "!type": "string"
		     },
		     "lastKey": {
		      "!type": "+Phaser.Key"
		     }
		    },
		    "A": {},
		    "B": {},
		    "C": {},
		    "D": {},
		    "E": {},
		    "F": {},
		    "G": {},
		    "H": {},
		    "I": {},
		    "J": {},
		    "K": {},
		    "L": {},
		    "M": {},
		    "N": {},
		    "O": {},
		    "P": {},
		    "Q": {},
		    "R": {},
		    "S": {},
		    "T": {},
		    "U": {},
		    "V": {},
		    "W": {},
		    "X": {},
		    "Y": {},
		    "Z": {},
		    "ZERO": {},
		    "ONE": {},
		    "TWO": {},
		    "THREE": {},
		    "FOUR": {},
		    "FIVE": {},
		    "SIX": {},
		    "SEVEN": {},
		    "EIGHT": {},
		    "NINE": {},
		    "NUMPAD_0": {},
		    "NUMPAD_1": {},
		    "NUMPAD_2": {},
		    "NUMPAD_3": {},
		    "NUMPAD_4": {},
		    "NUMPAD_5": {},
		    "NUMPAD_6": {},
		    "NUMPAD_7": {},
		    "NUMPAD_8": {},
		    "NUMPAD_9": {},
		    "NUMPAD_MULTIPLY": {},
		    "NUMPAD_ADD": {},
		    "NUMPAD_ENTER": {},
		    "NUMPAD_SUBTRACT": {},
		    "NUMPAD_DECIMAL": {},
		    "NUMPAD_DIVIDE": {},
		    "F1": {},
		    "F2": {},
		    "F3": {},
		    "F4": {},
		    "F5": {},
		    "F6": {},
		    "F7": {},
		    "F8": {},
		    "F9": {},
		    "F10": {},
		    "F11": {},
		    "F12": {},
		    "F13": {},
		    "F14": {},
		    "F15": {},
		    "COLON": {},
		    "EQUALS": {},
		    "COMMA": {},
		    "UNDERSCORE": {},
		    "PERIOD": {},
		    "QUESTION_MARK": {},
		    "TILDE": {},
		    "OPEN_BRACKET": {},
		    "BACKWARD_SLASH": {},
		    "CLOSED_BRACKET": {},
		    "QUOTES": {},
		    "BACKSPACE": {},
		    "TAB": {},
		    "CLEAR": {},
		    "ENTER": {},
		    "SHIFT": {},
		    "CONTROL": {},
		    "ALT": {},
		    "CAPS_LOCK": {},
		    "ESC": {},
		    "SPACEBAR": {},
		    "PAGE_UP": {},
		    "PAGE_DOWN": {},
		    "END": {},
		    "HOME": {},
		    "LEFT": {},
		    "UP": {},
		    "RIGHT": {},
		    "DOWN": {},
		    "PLUS": {},
		    "MINUS": {},
		    "INSERT": {},
		    "DELETE": {},
		    "HELP": {},
		    "NUM_LOCK": {}
		   },
		   "Keyboard#addCallbacks": {
		    "prototype": {
		     "callbackContext": {},
		     "onDownCallback": {},
		     "onUpCallback": {},
		     "onPressCallback": {}
		    }
		   },
		   "Keyboard#addKey": {
		    "prototype": {
		     "_keys[undefined]": {}
		    }
		   },
		   "Keyboard#addKeys": {
		    "output": {},
		    "key": {}
		   },
		   "Keyboard#addKeys~output": {
		    "undefined]": {}
		   },
		   "Keyboard#removeKey": {
		    "prototype": {
		     "_keys[undefined]": {}
		    }
		   },
		   "Keyboard#start": {
		    "_this": {},
		    "prototype": {
		     "_onKeyDown": {
		      "!type": "fn()"
		     },
		     "_onKeyUp": {
		      "!type": "fn()"
		     },
		     "_onKeyPress": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Keyboard#stop": {
		    "prototype": {
		     "_onKeyDown": {},
		     "_onKeyUp": {},
		     "_onKeyPress": {}
		    }
		   },
		   "Keyboard#destroy#_keys": {
		    "length": {}
		   },
		   "Keyboard#destroy": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "Keyboard#addKeyCapture": {
		    "key": {},
		    "prototype": {
		     "_capture[undefined]": {}
		    }
		   },
		   "Keyboard#clearCaptures": {
		    "prototype": {
		     "_capture": {}
		    }
		   },
		   "Keyboard#update": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "Keyboard#processKeyDown": {
		    "prototype": {
		     "event": {},
		     "_keys[undefined]": {},
		     "_k": {}
		    }
		   },
		   "Keyboard#processKeyPress": {
		    "prototype": {
		     "pressEvent": {}
		    }
		   },
		   "Keyboard#processKeyUp": {
		    "prototype": {
		     "event": {},
		     "_keys[undefined]": {}
		    }
		   },
		   "Keyboard#reset": {
		    "hard": {},
		    "prototype": {
		     "event": {}
		    },
		    "i": {}
		   },
		   "Mouse": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "input": {
		      "!type": "+Phaser.Input"
		     },
		     "callbackContext": {},
		     "mouseDownCallback": {
		      "!type": "+function"
		     },
		     "mouseUpCallback": {
		      "!type": "+function"
		     },
		     "mouseOutCallback": {
		      "!type": "+function"
		     },
		     "mouseOverCallback": {
		      "!type": "+function"
		     },
		     "mouseWheelCallback": {
		      "!type": "+function"
		     },
		     "capture": {
		      "!type": "bool"
		     },
		     "button": {
		      "!type": "number"
		     },
		     "wheelDelta": {
		      "!type": "number"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "locked": {
		      "!type": "bool"
		     },
		     "stopOnGameOut": {
		      "!type": "bool"
		     },
		     "pointerLock": {
		      "!type": "+Phaser.Signal"
		     },
		     "event": {
		      "!type": "+MouseEvent|+null"
		     },
		     "_onMouseDown": {
		      "!type": "+function"
		     },
		     "_onMouseMove": {
		      "!type": "+function"
		     },
		     "_onMouseUp": {
		      "!type": "+function"
		     },
		     "_onMouseOut": {
		      "!type": "+function"
		     },
		     "_onMouseOver": {
		      "!type": "+function"
		     },
		     "_onMouseWheel": {
		      "!type": "+function"
		     },
		     "_wheelEvent": {
		      "!type": "+Phaser.Mouse~WheelEventProxy"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "onMouseDown": {
		      "!type": "fn()"
		     },
		     "onMouseMove": {
		      "!type": "fn()"
		     },
		     "onMouseUp": {
		      "!type": "fn()"
		     },
		     "onMouseUpGlobal": {
		      "!type": "fn()"
		     },
		     "onMouseOut": {
		      "!type": "fn()"
		     },
		     "onMouseOver": {
		      "!type": "fn()"
		     },
		     "onMouseWheel": {
		      "!type": "fn()"
		     },
		     "requestPointerLock": {
		      "!type": "fn()"
		     },
		     "pointerLockChange": {
		      "!type": "fn()"
		     },
		     "releasePointerLock": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "WheelEventProxy": {
		      "!type": "fn(scaleFactor: number, deltaMode: number)"
		     }
		    },
		    "NO_BUTTON": {
		     "!type": "number"
		    },
		    "LEFT_BUTTON": {
		     "!type": "number"
		    },
		    "MIDDLE_BUTTON": {
		     "!type": "number"
		    },
		    "RIGHT_BUTTON": {
		     "!type": "number"
		    },
		    "BACK_BUTTON": {
		     "!type": "number"
		    },
		    "FORWARD_BUTTON": {
		     "!type": "number"
		    },
		    "WHEEL_UP": {
		     "!type": "number"
		    },
		    "WHEEL_DOWN": {
		     "!type": "number"
		    }
		   },
		   "Mouse#start": {
		    "_this": {},
		    "prototype": {
		     "_onMouseDown": {
		      "!type": "fn()"
		     },
		     "_onMouseMove": {
		      "!type": "fn()"
		     },
		     "_onMouseUp": {
		      "!type": "fn()"
		     },
		     "_onMouseUpGlobal": {
		      "!type": "fn()"
		     },
		     "_onMouseOut": {
		      "!type": "fn()"
		     },
		     "_onMouseOver": {
		      "!type": "fn()"
		     },
		     "_onMouseWheel": {
		      "!type": "fn()"
		     },
		     "_wheelEvent": {}
		    },
		    "canvas": {},
		    "wheelEvent": {}
		   },
		   "Mouse#onMouseDown": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Mouse#onMouseMove": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Mouse#onMouseUp": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Mouse#onMouseOut": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Mouse#onMouseOut#input": {
		    "mousePointer": {
		     "withinGame": {}
		    }
		   },
		   "Mouse#onMouseOver": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Mouse#onMouseOver#input": {
		    "mousePointer": {
		     "withinGame": {}
		    }
		   },
		   "Mouse#onMouseWheel": {
		    "event": {},
		    "prototype": {
		     "event": {},
		     "wheelDelta": {}
		    }
		   },
		   "Mouse#requestPointerLock": {
		    "element": {},
		    "_this": {},
		    "prototype": {
		     "_pointerLockChange": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Mouse#requestPointerLock~element": {
		    "requestPointerLock": {}
		   },
		   "Mouse#pointerLockChange": {
		    "element": {},
		    "prototype": {
		     "locked": {}
		    }
		   },
		   "Mouse#stop": {
		    "canvas": {},
		    "wheelEvent": {}
		   },
		   "MSPointer": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "input": {
		      "!type": "+Phaser.Input"
		     },
		     "callbackContext": {},
		     "pointerDownCallback": {
		      "!type": "+function"
		     },
		     "pointerMoveCallback": {
		      "!type": "+function"
		     },
		     "pointerUpCallback": {
		      "!type": "+function"
		     },
		     "capture": {
		      "!type": "bool"
		     },
		     "button": {
		      "!type": "number"
		     },
		     "event": {
		      "!type": "+MSPointerEvent|+null"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "_onMSPointerDown": {
		      "!type": "+function"
		     },
		     "_onMSPointerMove": {
		      "!type": "+function"
		     },
		     "_onMSPointerUp": {
		      "!type": "+function"
		     },
		     "_onMSPointerUpGlobal": {
		      "!type": "+function"
		     },
		     "_onMSPointerOut": {
		      "!type": "+function"
		     },
		     "_onMSPointerOver": {
		      "!type": "+function"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "onPointerDown": {
		      "!type": "fn()"
		     },
		     "onPointerMove": {
		      "!type": "fn()"
		     },
		     "onPointerUp": {
		      "!type": "fn()"
		     },
		     "onPointerUpGlobal": {
		      "!type": "fn()"
		     },
		     "onPointerOut": {
		      "!type": "fn(event: +PointerEvent)"
		     },
		     "onPointerOver": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "MSPointer#start": {
		    "_this": {},
		    "prototype": {
		     "_onMSPointerDown": {
		      "!type": "fn()"
		     },
		     "_onMSPointerMove": {
		      "!type": "fn()"
		     },
		     "_onMSPointerUp": {
		      "!type": "fn()"
		     },
		     "_onMSPointerUpGlobal": {
		      "!type": "fn()"
		     },
		     "_onMSPointerOut": {
		      "!type": "fn()"
		     },
		     "_onMSPointerOver": {
		      "!type": "fn()"
		     }
		    },
		    "canvas": {}
		   },
		   "MSPointer#start~canvas": {
		    "style['-ms-content-zooming']": {},
		    "style['-ms-touch-action']": {}
		   },
		   "MSPointer#onPointerDown": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "MSPointer#onPointerMove": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "MSPointer#onPointerUp": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "MSPointer#onPointerUpGlobal": {
		    "pointer": {}
		   },
		   "MSPointer#onPointerOut": {
		    "prototype": {
		     "event": {}
		    },
		    "pointer": {}
		   },
		   "MSPointer#onPointerOut#input": {
		    "mousePointer": {
		     "withinGame": {}
		    }
		   },
		   "MSPointer#onPointerOut~pointer": {
		    "withinGame": {}
		   },
		   "MSPointer#onPointerOver": {
		    "prototype": {
		     "event": {}
		    },
		    "pointer": {}
		   },
		   "MSPointer#onPointerOver#input": {
		    "mousePointer": {
		     "withinGame": {}
		    }
		   },
		   "MSPointer#onPointerOver~pointer": {
		    "withinGame": {}
		   },
		   "MSPointer#stop": {
		    "canvas": {}
		   },
		   "Pointer": {
		    "!type": "fn(game: +Phaser.Game, id: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "id": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "identifier": {
		      "!type": "number"
		     },
		     "pointerId": {
		      "!type": "number"
		     },
		     "target": {
		      "!type": "+any"
		     },
		     "button": {
		      "!type": "+any"
		     },
		     "leftButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "middleButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "rightButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "backButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "forwardButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "eraserButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "_holdSent": {
		      "!type": "bool"
		     },
		     "_history": {
		      "!type": "+array"
		     },
		     "_nextDrop": {
		      "!type": "number"
		     },
		     "_stateReset": {
		      "!type": "bool"
		     },
		     "withinGame": {
		      "!type": "bool"
		     },
		     "clientX": {
		      "!type": "number"
		     },
		     "clientY": {
		      "!type": "number"
		     },
		     "pageX": {
		      "!type": "number"
		     },
		     "pageY": {
		      "!type": "number"
		     },
		     "screenX": {
		      "!type": "number"
		     },
		     "screenY": {
		      "!type": "number"
		     },
		     "rawMovementX": {
		      "!type": "number"
		     },
		     "rawMovementY": {
		      "!type": "number"
		     },
		     "movementX": {
		      "!type": "number"
		     },
		     "movementY": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "isMouse": {
		      "!type": "bool"
		     },
		     "isDown": {
		      "!type": "bool"
		     },
		     "isUp": {
		      "!type": "bool"
		     },
		     "timeDown": {
		      "!type": "number"
		     },
		     "timeUp": {
		      "!type": "number"
		     },
		     "previousTapTime": {
		      "!type": "number"
		     },
		     "totalTouches": {
		      "!type": "number"
		     },
		     "msSinceLastClick": {
		      "!type": "number"
		     },
		     "targetObject": {
		      "!type": "+any"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "position": {
		      "!type": "+Phaser.Point"
		     },
		     "positionDown": {
		      "!type": "+Phaser.Point"
		     },
		     "positionUp": {
		      "!type": "+Phaser.Point"
		     },
		     "circle": {
		      "!type": "+Phaser.Circle"
		     },
		     "_clickTrampolines": {
		      "!type": "[?]|+null"
		     },
		     "_trampolineTargetObject": {},
		     "resetButtons": {
		      "!type": "fn()"
		     },
		     "processButtonsDown": {
		      "!type": "fn()"
		     },
		     "processButtonsUp": {
		      "!type": "fn()"
		     },
		     "updateButtons": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "move": {
		      "!type": "fn()"
		     },
		     "processInteractiveObjects": {
		      "!type": "fn()"
		     },
		     "leave": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "justPressed": {
		      "!type": "fn()"
		     },
		     "justReleased": {
		      "!type": "fn()"
		     },
		     "addClickTrampoline": {
		      "!type": "fn()"
		     },
		     "processClickTrampolines": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "resetMovement": {
		      "!type": "fn()"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "worldX": {
		      "!type": "number"
		     },
		     "worldY": {
		      "!type": "number"
		     }
		    },
		    "NO_BUTTON": {
		     "!type": "number"
		    },
		    "LEFT_BUTTON": {
		     "!type": "number"
		    },
		    "RIGHT_BUTTON": {
		     "!type": "number"
		    },
		    "MIDDLE_BUTTON": {
		     "!type": "number"
		    },
		    "BACK_BUTTON": {
		     "!type": "number"
		    },
		    "FORWARD_BUTTON": {
		     "!type": "number"
		    },
		    "ERASER_BUTTON": {
		     "!type": "number"
		    }
		   },
		   "Pointer#resetButtons": {
		    "prototype": {
		     "isDown": {},
		     "isUp": {}
		    }
		   },
		   "Pointer#updateButtons": {
		    "prototype": {
		     "button": {},
		     "isUp": {},
		     "isDown": {}
		    },
		    "down": {}
		   },
		   "Pointer#start": {
		    "prototype": {
		     "pointerId": {},
		     "identifier": {},
		     "target": {},
		     "isDown": {},
		     "isUp": {},
		     "active": {},
		     "withinGame": {},
		     "dirty": {},
		     "_history": {},
		     "_clickTrampolines": {},
		     "_trampolineTargetObject": {},
		     "msSinceLastClick": {},
		     "timeDown": {},
		     "_holdSent": {},
		     "_stateReset": {}
		    }
		   },
		   "Pointer#start#game": {
		    "input": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Pointer#update": {
		    "prototype": {
		     "dirty": {},
		     "_holdSent": {},
		     "_nextDrop": {}
		    }
		   },
		   "Pointer#move": {
		    "input": {},
		    "fromClick": {},
		    "prototype": {
		     "button": {},
		     "clientX": {},
		     "clientY": {},
		     "pageX": {},
		     "pageY": {},
		     "screenX": {},
		     "screenY": {},
		     "rawMovementX": {},
		     "rawMovementY": {},
		     "movementX": {},
		     "movementY": {},
		     "x": {},
		     "y": {},
		     "withinGame": {},
		     "targetObject": {}
		    },
		    "i": {}
		   },
		   "Pointer#move#circle": {
		    "x": {},
		    "y": {}
		   },
		   "Pointer#move~input": {
		    "activePointer": {},
		    "x": {},
		    "y": {},
		    "circle.x": {},
		    "circle.y": {}
		   },
		   "Pointer#processInteractiveObjects": {
		    "highestRenderOrderID": {},
		    "highestInputPriorityID": {},
		    "candidateTarget": {},
		    "currentNode": {},
		    "prototype": {
		     "targetObject": {}
		    }
		   },
		   "Pointer#processInteractiveObjects~currentNode": {
		    "checked": {}
		   },
		   "Pointer#leave": {
		    "prototype": {
		     "withinGame": {}
		    }
		   },
		   "Pointer#stop": {
		    "prototype": {
		     "timeUp": {},
		     "previousTapTime": {},
		     "isDown": {},
		     "isUp": {},
		     "active": {},
		     "withinGame": {},
		     "pointerId": {},
		     "identifier": {},
		     "_trampolineTargetObject": {},
		     "targetObject": {}
		    }
		   },
		   "Pointer#justPressed": {
		    "duration": {}
		   },
		   "Pointer#justReleased": {
		    "duration": {}
		   },
		   "Pointer#addClickTrampoline": {
		    "trampolines": {},
		    "prototype": {
		     "_clickTrampolines": {}
		    },
		    "i": {}
		   },
		   "Pointer#processClickTrampolines": {
		    "trampolines": {},
		    "i": {},
		    "trampoline": {},
		    "prototype": {
		     "_clickTrampolines": {},
		     "_trampolineTargetObject": {}
		    }
		   },
		   "Pointer#reset": {
		    "prototype": {
		     "active": {},
		     "pointerId": {},
		     "identifier": {},
		     "dirty": {},
		     "totalTouches": {},
		     "_holdSent": {},
		     "_stateReset": {},
		     "targetObject": {}
		    }
		   },
		   "Pointer#reset#_history": {
		    "length": {}
		   },
		   "Pointer#resetMovement": {
		    "prototype": {
		     "movementX": {},
		     "movementY": {}
		    }
		   },
		   "SinglePad": {
		    "!type": "fn(game: +Phaser.Game, padParent: ?)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "index": {
		      "!type": "number"
		     },
		     "connected": {
		      "!type": "bool"
		     },
		     "callbackContext": {},
		     "onConnectCallback": {
		      "!type": "+function"
		     },
		     "onDisconnectCallback": {
		      "!type": "+function"
		     },
		     "onDownCallback": {
		      "!type": "+function"
		     },
		     "onUpCallback": {
		      "!type": "+function"
		     },
		     "onAxisCallback": {
		      "!type": "+function"
		     },
		     "onFloatCallback": {
		      "!type": "+function"
		     },
		     "deadZone": {
		      "!type": "number"
		     },
		     "_padParent": {
		      "!type": "+Phaser.Gamepad"
		     },
		     "_rawPad": {},
		     "_prevTimestamp": {
		      "!type": "number"
		     },
		     "_buttons": {
		      "!type": "[?]"
		     },
		     "_buttonsLen": {
		      "!type": "number"
		     },
		     "_axes": {
		      "!type": "[?]"
		     },
		     "_axesLen": {
		      "!type": "number"
		     },
		     "addCallbacks": {
		      "!type": "fn()"
		     },
		     "getButton": {
		      "!type": "fn()"
		     },
		     "pollStatus": {
		      "!type": "fn()"
		     },
		     "connect": {
		      "!type": "fn()"
		     },
		     "disconnect": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "processAxisChange": {
		      "!type": "fn()"
		     },
		     "processButtonDown": {
		      "!type": "fn()"
		     },
		     "processButtonUp": {
		      "!type": "fn()"
		     },
		     "processButtonFloat": {
		      "!type": "fn()"
		     },
		     "axis": {
		      "!type": "fn()"
		     },
		     "isDown": {
		      "!type": "fn()"
		     },
		     "isUp": {
		      "!type": "fn()"
		     },
		     "justReleased": {
		      "!type": "fn()"
		     },
		     "justPressed": {
		      "!type": "fn()"
		     },
		     "buttonValue": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "SinglePad#addCallbacks": {
		    "prototype": {
		     "onConnectCallback": {},
		     "onDisconnectCallback": {},
		     "onDownCallback": {},
		     "onUpCallback": {},
		     "onAxisCallback": {},
		     "onFloatCallback": {}
		    }
		   },
		   "SinglePad#pollStatus": {
		    "i": {},
		    "rawButtonVal": {},
		    "index": {},
		    "value": {},
		    "prototype": {
		     "_prevTimestamp": {}
		    }
		   },
		   "SinglePad#connect": {
		    "triggerCallback": {},
		    "prototype": {
		     "connected": {},
		     "index": {},
		     "_rawPad": {},
		     "_buttons": {},
		     "_buttonsLen": {},
		     "_axes": {},
		     "_axesLen": {},
		     "_axes[undefined]": {},
		     "_buttons[undefined]": {}
		    },
		    "a": {},
		    "buttonCode": {}
		   },
		   "SinglePad#disconnect": {
		    "triggerCallback": {},
		    "disconnectingIndex": {},
		    "prototype": {
		     "connected": {},
		     "index": {},
		     "_rawPad": {},
		     "_buttons": {},
		     "_buttonsLen": {},
		     "_axes": {},
		     "_axesLen": {}
		    },
		    "i": {}
		   },
		   "SinglePad#destroy": {
		    "prototype": {
		     "_rawPad": {},
		     "_buttons": {},
		     "_buttonsLen": {},
		     "_axes": {},
		     "_axesLen": {},
		     "onConnectCallback": {},
		     "onDisconnectCallback": {},
		     "onDownCallback": {},
		     "onUpCallback": {},
		     "onAxisCallback": {},
		     "onFloatCallback": {}
		    },
		    "i": {}
		   },
		   "SinglePad#processAxisChange": {
		    "prototype": {
		     "_axes[undefined]": {}
		    }
		   },
		   "SinglePad#reset": {
		    "j": {},
		    "prototype": {
		     "_axes[undefined]": {}
		    }
		   },
		   "Touch": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "touchLockCallbacks": {
		      "!type": "+array"
		     },
		     "callbackContext": {},
		     "touchStartCallback": {
		      "!type": "+function"
		     },
		     "touchMoveCallback": {
		      "!type": "+function"
		     },
		     "touchEndCallback": {
		      "!type": "+function"
		     },
		     "touchEnterCallback": {
		      "!type": "+function"
		     },
		     "touchLeaveCallback": {
		      "!type": "+function"
		     },
		     "touchCancelCallback": {
		      "!type": "+function"
		     },
		     "preventDefault": {
		      "!type": "bool"
		     },
		     "event": {
		      "!type": "+TouchEvent"
		     },
		     "_onTouchStart": {
		      "!type": "+function"
		     },
		     "_onTouchMove": {
		      "!type": "+function"
		     },
		     "_onTouchEnd": {
		      "!type": "+function"
		     },
		     "_onTouchEnter": {
		      "!type": "+function"
		     },
		     "_onTouchLeave": {
		      "!type": "+function"
		     },
		     "_onTouchCancel": {
		      "!type": "+function"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "consumeTouchMove": {
		      "!type": "fn()"
		     },
		     "consumeDocumentTouches": {
		      "!type": "fn()"
		     },
		     "addTouchLockCallback": {
		      "!type": "fn()"
		     },
		     "removeTouchLockCallback": {
		      "!type": "fn()"
		     },
		     "onTouchStart": {
		      "!type": "fn()"
		     },
		     "onTouchCancel": {
		      "!type": "fn()"
		     },
		     "onTouchEnter": {
		      "!type": "fn()"
		     },
		     "onTouchLeave": {
		      "!type": "fn()"
		     },
		     "onTouchMove": {
		      "!type": "fn()"
		     },
		     "onTouchEnd": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Touch#start": {
		    "_this": {},
		    "prototype": {
		     "_onTouchStart": {
		      "!type": "fn()"
		     },
		     "_onTouchMove": {
		      "!type": "fn()"
		     },
		     "_onTouchEnd": {
		      "!type": "fn()"
		     },
		     "_onTouchEnter": {
		      "!type": "fn()"
		     },
		     "_onTouchLeave": {
		      "!type": "fn()"
		     },
		     "_onTouchCancel": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Touch#consumeDocumentTouches": {
		    "prototype": {
		     "_documentTouchMove": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Touch#removeTouchLockCallback": {
		    "i": {}
		   },
		   "Touch#onTouchStart": {
		    "i": {},
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Touch#onTouchCancel": {
		    "prototype": {
		     "event": {}
		    },
		    "i": {}
		   },
		   "Touch#onTouchEnter": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Touch#onTouchLeave": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Touch#onTouchMove": {
		    "prototype": {
		     "event": {}
		    },
		    "i": {}
		   },
		   "Touch#onTouchEnd": {
		    "prototype": {
		     "event": {}
		    },
		    "i": {}
		   },
		   "Cache": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "autoResolveURL": {
		      "!type": "bool"
		     },
		     "_cache": {},
		     "_urlMap": {},
		     "_urlResolver": {
		      "!type": "+Image"
		     },
		     "_urlTemp": {
		      "!type": "string"
		     },
		     "onSoundUnlock": {
		      "!type": "+Phaser.Signal"
		     },
		     "_cacheMap": {
		      "!type": "+array"
		     },
		     "_cacheMap[undefined]": {},
		     "addCanvas": {
		      "!type": "fn()"
		     },
		     "addImage": {
		      "!type": "fn()"
		     },
		     "addDefaultImage": {
		      "!type": "fn()"
		     },
		     "addMissingImage": {
		      "!type": "fn()"
		     },
		     "addSound": {
		      "!type": "fn()"
		     },
		     "addText": {
		      "!type": "fn()"
		     },
		     "addPhysicsData": {
		      "!type": "fn()"
		     },
		     "addTilemap": {
		      "!type": "fn()"
		     },
		     "addBinary": {
		      "!type": "fn()"
		     },
		     "addBitmapData": {
		      "!type": "fn()"
		     },
		     "addBitmapFont": {
		      "!type": "fn()"
		     },
		     "addJSON": {
		      "!type": "fn()"
		     },
		     "addXML": {
		      "!type": "fn()"
		     },
		     "addVideo": {
		      "!type": "fn()"
		     },
		     "addShader": {
		      "!type": "fn()"
		     },
		     "addRenderTexture": {
		      "!type": "fn()"
		     },
		     "addSpriteSheet": {
		      "!type": "fn()"
		     },
		     "addTextureAtlas": {
		      "!type": "fn()"
		     },
		     "reloadSound": {
		      "!type": "fn()"
		     },
		     "reloadSoundComplete": {
		      "!type": "fn()"
		     },
		     "updateSound": {
		      "!type": "fn()"
		     },
		     "decodedSound": {
		      "!type": "fn()"
		     },
		     "isSoundDecoded": {
		      "!type": "fn()"
		     },
		     "isSoundReady": {
		      "!type": "fn()"
		     },
		     "checkKey": {
		      "!type": "fn()"
		     },
		     "checkURL": {
		      "!type": "fn()"
		     },
		     "checkCanvasKey": {
		      "!type": "fn()"
		     },
		     "checkImageKey": {
		      "!type": "fn()"
		     },
		     "checkTextureKey": {
		      "!type": "fn()"
		     },
		     "checkSoundKey": {
		      "!type": "fn()"
		     },
		     "checkTextKey": {
		      "!type": "fn()"
		     },
		     "checkPhysicsKey": {
		      "!type": "fn()"
		     },
		     "checkTilemapKey": {
		      "!type": "fn()"
		     },
		     "checkBinaryKey": {
		      "!type": "fn()"
		     },
		     "checkBitmapDataKey": {
		      "!type": "fn()"
		     },
		     "checkBitmapFontKey": {
		      "!type": "fn()"
		     },
		     "checkJSONKey": {
		      "!type": "fn()"
		     },
		     "checkXMLKey": {
		      "!type": "fn()"
		     },
		     "checkVideoKey": {
		      "!type": "fn()"
		     },
		     "checkShaderKey": {
		      "!type": "fn()"
		     },
		     "checkRenderTextureKey": {
		      "!type": "fn()"
		     },
		     "getItem": {
		      "!type": "fn()"
		     },
		     "getCanvas": {
		      "!type": "fn()"
		     },
		     "getImage": {
		      "!type": "fn()"
		     },
		     "getTextureFrame": {
		      "!type": "fn()"
		     },
		     "getSound": {
		      "!type": "fn()"
		     },
		     "getSoundData": {
		      "!type": "fn()"
		     },
		     "getText": {
		      "!type": "fn()"
		     },
		     "getPhysicsData": {
		      "!type": "fn()"
		     },
		     "getTilemapData": {
		      "!type": "fn()"
		     },
		     "getBinary": {
		      "!type": "fn()"
		     },
		     "getBitmapData": {
		      "!type": "fn()"
		     },
		     "getBitmapFont": {
		      "!type": "fn()"
		     },
		     "getJSON": {
		      "!type": "fn()"
		     },
		     "getXML": {
		      "!type": "fn()"
		     },
		     "getVideo": {
		      "!type": "fn()"
		     },
		     "getShader": {
		      "!type": "fn()"
		     },
		     "getRenderTexture": {
		      "!type": "fn()"
		     },
		     "getBaseTexture": {
		      "!type": "fn()"
		     },
		     "getFrame": {
		      "!type": "fn()"
		     },
		     "getFrameCount": {
		      "!type": "fn()"
		     },
		     "getFrameData": {
		      "!type": "fn()"
		     },
		     "hasFrameData": {
		      "!type": "fn()"
		     },
		     "updateFrameData": {
		      "!type": "fn()"
		     },
		     "getFrameByIndex": {
		      "!type": "fn()"
		     },
		     "getFrameByName": {
		      "!type": "fn()"
		     },
		     "getPixiTexture": {
		      "!type": "fn()"
		     },
		     "getPixiBaseTexture": {
		      "!type": "fn()"
		     },
		     "getURL": {
		      "!type": "fn()"
		     },
		     "getKeys": {
		      "!type": "fn()"
		     },
		     "removeCanvas": {
		      "!type": "fn()"
		     },
		     "removeImage": {
		      "!type": "fn()"
		     },
		     "removeSound": {
		      "!type": "fn()"
		     },
		     "removeText": {
		      "!type": "fn()"
		     },
		     "removePhysics": {
		      "!type": "fn()"
		     },
		     "removeTilemap": {
		      "!type": "fn()"
		     },
		     "removeBinary": {
		      "!type": "fn()"
		     },
		     "removeBitmapData": {
		      "!type": "fn()"
		     },
		     "removeBitmapFont": {
		      "!type": "fn()"
		     },
		     "removeJSON": {
		      "!type": "fn()"
		     },
		     "removeXML": {
		      "!type": "fn()"
		     },
		     "removeVideo": {
		      "!type": "fn()"
		     },
		     "removeShader": {
		      "!type": "fn()"
		     },
		     "removeRenderTexture": {
		      "!type": "fn()"
		     },
		     "removeSpriteSheet": {
		      "!type": "fn()"
		     },
		     "removeTextureAtlas": {
		      "!type": "fn()"
		     },
		     "clearGLTextures": {
		      "!type": "fn()"
		     },
		     "_resolveURL": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    },
		    "CANVAS": {
		     "!type": "number"
		    },
		    "IMAGE": {
		     "!type": "number"
		    },
		    "TEXTURE": {
		     "!type": "number"
		    },
		    "SOUND": {
		     "!type": "number"
		    },
		    "TEXT": {
		     "!type": "number"
		    },
		    "PHYSICS": {
		     "!type": "number"
		    },
		    "TILEMAP": {
		     "!type": "number"
		    },
		    "BINARY": {
		     "!type": "number"
		    },
		    "BITMAPDATA": {
		     "!type": "number"
		    },
		    "BITMAPFONT": {
		     "!type": "number"
		    },
		    "JSON": {
		     "!type": "number"
		    },
		    "XML": {
		     "!type": "number"
		    },
		    "VIDEO": {
		     "!type": "number"
		    },
		    "SHADER": {
		     "!type": "number"
		    },
		    "RENDER_TEXTURE": {
		     "!type": "number"
		    }
		   },
		   "Cache#_cache": {
		    "canvas": {},
		    "image": {},
		    "texture": {},
		    "sound": {},
		    "video": {},
		    "text": {},
		    "json": {},
		    "xml": {},
		    "physics": {},
		    "tilemap": {},
		    "binary": {},
		    "bitmapData": {},
		    "bitmapFont": {},
		    "shader": {},
		    "renderTexture": {}
		   },
		   "Cache#addCanvas": {
		    "context": {}
		   },
		   "Cache#addCanvas#_cache": {
		    "canvas[undefined]": {
		     "canvas": {},
		     "context": {}
		    }
		   },
		   "Cache#addImage": {
		    "img": {}
		   },
		   "Cache#addImage~img": {
		    "key": {},
		    "url": {},
		    "data": {},
		    "base": {},
		    "frame": {},
		    "frameData": {}
		   },
		   "Cache#addImage#_cache": {
		    "image[undefined]": {}
		   },
		   "Cache#addDefaultImage": {
		    "img": {},
		    "obj": {}
		   },
		   "Cache#addDefaultImage~img": {
		    "src": {}
		   },
		   "Cache#addMissingImage": {
		    "img": {},
		    "obj": {}
		   },
		   "Cache#addMissingImage~img": {
		    "src": {}
		   },
		   "Cache#addSound": {
		    "webAudio": {},
		    "audioTag": {},
		    "decoded": {}
		   },
		   "Cache#addSound#_cache": {
		    "sound[undefined]": {
		     "url": {},
		     "data": {},
		     "isDecoding": {},
		     "decoded": {},
		     "webAudio": {},
		     "audioTag": {},
		     "locked": {}
		    }
		   },
		   "Cache#addText#_cache": {
		    "text[undefined]": {
		     "url": {},
		     "data": {}
		    }
		   },
		   "Cache#addPhysicsData#_cache": {
		    "physics[undefined]": {
		     "url": {},
		     "data": {},
		     "format": {}
		    }
		   },
		   "Cache#addTilemap#_cache": {
		    "tilemap[undefined]": {
		     "url": {},
		     "data": {},
		     "format": {}
		    }
		   },
		   "Cache#addBinary#_cache": {
		    "binary[undefined]": {}
		   },
		   "Cache#addBitmapData": {
		    "frameData": {}
		   },
		   "Cache#addBitmapData#_cache": {
		    "bitmapData[undefined]": {
		     "data": {},
		     "frameData": {}
		    }
		   },
		   "Cache#addBitmapFont": {
		    "obj": {}
		   },
		   "Cache#addBitmapFont~obj": {
		    "url": {},
		    "data": {},
		    "font": {},
		    "base": {}
		   },
		   "Cache#addBitmapFont#_cache": {
		    "bitmapFont[undefined]": {}
		   },
		   "Cache#addJSON#_cache": {
		    "json[undefined]": {
		     "url": {},
		     "data": {}
		    }
		   },
		   "Cache#addXML#_cache": {
		    "xml[undefined]": {
		     "url": {},
		     "data": {}
		    }
		   },
		   "Cache#addVideo#_cache": {
		    "video[undefined]": {
		     "url": {},
		     "data": {},
		     "isBlob": {},
		     "locked": {}
		    }
		   },
		   "Cache#addShader#_cache": {
		    "shader[undefined]": {
		     "url": {},
		     "data": {}
		    }
		   },
		   "Cache#addRenderTexture#_cache": {
		    "renderTexture[undefined]": {
		     "texture": {},
		     "frame": {}
		    }
		   },
		   "Cache#addSpriteSheet": {
		    "frameMax": {},
		    "margin": {},
		    "spacing": {},
		    "obj": {}
		   },
		   "Cache#addSpriteSheet~obj": {
		    "key": {},
		    "url": {},
		    "data": {},
		    "frameWidth": {},
		    "frameHeight": {},
		    "margin": {},
		    "spacing": {},
		    "base": {},
		    "frameData": {}
		   },
		   "Cache#addSpriteSheet#_cache": {
		    "image[undefined]": {}
		   },
		   "Cache#addTextureAtlas": {
		    "obj": {}
		   },
		   "Cache#addTextureAtlas~obj": {
		    "key": {},
		    "url": {},
		    "data": {},
		    "base": {},
		    "frameData": {}
		   },
		   "Cache#addTextureAtlas#_cache": {
		    "image[undefined]": {}
		   },
		   "Cache#reloadSound": {
		    "_this": {},
		    "sound": {}
		   },
		   "Cache#reloadSound~sound": {
		    "data.src": {}
		   },
		   "Cache#reloadSoundComplete": {
		    "sound": {}
		   },
		   "Cache#reloadSoundComplete~sound": {
		    "locked": {}
		   },
		   "Cache#updateSound": {
		    "sound": {}
		   },
		   "Cache#updateSound~sound": {
		    "undefined]": {}
		   },
		   "Cache#decodedSound": {
		    "sound": {}
		   },
		   "Cache#decodedSound~sound": {
		    "data": {},
		    "decoded": {},
		    "isDecoding": {}
		   },
		   "Cache#isSoundDecoded": {
		    "sound": {}
		   },
		   "Cache#isSoundReady": {
		    "sound": {}
		   },
		   "Cache#getImage": {
		    "key": {},
		    "full": {},
		    "img": {}
		   },
		   "Cache#getPhysicsData": {
		    "data": {},
		    "fixtures": {},
		    "fixture": {}
		   },
		   "Cache#getJSON": {
		    "data": {}
		   },
		   "Cache#getBaseTexture": {
		    "cache": {}
		   },
		   "Cache#getFrame": {
		    "cache": {}
		   },
		   "Cache#getFrameCount": {
		    "data": {}
		   },
		   "Cache#getFrameData": {
		    "cache": {}
		   },
		   "Cache#hasFrameData": {
		    "cache": {}
		   },
		   "Cache#updateFrameData": {
		    "cache": {}
		   },
		   "Cache#updateFrameData#_cacheMap[undefined][undefined]": {
		    "frameData": {}
		   },
		   "Cache#getFrameByIndex": {
		    "data": {}
		   },
		   "Cache#getFrameByName": {
		    "data": {}
		   },
		   "Cache#getPixiTexture": {
		    "base": {}
		   },
		   "Cache#getPixiBaseTexture": {
		    "img": {}
		   },
		   "Cache#getURL": {
		    "url": {}
		   },
		   "Cache#getKeys": {
		    "cache": {},
		    "out": {},
		    "key": {}
		   },
		   "Cache#removeImage": {
		    "removeFromPixi": {},
		    "img": {}
		   },
		   "Cache#clearGLTextures": {
		    "key": {}
		   },
		   "Cache#clearGLTextures#cache": {
		    "image[undefined]": {
		     "base": {
		      "_glTextures": {}
		     }
		    }
		   },
		   "Cache#_resolveURL#_urlResolver": {
		    "src": {}
		   },
		   "Cache#_resolveURL": {
		    "prototype": {
		     "_urlTemp": {},
		     "_urlMap[undefined]": {}
		    }
		   },
		   "Cache#destroy": {
		    "i": {},
		    "cache": {},
		    "key": {},
		    "prototype": {
		     "_urlMap": {},
		     "_urlResolver": {},
		     "_urlTemp": {}
		    }
		   },
		   "Loader": {
		    "!type": "fn()",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "cache": {
		      "!type": "+Phaser.Cache"
		     },
		     "resetLocked": {
		      "!type": "bool"
		     },
		     "isLoading": {
		      "!type": "bool"
		     },
		     "hasLoaded": {
		      "!type": "bool"
		     },
		     "preloadSprite": {},
		     "crossOrigin": {
		      "!type": "bool|string"
		     },
		     "baseURL": {
		      "!type": "string"
		     },
		     "path": {
		      "!type": "string"
		     },
		     "onLoadStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onLoadComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onPackComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFileStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFileComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFileError": {
		      "!type": "+Phaser.Signal"
		     },
		     "useXDomainRequest": {
		      "!type": "bool"
		     },
		     "_warnedAboutXDomainRequest": {
		      "!type": "bool"
		     },
		     "enableParallel": {
		      "!type": "number"
		     },
		     "maxParallelDownloads": {
		      "!type": "number"
		     },
		     "_withSyncPointDepth": {
		      "!type": "number"
		     },
		     "_fileList": {
		      "!type": "[?]"
		     },
		     "_flightQueue": {
		      "!type": "[?]"
		     },
		     "_processingHead": {
		      "!type": "number"
		     },
		     "_fileLoadStarted": {
		      "!type": "bool"
		     },
		     "_totalPackCount": {
		      "!type": "number"
		     },
		     "_totalFileCount": {
		      "!type": "number"
		     },
		     "_loadedPackCount": {
		      "!type": "number"
		     },
		     "_loadedFileCount": {
		      "!type": "number"
		     },
		     "setPreloadSprite": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "checkKeyExists": {
		      "!type": "fn()"
		     },
		     "getAssetIndex": {
		      "!type": "fn()"
		     },
		     "getAsset": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "addToFileList": {
		      "!type": "fn()"
		     },
		     "replaceInFileList": {
		      "!type": "fn()"
		     },
		     "pack": {
		      "!type": "fn()"
		     },
		     "image": {
		      "!type": "fn()"
		     },
		     "images": {
		      "!type": "fn()"
		     },
		     "text": {
		      "!type": "fn()"
		     },
		     "json": {
		      "!type": "fn()"
		     },
		     "shader": {
		      "!type": "fn()"
		     },
		     "xml": {
		      "!type": "fn()"
		     },
		     "script": {
		      "!type": "fn()"
		     },
		     "binary": {
		      "!type": "fn()"
		     },
		     "spritesheet": {
		      "!type": "fn()"
		     },
		     "audio": {
		      "!type": "fn()"
		     },
		     "audiosprite": {
		      "!type": "fn()"
		     },
		     "video": {
		      "!type": "fn()"
		     },
		     "tilemap": {
		      "!type": "fn()"
		     },
		     "physics": {
		      "!type": "fn()"
		     },
		     "bitmapFont": {
		      "!type": "fn()"
		     },
		     "atlasJSONArray": {
		      "!type": "fn()"
		     },
		     "atlasJSONHash": {
		      "!type": "fn()"
		     },
		     "atlasXML": {
		      "!type": "fn()"
		     },
		     "atlas": {
		      "!type": "fn()"
		     },
		     "withSyncPoints": {
		      "!type": "fn(callback: +function, callbackContext: ?) -> ?"
		     },
		     "withSyncPoint": {
		      "!type": "fn()"
		     },
		     "addSyncPoint": {
		      "!type": "fn()"
		     },
		     "removeFile": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "processLoadQueue": {
		      "!type": "fn()"
		     },
		     "finishedLoading": {
		      "!type": "fn()"
		     },
		     "asyncComplete": {
		      "!type": "fn()"
		     },
		     "processPack": {
		      "!type": "fn()"
		     },
		     "transformUrl": {
		      "!type": "fn()"
		     },
		     "loadFile": {
		      "!type": "fn()"
		     },
		     "loadImageTag": {
		      "!type": "fn()"
		     },
		     "loadVideoTag": {
		      "!type": "fn()"
		     },
		     "loadAudioTag": {
		      "!type": "fn()"
		     },
		     "xhrLoad": {
		      "!type": "fn(file: ?, url: string, type: string, onload: +function, onerror: +function)"
		     },
		     "xhrLoadWithXDR": {
		      "!type": "fn()"
		     },
		     "getVideoURL": {
		      "!type": "fn()"
		     },
		     "getAudioURL": {
		      "!type": "fn()"
		     },
		     "fileError": {
		      "!type": "fn()"
		     },
		     "fileComplete": {
		      "!type": "fn()"
		     },
		     "jsonLoadComplete": {
		      "!type": "fn()"
		     },
		     "csvLoadComplete": {
		      "!type": "fn()"
		     },
		     "xmlLoadComplete": {
		      "!type": "fn()"
		     },
		     "parseXml": {
		      "!type": "fn()"
		     },
		     "nextFile": {
		      "!type": "fn(previousFile: ?, success: bool)"
		     },
		     "updateProgress": {
		      "!type": "fn()"
		     },
		     "totalLoadedFiles": {
		      "!type": "fn()"
		     },
		     "totalQueuedFiles": {
		      "!type": "fn()"
		     },
		     "totalLoadedPacks": {
		      "!type": "fn()"
		     },
		     "totalQueuedPacks": {
		      "!type": "fn()"
		     },
		     "progressFloat": {
		      "!type": "number"
		     },
		     "progress": {
		      "!type": "number"
		     }
		    },
		    "TEXTURE_ATLAS_JSON_ARRAY": {
		     "!type": "number"
		    },
		    "TEXTURE_ATLAS_JSON_HASH": {
		     "!type": "number"
		    },
		    "TEXTURE_ATLAS_XML_STARLING": {
		     "!type": "number"
		    },
		    "PHYSICS_LIME_CORONA_JSON": {
		     "!type": "number"
		    },
		    "PHYSICS_PHASER_JSON": {
		     "!type": "number"
		    }
		   },
		   "Loader#setPreloadSprite": {
		    "direction": {},
		    "prototype": {
		     "preloadSprite": {}
		    }
		   },
		   "Loader#setPreloadSprite#preloadSprite": {
		    "sprite": {},
		    "direction": {},
		    "width": {},
		    "height": {},
		    "rect": {}
		   },
		   "Loader#resize#preloadSprite": {
		    "rect": {
		     "height": {}
		    }
		   },
		   "Loader#getAssetIndex": {
		    "bestFound": {},
		    "i": {},
		    "file": {}
		   },
		   "Loader#getAsset": {
		    "fileIndex": {}
		   },
		   "Loader#reset": {
		    "clearEvents": {},
		    "prototype": {
		     "preloadSprite": {},
		     "isLoading": {},
		     "_processingHead": {},
		     "_fileLoadStarted": {},
		     "_totalFileCount": {},
		     "_totalPackCount": {},
		     "_loadedPackCount": {},
		     "_loadedFileCount": {}
		    }
		   },
		   "Loader#reset#_fileList": {
		    "length": {}
		   },
		   "Loader#reset#_flightQueue": {
		    "length": {}
		   },
		   "Loader#addToFileList": {
		    "overwrite": {},
		    "url": {},
		    "file": {},
		    "prop": {},
		    "fileIndex": {},
		    "currentFile": {},
		    "prototype": {
		     "_fileList[undefined]": {}
		    }
		   },
		   "Loader#addToFileList~file": {
		    "type": {},
		    "key": {},
		    "path": {},
		    "url": {},
		    "syncPoint": {},
		    "data": {},
		    "loading": {},
		    "loaded": {},
		    "error": {},
		    "undefined]": {}
		   },
		   "Loader#pack": {
		    "url": {},
		    "data": {},
		    "callbackContext": {},
		    "pack": {},
		    "i": {},
		    "file": {}
		   },
		   "Loader#pack~pack": {
		    "type": {},
		    "key": {},
		    "url": {},
		    "path": {},
		    "syncPoint": {},
		    "data": {},
		    "loading": {},
		    "loaded": {},
		    "error": {},
		    "callbackContext": {}
		   },
		   "Loader#images": {
		    "i": {}
		   },
		   "Loader#script": {
		    "callback": {},
		    "callbackContext": {}
		   },
		   "Loader#binary": {
		    "callback": {},
		    "callbackContext": {}
		   },
		   "Loader#spritesheet": {
		    "frameMax": {},
		    "margin": {},
		    "spacing": {}
		   },
		   "Loader#audio": {
		    "autoDecode": {},
		    "urls": {}
		   },
		   "Loader#audiosprite": {
		    "jsonURL": {},
		    "jsonData": {},
		    "autoDecode": {}
		   },
		   "Loader#video": {
		    "loadEvent": {},
		    "asBlob": {},
		    "urls": {}
		   },
		   "Loader#tilemap": {
		    "url": {},
		    "data": {},
		    "format": {}
		   },
		   "Loader#physics": {
		    "url": {},
		    "data": {},
		    "format": {}
		   },
		   "Loader#bitmapFont": {
		    "textureURL": {},
		    "atlasURL": {},
		    "atlasData": {},
		    "xSpacing": {},
		    "ySpacing": {},
		    "json": {},
		    "xml": {}
		   },
		   "Loader#atlasXML": {
		    "atlasURL": {},
		    "atlasData": {}
		   },
		   "Loader#atlas": {
		    "textureURL": {},
		    "atlasURL": {},
		    "atlasData": {},
		    "format": {},
		    "xml": {}
		   },
		   "Loader#addSyncPoint": {
		    "asset": {}
		   },
		   "Loader#addSyncPoint~asset": {
		    "file.syncPoint": {}
		   },
		   "Loader#removeFile": {
		    "asset": {}
		   },
		   "Loader#removeAll#_fileList": {
		    "length": {}
		   },
		   "Loader#removeAll#_flightQueue": {
		    "length": {}
		   },
		   "Loader#start": {
		    "prototype": {
		     "hasLoaded": {},
		     "isLoading": {}
		    }
		   },
		   "Loader#processLoadQueue": {
		    "i": {},
		    "file": {},
		    "syncblock": {},
		    "inflightLimit": {},
		    "prototype": {
		     "_processingHead": {},
		     "_fileLoadStarted": {}
		    },
		    "_this": {}
		   },
		   "Loader#processLoadQueue~file": {
		    "loading": {},
		    "requestUrl": {},
		    "requestObject": {}
		   },
		   "Loader#finishedLoading": {
		    "prototype": {
		     "hasLoaded": {},
		     "isLoading": {},
		     "_fileLoadStarted": {}
		    }
		   },
		   "Loader#asyncComplete": {
		    "errorMessage": {}
		   },
		   "Loader#processPack": {
		    "packData": {},
		    "i": {},
		    "file": {}
		   },
		   "Loader#loadImageTag": {
		    "_this": {}
		   },
		   "Loader#loadVideoTag": {
		    "_this": {},
		    "videoLoadEvent": {
		     "!type": "fn()"
		    }
		   },
		   "Loader#loadAudioTag": {
		    "_this": {},
		    "playThroughEvent": {
		     "!type": "fn()"
		    }
		   },
		   "Loader#xhrLoad": {
		    "xhr": {},
		    "onerror": {},
		    "_this": {}
		   },
		   "Loader#xhrLoad~xhr": {
		    "responseType": {},
		    "onload": {
		     "!type": "fn()"
		    },
		    "onerror": {
		     "!type": "fn()"
		    }
		   },
		   "Loader#xhrLoadWithXDR": {
		    "prototype": {
		     "_warnedAboutXDomainRequest": {}
		    },
		    "xhr": {},
		    "onerror": {},
		    "_this": {}
		   },
		   "Loader#xhrLoadWithXDR~xhr": {
		    "responseType": {},
		    "timeout": {},
		    "onerror": {
		     "!type": "fn()"
		    },
		    "ontimeout": {
		     "!type": "fn()"
		    },
		    "onprogress": {
		     "!type": "fn()"
		    },
		    "onload": {
		     "!type": "fn()"
		    }
		   },
		   "Loader#getVideoURL": {
		    "i": {},
		    "url": {},
		    "videoType": {},
		    "extension": {}
		   },
		   "Loader#getAudioURL": {
		    "i": {},
		    "url": {},
		    "audioType": {},
		    "extension": {}
		   },
		   "Loader#fileError": {
		    "url": {},
		    "message": {},
		    "reason": {}
		   },
		   "Loader#fileComplete": {
		    "loadNext": {},
		    "data": {}
		   },
		   "Loader#jsonLoadComplete": {
		    "data": {}
		   },
		   "Loader#csvLoadComplete": {
		    "data": {}
		   },
		   "Loader#xmlLoadComplete": {
		    "data": {},
		    "xml": {},
		    "responseType": {}
		   },
		   "Loader#parseXml": {
		    "xml": {},
		    "domparser": {}
		   },
		   "Loader#parseXml~xml": {
		    "async": {}
		   },
		   "Loader#updateProgress#preloadSprite": {
		    "rect": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Loader#updateProgress": {
		    "prototype": {
		     "preloadSprite": {}
		    }
		   },
		   "LoaderParser": {
		    "!type": "fn()",
		    "bitmapFont": {
		     "!type": "fn()"
		    },
		    "xmlBitmapFont": {
		     "!type": "fn()",
		     "data": {},
		     "info": {},
		     "common": {},
		     "letters": {},
		     "i": {},
		     "charCode": {},
		     "kernings": {},
		     "first": {},
		     "second": {},
		     "amount": {}
		    },
		    "xmlBitmapFont~data": {
		     "font": {},
		     "size": {},
		     "lineHeight": {},
		     "chars": {},
		     "chars[undefined]": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {},
		      "xOffset": {},
		      "yOffset": {},
		      "xAdvance": {},
		      "kerning": {}
		     },
		     "chars[undefined].kerning[undefined]": {}
		    },
		    "jsonBitmapFont": {
		     "!type": "fn()",
		     "data": {}
		    },
		    "jsonBitmapFont~data": {
		     "font": {},
		     "size": {},
		     "lineHeight": {},
		     "chars": {},
		     "chars[undefined]": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {},
		      "xOffset": {},
		      "yOffset": {},
		      "xAdvance": {},
		      "kerning": {}
		     },
		     "chars[undefined].kerning[undefined]": {}
		    },
		    "finalizeBitmapFont": {
		     "!type": "fn()"
		    }
		   },
		   "Math": {
		    "!type": "fn()",
		    "PI2": {
		     "!type": "number"
		    },
		    "prototype": {
		     "fuzzyEqual": {
		      "!type": "fn(a: number, b: number, epsilon: number) -> ?"
		     },
		     "fuzzyLessThan": {
		      "!type": "fn(a: number, b: number, epsilon: number) -> ?"
		     },
		     "fuzzyGreaterThan": {
		      "!type": "fn(a: number, b: number, epsilon: number) -> ?"
		     },
		     "fuzzyCeil": {
		      "!type": "fn(val: number, epsilon: number) -> ?"
		     },
		     "fuzzyFloor": {
		      "!type": "fn(val: number, epsilon: number) -> ?"
		     },
		     "average": {
		      "!type": "fn() -> ?"
		     },
		     "shear": {
		      "!type": "fn(n: number) -> ?"
		     },
		     "snapTo": {
		      "!type": "fn(input: number, gap: number, start: number) -> ?"
		     },
		     "snapToFloor": {
		      "!type": "fn(input: number, gap: number, start: number) -> ?"
		     },
		     "snapToCeil": {
		      "!type": "fn(input: number, gap: number, start: number) -> ?"
		     },
		     "roundTo": {
		      "!type": "fn(value: number, place: number, base: number) -> ?"
		     },
		     "floorTo": {
		      "!type": "fn(value: number, place: number, base: number) -> ?"
		     },
		     "ceilTo": {
		      "!type": "fn(value: number, place: number, base: number) -> ?"
		     },
		     "angleBetween": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> ?"
		     },
		     "angleBetweenY": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> ?"
		     },
		     "angleBetweenPoints": {
		      "!type": "fn(point1: +Phaser.Point, point2: +Phaser.Point) -> ?"
		     },
		     "angleBetweenPointsY": {
		      "!type": "fn(point1: +Phaser.Point, point2: +Phaser.Point) -> ?"
		     },
		     "reverseAngle": {
		      "!type": "fn(angleRad: number) -> ?"
		     },
		     "normalizeAngle": {
		      "!type": "fn(angleRad: number) -> ?"
		     },
		     "maxAdd": {
		      "!type": "fn(value: number, amount: number, max: number) -> ?"
		     },
		     "minSub": {
		      "!type": "fn(value: number, amount: number, min: number) -> ?"
		     },
		     "wrap": {
		      "!type": "fn(value: number, min: number, max: number) -> ?"
		     },
		     "wrapValue": {
		      "!type": "fn(value: number, amount: number, max: number) -> ?"
		     },
		     "isOdd": {
		      "!type": "fn(n: number) -> ?"
		     },
		     "isEven": {
		      "!type": "fn(n: number) -> ?"
		     },
		     "min": {
		      "!type": "fn() -> ?"
		     },
		     "max": {
		      "!type": "fn() -> ?"
		     },
		     "minProperty": {
		      "!type": "fn() -> ?"
		     },
		     "maxProperty": {
		      "!type": "fn() -> ?"
		     },
		     "wrapAngle": {
		      "!type": "fn(angle: number, radians: bool) -> ?"
		     },
		     "linearInterpolation": {
		      "!type": "fn(v: [?], k: number) -> ?"
		     },
		     "bezierInterpolation": {
		      "!type": "fn(v: [?], k: number) -> ?"
		     },
		     "catmullRomInterpolation": {
		      "!type": "fn(v: [?], k: number) -> ?"
		     },
		     "linear": {
		      "!type": "fn(p0: number, p1: number, t: number) -> ?"
		     },
		     "bernstein": {
		      "!type": "fn(n: number, i: number) -> ?"
		     },
		     "factorial": {
		      "!type": "fn(value: number) -> ?"
		     },
		     "catmullRom": {
		      "!type": "fn(p0: number, p1: number, p2: number, p3: number, t: number) -> ?"
		     },
		     "difference": {
		      "!type": "fn(a: number, b: number) -> ?"
		     },
		     "roundAwayFromZero": {
		      "!type": "fn(value: number) -> ?"
		     },
		     "sinCosGenerator": {
		      "!type": "fn(length: number, sinAmplitude: number, cosAmplitude: number, frequency: number) -> ?"
		     },
		     "distance": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> ?"
		     },
		     "distanceSq": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> ?"
		     },
		     "distancePow": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number, pow: number) -> ?"
		     },
		     "clamp": {
		      "!type": "fn(x: number, a: number, b: number) -> ?"
		     },
		     "clampBottom": {
		      "!type": "fn(x: number, a: number) -> ?"
		     },
		     "within": {
		      "!type": "fn(a: number, b: number, tolerance: number) -> ?"
		     },
		     "mapLinear": {
		      "!type": "fn(x: number, a1: number, a2: number, b1: number, b2: number) -> ?"
		     },
		     "smoothstep": {
		      "!type": "fn(x: number, min: number, max: number) -> ?"
		     },
		     "smootherstep": {
		      "!type": "fn(x: number, min: number, max: number) -> ?"
		     },
		     "sign": {
		      "!type": "fn(x: number) -> ?"
		     },
		     "percent": {
		      "!type": "fn(a: number, b: number, base: number) -> ?"
		     },
		     "degToRad": {
		      "!type": "fn(degrees: number) -> ?"
		     },
		     "radToDeg": {
		      "!type": "fn(radians: number) -> ?"
		     },
		     "chanceRoll": {
		      "!type": "fn(chance: number) -> ?"
		     }
		    },
		    "fuzzyEqual": {
		     "!type": "fn()",
		     "epsilon": {}
		    },
		    "fuzzyLessThan": {
		     "!type": "fn()",
		     "epsilon": {}
		    },
		    "fuzzyGreaterThan": {
		     "!type": "fn()",
		     "epsilon": {}
		    },
		    "fuzzyCeil": {
		     "!type": "fn()",
		     "epsilon": {}
		    },
		    "fuzzyFloor": {
		     "!type": "fn()",
		     "epsilon": {}
		    },
		    "average": {
		     "!type": "fn()",
		     "sum": {},
		     "i": {}
		    },
		    "shear": {
		     "!type": "fn()"
		    },
		    "snapTo": {
		     "!type": "fn()",
		     "start": {},
		     "input": {}
		    },
		    "snapToFloor": {
		     "!type": "fn()",
		     "start": {},
		     "input": {}
		    },
		    "snapToCeil": {
		     "!type": "fn()",
		     "start": {},
		     "input": {}
		    },
		    "roundTo": {
		     "!type": "fn()",
		     "place": {},
		     "base": {},
		     "p": {}
		    },
		    "floorTo": {
		     "!type": "fn()",
		     "place": {},
		     "base": {},
		     "p": {}
		    },
		    "ceilTo": {
		     "!type": "fn()",
		     "place": {},
		     "base": {},
		     "p": {}
		    },
		    "angleBetween": {
		     "!type": "fn()"
		    },
		    "angleBetweenY": {
		     "!type": "fn()"
		    },
		    "angleBetweenPoints": {
		     "!type": "fn()"
		    },
		    "angleBetweenPointsY": {
		     "!type": "fn()"
		    },
		    "reverseAngle": {
		     "!type": "fn()"
		    },
		    "normalizeAngle": {
		     "!type": "fn()",
		     "angleRad": {}
		    },
		    "maxAdd": {
		     "!type": "fn()"
		    },
		    "minSub": {
		     "!type": "fn()"
		    },
		    "wrap": {
		     "!type": "fn()",
		     "range": {},
		     "result": {}
		    },
		    "wrapValue": {
		     "!type": "fn()",
		     "diff": {},
		     "value": {},
		     "amount": {},
		     "max": {}
		    },
		    "isOdd": {
		     "!type": "fn()"
		    },
		    "isEven": {
		     "!type": "fn()"
		    },
		    "min": {
		     "!type": "fn()",
		     "data": {},
		     "i": {},
		     "min": {},
		     "len": {}
		    },
		    "max": {
		     "!type": "fn()",
		     "data": {},
		     "i": {},
		     "max": {},
		     "len": {}
		    },
		    "minProperty": {
		     "!type": "fn()",
		     "data": {},
		     "i": {},
		     "min": {},
		     "len": {}
		    },
		    "maxProperty": {
		     "!type": "fn()",
		     "data": {},
		     "i": {},
		     "max": {},
		     "len": {}
		    },
		    "wrapAngle": {
		     "!type": "fn()"
		    },
		    "linearInterpolation": {
		     "!type": "fn()",
		     "m": {},
		     "f": {},
		     "i": {}
		    },
		    "bezierInterpolation": {
		     "!type": "fn()",
		     "b": {},
		     "n": {},
		     "i": {}
		    },
		    "catmullRomInterpolation": {
		     "!type": "fn()",
		     "m": {},
		     "f": {},
		     "i": {}
		    },
		    "catmullRomInterpolation~i": {
		     "f": {}
		    },
		    "linear": {
		     "!type": "fn()"
		    },
		    "bernstein": {
		     "!type": "fn()"
		    },
		    "factorial": {
		     "!type": "fn()",
		     "res": {}
		    },
		    "catmullRom": {
		     "!type": "fn()",
		     "v0": {},
		     "v1": {},
		     "t2": {},
		     "t3": {}
		    },
		    "difference": {
		     "!type": "fn()"
		    },
		    "roundAwayFromZero": {
		     "!type": "fn()"
		    },
		    "sinCosGenerator": {
		     "!type": "fn()",
		     "sinAmplitude": {},
		     "cosAmplitude": {},
		     "frequency": {},
		     "sin": {},
		     "cos": {},
		     "frq": {},
		     "cosTable": {},
		     "sinTable": {},
		     "c": {}
		    },
		    "sinCosGenerator~cosTable": {
		     "undefined]": {}
		    },
		    "sinCosGenerator~sinTable": {
		     "undefined]": {}
		    },
		    "distance": {
		     "!type": "fn()",
		     "dx": {},
		     "dy": {}
		    },
		    "distanceSq": {
		     "!type": "fn()",
		     "dx": {},
		     "dy": {}
		    },
		    "distancePow": {
		     "!type": "fn()",
		     "pow": {}
		    },
		    "clamp": {
		     "!type": "fn()"
		    },
		    "clampBottom": {
		     "!type": "fn()"
		    },
		    "within": {
		     "!type": "fn()"
		    },
		    "mapLinear": {
		     "!type": "fn()"
		    },
		    "smoothstep": {
		     "!type": "fn()",
		     "x": {}
		    },
		    "smootherstep": {
		     "!type": "fn()",
		     "x": {}
		    },
		    "sign": {
		     "!type": "fn()"
		    },
		    "percent": {
		     "!type": "fn()",
		     "base": {}
		    },
		    "degToRad": {
		     "!type": "fn()"
		    },
		    "radToDeg": {
		     "!type": "fn()"
		    }
		   },
		   "QuadTree": {
		    "!type": "fn(x: number, y: number, width: number, height: number, maxObjects: number, maxLevels: number, level: number)",
		    "prototype": {
		     "maxObjects": {
		      "!type": "number"
		     },
		     "maxLevels": {
		      "!type": "number"
		     },
		     "level": {
		      "!type": "number"
		     },
		     "bounds": {},
		     "objects": {
		      "!type": "+array"
		     },
		     "nodes": {
		      "!type": "+array"
		     },
		     "_empty": {
		      "!type": "+array"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "populate": {
		      "!type": "fn()"
		     },
		     "populateHandler": {
		      "!type": "fn()"
		     },
		     "split": {
		      "!type": "fn()"
		     },
		     "insert": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn()"
		     },
		     "retrieve": {
		      "!type": "fn()"
		     },
		     "clear": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "QuadTree#reset": {
		    "prototype": {
		     "maxObjects": {},
		     "maxLevels": {},
		     "level": {},
		     "bounds": {}
		    }
		   },
		   "QuadTree#reset#bounds": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "subWidth": {},
		    "subHeight": {},
		    "right": {},
		    "bottom": {}
		   },
		   "QuadTree#reset#objects": {
		    "length": {}
		   },
		   "QuadTree#reset#nodes": {
		    "length": {}
		   },
		   "QuadTree#split": {
		    "prototype": {
		     "nodes[0]": {},
		     "nodes[1]": {},
		     "nodes[2]": {},
		     "nodes[3]": {}
		    }
		   },
		   "QuadTree#insert": {
		    "i": {},
		    "index": {}
		   },
		   "QuadTree#getIndex": {
		    "index": {}
		   },
		   "QuadTree#retrieve": {
		    "returnObjects": {},
		    "index": {}
		   },
		   "QuadTree#clear#objects": {
		    "length": {}
		   },
		   "QuadTree#clear": {
		    "i": {}
		   },
		   "QuadTree#clear#nodes": {
		    "length": {}
		   },
		   "RandomDataGenerator": {
		    "!type": "fn(seeds: [?])",
		    "seeds": {},
		    "prototype": {
		     "c": {
		      "!type": "number"
		     },
		     "s0": {
		      "!type": "number"
		     },
		     "s1": {
		      "!type": "number"
		     },
		     "s2": {
		      "!type": "number"
		     },
		     "rnd": {
		      "!type": "fn()"
		     },
		     "sow": {
		      "!type": "fn()"
		     },
		     "hash": {
		      "!type": "fn()"
		     },
		     "integer": {
		      "!type": "fn()"
		     },
		     "frac": {
		      "!type": "fn()"
		     },
		     "real": {
		      "!type": "fn()"
		     },
		     "integerInRange": {
		      "!type": "fn()"
		     },
		     "between": {
		      "!type": "fn()"
		     },
		     "realInRange": {
		      "!type": "fn()"
		     },
		     "normal": {
		      "!type": "fn()"
		     },
		     "uuid": {
		      "!type": "fn()"
		     },
		     "pick": {
		      "!type": "fn()"
		     },
		     "weightedPick": {
		      "!type": "fn()"
		     },
		     "timestamp": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "RandomDataGenerator#rnd": {
		    "t": {},
		    "prototype": {
		     "c": {},
		     "s0": {},
		     "s1": {},
		     "s2": {}
		    }
		   },
		   "RandomDataGenerator#sow": {
		    "prototype": {
		     "s0": {},
		     "s1": {},
		     "s2": {},
		     "c": {}
		    },
		    "i": {},
		    "seed": {}
		   },
		   "RandomDataGenerator#hash": {
		    "h": {},
		    "i": {},
		    "n": {},
		    "data": {}
		   },
		   "RandomDataGenerator#uuid": {
		    "a": {},
		    "b": {}
		   },
		   "Net": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {},
		     "getHostName": {
		      "!type": "fn()"
		     },
		     "checkDomainName": {
		      "!type": "fn()"
		     },
		     "updateQueryString": {
		      "!type": "fn()"
		     },
		     "getQueryString": {
		      "!type": "fn()"
		     },
		     "decodeURI": {
		      "!type": "fn()"
		     },
		     "isDisabled": {}
		    }
		   },
		   "Net#updateQueryString": {
		    "redirect": {},
		    "url": {},
		    "output": {},
		    "re": {},
		    "separator": {},
		    "hash": {}
		   },
		   "Net#getQueryString": {
		    "parameter": {},
		    "output": {},
		    "keyValues": {},
		    "i": {},
		    "key": {}
		   },
		   "Net#getQueryString~output": {
		    "undefined]": {}
		   },
		   "Particles": {
		    "Arcade": {
		     "!type": "fn()",
		     "Emitter": {
		      "!type": "fn(game: +Phaser.Game, x: number, y: number, maxParticles: number)",
		      "prototype": {
		       "maxParticles": {
		        "!type": "number"
		       },
		       "name": {
		        "!type": "string"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "physicsType": {
		        "!type": "number"
		       },
		       "area": {
		        "!type": "+Phaser.Rectangle"
		       },
		       "minParticleSpeed": {
		        "!type": "+Phaser.Point"
		       },
		       "maxParticleSpeed": {
		        "!type": "+Phaser.Point"
		       },
		       "minParticleScale": {
		        "!type": "number"
		       },
		       "maxParticleScale": {
		        "!type": "number"
		       },
		       "scaleData": {
		        "!type": "+array"
		       },
		       "minRotation": {
		        "!type": "number"
		       },
		       "maxRotation": {
		        "!type": "number"
		       },
		       "minParticleAlpha": {
		        "!type": "number"
		       },
		       "maxParticleAlpha": {
		        "!type": "number"
		       },
		       "alphaData": {
		        "!type": "+array"
		       },
		       "gravity": {
		        "!type": "number"
		       },
		       "particleClass": {
		        "!type": "+any"
		       },
		       "particleDrag": {
		        "!type": "+Phaser.Point"
		       },
		       "angularDrag": {
		        "!type": "number"
		       },
		       "frequency": {
		        "!type": "number"
		       },
		       "lifespan": {
		        "!type": "number"
		       },
		       "bounce": {
		        "!type": "+Phaser.Point"
		       },
		       "on": {
		        "!type": "bool"
		       },
		       "particleAnchor": {
		        "!type": "+Phaser.Point"
		       },
		       "blendMode": {
		        "!type": "number"
		       },
		       "emitX": {
		        "!type": "number"
		       },
		       "emitY": {
		        "!type": "number"
		       },
		       "autoScale": {
		        "!type": "bool"
		       },
		       "autoAlpha": {
		        "!type": "bool"
		       },
		       "particleBringToTop": {
		        "!type": "bool"
		       },
		       "particleSendToBack": {
		        "!type": "bool"
		       },
		       "_minParticleScale": {
		        "!type": "+Phaser.Point"
		       },
		       "_maxParticleScale": {
		        "!type": "+Phaser.Point"
		       },
		       "_quantity": {
		        "!type": "number"
		       },
		       "_timer": {
		        "!type": "number"
		       },
		       "_counter": {
		        "!type": "number"
		       },
		       "_flowQuantity": {
		        "!type": "number"
		       },
		       "_flowTotal": {
		        "!type": "number"
		       },
		       "_explode": {
		        "!type": "bool"
		       },
		       "_frames": {
		        "!type": "+any"
		       },
		       "update": {
		        "!type": "fn()"
		       },
		       "makeParticles": {
		        "!type": "fn()"
		       },
		       "kill": {
		        "!type": "fn()"
		       },
		       "revive": {
		        "!type": "fn()"
		       },
		       "explode": {
		        "!type": "fn()"
		       },
		       "flow": {
		        "!type": "fn()"
		       },
		       "start": {
		        "!type": "fn()"
		       },
		       "emitParticle": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "setSize": {
		        "!type": "fn()"
		       },
		       "setXSpeed": {
		        "!type": "fn()"
		       },
		       "setYSpeed": {
		        "!type": "fn()"
		       },
		       "setRotation": {
		        "!type": "fn()"
		       },
		       "setAlpha": {
		        "!type": "fn()"
		       },
		       "setScale": {
		        "!type": "fn()"
		       },
		       "at": {
		        "!type": "fn()"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "left": {
		        "!type": "number"
		       },
		       "right": {
		        "!type": "number"
		       },
		       "top": {
		        "!type": "number"
		       },
		       "bottom": {
		        "!type": "number"
		       },
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "z": {
		        "!type": "number"
		       },
		       "alive": {
		        "!type": "bool"
		       },
		       "exists": {
		        "!type": "bool"
		       },
		       "ignoreDestroy": {
		        "!type": "bool"
		       },
		       "pendingDestroy": {
		        "!type": "bool"
		       },
		       "classType": {},
		       "cursor": {
		        "!type": "+DisplayObject"
		       },
		       "enableBody": {
		        "!type": "bool"
		       },
		       "enableBodyDebug": {
		        "!type": "bool"
		       },
		       "physicsBodyType": {
		        "!type": "number"
		       },
		       "physicsSortDirection": {
		        "!type": "number"
		       },
		       "onDestroy": {
		        "!type": "+Phaser.Signal"
		       },
		       "cursorIndex": {
		        "!type": "number"
		       },
		       "fixedToCamera": {
		        "!type": "bool"
		       },
		       "cameraOffset": {
		        "!type": "+Phaser.Point"
		       },
		       "hash": {
		        "!type": "+array"
		       },
		       "_sortProperty": {
		        "!type": "string"
		       },
		       "add": {
		        "!type": "fn(child: +DisplayObject, silent: bool) -> ?"
		       },
		       "addToHash": {
		        "!type": "fn(child: +DisplayObject) -> ?"
		       },
		       "removeFromHash": {
		        "!type": "fn(child: +DisplayObject) -> ?"
		       },
		       "addMultiple": {
		        "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> ?"
		       },
		       "addAt": {
		        "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> ?"
		       },
		       "getAt": {
		        "!type": "fn(index: number) -> ?"
		       },
		       "create": {
		        "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> ?"
		       },
		       "createMultiple": {
		        "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		       },
		       "updateZ": {
		        "!type": "fn()"
		       },
		       "resetCursor": {
		        "!type": "fn(index: number) -> ?"
		       },
		       "next": {
		        "!type": "fn() -> ?"
		       },
		       "previous": {
		        "!type": "fn() -> ?"
		       },
		       "swap": {
		        "!type": "fn(child1: +any, child2: +any)"
		       },
		       "bringToTop": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "sendToBack": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "moveUp": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "moveDown": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "xy": {
		        "!type": "fn(index: number, x: number, y: number)"
		       },
		       "reverse": {
		        "!type": "fn()"
		       },
		       "getIndex": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "replace": {
		        "!type": "fn(oldChild: +any, newChild: +any) -> ?"
		       },
		       "hasProperty": {
		        "!type": "fn(child: +any, key: [?]) -> ?"
		       },
		       "setProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> ?"
		       },
		       "checkProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> ?"
		       },
		       "set": {
		        "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> ?"
		       },
		       "setAll": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		       },
		       "setAllChildren": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		       },
		       "checkAll": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		       },
		       "addAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "subAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "multiplyAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "divideAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "callAllExists": {
		        "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		       },
		       "callbackFromArray": {
		        "!type": "fn(child: ?, callback: +array, length: number)"
		       },
		       "callAll": {
		        "!type": "fn(method: string, context: string, args: +any)"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "filter": {
		        "!type": "fn(predicate: +function, checkExists: bool) -> ?"
		       },
		       "forEach": {
		        "!type": "fn(callback: +function, callbackContext: ?, checkExists: bool, args: +any)"
		       },
		       "forEachExists": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "forEachAlive": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "forEachDead": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "sort": {
		        "!type": "fn(key: string, order: number)"
		       },
		       "customSort": {
		        "!type": "fn(sortHandler: +function, context: ?)"
		       },
		       "ascendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "descendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "iterate": {
		        "!type": "fn(key: string, value: +any, returnType: number, callback: +function, callbackContext: ?, args: [?]) -> ?"
		       },
		       "getFirstExists": {
		        "!type": "fn(exists: bool) -> ?"
		       },
		       "getFirstAlive": {
		        "!type": "fn() -> ?"
		       },
		       "getFirstDead": {
		        "!type": "fn() -> ?"
		       },
		       "getTop": {
		        "!type": "fn() -> ?"
		       },
		       "getBottom": {
		        "!type": "fn() -> ?"
		       },
		       "countLiving": {
		        "!type": "fn() -> ?"
		       },
		       "countDead": {
		        "!type": "fn() -> ?"
		       },
		       "getRandom": {
		        "!type": "fn(startIndex: number, length: number) -> ?"
		       },
		       "remove": {
		        "!type": "fn(child: +any, destroy: bool, silent: bool) -> ?"
		       },
		       "moveAll": {
		        "!type": "fn(group: +Phaser.Group, silent: bool) -> ?"
		       },
		       "removeAll": {
		        "!type": "fn(destroy: bool, silent: bool)"
		       },
		       "removeBetween": {
		        "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		       },
		       "total": {
		        "!type": "number"
		       },
		       "length": {
		        "!type": "number"
		       },
		       "angle": {
		        "!type": "number"
		       },
		       "rotation": {
		        "!type": "number"
		       },
		       "visible": {
		        "!type": "bool"
		       },
		       "alpha": {
		        "!type": "number"
		       },
		       "children": {}
		      }
		     },
		     "Emitter#update": {
		      "prototype": {
		       "_timer": {},
		       "on": {}
		      },
		      "i": {}
		     },
		     "Emitter#makeParticles": {
		      "frames": {},
		      "quantity": {},
		      "collide": {},
		      "collideWorldBounds": {},
		      "particle": {},
		      "i": {},
		      "rndKey": {},
		      "rndFrame": {},
		      "prototype": {
		       "_frames": {},
		       "maxParticles": {}
		      }
		     },
		     "Emitter#makeParticles~particle": {
		      "body.checkCollision.any": {},
		      "body.checkCollision.none": {},
		      "body.collideWorldBounds": {},
		      "body.skipQuadTree": {},
		      "exists": {},
		      "visible": {}
		     },
		     "Emitter#kill": {
		      "prototype": {
		       "on": {},
		       "alive": {},
		       "exists": {}
		      }
		     },
		     "Emitter#revive": {
		      "prototype": {
		       "alive": {},
		       "exists": {}
		      }
		     },
		     "Emitter#explode": {
		      "prototype": {
		       "_flowTotal": {}
		      }
		     },
		     "Emitter#flow": {
		      "quantity": {},
		      "total": {},
		      "immediate": {},
		      "prototype": {
		       "_counter": {},
		       "_flowQuantity": {},
		       "_flowTotal": {},
		       "on": {},
		       "_timer": {}
		      }
		     },
		     "Emitter#start": {
		      "explode": {},
		      "lifespan": {},
		      "frequency": {},
		      "quantity": {},
		      "forceQuantity": {},
		      "prototype": {
		       "visible": {},
		       "lifespan": {},
		       "frequency": {},
		       "on": {},
		       "_quantity": {},
		       "_counter": {},
		       "_timer": {}
		      },
		      "i": {}
		     },
		     "Emitter#emitParticle": {
		      "particle": {}
		     },
		     "Emitter#emitParticle~particle": {
		      "angle": {},
		      "lifespan": {},
		      "frame": {},
		      "alpha": {},
		      "blendMode": {},
		      "body.velocity.x": {},
		      "body.velocity.y": {},
		      "body.angularVelocity": {},
		      "body.gravity.y": {},
		      "body.drag.x": {},
		      "body.drag.y": {},
		      "body.angularDrag": {}
		     },
		     "Emitter#setSize#area": {
		      "width": {},
		      "height": {}
		     },
		     "Emitter#setXSpeed": {
		      "min": {},
		      "max": {}
		     },
		     "Emitter#setXSpeed#minParticleSpeed": {
		      "x": {}
		     },
		     "Emitter#setXSpeed#maxParticleSpeed": {
		      "x": {}
		     },
		     "Emitter#setYSpeed": {
		      "min": {},
		      "max": {}
		     },
		     "Emitter#setYSpeed#minParticleSpeed": {
		      "y": {}
		     },
		     "Emitter#setYSpeed#maxParticleSpeed": {
		      "y": {}
		     },
		     "Emitter#setRotation": {
		      "min": {},
		      "max": {},
		      "prototype": {
		       "minRotation": {},
		       "maxRotation": {}
		      }
		     },
		     "Emitter#setAlpha": {
		      "min": {},
		      "max": {},
		      "rate": {},
		      "ease": {},
		      "yoyo": {},
		      "prototype": {
		       "minParticleAlpha": {},
		       "maxParticleAlpha": {},
		       "autoAlpha": {},
		       "alphaData": {}
		      },
		      "tweenData": {},
		      "tween": {}
		     },
		     "Emitter#setAlpha~tweenData": {
		      "v": {}
		     },
		     "Emitter#setScale": {
		      "minX": {},
		      "maxX": {},
		      "minY": {},
		      "maxY": {},
		      "rate": {},
		      "ease": {},
		      "yoyo": {},
		      "prototype": {
		       "minParticleScale": {},
		       "maxParticleScale": {},
		       "autoScale": {},
		       "scaleData": {}
		      },
		      "tweenData": {},
		      "tween": {}
		     },
		     "Emitter#setScale~tweenData": {
		      "x": {},
		      "y": {}
		     },
		     "Emitter#at": {
		      "prototype": {
		       "emitX": {},
		       "emitY": {}
		      }
		     }
		    },
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "emitters": {},
		     "ID": {
		      "!type": "number"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Particles#add": {
		    "prototype": {
		     "emitters[undefined]": {}
		    }
		   },
		   "Particles#update": {
		    "key": {}
		   },
		   "Physics": {
		    "Arcade": {
		     "Body": {
		      "!type": "fn(sprite: +Phaser.Sprite)",
		      "prototype": {
		       "sprite": {
		        "!type": "+Phaser.Sprite"
		       },
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "enable": {
		        "!type": "bool"
		       },
		       "offset": {
		        "!type": "+Phaser.Point"
		       },
		       "position": {
		        "!type": "+Phaser.Point"
		       },
		       "prev": {
		        "!type": "+Phaser.Point"
		       },
		       "allowRotation": {
		        "!type": "bool"
		       },
		       "rotation": {
		        "!type": "number"
		       },
		       "preRotation": {
		        "!type": "number"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "sourceWidth": {
		        "!type": "number"
		       },
		       "sourceHeight": {
		        "!type": "number"
		       },
		       "halfWidth": {
		        "!type": "number"
		       },
		       "halfHeight": {
		        "!type": "number"
		       },
		       "center": {
		        "!type": "+Phaser.Point"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "newVelocity": {
		        "!type": "+Phaser.Point"
		       },
		       "deltaMax": {
		        "!type": "+Phaser.Point"
		       },
		       "acceleration": {
		        "!type": "+Phaser.Point"
		       },
		       "drag": {
		        "!type": "+Phaser.Point"
		       },
		       "allowGravity": {
		        "!type": "bool"
		       },
		       "gravity": {
		        "!type": "+Phaser.Point"
		       },
		       "bounce": {
		        "!type": "+Phaser.Point"
		       },
		       "maxVelocity": {
		        "!type": "+Phaser.Point"
		       },
		       "friction": {
		        "!type": "+Phaser.Point"
		       },
		       "angularVelocity": {
		        "!type": "number"
		       },
		       "angularAcceleration": {
		        "!type": "number"
		       },
		       "angularDrag": {
		        "!type": "number"
		       },
		       "maxAngular": {
		        "!type": "number"
		       },
		       "mass": {
		        "!type": "number"
		       },
		       "angle": {
		        "!type": "number"
		       },
		       "speed": {
		        "!type": "number"
		       },
		       "facing": {
		        "!type": "number"
		       },
		       "immovable": {
		        "!type": "bool"
		       },
		       "moves": {
		        "!type": "bool"
		       },
		       "customSeparateX": {
		        "!type": "bool"
		       },
		       "customSeparateY": {
		        "!type": "bool"
		       },
		       "overlapX": {
		        "!type": "number"
		       },
		       "overlapY": {
		        "!type": "number"
		       },
		       "embedded": {
		        "!type": "bool"
		       },
		       "collideWorldBounds": {
		        "!type": "bool"
		       },
		       "checkCollision": {},
		       "touching": {},
		       "wasTouching": {},
		       "blocked": {},
		       "tilePadding": {
		        "!type": "+Phaser.Point"
		       },
		       "dirty": {
		        "!type": "bool"
		       },
		       "skipQuadTree": {
		        "!type": "bool"
		       },
		       "syncBounds": {
		        "!type": "bool"
		       },
		       "_reset": {
		        "!type": "bool"
		       },
		       "_sx": {
		        "!type": "number"
		       },
		       "_sy": {
		        "!type": "number"
		       },
		       "_dx": {
		        "!type": "number"
		       },
		       "_dy": {
		        "!type": "number"
		       },
		       "updateBounds": {
		        "!type": "fn()"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "checkWorldBounds": {
		        "!type": "fn()"
		       },
		       "setSize": {
		        "!type": "fn()"
		       },
		       "reset": {
		        "!type": "fn()"
		       },
		       "hitTest": {
		        "!type": "fn()"
		       },
		       "onFloor": {
		        "!type": "fn()"
		       },
		       "onWall": {
		        "!type": "fn()"
		       },
		       "deltaAbsX": {
		        "!type": "fn()"
		       },
		       "deltaAbsY": {
		        "!type": "fn()"
		       },
		       "deltaX": {
		        "!type": "fn()"
		       },
		       "deltaY": {
		        "!type": "fn()"
		       },
		       "deltaZ": {
		        "!type": "fn()"
		       },
		       "bottom": {
		        "!type": "number"
		       },
		       "right": {
		        "!type": "number"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "render": {
		        "!type": "fn(context: ?, body: +Phaser.Physics.Arcade.Body, color: string, filled: bool)"
		       },
		       "renderBodyInfo": {
		        "!type": "fn(body: +Phaser.Physics.Arcade.Body, x: number, y: number, color: string)"
		       }
		      },
		      "render": {
		       "!type": "fn()",
		       "filled": {},
		       "color": {}
		      },
		      "renderBodyInfo": {
		       "!type": "fn()"
		      }
		     },
		     "Body#checkCollision": {
		      "none": {},
		      "any": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#touching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#wasTouching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#blocked": {
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#updateBounds": {
		      "b": {},
		      "prototype": {
		       "width": {},
		       "height": {},
		       "_reset": {},
		       "_sx": {},
		       "_sy": {},
		       "halfWidth": {},
		       "halfHeight": {}
		      },
		      "asx": {},
		      "asy": {}
		     },
		     "Body#preUpdate": {
		      "prototype": {
		       "dirty": {},
		       "embedded": {},
		       "rotation": {},
		       "preRotation": {},
		       "speed": {},
		       "angle": {},
		       "_dx": {},
		       "_dy": {},
		       "_reset": {}
		      }
		     },
		     "Body#preUpdate#wasTouching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#preUpdate#touching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#preUpdate#blocked": {
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#preUpdate#position": {
		      "x": {},
		      "y": {}
		     },
		     "Body#preUpdate#prev": {
		      "x": {},
		      "y": {}
		     },
		     "Body#postUpdate": {
		      "prototype": {
		       "dirty": {},
		       "facing": {},
		       "_dx": {},
		       "_dy": {},
		       "_reset": {}
		      }
		     },
		     "Body#postUpdate#sprite": {
		      "position": {
		       "x": {},
		       "y": {}
		      },
		      "angle": {}
		     },
		     "Body#postUpdate#prev": {
		      "x": {},
		      "y": {}
		     },
		     "Body#destroy#sprite": {
		      "body": {}
		     },
		     "Body#destroy": {
		      "prototype": {
		       "sprite": {}
		      }
		     },
		     "Body#checkWorldBounds": {
		      "pos": {},
		      "bounds": {},
		      "check": {}
		     },
		     "Body#checkWorldBounds~pos": {
		      "x": {},
		      "y": {}
		     },
		     "Body#checkWorldBounds#velocity": {
		      "x": {},
		      "y": {}
		     },
		     "Body#checkWorldBounds#blocked": {
		      "left": {},
		      "right": {},
		      "up": {},
		      "down": {}
		     },
		     "Body#setSize": {
		      "offsetX": {},
		      "offsetY": {},
		      "prototype": {
		       "sourceWidth": {},
		       "sourceHeight": {},
		       "width": {},
		       "height": {},
		       "halfWidth": {},
		       "halfHeight": {}
		      }
		     },
		     "Body#reset": {
		      "prototype": {
		       "speed": {},
		       "angularVelocity": {},
		       "angularAcceleration": {},
		       "rotation": {},
		       "preRotation": {},
		       "_sx": {},
		       "_sy": {}
		      }
		     },
		     "Body#reset#position": {
		      "x": {},
		      "y": {}
		     },
		     "Body#reset#prev": {
		      "x": {},
		      "y": {}
		     },
		     "TilemapCollision": {
		      "!type": "fn()",
		      "prototype": {
		       "TILE_BIAS": {
		        "!type": "number"
		       },
		       "collideSpriteVsTilemapLayer": {
		        "!type": "fn()"
		       },
		       "collideGroupVsTilemapLayer": {
		        "!type": "fn()"
		       },
		       "separateTile": {
		        "!type": "fn()"
		       },
		       "tileCheckX": {
		        "!type": "fn()"
		       },
		       "tileCheckY": {
		        "!type": "fn()"
		       },
		       "processTileSeparationX": {
		        "!type": "fn()"
		       },
		       "processTileSeparationY": {
		        "!type": "fn()"
		       }
		      }
		     },
		     "prototype": {
		      "collideSpriteVsTilemapLayer": {
		       "!type": "fn(sprite: +Phaser.Sprite, tilemapLayer: +Phaser.TilemapLayer, collideCallback: +function, processCallback: +function, callbackContext: ?, overlapOnly: bool)"
		      },
		      "collideGroupVsTilemapLayer": {
		       "!type": "fn(group: +Phaser.Group, tilemapLayer: +Phaser.TilemapLayer, collideCallback: +function, processCallback: +function, callbackContext: ?, overlapOnly: bool)"
		      },
		      "separateTile": {
		       "!type": "fn(body: +Phaser.Physics.Arcade.Body, tile: +Phaser.Tile) -> ?"
		      },
		      "tileCheckX": {
		       "!type": "fn(body: +Phaser.Physics.Arcade.Body, tile: +Phaser.Tile) -> ?"
		      },
		      "tileCheckY": {
		       "!type": "fn(body: +Phaser.Physics.Arcade.Body, tile: +Phaser.Tile) -> ?"
		      },
		      "processTileSeparationX": {
		       "!type": "fn(body: +Phaser.Physics.Arcade.Body, x: number)"
		      },
		      "processTileSeparationY": {
		       "!type": "fn(body: +Phaser.Physics.Arcade.Body, y: number)"
		      },
		      "game": {
		       "!type": "+Phaser.Game"
		      },
		      "gravity": {
		       "!type": "+Phaser.Point"
		      },
		      "bounds": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "checkCollision": {},
		      "maxObjects": {
		       "!type": "number"
		      },
		      "maxLevels": {
		       "!type": "number"
		      },
		      "OVERLAP_BIAS": {
		       "!type": "number"
		      },
		      "forceX": {
		       "!type": "bool"
		      },
		      "sortDirection": {
		       "!type": "number"
		      },
		      "skipQuadTree": {
		       "!type": "bool"
		      },
		      "isPaused": {
		       "!type": "bool"
		      },
		      "quadTree": {
		       "!type": "+Phaser.QuadTree"
		      },
		      "_total": {
		       "!type": "number"
		      },
		      "setBounds": {
		       "!type": "fn()"
		      },
		      "setBoundsToWorld": {
		       "!type": "fn()"
		      },
		      "enable": {
		       "!type": "fn()"
		      },
		      "enableBody": {
		       "!type": "fn()"
		      },
		      "updateMotion": {
		       "!type": "fn()"
		      },
		      "computeVelocity": {
		       "!type": "fn()"
		      },
		      "overlap": {
		       "!type": "fn()"
		      },
		      "collide": {
		       "!type": "fn()"
		      },
		      "sortLeftRight": {
		       "!type": "fn()"
		      },
		      "sortRightLeft": {
		       "!type": "fn()"
		      },
		      "sortTopBottom": {
		       "!type": "fn()"
		      },
		      "sortBottomTop": {
		       "!type": "fn()"
		      },
		      "sort": {
		       "!type": "fn()"
		      },
		      "collideHandler": {
		       "!type": "fn()"
		      },
		      "collideSpriteVsSprite": {
		       "!type": "fn()"
		      },
		      "collideSpriteVsGroup": {
		       "!type": "fn()"
		      },
		      "collideGroupVsSelf": {
		       "!type": "fn()"
		      },
		      "collideGroupVsGroup": {
		       "!type": "fn()"
		      },
		      "separate": {
		       "!type": "fn()"
		      },
		      "intersects": {
		       "!type": "fn()"
		      },
		      "separateX": {
		       "!type": "fn()"
		      },
		      "separateY": {
		       "!type": "fn()"
		      },
		      "getObjectsUnderPointer": {
		       "!type": "fn()"
		      },
		      "getObjectsAtLocation": {
		       "!type": "fn()"
		      },
		      "moveToObject": {
		       "!type": "fn()"
		      },
		      "moveToPointer": {
		       "!type": "fn()"
		      },
		      "moveToXY": {
		       "!type": "fn()"
		      },
		      "velocityFromAngle": {
		       "!type": "fn()"
		      },
		      "velocityFromRotation": {
		       "!type": "fn()"
		      },
		      "accelerationFromRotation": {
		       "!type": "fn()"
		      },
		      "accelerateToObject": {
		       "!type": "fn()"
		      },
		      "accelerateToPointer": {
		       "!type": "fn()"
		      },
		      "accelerateToXY": {
		       "!type": "fn()"
		      },
		      "distanceBetween": {
		       "!type": "fn()"
		      },
		      "distanceToXY": {
		       "!type": "fn()"
		      },
		      "distanceToPointer": {
		       "!type": "fn()"
		      },
		      "angleBetween": {
		       "!type": "fn()"
		      },
		      "angleToXY": {
		       "!type": "fn()"
		      },
		      "angleToPointer": {
		       "!type": "fn()"
		      }
		     },
		     "TilemapCollision#collideSpriteVsTilemapLayer": {
		      "mapData": {},
		      "i": {}
		     },
		     "TilemapCollision#collideGroupVsTilemapLayer": {
		      "i": {}
		     },
		     "TilemapCollision#separateTile": {
		      "ox": {},
		      "oy": {},
		      "minX": {},
		      "minY": {}
		     },
		     "TilemapCollision#tileCheckX": {
		      "ox": {}
		     },
		     "TilemapCollision#tileCheckY": {
		      "oy": {}
		     },
		     "!type": "fn(game: +Phaser.Game)",
		     "SORT_NONE": {
		      "!type": "number"
		     },
		     "LEFT_RIGHT": {
		      "!type": "number"
		     },
		     "RIGHT_LEFT": {
		      "!type": "number"
		     },
		     "TOP_BOTTOM": {
		      "!type": "number"
		     },
		     "BOTTOM_TOP": {
		      "!type": "number"
		     }
		    },
		    "Arcade#checkCollision": {
		     "up": {},
		     "down": {},
		     "left": {},
		     "right": {}
		    },
		    "Arcade#enable": {
		     "children": {},
		     "i": {}
		    },
		    "Arcade#updateMotion": {
		     "velocityDelta": {}
		    },
		    "Arcade#computeVelocity": {
		     "max": {},
		     "velocity": {},
		     "drag": {}
		    },
		    "Arcade#overlap": {
		     "overlapCallback": {},
		     "processCallback": {},
		     "callbackContext": {},
		     "prototype": {
		      "_total": {}
		     },
		     "i": {},
		     "j": {}
		    },
		    "Arcade#collide": {
		     "collideCallback": {},
		     "processCallback": {},
		     "callbackContext": {},
		     "prototype": {
		      "_total": {}
		     },
		     "i": {},
		     "j": {}
		    },
		    "Arcade#sort": {
		     "sortDirection": {}
		    },
		    "Arcade#collideSpriteVsGroup": {
		     "body": {},
		     "i": {},
		     "items": {}
		    },
		    "Arcade#collideGroupVsSelf": {
		     "i": {},
		     "object1": {},
		     "j": {},
		     "object2": {}
		    },
		    "Arcade#collideGroupVsGroup": {
		     "i": {}
		    },
		    "Arcade#separate": {
		     "result": {}
		    },
		    "Arcade#separateX": {
		     "overlap": {},
		     "maxOverlap": {},
		     "v1": {},
		     "v2": {},
		     "nv1": {},
		     "nv2": {},
		     "avg": {}
		    },
		    "Arcade#separateY": {
		     "overlap": {},
		     "maxOverlap": {},
		     "v1": {},
		     "v2": {},
		     "nv1": {},
		     "nv2": {},
		     "avg": {}
		    },
		    "Arcade#getObjectsAtLocation": {
		     "rect": {},
		     "output": {},
		     "items": {},
		     "i": {}
		    },
		    "Arcade#moveToObject": {
		     "speed": {},
		     "maxTime": {},
		     "angle": {}
		    },
		    "Arcade#moveToPointer": {
		     "speed": {},
		     "pointer": {},
		     "maxTime": {},
		     "angle": {}
		    },
		    "Arcade#moveToXY": {
		     "speed": {},
		     "maxTime": {},
		     "angle": {}
		    },
		    "Arcade#velocityFromAngle": {
		     "speed": {},
		     "point": {}
		    },
		    "Arcade#velocityFromRotation": {
		     "speed": {},
		     "point": {}
		    },
		    "Arcade#accelerationFromRotation": {
		     "speed": {},
		     "point": {}
		    },
		    "Arcade#accelerateToObject": {
		     "speed": {},
		     "xSpeedMax": {},
		     "ySpeedMax": {},
		     "angle": {}
		    },
		    "Arcade#accelerateToPointer": {
		     "speed": {},
		     "pointer": {},
		     "xSpeedMax": {},
		     "ySpeedMax": {},
		     "angle": {}
		    },
		    "Arcade#accelerateToXY": {
		     "speed": {},
		     "xSpeedMax": {},
		     "ySpeedMax": {},
		     "angle": {}
		    },
		    "Arcade#distanceBetween": {
		     "dx": {},
		     "dy": {}
		    },
		    "Arcade#distanceToXY": {
		     "dx": {},
		     "dy": {}
		    },
		    "Arcade#distanceToPointer": {
		     "pointer": {},
		     "dx": {},
		     "dy": {}
		    },
		    "Arcade#angleBetween": {
		     "dx": {},
		     "dy": {}
		    },
		    "Arcade#angleToXY": {
		     "dx": {},
		     "dy": {}
		    },
		    "Arcade#angleToPointer": {
		     "pointer": {},
		     "dx": {},
		     "dy": {}
		    },
		    "Ninja": {
		     "AABB": {
		      "!type": "fn(body: +Phaser.Physics.Ninja.Body, x: number, y: number, width: number, height: number)",
		      "prototype": {
		       "body": {
		        "!type": "+Phaser.Physics.Ninja.Body"
		       },
		       "system": {
		        "!type": "+Phaser.Physics.Ninja"
		       },
		       "pos": {
		        "!type": "+Phaser.Point"
		       },
		       "oldpos": {
		        "!type": "+Phaser.Point"
		       },
		       "xw": {
		        "!type": "number"
		       },
		       "yw": {
		        "!type": "number"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "oH": {
		        "!type": "number"
		       },
		       "oV": {
		        "!type": "number"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "aabbTileProjections": {},
		       "aabbTileProjections[undefined]": {},
		       "integrate": {
		        "!type": "fn()"
		       },
		       "reportCollision": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsWorld": {
		        "!type": "fn()"
		       },
		       "reverse": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsBody": {
		        "!type": "fn()"
		       },
		       "collideWorldBounds": {
		        "!type": "fn()"
		       },
		       "collideAABBVsAABB": {
		        "!type": "fn()"
		       },
		       "collideAABBVsTile": {
		        "!type": "fn()"
		       },
		       "resolveTile": {
		        "!type": "fn()"
		       },
		       "projAABB_Full": {
		        "!type": "fn()"
		       },
		       "projAABB_Half": {
		        "!type": "fn()"
		       },
		       "projAABB_45Deg": {
		        "!type": "fn()"
		       },
		       "projAABB_22DegS": {
		        "!type": "fn()"
		       },
		       "projAABB_22DegB": {
		        "!type": "fn()"
		       },
		       "projAABB_67DegS": {
		        "!type": "fn()"
		       },
		       "projAABB_67DegB": {
		        "!type": "fn()"
		       },
		       "projAABB_Convex": {
		        "!type": "fn()"
		       },
		       "projAABB_Concave": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "render": {
		        "!type": "fn()"
		       }
		      },
		      "COL_NONE": {},
		      "COL_AXIS": {},
		      "COL_OTHER": {}
		     },
		     "AABB#integrate": {
		      "px": {},
		      "py": {}
		     },
		     "AABB#integrate#pos": {
		      "x": {},
		      "y": {}
		     },
		     "AABB#reportCollision": {
		      "p": {},
		      "o": {},
		      "vx": {},
		      "vy": {},
		      "dp": {},
		      "nx": {},
		      "ny": {},
		      "tx": {},
		      "ty": {},
		      "b": {},
		      "bx": {},
		      "by": {},
		      "fx": {},
		      "fy": {}
		     },
		     "AABB#reportCollision#body": {
		      "touching": {
		       "left": {},
		       "right": {},
		       "up": {},
		       "down": {}
		      }
		     },
		     "AABB#reportCollision~bx": {
		      "fx": {}
		     },
		     "AABB#reportCollision~by": {
		      "fy": {}
		     },
		     "AABB#reportCollision~p": {
		      "x": {},
		      "y": {}
		     },
		     "AABB#reportCollision~o": {
		      "x": {},
		      "y": {}
		     },
		     "AABB#reverse": {
		      "vx": {},
		      "vy": {}
		     },
		     "AABB#reverse#oldpos": {
		      "x": {},
		      "y": {}
		     },
		     "AABB#reportCollisionVsBody": {
		      "px": {},
		      "py": {}
		     },
		     "AABB#collideWorldBounds": {
		      "dx": {},
		      "dy": {}
		     },
		     "AABB#collideAABBVsAABB": {
		      "pos": {},
		      "c": {},
		      "tx": {},
		      "ty": {},
		      "txw": {},
		      "tyw": {},
		      "dx": {},
		      "px": {},
		      "dy": {},
		      "py": {},
		      "l": {}
		     },
		     "AABB#collideAABBVsTile": {
		      "dx": {},
		      "px": {},
		      "dy": {},
		      "py": {}
		     },
		     "AABB#projAABB_Full": {
		      "l": {}
		     },
		     "AABB#projAABB_Half": {
		      "sx": {},
		      "sy": {},
		      "ox": {},
		      "oy": {},
		      "dp": {},
		      "lenN": {},
		      "lenP": {}
		     },
		     "AABB#projAABB_45Deg": {
		      "signx": {},
		      "signy": {},
		      "ox": {},
		      "oy": {},
		      "sx": {},
		      "sy": {},
		      "dp": {},
		      "lenN": {},
		      "lenP": {}
		     },
		     "AABB#projAABB_22DegS": {
		      "signx": {},
		      "signy": {},
		      "py": {},
		      "penY": {},
		      "ox": {},
		      "oy": {},
		      "sx": {},
		      "sy": {},
		      "dp": {},
		      "lenN": {},
		      "lenP": {},
		      "aY": {}
		     },
		     "AABB#projAABB_22DegB": {
		      "signx": {},
		      "signy": {},
		      "ox": {},
		      "oy": {},
		      "sx": {},
		      "sy": {},
		      "dp": {},
		      "lenN": {},
		      "lenP": {}
		     },
		     "AABB#projAABB_67DegS": {
		      "signx": {},
		      "signy": {},
		      "px": {},
		      "penX": {},
		      "ox": {},
		      "oy": {},
		      "sx": {},
		      "sy": {},
		      "dp": {},
		      "lenN": {},
		      "lenP": {},
		      "aX": {}
		     },
		     "AABB#projAABB_67DegB": {
		      "signx": {},
		      "signy": {},
		      "ox": {},
		      "oy": {},
		      "sx": {},
		      "sy": {},
		      "dp": {},
		      "lenN": {},
		      "lenP": {}
		     },
		     "AABB#projAABB_Convex": {
		      "signx": {},
		      "signy": {},
		      "ox": {},
		      "oy": {},
		      "len": {},
		      "twid": {},
		      "rad": {},
		      "pen": {},
		      "lenP": {}
		     },
		     "AABB#projAABB_Concave": {
		      "signx": {},
		      "signy": {},
		      "ox": {},
		      "oy": {},
		      "twid": {},
		      "rad": {},
		      "len": {},
		      "pen": {},
		      "lenP": {}
		     },
		     "AABB#destroy": {
		      "prototype": {
		       "body": {},
		       "system": {}
		      }
		     },
		     "AABB#render": {
		      "left": {},
		      "top": {}
		     },
		     "Body": {
		      "!type": "fn(system: +Phaser.Physics.Ninja, sprite: +Phaser.Sprite, type: number, id: number, radius: number, x: number, y: number, width: number, height: number)",
		      "sprite": {},
		      "type": {},
		      "id": {},
		      "radius": {},
		      "prototype": {
		       "sprite": {
		        "!type": "+Phaser.Sprite"
		       },
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "system": {
		        "!type": "+Phaser.Physics.Ninja"
		       },
		       "aabb": {
		        "!type": "+Phaser.Physics.Ninja.AABB"
		       },
		       "tile": {
		        "!type": "+Phaser.Physics.Ninja.Tile"
		       },
		       "circle": {
		        "!type": "+Phaser.Physics.Ninja.Circle"
		       },
		       "shape": {},
		       "drag": {
		        "!type": "number"
		       },
		       "friction": {
		        "!type": "number"
		       },
		       "gravityScale": {
		        "!type": "number"
		       },
		       "bounce": {
		        "!type": "number"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "facing": {
		        "!type": "number"
		       },
		       "immovable": {
		        "!type": "bool"
		       },
		       "collideWorldBounds": {
		        "!type": "bool"
		       },
		       "checkCollision": {},
		       "touching": {},
		       "wasTouching": {},
		       "maxSpeed": {
		        "!type": "number"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "setZeroVelocity": {
		        "!type": "fn()"
		       },
		       "moveTo": {
		        "!type": "fn()"
		       },
		       "moveFrom": {
		        "!type": "fn()"
		       },
		       "moveLeft": {
		        "!type": "fn()"
		       },
		       "moveRight": {
		        "!type": "fn()"
		       },
		       "moveUp": {
		        "!type": "fn()"
		       },
		       "moveDown": {
		        "!type": "fn()"
		       },
		       "reset": {
		        "!type": "fn()"
		       },
		       "deltaAbsX": {
		        "!type": "fn()"
		       },
		       "deltaAbsY": {
		        "!type": "fn()"
		       },
		       "deltaX": {
		        "!type": "fn()"
		       },
		       "deltaY": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "bottom": {
		        "!type": "number"
		       },
		       "right": {
		        "!type": "number"
		       },
		       "speed": {
		        "!type": "number"
		       },
		       "angle": {
		        "!type": "number"
		       },
		       "render": {
		        "!type": "fn(context: ?, body: +Phaser.Physics.Ninja.Body, color: string, filled: bool)"
		       }
		      },
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {},
		      "render": {
		       "!type": "fn()",
		       "color": {},
		       "filled": {}
		      }
		     },
		     "Body#checkCollision": {
		      "none": {},
		      "any": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#touching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#wasTouching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#preUpdate#wasTouching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#preUpdate#touching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#postUpdate#sprite": {
		      "x": {},
		      "y": {}
		     },
		     "Body#postUpdate": {
		      "prototype": {
		       "facing": {}
		      }
		     },
		     "Body#setZeroVelocity#shape": {
		      "oldpos": {
		       "x": {},
		       "y": {}
		      }
		     },
		     "Body#moveTo": {
		      "magnitude": {},
		      "angle": {}
		     },
		     "Body#moveTo#shape": {
		      "pos": {
		       "x": {},
		       "y": {}
		      }
		     },
		     "Body#moveFrom": {
		      "magnitude": {},
		      "angle": {}
		     },
		     "Body#moveFrom#shape": {
		      "pos": {
		       "x": {},
		       "y": {}
		      }
		     },
		     "Body#moveLeft": {
		      "fx": {}
		     },
		     "Body#moveLeft#shape": {
		      "pos": {
		       "x": {}
		      }
		     },
		     "Body#moveRight": {
		      "fx": {}
		     },
		     "Body#moveRight#shape": {
		      "pos": {
		       "x": {}
		      }
		     },
		     "Body#moveUp": {
		      "fx": {}
		     },
		     "Body#moveUp#shape": {
		      "pos": {
		       "y": {}
		      }
		     },
		     "Body#moveDown": {
		      "fx": {}
		     },
		     "Body#moveDown#shape": {
		      "pos": {
		       "y": {}
		      }
		     },
		     "Body#reset#shape": {
		      "pos": {
		       "x": {},
		       "y": {}
		      }
		     },
		     "Body#destroy": {
		      "prototype": {
		       "sprite": {},
		       "system": {},
		       "aabb": {},
		       "tile": {},
		       "circle": {},
		       "shape": {}
		      }
		     },
		     "Circle": {
		      "!type": "fn(body: +Phaser.Physics.Ninja.Body, x: number, y: number, radius: number)",
		      "prototype": {
		       "body": {
		        "!type": "+Phaser.Physics.Ninja.Body"
		       },
		       "system": {
		        "!type": "+Phaser.Physics.Ninja"
		       },
		       "pos": {
		        "!type": "+Phaser.Point"
		       },
		       "oldpos": {
		        "!type": "+Phaser.Point"
		       },
		       "radius": {
		        "!type": "number"
		       },
		       "xw": {
		        "!type": "number"
		       },
		       "yw": {
		        "!type": "number"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "oH": {
		        "!type": "number"
		       },
		       "oV": {
		        "!type": "number"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "circleTileProjections": {},
		       "circleTileProjections[undefined]": {},
		       "integrate": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsWorld": {
		        "!type": "fn()"
		       },
		       "collideWorldBounds": {
		        "!type": "fn()"
		       },
		       "collideCircleVsTile": {
		        "!type": "fn()"
		       },
		       "resolveCircleTile": {
		        "!type": "fn()"
		       },
		       "projCircle_Full": {
		        "!type": "fn()"
		       },
		       "projCircle_45Deg": {
		        "!type": "fn()"
		       },
		       "projCircle_Concave": {
		        "!type": "fn()"
		       },
		       "projCircle_Convex": {
		        "!type": "fn()"
		       },
		       "projCircle_Half": {
		        "!type": "fn()"
		       },
		       "projCircle_22DegS": {
		        "!type": "fn()"
		       },
		       "projCircle_22DegB": {
		        "!type": "fn()"
		       },
		       "projCircle_67DegS": {
		        "!type": "fn()"
		       },
		       "projCircle_67DegB": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "render": {
		        "!type": "fn()"
		       }
		      },
		      "COL_NONE": {},
		      "COL_AXIS": {},
		      "COL_OTHER": {}
		     },
		     "Circle#integrate": {
		      "px": {},
		      "py": {}
		     },
		     "Circle#integrate#pos": {
		      "x": {},
		      "y": {}
		     },
		     "Circle#reportCollisionVsWorld": {
		      "p": {},
		      "o": {},
		      "vx": {},
		      "vy": {},
		      "dp": {},
		      "nx": {},
		      "ny": {},
		      "tx": {},
		      "ty": {},
		      "b": {},
		      "bx": {},
		      "by": {},
		      "fx": {},
		      "fy": {}
		     },
		     "Circle#reportCollisionVsWorld#body": {
		      "touching": {
		       "left": {},
		       "right": {},
		       "up": {},
		       "down": {}
		      }
		     },
		     "Circle#reportCollisionVsWorld~bx": {
		      "fx": {}
		     },
		     "Circle#reportCollisionVsWorld~by": {
		      "fy": {}
		     },
		     "Circle#reportCollisionVsWorld~p": {
		      "x": {},
		      "y": {}
		     },
		     "Circle#reportCollisionVsWorld~o": {
		      "x": {},
		      "y": {}
		     },
		     "Circle#collideWorldBounds": {
		      "dx": {},
		      "dy": {}
		     },
		     "Circle#collideCircleVsTile": {
		      "pos": {},
		      "r": {},
		      "c": {},
		      "tx": {},
		      "ty": {},
		      "txw": {},
		      "tyw": {},
		      "dx": {},
		      "px": {},
		      "dy": {},
		      "py": {},
		      "prototype": {
		       "oH": {},
		       "oV": {}
		      }
		     },
		     "Circle#projCircle_Full": {
		      "dx": {},
		      "dy": {},
		      "vx": {},
		      "vy": {},
		      "len": {},
		      "pen": {}
		     },
		     "Circle#projCircle_45Deg": {
		      "signx": {},
		      "signy": {},
		      "lenP": {},
		      "sx": {},
		      "sy": {},
		      "ox": {},
		      "oy": {},
		      "dp": {},
		      "y": {},
		      "x": {},
		      "lenN": {},
		      "perp": {},
		      "len": {},
		      "pen": {},
		      "vx": {},
		      "vy": {},
		      "dx": {},
		      "dy": {}
		     },
		     "Circle#projCircle_Concave": {
		      "signx": {},
		      "signy": {},
		      "lenP": {},
		      "ox": {},
		      "oy": {},
		      "twid": {},
		      "trad": {},
		      "len": {},
		      "pen": {},
		      "y": {},
		      "x": {},
		      "vx": {},
		      "vy": {},
		      "dx": {},
		      "dy": {}
		     },
		     "Circle#projCircle_Convex": {
		      "signx": {},
		      "signy": {},
		      "lenP": {},
		      "ox": {},
		      "oy": {},
		      "twid": {},
		      "trad": {},
		      "len": {},
		      "pen": {},
		      "y": {},
		      "x": {},
		      "vx": {},
		      "vy": {},
		      "dx": {},
		      "dy": {}
		     },
		     "Circle#projCircle_Half": {
		      "signx": {},
		      "signy": {},
		      "celldp": {},
		      "r": {},
		      "ox": {},
		      "oy": {},
		      "sx": {},
		      "sy": {},
		      "dp": {},
		      "lenN": {},
		      "lenP": {},
		      "dx": {},
		      "dy": {},
		      "len": {},
		      "pen": {},
		      "vx": {},
		      "vy": {}
		     },
		     "Circle#projCircle_22DegS": {
		      "lenP": {},
		      "signx": {},
		      "signy": {},
		      "sx": {},
		      "sy": {},
		      "r": {},
		      "ox": {},
		      "oy": {},
		      "perp": {},
		      "len": {},
		      "pen": {},
		      "dp": {},
		      "lenN": {},
		      "y": {},
		      "x": {},
		      "vx": {},
		      "vy": {},
		      "dx": {},
		      "dy": {}
		     },
		     "Circle#projCircle_22DegB": {
		      "lenP": {},
		      "signx": {},
		      "signy": {},
		      "sx": {},
		      "sy": {},
		      "r": {},
		      "ox": {},
		      "oy": {},
		      "dp": {},
		      "lenN": {},
		      "y": {},
		      "x": {},
		      "perp": {},
		      "len": {},
		      "pen": {},
		      "slen": {},
		      "vx": {},
		      "vy": {},
		      "dx": {},
		      "dy": {}
		     },
		     "Circle#projCircle_67DegS": {
		      "signx": {},
		      "signy": {},
		      "lenP": {},
		      "sx": {},
		      "sy": {},
		      "r": {},
		      "ox": {},
		      "oy": {},
		      "perp": {},
		      "len": {},
		      "pen": {},
		      "dp": {},
		      "lenN": {},
		      "y": {},
		      "x": {},
		      "vx": {},
		      "vy": {},
		      "dx": {},
		      "dy": {}
		     },
		     "Circle#projCircle_67DegB": {
		      "signx": {},
		      "signy": {},
		      "lenP": {},
		      "sx": {},
		      "sy": {},
		      "r": {},
		      "ox": {},
		      "oy": {},
		      "dp": {},
		      "lenN": {},
		      "y": {},
		      "x": {},
		      "perp": {},
		      "len": {},
		      "pen": {},
		      "slen": {},
		      "vx": {},
		      "vy": {},
		      "dx": {},
		      "dy": {}
		     },
		     "Circle#destroy": {
		      "prototype": {
		       "body": {},
		       "system": {}
		      }
		     },
		     "Circle#render": {
		      "x": {},
		      "y": {}
		     },
		     "Tile": {
		      "!type": "fn(body: +Phaser.Physics.Ninja.Body, x: number, y: number, width: number, height: number, type: number)",
		      "type": {},
		      "prototype": {
		       "body": {
		        "!type": "+Phaser.Physics.Ninja.Body"
		       },
		       "system": {
		        "!type": "+Phaser.Physics.Ninja"
		       },
		       "id": {
		        "!type": "number"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "pos": {
		        "!type": "+Phaser.Point"
		       },
		       "oldpos": {
		        "!type": "+Phaser.Point"
		       },
		       "xw": {
		        "!type": "number"
		       },
		       "yw": {
		        "!type": "number"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "signx": {
		        "!type": "number"
		       },
		       "signy": {
		        "!type": "number"
		       },
		       "sx": {
		        "!type": "number"
		       },
		       "sy": {
		        "!type": "number"
		       },
		       "integrate": {
		        "!type": "fn()"
		       },
		       "collideWorldBounds": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsWorld": {
		        "!type": "fn()"
		       },
		       "setType": {
		        "!type": "fn()"
		       },
		       "clear": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "updateType": {
		        "!type": "fn()"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "bottom": {
		        "!type": "number"
		       },
		       "right": {
		        "!type": "number"
		       }
		      },
		      "height": {},
		      "EMPTY": {},
		      "FULL": {},
		      "SLOPE_45DEGpn": {},
		      "SLOPE_45DEGnn": {},
		      "SLOPE_45DEGnp": {},
		      "SLOPE_45DEGpp": {},
		      "CONCAVEpn": {},
		      "CONCAVEnn": {},
		      "CONCAVEnp": {},
		      "CONCAVEpp": {},
		      "CONVEXpn": {},
		      "CONVEXnn": {},
		      "CONVEXnp": {},
		      "CONVEXpp": {},
		      "SLOPE_22DEGpnS": {},
		      "SLOPE_22DEGnnS": {},
		      "SLOPE_22DEGnpS": {},
		      "SLOPE_22DEGppS": {},
		      "SLOPE_22DEGpnB": {},
		      "SLOPE_22DEGnnB": {},
		      "SLOPE_22DEGnpB": {},
		      "SLOPE_22DEGppB": {},
		      "SLOPE_67DEGpnS": {},
		      "SLOPE_67DEGnnS": {},
		      "SLOPE_67DEGnpS": {},
		      "SLOPE_67DEGppS": {},
		      "SLOPE_67DEGpnB": {},
		      "SLOPE_67DEGnnB": {},
		      "SLOPE_67DEGnpB": {},
		      "SLOPE_67DEGppB": {},
		      "HALFd": {},
		      "HALFr": {},
		      "HALFu": {},
		      "HALFl": {},
		      "TYPE_EMPTY": {},
		      "TYPE_FULL": {},
		      "TYPE_45DEG": {},
		      "TYPE_CONCAVE": {},
		      "TYPE_CONVEX": {},
		      "TYPE_22DEGs": {},
		      "TYPE_22DEGb": {},
		      "TYPE_67DEGs": {},
		      "TYPE_67DEGb": {},
		      "TYPE_HALF": {}
		     },
		     "Tile#body": {
		      "gravityScale": {},
		      "collideWorldBounds": {}
		     },
		     "Tile#integrate": {
		      "px": {},
		      "py": {}
		     },
		     "Tile#integrate#pos": {
		      "x": {},
		      "y": {}
		     },
		     "Tile#collideWorldBounds": {
		      "dx": {},
		      "dy": {}
		     },
		     "Tile#reportCollisionVsWorld": {
		      "p": {},
		      "o": {},
		      "vx": {},
		      "vy": {},
		      "dp": {},
		      "nx": {},
		      "ny": {},
		      "tx": {},
		      "ty": {},
		      "b": {},
		      "bx": {},
		      "by": {},
		      "fx": {},
		      "fy": {}
		     },
		     "Tile#reportCollisionVsWorld#body": {
		      "touching": {
		       "left": {},
		       "right": {},
		       "up": {},
		       "down": {}
		      }
		     },
		     "Tile#reportCollisionVsWorld~bx": {
		      "fx": {}
		     },
		     "Tile#reportCollisionVsWorld~by": {
		      "fy": {}
		     },
		     "Tile#reportCollisionVsWorld~p": {
		      "x": {},
		      "y": {}
		     },
		     "Tile#reportCollisionVsWorld~o": {
		      "x": {},
		      "y": {}
		     },
		     "Tile#setType": {
		      "prototype": {
		       "id": {}
		      }
		     },
		     "Tile#clear": {
		      "prototype": {
		       "id": {}
		      }
		     },
		     "Tile#destroy": {
		      "prototype": {
		       "body": {},
		       "system": {}
		      }
		     },
		     "Tile#updateType": {
		      "prototype": {
		       "type": {},
		       "signx": {},
		       "signy": {},
		       "sx": {},
		       "sy": {}
		      },
		      "slen": {}
		     },
		     "!type": "fn(game: +Phaser.Game)",
		     "prototype": {
		      "game": {
		       "!type": "+Phaser.Game"
		      },
		      "time": {
		       "!type": "+Phaser.Time"
		      },
		      "gravity": {
		       "!type": "number"
		      },
		      "bounds": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "maxObjects": {
		       "!type": "number"
		      },
		      "maxLevels": {
		       "!type": "number"
		      },
		      "quadTree": {
		       "!type": "+Phaser.QuadTree"
		      },
		      "enableAABB": {
		       "!type": "fn()"
		      },
		      "enableCircle": {
		       "!type": "fn()"
		      },
		      "enableTile": {
		       "!type": "fn()"
		      },
		      "enable": {
		       "!type": "fn()"
		      },
		      "enableBody": {
		       "!type": "fn()"
		      },
		      "setBounds": {
		       "!type": "fn()"
		      },
		      "setBoundsToWorld": {
		       "!type": "fn()"
		      },
		      "clearTilemapLayerBodies": {
		       "!type": "fn()"
		      },
		      "convertTilemap": {
		       "!type": "fn()"
		      },
		      "overlap": {
		       "!type": "fn()"
		      },
		      "collide": {
		       "!type": "fn()"
		      },
		      "collideHandler": {
		       "!type": "fn()"
		      },
		      "collideSpriteVsSprite": {
		       "!type": "fn()"
		      },
		      "collideSpriteVsGroup": {
		       "!type": "fn()"
		      },
		      "collideGroupVsSelf": {
		       "!type": "fn()"
		      },
		      "collideGroupVsGroup": {
		       "!type": "fn()"
		      },
		      "separate": {
		       "!type": "fn()"
		      }
		     }
		    },
		    "Body": {
		     "prototype": {
		      "moveTo": {
		       "!type": "fn(speed: number, angle: number)"
		      },
		      "moveBackward": {
		       "!type": "fn(speed: number, angle: number)"
		      },
		      "moveLeft": {
		       "!type": "fn(speed: number)"
		      },
		      "moveRight": {
		       "!type": "fn(speed: number)"
		      },
		      "moveUp": {
		       "!type": "fn(speed: number)"
		      },
		      "moveDown": {
		       "!type": "fn(speed: number)"
		      }
		     }
		    },
		    "Ninja#enable": {
		     "type": {},
		     "id": {},
		     "radius": {},
		     "children": {},
		     "i": {}
		    },
		    "Ninja#clearTilemapLayerBodies": {
		     "layer": {},
		     "i": {}
		    },
		    "Ninja#convertTilemap": {
		     "layer": {},
		     "y": {},
		     "h": {},
		     "x": {},
		     "w": {},
		     "tile": {},
		     "body": {}
		    },
		    "Ninja#overlap": {
		     "overlapCallback": {},
		     "processCallback": {},
		     "callbackContext": {},
		     "prototype": {
		      "_result": {},
		      "_total": {}
		     },
		     "i": {},
		     "len": {}
		    },
		    "Ninja#collide": {
		     "collideCallback": {},
		     "processCallback": {},
		     "callbackContext": {},
		     "prototype": {
		      "_result": {},
		      "_total": {}
		     },
		     "i": {},
		     "len": {}
		    },
		    "Ninja#collideSpriteVsGroup": {
		     "i": {},
		     "len": {}
		    },
		    "Ninja#collideGroupVsSelf": {
		     "len": {},
		     "i": {},
		     "j": {}
		    },
		    "Ninja#collideGroupVsGroup": {
		     "i": {},
		     "len": {}
		    },
		    "P2": {
		     "Body": {
		      "!type": "fn(game: +Phaser.Game, sprite: +Phaser.Sprite, x: number, y: number, mass: number)",
		      "sprite": {},
		      "x": {},
		      "y": {},
		      "mass": {},
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       },
		       "sprite": {
		        "!type": "+Phaser.Sprite"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "offset": {
		        "!type": "+Phaser.Point"
		       },
		       "data": {
		        "!type": "+p2.Body"
		       },
		       "velocity": {
		        "!type": "+Phaser.Physics.P2.InversePointProxy"
		       },
		       "force": {
		        "!type": "+Phaser.Physics.P2.InversePointProxy"
		       },
		       "gravity": {
		        "!type": "+Phaser.Point"
		       },
		       "onBeginContact": {
		        "!type": "+Phaser.Signal"
		       },
		       "onEndContact": {
		        "!type": "+Phaser.Signal"
		       },
		       "collidesWith": {
		        "!type": "+array"
		       },
		       "removeNextStep": {
		        "!type": "bool"
		       },
		       "debugBody": {
		        "!type": "+Phaser.Physics.P2.BodyDebug"
		       },
		       "dirty": {
		        "!type": "bool"
		       },
		       "_collideWorldBounds": {
		        "!type": "bool"
		       },
		       "_bodyCallbacks": {},
		       "_bodyCallbackContext": {},
		       "_groupCallbacks": {},
		       "_groupCallbackContext": {},
		       "_reset": {
		        "!type": "bool"
		       },
		       "createBodyCallback": {
		        "!type": "fn()"
		       },
		       "createGroupCallback": {
		        "!type": "fn()"
		       },
		       "getCollisionMask": {
		        "!type": "fn()"
		       },
		       "updateCollisionMask": {
		        "!type": "fn()"
		       },
		       "setCollisionGroup": {
		        "!type": "fn()"
		       },
		       "clearCollision": {
		        "!type": "fn()"
		       },
		       "collides": {
		        "!type": "fn()"
		       },
		       "adjustCenterOfMass": {
		        "!type": "fn()"
		       },
		       "getVelocityAtPoint": {
		        "!type": "fn()"
		       },
		       "applyDamping": {
		        "!type": "fn()"
		       },
		       "applyImpulse": {
		        "!type": "fn()"
		       },
		       "applyImpulseLocal": {
		        "!type": "fn()"
		       },
		       "applyForce": {
		        "!type": "fn()"
		       },
		       "setZeroForce": {
		        "!type": "fn()"
		       },
		       "setZeroRotation": {
		        "!type": "fn()"
		       },
		       "setZeroVelocity": {
		        "!type": "fn()"
		       },
		       "setZeroDamping": {
		        "!type": "fn()"
		       },
		       "toLocalFrame": {
		        "!type": "fn()"
		       },
		       "toWorldFrame": {
		        "!type": "fn()"
		       },
		       "rotateLeft": {
		        "!type": "fn()"
		       },
		       "rotateRight": {
		        "!type": "fn()"
		       },
		       "moveForward": {
		        "!type": "fn()"
		       },
		       "moveBackward": {
		        "!type": "fn()"
		       },
		       "thrust": {
		        "!type": "fn()"
		       },
		       "reverse": {
		        "!type": "fn()"
		       },
		       "moveLeft": {
		        "!type": "fn()"
		       },
		       "moveRight": {
		        "!type": "fn()"
		       },
		       "moveUp": {
		        "!type": "fn()"
		       },
		       "moveDown": {
		        "!type": "fn()"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "reset": {
		        "!type": "fn()"
		       },
		       "addToWorld": {
		        "!type": "fn()"
		       },
		       "removeFromWorld": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "clearShapes": {
		        "!type": "fn()"
		       },
		       "addShape": {
		        "!type": "fn()"
		       },
		       "addCircle": {
		        "!type": "fn()"
		       },
		       "addRectangle": {
		        "!type": "fn()"
		       },
		       "addPlane": {
		        "!type": "fn()"
		       },
		       "addParticle": {
		        "!type": "fn()"
		       },
		       "addLine": {
		        "!type": "fn()"
		       },
		       "addCapsule": {
		        "!type": "fn()"
		       },
		       "addPolygon": {
		        "!type": "fn()"
		       },
		       "removeShape": {
		        "!type": "fn()"
		       },
		       "setCircle": {
		        "!type": "fn()"
		       },
		       "setRectangle": {
		        "!type": "fn()"
		       },
		       "setRectangleFromSprite": {
		        "!type": "fn()"
		       },
		       "setMaterial": {
		        "!type": "fn()"
		       },
		       "shapeChanged": {
		        "!type": "fn()"
		       },
		       "addPhaserPolygon": {
		        "!type": "fn()"
		       },
		       "addFixture": {
		        "!type": "fn()"
		       },
		       "loadPolygon": {
		        "!type": "fn()"
		       },
		       "static": {
		        "!type": "bool"
		       },
		       "dynamic": {
		        "!type": "bool"
		       },
		       "kinematic": {
		        "!type": "bool"
		       },
		       "allowSleep": {
		        "!type": "bool"
		       },
		       "angle": {
		        "!type": "number"
		       },
		       "angularDamping": {
		        "!type": "number"
		       },
		       "angularForce": {
		        "!type": "number"
		       },
		       "angularVelocity": {
		        "!type": "number"
		       },
		       "damping": {
		        "!type": "number"
		       },
		       "fixedRotation": {
		        "!type": "bool"
		       },
		       "inertia": {
		        "!type": "number"
		       },
		       "mass": {
		        "!type": "number"
		       },
		       "motionState": {
		        "!type": "number"
		       },
		       "rotation": {
		        "!type": "number"
		       },
		       "sleepSpeedLimit": {
		        "!type": "number"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "id": {
		        "!type": "number"
		       },
		       "debug": {
		        "!type": "bool"
		       },
		       "collideWorldBounds": {
		        "!type": "bool"
		       }
		      },
		      "DYNAMIC": {},
		      "STATIC": {},
		      "KINEMATIC": {}
		     },
		     "Body#data": {
		      "parent": {}
		     },
		     "Body#createBodyCallback": {
		      "id": {},
		      "prototype": {
		       "_bodyCallbacks[undefined]": {},
		       "_bodyCallbackContext[undefined]": {}
		      }
		     },
		     "Body#createGroupCallback": {
		      "prototype": {
		       "_groupCallbacks[undefined]": {},
		       "_groupCallbackContext[undefined]": {}
		      }
		     },
		     "Body#getCollisionMask": {
		      "mask": {},
		      "i": {}
		     },
		     "Body#updateCollisionMask": {
		      "mask": {},
		      "i": {}
		     },
		     "Body#updateCollisionMask#data": {
		      "shapes[undefined]": {
		       "collisionMask": {}
		      }
		     },
		     "Body#setCollisionGroup": {
		      "mask": {},
		      "i": {}
		     },
		     "Body#setCollisionGroup#data": {
		      "shapes[undefined]": {
		       "collisionGroup": {},
		       "collisionMask": {}
		      }
		     },
		     "Body#clearCollision": {
		      "clearGroup": {},
		      "clearMask": {},
		      "i": {}
		     },
		     "Body#clearCollision#data": {
		      "shapes[undefined]": {
		       "collisionGroup": {},
		       "collisionMask": {}
		      }
		     },
		     "Body#clearCollision#collidesWith": {
		      "length": {}
		     },
		     "Body#collides": {
		      "i": {},
		      "mask": {}
		     },
		     "Body#collides#data": {
		      "shapes[undefined]": {
		       "collisionMask": {}
		      }
		     },
		     "Body#setZeroRotation#data": {
		      "angularVelocity": {}
		     },
		     "Body#setZeroVelocity#data": {
		      "velocity[0]": {},
		      "velocity[1]": {}
		     },
		     "Body#setZeroDamping#data": {
		      "damping": {},
		      "angularDamping": {}
		     },
		     "Body#rotateLeft#data": {
		      "angularVelocity": {}
		     },
		     "Body#rotateRight#data": {
		      "angularVelocity": {}
		     },
		     "Body#moveForward": {
		      "magnitude": {},
		      "angle": {}
		     },
		     "Body#moveForward#data": {
		      "velocity[0]": {},
		      "velocity[1]": {}
		     },
		     "Body#moveBackward": {
		      "magnitude": {},
		      "angle": {}
		     },
		     "Body#moveBackward#data": {
		      "velocity[0]": {},
		      "velocity[1]": {}
		     },
		     "Body#thrust": {
		      "magnitude": {},
		      "angle": {}
		     },
		     "Body#thrust#data": {
		      "force[0]": {},
		      "force[1]": {}
		     },
		     "Body#reverse": {
		      "magnitude": {},
		      "angle": {}
		     },
		     "Body#reverse#data": {
		      "force[0]": {},
		      "force[1]": {}
		     },
		     "Body#moveLeft#data": {
		      "velocity[0]": {}
		     },
		     "Body#moveRight#data": {
		      "velocity[0]": {}
		     },
		     "Body#moveUp#data": {
		      "velocity[1]": {}
		     },
		     "Body#moveDown#data": {
		      "velocity[1]": {}
		     },
		     "Body#preUpdate": {
		      "prototype": {
		       "dirty": {},
		       "removeNextStep": {}
		      }
		     },
		     "Body#postUpdate#sprite": {
		      "x": {},
		      "y": {},
		      "rotation": {}
		     },
		     "Body#postUpdate": {
		      "prototype": {
		       "dirty": {}
		      }
		     },
		     "Body#reset": {
		      "resetDamping": {},
		      "resetMass": {},
		      "prototype": {
		       "mass": {},
		       "x": {},
		       "y": {}
		      }
		     },
		     "Body#addToWorld": {
		      "i": {}
		     },
		     "Body#destroy": {
		      "prototype": {
		       "_bodyCallbacks": {},
		       "_bodyCallbackContext": {},
		       "_groupCallbacks": {},
		       "_groupCallbackContext": {},
		       "debugBody": {},
		       "sprite": {}
		      }
		     },
		     "Body#destroy#sprite": {
		      "body": {}
		     },
		     "Body#clearShapes": {
		      "i": {}
		     },
		     "Body#addShape": {
		      "offsetX": {},
		      "offsetY": {},
		      "rotation": {}
		     },
		     "Body#addCircle": {
		      "shape": {}
		     },
		     "Body#addRectangle": {
		      "shape": {}
		     },
		     "Body#addPlane": {
		      "shape": {}
		     },
		     "Body#addParticle": {
		      "shape": {}
		     },
		     "Body#addLine": {
		      "shape": {}
		     },
		     "Body#addCapsule": {
		      "shape": {}
		     },
		     "Body#addPolygon": {
		      "options": {},
		      "points": {},
		      "path": {},
		      "i": {},
		      "len": {},
		      "idx": {},
		      "p": {},
		      "result": {}
		     },
		     "Body#addPolygon~path": {
		      "undefined][0]": {},
		      "undefined][1]": {}
		     },
		     "Body#removeShape": {
		      "result": {}
		     },
		     "Body#setRectangle": {
		      "width": {},
		      "height": {}
		     },
		     "Body#setRectangleFromSprite": {
		      "sprite": {}
		     },
		     "Body#setMaterial": {
		      "i": {}
		     },
		     "Body#setMaterial#data": {
		      "shapes[undefined]": {
		       "material": {}
		      }
		     },
		     "Body#addPhaserPolygon": {
		      "data": {},
		      "createdFixtures": {},
		      "i": {},
		      "fixtureData": {},
		      "shapesOfFixture": {}
		     },
		     "Body#addPhaserPolygon~createdFixtures": {
		      "undefined]": {}
		     },
		     "Body#addPhaserPolygon#data": {
		      "aabbNeedsUpdate": {}
		     },
		     "Body#addFixture": {
		      "generatedShapes": {},
		      "shape": {},
		      "offset": {},
		      "polygons": {},
		      "cm": {},
		      "i": {},
		      "shapes": {},
		      "vertices": {},
		      "s": {},
		      "j": {},
		      "v": {}
		     },
		     "Body#addFixture~shape": {
		      "collisionGroup": {},
		      "collisionMask": {},
		      "sensor": {}
		     },
		     "Body#addFixture~offset": {
		      "0]": {},
		      "1]": {}
		     },
		     "Body#addFixture~cm": {
		      "0]": {},
		      "1]": {}
		     },
		     "Body#loadPolygon": {
		      "data": {},
		      "cm": {},
		      "i": {},
		      "vertices": {},
		      "s": {},
		      "c": {},
		      "j": {},
		      "v": {}
		     },
		     "Body#loadPolygon~cm": {
		      "0]": {},
		      "1]": {}
		     },
		     "Body#loadPolygon#data": {
		      "aabbNeedsUpdate": {}
		     },
		     "BodyDebug": {
		      "!type": "fn(game: +Phaser.Game, body: +Phaser.Physics.P2.Body, settings: ?)",
		      "defaultSettings": {},
		      "prototype": {
		       "settings": {},
		       "ppu": {
		        "!type": "number"
		       },
		       "body": {
		        "!type": "+Phaser.Physics.P2.Body"
		       },
		       "canvas": {
		        "!type": "+Phaser.Graphics"
		       },
		       "updateSpriteTransform": {
		        "!type": "fn()"
		       },
		       "draw": {
		        "!type": "fn()"
		       },
		       "drawRectangle": {
		        "!type": "fn()"
		       },
		       "drawCircle": {
		        "!type": "fn()"
		       },
		       "drawLine": {
		        "!type": "fn()"
		       },
		       "drawConvex": {
		        "!type": "fn()"
		       },
		       "drawPath": {
		        "!type": "fn()"
		       },
		       "drawPlane": {
		        "!type": "fn()"
		       },
		       "drawCapsule": {
		        "!type": "fn()"
		       },
		       "randomPastelHex": {
		        "!type": "fn()"
		       },
		       "rgbToHex": {
		        "!type": "fn()"
		       },
		       "componentToHex": {
		        "!type": "fn()"
		       },
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "name": {
		        "!type": "string"
		       },
		       "z": {
		        "!type": "number"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "physicsType": {
		        "!type": "number"
		       },
		       "alive": {
		        "!type": "bool"
		       },
		       "exists": {
		        "!type": "bool"
		       },
		       "ignoreDestroy": {
		        "!type": "bool"
		       },
		       "pendingDestroy": {
		        "!type": "bool"
		       },
		       "classType": {},
		       "cursor": {
		        "!type": "+DisplayObject"
		       },
		       "enableBody": {
		        "!type": "bool"
		       },
		       "enableBodyDebug": {
		        "!type": "bool"
		       },
		       "physicsBodyType": {
		        "!type": "number"
		       },
		       "physicsSortDirection": {
		        "!type": "number"
		       },
		       "onDestroy": {
		        "!type": "+Phaser.Signal"
		       },
		       "cursorIndex": {
		        "!type": "number"
		       },
		       "fixedToCamera": {
		        "!type": "bool"
		       },
		       "cameraOffset": {
		        "!type": "+Phaser.Point"
		       },
		       "hash": {
		        "!type": "+array"
		       },
		       "_sortProperty": {
		        "!type": "string"
		       },
		       "add": {
		        "!type": "fn(child: +DisplayObject, silent: bool) -> ?"
		       },
		       "addToHash": {
		        "!type": "fn(child: +DisplayObject) -> ?"
		       },
		       "removeFromHash": {
		        "!type": "fn(child: +DisplayObject) -> ?"
		       },
		       "addMultiple": {
		        "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> ?"
		       },
		       "addAt": {
		        "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> ?"
		       },
		       "getAt": {
		        "!type": "fn(index: number) -> ?"
		       },
		       "create": {
		        "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> ?"
		       },
		       "createMultiple": {
		        "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		       },
		       "updateZ": {
		        "!type": "fn()"
		       },
		       "resetCursor": {
		        "!type": "fn(index: number) -> ?"
		       },
		       "next": {
		        "!type": "fn() -> ?"
		       },
		       "previous": {
		        "!type": "fn() -> ?"
		       },
		       "swap": {
		        "!type": "fn(child1: +any, child2: +any)"
		       },
		       "bringToTop": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "sendToBack": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "moveUp": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "moveDown": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "xy": {
		        "!type": "fn(index: number, x: number, y: number)"
		       },
		       "reverse": {
		        "!type": "fn()"
		       },
		       "getIndex": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "replace": {
		        "!type": "fn(oldChild: +any, newChild: +any) -> ?"
		       },
		       "hasProperty": {
		        "!type": "fn(child: +any, key: [?]) -> ?"
		       },
		       "setProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> ?"
		       },
		       "checkProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> ?"
		       },
		       "set": {
		        "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> ?"
		       },
		       "setAll": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		       },
		       "setAllChildren": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		       },
		       "checkAll": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		       },
		       "addAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "subAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "multiplyAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "divideAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "callAllExists": {
		        "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		       },
		       "callbackFromArray": {
		        "!type": "fn(child: ?, callback: +array, length: number)"
		       },
		       "callAll": {
		        "!type": "fn(method: string, context: string, args: +any)"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "update": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "filter": {
		        "!type": "fn(predicate: +function, checkExists: bool) -> ?"
		       },
		       "forEach": {
		        "!type": "fn(callback: +function, callbackContext: ?, checkExists: bool, args: +any)"
		       },
		       "forEachExists": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "forEachAlive": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "forEachDead": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "sort": {
		        "!type": "fn(key: string, order: number)"
		       },
		       "customSort": {
		        "!type": "fn(sortHandler: +function, context: ?)"
		       },
		       "ascendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "descendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "iterate": {
		        "!type": "fn(key: string, value: +any, returnType: number, callback: +function, callbackContext: ?, args: [?]) -> ?"
		       },
		       "getFirstExists": {
		        "!type": "fn(exists: bool) -> ?"
		       },
		       "getFirstAlive": {
		        "!type": "fn() -> ?"
		       },
		       "getFirstDead": {
		        "!type": "fn() -> ?"
		       },
		       "getTop": {
		        "!type": "fn() -> ?"
		       },
		       "getBottom": {
		        "!type": "fn() -> ?"
		       },
		       "countLiving": {
		        "!type": "fn() -> ?"
		       },
		       "countDead": {
		        "!type": "fn() -> ?"
		       },
		       "getRandom": {
		        "!type": "fn(startIndex: number, length: number) -> ?"
		       },
		       "remove": {
		        "!type": "fn(child: +any, destroy: bool, silent: bool) -> ?"
		       },
		       "moveAll": {
		        "!type": "fn(group: +Phaser.Group, silent: bool) -> ?"
		       },
		       "removeAll": {
		        "!type": "fn(destroy: bool, silent: bool)"
		       },
		       "removeBetween": {
		        "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		       },
		       "destroy": {
		        "!type": "fn(destroyChildren: bool, soft: bool)"
		       },
		       "total": {
		        "!type": "number"
		       },
		       "length": {
		        "!type": "number"
		       },
		       "angle": {
		        "!type": "number"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "rotation": {
		        "!type": "number"
		       },
		       "visible": {
		        "!type": "bool"
		       },
		       "alpha": {
		        "!type": "number"
		       },
		       "children": {}
		      }
		     },
		     "BodyDebug~defaultSettings": {
		      "pixelsPerLengthUnit": {},
		      "debugPolygons": {},
		      "lineWidth": {},
		      "alpha": {}
		     },
		     "BodyDebug#canvas": {
		      "alpha": {}
		     },
		     "CollisionGroup": {
		      "!type": "fn(bitmask: number)",
		      "prototype": {
		       "mask": {
		        "!type": "number"
		       }
		      }
		     },
		     "ContactMaterial": {
		      "!type": "fn(materialA: +Phaser.Physics.P2.Material, materialB: +Phaser.Physics.P2.Material, options: ?)",
		      "prototype": {}
		     },
		     "DistanceConstraint": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, distance: number, localAnchorA: [?], localAnchorB: [?], maxForce: ?)",
		      "distance": {},
		      "localAnchorA": {},
		      "localAnchorB": {},
		      "maxForce": {},
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       }
		      },
		      "options": {}
		     },
		     "DistanceConstraint~options": {
		      "distance": {},
		      "localAnchorA": {},
		      "localAnchorB": {},
		      "maxForce": {}
		     },
		     "FixtureList": {
		      "!type": "fn(list: [?])",
		      "list": {},
		      "prototype": {
		       "rawList": {},
		       "init": {
		        "!type": "fn()"
		       },
		       "setCategory": {
		        "!type": "fn()"
		       },
		       "setMask": {
		        "!type": "fn()"
		       },
		       "setSensor": {
		        "!type": "fn()"
		       },
		       "setMaterial": {
		        "!type": "fn()"
		       },
		       "getFixtures": {
		        "!type": "fn()"
		       },
		       "getFixtureByKey": {
		        "!type": "fn()"
		       },
		       "getGroup": {
		        "!type": "fn()"
		       },
		       "parse": {
		        "!type": "fn()"
		       },
		       "flatten": {
		        "!type": "fn()"
		       }
		      }
		     },
		     "FixtureList#init": {
		      "prototype": {
		       "namedFixtures": {},
		       "groupedFixtures": {
		        "!type": "[?]"
		       },
		       "allFixtures": {
		        "!type": "[?]"
		       }
		      }
		     },
		     "FixtureList#setCategory": {
		      "setter": {
		       "!type": "fn()"
		      }
		     },
		     "FixtureList#setMask": {
		      "setter": {
		       "!type": "fn()"
		      }
		     },
		     "FixtureList#setSensor": {
		      "setter": {
		       "!type": "fn()"
		      }
		     },
		     "FixtureList#setMaterial": {
		      "setter": {
		       "!type": "fn()"
		      }
		     },
		     "FixtureList#getFixtures": {
		      "fixtures": {},
		      "keys": {},
		      "self": {}
		     },
		     "FixtureList#parse": {
		      "key": {},
		      "value": {},
		      "_ref": {},
		      "_results": {},
		      "prototype": {
		       "groupedFixtures[undefined]": {},
		       "namedFixtures[undefined]": {},
		       "allFixtures": {}
		      }
		     },
		     "FixtureList#flatten": {
		      "result": {},
		      "self": {}
		     },
		     "GearConstraint": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, angle: number, ratio: number)",
		      "angle": {},
		      "ratio": {},
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       }
		      },
		      "options": {}
		     },
		     "GearConstraint~options": {
		      "angle": {},
		      "ratio": {}
		     },
		     "InversePointProxy": {
		      "!type": "fn(world: +Phaser.Physics.P2, destination: +any)",
		      "prototype": {
		       "world": {},
		       "destination": {},
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "mx": {
		        "!type": "number"
		       },
		       "my": {
		        "!type": "number"
		       }
		      }
		     },
		     "LockConstraint": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, offset: [?], angle: number, maxForce: number)",
		      "offset": {},
		      "angle": {},
		      "maxForce": {},
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       }
		      },
		      "options": {}
		     },
		     "LockConstraint~options": {
		      "localOffsetB": {},
		      "localAngleB": {},
		      "maxForce": {}
		     },
		     "Material": {
		      "!type": "fn(name: string)",
		      "prototype": {
		       "name": {
		        "!type": "string"
		       }
		      }
		     },
		     "PointProxy": {
		      "!type": "fn(world: +Phaser.Physics.P2, destination: +any)",
		      "prototype": {
		       "world": {},
		       "destination": {},
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "mx": {
		        "!type": "number"
		       },
		       "my": {
		        "!type": "number"
		       }
		      }
		     },
		     "PrismaticConstraint": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, lockRotation: bool, anchorA: [?], anchorB: [?], axis: [?], maxForce: number)",
		      "lockRotation": {},
		      "anchorA": {},
		      "anchorB": {},
		      "axis": {},
		      "maxForce": {},
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       }
		      },
		      "options": {}
		     },
		     "PrismaticConstraint~options": {
		      "localAnchorA": {},
		      "localAnchorB": {},
		      "localAxisA": {},
		      "maxForce": {},
		      "disableRotationalLock": {}
		     },
		     "RevoluteConstraint": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, pivotA: +Float32Array, bodyB: +p2.Body, pivotB: +Float32Array, maxForce: number, worldPivot: +Float32Array)",
		      "maxForce": {},
		      "worldPivot": {},
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       }
		      },
		      "pivotA": {},
		      "pivotB": {},
		      "options": {}
		     },
		     "RevoluteConstraint~options": {
		      "worldPivot": {},
		      "localPivotA": {},
		      "localPivotB": {},
		      "maxForce": {}
		     },
		     "RotationalSpring": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, restAngle: number, stiffness: number, damping: number)",
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       },
		       "data": {
		        "!type": "+p2.RotationalSpring"
		       }
		      },
		      "restAngle": {},
		      "stiffness": {},
		      "damping": {},
		      "options": {}
		     },
		     "RotationalSpring~options": {
		      "restAngle": {},
		      "stiffness": {},
		      "damping": {}
		     },
		     "RotationalSpring#data": {
		      "parent": {}
		     },
		     "Spring": {
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       },
		       "data": {
		        "!type": "+p2.LinearSpring"
		       }
		      },
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, restLength: number, stiffness: number, damping: number, worldA: [?], worldB: [?], localA: [?], localB: [?])",
		      "restLength": {},
		      "stiffness": {},
		      "damping": {},
		      "options": {}
		     },
		     "Spring~options": {
		      "restLength": {},
		      "stiffness": {},
		      "damping": {},
		      "worldAnchorA": {},
		      "worldAnchorB": {},
		      "localAnchorA": {},
		      "localAnchorB": {}
		     },
		     "Spring#data": {
		      "parent": {}
		     },
		     "!type": "fn(game: +Phaser.Game, config: ?)",
		     "prototype": {
		      "game": {
		       "!type": "+Phaser.Game"
		      },
		      "config": {},
		      "world": {
		       "!type": "+p2.World"
		      },
		      "frameRate": {
		       "!type": "number"
		      },
		      "useElapsedTime": {
		       "!type": "bool"
		      },
		      "paused": {
		       "!type": "bool"
		      },
		      "materials": {
		       "!type": "+array.<Phaser.Physics.P2.Material>"
		      },
		      "gravity": {
		       "!type": "+Phaser.Physics.P2.InversePointProxy"
		      },
		      "walls": {},
		      "onBodyAdded": {
		       "!type": "+Phaser.Signal"
		      },
		      "onBodyRemoved": {
		       "!type": "+Phaser.Signal"
		      },
		      "onSpringAdded": {
		       "!type": "+Phaser.Signal"
		      },
		      "onSpringRemoved": {
		       "!type": "+Phaser.Signal"
		      },
		      "onConstraintAdded": {
		       "!type": "+Phaser.Signal"
		      },
		      "onConstraintRemoved": {
		       "!type": "+Phaser.Signal"
		      },
		      "onContactMaterialAdded": {
		       "!type": "+Phaser.Signal"
		      },
		      "onContactMaterialRemoved": {
		       "!type": "+Phaser.Signal"
		      },
		      "postBroadphaseCallback": {
		       "!type": "+function"
		      },
		      "callbackContext": {},
		      "onBeginContact": {
		       "!type": "+Phaser.Signal"
		      },
		      "onEndContact": {
		       "!type": "+Phaser.Signal"
		      },
		      "mpx": {
		       "!type": "fn()"
		      },
		      "mpxi": {
		       "!type": "fn()"
		      },
		      "pxm": {
		       "!type": "fn()"
		      },
		      "pxmi": {
		       "!type": "fn()"
		      },
		      "collisionGroups": {
		       "!type": "+array"
		      },
		      "nothingCollisionGroup": {
		       "!type": "+Phaser.Physics.P2.CollisionGroup"
		      },
		      "boundsCollisionGroup": {
		       "!type": "+Phaser.Physics.P2.CollisionGroup"
		      },
		      "everythingCollisionGroup": {
		       "!type": "+Phaser.Physics.P2.CollisionGroup"
		      },
		      "boundsCollidesWith": {
		       "!type": "+array"
		      },
		      "_toRemove": {
		       "!type": "+array"
		      },
		      "_collisionGroupID": {
		       "!type": "number"
		      },
		      "_boundsLeft": {
		       "!type": "bool"
		      },
		      "_boundsRight": {
		       "!type": "bool"
		      },
		      "_boundsTop": {
		       "!type": "bool"
		      },
		      "_boundsBottom": {
		       "!type": "bool"
		      },
		      "_boundsOwnGroup": {
		       "!type": "bool"
		      },
		      "removeBodyNextStep": {
		       "!type": "fn()"
		      },
		      "preUpdate": {
		       "!type": "fn()"
		      },
		      "enable": {
		       "!type": "fn()"
		      },
		      "enableBody": {
		       "!type": "fn()"
		      },
		      "setImpactEvents": {
		       "!type": "fn()"
		      },
		      "setPostBroadphaseCallback": {
		       "!type": "fn()"
		      },
		      "postBroadphaseHandler": {
		       "!type": "fn()"
		      },
		      "impactHandler": {
		       "!type": "fn()"
		      },
		      "beginContactHandler": {
		       "!type": "fn()"
		      },
		      "endContactHandler": {
		       "!type": "fn()"
		      },
		      "setBoundsToWorld": {
		       "!type": "fn()"
		      },
		      "setWorldMaterial": {
		       "!type": "fn()"
		      },
		      "updateBoundsCollisionGroup": {
		       "!type": "fn()"
		      },
		      "setBounds": {
		       "!type": "fn()"
		      },
		      "pause": {
		       "!type": "fn()"
		      },
		      "resume": {
		       "!type": "fn()"
		      },
		      "update": {
		       "!type": "fn()"
		      },
		      "reset": {
		       "!type": "fn()"
		      },
		      "clear": {
		       "!type": "fn()"
		      },
		      "destroy": {
		       "!type": "fn()"
		      },
		      "addBody": {
		       "!type": "fn()"
		      },
		      "removeBody": {
		       "!type": "fn()"
		      },
		      "addSpring": {
		       "!type": "fn()"
		      },
		      "removeSpring": {
		       "!type": "fn()"
		      },
		      "createDistanceConstraint": {
		       "!type": "fn()"
		      },
		      "createGearConstraint": {
		       "!type": "fn()"
		      },
		      "createRevoluteConstraint": {
		       "!type": "fn()"
		      },
		      "createLockConstraint": {
		       "!type": "fn()"
		      },
		      "createPrismaticConstraint": {
		       "!type": "fn()"
		      },
		      "addConstraint": {
		       "!type": "fn()"
		      },
		      "removeConstraint": {
		       "!type": "fn()"
		      },
		      "addContactMaterial": {
		       "!type": "fn()"
		      },
		      "removeContactMaterial": {
		       "!type": "fn()"
		      },
		      "getContactMaterial": {
		       "!type": "fn()"
		      },
		      "setMaterial": {
		       "!type": "fn()"
		      },
		      "createMaterial": {
		       "!type": "fn()"
		      },
		      "createContactMaterial": {
		       "!type": "fn()"
		      },
		      "getBodies": {
		       "!type": "fn()"
		      },
		      "getBody": {
		       "!type": "fn()"
		      },
		      "getSprings": {
		       "!type": "fn()"
		      },
		      "getConstraints": {
		       "!type": "fn()"
		      },
		      "hitTest": {
		       "!type": "fn()"
		      },
		      "toJSON": {
		       "!type": "fn()"
		      },
		      "createCollisionGroup": {
		       "!type": "fn()"
		      },
		      "setCollisionGroup": {
		       "!type": "fn()"
		      },
		      "createSpring": {
		       "!type": "fn()"
		      },
		      "createRotationalSpring": {
		       "!type": "fn()"
		      },
		      "createBody": {
		       "!type": "fn()"
		      },
		      "createParticle": {
		       "!type": "fn()"
		      },
		      "convertCollisionObjects": {
		       "!type": "fn()"
		      },
		      "clearTilemapLayerBodies": {
		       "!type": "fn()"
		      },
		      "convertTilemap": {
		       "!type": "fn()"
		      },
		      "friction": {
		       "!type": "number"
		      },
		      "restitution": {
		       "!type": "number"
		      },
		      "contactMaterial": {
		       "!type": "+p2.ContactMaterial"
		      },
		      "applySpringForces": {
		       "!type": "bool"
		      },
		      "applyDamping": {
		       "!type": "bool"
		      },
		      "applyGravity": {
		       "!type": "bool"
		      },
		      "solveConstraints": {
		       "!type": "bool"
		      },
		      "time": {
		       "!type": "bool"
		      },
		      "emitImpactEvent": {
		       "!type": "bool"
		      },
		      "sleepMode": {
		       "!type": "number"
		      },
		      "total": {
		       "!type": "number"
		      }
		     },
		     "config": {}
		    },
		    "P2~config": {
		     "gravity": {},
		     "broadphase": {}
		    },
		    "P2#walls": {
		     "left": {},
		     "right": {},
		     "top": {},
		     "bottom": {}
		    },
		    "P2#preUpdate": {
		     "i": {}
		    },
		    "P2#preUpdate#_toRemove": {
		     "length": {}
		    },
		    "P2#enable": {
		     "debug": {},
		     "children": {},
		     "i": {}
		    },
		    "P2#setPostBroadphaseCallback": {
		     "prototype": {
		      "postBroadphaseCallback": {},
		      "callbackContext": {}
		     }
		    },
		    "P2#postBroadphaseHandler": {
		     "i": {}
		    },
		    "P2#impactHandler": {
		     "a": {},
		     "b": {}
		    },
		    "prototype": {
		     "setBoundsToWorld": {
		      "!type": "fn()"
		     },
		     "setWorldMaterial": {
		      "!type": "fn(material: +Phaser.Physics.P2.Material, left: bool, right: bool, top: bool, bottom: bool)"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "config": {},
		     "arcade": {
		      "!type": "+Phaser.Physics.Arcade"
		     },
		     "p2": {
		      "!type": "+Phaser.Physics.P2"
		     },
		     "ninja": {
		      "!type": "+Phaser.Physics.Ninja"
		     },
		     "box2d": {
		      "!type": "+Phaser.Physics.Box2D"
		     },
		     "chipmunk": {
		      "!type": "+Phaser.Physics.Chipmunk"
		     },
		     "matter": {
		      "!type": "+Phaser.Physics.Matter"
		     },
		     "parseConfig": {
		      "!type": "fn()"
		     },
		     "startSystem": {
		      "!type": "fn()"
		     },
		     "enable": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "clear": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    },
		    "P2#setWorldMaterial": {
		     "left": {},
		     "right": {},
		     "top": {},
		     "bottom": {}
		    },
		    "P2#setWorldMaterial#walls": {
		     "left": {
		      "shapes[0]": {
		       "material": {}
		      }
		     },
		     "right": {
		      "shapes[0]": {
		       "material": {}
		      }
		     },
		     "top": {
		      "shapes[0]": {
		       "material": {}
		      }
		     },
		     "bottom": {
		      "shapes[0]": {
		       "material": {}
		      }
		     }
		    },
		    "P2#updateBoundsCollisionGroup": {
		     "mask": {}
		    },
		    "P2#updateBoundsCollisionGroup#walls": {
		     "left": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "right": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "top": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "bottom": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     }
		    },
		    "P2#setBounds": {
		     "left": {},
		     "right": {},
		     "top": {},
		     "bottom": {},
		     "setCollisionGroup": {},
		     "prototype": {
		      "_boundsLeft": {},
		      "_boundsRight": {},
		      "_boundsTop": {},
		      "_boundsBottom": {},
		      "_boundsOwnGroup": {}
		     }
		    },
		    "P2#setBounds#walls": {
		     "left": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "right": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "top": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "bottom": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     }
		    },
		    "P2#pause": {
		     "prototype": {
		      "paused": {}
		     }
		    },
		    "P2#resume": {
		     "prototype": {
		      "paused": {}
		     }
		    },
		    "P2#reset": {
		     "prototype": {
		      "nothingCollisionGroup": {},
		      "boundsCollisionGroup": {},
		      "everythingCollisionGroup": {},
		      "_collisionGroupID": {}
		     }
		    },
		    "P2#clear#world": {
		     "time": {},
		     "fixedStepTime": {}
		    },
		    "P2#clear": {
		     "cs": {},
		     "i": {},
		     "bodies": {},
		     "springs": {},
		     "cms": {},
		     "prototype": {
		      "postBroadphaseCallback": {},
		      "callbackContext": {},
		      "impactCallback": {},
		      "collisionGroups": {},
		      "_toRemove": {},
		      "boundsCollidesWith": {}
		     }
		    },
		    "P2#destroy": {
		     "prototype": {
		      "game": {}
		     }
		    },
		    "P2#createDistanceConstraint": {
		     "bodyA": {},
		     "bodyB": {}
		    },
		    "P2#createGearConstraint": {
		     "bodyA": {},
		     "bodyB": {}
		    },
		    "P2#createRevoluteConstraint": {
		     "bodyA": {},
		     "bodyB": {}
		    },
		    "P2#createLockConstraint": {
		     "bodyA": {},
		     "bodyB": {}
		    },
		    "P2#createPrismaticConstraint": {
		     "bodyA": {},
		     "bodyB": {}
		    },
		    "P2#setMaterial": {
		     "i": {}
		    },
		    "P2#createMaterial": {
		     "name": {},
		     "material": {}
		    },
		    "P2#createContactMaterial": {
		     "materialA": {},
		     "materialB": {},
		     "contact": {}
		    },
		    "P2#getBodies": {
		     "output": {},
		     "i": {}
		    },
		    "P2#getSprings": {
		     "output": {},
		     "i": {}
		    },
		    "P2#getConstraints": {
		     "output": {},
		     "i": {}
		    },
		    "P2#hitTest": {
		     "bodies": {},
		     "precision": {},
		     "filterStatic": {},
		     "physicsPosition": {},
		     "query": {},
		     "i": {}
		    },
		    "P2#createCollisionGroup": {
		     "bitmask": {},
		     "group": {}
		    },
		    "P2#createCollisionGroup#walls": {
		     "left": {
		      "shapes[0]": {
		       "collisionMask": {}
		      }
		     },
		     "right": {
		      "shapes[0]": {
		       "collisionMask": {}
		      }
		     },
		     "top": {
		      "shapes[0]": {
		       "collisionMask": {}
		      }
		     },
		     "bottom": {
		      "shapes[0]": {
		       "collisionMask": {}
		      }
		     }
		    },
		    "P2y": {
		     "prototype": {
		      "setCollisionGroup": {
		       "!type": "fn(object: +Phaser.Group|+Phaser.Sprite, group: +Phaser.Physics.CollisionGroup)"
		      }
		     }
		    },
		    "P2#setCollisionGroup": {
		     "i": {}
		    },
		    "P2#createSpring": {
		     "bodyA": {},
		     "bodyB": {}
		    },
		    "P2#createRotationalSpring": {
		     "bodyA": {},
		     "bodyB": {}
		    },
		    "P2#createBody": {
		     "addToWorld": {},
		     "body": {},
		     "result": {}
		    },
		    "P2#createParticle": {
		     "addToWorld": {},
		     "body": {},
		     "result": {}
		    },
		    "P2#convertCollisionObjects": {
		     "addToWorld": {},
		     "output": {},
		     "i": {},
		     "len": {},
		     "object": {},
		     "body": {}
		    },
		    "P2#clearTilemapLayerBodies": {
		     "layer": {},
		     "i": {}
		    },
		    "P2#convertTilemap": {
		     "layer": {},
		     "addToWorld": {},
		     "optimize": {},
		     "width": {},
		     "sx": {},
		     "sy": {},
		     "y": {},
		     "h": {},
		     "x": {},
		     "w": {},
		     "tile": {},
		     "right": {},
		     "body": {}
		    },
		    "P2#mpx": {
		     "v": {}
		    },
		    "P2#mpxi": {
		     "v": {}
		    },
		    "!type": "fn(game: +Phaser.Game, physicsConfig: ?)",
		    "config": {},
		    "ARCADE": {
		     "!type": "number"
		    },
		    "P2JS": {
		     "!type": "number"
		    },
		    "NINJA": {
		     "!type": "number"
		    },
		    "BOX2D": {
		     "!type": "number"
		    },
		    "CHIPMUNK": {
		     "!type": "number"
		    },
		    "MATTERJS": {
		     "!type": "number"
		    }
		   },
		   "Phyiscs": {
		    "Ninja": {
		     "AABB": {
		      "prototype": {
		       "reportCollision": {
		        "!type": "fn(px: number, py: number, dx: number, dy: number)"
		       }
		      }
		     }
		    }
		   },
		   "Physics#parseConfig": {
		    "prototype": {
		     "arcade": {},
		     "ninja": {},
		     "p2": {},
		     "box2d": {},
		     "matter": {}
		    }
		   },
		   "Physics#startSystem": {
		    "prototype": {
		     "arcade": {},
		     "p2": {},
		     "ninja": {},
		     "box2d": {},
		     "matter": {}
		    }
		   },
		   "Physics#enable": {
		    "system": {},
		    "debug": {}
		   },
		   "Physics#destroy": {
		    "prototype": {
		     "arcade": {},
		     "ninja": {},
		     "p2": {},
		     "box2d": {},
		     "matter": {}
		    }
		   },
		   "AudioSprite": {
		    "!type": "fn(game: +Phaser.Game, key: string)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "config": {},
		     "autoplayKey": {
		      "!type": "string"
		     },
		     "autoplay": {
		      "!type": "bool"
		     },
		     "sounds": {},
		     "sounds[undefined]": {},
		     "play": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "k": {},
		    "marker": {},
		    "sound": {}
		   },
		   "AudioSprite#play": {
		    "volume": {}
		   },
		   "AudioSprite#stop": {
		    "key": {}
		   },
		   "Sound": {
		    "!type": "fn(game: +Phaser.Game, key: string, volume: number, loop: bool)",
		    "volume": {},
		    "loop": {},
		    "connect": {},
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "loop": {
		      "!type": "bool"
		     },
		     "volume": {
		      "!type": "number"
		     },
		     "markers": {},
		     "context": {
		      "!type": "+AudioContext"
		     },
		     "autoplay": {
		      "!type": "bool"
		     },
		     "totalDuration": {
		      "!type": "number"
		     },
		     "startTime": {
		      "!type": "number"
		     },
		     "currentTime": {
		      "!type": "number"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "durationMS": {
		      "!type": "number"
		     },
		     "position": {
		      "!type": "number"
		     },
		     "stopTime": {
		      "!type": "number"
		     },
		     "paused": {
		      "!type": "bool"
		     },
		     "pausedPosition": {
		      "!type": "number"
		     },
		     "pausedTime": {
		      "!type": "number"
		     },
		     "isPlaying": {
		      "!type": "bool"
		     },
		     "currentMarker": {
		      "!type": "string"
		     },
		     "fadeTween": {
		      "!type": "+Phaser.Tween"
		     },
		     "pendingPlayback": {
		      "!type": "bool"
		     },
		     "override": {
		      "!type": "bool"
		     },
		     "allowMultiple": {
		      "!type": "bool"
		     },
		     "usingWebAudio": {
		      "!type": "bool"
		     },
		     "usingAudioTag": {
		      "!type": "bool"
		     },
		     "externalNode": {},
		     "masterGainNode": {},
		     "gainNode": {},
		     "_sound": {},
		     "onDecoded": {
		      "!type": "+Phaser.Signal"
		     },
		     "onPlay": {
		      "!type": "+Phaser.Signal"
		     },
		     "onPause": {
		      "!type": "+Phaser.Signal"
		     },
		     "onResume": {
		      "!type": "+Phaser.Signal"
		     },
		     "onLoop": {
		      "!type": "+Phaser.Signal"
		     },
		     "onStop": {
		      "!type": "+Phaser.Signal"
		     },
		     "onMute": {
		      "!type": "+Phaser.Signal"
		     },
		     "onMarkerComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFadeComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "_volume": {
		      "!type": "number"
		     },
		     "_buffer": {
		      "!type": "+any"
		     },
		     "_muted": {
		      "!type": "bool"
		     },
		     "_tempMarker": {
		      "!type": "number"
		     },
		     "_tempPosition": {
		      "!type": "number"
		     },
		     "_tempVolume": {
		      "!type": "number"
		     },
		     "_muteVolume": {
		      "!type": "number"
		     },
		     "_tempLoop": {
		      "!type": "bool"
		     },
		     "_paused": {
		      "!type": "bool"
		     },
		     "_onDecodedEventDispatched": {
		      "!type": "bool"
		     },
		     "soundHasUnlocked": {
		      "!type": "fn()"
		     },
		     "addMarker": {
		      "!type": "fn()"
		     },
		     "removeMarker": {
		      "!type": "fn()"
		     },
		     "onEndedHandler": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "loopFull": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn()"
		     },
		     "restart": {
		      "!type": "fn()"
		     },
		     "pause": {
		      "!type": "fn()"
		     },
		     "resume": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "fadeIn": {
		      "!type": "fn()"
		     },
		     "fadeOut": {
		      "!type": "fn()"
		     },
		     "fadeTo": {
		      "!type": "fn()"
		     },
		     "fadeComplete": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "isDecoding": {
		      "!type": "bool"
		     },
		     "isDecoded": {
		      "!type": "bool"
		     },
		     "mute": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Sound#gainNode": {
		    "gain": {
		     "value": {}
		    }
		   },
		   "Sound#soundHasUnlocked": {
		    "prototype": {
		     "_sound": {},
		     "totalDuration": {}
		    }
		   },
		   "Sound#addMarker": {
		    "volume": {},
		    "loop": {},
		    "prototype": {
		     "markers[undefined]": {}
		    }
		   },
		   "Sound#addMarker#markers[undefined]": {
		    "name": {},
		    "start": {},
		    "stop": {},
		    "volume": {},
		    "duration": {},
		    "durationMS": {},
		    "loop": {}
		   },
		   "Sound#onEndedHandler": {
		    "prototype": {
		     "isPlaying": {}
		    }
		   },
		   "Sound#update": {
		    "prototype": {
		     "_onDecodedEventDispatched": {},
		     "pendingPlayback": {},
		     "currentTime": {},
		     "startTime": {}
		    }
		   },
		   "Sound#play": {
		    "marker": {},
		    "forceRestart": {},
		    "prototype": {
		     "currentMarker": {},
		     "position": {},
		     "volume": {},
		     "loop": {},
		     "duration": {},
		     "durationMS": {},
		     "_tempMarker": {},
		     "_tempPosition": {},
		     "_tempVolume": {},
		     "_tempLoop": {},
		     "_sound": {},
		     "_buffer": {},
		     "totalDuration": {},
		     "isPlaying": {},
		     "startTime": {},
		     "currentTime": {},
		     "stopTime": {},
		     "pendingPlayback": {}
		    },
		    "position": {},
		    "volume": {},
		    "loop": {}
		   },
		   "Sound#play#_sound": {
		    "currentTime": {},
		    "buffer": {},
		    "loop": {},
		    "onended": {},
		    "muted": {},
		    "volume": {}
		   },
		   "Sound#restart": {
		    "marker": {},
		    "position": {},
		    "volume": {},
		    "loop": {}
		   },
		   "Sound#pause": {
		    "prototype": {
		     "paused": {},
		     "pausedPosition": {},
		     "pausedTime": {}
		    }
		   },
		   "Sound#resume": {
		    "p": {},
		    "prototype": {
		     "_sound": {},
		     "isPlaying": {},
		     "paused": {},
		     "startTime": {}
		    },
		    "duration": {}
		   },
		   "Sound#resume#_sound": {
		    "buffer": {},
		    "loop": {},
		    "onended": {}
		   },
		   "Sound#stop#_sound": {
		    "currentTime": {}
		   },
		   "Sound#stop": {
		    "prototype": {
		     "pendingPlayback": {},
		     "isPlaying": {},
		     "currentMarker": {}
		    },
		    "prevMarker": {}
		   },
		   "Sound#fadeIn": {
		    "loop": {},
		    "marker": {}
		   },
		   "Sound#fadeTo": {
		    "duration": {},
		    "prototype": {
		     "fadeTween": {}
		    }
		   },
		   "Sound#destroy": {
		    "remove": {},
		    "prototype": {
		     "markers": {},
		     "context": {},
		     "_buffer": {},
		     "externalNode": {}
		    }
		   },
		   "SoundManager": {
		    "!type": "fn()",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "onSoundDecode": {
		      "!type": "+Phaser.Signal"
		     },
		     "onVolumeChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "onMute": {
		      "!type": "+Phaser.Signal"
		     },
		     "onUnMute": {
		      "!type": "+Phaser.Signal"
		     },
		     "context": {
		      "!type": "+AudioContext"
		     },
		     "usingWebAudio": {
		      "!type": "bool"
		     },
		     "usingAudioTag": {
		      "!type": "bool"
		     },
		     "noAudio": {
		      "!type": "bool"
		     },
		     "connectToMaster": {
		      "!type": "bool"
		     },
		     "touchLocked": {
		      "!type": "bool"
		     },
		     "channels": {
		      "!type": "number"
		     },
		     "_codeMuted": {
		      "!type": "bool"
		     },
		     "_muted": {
		      "!type": "bool"
		     },
		     "_unlockSource": {
		      "!type": "+AudioContext"
		     },
		     "_volume": {
		      "!type": "number"
		     },
		     "_sounds": {
		      "!type": "+array"
		     },
		     "_watchList": {
		      "!type": "+Phaser.ArraySet"
		     },
		     "_watching": {
		      "!type": "bool"
		     },
		     "_watchCallback": {
		      "!type": "+function"
		     },
		     "_watchContext": {},
		     "boot": {
		      "!type": "fn()"
		     },
		     "setTouchLock": {
		      "!type": "fn()"
		     },
		     "unlock": {
		      "!type": "fn()"
		     },
		     "stopAll": {
		      "!type": "fn()"
		     },
		     "pauseAll": {
		      "!type": "fn()"
		     },
		     "resumeAll": {
		      "!type": "fn()"
		     },
		     "decode": {
		      "!type": "fn()"
		     },
		     "setDecodedCallback": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "addSprite": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "removeByKey": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn()"
		     },
		     "setMute": {
		      "!type": "fn()"
		     },
		     "unsetMute": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "mute": {
		      "!type": "bool"
		     },
		     "volume": {
		      "!type": "number"
		     }
		    }
		   },
		   "SoundManager#boot": {
		    "prototype": {
		     "channels": {},
		     "noAudio": {},
		     "touchLocked": {},
		     "usingAudioTag": {},
		     "context": {},
		     "usingWebAudio": {},
		     "masterGain": {}
		    }
		   },
		   "SoundManager#boot#masterGain": {
		    "gain": {
		     "value": {}
		    }
		   },
		   "SoundManager#setTouchLock": {
		    "prototype": {
		     "touchLocked": {}
		    }
		   },
		   "SoundManager#unlock": {
		    "prototype": {
		     "touchLocked": {},
		     "_unlockSource": {}
		    },
		    "buffer": {}
		   },
		   "SoundManager#unlock#_unlockSource": {
		    "buffer": {}
		   },
		   "SoundManager#stopAll": {
		    "i": {}
		   },
		   "SoundManager#pauseAll": {
		    "i": {}
		   },
		   "SoundManager#resumeAll": {
		    "i": {}
		   },
		   "SoundManager#decode": {
		    "sound": {},
		    "soundData": {},
		    "_this": {}
		   },
		   "SoundManager#setDecodedCallback": {
		    "files": {},
		    "i": {},
		    "prototype": {
		     "_watching": {},
		     "_watchCallback": {},
		     "_watchContext": {}
		    }
		   },
		   "SoundManager#update": {
		    "prototype": {
		     "touchLocked": {},
		     "_unlockSource": {},
		     "_watching": {}
		    },
		    "i": {},
		    "key": {}
		   },
		   "SoundManager#add": {
		    "volume": {},
		    "loop": {},
		    "connect": {},
		    "sound": {}
		   },
		   "SoundManager#addSprite": {
		    "audioSprite": {}
		   },
		   "SoundManager#remove": {
		    "i": {}
		   },
		   "SoundManager#removeByKey": {
		    "i": {},
		    "removed": {}
		   },
		   "SoundManager#play": {
		    "sound": {}
		   },
		   "SoundManager#setMute": {
		    "prototype": {
		     "_muted": {},
		     "_muteVolume": {}
		    },
		    "i": {}
		   },
		   "SoundManager#setMute#masterGain": {
		    "gain": {
		     "value": {}
		    }
		   },
		   "SoundManager#setMute#_sounds[undefined]": {
		    "mute": {}
		   },
		   "SoundManager#unsetMute": {
		    "prototype": {
		     "_muted": {}
		    },
		    "i": {}
		   },
		   "SoundManager#unsetMute#masterGain": {
		    "gain": {
		     "value": {}
		    }
		   },
		   "SoundManager#unsetMute#_sounds[undefined]": {
		    "mute": {}
		   },
		   "SoundManager#destroy": {
		    "i": {},
		    "prototype": {
		     "_sounds": {}
		    }
		   },
		   "Utils": {
		    "Debug": {
		     "prototype": {
		      "isDisabled": {},
		      "boot": {
		       "!type": "fn()"
		      },
		      "preUpdate": {
		       "!type": "fn()"
		      },
		      "reset": {
		       "!type": "fn()"
		      },
		      "start": {
		       "!type": "fn()"
		      },
		      "stop": {
		       "!type": "fn()"
		      },
		      "line": {
		       "!type": "fn()"
		      },
		      "soundInfo": {
		       "!type": "fn()"
		      },
		      "cameraInfo": {
		       "!type": "fn()"
		      },
		      "timer": {
		       "!type": "fn()"
		      },
		      "pointer": {
		       "!type": "fn()"
		      },
		      "spriteInputInfo": {
		       "!type": "fn()"
		      },
		      "key": {
		       "!type": "fn()"
		      },
		      "inputInfo": {
		       "!type": "fn()"
		      },
		      "spriteBounds": {
		       "!type": "fn()"
		      },
		      "ropeSegments": {
		       "!type": "fn()"
		      },
		      "spriteInfo": {
		       "!type": "fn()"
		      },
		      "spriteCoords": {
		       "!type": "fn()"
		      },
		      "lineInfo": {
		       "!type": "fn()"
		      },
		      "pixel": {
		       "!type": "fn()"
		      },
		      "geom": {
		       "!type": "fn(object: +Phaser.Rectangle|?, color: string, filled: bool)"
		      },
		      "rectangle": {
		       "!type": "fn()"
		      },
		      "text": {
		       "!type": "fn()"
		      },
		      "quadTree": {
		       "!type": "fn()"
		      },
		      "body": {
		       "!type": "fn()"
		      },
		      "bodyInfo": {
		       "!type": "fn()"
		      },
		      "box2dWorld": {
		       "!type": "fn()"
		      },
		      "box2dBody": {
		       "!type": "fn()"
		      },
		      "game": {
		       "!type": "+Phaser.Game"
		      },
		      "sprite": {
		       "!type": "+Phaser.Image"
		      },
		      "bmd": {
		       "!type": "+Phaser.BitmapData"
		      },
		      "canvas": {
		       "!type": "+HTMLCanvasElement"
		      },
		      "context": {
		       "!type": "+CanvasRenderingContext2D"
		      },
		      "font": {
		       "!type": "string"
		      },
		      "columnWidth": {
		       "!type": "number"
		      },
		      "lineHeight": {
		       "!type": "number"
		      },
		      "renderShadow": {
		       "!type": "bool"
		      },
		      "currentX": {
		       "!type": "number"
		      },
		      "currentY": {
		       "!type": "number"
		      },
		      "currentAlpha": {
		       "!type": "number"
		      },
		      "dirty": {
		       "!type": "bool"
		      },
		      "destroy": {
		       "!type": "fn()"
		      }
		     },
		     "!type": "fn(game: +Phaser.Game)"
		    },
		    "Debug#boot": {
		     "prototype": {
		      "context": {},
		      "bmd": {},
		      "sprite": {},
		      "canvas": {}
		     }
		    },
		    "Debug#preUpdate": {
		     "prototype": {
		      "dirty": {}
		     }
		    },
		    "Debug#start": {
		     "x": {},
		     "y": {},
		     "color": {},
		     "columnWidth": {},
		     "prototype": {
		      "currentX": {},
		      "currentY": {},
		      "currentColor": {},
		      "columnWidth": {},
		      "dirty": {}
		     }
		    },
		    "Debug#start#context": {
		     "strokeStyle": {},
		     "fillStyle": {},
		     "font": {},
		     "globalAlpha": {}
		    },
		    "Debug#line": {
		     "x": {},
		     "i": {},
		     "prototype": {
		      "currentY": {}
		     }
		    },
		    "Debug#line#context": {
		     "fillStyle": {}
		    },
		    "Debug#pointer": {
		     "hideIfUp": {},
		     "downColor": {},
		     "upColor": {}
		    },
		    "Debug#pointer#context": {
		     "fillStyle": {},
		     "lineWidth": {}
		    },
		    "Debug#spriteBounds": {
		     "bounds": {}
		    },
		    "Debug#spriteBounds~bounds": {
		     "x": {},
		     "y": {}
		    },
		    "Debug#ropeSegments": {
		     "segments": {},
		     "self": {}
		    },
		    "Debug#pixel": {
		     "size": {}
		    },
		    "Debug#pixel#context": {
		     "fillStyle": {}
		    },
		    "Debug#geom": {
		     "filled": {},
		     "forceType": {},
		     "color": {}
		    },
		    "Debug#geom#context": {
		     "fillStyle": {},
		     "strokeStyle": {},
		     "lineWidth": {}
		    },
		    "Debug#rectangle": {
		     "filled": {},
		     "color": {}
		    },
		    "Debug#rectangle#context": {
		     "fillStyle": {},
		     "strokeStyle": {}
		    },
		    "Debug#text": {
		     "color": {},
		     "font": {}
		    },
		    "Debug#text#context": {
		     "font": {},
		     "fillStyle": {}
		    },
		    "Debug#quadTree": {
		     "color": {},
		     "bounds": {},
		     "i": {}
		    },
		    "Debug#quadTree#context": {
		     "strokeStyle": {}
		    },
		    "!type": "fn()",
		    "getProperty": {
		     "!type": "fn()",
		     "parts": {},
		     "last": {},
		     "l": {},
		     "i": {},
		     "current": {},
		     "obj": {}
		    },
		    "setProperty": {
		     "!type": "fn()",
		     "parts": {},
		     "last": {},
		     "l": {},
		     "i": {},
		     "current": {},
		     "obj": {}
		    },
		    "setProperty~obj": {
		     "undefined]": {}
		    },
		    "chanceRoll": {
		     "!type": "fn()",
		     "chance": {}
		    },
		    "prototype": {
		     "randomChoice": {
		      "!type": "fn(choice1: +any, choice2: +any) -> ?"
		     }
		    },
		    "randomChoice": {
		     "!type": "fn()"
		    },
		    "parseDimension": {
		     "!type": "fn()",
		     "f": {},
		     "px": {}
		    },
		    "pad": {
		     "!type": "fn()",
		     "len": {},
		     "pad": {},
		     "dir": {},
		     "padlen": {},
		     "str": {},
		     "right": {},
		     "left": {}
		    },
		    "isPlainObject": {
		     "!type": "fn()"
		    },
		    "extend": {
		     "!type": "fn()",
		     "options": {},
		     "name": {},
		     "src": {},
		     "copy": {},
		     "copyIsArray": {},
		     "clone": {},
		     "target": {},
		     "i": {},
		     "length": {},
		     "deep": {}
		    },
		    "extend~target": {
		     "undefined]": {}
		    },
		    "mixinPrototype": {
		     "!type": "fn()",
		     "replace": {},
		     "mixinKeys": {},
		     "i": {},
		     "key": {},
		     "value": {}
		    },
		    "mixin": {
		     "!type": "fn()",
		     "key": {},
		     "o": {},
		     "type": {}
		    }
		   },
		   "TweenManager": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "update": {
		      "!type": "fn()"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "frameBased": {
		      "!type": "bool"
		     },
		     "_tweens": {
		      "!type": "+array.<Phaser.Tween>"
		     },
		     "_add": {
		      "!type": "+array.<Phaser.Tween>"
		     },
		     "easeMap": {},
		     "getAll": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "removeFrom": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "isTweening": {
		      "!type": "fn()"
		     },
		     "_pauseAll": {
		      "!type": "fn()"
		     },
		     "_resumeAll": {
		      "!type": "fn()"
		     },
		     "pauseAll": {
		      "!type": "fn()"
		     },
		     "resumeAll": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Canvas": {
		    "!type": "fn()",
		    "create": {
		     "!type": "fn()",
		     "width": {},
		     "height": {},
		     "canvas": {}
		    },
		    "create~canvas": {
		     "id": {},
		     "width": {},
		     "height": {},
		     "style_display": {}
		    },
		    "setBackgroundColor": {
		     "!type": "fn()",
		     "color": {}
		    },
		    "setTouchAction": {
		     "!type": "fn()",
		     "value": {}
		    },
		    "setUserSelect": {
		     "!type": "fn()",
		     "value": {}
		    },
		    "addToDOM": {
		     "!type": "fn()",
		     "target": {},
		     "overflowHidden": {}
		    },
		    "addToDOM~target": {
		     "style_overflow": {}
		    },
		    "removeFromDOM": {
		     "!type": "fn()"
		    },
		    "setTransform": {
		     "!type": "fn()"
		    },
		    "setSmoothingEnabled": {
		     "!type": "fn()",
		     "vendor": {},
		     "prefix": {},
		     "s": {}
		    },
		    "getSmoothingEnabled": {
		     "!type": "fn()"
		    },
		    "setImageRenderingCrisp": {
		     "!type": "fn()"
		    },
		    "setImageRenderingBicubic": {
		     "!type": "fn()"
		    }
		   },
		   "Device": {
		    "!type": "fn()",
		    "prototype": {
		     "deviceReadyAt": {
		      "!type": "number"
		     },
		     "initialized": {
		      "!type": "bool"
		     },
		     "desktop": {
		      "!type": "bool"
		     },
		     "iOS": {
		      "!type": "bool"
		     },
		     "cocoonJS": {
		      "!type": "bool"
		     },
		     "cocoonJSApp": {
		      "!type": "bool"
		     },
		     "cordova": {
		      "!type": "bool"
		     },
		     "node": {
		      "!type": "bool"
		     },
		     "nodeWebkit": {
		      "!type": "bool"
		     },
		     "electron": {
		      "!type": "bool"
		     },
		     "ejecta": {
		      "!type": "bool"
		     },
		     "crosswalk": {
		      "!type": "bool"
		     },
		     "android": {
		      "!type": "bool"
		     },
		     "chromeOS": {
		      "!type": "bool"
		     },
		     "linux": {
		      "!type": "bool"
		     },
		     "macOS": {
		      "!type": "bool"
		     },
		     "windows": {
		      "!type": "bool"
		     },
		     "windowsPhone": {
		      "!type": "bool"
		     },
		     "canvas": {
		      "!type": "bool"
		     },
		     "canvasBitBltShift": {
		      "!type": "bool"
		     },
		     "webGL": {
		      "!type": "bool"
		     },
		     "file": {
		      "!type": "bool"
		     },
		     "fileSystem": {
		      "!type": "bool"
		     },
		     "localStorage": {
		      "!type": "bool"
		     },
		     "worker": {
		      "!type": "bool"
		     },
		     "css3D": {
		      "!type": "bool"
		     },
		     "pointerLock": {
		      "!type": "bool"
		     },
		     "typedArray": {
		      "!type": "bool"
		     },
		     "vibration": {
		      "!type": "bool"
		     },
		     "getUserMedia": {
		      "!type": "bool"
		     },
		     "quirksMode": {
		      "!type": "bool"
		     },
		     "touch": {
		      "!type": "bool"
		     },
		     "mspointer": {
		      "!type": "bool"
		     },
		     "wheelEvent": {
		      "!type": "string"
		     },
		     "arora": {
		      "!type": "bool"
		     },
		     "chrome": {
		      "!type": "bool"
		     },
		     "chromeVersion": {
		      "!type": "number"
		     },
		     "epiphany": {
		      "!type": "bool"
		     },
		     "firefox": {
		      "!type": "bool"
		     },
		     "firefoxVersion": {
		      "!type": "number"
		     },
		     "ie": {
		      "!type": "bool"
		     },
		     "ieVersion": {
		      "!type": "number"
		     },
		     "trident": {
		      "!type": "bool"
		     },
		     "tridentVersion": {
		      "!type": "number"
		     },
		     "mobileSafari": {
		      "!type": "bool"
		     },
		     "midori": {
		      "!type": "bool"
		     },
		     "opera": {
		      "!type": "bool"
		     },
		     "safari": {
		      "!type": "bool"
		     },
		     "webApp": {
		      "!type": "bool"
		     },
		     "silk": {
		      "!type": "bool"
		     },
		     "audioData": {
		      "!type": "bool"
		     },
		     "webAudio": {
		      "!type": "bool"
		     },
		     "ogg": {
		      "!type": "bool"
		     },
		     "opus": {
		      "!type": "bool"
		     },
		     "mp3": {
		      "!type": "bool"
		     },
		     "wav": {
		      "!type": "bool"
		     },
		     "m4a": {
		      "!type": "bool"
		     },
		     "webm": {
		      "!type": "bool"
		     },
		     "oggVideo": {
		      "!type": "bool"
		     },
		     "h264Video": {
		      "!type": "bool"
		     },
		     "mp4Video": {
		      "!type": "bool"
		     },
		     "webmVideo": {
		      "!type": "bool"
		     },
		     "vp9Video": {
		      "!type": "bool"
		     },
		     "hlsVideo": {
		      "!type": "bool"
		     },
		     "iPhone": {
		      "!type": "bool"
		     },
		     "iPhone4": {
		      "!type": "bool"
		     },
		     "iPad": {
		      "!type": "bool"
		     },
		     "pixelRatio": {
		      "!type": "number"
		     },
		     "littleEndian": {
		      "!type": "bool"
		     },
		     "LITTLE_ENDIAN": {
		      "!type": "bool"
		     },
		     "support32bit": {
		      "!type": "bool"
		     },
		     "fullscreen": {
		      "!type": "bool"
		     },
		     "requestFullscreen": {
		      "!type": "string"
		     },
		     "cancelFullscreen": {
		      "!type": "string"
		     },
		     "fullscreenKeyboard": {
		      "!type": "bool"
		     },
		     "canPlayAudio": {
		      "!type": "fn(type: string) -> ?"
		     },
		     "canPlayVideo": {
		      "!type": "fn(type: string) -> ?"
		     },
		     "isConsoleOpen": {
		      "!type": "fn()"
		     },
		     "isAndroidStockBrowser": {
		      "!type": "fn()"
		     }
		    },
		    "onInitialized": {},
		    "whenReady": {
		     "!type": "fn(handler: +function, context: ?, nonPrimer: bool)",
		     "readyCheck": {},
		     "cordova": {},
		     "cocoonJS": {}
		    },
		    "whenReady~readyCheck": {
		     "_queue": {},
		     "_monitor": {}
		    },
		    "_readyCheck": {
		     "!type": "fn()",
		     "readyCheck": {},
		     "prototype": {
		      "deviceReadyAt": {},
		      "initialized": {},
		      "_readyCheck": {},
		      "_initialize": {},
		      "onInitialized": {}
		     },
		     "item": {},
		     "callback": {},
		     "context": {}
		    },
		    "_initialize": {
		     "!type": "fn()",
		     "device": {},
		     "_checkOS": {
		      "!type": "fn()"
		     },
		     "_checkFeatures": {
		      "!type": "fn()"
		     },
		     "_checkInput": {
		      "!type": "fn()"
		     },
		     "_checkFullScreenSupport": {
		      "!type": "fn()"
		     },
		     "_checkBrowser": {
		      "!type": "fn()"
		     },
		     "_checkVideo": {
		      "!type": "fn()"
		     },
		     "_checkAudio": {
		      "!type": "fn()"
		     },
		     "_checkDevice": {
		      "!type": "fn()"
		     },
		     "_checkIsLittleEndian": {
		      "!type": "fn()"
		     },
		     "_checkIsUint8ClampedImageData": {
		      "!type": "fn()"
		     },
		     "_checkCSS3D": {
		      "!type": "fn()"
		     }
		    },
		    "_initialize~_checkOS": {
		     "ua": {},
		     "silk": {}
		    },
		    "_initialize~device": {
		     "vita": {},
		     "kindle": {},
		     "android": {},
		     "chromeOS": {},
		     "iOS": {},
		     "linux": {},
		     "macOS": {},
		     "windows": {},
		     "windowsPhone": {},
		     "desktop": {},
		     "canvas": {},
		     "localStorage": {},
		     "file": {},
		     "fileSystem": {},
		     "webGL": {},
		     "worker": {},
		     "pointerLock": {},
		     "quirksMode": {},
		     "getUserMedia": {},
		     "canvasBitBltShift": {},
		     "touch": {},
		     "mspointer": {},
		     "wheelEvent": {},
		     "fullscreen": {},
		     "requestFullscreen": {},
		     "cancelFullscreen": {},
		     "fullscreenKeyboard": {},
		     "arora": {},
		     "chrome": {},
		     "chromeVersion": {},
		     "epiphany": {},
		     "firefox": {},
		     "firefoxVersion": {},
		     "mobileSafari": {},
		     "ie": {},
		     "ieVersion": {},
		     "midori": {},
		     "opera": {},
		     "safari": {},
		     "trident": {},
		     "tridentVersion": {},
		     "silk": {},
		     "webApp": {},
		     "cordova": {},
		     "node": {},
		     "nodeWebkit": {},
		     "electron": {},
		     "cocoonJS": {},
		     "cocoonJSApp": {},
		     "ejecta": {},
		     "crosswalk": {},
		     "oggVideo": {},
		     "h264Video": {},
		     "mp4Video": {},
		     "webmVideo": {},
		     "vp9Video": {},
		     "hlsVideo": {},
		     "audioData": {},
		     "webAudio": {},
		     "ogg": {},
		     "opus": {},
		     "mp3": {},
		     "wav": {},
		     "m4a": {},
		     "webm": {},
		     "pixelRatio": {},
		     "iPhone": {},
		     "iPhone4": {},
		     "iPad": {},
		     "typedArray": {},
		     "littleEndian": {},
		     "LITTLE_ENDIAN": {},
		     "support32bit": {},
		     "vibration": {},
		     "css3D": {}
		    },
		    "_initialize~_checkFullScreenSupport": {
		     "fs": {},
		     "element": {},
		     "i": {},
		     "cfs": {}
		    },
		    "_initialize~_checkBrowser": {
		     "ua": {}
		    },
		    "_initialize~_checkVideo": {
		     "videoElement": {},
		     "result": {}
		    },
		    "_initialize~_checkAudio": {
		     "audioElement": {},
		     "result": {}
		    },
		    "_initialize~_checkIsLittleEndian": {
		     "a": {},
		     "b": {},
		     "c": {}
		    },
		    "_initialize~_checkIsLittleEndian~b": {
		     "0]": {},
		     "1]": {},
		     "2]": {},
		     "3]": {}
		    },
		    "_initialize~_checkIsUint8ClampedImageData": {
		     "elem": {},
		     "ctx": {},
		     "image": {}
		    },
		    "_initialize~_checkCSS3D": {
		     "el": {},
		     "has3d": {},
		     "transforms": {},
		     "t": {}
		    },
		    "_initialize~_checkCSS3D~transforms": {
		     "webkitTransform": {},
		     "OTransform": {},
		     "msTransform": {},
		     "MozTransform": {},
		     "transform": {}
		    },
		    "_initialize~_checkCSS3D~el": {
		     "style[undefined]": {}
		    },
		    "canPlayAudio": {
		     "!type": "fn()"
		    },
		    "canPlayVideo": {
		     "!type": "fn()"
		    },
		    "isConsoleOpen": {
		     "!type": "fn()"
		    },
		    "isAndroidStockBrowser": {
		     "!type": "fn()",
		     "matches": {}
		    }
		   },
		   "DOM": {
		    "!type": "fn()",
		    "getOffset": {
		     "!type": "fn()",
		     "point": {},
		     "box": {},
		     "scrollTop": {},
		     "scrollLeft": {},
		     "clientTop": {},
		     "clientLeft": {}
		    },
		    "getOffset~point": {
		     "x": {},
		     "y": {}
		    },
		    "getBounds": {
		     "!type": "fn()",
		     "cushion": {},
		     "element": {}
		    },
		    "calibrate": {
		     "!type": "fn()",
		     "cushion": {},
		     "output": {}
		    },
		    "calibrate~output": {
		     "width": {
		      "output.right": {},
		      "output.left": {}
		     },
		     "height": {
		      "output.bottom": {},
		      "output.top": {}
		     },
		     "left": {},
		     "right": {},
		     "top": {},
		     "bottom": {}
		    },
		    "getAspectRatio": {
		     "!type": "fn()",
		     "object": {},
		     "w": {},
		     "h": {}
		    },
		    "inLayoutViewport": {
		     "!type": "fn()",
		     "r": {}
		    },
		    "getScreenOrientation": {
		     "!type": "fn()",
		     "screen": {},
		     "orientation": {},
		     "PORTRAIT": {},
		     "LANDSCAPE": {}
		    },
		    "visualBounds": {
		     "!type": "number"
		    },
		    "layoutBounds": {
		     "!type": "number"
		    },
		    "documentBounds": {
		     "!type": "number"
		    },
		    "scrollX": {
		     "!type": "number"
		    },
		    "scrollY": {
		     "!type": "number"
		    }
		   },
		   "RequestAnimationFrame": {
		    "!type": "fn(game: +Phaser.Game, forceSetTimeOut: bool)",
		    "forceSetTimeOut": {},
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "isRunning": {
		      "!type": "bool"
		     },
		     "forceSetTimeOut": {
		      "!type": "bool"
		     },
		     "_isSetTimeOut": {
		      "!type": "bool"
		     },
		     "_onLoop": {
		      "!type": "+function"
		     },
		     "_timeOutID": {
		      "!type": "number"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "updateRAF": {
		      "!type": "fn()"
		     },
		     "updateSetTimeout": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "isSetTimeOut": {
		      "!type": "fn()"
		     },
		     "isRAF": {
		      "!type": "fn()"
		     }
		    },
		    "vendors": {},
		    "x": {}
		   },
		   "RequestAnimationFrame#start": {
		    "prototype": {
		     "isRunning": {},
		     "_isSetTimeOut": {},
		     "_onLoop": {
		      "!type": "fn()"
		     },
		     "_timeOutID": {}
		    },
		    "_this": {}
		   },
		   "RequestAnimationFrame#updateRAF": {
		    "prototype": {
		     "_timeOutID": {}
		    }
		   },
		   "RequestAnimationFrame#updateSetTimeout": {
		    "prototype": {
		     "_timeOutID": {}
		    }
		   },
		   "RequestAnimationFrame#stop": {
		    "prototype": {
		     "isRunning": {}
		    }
		   },
		   "ImageCollection": {
		    "!type": "fn(name: string, firstgid: number, width: number, height: number, margin: number, spacing: number, properties: ?)",
		    "width": {},
		    "height": {},
		    "margin": {},
		    "spacing": {},
		    "prototype": {
		     "name": {
		      "!type": "string"
		     },
		     "firstgid": {
		      "!type": "number"
		     },
		     "imageWidth": {
		      "!type": "number"
		     },
		     "imageHeight": {
		      "!type": "number"
		     },
		     "imageMargin": {
		      "!type": "number"
		     },
		     "imageSpacing": {
		      "!type": "number"
		     },
		     "properties": {},
		     "images": {
		      "!type": "+array"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "containsImageIndex": {
		      "!type": "fn()"
		     },
		     "addImage": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Tile": {
		    "!type": "fn(layer: ?, index: number, x: number, y: number, width: number, height: number)",
		    "prototype": {
		     "layer": {},
		     "index": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "rotation": {
		      "!type": "number"
		     },
		     "flipped": {
		      "!type": "bool"
		     },
		     "worldX": {
		      "!type": "number"
		     },
		     "worldY": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "centerX": {
		      "!type": "number"
		     },
		     "centerY": {
		      "!type": "number"
		     },
		     "alpha": {
		      "!type": "number"
		     },
		     "properties": {},
		     "scanned": {
		      "!type": "bool"
		     },
		     "faceTop": {
		      "!type": "bool"
		     },
		     "faceBottom": {
		      "!type": "bool"
		     },
		     "faceLeft": {
		      "!type": "bool"
		     },
		     "faceRight": {
		      "!type": "bool"
		     },
		     "collideLeft": {
		      "!type": "bool"
		     },
		     "collideRight": {
		      "!type": "bool"
		     },
		     "collideUp": {
		      "!type": "bool"
		     },
		     "collideDown": {
		      "!type": "bool"
		     },
		     "collisionCallback": {
		      "!type": "+function"
		     },
		     "collisionCallbackContext": {},
		     "containsPoint": {
		      "!type": "fn()"
		     },
		     "intersects": {
		      "!type": "fn()"
		     },
		     "setCollisionCallback": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "setCollision": {
		      "!type": "fn()"
		     },
		     "resetCollision": {
		      "!type": "fn()"
		     },
		     "isInteresting": {
		      "!type": "fn()"
		     },
		     "copy": {
		      "!type": "fn()"
		     },
		     "collides": {
		      "!type": "bool"
		     },
		     "canCollide": {
		      "!type": "bool"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     }
		    }
		   },
		   "Tile#setCollisionCallback": {
		    "prototype": {
		     "collisionCallback": {},
		     "collisionCallbackContext": {}
		    }
		   },
		   "Tile#destroy": {
		    "prototype": {
		     "collisionCallback": {},
		     "collisionCallbackContext": {},
		     "properties": {}
		    }
		   },
		   "Tile#setCollision": {
		    "prototype": {
		     "collideLeft": {},
		     "collideRight": {},
		     "collideUp": {},
		     "collideDown": {},
		     "faceLeft": {},
		     "faceRight": {},
		     "faceTop": {},
		     "faceBottom": {}
		    }
		   },
		   "Tile#resetCollision": {
		    "prototype": {
		     "collideLeft": {},
		     "collideRight": {},
		     "collideUp": {},
		     "collideDown": {},
		     "faceTop": {},
		     "faceBottom": {},
		     "faceLeft": {},
		     "faceRight": {}
		    }
		   },
		   "Tile#copy": {
		    "prototype": {
		     "index": {},
		     "alpha": {},
		     "properties": {},
		     "collideUp": {},
		     "collideDown": {},
		     "collideLeft": {},
		     "collideRight": {},
		     "collisionCallback": {},
		     "collisionCallbackContext": {}
		    }
		   },
		   "Tilemap": {
		    "!type": "fn(game: +Phaser.Game, key: string, tileWidth: number, tileHeight: number, width: number, height: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "tileWidth": {
		      "!type": "number"
		     },
		     "tileHeight": {
		      "!type": "number"
		     },
		     "orientation": {
		      "!type": "string"
		     },
		     "format": {
		      "!type": "number"
		     },
		     "version": {
		      "!type": "number"
		     },
		     "properties": {},
		     "widthInPixels": {
		      "!type": "number"
		     },
		     "heightInPixels": {
		      "!type": "number"
		     },
		     "layers": {
		      "!type": "+array"
		     },
		     "tilesets": {
		      "!type": "+array"
		     },
		     "imagecollections": {
		      "!type": "+array"
		     },
		     "tiles": {
		      "!type": "+array"
		     },
		     "objects": {
		      "!type": "+array"
		     },
		     "collideIndexes": {
		      "!type": "+array"
		     },
		     "collision": {
		      "!type": "+array"
		     },
		     "images": {
		      "!type": "+array"
		     },
		     "currentLayer": {
		      "!type": "number"
		     },
		     "debugMap": {
		      "!type": "+array"
		     },
		     "_results": {
		      "!type": "+array"
		     },
		     "_tempA": {
		      "!type": "number"
		     },
		     "_tempB": {
		      "!type": "number"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "setTileSize": {
		      "!type": "fn()"
		     },
		     "addTilesetImage": {
		      "!type": "fn()"
		     },
		     "createFromObjects": {
		      "!type": "fn()"
		     },
		     "createFromTiles": {
		      "!type": "fn()"
		     },
		     "createLayer": {
		      "!type": "fn()"
		     },
		     "createBlankLayer": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn()"
		     },
		     "getLayerIndex": {
		      "!type": "fn()"
		     },
		     "getTilesetIndex": {
		      "!type": "fn()"
		     },
		     "getImageIndex": {
		      "!type": "fn()"
		     },
		     "getObjectIndex": {
		      "!type": "fn()"
		     },
		     "setTileIndexCallback": {
		      "!type": "fn()"
		     },
		     "setTileLocationCallback": {
		      "!type": "fn()"
		     },
		     "setCollision": {
		      "!type": "fn()"
		     },
		     "setCollisionBetween": {
		      "!type": "fn()"
		     },
		     "setCollisionByExclusion": {
		      "!type": "fn()"
		     },
		     "setCollisionByIndex": {
		      "!type": "fn()"
		     },
		     "getLayer": {
		      "!type": "fn()"
		     },
		     "setPreventRecalculate": {
		      "!type": "fn()"
		     },
		     "calculateFaces": {
		      "!type": "fn()"
		     },
		     "getTileAbove": {
		      "!type": "fn()"
		     },
		     "getTileBelow": {
		      "!type": "fn()"
		     },
		     "getTileLeft": {
		      "!type": "fn()"
		     },
		     "getTileRight": {
		      "!type": "fn()"
		     },
		     "setLayer": {
		      "!type": "fn()"
		     },
		     "hasTile": {
		      "!type": "fn()"
		     },
		     "removeTile": {
		      "!type": "fn()"
		     },
		     "removeTileWorldXY": {
		      "!type": "fn()"
		     },
		     "putTile": {
		      "!type": "fn()"
		     },
		     "putTileWorldXY": {
		      "!type": "fn()"
		     },
		     "searchTileIndex": {
		      "!type": "fn()"
		     },
		     "getTile": {
		      "!type": "fn()"
		     },
		     "getTileWorldXY": {
		      "!type": "fn()"
		     },
		     "copy": {
		      "!type": "fn()"
		     },
		     "paste": {
		      "!type": "fn()"
		     },
		     "swap": {
		      "!type": "fn()"
		     },
		     "swapHandler": {
		      "!type": "fn()"
		     },
		     "forEach": {
		      "!type": "fn()"
		     },
		     "replace": {
		      "!type": "fn()"
		     },
		     "random": {
		      "!type": "fn()"
		     },
		     "shuffle": {
		      "!type": "fn()"
		     },
		     "fill": {
		      "!type": "fn()"
		     },
		     "removeAllLayers": {
		      "!type": "fn()"
		     },
		     "dump": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "layer": {
		      "!type": "number|string|+Phaser.TilemapLayer"
		     }
		    },
		    "data": {},
		    "CSV": {
		     "!type": "number"
		    },
		    "TILED_JSON": {
		     "!type": "number"
		    },
		    "NORTH": {
		     "!type": "number"
		    },
		    "EAST": {
		     "!type": "number"
		    },
		    "SOUTH": {
		     "!type": "number"
		    },
		    "WEST": {
		     "!type": "number"
		    }
		   },
		   "Tilemap#create": {
		    "group": {},
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Tilemap#create#layers": {
		    "length": {}
		   },
		   "Tilemap#setTileSize": {
		    "prototype": {
		     "tileWidth": {},
		     "tileHeight": {},
		     "widthInPixels": {},
		     "heightInPixels": {}
		    }
		   },
		   "Tilemap#addTilesetImage": {
		    "tileWidth": {},
		    "tileHeight": {},
		    "tileMargin": {},
		    "tileSpacing": {},
		    "gid": {},
		    "img": {},
		    "key": {},
		    "idx": {},
		    "newSet": {},
		    "i": {},
		    "x": {},
		    "y": {},
		    "count": {},
		    "countX": {},
		    "countY": {},
		    "t": {},
		    "prototype": {
		     "tiles[undefined]": {}
		    }
		   },
		   "Tilemap#createFromObjects": {
		    "exists": {},
		    "autoCull": {},
		    "group": {},
		    "CustomClass": {},
		    "adjustY": {},
		    "i": {},
		    "found": {},
		    "obj": {},
		    "sprite": {},
		    "property": {}
		   },
		   "Tilemap#createFromObjects~sprite": {
		    "name": {},
		    "visible": {},
		    "autoCull": {},
		    "exists": {},
		    "width": {},
		    "height": {},
		    "angle": {},
		    "y": {}
		   },
		   "Tilemap#createFromTiles": {
		    "tiles": {},
		    "replacements": {},
		    "layer": {},
		    "group": {},
		    "properties": {},
		    "lw": {},
		    "lh": {},
		    "total": {},
		    "sprite": {},
		    "i": {},
		    "len": {},
		    "property": {}
		   },
		   "Tilemap#createFromTiles~properties": {
		    "customClass": {},
		    "adjustY": {}
		   },
		   "Tilemap#createFromTiles~sprite": {
		    "undefined]": {}
		   },
		   "Tilemap#createLayer": {
		    "width": {},
		    "height": {},
		    "group": {},
		    "index": {}
		   },
		   "Tilemap#createBlankLayer": {
		    "group": {},
		    "layer": {},
		    "row": {},
		    "output": {},
		    "y": {},
		    "x": {},
		    "prototype": {
		     "currentLayer": {}
		    },
		    "w": {},
		    "h": {}
		   },
		   "Tilemap#createBlankLayer~layer": {
		    "name": {},
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "widthInPixels": {},
		    "heightInPixels": {},
		    "alpha": {},
		    "visible": {},
		    "properties": {},
		    "indexes": {},
		    "callbacks": {},
		    "bodies": {},
		    "data": {}
		   },
		   "Tilemap#createBlankLayer~output": {
		    "name": {}
		   },
		   "Tilemap#getIndex": {
		    "i": {}
		   },
		   "Tilemap#setTileIndexCallback": {
		    "layer": {},
		    "i": {},
		    "len": {}
		   },
		   "Tilemap#setTileIndexCallback#layers[undefined]": {
		    "callbacks[undefined]": {
		     "callback": {},
		     "callbackContext": {}
		    }
		   },
		   "Tilemap#setTileLocationCallback": {
		    "layer": {},
		    "i": {}
		   },
		   "Tilemap#setCollision": {
		    "collides": {},
		    "recalculate": {},
		    "layer": {},
		    "i": {}
		   },
		   "Tilemap#setCollisionBetween": {
		    "collides": {},
		    "recalculate": {},
		    "layer": {},
		    "index": {}
		   },
		   "Tilemap#setCollisionByExclusion": {
		    "collides": {},
		    "recalculate": {},
		    "layer": {},
		    "i": {},
		    "len": {}
		   },
		   "Tilemap#setCollisionByIndex": {
		    "collides": {},
		    "layer": {},
		    "recalculate": {},
		    "i": {},
		    "y": {},
		    "x": {},
		    "tile": {}
		   },
		   "Tilemap#setCollisionByIndex~tile": {
		    "faceTop": {},
		    "faceBottom": {},
		    "faceLeft": {},
		    "faceRight": {}
		   },
		   "Tilemap#getLayer": {
		    "layer": {}
		   },
		   "Tilemap#setPreventRecalculate": {
		    "prototype": {
		     "preventingRecalculate": {},
		     "needToRecalculate": {}
		    },
		    "i": {}
		   },
		   "Tilemap#calculateFaces": {
		    "prototype": {
		     "needToRecalculate[undefined]": {}
		    },
		    "above": {},
		    "below": {},
		    "left": {},
		    "right": {},
		    "y": {},
		    "h": {},
		    "x": {},
		    "w": {},
		    "tile": {}
		   },
		   "Tilemap#calculateFaces~tile": {
		    "faceTop": {},
		    "faceBottom": {},
		    "faceLeft": {},
		    "faceRight": {}
		   },
		   "Tilemap#setLayer": {
		    "layer": {},
		    "prototype": {
		     "currentLayer": {}
		    }
		   },
		   "Tilemap#hasTile": {
		    "layer": {}
		   },
		   "Tilemap#removeTile": {
		    "layer": {},
		    "tile": {}
		   },
		   "Tilemap#removeTile#layers[undefined]": {
		    "data[undefined][undefined]": {},
		    "dirty": {}
		   },
		   "Tilemap#removeTileWorldXY": {
		    "layer": {},
		    "x": {},
		    "y": {}
		   },
		   "Tilemap#putTile": {
		    "layer": {},
		    "index": {}
		   },
		   "Tilemap#putTile#layers[undefined]": {
		    "data[undefined][undefined]": {
		     "index": {}
		    },
		    "dirty": {}
		   },
		   "Tilemap#putTileWorldXY": {
		    "layer": {},
		    "x": {},
		    "y": {}
		   },
		   "Tilemap#searchTileIndex": {
		    "skip": {},
		    "reverse": {},
		    "layer": {},
		    "c": {},
		    "y": {},
		    "x": {}
		   },
		   "Tilemap#getTile": {
		    "nonNull": {},
		    "layer": {}
		   },
		   "Tilemap#getTileWorldXY": {
		    "tileWidth": {},
		    "tileHeight": {},
		    "layer": {},
		    "x": {},
		    "y": {}
		   },
		   "Tilemap#copy": {
		    "layer": {},
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "ty": {},
		    "tx": {}
		   },
		   "Tilemap#copy#_results": {
		    "length": {}
		   },
		   "Tilemap#paste": {
		    "x": {},
		    "y": {},
		    "layer": {},
		    "diffX": {},
		    "diffY": {},
		    "i": {}
		   },
		   "Tilemap#paste#layers[undefined]": {
		    "dirty": {}
		   },
		   "Tilemap#swap": {
		    "layer": {},
		    "prototype": {
		     "_tempA": {},
		     "_tempB": {}
		    }
		   },
		   "Tilemap#forEach": {
		    "layer": {}
		   },
		   "Tilemap#replace": {
		    "layer": {},
		    "i": {}
		   },
		   "Tilemap#replace#_results[undefined]": {
		    "index": {}
		   },
		   "Tilemap#random": {
		    "layer": {},
		    "indexes": {},
		    "t": {},
		    "idx": {},
		    "i": {}
		   },
		   "Tilemap#random#_results[undefined]": {
		    "index": {}
		   },
		   "Tilemap#shuffle": {
		    "layer": {},
		    "indexes": {},
		    "t": {},
		    "i": {}
		   },
		   "Tilemap#shuffle#_results[undefined]": {
		    "index": {}
		   },
		   "Tilemap#fill": {
		    "layer": {},
		    "i": {}
		   },
		   "Tilemap#fill#_results[undefined]": {
		    "index": {}
		   },
		   "Tilemap#removeAllLayers#layers": {
		    "length": {}
		   },
		   "Tilemap#removeAllLayers": {
		    "prototype": {
		     "currentLayer": {}
		    }
		   },
		   "Tilemap#dump": {
		    "txt": {},
		    "args": {},
		    "y": {},
		    "x": {}
		   },
		   "Tilemap#dump~args": {
		    "0]": {}
		   },
		   "Tilemap#destroy": {
		    "prototype": {
		     "data": {},
		     "game": {}
		    }
		   },
		   "TilemapLayer": {
		    "!type": "fn(game: +Phaser.Game, tilemap: +Phaser.Tilemap, index: number, width: number, height: number)",
		    "width": {},
		    "height": {},
		    "prototype": {
		     "map": {
		      "!type": "+Phaser.Tilemap"
		     },
		     "index": {
		      "!type": "number"
		     },
		     "layer": {},
		     "canvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "context": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "renderSettings": {
		      "!type": "bool"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "debugSettings": {
		      "!type": "string"
		     },
		     "scrollFactorX": {
		      "!type": "number"
		     },
		     "scrollFactorY": {
		      "!type": "number"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "rayStepRate": {
		      "!type": "number"
		     },
		     "_wrap": {
		      "!type": "bool"
		     },
		     "_mc": {},
		     "_scrollX": {
		      "!type": "number"
		     },
		     "_scrollY": {},
		     "_results": {
		      "!type": "[?]"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "preUpdateCore": {},
		     "ensureSharedCopyCanvas": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "resizeWorld": {
		      "!type": "fn()"
		     },
		     "_fixX": {
		      "!type": "fn()"
		     },
		     "_unfixX": {
		      "!type": "fn()"
		     },
		     "_fixY": {
		      "!type": "fn()"
		     },
		     "_unfixY": {
		      "!type": "fn()"
		     },
		     "getTileX": {
		      "!type": "fn()"
		     },
		     "getTileY": {
		      "!type": "fn()"
		     },
		     "getTileXY": {
		      "!type": "fn()"
		     },
		     "getRayCastTiles": {
		      "!type": "fn()"
		     },
		     "getTiles": {
		      "!type": "fn()"
		     },
		     "resolveTileset": {
		      "!type": "fn()"
		     },
		     "resetTilesetCache": {
		      "!type": "fn()"
		     },
		     "setScale": {
		      "!type": "fn()"
		     },
		     "shiftCanvas": {
		      "!type": "fn()"
		     },
		     "renderRegion": {
		      "!type": "fn()"
		     },
		     "renderDeltaScroll": {
		      "!type": "fn()"
		     },
		     "renderFull": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "renderDebug": {
		      "!type": "fn()"
		     },
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "deltaX": {
		      "!type": "number"
		     },
		     "deltaY": {
		      "!type": "number"
		     },
		     "deltaZ": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "health": {
		      "!type": "number"
		     },
		     "maxHealth": {
		      "!type": "number"
		     },
		     "damage": {},
		     "heal": {},
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "_outOfBoundsFired": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     },
		     "transformCallback": {
		      "!type": "+function"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "checkTransform": {
		      "!type": "fn(wt: +PIXI.Matrix)"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    },
		    "sharedCopyCanvas": {},
		    "ensureSharedCopyCanvas": {
		     "!type": "fn()",
		     "prototype": {
		      "sharedCopyCanvas": {}
		     }
		    }
		   },
		   "TilemapLayer#renderSettings": {
		    "enableScrollDelta": {},
		    "overdrawRatio": {},
		    "copyCanvas": {}
		   },
		   "TilemapLayer#debugSettings": {
		    "missingImageFill": {},
		    "debuggedTileOverfill": {},
		    "forceFullRedraw": {},
		    "debugAlpha": {},
		    "facingEdgeStroke": {},
		    "collidingTileOverfill": {}
		   },
		   "TilemapLayer#_mc": {
		    "scrollX": {},
		    "scrollY": {},
		    "renderWidth": {},
		    "renderHeight": {},
		    "tileWidth": {},
		    "tileHeight": {},
		    "cw": {},
		    "ch": {},
		    "tilesets": {}
		   },
		   "TilemapLayer#postUpdate": {
		    "camera": {},
		    "prototype": {
		     "scrollX": {},
		     "scrollY": {}
		    }
		   },
		   "TilemapLayer#resize#canvas": {
		    "width": {},
		    "height": {}
		   },
		   "TilemapLayer#resize#texture": {
		    "width": {},
		    "height": {},
		    "crop": {
		     "width": {},
		     "height": {}
		    },
		    "baseTexture": {
		     "width": {},
		     "height": {}
		    },
		    "requiresUpdate": {}
		   },
		   "TilemapLayer#resize": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "TilemapLayer#_fixX": {
		    "x": {}
		   },
		   "TilemapLayer#_fixY": {
		    "y": {}
		   },
		   "TilemapLayer#getRayCastTiles": {
		    "stepRate": {},
		    "collides": {},
		    "interestingFace": {},
		    "tiles": {},
		    "coords": {},
		    "results": {},
		    "i": {},
		    "t": {},
		    "tile": {},
		    "coord": {}
		   },
		   "TilemapLayer#getTiles": {
		    "collides": {},
		    "interestingFace": {},
		    "fetchAll": {},
		    "x": {},
		    "y": {},
		    "tx": {},
		    "ty": {},
		    "tw": {},
		    "th": {},
		    "wy": {},
		    "wx": {},
		    "row": {}
		   },
		   "TilemapLayer#resolveTileset": {
		    "tilesets": {},
		    "setIndex": {},
		    "tileset": {}
		   },
		   "TilemapLayer#resolveTileset~tilesets": {
		    "undefined]": {}
		   },
		   "TilemapLayer#resetTilesetCache": {
		    "tilesets": {}
		   },
		   "TilemapLayer#setScale": {
		    "xScale": {},
		    "yScale": {},
		    "y": {},
		    "row": {},
		    "x": {},
		    "tile": {}
		   },
		   "TilemapLayer#setScale~tile": {
		    "width": {},
		    "height": {},
		    "worldX": {},
		    "worldY": {}
		   },
		   "TilemapLayer#shiftCanvas": {
		    "canvas": {},
		    "copyW": {},
		    "copyH": {},
		    "dx": {},
		    "dy": {},
		    "sx": {},
		    "sy": {},
		    "copyCanvas": {},
		    "copyContext": {}
		   },
		   "TilemapLayer#shiftCanvas~copyCanvas": {
		    "width": {},
		    "height": {}
		   },
		   "TilemapLayer#renderRegion": {
		    "context": {},
		    "width": {},
		    "height": {},
		    "tw": {},
		    "th": {},
		    "tilesets": {},
		    "lastAlpha": {},
		    "left": {},
		    "right": {},
		    "top": {},
		    "bottom": {},
		    "baseX": {},
		    "baseY": {},
		    "normStartX": {},
		    "normStartY": {},
		    "tx": {},
		    "ty": {},
		    "x": {},
		    "y": {},
		    "xmax": {},
		    "ymax": {},
		    "row": {},
		    "tile": {},
		    "index": {},
		    "set": {}
		   },
		   "TilemapLayer#renderRegion~context": {
		    "fillStyle": {},
		    "globalAlpha": {}
		   },
		   "TilemapLayer#renderDeltaScroll": {
		    "scrollX": {},
		    "scrollY": {},
		    "renderW": {},
		    "renderH": {},
		    "tw": {},
		    "th": {},
		    "left": {},
		    "right": {},
		    "top": {},
		    "bottom": {},
		    "trueTop": {},
		    "trueBottom": {},
		    "trueLeft": {},
		    "trueRight": {}
		   },
		   "TilemapLayer#renderFull": {
		    "scrollX": {},
		    "scrollY": {},
		    "renderW": {},
		    "renderH": {},
		    "tw": {},
		    "th": {},
		    "left": {},
		    "right": {},
		    "top": {},
		    "bottom": {}
		   },
		   "TilemapLayer#render": {
		    "redrawAll": {},
		    "renderWidth": {},
		    "renderHeight": {},
		    "scrollX": {},
		    "scrollY": {},
		    "mc": {},
		    "shiftX": {},
		    "shiftY": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "TilemapLayer#render#layer": {
		    "dirty": {}
		   },
		   "TilemapLayer#render~mc": {
		    "scrollX": {},
		    "scrollY": {},
		    "renderWidth": {},
		    "renderHeight": {}
		   },
		   "TilemapLayer#render#context": {
		    "globalAlpha": {}
		   },
		   "TilemapLayer#renderDebug": {
		    "scrollX": {},
		    "scrollY": {},
		    "context": {},
		    "renderW": {},
		    "renderH": {},
		    "width": {},
		    "height": {},
		    "tw": {},
		    "th": {},
		    "left": {},
		    "right": {},
		    "top": {},
		    "bottom": {},
		    "baseX": {},
		    "baseY": {},
		    "normStartX": {},
		    "normStartY": {},
		    "tx": {},
		    "ty": {},
		    "x": {},
		    "y": {},
		    "xmax": {},
		    "ymax": {},
		    "row": {},
		    "tile": {}
		   },
		   "TilemapLayer#renderDebug~context": {
		    "strokeStyle": {},
		    "fillStyle": {}
		   },
		   "TilemapParser": {
		    "!type": "fn()",
		    "INSERT_NULL": {
		     "!type": "bool"
		    },
		    "parse": {
		     "!type": "fn()",
		     "tileWidth": {},
		     "tileHeight": {},
		     "width": {},
		     "height": {},
		     "map": {}
		    },
		    "parseCSV": {
		     "!type": "fn()",
		     "map": {},
		     "data": {},
		     "output": {},
		     "rows": {},
		     "height": {},
		     "width": {},
		     "y": {},
		     "column": {},
		     "x": {}
		    },
		    "parseCSV~output": {
		     "undefined]": {},
		     "undefined][undefined]": {}
		    },
		    "parseCSV~map": {
		     "format": {},
		     "name": {},
		     "width": {},
		     "height": {},
		     "tileWidth": {},
		     "tileHeight": {},
		     "widthInPixels": {},
		     "heightInPixels": {},
		     "layers[0].width": {},
		     "layers[0].height": {},
		     "layers[0].widthInPixels": {},
		     "layers[0].heightInPixels": {},
		     "layers[0].data": {}
		    },
		    "getEmptyData": {
		     "!type": "fn()",
		     "map": {},
		     "layers": {},
		     "layer": {}
		    },
		    "getEmptyData~map": {
		     "width": {},
		     "height": {},
		     "tileWidth": {},
		     "tileHeight": {},
		     "orientation": {},
		     "version": {},
		     "properties": {},
		     "widthInPixels": {},
		     "heightInPixels": {},
		     "layers": {},
		     "images": {},
		     "objects": {},
		     "collision": {},
		     "tilesets": {},
		     "tiles": {}
		    },
		    "getEmptyData~layer": {
		     "name": {},
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {},
		     "widthInPixels": {},
		     "heightInPixels": {},
		     "alpha": {},
		     "visible": {},
		     "properties": {},
		     "indexes": {},
		     "callbacks": {},
		     "bodies": {},
		     "data": {}
		    },
		    "parseJSON": {
		     "!type": "fn(json: ?) -> ?"
		    },
		    "parseTiledJSON": {
		     "!type": "fn()",
		     "map": {},
		     "layers": {},
		     "i": {},
		     "curl": {},
		     "layer": {},
		     "x": {},
		     "row": {},
		     "output": {},
		     "rotation": {},
		     "flipped": {},
		     "flippedVal": {},
		     "gid": {},
		     "t": {},
		     "len": {},
		     "images": {},
		     "curi": {},
		     "image": {},
		     "tilesets": {},
		     "imagecollections": {},
		     "set": {},
		     "newSet": {},
		     "newCollection": {},
		     "objects": {},
		     "collision": {},
		     "slice": {
		      "!type": "fn()"
		     },
		     "curo": {},
		     "v": {},
		     "object": {},
		     "p": {},
		     "y": {},
		     "count": {},
		     "countX": {},
		     "countY": {},
		     "tile": {},
		     "sid": {},
		     "j": {},
		     "k": {}
		    },
		    "parseTiledJSON~map": {
		     "width": {},
		     "height": {},
		     "tileWidth": {},
		     "tileHeight": {},
		     "orientation": {},
		     "format": {},
		     "version": {},
		     "properties": {},
		     "widthInPixels": {},
		     "heightInPixels": {},
		     "layers": {},
		     "images": {},
		     "tilesets": {},
		     "imagecollections": {},
		     "objects": {},
		     "collision": {},
		     "tiles": {},
		     "tiles[undefined]": {}
		    },
		    "parseTiledJSON~layer": {
		     "name": {},
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {},
		     "widthInPixels": {},
		     "heightInPixels": {},
		     "alpha": {},
		     "visible": {},
		     "properties": {},
		     "indexes": {},
		     "callbacks": {},
		     "bodies": {},
		     "data": {}
		    },
		    "parseTiledJSON~row": {
		     "undefined].rotation": {},
		     "undefined].flipped": {}
		    },
		    "parseTiledJSON~image": {
		     "name": {},
		     "image": {},
		     "x": {},
		     "y": {},
		     "alpha": {},
		     "visible": {},
		     "properties": {}
		    },
		    "parseTiledJSON~newSet": {
		     "tileProperties": {}
		    },
		    "parseTiledJSON~slice": {
		     "sliced": {},
		     "k": {},
		     "key": {}
		    },
		    "parseTiledJSON~slice~sliced": {
		     "undefined]": {}
		    },
		    "parseTiledJSON~objects": {
		     "undefined]": {}
		    },
		    "parseTiledJSON~collision": {
		     "undefined]": {}
		    },
		    "parseTiledJSON~object": {
		     "gid": {},
		     "name": {},
		     "type": {},
		     "x": {},
		     "y": {},
		     "visible": {},
		     "properties": {},
		     "rotation": {},
		     "width": {},
		     "height": {},
		     "polyline": {},
		     "polygon": {},
		     "rectangle": {}
		    },
		    "parseTiledJSON~tile": {
		     "properties": {}
		    }
		   },
		   "Tileset": {
		    "!type": "fn(name: string, firstgid: number, width: number, height: number, margin: number, spacing: number, properties: ?)",
		    "width": {},
		    "height": {},
		    "margin": {},
		    "spacing": {},
		    "prototype": {
		     "name": {
		      "!type": "string"
		     },
		     "firstgid": {
		      "!type": "number"
		     },
		     "tileWidth": {
		      "!type": "number"
		     },
		     "tileHeight": {
		      "!type": "number"
		     },
		     "tileMargin": {
		      "!type": "number"
		     },
		     "tileSpacing": {
		      "!type": "number"
		     },
		     "properties": {},
		     "image": {},
		     "rows": {
		      "!type": "number"
		     },
		     "columns": {
		      "!type": "number"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "drawCoords": {
		      "!type": "[?]"
		     },
		     "draw": {
		      "!type": "fn()"
		     },
		     "containsTileIndex": {
		      "!type": "fn()"
		     },
		     "setImage": {
		      "!type": "fn()"
		     },
		     "setSpacing": {
		      "!type": "fn()"
		     },
		     "updateTileData": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Tileset#draw": {
		    "coordIndex": {}
		   },
		   "Tileset#setImage": {
		    "prototype": {
		     "image": {}
		    }
		   },
		   "Tileset#setSpacing": {
		    "prototype": {
		     "tileMargin": {},
		     "tileSpacing": {}
		    }
		   },
		   "Tileset#updateTileData": {
		    "rowCount": {},
		    "colCount": {},
		    "prototype": {
		     "rows": {},
		     "columns": {},
		     "total": {}
		    },
		    "tx": {},
		    "ty": {},
		    "y": {},
		    "x": {}
		   },
		   "Tileset#updateTileData#drawCoords": {
		    "length": {}
		   },
		   "Time": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "time": {
		      "!type": "number"
		     },
		     "prevTime": {
		      "!type": "number"
		     },
		     "now": {
		      "!type": "number"
		     },
		     "elapsed": {
		      "!type": "number"
		     },
		     "elapsedMS": {
		      "!type": "number"
		     },
		     "physicsElapsed": {
		      "!type": "number"
		     },
		     "physicsElapsedMS": {
		      "!type": "number"
		     },
		     "desiredFps": {
		      "!type": "number"
		     },
		     "suggestedFps": {
		      "!type": "number"
		     },
		     "slowMotion": {
		      "!type": "number"
		     },
		     "advancedTiming": {
		      "!type": "bool"
		     },
		     "frames": {
		      "!type": "number"
		     },
		     "fps": {
		      "!type": "number"
		     },
		     "fpsMin": {
		      "!type": "number"
		     },
		     "fpsMax": {
		      "!type": "number"
		     },
		     "msMin": {
		      "!type": "number"
		     },
		     "msMax": {
		      "!type": "number"
		     },
		     "pauseDuration": {
		      "!type": "number"
		     },
		     "timeToCall": {
		      "!type": "number"
		     },
		     "timeExpected": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Timer"
		     },
		     "_frameCount": {
		      "!type": "number"
		     },
		     "_elapsedAccumulator": {
		      "!type": "number"
		     },
		     "_started": {
		      "!type": "number"
		     },
		     "_timeLastSecond": {
		      "!type": "number"
		     },
		     "_pauseStarted": {
		      "!type": "number"
		     },
		     "_justResumed": {
		      "!type": "bool"
		     },
		     "_timers": {
		      "!type": "[?]"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "updateSetTimeout": {
		      "!type": "fn()"
		     },
		     "updateRAF": {
		      "!type": "fn()"
		     },
		     "updateTimers": {
		      "!type": "fn()"
		     },
		     "updateAdvancedTiming": {
		      "!type": "fn()"
		     },
		     "gamePaused": {
		      "!type": "fn()"
		     },
		     "gameResumed": {
		      "!type": "fn()"
		     },
		     "totalElapsedSeconds": {
		      "!type": "fn()"
		     },
		     "elapsedSince": {
		      "!type": "fn()"
		     },
		     "elapsedSecondsSince": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Time#boot": {
		    "prototype": {
		     "_started": {},
		     "time": {}
		    }
		   },
		   "Time#create": {
		    "autoDestroy": {},
		    "timer": {}
		   },
		   "Time#removeAll": {
		    "i": {},
		    "prototype": {
		     "_timers": {}
		    }
		   },
		   "Time#updateSetTimeout": {
		    "previousDateNow": {},
		    "prototype": {
		     "time": {},
		     "elapsedMS": {},
		     "prevTime": {},
		     "now": {},
		     "elapsed": {},
		     "timeToCall": {},
		     "timeCallExpected": {},
		     "physicsElapsed": {},
		     "physicsElapsedMS": {}
		    }
		   },
		   "Time#updateRAF": {
		    "previousDateNow": {},
		    "prototype": {
		     "time": {},
		     "elapsedMS": {},
		     "prevTime": {},
		     "now": {},
		     "elapsed": {},
		     "physicsElapsed": {},
		     "physicsElapsedMS": {}
		    }
		   },
		   "Time#updateTimers": {
		    "i": {},
		    "len": {}
		   },
		   "Time#updateAdvancedTiming": {
		    "prototype": {
		     "_elapsedAccumulator": {},
		     "suggestedFps": {},
		     "_frameCount": {},
		     "msMin": {},
		     "msMax": {},
		     "fps": {},
		     "fpsMin": {},
		     "fpsMax": {},
		     "_timeLastSecond": {},
		     "frames": {}
		    }
		   },
		   "Time#gamePaused": {
		    "prototype": {
		     "_pauseStarted": {}
		    },
		    "i": {}
		   },
		   "Time#gameResumed": {
		    "prototype": {
		     "time": {},
		     "pauseDuration": {}
		    },
		    "i": {}
		   },
		   "Time#reset": {
		    "prototype": {
		     "_started": {}
		    }
		   },
		   "Timer": {
		    "!type": "fn(game: +Phaser.Game, autoDestroy: bool)",
		    "autoDestroy": {},
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "running": {
		      "!type": "bool"
		     },
		     "autoDestroy": {
		      "!type": "bool"
		     },
		     "expired": {
		      "!type": "bool"
		     },
		     "elapsed": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "[?]"
		     },
		     "onComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "nextTick": {
		      "!type": "number"
		     },
		     "timeCap": {
		      "!type": "number"
		     },
		     "paused": {
		      "!type": "bool"
		     },
		     "_codePaused": {
		      "!type": "bool"
		     },
		     "_started": {
		      "!type": "number"
		     },
		     "_pauseStarted": {
		      "!type": "number"
		     },
		     "_pauseTotal": {
		      "!type": "number"
		     },
		     "_now": {
		      "!type": "number"
		     },
		     "_len": {
		      "!type": "number"
		     },
		     "_marked": {
		      "!type": "number"
		     },
		     "_i": {
		      "!type": "number"
		     },
		     "_diff": {
		      "!type": "number"
		     },
		     "_newTick": {
		      "!type": "number"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "repeat": {
		      "!type": "fn()"
		     },
		     "loop": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "order": {
		      "!type": "fn()"
		     },
		     "sortHandler": {
		      "!type": "fn()"
		     },
		     "clearPendingEvents": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "pause": {
		      "!type": "fn()"
		     },
		     "_pause": {
		      "!type": "fn()"
		     },
		     "adjustEvents": {
		      "!type": "fn()"
		     },
		     "resume": {
		      "!type": "fn()"
		     },
		     "_resume": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "next": {
		      "!type": "number"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "ms": {
		      "!type": "number"
		     },
		     "seconds": {
		      "!type": "number"
		     }
		    },
		    "MINUTE": {
		     "!type": "number"
		    },
		    "SECOND": {
		     "!type": "number"
		    },
		    "HALF": {
		     "!type": "number"
		    },
		    "QUARTER": {
		     "!type": "number"
		    }
		   },
		   "Timer#create": {
		    "delay": {},
		    "tick": {},
		    "event": {},
		    "prototype": {
		     "expired": {}
		    }
		   },
		   "Timer#start": {
		    "prototype": {
		     "_started": {},
		     "running": {}
		    },
		    "i": {}
		   },
		   "Timer#start#events[undefined]": {
		    "tick": {}
		   },
		   "Timer#stop": {
		    "prototype": {
		     "running": {}
		    },
		    "clearEvents": {}
		   },
		   "Timer#stop#events": {
		    "length": {}
		   },
		   "Timer#remove": {
		    "i": {}
		   },
		   "Timer#remove#events[undefined]": {
		    "pendingDelete": {}
		   },
		   "Timer#order": {
		    "prototype": {
		     "nextTick": {}
		    }
		   },
		   "Timer#clearPendingEvents": {
		    "prototype": {
		     "_i": {},
		     "_len": {}
		    }
		   },
		   "Timer#update": {
		    "prototype": {
		     "elapsed": {},
		     "_now": {},
		     "_marked": {},
		     "_newTick": {},
		     "expired": {}
		    }
		   },
		   "Timer#update#events[undefined]": {
		    "tick": {},
		    "pendingDelete": {}
		   },
		   "Timer#pause": {
		    "prototype": {
		     "_codePaused": {},
		     "_pauseStarted": {},
		     "paused": {}
		    }
		   },
		   "Timer#_pause": {
		    "prototype": {
		     "_pauseStarted": {},
		     "paused": {}
		    }
		   },
		   "Timer#adjustEvents": {
		    "i": {},
		    "t": {},
		    "d": {},
		    "prototype": {
		     "nextTick": {}
		    }
		   },
		   "Timer#adjustEvents#events[undefined]": {
		    "tick": {}
		   },
		   "Timer#resume": {
		    "now": {},
		    "prototype": {
		     "_pauseTotal": {},
		     "_now": {},
		     "paused": {},
		     "_codePaused": {}
		    }
		   },
		   "Timer#removeAll#events": {
		    "length": {}
		   },
		   "Timer#removeAll": {
		    "prototype": {
		     "_len": {},
		     "_i": {}
		    }
		   },
		   "Timer#destroy": {
		    "prototype": {
		     "running": {},
		     "events": {},
		     "_len": {},
		     "_i": {}
		    }
		   },
		   "TimerEvent": {
		    "!type": "fn(timer: +Phaser.Timer, delay: number, tick: number, repeatCount: number, loop: bool, callback: +function, callbackContext: ?, arguments: [?])",
		    "prototype": {
		     "timer": {
		      "!type": "+Phaser.Timer"
		     },
		     "delay": {
		      "!type": "number"
		     },
		     "tick": {
		      "!type": "number"
		     },
		     "repeatCount": {
		      "!type": "number"
		     },
		     "loop": {
		      "!type": "bool"
		     },
		     "callback": {
		      "!type": "+function"
		     },
		     "callbackContext": {},
		     "args": {
		      "!type": "[?]"
		     },
		     "pendingDelete": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Easing": {
		    "!type": "fn()",
		    "Linear": {
		     "!type": "fn()",
		     "prototype": {
		      "None": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "None": {
		      "!type": "fn()"
		     }
		    },
		    "Quadratic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()",
		      "k": {}
		     }
		    },
		    "Cubic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()",
		      "k": {}
		     }
		    },
		    "Quartic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()",
		      "k": {}
		     }
		    },
		    "Quintic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()",
		      "k": {}
		     }
		    },
		    "Sinusoidal": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Exponential": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()",
		      "k": {}
		     }
		    },
		    "Circular": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()",
		      "k": {}
		     }
		    },
		    "Elastic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()",
		      "s": {},
		      "a": {},
		      "p": {},
		      "k": {}
		     },
		     "Out": {
		      "!type": "fn()",
		      "s": {},
		      "a": {},
		      "p": {}
		     },
		     "InOut": {
		      "!type": "fn()",
		      "s": {},
		      "a": {},
		      "p": {},
		      "k": {}
		     }
		    },
		    "Back": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()",
		      "s": {}
		     },
		     "Out": {
		      "!type": "fn()",
		      "s": {}
		     },
		     "InOut": {
		      "!type": "fn()",
		      "s": {},
		      "k": {}
		     }
		    },
		    "Bounce": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()",
		      "k": {}
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Default": {},
		    "Power0": {},
		    "Power1": {},
		    "Power2": {},
		    "Power3": {},
		    "Power4": {}
		   },
		   "Tween": {
		    "!type": "fn(target: ?, game: +Phaser.Game, manager: +Phaser.TweenManager)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "target": {},
		     "manager": {
		      "!type": "+Phaser.TweenManager"
		     },
		     "timeline": {
		      "!type": "[?]"
		     },
		     "reverse": {
		      "!type": "bool"
		     },
		     "timeScale": {
		      "!type": "number"
		     },
		     "repeatCounter": {
		      "!type": "number"
		     },
		     "pendingDelete": {
		      "!type": "bool"
		     },
		     "onStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onLoop": {
		      "!type": "+Phaser.Signal"
		     },
		     "onRepeat": {
		      "!type": "+Phaser.Signal"
		     },
		     "onChildComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "isRunning": {
		      "!type": "bool"
		     },
		     "current": {
		      "!type": "number"
		     },
		     "properties": {},
		     "chainedTween": {
		      "!type": "+Phaser.Tween"
		     },
		     "isPaused": {
		      "!type": "bool"
		     },
		     "frameBased": {
		      "!type": "bool"
		     },
		     "_onUpdateCallback": {
		      "!type": "+function"
		     },
		     "_onUpdateCallbackContext": {},
		     "_pausedTime": {
		      "!type": "number"
		     },
		     "_codePaused": {
		      "!type": "bool"
		     },
		     "_hasStarted": {
		      "!type": "bool"
		     },
		     "to": {
		      "!type": "fn()"
		     },
		     "from": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "updateTweenData": {
		      "!type": "fn()"
		     },
		     "delay": {
		      "!type": "fn()"
		     },
		     "repeat": {
		      "!type": "fn(total: number) -> ?"
		     },
		     "repeatDelay": {
		      "!type": "fn()"
		     },
		     "yoyo": {
		      "!type": "fn()"
		     },
		     "yoyoDelay": {
		      "!type": "fn()"
		     },
		     "easing": {
		      "!type": "fn()"
		     },
		     "interpolation": {
		      "!type": "fn()"
		     },
		     "repeatAll": {
		      "!type": "fn()"
		     },
		     "chain": {
		      "!type": "fn()"
		     },
		     "loop": {
		      "!type": "fn()"
		     },
		     "onUpdateCallback": {
		      "!type": "fn()"
		     },
		     "pause": {
		      "!type": "fn()"
		     },
		     "_pause": {
		      "!type": "fn()"
		     },
		     "resume": {
		      "!type": "fn()"
		     },
		     "_resume": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "generateData": {
		      "!type": "fn()"
		     },
		     "totalDuration": {
		      "!type": "+Phaser.TweenData"
		     }
		    }
		   },
		   "Tween#to": {
		    "duration": {},
		    "ease": {},
		    "autoStart": {},
		    "delay": {},
		    "repeat": {},
		    "yoyo": {}
		   },
		   "Tween#from": {
		    "duration": {},
		    "ease": {},
		    "autoStart": {},
		    "delay": {},
		    "repeat": {},
		    "yoyo": {}
		   },
		   "Tween#start": {
		    "index": {},
		    "i": {},
		    "property": {},
		    "prototype": {
		     "properties[undefined]": {},
		     "isRunning": {},
		     "current": {}
		    }
		   },
		   "Tween#stop": {
		    "complete": {},
		    "prototype": {
		     "isRunning": {},
		     "_onUpdateCallback": {},
		     "_onUpdateCallbackContext": {}
		    }
		   },
		   "Tween#updateTweenData": {
		    "index": {},
		    "i": {},
		    "prototype": {
		     "timeline[undefined][undefined]": {}
		    }
		   },
		   "Tween#repeat": {
		    "repeatDelay": {}
		   },
		   "Tween#yoyo": {
		    "yoyoDelay": {}
		   },
		   "Tween#easing": {
		    "ease": {}
		   },
		   "Tween#interpolation": {
		    "context": {}
		   },
		   "Tween#repeatAll": {
		    "total": {},
		    "prototype": {
		     "repeatCounter": {}
		    }
		   },
		   "Tween#chain": {
		    "i": {},
		    "prototype": {
		     "chainedTween": {}
		    }
		   },
		   "Tween#loop": {
		    "value": {},
		    "prototype": {
		     "repeatCounter": {}
		    }
		   },
		   "Tween#onUpdateCallback": {
		    "prototype": {
		     "_onUpdateCallback": {},
		     "_onUpdateCallbackContext": {}
		    }
		   },
		   "Tween#pause": {
		    "prototype": {
		     "isPaused": {},
		     "_codePaused": {},
		     "_pausedTime": {}
		    }
		   },
		   "Tween#_pause": {
		    "prototype": {
		     "isPaused": {},
		     "_pausedTime": {}
		    }
		   },
		   "Tween#resume": {
		    "prototype": {
		     "isPaused": {},
		     "_codePaused": {}
		    },
		    "i": {}
		   },
		   "Tween#resume#timeline[undefined]": {
		    "startTime": {}
		   },
		   "Tween#update": {
		    "status": {},
		    "prototype": {
		     "_hasStarted": {},
		     "current": {},
		     "isRunning": {}
		    },
		    "complete": {}
		   },
		   "Tween#generateData": {
		    "frameRate": {},
		    "data": {},
		    "i": {},
		    "property": {},
		    "prototype": {
		     "properties[undefined]": {}
		    }
		   },
		   "TweenData": {
		    "!type": "fn(parent: +Phaser.Tween)",
		    "prototype": {
		     "parent": {
		      "!type": "+Phaser.Tween"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "vStart": {},
		     "vStartCache": {},
		     "vEnd": {},
		     "vEndCache": {},
		     "duration": {
		      "!type": "number"
		     },
		     "percent": {
		      "!type": "number"
		     },
		     "value": {
		      "!type": "number"
		     },
		     "repeatCounter": {
		      "!type": "number"
		     },
		     "repeatDelay": {
		      "!type": "number"
		     },
		     "interpolate": {
		      "!type": "bool"
		     },
		     "yoyo": {
		      "!type": "bool"
		     },
		     "yoyoDelay": {
		      "!type": "number"
		     },
		     "inReverse": {
		      "!type": "bool"
		     },
		     "delay": {
		      "!type": "number"
		     },
		     "dt": {
		      "!type": "number"
		     },
		     "startTime": {
		      "!type": "number"
		     },
		     "easingFunction": {
		      "!type": "+function"
		     },
		     "interpolationFunction": {
		      "!type": "+function"
		     },
		     "interpolationContext": {},
		     "isRunning": {
		      "!type": "bool"
		     },
		     "isFrom": {
		      "!type": "bool"
		     },
		     "to": {
		      "!type": "fn()"
		     },
		     "from": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "loadValues": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "generateData": {
		      "!type": "fn()"
		     },
		     "repeat": {
		      "!type": "fn()"
		     }
		    },
		    "PENDING": {
		     "!type": "number"
		    },
		    "RUNNING": {
		     "!type": "number"
		    },
		    "LOOPED": {
		     "!type": "number"
		    },
		    "COMPLETE": {
		     "!type": "number"
		    }
		   },
		   "TweenData#to": {
		    "prototype": {
		     "vEnd": {},
		     "duration": {},
		     "easingFunction": {},
		     "delay": {},
		     "repeatCounter": {},
		     "yoyo": {},
		     "isFrom": {}
		    }
		   },
		   "TweenData#from": {
		    "prototype": {
		     "vEnd": {},
		     "duration": {},
		     "easingFunction": {},
		     "delay": {},
		     "repeatCounter": {},
		     "yoyo": {},
		     "isFrom": {}
		    }
		   },
		   "TweenData#start": {
		    "prototype": {
		     "startTime": {},
		     "dt": {},
		     "isRunning": {},
		     "vStart[undefined]": {},
		     "vEnd[undefined]": {},
		     "value": {},
		     "yoyoCounter": {}
		    },
		    "property": {}
		   },
		   "TweenData#start#parent": {
		    "target[undefined]": {}
		   },
		   "TweenData#loadValues": {
		    "property": {},
		    "prototype": {
		     "vStart[undefined]": {},
		     "vEnd[undefined]": {},
		     "vStartCache[undefined]": {},
		     "vEndCache[undefined]": {}
		    }
		   },
		   "TweenData#loadValues#parent": {
		    "properties[undefined]": {}
		   },
		   "TweenData#update": {
		    "prototype": {
		     "isRunning": {},
		     "dt": {},
		     "percent": {},
		     "value": {}
		    },
		    "ms": {},
		    "property": {},
		    "start": {},
		    "end": {}
		   },
		   "TweenData#update#parent": {
		    "target[undefined]": {}
		   },
		   "TweenData#generateData": {
		    "prototype": {
		     "dt": {},
		     "percent": {},
		     "value": {}
		    },
		    "data": {},
		    "complete": {},
		    "fps": {},
		    "blob": {},
		    "property": {},
		    "start": {},
		    "end": {},
		    "reversed": {}
		   },
		   "TweenData#generateData~blob": {
		    "undefined]": {}
		   },
		   "TweenData#repeat": {
		    "prototype": {
		     "inReverse": {},
		     "vStart[undefined]": {},
		     "vEnd[undefined]": {},
		     "startTime": {},
		     "dt": {}
		    },
		    "property": {}
		   },
		   "TweenManager#easeMap": {
		    "Power0": {},
		    "Power1": {},
		    "Power2": {},
		    "Power3": {},
		    "Power4": {},
		    "Linear": {},
		    "Quad": {},
		    "Cubic": {},
		    "Quart": {},
		    "Quint": {},
		    "Sine": {},
		    "Expo": {},
		    "Circ": {},
		    "Elastic": {},
		    "Back": {},
		    "Bounce": {},
		    "\"Quad.easeIn\"": {},
		    "\"Cubic.easeIn\"": {},
		    "\"Quart.easeIn\"": {},
		    "\"Quint.easeIn\"": {},
		    "\"Sine.easeIn\"": {},
		    "\"Expo.easeIn\"": {},
		    "\"Circ.easeIn\"": {},
		    "\"Elastic.easeIn\"": {},
		    "\"Back.easeIn\"": {},
		    "\"Bounce.easeIn\"": {},
		    "\"Quad.easeOut\"": {},
		    "\"Cubic.easeOut\"": {},
		    "\"Quart.easeOut\"": {},
		    "\"Quint.easeOut\"": {},
		    "\"Sine.easeOut\"": {},
		    "\"Expo.easeOut\"": {},
		    "\"Circ.easeOut\"": {},
		    "\"Elastic.easeOut\"": {},
		    "\"Back.easeOut\"": {},
		    "\"Bounce.easeOut\"": {},
		    "\"Quad.easeInOut\"": {},
		    "\"Cubic.easeInOut\"": {},
		    "\"Quart.easeInOut\"": {},
		    "\"Quint.easeInOut\"": {},
		    "\"Sine.easeInOut\"": {},
		    "\"Expo.easeInOut\"": {},
		    "\"Circ.easeInOut\"": {},
		    "\"Elastic.easeInOut\"": {},
		    "\"Back.easeInOut\"": {},
		    "\"Bounce.easeInOut\"": {}
		   },
		   "TweenManager#removeAll": {
		    "i": {},
		    "prototype": {
		     "_add": {}
		    }
		   },
		   "TweenManager#removeAll#_tweens[undefined]": {
		    "pendingDelete": {}
		   },
		   "TweenManager#removeFrom": {
		    "children": {},
		    "i": {},
		    "len": {}
		   },
		   "TweenManager#remove": {
		    "i": {}
		   },
		   "TweenManager#remove#_tweens[undefined]": {
		    "pendingDelete": {}
		   },
		   "TweenManager#remove#_add[undefined]": {
		    "pendingDelete": {}
		   },
		   "TweenManager#update": {
		    "addTweens": {},
		    "numTweens": {},
		    "i": {},
		    "prototype": {
		     "_tweens": {}
		    }
		   },
		   "TweenManager#update#_add": {
		    "length": {}
		   },
		   "TweenManager#_pauseAll": {
		    "i": {}
		   },
		   "TweenManager#_resumeAll": {
		    "i": {}
		   },
		   "TweenManager#pauseAll": {
		    "i": {}
		   },
		   "TweenManager#resumeAll": {
		    "i": {}
		   },
		   "ArraySet": {
		    "!type": "fn(list: [?])",
		    "prototype": {
		     "position": {
		      "!type": "number"
		     },
		     "list": {
		      "!type": "[?]"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn()"
		     },
		     "getByKey": {
		      "!type": "fn()"
		     },
		     "exists": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "setAll": {
		      "!type": "fn()"
		     },
		     "callAll": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "first": {
		      "!type": "+any"
		     },
		     "next": {
		      "!type": "+any"
		     }
		    }
		   },
		   "ArraySet#getByKey": {
		    "i": {}
		   },
		   "ArraySet#reset#list": {
		    "length": {}
		   },
		   "ArraySet#remove": {
		    "idx": {}
		   },
		   "ArraySet#setAll": {
		    "i": {},
		    "prototype": {
		     "list[undefined][undefined]": {}
		    }
		   },
		   "ArraySet#callAll": {
		    "args": {},
		    "i": {}
		   },
		   "ArraySet#removeAll": {
		    "destroy": {},
		    "i": {},
		    "item": {},
		    "prototype": {
		     "position": {},
		     "list": {}
		    }
		   },
		   "ArrayUtils": {
		    "!type": "fn()",
		    "getRandomItem": {
		     "!type": "fn(objects: [?], startIndex: number, length: number) -> ?",
		     "startIndex": {},
		     "length": {},
		     "randomIndex": {}
		    },
		    "removeRandomItem": {
		     "!type": "fn(objects: [?], startIndex: number, length: number) -> ?",
		     "startIndex": {},
		     "length": {},
		     "randomIndex": {},
		     "removed": {}
		    },
		    "shuffle": {
		     "!type": "fn(array: [?]) -> ?",
		     "i": {},
		     "j": {},
		     "temp": {}
		    },
		    "transposeMatrix": {
		     "!type": "fn(array: [?]) -> ?",
		     "sourceRowCount": {},
		     "sourceColCount": {},
		     "result": {},
		     "i": {},
		     "j": {}
		    },
		    "transposeMatrix~result": {
		     "undefined]": {},
		     "undefined][undefined]": {}
		    },
		    "rotateMatrix": {
		     "!type": "fn(matrix: [?], direction: number|string) -> ?",
		     "direction": {},
		     "matrix": {},
		     "i": {}
		    },
		    "findClosest": {
		     "!type": "fn(value: number, arr: [?]) -> ?",
		     "i": {},
		     "low": {},
		     "high": {}
		    },
		    "rotate": {
		     "!type": "fn()",
		     "s": {}
		    },
		    "prototype": {
		     "numberArray": {
		      "!type": "fn(start: number, end: number) -> ?"
		     },
		     "numberArrayStep": {
		      "!type": "fn(start: number, end: number, step: number) -> ?"
		     }
		    },
		    "numberArray": {
		     "!type": "fn()",
		     "result": {},
		     "i": {}
		    },
		    "numberArrayStep": {
		     "!type": "fn()",
		     "start": {},
		     "end": {},
		     "step": {},
		     "result": {},
		     "total": {},
		     "i": {}
		    }
		   },
		   "Color": {
		    "!type": "fn()",
		    "packPixel": {
		     "!type": "fn()"
		    },
		    "unpackPixel": {
		     "!type": "fn()",
		     "out": {},
		     "hsl": {},
		     "hsv": {}
		    },
		    "unpackPixel~out": {
		     "a": {},
		     "b": {},
		     "g": {},
		     "r": {},
		     "color": {},
		     "rgba": {}
		    },
		    "fromRGBA": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "fromRGBA~out": {
		     "r": {},
		     "g": {},
		     "b": {},
		     "a": {},
		     "rgba": {}
		    },
		    "toRGBA": {
		     "!type": "fn()"
		    },
		    "RGBtoHSL": {
		     "!type": "fn()",
		     "out": {},
		     "r": {},
		     "g": {},
		     "b": {},
		     "min": {},
		     "max": {},
		     "d": {}
		    },
		    "RGBtoHSL~out": {
		     "h": {},
		     "s": {},
		     "l": {}
		    },
		    "HSLtoRGB": {
		     "!type": "fn()",
		     "out": {},
		     "q": {},
		     "p": {}
		    },
		    "HSLtoRGB~out": {
		     "r": {},
		     "g": {},
		     "b": {}
		    },
		    "RGBtoHSV": {
		     "!type": "fn()",
		     "out": {},
		     "r": {},
		     "g": {},
		     "b": {},
		     "min": {},
		     "max": {},
		     "d": {}
		    },
		    "RGBtoHSV~out": {
		     "h": {},
		     "s": {},
		     "v": {}
		    },
		    "HSVtoRGB": {
		     "!type": "fn()",
		     "out": {},
		     "r": {},
		     "g": {},
		     "b": {},
		     "i": {},
		     "f": {},
		     "p": {},
		     "q": {},
		     "t": {}
		    },
		    "HSVtoRGB~out": {
		     "r": {},
		     "g": {},
		     "b": {}
		    },
		    "hueToColor": {
		     "!type": "fn()",
		     "t": {}
		    },
		    "createColor": {
		     "!type": "fn()",
		     "out": {}
		    },
		    "createColor~out": {
		     "r": {},
		     "g": {},
		     "b": {},
		     "a": {},
		     "h": {},
		     "s": {},
		     "l": {},
		     "v": {},
		     "color": {},
		     "color32": {},
		     "rgba": {}
		    },
		    "updateColor": {
		     "!type": "fn()"
		    },
		    "getColor32": {
		     "!type": "fn()"
		    },
		    "getColor": {
		     "!type": "fn()"
		    },
		    "RGBtoString": {
		     "!type": "fn()",
		     "a": {},
		     "prefix": {}
		    },
		    "hexToRGB": {
		     "!type": "fn()",
		     "rgb": {}
		    },
		    "hexToColor": {
		     "!type": "fn()",
		     "hex": {},
		     "result": {},
		     "r": {},
		     "g": {},
		     "b": {},
		     "out": {}
		    },
		    "hexToColor~out": {
		     "r": {},
		     "g": {},
		     "b": {}
		    },
		    "webToColor": {
		     "!type": "fn()",
		     "out": {},
		     "result": {}
		    },
		    "webToColor~out": {
		     "r": {},
		     "g": {},
		     "b": {},
		     "a": {}
		    },
		    "valueToColor": {
		     "!type": "fn()",
		     "out": {},
		     "tempColor": {}
		    },
		    "valueToColor~out": {
		     "a": {},
		     "r": {},
		     "g": {},
		     "b": {}
		    },
		    "componentToHex": {
		     "!type": "fn()",
		     "hex": {}
		    },
		    "HSVColorWheel": {
		     "!type": "fn()",
		     "s": {},
		     "v": {},
		     "colors": {},
		     "c": {}
		    },
		    "HSLColorWheel": {
		     "!type": "fn()",
		     "s": {},
		     "l": {},
		     "colors": {},
		     "c": {}
		    },
		    "interpolateColor": {
		     "!type": "fn()",
		     "alpha": {},
		     "src1": {},
		     "src2": {},
		     "r": {},
		     "g": {},
		     "b": {}
		    },
		    "interpolateColorWithRGB": {
		     "!type": "fn()",
		     "src": {},
		     "or": {},
		     "og": {},
		     "ob": {}
		    },
		    "interpolateRGB": {
		     "!type": "fn()",
		     "r": {},
		     "g": {},
		     "b": {}
		    },
		    "getRandomColor": {
		     "!type": "fn()",
		     "min": {},
		     "max": {},
		     "alpha": {},
		     "red": {},
		     "green": {},
		     "blue": {}
		    },
		    "getRGB": {
		     "!type": "fn()"
		    },
		    "getWebRGB": {
		     "!type": "fn()",
		     "rgb": {}
		    },
		    "getAlpha": {
		     "!type": "fn()"
		    },
		    "getAlphaFloat": {
		     "!type": "fn()"
		    },
		    "getRed": {
		     "!type": "fn()"
		    },
		    "getGreen": {
		     "!type": "fn()"
		    },
		    "getBlue": {
		     "!type": "fn()"
		    },
		    "blendNormal": {
		     "!type": "fn()"
		    },
		    "blendLighten": {
		     "!type": "fn()"
		    },
		    "blendDarken": {
		     "!type": "fn()"
		    },
		    "blendMultiply": {
		     "!type": "fn()"
		    },
		    "blendAverage": {
		     "!type": "fn()"
		    },
		    "blendAdd": {
		     "!type": "fn()"
		    },
		    "blendSubtract": {
		     "!type": "fn()"
		    },
		    "blendDifference": {
		     "!type": "fn()"
		    },
		    "blendNegation": {
		     "!type": "fn()"
		    },
		    "blendScreen": {
		     "!type": "fn()"
		    },
		    "blendExclusion": {
		     "!type": "fn()"
		    },
		    "blendOverlay": {
		     "!type": "fn()"
		    },
		    "blendSoftLight": {
		     "!type": "fn()"
		    },
		    "blendHardLight": {
		     "!type": "fn()"
		    },
		    "blendColorDodge": {
		     "!type": "fn()"
		    },
		    "blendColorBurn": {
		     "!type": "fn()"
		    },
		    "blendLinearDodge": {
		     "!type": "fn()"
		    },
		    "blendLinearBurn": {
		     "!type": "fn()"
		    },
		    "blendLinearLight": {
		     "!type": "fn()"
		    },
		    "blendVividLight": {
		     "!type": "fn()"
		    },
		    "blendPinLight": {
		     "!type": "fn()"
		    },
		    "blendHardMix": {
		     "!type": "fn()"
		    },
		    "blendReflect": {
		     "!type": "fn()"
		    },
		    "blendGlow": {
		     "!type": "fn()"
		    },
		    "blendPhoenix": {
		     "!type": "fn()"
		    }
		   },
		   "LinkedList": {
		    "!type": "fn()",
		    "prototype": {
		     "next": {},
		     "prev": {},
		     "first": {},
		     "last": {},
		     "total": {
		      "!type": "number"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "callAll": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "LinkedList#add": {
		    "prototype": {
		     "first": {},
		     "last": {},
		     "next": {}
		    }
		   },
		   "LinkedList#add#last": {
		    "next": {}
		   },
		   "LinkedList#reset": {
		    "prototype": {
		     "first": {},
		     "last": {},
		     "next": {},
		     "prev": {},
		     "total": {}
		    }
		   },
		   "LinkedList#remove": {
		    "prototype": {
		     "first": {},
		     "last": {}
		    }
		   },
		   "LinkedList#callAll": {
		    "entity": {}
		   }
		  },
		  "!type": "fn()",
		  "currentAnim": {
		   "paused": {}
		  },
		  "dualQuat": {
		   "prototype": {
		    "reset": {
		     "!type": "fn()"
		    },
		    "createFromData": {
		     "!type": "fn()"
		    },
		    "add": {
		     "!type": "fn()"
		    },
		    "normalize": {
		     "!type": "fn()"
		    },
		    "transform": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "dualQuat#reset": {
		   "prototype": {
		    "real[undefined]": {},
		    "imaginary[undefined]": {}
		   }
		  },
		  "dualQuat#createFromData": {
		   "prototype": {
		    "real": {},
		    "imaginary": {},
		    "imaginary[undefined]": {}
		   }
		  },
		  "dualQuat#normalize": {
		   "norm": {},
		   "prototype": {
		    "real": {},
		    "imaginary": {}
		   }
		  },
		  "dualQuat#transform": {
		   "tmpVec1": {},
		   "tmpVec2": {},
		   "tmpVec0": {},
		   "aVec": {},
		   "trans": {},
		   "rot": {}
		  },
		  "Utils": {
		   "setAxisMatrix": {
		    "!type": "fn()",
		    "retMat": {},
		    "M00": {},
		    "M01": {},
		    "M02": {},
		    "M03": {},
		    "M10": {},
		    "M11": {},
		    "M12": {},
		    "M13": {},
		    "M20": {},
		    "M21": {},
		    "M22": {},
		    "M23": {},
		    "M30": {},
		    "M31": {},
		    "M32": {},
		    "M33": {}
		   },
		   "setAxisMatrix~retMat": {
		    "undefined]": {}
		   },
		   "matrixToQuat": {
		    "!type": "fn()",
		    "retQuat": {},
		    "te": {},
		    "m11": {},
		    "m12": {},
		    "m13": {},
		    "m21": {},
		    "m22": {},
		    "m23": {},
		    "m31": {},
		    "m32": {},
		    "m33": {},
		    "trace": {},
		    "s": {}
		   },
		   "matrixToQuat~retQuat": {
		    "undefined]": {}
		   },
		   "rotateVec_90": {
		    "!type": "fn()",
		    "ret_vec": {}
		   },
		   "calcRotateMat": {
		    "!type": "fn()",
		    "dir": {},
		    "pep_dir": {},
		    "cur_tangent": {},
		    "cur_normal": {},
		    "cur_binormal": {},
		    "cur_rotate": {}
		   },
		   "getMatTranslate": {
		    "!type": "fn()",
		    "ret_pos": {}
		   },
		   "getMatTranslate~ret_pos": {
		    "undefined]": {}
		   },
		   "addMat": {
		    "!type": "fn()",
		    "retMat": {},
		    "i": {}
		   },
		   "addMat~retMat": {
		    "undefined]": {}
		   },
		   "mulMat": {
		    "!type": "fn()",
		    "retMat": {},
		    "i": {}
		   },
		   "mulMat~retMat": {
		    "undefined]": {}
		   },
		   "clamp": {
		    "!type": "fn()"
		   },
		   "vecInterp": {
		    "!type": "fn()",
		    "newVec1": {},
		    "newVec2": {},
		    "retVec": {}
		   },
		   "vec2Interp": {
		    "!type": "fn()",
		    "newVec1": {},
		    "newVec2": {},
		    "retVec": {}
		   }
		  },
		  "MeshBone": {
		   "prototype": {
		    "setRestParentMat": {
		     "!type": "fn()"
		    },
		    "setParentWorldMat": {
		     "!type": "fn()"
		    },
		    "setParentWorldInvMat": {
		     "!type": "fn()"
		    },
		    "getLocalRestStartPt": {
		     "!type": "fn()"
		    },
		    "getLocalRestEndPt": {
		     "!type": "fn()"
		    },
		    "setLocalRestStartPt": {
		     "!type": "fn()"
		    },
		    "setLocalRestEndPt": {
		     "!type": "fn()"
		    },
		    "calcRestData": {
		     "!type": "fn()"
		    },
		    "setWorldStartPt": {
		     "!type": "fn()"
		    },
		    "setWorldEndPt": {
		     "!type": "fn()"
		    },
		    "fixDQs": {
		     "!type": "fn()"
		    },
		    "initWorldPts": {
		     "!type": "fn()"
		    },
		    "getWorldRestStartPt": {
		     "!type": "fn()"
		    },
		    "getWorldRestEndPt": {
		     "!type": "fn()"
		    },
		    "getWorldRestAngle": {
		     "!type": "fn()"
		    },
		    "getWorldRestPos": {
		     "!type": "fn()"
		    },
		    "getWorldStartPt": {
		     "!type": "fn()"
		    },
		    "getWorldEndPt": {
		     "!type": "fn()"
		    },
		    "getRestParentMat": {
		     "!type": "fn()"
		    },
		    "getRestWorldMat": {
		     "!type": "fn()"
		    },
		    "getWorldDeltaMat": {
		     "!type": "fn()"
		    },
		    "getParentWorldMat": {
		     "!type": "fn()"
		    },
		    "getParentWorldInvMat": {
		     "!type": "fn()"
		    },
		    "getWorldDq": {
		     "!type": "fn()"
		    },
		    "computeRestParentTransforms": {
		     "!type": "fn()"
		    },
		    "computeParentTransforms": {
		     "!type": "fn()"
		    },
		    "computeWorldDeltaTransforms": {
		     "!type": "fn()"
		    },
		    "addChild": {
		     "!type": "fn()"
		    },
		    "getChildren": {
		     "!type": "fn()"
		    },
		    "hasBone": {
		     "!type": "fn()"
		    },
		    "getChildByKey": {
		     "!type": "fn()"
		    },
		    "getKey": {
		     "!type": "fn()"
		    },
		    "getAllBoneKeys": {
		     "!type": "fn()"
		    },
		    "getAllChildren": {
		     "!type": "fn()"
		    },
		    "getBoneDepth": {
		     "!type": "fn()"
		    },
		    "isLeaf": {
		     "!type": "fn()"
		    },
		    "deleteChildren": {
		     "!type": "fn()"
		    },
		    "setTagId": {
		     "!type": "fn()"
		    },
		    "getTagId": {
		     "!type": "fn()"
		    },
		    "computeDirs": {
		     "!type": "fn()"
		    },
		    "computeRestLength": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshBone#setRestParentMat": {
		   "prototype": {
		    "rest_parent_mat": {},
		    "rest_parent_inv_mat": {}
		   }
		  },
		  "MeshBone#setParentWorldMat": {
		   "prototype": {
		    "parent_world_mat": {}
		   }
		  },
		  "MeshBone#setParentWorldInvMat": {
		   "prototype": {
		    "parent_world_inv_mat": {}
		   }
		  },
		  "MeshBone#setLocalRestStartPt": {
		   "prototype": {
		    "local_rest_start_pt": {}
		   }
		  },
		  "MeshBone#setLocalRestEndPt": {
		   "prototype": {
		    "local_rest_end_pt": {}
		   }
		  },
		  "MeshBone#calcRestData": {
		   "calc": {},
		   "prototype": {
		    "local_rest_dir": {},
		    "local_rest_normal_dir": {}
		   }
		  },
		  "MeshBone#setWorldStartPt": {
		   "prototype": {
		    "world_start_pt": {}
		   }
		  },
		  "MeshBone#setWorldEndPt": {
		   "prototype": {
		    "world_end_pt": {}
		   }
		  },
		  "MeshBone#fixDQs#world_dq": {
		   "real": {},
		   "imaginary": {}
		  },
		  "MeshBone#fixDQs": {
		   "i": {},
		   "cur_child": {}
		  },
		  "MeshBone#initWorldPts": {
		   "i": {}
		  },
		  "MeshBone#getWorldRestStartPt": {
		   "tmp_mat": {},
		   "ret_vec": {}
		  },
		  "MeshBone#getWorldRestEndPt": {
		   "tmp_mat": {},
		   "ret_vec": {}
		  },
		  "MeshBone#computeRestParentTransforms": {
		   "cur_tangent": {},
		   "cur_binormal": {},
		   "cur_normal": {},
		   "cur_translate": {},
		   "cur_rotate": {},
		   "cur_final": {},
		   "prototype": {
		    "rest_world_mat": {},
		    "rest_world_inv_mat": {},
		    "world_rest_pos": {},
		    "bind_world_mat": {},
		    "bind_world_inv_mat": {}
		   },
		   "world_rest_dir": {},
		   "bind_translate": {},
		   "tVec": {},
		   "bind_rotate": {},
		   "cur_bind_final": {},
		   "i": {},
		   "cur_bone": {}
		  },
		  "MeshBone#computeParentTransforms": {
		   "translate_parent": {},
		   "tVec": {},
		   "rotate_parent": {},
		   "final_transform": {},
		   "final_inv_transform": {},
		   "i": {},
		   "cur_bone": {}
		  },
		  "MeshBone#computeWorldDeltaTransforms": {
		   "calc": {},
		   "cur_tangent": {},
		   "cur_normal": {},
		   "cur_binormal": {},
		   "cur_rotate": {},
		   "cur_translate": {},
		   "prototype": {
		    "world_delta_mat": {},
		    "world_dq": {}
		   },
		   "cur_quat": {},
		   "tmp_pos": {},
		   "i": {},
		   "cur_bone": {}
		  },
		  "MeshBone#hasBone": {
		   "i": {},
		   "cur_bone": {}
		  },
		  "MeshBone#getChildByKey": {
		   "ret_data": {},
		   "i": {},
		   "cur_bone": {},
		   "result": {}
		  },
		  "MeshBone#getAllBoneKeys": {
		   "ret_data": {},
		   "i": {},
		   "append_data": {}
		  },
		  "MeshBone#getAllChildren": {
		   "ret_data": {},
		   "i": {},
		   "append_data": {}
		  },
		  "MeshBone#getBoneDepth": {
		   "i": {},
		   "cur_bone": {},
		   "ret_val": {}
		  },
		  "MeshBone#deleteChildren": {
		   "i": {},
		   "cur_bone": {},
		   "prototype": {
		    "children": {}
		   }
		  },
		  "MeshBone#setTagId": {
		   "prototype": {
		    "tag_id": {}
		   }
		  },
		  "MeshBone#computeDirs": {
		   "tangent": {},
		   "normal": {},
		   "retData": {}
		  },
		  "MeshBone#computeDirs~retData": {
		   "\"first\"]": {},
		   "\"second\"]": {}
		  },
		  "MeshBone#computeRestLength": {
		   "tmp_dir": {},
		   "prototype": {
		    "rest_length": {}
		   }
		  },
		  "MeshRenderRegion": {
		   "prototype": {
		    "getIndicesIndex": {
		     "!type": "fn()"
		    },
		    "getRestPtsIndex": {
		     "!type": "fn()"
		    },
		    "getUVsIndex": {
		     "!type": "fn()"
		    },
		    "getNumPts": {
		     "!type": "fn()"
		    },
		    "getStartPtIndex": {
		     "!type": "fn()"
		    },
		    "getEndPtIndex": {
		     "!type": "fn()"
		    },
		    "getNumIndices": {
		     "!type": "fn()"
		    },
		    "getStartIndex": {
		     "!type": "fn()"
		    },
		    "getEndIndex": {
		     "!type": "fn()"
		    },
		    "poseFinalPts": {
		     "!type": "fn()"
		    },
		    "setMainBoneKey": {
		     "!type": "fn()"
		    },
		    "determineMainBone": {
		     "!type": "fn()"
		    },
		    "setUseDq": {
		     "!type": "fn()"
		    },
		    "setName": {
		     "!type": "fn()"
		    },
		    "getName": {
		     "!type": "fn()"
		    },
		    "setUseLocalDisplacements": {
		     "!type": "fn()"
		    },
		    "getUseLocalDisplacements": {
		     "!type": "fn()"
		    },
		    "setUsePostDisplacements": {
		     "!type": "fn()"
		    },
		    "getUsePostDisplacements": {
		     "!type": "fn()"
		    },
		    "getRestLocalPt": {
		     "!type": "fn()"
		    },
		    "getLocalIndex": {
		     "!type": "fn()"
		    },
		    "clearLocalDisplacements": {
		     "!type": "fn()"
		    },
		    "clearPostDisplacements": {
		     "!type": "fn()"
		    },
		    "setUseUvWarp": {
		     "!type": "fn()"
		    },
		    "getUseUvWarp": {
		     "!type": "fn()"
		    },
		    "setUvWarpLocalOffset": {
		     "!type": "fn()"
		    },
		    "setUvWarpGlobalOffset": {
		     "!type": "fn()"
		    },
		    "setUvWarpScale": {
		     "!type": "fn()"
		    },
		    "getUvWarpLocalOffset": {
		     "!type": "fn()"
		    },
		    "getUvWarpGlobalOffset": {
		     "!type": "fn()"
		    },
		    "getUvWarpScale": {
		     "!type": "fn()"
		    },
		    "runUvWarp": {
		     "!type": "fn()"
		    },
		    "restoreRefUv": {
		     "!type": "fn()"
		    },
		    "getTagId": {
		     "!type": "fn()"
		    },
		    "setTagId": {
		     "!type": "fn()"
		    },
		    "initFastNormalWeightMap": {
		     "!type": "fn()"
		    },
		    "initUvWarp": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshRenderRegion#poseFinalPts": {
		   "read_pt_index": {},
		   "write_pt_index": {},
		   "i": {},
		   "boneKeys": {},
		   "boneKeyLength": {},
		   "l": {},
		   "cur_rest_pt": {},
		   "j": {},
		   "curBoneIndices": {},
		   "relevantIndicesLength": {},
		   "idx_lookup": {},
		   "cur_bone": {},
		   "cur_weight_val": {},
		   "cur_im_weight_val": {},
		   "world_dq": {},
		   "tmp_pt": {},
		   "final_pt": {},
		   "final_pt[undefined]": {}
		  },
		  "MeshRenderRegion#poseFinalPts~cur_rest_pt": {
		   "undefined]": {}
		  },
		  "MeshRenderRegion#setMainBoneKey": {
		   "prototype": {
		    "main_bone_key": {}
		   }
		  },
		  "MeshRenderRegion#determineMainBone": {
		   "prototype": {
		    "main_bone": {}
		   }
		  },
		  "MeshRenderRegion#setUseDq": {
		   "prototype": {
		    "use_dq": {}
		   }
		  },
		  "MeshRenderRegion#setName": {
		   "prototype": {
		    "name": {}
		   }
		  },
		  "MeshRenderRegion#setUseLocalDisplacements": {
		   "prototype": {
		    "use_local_displacements": {},
		    "local_displacements": {}
		   },
		   "i": {}
		  },
		  "MeshRenderRegion#setUsePostDisplacements": {
		   "prototype": {
		    "use_post_displacements": {},
		    "post_displacements": {}
		   },
		   "i": {}
		  },
		  "MeshRenderRegion#getRestLocalPt": {
		   "read_pt_index": {},
		   "return_pt": {}
		  },
		  "MeshRenderRegion#getLocalIndex": {
		   "read_index": {}
		  },
		  "MeshRenderRegion#clearLocalDisplacements": {
		   "i": {},
		   "prototype": {
		    "local_displacements[undefined]": {}
		   }
		  },
		  "MeshRenderRegion#clearPostDisplacements": {
		   "i": {},
		   "prototype": {
		    "post_displacements[undefined]": {}
		   }
		  },
		  "MeshRenderRegion#setUseUvWarp": {
		   "prototype": {
		    "use_uv_warp": {}
		   }
		  },
		  "MeshRenderRegion#setUvWarpLocalOffset": {
		   "prototype": {
		    "uv_warp_local_offset": {}
		   }
		  },
		  "MeshRenderRegion#setUvWarpGlobalOffset": {
		   "prototype": {
		    "uv_warp_global_offset": {}
		   }
		  },
		  "MeshRenderRegion#setUvWarpScale": {
		   "prototype": {
		    "uv_warp_scale": {}
		   }
		  },
		  "MeshRenderRegion#runUvWarp": {
		   "cur_uvs_index": {},
		   "i": {},
		   "set_uv": {},
		   "prototype": {
		    "store_uvs[undefined]": {}
		   }
		  },
		  "MeshRenderRegion#runUvWarp~set_uv": {
		   "undefined]": {}
		  },
		  "MeshRenderRegion#restoreRefUv": {
		   "cur_uvs_index": {},
		   "i": {},
		   "set_uv": {},
		   "prototype": {
		    "store_uvs[undefined]": {}
		   }
		  },
		  "MeshRenderRegion#setTagId": {
		   "prototype": {
		    "tag_id": {}
		   }
		  },
		  "MeshRenderRegion#initFastNormalWeightMap": {
		   "prototype": {
		    "relevant_bones_indices": {}
		   },
		   "cur_key": {},
		   "values": {},
		   "cutoff_val": {},
		   "i": {},
		   "curIndicesArray": {},
		   "j": {},
		   "cur_val": {},
		   "cur_bone": {}
		  },
		  "MeshRenderRegion#initUvWarp": {
		   "cur_uvs_index": {},
		   "prototype": {
		    "uv_warp_ref_uvs": {},
		    "uv_warp_ref_uvs[undefined]": {}
		   },
		   "i": {}
		  },
		  "MeshRenderBoneComposition": {
		   "prototype": {
		    "addRegion": {
		     "!type": "fn()"
		    },
		    "setRootBone": {
		     "!type": "fn()"
		    },
		    "getRootBone": {
		     "!type": "fn()"
		    },
		    "initBoneMap": {
		     "!type": "fn()"
		    },
		    "initRegionsMap": {
		     "!type": "fn()"
		    },
		    "getBonesMap": {
		     "!type": "fn()"
		    },
		    "getRegionsMap": {
		     "!type": "fn()"
		    },
		    "getRegions": {
		     "!type": "fn()"
		    },
		    "getRegionWithId": {
		     "!type": "fn()"
		    },
		    "resetToWorldRestPts": {
		     "!type": "fn()"
		    },
		    "updateAllTransforms": {
		     "!type": "fn()"
		    }
		   },
		   "genBoneMap": {
		    "!type": "fn()",
		    "ret_map": {},
		    "all_keys": {},
		    "i": {},
		    "cur_key": {}
		   },
		   "genBoneMap~ret_map": {
		    "undefined]": {}
		   }
		  },
		  "MeshRenderBoneComposition#setRootBone": {
		   "prototype": {
		    "root_bone": {}
		   }
		  },
		  "MeshRenderBoneComposition#initBoneMap": {
		   "prototype": {
		    "bones_map": {}
		   }
		  },
		  "MeshRenderBoneComposition#initRegionsMap": {
		   "prototype": {
		    "regions_map": {},
		    "regions_map[undefined]": {}
		   },
		   "i": {},
		   "cur_key": {}
		  },
		  "MeshRenderBoneComposition#getRegionWithId": {
		   "i": {},
		   "cur_region": {}
		  },
		  "MeshBoneCache": {
		   "prototype": {
		    "setWorldStartPt": {
		     "!type": "fn()"
		    },
		    "setWorldEndPt": {
		     "!type": "fn()"
		    },
		    "getWorldStartPt": {
		     "!type": "fn()"
		    },
		    "getWorldEndPt": {
		     "!type": "fn()"
		    },
		    "getKey": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshBoneCache#setWorldStartPt": {
		   "prototype": {
		    "world_start_pt": {}
		   }
		  },
		  "MeshBoneCache#setWorldEndPt": {
		   "prototype": {
		    "world_end_pt": {}
		   }
		  },
		  "MeshDisplacementCache": {
		   "prototype": {
		    "setLocalDisplacements": {
		     "!type": "fn()"
		    },
		    "setPostDisplacements": {
		     "!type": "fn()"
		    },
		    "getKey": {
		     "!type": "fn()"
		    },
		    "getLocalDisplacements": {
		     "!type": "fn()"
		    },
		    "getPostDisplacements": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshDisplacementCache#setLocalDisplacements": {
		   "prototype": {
		    "local_displacements": {}
		   }
		  },
		  "MeshDisplacementCache#setPostDisplacements": {
		   "prototype": {
		    "post_displacements": {}
		   }
		  },
		  "MeshUVWarpCache": {
		   "prototype": {
		    "setUvWarpLocalOffset": {
		     "!type": "fn()"
		    },
		    "setUvWarpGlobalOffset": {
		     "!type": "fn()"
		    },
		    "setUvWarpScale": {
		     "!type": "fn()"
		    },
		    "getUvWarpLocalOffset": {
		     "!type": "fn()"
		    },
		    "getUvWarpGlobalOffset": {
		     "!type": "fn()"
		    },
		    "getUvWarpScale": {
		     "!type": "fn()"
		    },
		    "getKey": {
		     "!type": "fn()"
		    },
		    "setEnabled": {
		     "!type": "fn()"
		    },
		    "getEnabled": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshUVWarpCache#setUvWarpLocalOffset": {
		   "prototype": {
		    "uv_warp_local_offset": {}
		   }
		  },
		  "MeshUVWarpCache#setUvWarpGlobalOffset": {
		   "prototype": {
		    "uv_warp_global_offset": {}
		   }
		  },
		  "MeshUVWarpCache#setUvWarpScale": {
		   "prototype": {
		    "uv_warp_scale": {}
		   }
		  },
		  "MeshUVWarpCache#setEnabled": {
		   "prototype": {
		    "enabled": {}
		   }
		  },
		  "MeshBoneCacheManager": {
		   "prototype": {
		    "init": {
		     "!type": "fn()"
		    },
		    "getStartTime": {
		     "!type": "fn()"
		    },
		    "getEndime": {
		     "!type": "fn()"
		    },
		    "getIndexByTime": {
		     "!type": "fn()"
		    },
		    "retrieveValuesAtTime": {
		     "!type": "fn()"
		    },
		    "allReady": {
		     "!type": "fn()"
		    },
		    "makeAllReady": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshBoneCacheManager#init": {
		   "prototype": {
		    "start_time": {},
		    "end_time": {},
		    "bone_cache_table": {},
		    "bone_cache_data_ready": {},
		    "is_ready": {}
		   },
		   "num_frames": {},
		   "i": {}
		  },
		  "MeshBoneCacheManager#getIndexByTime": {
		   "retval": {}
		  },
		  "MeshBoneCacheManager#retrieveValuesAtTime": {
		   "base_time": {},
		   "end_time": {},
		   "ratio": {},
		   "base_cache": {},
		   "end_cache": {},
		   "i": {},
		   "l": {},
		   "base_data": {},
		   "end_data": {},
		   "cur_key": {},
		   "final_world_start_pt": {},
		   "final_world_end_pt": {}
		  },
		  "MeshBoneCacheManager#allReady": {
		   "num_frames": {},
		   "ready_cnt": {},
		   "i": {},
		   "prototype": {
		    "is_ready": {}
		   }
		  },
		  "MeshBoneCacheManager#makeAllReady": {
		   "i": {},
		   "prototype": {
		    "bone_cache_data_ready[undefined]": {}
		   }
		  },
		  "MeshDisplacementCacheManager": {
		   "prototype": {
		    "init": {
		     "!type": "fn()"
		    },
		    "getStartTime": {
		     "!type": "fn()"
		    },
		    "getEndime": {
		     "!type": "fn()"
		    },
		    "getIndexByTime": {
		     "!type": "fn()"
		    },
		    "retrieveValuesAtTime": {
		     "!type": "fn()"
		    },
		    "allReady": {
		     "!type": "fn()"
		    },
		    "makeAllReady": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshDisplacementCacheManager#init": {
		   "prototype": {
		    "start_time": {},
		    "end_time": {},
		    "displacement_cache_table": {},
		    "displacement_cache_data_ready": {},
		    "is_ready": {}
		   },
		   "num_frames": {},
		   "i": {}
		  },
		  "MeshDisplacementCacheManager#getIndexByTime": {
		   "retval": {}
		  },
		  "MeshDisplacementCacheManager#retrieveValuesAtTime": {
		   "base_time": {},
		   "end_time": {},
		   "ratio": {},
		   "base_cache": {},
		   "end_cache": {},
		   "i": {},
		   "base_data": {},
		   "end_data": {},
		   "cur_key": {},
		   "set_region": {},
		   "displacements": {},
		   "j": {},
		   "interp_val": {}
		  },
		  "MeshDisplacementCacheManager#retrieveValuesAtTime~displacements": {
		   "undefined]": {},
		   "set[undefined]": {}
		  },
		  "MeshDisplacementCacheManager#allReady": {
		   "num_frames": {},
		   "ready_cnt": {},
		   "i": {},
		   "prototype": {
		    "is_ready": {}
		   }
		  },
		  "MeshDisplacementCacheManager#makeAllReady": {
		   "i": {},
		   "prototype": {
		    "displacement_cache_data_ready[undefined]": {}
		   }
		  },
		  "MeshUVWarpCacheManager": {
		   "prototype": {
		    "init": {
		     "!type": "fn()"
		    },
		    "getStartTime": {
		     "!type": "fn()"
		    },
		    "getEndime": {
		     "!type": "fn()"
		    },
		    "getIndexByTime": {
		     "!type": "fn()"
		    },
		    "retrieveValuesAtTime": {
		     "!type": "fn()"
		    },
		    "allReady": {
		     "!type": "fn()"
		    },
		    "makeAllReady": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshUVWarpCacheManager#init": {
		   "prototype": {
		    "start_time": {},
		    "end_time": {},
		    "uv_cache_table": {},
		    "uv_cache_data_ready": {},
		    "is_ready": {}
		   },
		   "num_frames": {},
		   "i": {}
		  },
		  "MeshUVWarpCacheManager#getIndexByTime": {
		   "retval": {}
		  },
		  "MeshUVWarpCacheManager#retrieveValuesAtTime": {
		   "base_time": {},
		   "end_time": {},
		   "ratio": {},
		   "base_cache": {},
		   "end_cache": {},
		   "i": {},
		   "base_data": {},
		   "end_data": {},
		   "cur_key": {},
		   "set_region": {},
		   "final_local_offset": {},
		   "final_global_offset": {},
		   "final_scale": {}
		  },
		  "MeshUVWarpCacheManager#allReady": {
		   "num_frames": {},
		   "ready_cnt": {},
		   "i": {},
		   "prototype": {
		    "is_ready": {}
		   }
		  },
		  "MeshUVWarpCacheManager#makeAllReady": {
		   "i": {},
		   "prototype": {
		    "uv_cache_data_ready[undefined]": {}
		   }
		  },
		  "CreatureModuleUtils": {
		   "GetAllAnimationNames": {
		    "!type": "fn()",
		    "json_animations": {},
		    "keys": {},
		    "name": {}
		   },
		   "getFloatArray": {
		    "!type": "fn()"
		   },
		   "getIntArray": {
		    "!type": "fn()"
		   },
		   "ReadPointsArray2DJSON": {
		    "!type": "fn()",
		    "raw_array": {},
		    "ret_list": {},
		    "num_points": {},
		    "i": {},
		    "cur_index": {}
		   },
		   "ReadFloatArray3DJSON": {
		    "!type": "fn()",
		    "raw_array": {},
		    "ret_list": {},
		    "num_points": {},
		    "i": {},
		    "cur_index": {}
		   },
		   "ReadBoolJSON": {
		    "!type": "fn()",
		    "val": {}
		   },
		   "ReadFloatArrayJSON": {
		    "!type": "fn()"
		   },
		   "ReadIntArrayJSON": {
		    "!type": "fn()"
		   },
		   "ReadMatrixJSON": {
		    "!type": "fn()",
		    "raw_array": {},
		    "retMat": {},
		    "i": {}
		   },
		   "ReadMatrixJSON~retMat": {
		    "undefined]": {}
		   },
		   "ReadVector2JSON": {
		    "!type": "fn()",
		    "raw_array": {}
		   },
		   "ReadVector3JSON": {
		    "!type": "fn()",
		    "raw_array": {}
		   },
		   "CreateBones": {
		    "!type": "fn()",
		    "root_bone": {},
		    "base_obj": {},
		    "bone_data": {},
		    "child_set": {},
		    "cur_name": {},
		    "cur_node": {},
		    "cur_id": {},
		    "cur_parent_mat": {},
		    "cur_local_rest_start_pt": {},
		    "cur_local_rest_end_pt": {},
		    "cur_children_ids": {},
		    "new_bone": {},
		    "i": {},
		    "cur_child_id": {},
		    "cur_data": {},
		    "cur_bone": {},
		    "children_ids": {},
		    "child_bone": {}
		   },
		   "CreateBones~new_bone": {
		    "local_rest_start_pt": {},
		    "local_rest_end_pt": {}
		   },
		   "CreateBones~bone_data": {
		    "undefined]": {
		     "first": {},
		     "second": {}
		    }
		   },
		   "CreateBones~child_set": {
		    "undefined]": {}
		   },
		   "CreateRegions": {
		    "!type": "fn()",
		    "ret_regions": {},
		    "base_obj": {},
		    "cur_name": {},
		    "cur_node": {},
		    "cur_id": {},
		    "cur_start_pt_index": {},
		    "cur_end_pt_index": {},
		    "cur_start_index": {},
		    "cur_end_index": {},
		    "new_region": {},
		    "weight_map": {},
		    "weight_obj": {},
		    "w_key": {},
		    "w_node": {},
		    "values": {}
		   },
		   "CreateRegions~weight_map": {
		    "undefined]": {}
		   },
		   "GetStartEndTimes": {
		    "!type": "fn()",
		    "start_time": {},
		    "end_time": {},
		    "first": {},
		    "base_obj": {},
		    "cur_val": {},
		    "cur_node": {},
		    "cur_num": {}
		   },
		   "FillBoneCache": {
		    "!type": "fn()",
		    "base_obj": {},
		    "cur_time": {},
		    "cur_node": {},
		    "cache_list": {},
		    "cur_name": {},
		    "bone_node": {},
		    "cur_start_pt": {},
		    "cur_end_pt": {},
		    "cache_data": {},
		    "set_index": {}
		   },
		   "FillDeformationCache": {
		    "!type": "fn()",
		    "base_obj": {},
		    "cur_time": {},
		    "cur_node": {},
		    "cache_list": {},
		    "cur_name": {},
		    "mesh_node": {},
		    "cache_data": {},
		    "use_local_displacement": {},
		    "use_post_displacement": {},
		    "read_pts": {},
		    "set_index": {}
		   },
		   "FillUVSwapCache": {
		    "!type": "fn()",
		    "base_obj": {},
		    "cur_time": {},
		    "cur_node": {},
		    "cache_list": {},
		    "cur_name": {},
		    "uv_node": {},
		    "cache_data": {},
		    "use_uv": {},
		    "local_offset": {},
		    "global_offset": {},
		    "scale": {},
		    "set_index": {}
		   }
		  },
		  "cache_manager": {
		   "bone_cache_table[undefined]": {},
		   "displacement_cache_table[undefined]": {},
		   "uv_cache_table[undefined]": {}
		  },
		  "Creature": {
		   "prototype": {
		    "FillRenderColours": {
		     "!type": "fn()"
		    },
		    "ComputeBoundaryIndices": {
		     "!type": "fn()"
		    },
		    "ComputeBoundaryMinMax": {
		     "!type": "fn()"
		    },
		    "LoadFromData": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "Creature#FillRenderColours": {
		   "i": {},
		   "cur_colour_index": {},
		   "prototype": {
		    "render_colours[undefined]": {}
		   }
		  },
		  "Creature#ComputeBoundaryIndices": {
		   "freq_table": {},
		   "i": {},
		   "cur_regions": {},
		   "cur_idx": {},
		   "is_found": {},
		   "j": {},
		   "cur_region": {},
		   "cur_start_index": {},
		   "cur_end_index": {},
		   "prototype": {
		    "boundary_indices": {}
		   }
		  },
		  "Creature#ComputeBoundaryIndices~freq_table": {
		   "undefined]": {}
		  },
		  "Creature#ComputeBoundaryMinMax": {
		   "firstIdx": {},
		   "minPt": {},
		   "maxPt": {},
		   "i": {},
		   "ref_idx": {},
		   "ref_x": {},
		   "ref_y": {},
		   "prototype": {
		    "boundary_min": {},
		    "boundary_max": {}
		   }
		  },
		  "Creature#ComputeBoundaryMinMax~minPt": {
		   "0]": {},
		   "1]": {}
		  },
		  "Creature#ComputeBoundaryMinMax~maxPt": {
		   "0]": {},
		   "1]": {}
		  },
		  "Creature#LoadFromData": {
		   "json_mesh": {},
		   "prototype": {
		    "global_pts": {},
		    "total_num_pts": {},
		    "global_indices": {},
		    "total_num_indices": {},
		    "global_uvs": {},
		    "render_colours": {},
		    "render_pts": {},
		    "render_composition": {}
		   },
		   "i": {},
		   "root_bone": {},
		   "regions": {},
		   "cur_region": {}
		  },
		  "CreatureAnimation": {
		   "prototype": {
		    "LoadFromData": {
		     "!type": "fn()"
		    },
		    "getIndexByTime": {
		     "!type": "fn()"
		    },
		    "verifyFillCache": {
		     "!type": "fn()"
		    },
		    "poseFromCachePts": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "CreatureAnimation#LoadFromData": {
		   "json_anim_base": {},
		   "json_clip": {},
		   "start_end_times": {},
		   "prototype": {
		    "start_time": {},
		    "end_time": {}
		   }
		  },
		  "CreatureAnimation#getIndexByTime": {
		   "retval": {}
		  },
		  "CreatureAnimation#verifyFillCache": {
		   "prototype": {
		    "cache_pts": {}
		   }
		  },
		  "CreatureAnimation#poseFromCachePts": {
		   "cur_floor_time": {},
		   "cur_ceil_time": {},
		   "cur_ratio": {},
		   "set_pt": {},
		   "floor_pts": {},
		   "ceil_pts": {},
		   "set_idx": {},
		   "floor_idx": {},
		   "ceil_idx": {},
		   "i": {}
		  },
		  "CreatureAnimation#poseFromCachePts~set_pt": {
		   "undefined]": {}
		  },
		  "CreatureManager": {
		   "prototype": {
		    "CreateAnimation": {
		     "!type": "fn()"
		    },
		    "CreateAllAnimations": {
		     "!type": "fn()"
		    },
		    "AddAnimation": {
		     "!type": "fn()"
		    },
		    "GetAnimation": {
		     "!type": "fn()"
		    },
		    "GetCreature": {
		     "!type": "fn()"
		    },
		    "GetAnimationNames": {
		     "!type": "fn()"
		    },
		    "SetActiveAnimationName": {
		     "!type": "fn()"
		    },
		    "GetActiveAnimationName": {
		     "!type": "fn()"
		    },
		    "GetAllAnimations": {
		     "!type": "fn()"
		    },
		    "MakePointCache": {
		     "!type": "fn()"
		    },
		    "FillSinglePointCacheFrame": {
		     "!type": "fn()"
		    },
		    "GetIsPlaying": {
		     "!type": "fn()"
		    },
		    "SetShouldLoop": {
		     "!type": "fn()"
		    },
		    "SetUseCustomTimeRange": {
		     "!type": "fn()"
		    },
		    "SetCustomTimeRange": {
		     "!type": "fn()"
		    },
		    "SetIsPlaying": {
		     "!type": "fn()"
		    },
		    "ResetToStartTimes": {
		     "!type": "fn()"
		    },
		    "setRunTime": {
		     "!type": "fn()"
		    },
		    "increRunTime": {
		     "!type": "fn()"
		    },
		    "correctTime": {
		     "!type": "fn()"
		    },
		    "getRunTime": {
		     "!type": "fn()"
		    },
		    "Update": {
		     "!type": "fn()"
		    },
		    "RunAtTime": {
		     "!type": "fn()"
		    },
		    "RunCreature": {
		     "!type": "fn()"
		    },
		    "SetTimeScale": {
		     "!type": "fn()"
		    },
		    "SetBlending": {
		     "!type": "fn()"
		    },
		    "SetBlendingAnimations": {
		     "!type": "fn()"
		    },
		    "SetBlendingFactor": {
		     "!type": "fn()"
		    },
		    "IsContactBone": {
		     "!type": "fn()"
		    },
		    "PoseCreature": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "CreatureManager#CreateAnimation": {
		   "new_animation": {}
		  },
		  "CreatureManager#CreateAllAnimations": {
		   "all_animation_names": {},
		   "i": {},
		   "cur_name": {}
		  },
		  "CreatureManager#AddAnimation": {
		   "prototype": {
		    "animations[undefined]": {}
		   }
		  },
		  "CreatureManager#GetAnimationNames": {
		   "ret_names": {},
		   "cur_name": {}
		  },
		  "CreatureManager#SetActiveAnimationName": {
		   "prototype": {
		    "active_animation_name": {},
		    "run_time": {}
		   },
		   "cur_animation": {},
		   "displacement_cache_manager": {},
		   "displacement_table": {},
		   "uv_warp_cache_manager": {},
		   "uv_swap_table": {},
		   "render_composition": {},
		   "all_regions": {},
		   "index": {},
		   "i": {},
		   "cur_region": {},
		   "use_local_displacements": {},
		   "use_post_displacements": {}
		  },
		  "CreatureManager#MakePointCache": {
		   "store_run_time": {},
		   "cur_animation": {},
		   "cache_pts_list": {},
		   "i": {},
		   "new_pts": {},
		   "j": {}
		  },
		  "CreatureManager#MakePointCache~new_pts": {
		   "undefined]": {}
		  },
		  "CreatureManager#FillSinglePointCacheFrame": {
		   "store_run_time": {},
		   "cur_animation": {},
		   "new_pts": {},
		   "j": {}
		  },
		  "CreatureManager#FillSinglePointCacheFrame~new_pts": {
		   "undefined]": {}
		  },
		  "CreatureManager#SetShouldLoop": {
		   "prototype": {
		    "should_loop": {}
		   }
		  },
		  "CreatureManager#SetUseCustomTimeRange": {
		   "prototype": {
		    "use_custom_time_range": {}
		   }
		  },
		  "CreatureManager#SetCustomTimeRange": {
		   "prototype": {
		    "custom_start_time": {},
		    "custom_end_time": {}
		   }
		  },
		  "CreatureManager#SetIsPlaying": {
		   "prototype": {
		    "is_playing": {}
		   }
		  },
		  "CreatureManager#ResetToStartTimes": {
		   "cur_animation": {},
		   "prototype": {
		    "run_time": {}
		   }
		  },
		  "CreatureManager#setRunTime": {
		   "prototype": {
		    "run_time": {}
		   }
		  },
		  "CreatureManager#increRunTime": {
		   "prototype": {
		    "run_time": {}
		   }
		  },
		  "CreatureManager#correctTime": {
		   "cur_animation": {},
		   "anim_start_time": {},
		   "anim_end_time": {},
		   "prototype": {
		    "run_time": {}
		   }
		  },
		  "CreatureManager#RunCreature": {
		   "i": {},
		   "cur_animation": {},
		   "j": {},
		   "set_data_index": {},
		   "read_data_1": {},
		   "read_data_2": {}
		  },
		  "CreatureManager#SetTimeScale": {
		   "prototype": {
		    "time_scale": {}
		   }
		  },
		  "CreatureManager#SetBlending": {
		   "prototype": {
		    "do_blending": {},
		    "blend_render_pts[1]": {}
		   },
		   "new_vec": {},
		   "i": {}
		  },
		  "CreatureManager#SetBlendingAnimations": {
		   "prototype": {
		    "active_blend_animation_names[0]": {},
		    "active_blend_animation_names[1]": {}
		   }
		  },
		  "CreatureManager#SetBlendingFactor": {
		   "prototype": {
		    "blending_factor": {}
		   }
		  },
		  "CreatureManager#IsContactBone": {
		   "cur_bone": {}
		  },
		  "CreatureManager#PoseCreature": {
		   "cur_animation": {},
		   "bone_cache_manager": {},
		   "displacement_cache_manager": {},
		   "uv_warp_cache_manager": {},
		   "render_composition": {},
		   "bones_map": {},
		   "regions_map": {},
		   "cur_regions": {},
		   "cur_bones": {},
		   "j": {},
		   "l": {},
		   "cur_region": {},
		   "cur_pt_index": {},
		   "start": {},
		   "end": {},
		   "k": {}
		  },
		  "<anonymous>": {
		   "shim": {},
		   "GLMAT_EPSILON": {},
		   "GLMAT_ARRAY_TYPE": {},
		   "GLMAT_RANDOM": {},
		   "glMatrix": {},
		   "degree": {},
		   "vec2": {},
		   "vec": {},
		   "i": {},
		   "l": {},
		   "stride": {},
		   "offset": {},
		   "vec3": {},
		   "vec4": {},
		   "mat2": {},
		   "mat2d": {},
		   "mat3": {},
		   "mat4": {},
		   "quat": {},
		   "tmpvec3": {},
		   "xUnitVec3": {},
		   "yUnitVec3": {},
		   "dot": {},
		   "matr": {},
		   "xMax": {},
		   "xMin": {},
		   "yMax": {},
		   "yMin": {},
		   "v": {},
		   "json": {},
		   "charCode": {},
		   "letter": {},
		   "f": {},
		   "define": {},
		   "module": {},
		   "s": {
		    "!type": "fn()"
		   },
		   "n": {},
		   "o": {},
		   "Scalar": {
		    "!type": "fn()"
		   },
		   "Line": {
		    "!type": "fn(options: ?, options_length: number)"
		   },
		   "Point": {
		    "!type": "fn()"
		   },
		   "tmpPoint1": {},
		   "tmpPoint2": {},
		   "Polygon": {
		    "!type": "fn()"
		   },
		   "tmpLine1": {},
		   "tmpLine2": {},
		   "getIntersectionPoint": {
		    "!type": "fn()"
		   },
		   "Utils": {
		    "!type": "fn()"
		   },
		   "AABB": {
		    "!type": "fn(options: ?, options_upperBound: [?], options_lowerBound: [?])"
		   },
		   "tmp": {},
		   "Body": {
		    "!type": "fn(options_force: [?], options_position: [?], options_velocity: [?], options_allowSleep: bool, options_collisionResponse: bool, options_angle: number, options_angularForce: number, options_angularVelocity: number, options_ccdIterations: number, options_ccdSpeedThreshold: number, options_fixedRotation: number, options_gravityScale: number, options_id: number, options_mass: number, options_sleepSpeedLimit: number, options_sleepTimeLimit: number, options: ?)"
		   },
		   "Broadphase": {
		    "!type": "fn()"
		   },
		   "dist": {},
		   "Circle": {
		    "!type": "fn(options: +options, options_radius: number)"
		   },
		   "Plane": {
		    "!type": "fn(options: ?)"
		   },
		   "Shape": {
		    "!type": "fn(options: ?, options_position: +array, options_angle: number, options_collisionGroup: number, options_collisionMask: number, options_sensor: bool, options_collisionResponse: bool, options_type: ?)"
		   },
		   "Particle": {
		    "!type": "fn(options: ?)"
		   },
		   "NaiveBroadphase": {
		    "!type": "fn()"
		   },
		   "sub": {},
		   "add": {},
		   "ContactEquationPool": {
		    "!type": "fn()"
		   },
		   "FrictionEquationPool": {
		    "!type": "fn()"
		   },
		   "TupleDictionary": {
		    "!type": "fn()"
		   },
		   "Equation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, minForce: number, maxForce: number)"
		   },
		   "ContactEquation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body)"
		   },
		   "FrictionEquation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, slipForce: number)"
		   },
		   "Convex": {
		    "!type": "fn(options: ?, options_vertices: [?], options_axes: [?])"
		   },
		   "Box": {
		    "!type": "fn(options: ?, options_width: number, options_height: number)"
		   },
		   "yAxis": {},
		   "tmp1": {},
		   "tmp2": {},
		   "tmp3": {},
		   "tmp4": {},
		   "tmp5": {},
		   "tmp6": {},
		   "tmp7": {},
		   "tmp8": {},
		   "tmp9": {},
		   "tmp10": {},
		   "tmp11": {},
		   "tmp12": {},
		   "tmp13": {},
		   "tmp14": {},
		   "tmp15": {},
		   "tmp16": {},
		   "tmp17": {},
		   "tmp18": {},
		   "tmpArray": {},
		   "Narrowphase": {
		    "!type": "fn()"
		   },
		   "bodiesOverlap_shapePositionA": {},
		   "bodiesOverlap_shapePositionB": {},
		   "setConvexToCapsuleShapeMiddle": {
		    "!type": "fn()"
		   },
		   "convexCapsule_tempRect": {},
		   "convexCapsule_tempVec": {},
		   "capsuleCapsule_tempVec1": {},
		   "capsuleCapsule_tempVec2": {},
		   "capsuleCapsule_tempRect1": {},
		   "pic_worldVertex0": {},
		   "pic_worldVertex1": {},
		   "pic_r0": {},
		   "pic_r1": {},
		   "pointInConvex": {
		    "!type": "fn()"
		   },
		   "planeCapsule_tmpCircle": {},
		   "planeCapsule_tmp1": {},
		   "planeCapsule_tmp2": {},
		   "planeCapsule_tmp3": {},
		   "pcoa_tmp1": {},
		   "fsa_tmp1": {},
		   "fsa_tmp2": {},
		   "fsa_tmp3": {},
		   "fsa_tmp4": {},
		   "fsa_tmp5": {},
		   "fsa_tmp6": {},
		   "gce_tmp1": {},
		   "gce_tmp2": {},
		   "gce_tmp3": {},
		   "circleHeightfield_candidate": {},
		   "circleHeightfield_dist": {},
		   "circleHeightfield_v0": {},
		   "circleHeightfield_v1": {},
		   "circleHeightfield_minCandidate": {},
		   "circleHeightfield_worldNormal": {},
		   "circleHeightfield_minCandidateNormal": {},
		   "convexHeightfield_v0": {},
		   "convexHeightfield_v1": {},
		   "convexHeightfield_tilePos": {},
		   "convexHeightfield_tempConvexShape": {},
		   "RaycastResult": {
		    "!type": "fn()"
		   },
		   "Ray": {
		    "!type": "fn(options: ?, options_from: +array, options_to: +array, options_checkCollisionResponse: bool, options_skipBackfaces: bool, options_collisionMask: number, options_collisionGroup: number, options_mode: number, options_callback: number)"
		   },
		   "intersectBody_worldPosition": {},
		   "hitPointWorld": {},
		   "v0": {},
		   "intersect": {},
		   "distanceFromIntersectionSquared": {
		    "!type": "fn()"
		   },
		   "SAPBroadphase": {
		    "!type": "fn()"
		   },
		   "Constraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, type: number, options: ?, options_collideConnected: ?)"
		   },
		   "DistanceConstraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?, options_distance: number, options_localAnchorA: [?], options_localAnchorB: [?], options_maxForce: ?)"
		   },
		   "ri": {},
		   "rj": {},
		   "AngleLockEquation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?, options_angle: number, options_ratio: number)"
		   },
		   "GearConstraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?, options_angle: number, options_ratio: number, options_maxTorque: number)"
		   },
		   "LockConstraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?, options_localOffsetB: [?], options_localAngleB: number, options_maxForce: number)"
		   },
		   "r": {},
		   "t": {},
		   "xAxis": {},
		   "RotationalLockEquation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?, options_angle: number)"
		   },
		   "PrismaticConstraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?, options_maxForce: number, options_localAnchorA: [?], options_localAnchorB: [?], options_localAxisA: [?], options_disableRotationalLock: bool, options_upperLimit: number, options_lowerLimit: number)"
		   },
		   "worldAxisA": {},
		   "worldAnchorA": {},
		   "worldAnchorB": {},
		   "orientedAnchorA": {},
		   "orientedAnchorB": {},
		   "RotationalVelocityEquation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body)"
		   },
		   "worldPivotA": {},
		   "worldPivotB": {},
		   "g": {},
		   "RevoluteConstraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?, options_worldPivot: [?], options_localPivotA: [?], options_localPivotB: [?], options_maxForce: number)"
		   },
		   "qi": {},
		   "qj": {},
		   "iMfi": {},
		   "iMfj": {},
		   "addToWlambda_temp": {},
		   "addToWlambda_Gi": {},
		   "addToWlambda_Gj": {},
		   "addToWlambda_ri": {},
		   "addToWlambda_rj": {},
		   "addToWlambda_Mdiag": {},
		   "worldVectorA": {},
		   "worldVectorB": {},
		   "EventEmitter": {
		    "!type": "fn()"
		   },
		   "Material": {
		    "!type": "fn(id: number)"
		   },
		   "ContactMaterial": {
		    "!type": "fn(materialA: +Material, materialB: +Material, options: ?, options_friction: number, options_restitution: number, options_stiffness: number, options_relaxation: number, options_frictionStiffness: number, options_frictionRelaxation: number, options_surfaceVelocity: number)"
		   },
		   "PolyK": {},
		   "decomp": {},
		   "shapeAABB": {},
		   "Body_applyForce_r": {},
		   "Body_applyForce_forceWorld": {},
		   "Body_applyForce_pointWorld": {},
		   "Body_applyForce_pointLocal": {},
		   "Body_applyImpulse_velo": {},
		   "Body_applyImpulse_impulseWorld": {},
		   "Body_applyImpulse_pointWorld": {},
		   "Body_applyImpulse_pointLocal": {},
		   "adjustCenterOfMass_tmp1": {},
		   "adjustCenterOfMass_tmp2": {},
		   "adjustCenterOfMass_tmp3": {},
		   "adjustCenterOfMass_tmp4": {},
		   "integrate_fhMinv": {},
		   "integrate_velodt": {},
		   "result": {},
		   "ray": {},
		   "direction": {},
		   "end": {},
		   "startToEnd": {},
		   "rememberPosition": {},
		   "Spring": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?, options_stiffness: number, options_damping: number, options_localAnchorA: [?], options_localAnchorB: [?], options_worldAnchorA: [?], options_worldAnchorB: [?])"
		   },
		   "LinearSpring": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?, options_restLength: number, options_stiffness: number, options_damping: number, options_worldAnchorA: [?], options_worldAnchorB: [?], options_localAnchorA: [?], options_localAnchorB: [?])"
		   },
		   "applyForce_r": {},
		   "applyForce_r_unit": {},
		   "applyForce_u": {},
		   "applyForce_f": {},
		   "applyForce_worldAnchorA": {},
		   "applyForce_worldAnchorB": {},
		   "applyForce_ri": {},
		   "applyForce_rj": {},
		   "applyForce_tmp": {},
		   "RotationalSpring": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?, options_restAngle: number, options_stiffness: number, options_damping: number)"
		   },
		   "TopDownVehicle": {
		    "!type": "fn(chassisBody: +Body, options: ?)"
		   },
		   "WheelConstraint": {
		    "!type": "fn(vehicle: +Vehicle, options: ?, options_localForwardVector: [?], options_localPosition: [?], options_sideFriction: [?])"
		   },
		   "worldVelocity": {},
		   "relativePoint": {},
		   "tmpVec": {},
		   "p2": {},
		   "corner1": {},
		   "corner2": {},
		   "corner3": {},
		   "corner4": {},
		   "Capsule": {
		    "!type": "fn(options: ?, options_length: number, options_radius: number)"
		   },
		   "intersectCapsule_hitPointWorld": {},
		   "intersectCapsule_normal": {},
		   "intersectCapsule_l0": {},
		   "intersectCapsule_l1": {},
		   "intersectCapsule_unit_y": {},
		   "Ray_intersectSphere_intersectionPoint": {},
		   "Ray_intersectSphere_normal": {},
		   "polyk": {},
		   "tmpVec1": {},
		   "tmpVec2": {},
		   "updateCenterOfMass_centroid": {},
		   "updateCenterOfMass_centroid_times_mass": {},
		   "updateCenterOfMass_a": {},
		   "updateCenterOfMass_b": {},
		   "updateCenterOfMass_c": {},
		   "updateCenterOfMass_ac": {},
		   "updateCenterOfMass_ca": {},
		   "updateCenterOfMass_cb": {},
		   "updateCenterOfMass_n": {},
		   "intersectConvex_rayStart": {},
		   "intersectConvex_rayEnd": {},
		   "intersectConvex_normal": {},
		   "Heightfield": {
		    "!type": "fn(options: ?, options_heights: +array, options_minValue: number, options_maxValue: number, options_elementWidth: number)"
		   },
		   "points": {},
		   "intersectHeightfield_hitPointWorld": {},
		   "intersectHeightfield_worldNormal": {},
		   "intersectHeightfield_l0": {},
		   "intersectHeightfield_l1": {},
		   "intersectHeightfield_localFrom": {},
		   "intersectHeightfield_localTo": {},
		   "intersectHeightfield_unit_y": {},
		   "getLineSegmentsIntersection": {
		    "!type": "fn()"
		   },
		   "raycast_hitPoint": {},
		   "raycast_normal": {},
		   "raycast_l0": {},
		   "raycast_l1": {},
		   "raycast_unit_y": {},
		   "intersectPlane_planePointToFrom": {},
		   "intersectPlane_dir_scaled_with_t": {},
		   "intersectPlane_hitPoint": {},
		   "intersectPlane_normal": {},
		   "intersectPlane_len": {},
		   "Solver": {
		    "!type": "fn()"
		   },
		   "GSSolver": {
		    "!type": "fn(options: ?, options_iterations: number, options_tolerance: number)"
		   },
		   "setArrayZero": {
		    "!type": "fn()"
		   },
		   "mockWorld": {},
		   "Pool": {
		    "!type": "fn()"
		   },
		   "IslandNode": {
		    "!type": "fn(body: +Body)"
		   },
		   "IslandNodePool": {
		    "!type": "fn()"
		   },
		   "Island": {
		    "!type": "fn()"
		   },
		   "IslandPool": {
		    "!type": "fn()"
		   },
		   "OverlapKeeperRecord": {
		    "!type": "fn(bodyA: +Body, shapeA: +Shape, bodyB: +Body, shapeB: +Shape)"
		   },
		   "OverlapKeeperRecordPool": {
		    "!type": "fn()"
		   },
		   "OverlapKeeper": {
		    "!type": "fn()"
		   },
		   "bodyIds": {},
		   "IslandManager": {
		    "!type": "fn(options: ?)"
		   },
		   "pkg": {},
		   "World": {
		    "!type": "fn(options: ?, options_solver: +Solver, options_gravity: [?], options_broadphase: +Broadphase, options_islandSplit: bool)"
		   },
		   "step_r": {},
		   "step_runit": {},
		   "step_u": {},
		   "step_f": {},
		   "step_fhMinv": {},
		   "step_velodt": {},
		   "step_mg": {},
		   "xiw": {},
		   "xjw": {},
		   "zero": {},
		   "interpvelo": {},
		   "endOverlaps": {},
		   "hitTest_tmp1": {},
		   "hitTest_zero": {},
		   "hitTest_tmp2": {},
		   "tmpAABB": {},
		   "slice": {},
		   "target": {},
		   "boundArgs": {},
		   "bound": {
		    "!type": "fn()"
		   },
		   "canvas": {},
		   "scrollX": {},
		   "scrollY": {},
		   "treatAsDesktop": {},
		   "clientWidth": {
		    "!type": "fn()"
		   },
		   "clientHeight": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~shim": {
		   "exports": {}
		  },
		  "<anonymous>~glMatrix": {
		   "setMatrixArrayType": {
		    "!type": "fn(type: +Type)",
		    "GLMAT_ARRAY_TYPE": {}
		   },
		   "toRadian": {
		    "!type": "fn(Angle: number)"
		   }
		  },
		  "<anonymous>~vec2": {
		   "create": {
		    "!type": "fn()",
		    "out": {}
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {}
		   },
		   "clone": {
		    "!type": "fn()",
		    "out": {}
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {}
		   },
		   "fromValues": {
		    "!type": "fn()",
		    "out": {}
		   },
		   "fromValues~out": {
		    "0]": {},
		    "1]": {}
		   },
		   "copy": {
		    "!type": "fn()"
		   },
		   "set": {
		    "!type": "fn()"
		   },
		   "add": {
		    "!type": "fn()"
		   },
		   "subtract": {
		    "!type": "fn()"
		   },
		   "sub": {
		    "!type": "fn()"
		   },
		   "multiply": {
		    "!type": "fn()"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "divide": {
		    "!type": "fn()"
		   },
		   "div": {
		    "!type": "fn()"
		   },
		   "min": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> ?"
		   },
		   "max": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> ?"
		   },
		   "scale": {
		    "!type": "fn()"
		   },
		   "scaleAndAdd": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2, scale: number) -> ?"
		   },
		   "distance": {
		    "!type": "fn()",
		    "x": {},
		    "y": {}
		   },
		   "dist": {
		    "!type": "fn()"
		   },
		   "squaredDistance": {
		    "!type": "fn()",
		    "x": {},
		    "y": {}
		   },
		   "sqrDist": {
		    "!type": "fn()"
		   },
		   "length": {
		    "!type": "fn()",
		    "x": {},
		    "y": {}
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn()",
		    "x": {},
		    "y": {}
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "negate": {
		    "!type": "fn()"
		   },
		   "inverse": {
		    "!type": "fn(out: +vec2, a: +vec2) -> ?"
		   },
		   "normalize": {
		    "!type": "fn()",
		    "x": {},
		    "y": {},
		    "len": {}
		   },
		   "dot": {
		    "!type": "fn()"
		   },
		   "cross": {
		    "!type": "fn(out: +vec3, a: +vec2, b: +vec2) -> ?",
		    "z": {}
		   },
		   "lerp": {
		    "!type": "fn()",
		    "ax": {},
		    "ay": {}
		   },
		   "random": {
		    "!type": "fn(out: +vec2, scale: number) -> ?",
		    "scale": {},
		    "r": {}
		   },
		   "transformMat2": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat2) -> ?",
		    "x": {},
		    "y": {}
		   },
		   "transformMat2d": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat2d) -> ?",
		    "x": {},
		    "y": {}
		   },
		   "transformMat3": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat3) -> ?",
		    "x": {},
		    "y": {}
		   },
		   "transformMat4": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat4) -> ?",
		    "x": {},
		    "y": {}
		   },
		   "forEach": {
		    "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: +function, arg: ?) -> ?"
		   },
		   "str": {
		    "!type": "fn()"
		   },
		   "crossLength": {
		    "!type": "fn()"
		   },
		   "crossVZ": {
		    "!type": "fn()"
		   },
		   "crossZV": {
		    "!type": "fn()"
		   },
		   "rotate": {
		    "!type": "fn()",
		    "c": {},
		    "s": {},
		    "x": {},
		    "y": {}
		   },
		   "rotate90cw": {
		    "!type": "fn()",
		    "x": {},
		    "y": {}
		   },
		   "toLocalFrame": {
		    "!type": "fn()"
		   },
		   "toGlobalFrame": {
		    "!type": "fn()"
		   },
		   "vectorToLocalFrame": {
		    "!type": "fn()"
		   },
		   "vectorToGlobalFrame": {
		    "!type": "fn()"
		   },
		   "centroid": {
		    "!type": "fn()"
		   },
		   "reflect": {
		    "!type": "fn()",
		    "dot": {}
		   },
		   "getLineSegmentsIntersection": {
		    "!type": "fn()",
		    "t": {}
		   },
		   "getLineSegmentsIntersectionFraction": {
		    "!type": "fn()",
		    "s1_x": {},
		    "s1_y": {},
		    "s2_x": {},
		    "s2_y": {},
		    "s": {},
		    "t": {}
		   }
		  },
		  "<anonymous>~vec": {
		   "0]": {},
		   "1]": {},
		   "2]": {},
		   "3]": {}
		  },
		  "<anonymous>~vec3": {
		   "create": {
		    "!type": "fn() -> ?",
		    "out": {}
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "clone": {
		    "!type": "fn(a: +vec3) -> ?",
		    "out": {}
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "fromValues": {
		    "!type": "fn(x: number, y: number, z: number) -> ?",
		    "out": {}
		   },
		   "fromValues~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +vec3, a: +vec3) -> ?"
		   },
		   "set": {
		    "!type": "fn(out: +vec3, x: number, y: number, z: number) -> ?"
		   },
		   "add": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "subtract": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "sub": {
		    "!type": "fn()"
		   },
		   "multiply": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "divide": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "div": {
		    "!type": "fn()"
		   },
		   "min": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "max": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "scale": {
		    "!type": "fn(out: +vec3, a: +vec3, b: number) -> ?"
		   },
		   "scaleAndAdd": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, scale: number) -> ?"
		   },
		   "distance": {
		    "!type": "fn(a: +vec3, b: +vec3) -> ?",
		    "x": {},
		    "y": {},
		    "z": {}
		   },
		   "dist": {
		    "!type": "fn()"
		   },
		   "squaredDistance": {
		    "!type": "fn(a: +vec3, b: +vec3) -> ?",
		    "x": {},
		    "y": {},
		    "z": {}
		   },
		   "sqrDist": {
		    "!type": "fn()"
		   },
		   "length": {
		    "!type": "fn(a: +vec3) -> ?",
		    "x": {},
		    "y": {},
		    "z": {}
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn(a: +vec3) -> ?",
		    "x": {},
		    "y": {},
		    "z": {}
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "negate": {
		    "!type": "fn(out: +vec3, a: +vec3) -> ?"
		   },
		   "inverse": {
		    "!type": "fn(out: +vec3, a: +vec3) -> ?"
		   },
		   "normalize": {
		    "!type": "fn(out: +vec3, a: +vec3) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "len": {}
		   },
		   "dot": {
		    "!type": "fn(a: +vec3, b: +vec3) -> ?"
		   },
		   "cross": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?",
		    "ax": {},
		    "ay": {},
		    "az": {},
		    "bx": {},
		    "by": {},
		    "bz": {}
		   },
		   "lerp": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, t: number) -> ?",
		    "ax": {},
		    "ay": {},
		    "az": {}
		   },
		   "random": {
		    "!type": "fn(out: +vec3, scale: number) -> ?",
		    "scale": {},
		    "r": {},
		    "z": {},
		    "zScale": {}
		   },
		   "transformMat4": {
		    "!type": "fn(out: +vec3, a: +vec3, m: +mat4) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "w": {}
		   },
		   "transformMat3": {
		    "!type": "fn(out: +vec3, a: +vec3, m: +mat4) -> ?",
		    "x": {},
		    "y": {},
		    "z": {}
		   },
		   "transformQuat": {
		    "!type": "fn(out: +vec3, a: +vec3, q: +quat) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "qx": {},
		    "qy": {},
		    "qz": {},
		    "qw": {},
		    "ix": {},
		    "iy": {},
		    "iz": {},
		    "iw": {}
		   },
		   "rotateX": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> ?",
		    "p": {},
		    "r": {}
		   },
		   "rotateX~p": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "rotateX~r": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "rotateY": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> ?",
		    "p": {},
		    "r": {}
		   },
		   "rotateY~p": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "rotateY~r": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "rotateZ": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> ?",
		    "p": {},
		    "r": {}
		   },
		   "rotateZ~p": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "rotateZ~r": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "forEach": {
		    "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: +function, arg: ?) -> ?"
		   },
		   "str": {
		    "!type": "fn(vec: +vec3) -> ?"
		   }
		  },
		  "<anonymous>~vec4": {
		   "create": {
		    "!type": "fn() -> ?",
		    "out": {}
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "clone": {
		    "!type": "fn(a: +vec4) -> ?",
		    "out": {}
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "fromValues": {
		    "!type": "fn(x: number, y: number, z: number, w: number) -> ?",
		    "out": {}
		   },
		   "fromValues~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +vec4, a: +vec4) -> ?"
		   },
		   "set": {
		    "!type": "fn(out: +vec4, x: number, y: number, z: number, w: number) -> ?"
		   },
		   "add": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "subtract": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "sub": {
		    "!type": "fn()"
		   },
		   "multiply": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "divide": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "div": {
		    "!type": "fn()"
		   },
		   "min": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "max": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "scale": {
		    "!type": "fn(out: +vec4, a: +vec4, b: number) -> ?"
		   },
		   "scaleAndAdd": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4, scale: number) -> ?"
		   },
		   "distance": {
		    "!type": "fn(a: +vec4, b: +vec4) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "w": {}
		   },
		   "dist": {
		    "!type": "fn()"
		   },
		   "squaredDistance": {
		    "!type": "fn(a: +vec4, b: +vec4) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "w": {}
		   },
		   "sqrDist": {
		    "!type": "fn()"
		   },
		   "length": {
		    "!type": "fn(a: +vec4) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "w": {}
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn(a: +vec4) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "w": {}
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "negate": {
		    "!type": "fn(out: +vec4, a: +vec4) -> ?"
		   },
		   "inverse": {
		    "!type": "fn(out: +vec4, a: +vec4) -> ?"
		   },
		   "normalize": {
		    "!type": "fn(out: +vec4, a: +vec4) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "w": {},
		    "len": {}
		   },
		   "dot": {
		    "!type": "fn(a: +vec4, b: +vec4) -> ?"
		   },
		   "lerp": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4, t: number) -> ?",
		    "ax": {},
		    "ay": {},
		    "az": {},
		    "aw": {}
		   },
		   "random": {
		    "!type": "fn(out: +vec4, scale: number) -> ?",
		    "scale": {}
		   },
		   "transformMat4": {
		    "!type": "fn(out: +vec4, a: +vec4, m: +mat4) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "w": {}
		   },
		   "transformQuat": {
		    "!type": "fn(out: +vec4, a: +vec4, q: +quat) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "qx": {},
		    "qy": {},
		    "qz": {},
		    "qw": {},
		    "ix": {},
		    "iy": {},
		    "iz": {},
		    "iw": {}
		   },
		   "forEach": {
		    "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: +function, arg: ?) -> ?"
		   },
		   "str": {
		    "!type": "fn(vec: +vec4) -> ?"
		   }
		  },
		  "<anonymous>~mat2": {
		   "create": {
		    "!type": "fn() -> ?",
		    "out": {}
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "clone": {
		    "!type": "fn(a: +mat2) -> ?",
		    "out": {}
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +mat2, a: +mat2) -> ?"
		   },
		   "identity": {
		    "!type": "fn(out: +mat2) -> ?"
		   },
		   "transpose": {
		    "!type": "fn(out: +mat2, a: +mat2) -> ?",
		    "a1": {}
		   },
		   "invert": {
		    "!type": "fn(out: +mat2, a: +mat2) -> ?",
		    "a0": {},
		    "a1": {},
		    "a2": {},
		    "a3": {},
		    "det": {}
		   },
		   "adjoint": {
		    "!type": "fn(out: +mat2, a: +mat2) -> ?",
		    "a0": {}
		   },
		   "determinant": {
		    "!type": "fn(a: +mat2) -> ?"
		   },
		   "multiply": {
		    "!type": "fn(out: +mat2, a: +mat2, b: +mat2) -> ?",
		    "a0": {},
		    "a1": {},
		    "a2": {},
		    "a3": {},
		    "b0": {},
		    "b1": {},
		    "b2": {},
		    "b3": {}
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "rotate": {
		    "!type": "fn(out: +mat2, a: +mat2, rad: number) -> ?",
		    "a0": {},
		    "a1": {},
		    "a2": {},
		    "a3": {},
		    "s": {},
		    "c": {}
		   },
		   "scale": {
		    "!type": "fn(out: +mat2, a: +mat2, v: +vec2) -> ?",
		    "a0": {},
		    "a1": {},
		    "a2": {},
		    "a3": {},
		    "v0": {},
		    "v1": {}
		   },
		   "str": {
		    "!type": "fn(mat: +mat2) -> ?"
		   },
		   "frob": {
		    "!type": "fn(a: +mat2) -> ?"
		   },
		   "LDU": {
		    "!type": "fn(L: +mat2, D: +mat2, U: +mat2, a: +mat2)"
		   }
		  },
		  "<anonymous>~mat2d": {
		   "create": {
		    "!type": "fn() -> ?",
		    "out": {}
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {}
		   },
		   "clone": {
		    "!type": "fn(a: +mat2d) -> ?",
		    "out": {}
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +mat2d, a: +mat2d) -> ?"
		   },
		   "identity": {
		    "!type": "fn(out: +mat2d) -> ?"
		   },
		   "invert": {
		    "!type": "fn(out: +mat2d, a: +mat2d) -> ?",
		    "aa": {},
		    "ab": {},
		    "ac": {},
		    "ad": {},
		    "atx": {},
		    "aty": {},
		    "det": {}
		   },
		   "determinant": {
		    "!type": "fn(a: +mat2d) -> ?"
		   },
		   "multiply": {
		    "!type": "fn(out: +mat2d, a: +mat2d, b: +mat2d) -> ?",
		    "a0": {},
		    "a1": {},
		    "a2": {},
		    "a3": {},
		    "a4": {},
		    "a5": {},
		    "b0": {},
		    "b1": {},
		    "b2": {},
		    "b3": {},
		    "b4": {},
		    "b5": {}
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "rotate": {
		    "!type": "fn(out: +mat2d, a: +mat2d, rad: number) -> ?",
		    "a0": {},
		    "a1": {},
		    "a2": {},
		    "a3": {},
		    "a4": {},
		    "a5": {},
		    "s": {},
		    "c": {}
		   },
		   "scale": {
		    "!type": "fn(out: +mat2d, a: +mat2d, v: +vec2) -> ?",
		    "a0": {},
		    "a1": {},
		    "a2": {},
		    "a3": {},
		    "a4": {},
		    "a5": {},
		    "v0": {},
		    "v1": {}
		   },
		   "translate": {
		    "!type": "fn(out: +mat2d, a: +mat2d, v: +vec2) -> ?",
		    "a0": {},
		    "a1": {},
		    "a2": {},
		    "a3": {},
		    "a4": {},
		    "a5": {},
		    "v0": {},
		    "v1": {}
		   },
		   "str": {
		    "!type": "fn(a: +mat2d) -> ?"
		   },
		   "frob": {
		    "!type": "fn(a: +mat2d) -> ?"
		   }
		  },
		  "<anonymous>~mat3": {
		   "create": {
		    "!type": "fn() -> ?",
		    "out": {}
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {},
		    "6]": {},
		    "7]": {},
		    "8]": {}
		   },
		   "fromMat4": {
		    "!type": "fn(out: +mat3, a: +mat4) -> ?"
		   },
		   "clone": {
		    "!type": "fn(a: +mat3) -> ?",
		    "out": {}
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {},
		    "6]": {},
		    "7]": {},
		    "8]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +mat3, a: +mat3) -> ?"
		   },
		   "identity": {
		    "!type": "fn(out: +mat3) -> ?"
		   },
		   "transpose": {
		    "!type": "fn(out: +mat3, a: +mat3) -> ?",
		    "a01": {},
		    "a02": {},
		    "a12": {}
		   },
		   "invert": {
		    "!type": "fn(out: +mat3, a: +mat3) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "b01": {},
		    "b11": {},
		    "b21": {},
		    "det": {}
		   },
		   "adjoint": {
		    "!type": "fn(out: +mat3, a: +mat3) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a20": {},
		    "a21": {},
		    "a22": {}
		   },
		   "determinant": {
		    "!type": "fn(a: +mat3) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a20": {},
		    "a21": {},
		    "a22": {}
		   },
		   "multiply": {
		    "!type": "fn(out: +mat3, a: +mat3, b: +mat3) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "b00": {},
		    "b01": {},
		    "b02": {},
		    "b10": {},
		    "b11": {},
		    "b12": {},
		    "b20": {},
		    "b21": {},
		    "b22": {}
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "translate": {
		    "!type": "fn(out: +mat3, a: +mat3, v: +vec2) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "x": {},
		    "y": {}
		   },
		   "rotate": {
		    "!type": "fn(out: +mat3, a: +mat3, rad: number) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "s": {},
		    "c": {}
		   },
		   "scale": {
		    "!type": "fn(out: +mat3, a: +mat3, v: +vec2) -> ?",
		    "x": {},
		    "y": {}
		   },
		   "fromMat2d": {
		    "!type": "fn(out: +mat3, a: +mat2d) -> ?"
		   },
		   "fromQuat": {
		    "!type": "fn(out: +mat3, q: +quat) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "w": {},
		    "x2": {},
		    "y2": {},
		    "z2": {},
		    "xx": {},
		    "yx": {},
		    "yy": {},
		    "zx": {},
		    "zy": {},
		    "zz": {},
		    "wx": {},
		    "wy": {},
		    "wz": {}
		   },
		   "normalFromMat4": {
		    "!type": "fn(out: +mat3, a: +mat4) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a03": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a13": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "a23": {},
		    "a30": {},
		    "a31": {},
		    "a32": {},
		    "a33": {},
		    "b00": {},
		    "b01": {},
		    "b02": {},
		    "b03": {},
		    "b04": {},
		    "b05": {},
		    "b06": {},
		    "b07": {},
		    "b08": {},
		    "b09": {},
		    "b10": {},
		    "b11": {},
		    "det": {}
		   },
		   "str": {
		    "!type": "fn(mat: +mat3) -> ?"
		   },
		   "frob": {
		    "!type": "fn(a: +mat3) -> ?"
		   }
		  },
		  "<anonymous>~mat4": {
		   "create": {
		    "!type": "fn() -> ?",
		    "out": {}
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {},
		    "6]": {},
		    "7]": {},
		    "8]": {},
		    "9]": {},
		    "10]": {},
		    "11]": {},
		    "12]": {},
		    "13]": {},
		    "14]": {},
		    "15]": {}
		   },
		   "clone": {
		    "!type": "fn(a: +mat4) -> ?",
		    "out": {}
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {},
		    "6]": {},
		    "7]": {},
		    "8]": {},
		    "9]": {},
		    "10]": {},
		    "11]": {},
		    "12]": {},
		    "13]": {},
		    "14]": {},
		    "15]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +mat4, a: +mat4) -> ?"
		   },
		   "identity": {
		    "!type": "fn(out: +mat4) -> ?"
		   },
		   "transpose": {
		    "!type": "fn(out: +mat4, a: +mat4) -> ?",
		    "a01": {},
		    "a02": {},
		    "a03": {},
		    "a12": {},
		    "a13": {},
		    "a23": {}
		   },
		   "invert": {
		    "!type": "fn(out: +mat4, a: +mat4) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a03": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a13": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "a23": {},
		    "a30": {},
		    "a31": {},
		    "a32": {},
		    "a33": {},
		    "b00": {},
		    "b01": {},
		    "b02": {},
		    "b03": {},
		    "b04": {},
		    "b05": {},
		    "b06": {},
		    "b07": {},
		    "b08": {},
		    "b09": {},
		    "b10": {},
		    "b11": {},
		    "det": {}
		   },
		   "adjoint": {
		    "!type": "fn(out: +mat4, a: +mat4) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a03": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a13": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "a23": {},
		    "a30": {},
		    "a31": {},
		    "a32": {},
		    "a33": {}
		   },
		   "determinant": {
		    "!type": "fn(a: +mat4) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a03": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a13": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "a23": {},
		    "a30": {},
		    "a31": {},
		    "a32": {},
		    "a33": {},
		    "b00": {},
		    "b01": {},
		    "b02": {},
		    "b03": {},
		    "b04": {},
		    "b05": {},
		    "b06": {},
		    "b07": {},
		    "b08": {},
		    "b09": {},
		    "b10": {},
		    "b11": {}
		   },
		   "multiply": {
		    "!type": "fn(out: +mat4, a: +mat4, b: +mat4) -> ?",
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a03": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a13": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "a23": {},
		    "a30": {},
		    "a31": {},
		    "a32": {},
		    "a33": {},
		    "b0": {},
		    "b1": {},
		    "b2": {},
		    "b3": {}
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "translate": {
		    "!type": "fn(out: +mat4, a: +mat4, v: +vec3) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a03": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a13": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "a23": {}
		   },
		   "scale": {
		    "!type": "fn(out: +mat4, a: +mat4, v: +vec3) -> ?",
		    "x": {},
		    "y": {},
		    "z": {}
		   },
		   "rotate": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number, axis: +vec3) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "len": {},
		    "s": {},
		    "c": {},
		    "t": {},
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a03": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a13": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "a23": {},
		    "b00": {},
		    "b01": {},
		    "b02": {},
		    "b10": {},
		    "b11": {},
		    "b12": {},
		    "b20": {},
		    "b21": {},
		    "b22": {}
		   },
		   "rotateX": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number) -> ?",
		    "s": {},
		    "c": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a13": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "a23": {}
		   },
		   "rotateY": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number) -> ?",
		    "s": {},
		    "c": {},
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a03": {},
		    "a20": {},
		    "a21": {},
		    "a22": {},
		    "a23": {}
		   },
		   "rotateZ": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number) -> ?",
		    "s": {},
		    "c": {},
		    "a00": {},
		    "a01": {},
		    "a02": {},
		    "a03": {},
		    "a10": {},
		    "a11": {},
		    "a12": {},
		    "a13": {}
		   },
		   "fromRotationTranslation": {
		    "!type": "fn(out: +mat4, q: +quat4, v: +vec3) -> ?",
		    "x": {},
		    "y": {},
		    "z": {},
		    "w": {},
		    "x2": {},
		    "y2": {},
		    "z2": {},
		    "xx": {},
		    "xy": {},
		    "xz": {},
		    "yy": {},
		    "yz": {},
		    "zz": {},
		    "wx": {},
		    "wy": {},
		    "wz": {}
		   },
		   "fromQuat": {
		    "!type": "fn()",
		    "x": {},
		    "y": {},
		    "z": {},
		    "w": {},
		    "x2": {},
		    "y2": {},
		    "z2": {},
		    "xx": {},
		    "yx": {},
		    "yy": {},
		    "zx": {},
		    "zy": {},
		    "zz": {},
		    "wx": {},
		    "wy": {},
		    "wz": {}
		   },
		   "frustum": {
		    "!type": "fn(out: +mat4, left: number, right: number, bottom: number, top: number, near: number, far: number) -> ?",
		    "rl": {},
		    "tb": {},
		    "nf": {}
		   },
		   "perspective": {
		    "!type": "fn(out: +mat4, fovy: number, aspect: number, near: number, far: number) -> ?",
		    "f": {},
		    "nf": {}
		   },
		   "ortho": {
		    "!type": "fn(out: +mat4, left: number, right: number, bottom: number, top: number, near: number, far: number) -> ?",
		    "lr": {},
		    "bt": {},
		    "nf": {}
		   },
		   "lookAt": {
		    "!type": "fn(out: +mat4, eye: +vec3, center: +vec3, up: +vec3) -> ?",
		    "x0": {},
		    "x1": {},
		    "x2": {},
		    "y0": {},
		    "y1": {},
		    "y2": {},
		    "z0": {},
		    "z1": {},
		    "z2": {},
		    "len": {},
		    "eyex": {},
		    "eyey": {},
		    "eyez": {},
		    "upx": {},
		    "upy": {},
		    "upz": {},
		    "centerx": {},
		    "centery": {},
		    "centerz": {}
		   },
		   "str": {
		    "!type": "fn(mat: +mat4) -> ?"
		   },
		   "frob": {
		    "!type": "fn(a: +mat4) -> ?"
		   }
		  },
		  "<anonymous>~quat": {
		   "create": {
		    "!type": "fn() -> ?",
		    "out": {}
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "rotationTo": {},
		   "setAxes": {},
		   "clone": {
		    "!type": "fn(a: +quat) -> ?"
		   },
		   "fromValues": {
		    "!type": "fn(x: number, y: number, z: number, w: number) -> ?"
		   },
		   "copy": {
		    "!type": "fn(out: +quat, a: +quat) -> ?"
		   },
		   "set": {
		    "!type": "fn(out: +quat, x: number, y: number, z: number, w: number) -> ?"
		   },
		   "identity": {
		    "!type": "fn(out: +quat) -> ?"
		   },
		   "setAxisAngle": {
		    "!type": "fn(out: +quat, axis: +vec3, rad: number) -> ?",
		    "rad": {},
		    "s": {}
		   },
		   "add": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat) -> ?"
		   },
		   "multiply": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat) -> ?",
		    "ax": {},
		    "ay": {},
		    "az": {},
		    "aw": {},
		    "bx": {},
		    "by": {},
		    "bz": {},
		    "bw": {}
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "scale": {
		    "!type": "fn(out: +quat, a: +quat, b: number) -> ?"
		   },
		   "rotateX": {
		    "!type": "fn(out: +quat, a: +quat, rad: number) -> ?",
		    "rad": {},
		    "ax": {},
		    "ay": {},
		    "az": {},
		    "aw": {},
		    "bx": {},
		    "bw": {}
		   },
		   "rotateY": {
		    "!type": "fn(out: +quat, a: +quat, rad: number) -> ?",
		    "rad": {},
		    "ax": {},
		    "ay": {},
		    "az": {},
		    "aw": {},
		    "by": {},
		    "bw": {}
		   },
		   "rotateZ": {
		    "!type": "fn(out: +quat, a: +quat, rad: number) -> ?",
		    "rad": {},
		    "ax": {},
		    "ay": {},
		    "az": {},
		    "aw": {},
		    "bz": {},
		    "bw": {}
		   },
		   "calculateW": {
		    "!type": "fn(out: +quat, a: +quat) -> ?",
		    "x": {},
		    "y": {},
		    "z": {}
		   },
		   "dot": {
		    "!type": "fn(a: +quat, b: +quat) -> ?"
		   },
		   "lerp": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat, t: number) -> ?"
		   },
		   "slerp": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat, t: number) -> ?",
		    "ax": {},
		    "ay": {},
		    "az": {},
		    "aw": {},
		    "bx": {},
		    "by": {},
		    "bz": {},
		    "bw": {},
		    "omega": {},
		    "cosom": {},
		    "sinom": {},
		    "scale0": {},
		    "scale1": {}
		   },
		   "invert": {
		    "!type": "fn(out: +quat, a: +quat) -> ?",
		    "a0": {},
		    "a1": {},
		    "a2": {},
		    "a3": {},
		    "dot": {},
		    "invDot": {}
		   },
		   "conjugate": {
		    "!type": "fn(out: +quat, a: +quat) -> ?"
		   },
		   "length": {
		    "!type": "fn(a: +quat) -> ?"
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn(a: +quat) -> ?"
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "normalize": {
		    "!type": "fn(out: +quat, a: +quat) -> ?"
		   },
		   "fromMat3": {
		    "!type": "fn(out: +quat, m: +mat3) -> ?",
		    "fTrace": {},
		    "fRoot": {},
		    "i": {},
		    "j": {},
		    "k": {}
		   },
		   "str": {
		    "!type": "fn(vec: +quat) -> ?"
		   }
		  },
		  "<anonymous>~matr": {
		   "0]": {},
		   "3]": {},
		   "6]": {},
		   "1]": {},
		   "4]": {},
		   "7]": {},
		   "2]": {},
		   "5]": {},
		   "8]": {}
		  },
		  "frame": {
		   "index": {}
		  },
		  "view": {
		   "x": {},
		   "y": {},
		   "width": {},
		   "height": {}
		  },
		  "uniforms": {
		   "resolution": {
		    "value": {
		     "x": {},
		     "y": {}
		    }
		   }
		  },
		  "sprite": {
		   "x": {},
		   "y": {},
		   "scale": {
		    "x": {},
		    "y": {}
		   },
		   "width": {},
		   "height": {},
		   "visible": {},
		   "_uvs": {},
		   "tilePosition": {
		    "x": {},
		    "y": {}
		   }
		  },
		  "child": {
		   "z": {},
		   "parent": {}
		  },
		  "document": {
		   "documentElement": {
		    "style": {
		     "minHeight": {}
		    }
		   },
		   "exitPointerLock": {}
		  },
		  "get": {
		   "parentNode": {},
		   "_this": {},
		   "segments": {},
		   "index": {},
		   "x1": {},
		   "y1": {},
		   "x2": {},
		   "y2": {},
		   "width": {},
		   "height": {},
		   "rect": {},
		   "i": {},
		   "size": {},
		   "current": {},
		   "progress": {},
		   "item": {},
		   "a": {},
		   "b": {},
		   "d": {},
		   "total": {}
		  },
		  "window": {
		   "onblur": {},
		   "onfocus": {},
		   "onpagehide": {},
		   "onpageshow": {},
		   "location": {
		    "href": {}
		   },
		   "console": {
		    "log": {},
		    "assert": {
		     "!type": "fn()"
		    },
		    "warn": {}
		   },
		   "'PhaserGlobal'": {
		    "audioContext": {}
		   },
		   "URL": {},
		   "requestAnimationFrame": {},
		   "cancelAnimationFrame": {}
		  },
		  "PIXI": {
		   "scaleModes": {
		    "DEFAULT": {}
		   },
		   "Circle": {},
		   "Ellipse": {},
		   "Matrix": {},
		   "identityMatrix": {},
		   "Point": {},
		   "Polygon": {},
		   "Rectangle": {},
		   "EmptyRectangle": {},
		   "RoundedRectangle": {},
		   "TextureCache": {
		    "'__default'": {},
		    "'__missing'": {}
		   },
		   "DisplayObject": {
		    "!type": "fn()",
		    "prototype": {
		     "position": {},
		     "scale": {},
		     "transformCallback": {},
		     "transformCallbackContext": {},
		     "pivot": {},
		     "rotation": {},
		     "alpha": {},
		     "visible": {},
		     "hitArea": {},
		     "renderable": {},
		     "parent": {},
		     "stage": {},
		     "worldAlpha": {},
		     "worldTransform": {},
		     "worldPosition": {},
		     "worldScale": {},
		     "worldRotation": {},
		     "_sr": {},
		     "_cr": {},
		     "filterArea": {},
		     "_bounds": {},
		     "_currentBounds": {},
		     "_mask": {},
		     "_cacheAsBitmap": {},
		     "_cacheIsDirty": {},
		     "destroy": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "displayObjectUpdateTransform": {},
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "getLocalBounds": {
		      "!type": "fn()"
		     },
		     "setStageReference": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "generateTexture": {
		      "!type": "fn()"
		     },
		     "updateCache": {
		      "!type": "fn()"
		     },
		     "toGlobal": {
		      "!type": "fn()"
		     },
		     "toLocal": {
		      "!type": "fn()"
		     },
		     "_renderCachedSprite": {
		      "!type": "fn()"
		     },
		     "_generateCachedSprite": {
		      "!type": "fn()"
		     },
		     "_destroyCachedSprite": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     }
		    },
		    "_tempMatrix": {
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "DisplayObject#destroy": {
		    "i": {},
		    "prototype": {
		     "children": {},
		     "transformCallback": {},
		     "transformCallbackContext": {},
		     "hitArea": {},
		     "parent": {},
		     "stage": {},
		     "worldTransform": {},
		     "filterArea": {},
		     "_bounds": {},
		     "_currentBounds": {},
		     "_mask": {},
		     "renderable": {}
		    }
		   },
		   "DisplayObject#updateTransform": {
		    "p": {},
		    "pt": {},
		    "wt": {},
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {},
		    "prototype": {
		     "rotationCache": {},
		     "_sr": {},
		     "_cr": {},
		     "worldAlpha": {},
		     "worldRotation": {},
		     "_currentBounds": {}
		    }
		   },
		   "DisplayObject#updateTransform~wt": {
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {}
		   },
		   "DisplayObject#getBounds": {
		    "matrix": {}
		   },
		   "DisplayObject#setStageReference": {
		    "prototype": {
		     "stage": {}
		    }
		   },
		   "DisplayObject#generateTexture": {
		    "bounds": {},
		    "renderTexture": {}
		   },
		   "DisplayObject#toLocal": {
		    "position": {}
		   },
		   "DisplayObject#_renderCachedSprite#_cachedSprite": {
		    "worldAlpha": {}
		   },
		   "DisplayObject#_generateCachedSprite": {
		    "prototype": {
		     "_cacheAsBitmap": {},
		     "_cachedSprite": {},
		     "_filters": {}
		    },
		    "bounds": {},
		    "renderTexture": {},
		    "tempFilters": {}
		   },
		   "DisplayObject#_generateCachedSprite#_cachedSprite": {
		    "worldTransform": {},
		    "filters": {},
		    "anchor": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "DisplayObject#_destroyCachedSprite": {
		    "prototype": {
		     "_cachedSprite": {}
		    }
		   },
		   "DisplayObject#_renderWebGL": {
		    "renderSession": {}
		   },
		   "DisplayObject#_renderCanvas": {
		    "renderSession": {}
		   },
		   "DisplayObjectContainer": {
		    "!type": "fn()",
		    "prototype": {
		     "children": {},
		     "addChild": {
		      "!type": "fn()"
		     },
		     "addChildAt": {
		      "!type": "fn()"
		     },
		     "swapChildren": {
		      "!type": "fn()"
		     },
		     "getChildIndex": {
		      "!type": "fn()"
		     },
		     "setChildIndex": {
		      "!type": "fn()"
		     },
		     "getChildAt": {
		      "!type": "fn()"
		     },
		     "removeChild": {
		      "!type": "fn()"
		     },
		     "removeChildAt": {
		      "!type": "fn()"
		     },
		     "removeChildren": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "displayObjectContainerUpdateTransform": {},
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "getLocalBounds": {
		      "!type": "fn()"
		     },
		     "setStageReference": {
		      "!type": "fn()"
		     },
		     "removeStageReference": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "DisplayObjectContainer#swapChildren": {
		    "index1": {},
		    "index2": {},
		    "prototype": {
		     "children[undefined]": {}
		    }
		   },
		   "DisplayObjectContainer#getChildIndex": {
		    "index": {}
		   },
		   "DisplayObjectContainer#setChildIndex": {
		    "currentIndex": {}
		   },
		   "DisplayObjectContainer#removeChild": {
		    "index": {}
		   },
		   "DisplayObjectContainer#removeChildAt": {
		    "child": {}
		   },
		   "DisplayObjectContainer#removeChildAt~child": {
		    "parent": {}
		   },
		   "DisplayObjectContainer#removeChildren": {
		    "begin": {},
		    "end": {},
		    "range": {},
		    "removed": {},
		    "i": {},
		    "child": {}
		   },
		   "DisplayObjectContainer#removeChildren~child": {
		    "parent": {}
		   },
		   "DisplayObjectContainer#updateTransform": {
		    "i": {}
		   },
		   "DisplayObjectContainer#getBounds": {
		    "minX": {},
		    "minY": {},
		    "maxX": {},
		    "maxY": {},
		    "childBounds": {},
		    "childMaxX": {},
		    "childMaxY": {},
		    "childVisible": {},
		    "i": {},
		    "j": {},
		    "child": {},
		    "bounds": {}
		   },
		   "DisplayObjectContainer#getBounds~bounds": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {}
		   },
		   "DisplayObjectContainer#getLocalBounds": {
		    "matrixCache": {},
		    "prototype": {
		     "worldTransform": {}
		    },
		    "i": {},
		    "j": {},
		    "bounds": {}
		   },
		   "DisplayObjectContainer#setStageReference": {
		    "prototype": {
		     "stage": {}
		    },
		    "i": {}
		   },
		   "DisplayObjectContainer#removeStageReference": {
		    "i": {},
		    "prototype": {
		     "stage": {}
		    }
		   },
		   "DisplayObjectContainer#_renderWebGL": {
		    "i": {}
		   },
		   "DisplayObjectContainer#_renderCanvas": {
		    "i": {}
		   },
		   "Sprite": {
		    "!type": "fn(texture: +Texture)",
		    "prototype": {
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "renderable": {},
		     "setTexture": {
		      "!type": "fn()"
		     },
		     "onTextureUpdate": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     }
		    },
		    "fromFrame": {
		     "!type": "fn()",
		     "texture": {}
		    },
		    "fromImage": {
		     "!type": "fn()",
		     "texture": {}
		    }
		   },
		   "Sprite#setTexture": {
		    "prototype": {
		     "texture": {}
		    }
		   },
		   "Sprite#setTexture#texture": {
		    "valid": {}
		   },
		   "Sprite#onTextureUpdate#scale": {
		    "x": {},
		    "y": {}
		   },
		   "Sprite#getBounds": {
		    "width": {},
		    "height": {},
		    "w0": {},
		    "w1": {},
		    "h0": {},
		    "h1": {},
		    "worldTransform": {},
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {},
		    "maxX": {},
		    "maxY": {},
		    "minX": {},
		    "minY": {},
		    "x1": {},
		    "y1": {},
		    "x2": {},
		    "y2": {},
		    "x3": {},
		    "y3": {},
		    "x4": {},
		    "y4": {},
		    "bounds": {},
		    "prototype": {
		     "_currentBounds": {}
		    }
		   },
		   "Sprite#getBounds~bounds": {
		    "x": {},
		    "width": {},
		    "y": {},
		    "height": {}
		   },
		   "Sprite#_renderWebGL": {
		    "wt": {},
		    "spriteBatch": {},
		    "i": {}
		   },
		   "Sprite#_renderCanvas": {
		    "wt": {},
		    "resolution": {},
		    "dx": {},
		    "dy": {},
		    "cw": {},
		    "ch": {},
		    "prototype": {
		     "tintedTexture": {},
		     "cachedTint": {}
		    },
		    "cx": {},
		    "cy": {},
		    "i": {}
		   },
		   "SpriteBatch": {
		    "!type": "fn(texture: +Texture)",
		    "prototype": {
		     "textureThing": {},
		     "ready": {},
		     "initWebGL": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "SpriteBatch#initWebGL": {
		    "prototype": {
		     "fastSpriteBatch": {},
		     "ready": {}
		    }
		   },
		   "SpriteBatch#_renderCanvas": {
		    "context": {},
		    "transform": {},
		    "isRotated": {},
		    "i": {},
		    "child": {},
		    "texture": {},
		    "frame": {},
		    "childTransform": {}
		   },
		   "SpriteBatch#_renderCanvas~context": {
		    "globalAlpha": {}
		   },
		   "Stage": {
		    "!type": "fn(backgroundColor: number)",
		    "prototype": {
		     "worldTransform": {},
		     "stage": {},
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "setBackgroundColor": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Stage#updateTransform": {
		    "prototype": {
		     "worldAlpha": {}
		    },
		    "i": {}
		   },
		   "Stage#setBackgroundColor": {
		    "prototype": {
		     "backgroundColor": {},
		     "backgroundColorSplit": {},
		     "backgroundColorString": {}
		    },
		    "hex": {}
		   },
		   "Rope": {
		    "!type": "fn(texture: +Texture, points: [?])",
		    "prototype": {
		     "points": {},
		     "vertices": {},
		     "uvs": {},
		     "colors": {},
		     "indices": {},
		     "refresh": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "setTexture": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Rope#refresh": {
		    "points": {},
		    "uvs": {},
		    "lastPoint": {},
		    "indices": {},
		    "colors": {},
		    "prototype": {
		     "count": {}
		    },
		    "total": {},
		    "point": {},
		    "index": {},
		    "amount": {},
		    "i": {}
		   },
		   "Rope#refresh~uvs": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "undefined]": {}
		   },
		   "Rope#refresh~colors": {
		    "0]": {},
		    "1]": {},
		    "undefined]": {}
		   },
		   "Rope#refresh~indices": {
		    "0]": {},
		    "1]": {},
		    "undefined]": {}
		   },
		   "Rope#updateTransform": {
		    "points": {},
		    "lastPoint": {},
		    "nextPoint": {},
		    "perp": {},
		    "prototype": {
		     "count": {}
		    },
		    "vertices": {},
		    "total": {},
		    "point": {},
		    "index": {},
		    "ratio": {},
		    "perpLength": {},
		    "num": {},
		    "i": {}
		   },
		   "Rope#updateTransform~perp": {
		    "x": {},
		    "y": {}
		   },
		   "Rope#updateTransform~vertices": {
		    "undefined]": {}
		   },
		   "Rope#setTexture": {
		    "prototype": {
		     "texture": {}
		    }
		   },
		   "Strip": {
		    "!type": "fn(texture: +Texture, width: number, height: number)",
		    "prototype": {
		     "texture": {},
		     "uvs": {},
		     "vertices": {},
		     "colors": {},
		     "indices": {},
		     "dirty": {},
		     "blendMode": {},
		     "canvasPadding": {},
		     "drawMode": {},
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_initWebGL": {
		      "!type": "fn()"
		     },
		     "_renderStrip": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     },
		     "_renderCanvasTriangleStrip": {
		      "!type": "fn()"
		     },
		     "_renderCanvasTriangles": {
		      "!type": "fn()"
		     },
		     "_renderCanvasDrawTriangle": {
		      "!type": "fn()"
		     },
		     "renderStripFlat": {
		      "!type": "fn()"
		     },
		     "onTextureUpdate": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     }
		    },
		    "DrawModes": {
		     "TRIANGLE_STRIP": {},
		     "TRIANGLES": {}
		    }
		   },
		   "Strip#_initWebGL": {
		    "gl": {},
		    "prototype": {
		     "_vertexBuffer": {},
		     "_indexBuffer": {},
		     "_uvBuffer": {},
		     "_colorBuffer": {}
		    }
		   },
		   "Strip#_renderStrip": {
		    "gl": {},
		    "projection": {},
		    "offset": {},
		    "shader": {},
		    "drawMode": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Strip#_renderCanvas": {
		    "context": {},
		    "transform": {}
		   },
		   "Strip#_renderCanvasTriangleStrip": {
		    "vertices": {},
		    "uvs": {},
		    "length": {},
		    "i": {},
		    "index": {}
		   },
		   "Strip#_renderCanvasTriangles": {
		    "vertices": {},
		    "uvs": {},
		    "indices": {},
		    "length": {},
		    "i": {},
		    "index0": {},
		    "index1": {},
		    "index2": {}
		   },
		   "Strip#_renderCanvasDrawTriangle": {
		    "textureSource": {},
		    "textureWidth": {},
		    "textureHeight": {},
		    "x0": {},
		    "x1": {},
		    "x2": {},
		    "y0": {},
		    "y1": {},
		    "y2": {},
		    "u0": {},
		    "u1": {},
		    "u2": {},
		    "v0": {},
		    "v1": {},
		    "v2": {},
		    "paddingX": {},
		    "paddingY": {},
		    "centerX": {},
		    "centerY": {},
		    "normX": {},
		    "normY": {},
		    "dist": {},
		    "delta": {},
		    "deltaA": {},
		    "deltaB": {},
		    "deltaC": {},
		    "deltaD": {},
		    "deltaE": {},
		    "deltaF": {}
		   },
		   "Strip#renderStripFlat": {
		    "context": {},
		    "vertices": {},
		    "length": {},
		    "i": {},
		    "index": {},
		    "x0": {},
		    "x1": {},
		    "x2": {},
		    "y0": {},
		    "y1": {},
		    "y2": {}
		   },
		   "Strip#renderStripFlat~context": {
		    "fillStyle": {}
		   },
		   "Strip#onTextureUpdate": {
		    "prototype": {
		     "updateFrame": {}
		    }
		   },
		   "Strip#getBounds": {
		    "worldTransform": {},
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {},
		    "maxX": {},
		    "maxY": {},
		    "minX": {},
		    "minY": {},
		    "vertices": {},
		    "i": {},
		    "n": {},
		    "rawX": {},
		    "rawY": {},
		    "x": {},
		    "y": {},
		    "bounds": {},
		    "prototype": {
		     "_currentBounds": {}
		    }
		   },
		   "Strip#getBounds~bounds": {
		    "x": {},
		    "width": {},
		    "y": {},
		    "height": {}
		   },
		   "TilingSprite": {
		    "!type": "fn(texture: +Texture, width: number, height: number)",
		    "prototype": {
		     "_width": {},
		     "_height": {},
		     "tileScale": {},
		     "tileScaleOffset": {},
		     "tilePosition": {},
		     "renderable": {},
		     "tint": {},
		     "textureDebug": {},
		     "blendMode": {},
		     "canvasBuffer": {},
		     "tilingTexture": {},
		     "tilePattern": {},
		     "refreshTexture": {},
		     "frameWidth": {},
		     "frameHeight": {},
		     "setTexture": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     },
		     "onTextureUpdate": {
		      "!type": "fn()"
		     },
		     "generateTilingTexture": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "TilingSprite#setTexture": {
		    "prototype": {
		     "texture": {},
		     "refreshTexture": {},
		     "cachedTint": {}
		    }
		   },
		   "TilingSprite#_renderWebGL#tilingTexture": {
		    "needsUpdate": {}
		   },
		   "TilingSprite#_renderWebGL": {
		    "i": {}
		   },
		   "TilingSprite#_renderCanvas": {
		    "context": {},
		    "wt": {},
		    "resolution": {},
		    "prototype": {
		     "tilePattern": {}
		    },
		    "sessionBlendMode": {},
		    "tilePosition": {},
		    "tileScale": {},
		    "tx": {},
		    "ty": {},
		    "tw": {},
		    "th": {},
		    "i": {}
		   },
		   "TilingSprite#_renderCanvas~context": {
		    "globalAlpha": {},
		    "globalCompositeOperation": {},
		    "fillStyle": {}
		   },
		   "TilingSprite#_renderCanvas~tilePosition": {
		    "x": {},
		    "y": {}
		   },
		   "TilingSprite#generateTilingTexture": {
		    "texture": {},
		    "frame": {},
		    "targetWidth": {},
		    "targetHeight": {},
		    "dx": {},
		    "dy": {},
		    "prototype": {
		     "canvasBuffer": {},
		     "tilingTexture": {},
		     "refreshTexture": {}
		    },
		    "w": {},
		    "h": {}
		   },
		   "TilingSprite#generateTilingTexture#tilingTexture": {
		    "baseTexture": {
		     "width": {},
		     "height": {},
		     "_powerOf2": {}
		    },
		    "needsUpdate": {},
		    "isTiling": {}
		   },
		   "TilingSprite#generateTilingTexture#canvasBuffer": {
		    "context": {
		     "strokeStyle": {}
		    }
		   },
		   "TilingSprite#generateTilingTexture#tileScaleOffset": {
		    "x": {},
		    "y": {}
		   },
		   "TilingSprite#getBounds": {
		    "width": {},
		    "height": {},
		    "w0": {},
		    "w1": {},
		    "h0": {},
		    "h1": {},
		    "worldTransform": {},
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {},
		    "x1": {},
		    "y1": {},
		    "x2": {},
		    "y2": {},
		    "x3": {},
		    "y3": {},
		    "x4": {},
		    "y4": {},
		    "maxX": {},
		    "maxY": {},
		    "minX": {},
		    "minY": {},
		    "bounds": {},
		    "prototype": {
		     "_currentBounds": {}
		    }
		   },
		   "TilingSprite#getBounds~bounds": {
		    "x": {},
		    "width": {},
		    "y": {},
		    "height": {}
		   },
		   "TilingSprite#destroy": {
		    "prototype": {
		     "tileScale": {},
		     "tileScaleOffset": {},
		     "tilePosition": {},
		     "tilingTexture": {}
		    }
		   },
		   "AbstractFilter": {
		    "!type": "fn(fragmentSrc: [?], uniforms: ?)",
		    "prototype": {
		     "passes": {},
		     "shaders": {},
		     "dirty": {},
		     "padding": {},
		     "uniforms": {},
		     "fragmentSrc": {},
		     "syncUniforms": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "AbstractFilter#syncUniforms": {
		    "i": {},
		    "j": {}
		   },
		   "AbstractFilter#syncUniforms#shaders[undefined]": {
		    "dirty": {}
		   },
		   "GraphicsData": {
		    "!type": "fn(lineWidth: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number, fill: bool, shape: +Circle|+Rectangle|+Ellipse|+Line|+Polygon)",
		    "prototype": {
		     "lineWidth": {},
		     "lineColor": {},
		     "lineAlpha": {},
		     "_lineTint": {},
		     "fillColor": {},
		     "fillAlpha": {},
		     "_fillTint": {},
		     "fill": {},
		     "shape": {},
		     "type": {}
		    }
		   }
		  },
		  "set": {
		   "value": {},
		   "newText": {},
		   "passes": {},
		   "i": {},
		   "filterPasses": {},
		   "j": {},
		   "width": {},
		   "height": {}
		  },
		  "bounds": {
		   "width": {},
		   "height": {}
		  },
		  "destination": {
		   "dirty": {}
		  },
		  "context": {
		   "globalCompositeOperation": {},
		   "fillStyle": {},
		   "strokeStyle": {},
		   "lineWidth": {},
		   "globalAlpha": {}
		  },
		  "_data": {
		   "base": {
		    "scaleMode": {}
		   }
		  },
		  "wt": {
		   "a": {},
		   "d": {}
		  },
		  "stamp": {
		   "smoothed": {}
		  },
		  "_fontComponents": {
		   "fontFamily": {},
		   "fontSize": {},
		   "fontWeight": {},
		   "fontStyle": {},
		   "fontVariant": {}
		  },
		  "style": {
		   "fill": {},
		   "align": {},
		   "tabs": {},
		   "boundsAlignH": {},
		   "boundsAlignV": {},
		   "stroke": {},
		   "strokeThickness": {},
		   "wordWrap": {},
		   "wordWrapWidth": {},
		   "shadowOffsetX": {},
		   "shadowOffsetY": {},
		   "shadowColor": {},
		   "shadowBlur": {},
		   "shadowStroke": {},
		   "shadowFill": {}
		  },
		  "scale": {
		   "x": {},
		   "y": {}
		  },
		  "video": {
		   "currentTime": {},
		   "volume": {},
		   "playbackRate": {},
		   "loop": {}
		  },
		  "dest": {
		   "x": {},
		   "y": {},
		   "diameter": {},
		   "width": {},
		   "height": {}
		  },
		  "a": {
		   "x": {},
		   "y": {},
		   "width": {},
		   "height": {}
		  },
		  "pointer": {
		   "dirty": {}
		  },
		  "event": {
		   "'identifier'": {},
		   "identifier": {},
		   "target": {}
		  },
		  "WheelEventProxy": {
		   "prototype": {
		    "bindEvent": {
		     "!type": "fn()"
		    }
		   },
		   "_stubsGenerated": {}
		  },
		  "WheelEventProxy#bindEvent": {
		   "makeBinder": {
		    "!type": "fn()"
		   },
		   "prop": {},
		   "prototype": {
		    "originalEvent": {}
		   }
		  },
		  "type": {
		   "value": {}
		  },
		  "deltaMode": {
		   "get": {
		    "!type": "fn()"
		   }
		  },
		  "deltaY": {
		   "get": {
		    "!type": "fn()"
		   }
		  },
		  "deltaX": {
		   "get": {
		    "!type": "fn()"
		   }
		  },
		  "deltaZ": {
		   "value": {}
		  },
		  "bitmapData": {
		   "key": {}
		  },
		  "file": {
		   "loaded": {},
		   "error": {},
		   "errorMessage": {},
		   "url": {},
		   "data": {
		    "name": {},
		    "crossOrigin": {},
		    "onload": {
		     "!type": "fn()"
		    },
		    "onerror": {
		     "!type": "fn()"
		    },
		    "src": {},
		    "controls": {},
		    "autoplay": {},
		    "canplay": {},
		    "preload": {},
		    "language": {},
		    "type": {},
		    "defer": {},
		    "text": {}
		   },
		   "requestObject": {},
		   "requestUrl": {},
		   "atlasType": {}
		  },
		  "<anonymous>~letter": {
		   "texture": {}
		  },
		  "area": {
		   "width": {},
		   "height": {}
		  },
		  "blendModes": {
		   "NORMAL": {},
		   "ADD": {},
		   "MULTIPLY": {},
		   "SCREEN": {},
		   "OVERLAY": {},
		   "DARKEN": {},
		   "LIGHTEN": {},
		   "COLOR_DODGE": {},
		   "COLOR_BURN": {},
		   "HARD_LIGHT": {},
		   "SOFT_LIGHT": {},
		   "DIFFERENCE": {},
		   "EXCLUSION": {},
		   "HUE": {},
		   "SATURATION": {},
		   "COLOR": {},
		   "LUMINOSITY": {}
		  },
		  "scaleModes": {
		   "DEFAULT": {},
		   "LINEAR": {},
		   "NEAREST": {}
		  },
		  "position": {
		   "x": {},
		   "y": {}
		  },
		  "body": {
		   "overlapX": {},
		   "overlapY": {},
		   "blocked": {
		    "left": {},
		    "right": {},
		    "up": {},
		    "down": {}
		   },
		   "position": {
		    "x": {},
		    "y": {}
		   },
		   "velocity": {
		    "x": {},
		    "y": {}
		   },
		   "angularVelocity": {},
		   "rotation": {},
		   "world": {}
		  },
		  "object": {
		   "body": {
		    "debug": {}
		   }
		  },
		  "body1": {
		   "embedded": {},
		   "touching": {
		    "none": {},
		    "right": {},
		    "left": {},
		    "down": {},
		    "up": {}
		   },
		   "overlapX": {},
		   "x": {},
		   "velocity": {
		    "x": {},
		    "y": {}
		   },
		   "y": {},
		   "overlapY": {}
		  },
		  "body2": {
		   "embedded": {},
		   "touching": {
		    "none": {},
		    "left": {},
		    "right": {},
		    "up": {},
		    "down": {}
		   },
		   "overlapX": {},
		   "x": {},
		   "velocity": {
		    "x": {},
		    "y": {}
		   },
		   "y": {},
		   "overlapY": {}
		  },
		  "displayObject": {
		   "body": {
		    "velocity": {
		     "x": {},
		     "y": {}
		    }
		   }
		  },
		  "shape": {
		   "pos": {
		    "x": {},
		    "y": {}
		   },
		   "collisionMask": {},
		   "collisionGroup": {},
		   "material": {},
		   "body": {},
		   "angle": {}
		  },
		  "pos": {
		   "x": {},
		   "y": {}
		  },
		  "map": {
		   "layers[undefined]": {
		    "bodies": {
		     "length": {}
		    }
		   }
		  },
		  "data": {
		   "type": {},
		   "allowSleep": {},
		   "angle": {},
		   "angularDamping": {},
		   "angularForce": {},
		   "angularVelocity": {},
		   "damping": {},
		   "fixedRotation": {},
		   "inertia": {},
		   "mass": {},
		   "sleepSpeedLimit": {},
		   "position[0]": {},
		   "position[1]": {}
		  },
		  "draw": {
		   "angle": {},
		   "child": {},
		   "color": {},
		   "i": {},
		   "j": {},
		   "lineColor": {},
		   "lw": {},
		   "obj": {},
		   "offset": {},
		   "sprite": {},
		   "v": {},
		   "verts": {},
		   "vrot": {},
		   "_j": {},
		   "_ref1": {},
		   "l": {}
		  },
		  "drawRectangle": {
		   "lineWidth": {},
		   "color": {}
		  },
		  "drawCircle": {
		   "lineWidth": {},
		   "color": {}
		  },
		  "drawLine": {
		   "lineWidth": {},
		   "color": {}
		  },
		  "drawConvex": {
		   "colors": {},
		   "i": {},
		   "v": {},
		   "v0": {},
		   "v1": {},
		   "x": {},
		   "x0": {},
		   "x1": {},
		   "y": {},
		   "y0": {},
		   "y1": {},
		   "lineWidth": {},
		   "color": {}
		  },
		  "drawPath": {
		   "area": {},
		   "i": {},
		   "lastx": {},
		   "lasty": {},
		   "p1x": {},
		   "p1y": {},
		   "p2x": {},
		   "p2y": {},
		   "p3x": {},
		   "p3y": {},
		   "v": {},
		   "x": {},
		   "y": {},
		   "lineWidth": {},
		   "color": {}
		  },
		  "drawPlane": {
		   "max": {},
		   "xd": {},
		   "yd": {},
		   "lineWidth": {},
		   "color": {}
		  },
		  "drawCapsule": {
		   "lineWidth": {},
		   "color": {},
		   "c": {},
		   "s": {}
		  },
		  "randomPastelHex": {
		   "blue": {},
		   "green": {},
		   "mix": {},
		   "red": {}
		  },
		  "componentToHex": {
		   "hex": {}
		  },
		  "fixture": {
		   "collisionGroup": {},
		   "collisionMask": {},
		   "sensor": {},
		   "material": {}
		  },
		  "module": {
		   "exports": {}
		  },
		  "<anonymous>~f": {
		   "p2": {}
		  },
		  "<anonymous>~s": {
		   "a": {},
		   "f": {}
		  },
		  "n[undefined]": {
		   "n[undefined]": {}
		  },
		  "<anonymous>~module": {
		   "exports": {
		    "Polygon": {},
		    "Point": {},
		    "name": {},
		    "version": {},
		    "description": {},
		    "author": {},
		    "keywords": {},
		    "main": {},
		    "engines": {
		     "node": {}
		    },
		    "repository": {
		     "type": {},
		     "url": {}
		    },
		    "bugs": {
		     "url": {}
		    },
		    "licenses": {},
		    "devDependencies": {
		     "grunt": {},
		     "\"grunt-contrib-jshint\"": {},
		     "\"grunt-contrib-nodeunit\"": {},
		     "\"grunt-contrib-uglify\"": {},
		     "\"grunt-contrib-watch\"": {},
		     "\"grunt-browserify\"": {},
		     "\"grunt-contrib-concat\"": {}
		    },
		    "dependencies": {
		     "\"poly-decomp\"": {}
		    },
		    "AABB": {},
		    "AngleLockEquation": {},
		    "Body": {},
		    "Broadphase": {},
		    "Capsule": {},
		    "Circle": {},
		    "Constraint": {},
		    "ContactEquation": {},
		    "ContactEquationPool": {},
		    "ContactMaterial": {},
		    "Convex": {},
		    "DistanceConstraint": {},
		    "Equation": {},
		    "EventEmitter": {},
		    "FrictionEquation": {},
		    "FrictionEquationPool": {},
		    "GearConstraint": {},
		    "GSSolver": {},
		    "Heightfield": {},
		    "Line": {},
		    "LockConstraint": {},
		    "Material": {},
		    "Narrowphase": {},
		    "NaiveBroadphase": {},
		    "Particle": {},
		    "Plane": {},
		    "Pool": {},
		    "RevoluteConstraint": {},
		    "PrismaticConstraint": {},
		    "Ray": {},
		    "RaycastResult": {},
		    "Box": {},
		    "RotationalVelocityEquation": {},
		    "SAPBroadphase": {},
		    "Shape": {},
		    "Solver": {},
		    "Spring": {},
		    "TopDownVehicle": {},
		    "LinearSpring": {},
		    "RotationalSpring": {},
		    "Utils": {},
		    "World": {},
		    "vec2": {}
		   }
		  },
		  "<anonymous>~Line": {
		   "lineInt": {
		    "!type": "fn()",
		    "precision": {},
		    "i": {},
		    "a1": {},
		    "b1": {},
		    "c1": {},
		    "a2": {},
		    "b2": {},
		    "c2": {},
		    "det": {}
		   },
		   "lineInt~i": {
		    "0]": {},
		    "1]": {}
		   },
		   "segmentsIntersect": {
		    "!type": "fn()",
		    "dx": {},
		    "dy": {},
		    "da": {},
		    "db": {},
		    "s": {},
		    "t": {}
		   },
		   "options": {},
		   "prototype": {
		    "length": {
		     "!type": "number"
		    },
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Point": {
		   "area": {
		    "!type": "fn()"
		   },
		   "left": {
		    "!type": "fn()"
		   },
		   "leftOn": {
		    "!type": "fn()"
		   },
		   "right": {
		    "!type": "fn()"
		   },
		   "rightOn": {
		    "!type": "fn()"
		   },
		   "collinear": {
		    "!type": "fn()",
		    "ab": {},
		    "bc": {},
		    "dot": {},
		    "magA": {},
		    "magB": {},
		    "angle": {}
		   },
		   "collinear~ab": {
		    "0]": {},
		    "1]": {}
		   },
		   "collinear~bc": {
		    "0]": {},
		    "1]": {}
		   },
		   "sqdist": {
		    "!type": "fn()",
		    "dx": {},
		    "dy": {}
		   }
		  },
		  "<anonymous>~Polygon": {
		   "prototype": {
		    "vertices": {},
		    "at": {
		     "!type": "fn()"
		    },
		    "first": {
		     "!type": "fn()"
		    },
		    "last": {
		     "!type": "fn()"
		    },
		    "clear": {
		     "!type": "fn()"
		    },
		    "append": {
		     "!type": "fn()"
		    },
		    "makeCCW": {
		     "!type": "fn()"
		    },
		    "reverse": {
		     "!type": "fn()"
		    },
		    "isReflex": {
		     "!type": "fn()"
		    },
		    "canSee": {
		     "!type": "fn()"
		    },
		    "copy": {
		     "!type": "fn()"
		    },
		    "getCutEdges": {
		     "!type": "fn()"
		    },
		    "decomp": {
		     "!type": "fn()"
		    },
		    "slice": {
		     "!type": "fn()"
		    },
		    "isSimple": {
		     "!type": "fn()"
		    },
		    "quickDecomp": {
		     "!type": "fn()"
		    },
		    "removeCollinearPoints": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Polygon#at": {
		   "v": {},
		   "s": {}
		  },
		  "<anonymous>~Polygon#clear#vertices": {
		   "length": {}
		  },
		  "<anonymous>~Polygon#append": {
		   "i": {}
		  },
		  "<anonymous>~Polygon#makeCCW": {
		   "br": {},
		   "v": {},
		   "i": {}
		  },
		  "<anonymous>~Polygon#reverse": {
		   "tmp": {},
		   "i": {},
		   "N": {},
		   "prototype": {
		    "vertices": {}
		   }
		  },
		  "<anonymous>~Polygon#canSee": {
		   "p": {},
		   "dist": {},
		   "l1": {},
		   "l2": {},
		   "i": {}
		  },
		  "<anonymous>~Polygon#canSee~l1": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Polygon#canSee~l2": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Polygon#copy": {
		   "p": {},
		   "k": {}
		  },
		  "<anonymous>~Polygon#getCutEdges": {
		   "min": {},
		   "tmp1": {},
		   "tmp2": {},
		   "tmpPoly": {},
		   "nDiags": {},
		   "i": {},
		   "j": {},
		   "k": {}
		  },
		  "<anonymous>~Polygon#decomp": {
		   "edges": {}
		  },
		  "<anonymous>~Polygon#slice": {
		   "polys": {},
		   "i": {},
		   "cutEdge": {},
		   "j": {},
		   "poly": {},
		   "result": {}
		  },
		  "<anonymous>~Polygon#isSimple": {
		   "path": {},
		   "i": {},
		   "j": {}
		  },
		  "<anonymous>~getIntersectionPoint": {
		   "delta": {},
		   "a1": {},
		   "b1": {},
		   "c1": {},
		   "a2": {},
		   "b2": {},
		   "c2": {},
		   "det": {}
		  },
		  "<anonymous>~Polygon#quickDecomp": {
		   "maxlevel": {},
		   "level": {},
		   "delta": {},
		   "result": {},
		   "reflexVertices": {},
		   "steinerPoints": {},
		   "upperInt": {},
		   "lowerInt": {},
		   "p": {},
		   "upperDist": {},
		   "lowerDist": {},
		   "d": {},
		   "closestDist": {},
		   "upperIndex": {},
		   "lowerIndex": {},
		   "closestIndex": {},
		   "lowerPoly": {},
		   "upperPoly": {},
		   "poly": {},
		   "v": {},
		   "i": {},
		   "j": {}
		  },
		  "<anonymous>~Polygon#quickDecomp~p": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Polygon#removeCollinearPoints": {
		   "num": {},
		   "i": {}
		  },
		  "<anonymous>~Scalar": {
		   "eq": {
		    "!type": "fn()",
		    "precision": {}
		   }
		  },
		  "<anonymous>~AABB": {
		   "prototype": {
		    "lowerBound": {},
		    "upperBound": {},
		    "setFromPoints": {
		     "!type": "fn()"
		    },
		    "copy": {
		     "!type": "fn()"
		    },
		    "extend": {
		     "!type": "fn()"
		    },
		    "overlaps": {
		     "!type": "fn()"
		    },
		    "containsPoint": {
		     "!type": "fn()"
		    },
		    "overlapsRay": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~AABB#setFromPoints": {
		   "l": {},
		   "u": {},
		   "angle": {},
		   "cosAngle": {},
		   "sinAngle": {},
		   "i": {},
		   "p": {},
		   "x": {},
		   "y": {},
		   "j": {},
		   "prototype": {
		    "lowerBound[0]": {},
		    "lowerBound[1]": {},
		    "upperBound[0]": {},
		    "upperBound[1]": {}
		   }
		  },
		  "<anonymous>~tmp": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~AABB#setFromPoints~u": {
		   "undefined]": {}
		  },
		  "<anonymous>~AABB#setFromPoints~l": {
		   "undefined]": {}
		  },
		  "<anonymous>~AABB#extend": {
		   "i": {},
		   "l": {},
		   "prototype": {
		    "lowerBound[undefined]": {},
		    "upperBound[undefined]": {}
		   },
		   "u": {}
		  },
		  "<anonymous>~AABB#overlaps": {
		   "l1": {},
		   "u1": {},
		   "l2": {},
		   "u2": {}
		  },
		  "<anonymous>~AABB#containsPoint": {
		   "l": {},
		   "u": {}
		  },
		  "<anonymous>~AABB#overlapsRay": {
		   "t": {},
		   "dirFracX": {},
		   "dirFracY": {},
		   "t1": {},
		   "t2": {},
		   "t3": {},
		   "t4": {},
		   "tmin": {},
		   "tmax": {}
		  },
		  "<anonymous>~Broadphase": {
		   "prototype": {
		    "type": {},
		    "result": {},
		    "world": {},
		    "boundingVolumeType": {
		     "!type": "number"
		    },
		    "setWorld": {
		     "!type": "fn()"
		    },
		    "getCollisionPairs": {
		     "!type": "fn()"
		    },
		    "boundingVolumeCheck": {
		     "!type": "fn()"
		    }
		   },
		   "AABB": {
		    "!type": "number"
		   },
		   "BOUNDING_CIRCLE": {
		    "!type": "number"
		   },
		   "boundingRadiusCheck": {
		    "!type": "fn()",
		    "d2": {},
		    "r": {}
		   },
		   "aabbCheck": {
		    "!type": "fn()"
		   },
		   "canCollide": {
		    "!type": "fn()",
		    "KINEMATIC": {},
		    "STATIC": {}
		   },
		   "NAIVE": {},
		   "SAP": {}
		  },
		  "<anonymous>~Broadphase#setWorld": {
		   "prototype": {
		    "world": {}
		   }
		  },
		  "<anonymous>~Broadphase#boundingVolumeCheck": {
		   "result": {}
		  },
		  "<anonymous>~NaiveBroadphase": {
		   "prototype": {
		    "getCollisionPairs": {
		     "!type": "fn()"
		    },
		    "aabbQuery": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~NaiveBroadphase#getCollisionPairs": {
		   "bodies": {},
		   "result": {},
		   "i": {},
		   "Ncolliding": {},
		   "bi": {},
		   "j": {},
		   "bj": {}
		  },
		  "<anonymous>~NaiveBroadphase#getCollisionPairs~result": {
		   "length": {}
		  },
		  "<anonymous>~NaiveBroadphase#aabbQuery": {
		   "result": {},
		   "bodies": {},
		   "i": {},
		   "b": {}
		  },
		  "<anonymous>~Narrowphase": {
		   "prototype": {
		    "contactEquations": {},
		    "frictionEquations": {},
		    "enableFriction": {},
		    "enabledEquations": {},
		    "slipForce": {},
		    "frictionCoefficient": {},
		    "surfaceVelocity": {
		     "!type": "number"
		    },
		    "contactEquationPool": {
		     "!type": "+ContactEquationPool"
		    },
		    "frictionEquationPool": {
		     "!type": "+FrictionEquationPool"
		    },
		    "restitution": {},
		    "stiffness": {
		     "!type": "number"
		    },
		    "relaxation": {
		     "!type": "number"
		    },
		    "frictionStiffness": {},
		    "frictionRelaxation": {},
		    "enableFrictionReduction": {},
		    "collidingBodiesLastStep": {},
		    "contactSkinSize": {
		     "!type": "number"
		    },
		    "bodiesOverlap": {
		     "!type": "fn()"
		    },
		    "collidedLastStep": {
		     "!type": "fn()"
		    },
		    "reset": {
		     "!type": "fn()"
		    },
		    "createContactEquation": {
		     "!type": "fn()"
		    },
		    "createFrictionEquation": {
		     "!type": "fn()"
		    },
		    "createFrictionFromContact": {
		     "!type": "fn()"
		    },
		    "createFrictionFromAverage": {
		     "!type": "fn()"
		    },
		    "[undefined]": {},
		    "convexLine": {
		     "!type": "fn()"
		    },
		    "lineBox": {
		     "!type": "fn()"
		    },
		    "lineCapsule": {
		     "!type": "fn()"
		    },
		    "capsuleCapsule": {
		     "!type": "fn()"
		    },
		    "lineLine": {
		     "!type": "fn()"
		    },
		    "planeLine": {
		     "!type": "fn()"
		    },
		    "particleCapsule": {
		     "!type": "fn()"
		    },
		    "circleLine": {
		     "!type": "fn()"
		    },
		    "circleCapsule": {
		     "!type": "fn()"
		    },
		    "circleCircle": {
		     "!type": "fn()"
		    },
		    "particlePlane": {
		     "!type": "fn()"
		    },
		    "circleParticle": {
		     "!type": "fn()"
		    },
		    "planeCapsule": {
		     "!type": "fn()"
		    },
		    "circlePlane": {
		     "!type": "fn()"
		    },
		    "circleHeightfield": {
		     "!type": "fn()"
		    }
		   },
		   "projectConvexOntoAxis": {
		    "!type": "fn()",
		    "max": {},
		    "min": {},
		    "v": {},
		    "value": {},
		    "localAxis": {},
		    "i": {},
		    "t": {},
		    "offset": {}
		   },
		   "findSeparatingAxis": {
		    "!type": "fn()",
		    "maxDist": {},
		    "overlap": {},
		    "found": {},
		    "edge": {},
		    "worldPoint0": {},
		    "worldPoint1": {},
		    "normal": {},
		    "span1": {},
		    "span2": {},
		    "j": {},
		    "c": {},
		    "angle": {},
		    "i": {},
		    "a": {},
		    "b": {},
		    "swapped": {},
		    "dist": {}
		   },
		   "getClosestEdge": {
		    "!type": "fn()",
		    "localAxis": {},
		    "edge": {},
		    "normal": {},
		    "closestEdge": {},
		    "N": {},
		    "maxDot": {},
		    "i": {},
		    "d": {}
		   }
		  },
		  "<anonymous>~Narrowphase#bodiesOverlap": {
		   "shapePositionA": {},
		   "shapePositionB": {},
		   "k": {},
		   "Nshapesi": {},
		   "shapeA": {},
		   "l": {},
		   "Nshapesj": {},
		   "shapeB": {}
		  },
		  "<anonymous>~Narrowphase#collidedLastStep": {
		   "id1": {},
		   "id2": {}
		  },
		  "<anonymous>~Narrowphase#reset": {
		   "eqs": {},
		   "l": {},
		   "eq": {},
		   "id1": {},
		   "id2": {},
		   "ce": {},
		   "fe": {},
		   "i": {}
		  },
		  "<anonymous>~Narrowphase#reset#contactEquations": {
		   "length": {}
		  },
		  "<anonymous>~Narrowphase#reset#frictionEquations": {
		   "length": {}
		  },
		  "<anonymous>~Narrowphase#createContactEquation": {
		   "c": {}
		  },
		  "<anonymous>~Narrowphase#createContactEquation~c": {
		   "bodyA": {},
		   "bodyB": {},
		   "shapeA": {},
		   "shapeB": {},
		   "restitution": {},
		   "firstImpact": {},
		   "stiffness": {},
		   "relaxation": {},
		   "needsUpdate": {},
		   "enabled": {},
		   "offset": {}
		  },
		  "<anonymous>~Narrowphase#createFrictionEquation": {
		   "c": {}
		  },
		  "<anonymous>~Narrowphase#createFrictionEquation~c": {
		   "bodyA": {},
		   "bodyB": {},
		   "shapeA": {},
		   "shapeB": {},
		   "frictionCoefficient": {},
		   "relativeVelocity": {},
		   "enabled": {},
		   "needsUpdate": {},
		   "stiffness": {},
		   "relaxation": {},
		   "contactEquations.length": {}
		  },
		  "<anonymous>~Narrowphase#createFrictionFromContact": {
		   "eq": {}
		  },
		  "<anonymous>~Narrowphase#createFrictionFromAverage": {
		   "c": {},
		   "eq": {},
		   "bodyA": {},
		   "bodyB": {},
		   "i": {},
		   "invNumContacts": {}
		  },
		  "<anonymous>~Narrowphase#[undefined]": {
		   "Narrowphase#convexCapsule": {
		    "!type": "fn()",
		    "circlePos": {},
		    "result1": {},
		    "result2": {},
		    "r": {},
		    "result": {}
		   },
		   "Narrowphase#circleConvex": {
		    "!type": "fn()",
		    "circleRadius": {},
		    "worldVertex0": {},
		    "worldVertex1": {},
		    "worldEdge": {},
		    "worldEdgeUnit": {},
		    "worldNormal": {},
		    "centerDist": {},
		    "convexToCircle": {},
		    "orthoDist": {},
		    "projectedPoint": {},
		    "dist": {},
		    "worldVertex": {},
		    "closestEdge": {},
		    "closestEdgeDistance": {},
		    "closestEdgeOrthoDist": {},
		    "closestEdgeProjectedPoint": {},
		    "candidate": {},
		    "candidateDist": {},
		    "minCandidate": {},
		    "found": {},
		    "minCandidateDistance": {},
		    "numReported": {},
		    "verts": {},
		    "i": {},
		    "v0": {},
		    "v1": {},
		    "candidateDistance": {},
		    "c": {},
		    "localVertex": {}
		   },
		   "Narrowphase#particleConvex": {
		    "!type": "fn()",
		    "worldVertex0": {},
		    "worldVertex1": {},
		    "worldEdge": {},
		    "worldEdgeUnit": {},
		    "worldTangent": {},
		    "centerDist": {},
		    "convexToparticle": {},
		    "orthoDist": {},
		    "projectedPoint": {},
		    "dist": {},
		    "worldVertex": {},
		    "closestEdge": {},
		    "closestEdgeDistance": {},
		    "closestEdgeOrthoDist": {},
		    "closestEdgeProjectedPoint": {},
		    "r0": {},
		    "r1": {},
		    "localPoint": {},
		    "candidateDist": {},
		    "minEdgeNormal": {},
		    "minCandidateDistance": {},
		    "numReported": {},
		    "found": {},
		    "verts": {},
		    "lastCross": {},
		    "i": {},
		    "v0": {},
		    "v1": {},
		    "d": {},
		    "candidateDistance": {},
		    "c": {}
		   },
		   "Narrowphase#planeConvex": {
		    "!type": "fn()",
		    "worldVertex": {},
		    "worldNormal": {},
		    "dist": {},
		    "numReported": {},
		    "i": {},
		    "v": {},
		    "c": {},
		    "d": {}
		   },
		   "Narrowphase#[undefined]": {},
		   "Narrowphase#convexConvex": {
		    "!type": "fn()",
		    "sepAxis": {},
		    "worldPoint": {},
		    "worldPoint0": {},
		    "worldPoint1": {},
		    "worldEdge": {},
		    "projected": {},
		    "penetrationVec": {},
		    "dist": {},
		    "worldNormal": {},
		    "numContacts": {},
		    "precision": {},
		    "found": {},
		    "closestEdge1": {},
		    "closestEdge2": {},
		    "k": {},
		    "closestEdgeA": {},
		    "closestEdgeB": {},
		    "shapeA": {},
		    "shapeB": {},
		    "offsetA": {},
		    "offsetB": {},
		    "angleA": {},
		    "angleB": {},
		    "bodyA": {},
		    "bodyB": {},
		    "tmp": {},
		    "j": {},
		    "v": {},
		    "insideNumEdges": {},
		    "i": {},
		    "v0": {},
		    "v1": {},
		    "d": {},
		    "c": {}
		   },
		   "Narrowphase#convexHeightfield": {
		    "!type": "fn()",
		    "data": {},
		    "w": {},
		    "v0": {},
		    "v1": {},
		    "tilePos": {},
		    "tileConvex": {},
		    "idxA": {},
		    "idxB": {},
		    "max": {},
		    "min": {},
		    "i": {},
		    "found": {},
		    "numContacts": {},
		    "tileHeight": {}
		   },
		   "Narrowphase#convexHeightfield~tileConvex": {
		    "vertices[2][1]": {},
		    "vertices[3][1]": {}
		   }
		  },
		  "<anonymous>~Narrowphase#capsuleCapsule": {
		   "enableFrictionBefore": {},
		   "circlePosi": {},
		   "circlePosj": {},
		   "numContacts": {},
		   "i": {},
		   "j": {},
		   "prototype": {
		    "enableFriction": {}
		   },
		   "result": {},
		   "rect": {},
		   "result1": {},
		   "result2": {}
		  },
		  "<anonymous>~Narrowphase#planeLine": {
		   "worldVertex0": {},
		   "worldVertex1": {},
		   "worldVertex01": {},
		   "worldVertex11": {},
		   "worldEdge": {},
		   "worldEdgeUnit": {},
		   "dist": {},
		   "worldNormal": {},
		   "worldTangent": {},
		   "verts": {},
		   "numContacts": {},
		   "i": {},
		   "v": {},
		   "d": {},
		   "c": {}
		  },
		  "<anonymous>~Narrowphase#planeLine~verts": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Narrowphase#circleLine": {
		   "lineRadius": {},
		   "circleRadius": {},
		   "orthoDist": {},
		   "lineToCircleOrthoUnit": {},
		   "projectedPoint": {},
		   "centerDist": {},
		   "worldTangent": {},
		   "worldEdge": {},
		   "worldEdgeUnit": {},
		   "worldVertex0": {},
		   "worldVertex1": {},
		   "worldVertex01": {},
		   "worldVertex11": {},
		   "dist": {},
		   "lineToCircle": {},
		   "lineEndToLineRadius": {},
		   "verts": {},
		   "d": {},
		   "radiusSum": {},
		   "pos": {},
		   "pos0": {},
		   "pos1": {},
		   "c": {},
		   "i": {},
		   "v": {}
		  },
		  "<anonymous>~Narrowphase#circleLine~verts": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~pointInConvex": {
		   "worldVertex0": {},
		   "worldVertex1": {},
		   "r0": {},
		   "r1": {},
		   "point": {},
		   "verts": {},
		   "lastCross": {},
		   "i": {},
		   "v0": {},
		   "v1": {},
		   "cross": {}
		  },
		  "<anonymous>~Narrowphase#circleCircle": {
		   "dist": {},
		   "radiusA": {},
		   "radiusB": {},
		   "r": {},
		   "c": {}
		  },
		  "<anonymous>~Narrowphase#particlePlane": {
		   "dist": {},
		   "worldNormal": {},
		   "planeAngle": {},
		   "d": {},
		   "c": {}
		  },
		  "<anonymous>~Narrowphase#circleParticle": {
		   "dist": {},
		   "c": {}
		  },
		  "<anonymous>~Narrowphase#planeCapsule": {
		   "end1": {},
		   "end2": {},
		   "circle": {},
		   "dst": {},
		   "enableFrictionBefore": {},
		   "prototype": {
		    "enableFriction": {}
		   },
		   "numContacts1": {},
		   "numContacts2": {},
		   "numTotal": {}
		  },
		  "<anonymous>~Narrowphase#planeCapsule~circle": {
		   "radius": {}
		  },
		  "<anonymous>~Narrowphase#circlePlane": {
		   "circleBody": {},
		   "circleShape": {},
		   "circleOffset": {},
		   "planeBody": {},
		   "shapeB": {},
		   "planeOffset": {},
		   "planeAngle": {},
		   "planeToCircle": {},
		   "worldNormal": {},
		   "temp": {},
		   "d": {},
		   "contact": {}
		  },
		  "<anonymous>~Narrowphase#circleHeightfield": {
		   "data": {},
		   "radius": {},
		   "w": {},
		   "dist": {},
		   "candidate": {},
		   "minCandidate": {},
		   "minCandidateNormal": {},
		   "worldNormal": {},
		   "v0": {},
		   "v1": {},
		   "idxA": {},
		   "idxB": {},
		   "max": {},
		   "min": {},
		   "i": {},
		   "found": {},
		   "d": {},
		   "c": {}
		  },
		  "<anonymous>~Ray": {
		   "options": {},
		   "prototype": {
		    "from": {
		     "!type": "+array"
		    },
		    "to": {
		     "!type": "+array"
		    },
		    "checkCollisionResponse": {
		     "!type": "bool"
		    },
		    "skipBackfaces": {
		     "!type": "bool"
		    },
		    "collisionMask": {
		     "!type": "number"
		    },
		    "collisionGroup": {
		     "!type": "number"
		    },
		    "mode": {
		     "!type": "number"
		    },
		    "callback": {
		     "!type": "+function"
		    },
		    "direction": {
		     "!type": "+array"
		    },
		    "length": {
		     "!type": "number"
		    },
		    "update": {
		     "!type": "fn()"
		    },
		    "intersectBodies": {
		     "!type": "fn()"
		    },
		    "intersectBody": {
		     "!type": "fn()"
		    },
		    "intersectShape": {
		     "!type": "fn()"
		    },
		    "getAABB": {
		     "!type": "fn()"
		    },
		    "reportIntersection": {
		     "!type": "fn()"
		    }
		   },
		   "CLOSEST": {
		    "!type": "number"
		   },
		   "ANY": {
		    "!type": "number"
		   },
		   "ALL": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~Ray#update": {
		   "d": {},
		   "prototype": {
		    "length": {}
		   }
		  },
		  "<anonymous>~Ray#intersectBodies": {
		   "i": {},
		   "l": {},
		   "body": {},
		   "aabb": {}
		  },
		  "<anonymous>~Ray#intersectBody": {
		   "checkCollisionResponse": {},
		   "worldPosition": {},
		   "i": {},
		   "N": {},
		   "shape": {},
		   "worldAngle": {}
		  },
		  "<anonymous>~Ray#intersectShape": {
		   "from": {},
		   "distance": {},
		   "prototype": {
		    "_currentBody": {},
		    "_currentShape": {}
		   }
		  },
		  "<anonymous>~Ray#getAABB": {
		   "to": {},
		   "from": {}
		  },
		  "<anonymous>~Ray#reportIntersection": {
		   "from": {},
		   "to": {},
		   "shape": {},
		   "body": {}
		  },
		  "<anonymous>~distanceFromIntersectionSquared": {
		   "dot": {}
		  },
		  "<anonymous>~RaycastResult": {
		   "prototype": {
		    "normal": {
		     "!type": "+array"
		    },
		    "shape": {
		     "!type": "+Shape"
		    },
		    "body": {
		     "!type": "+Body"
		    },
		    "faceIndex": {
		     "!type": "number"
		    },
		    "fraction": {
		     "!type": "number"
		    },
		    "isStopped": {
		     "!type": "bool"
		    },
		    "reset": {
		     "!type": "fn()"
		    },
		    "getHitDistance": {
		     "!type": "fn()"
		    },
		    "hasHit": {
		     "!type": "fn()"
		    },
		    "getHitPoint": {
		     "!type": "fn()"
		    },
		    "stop": {
		     "!type": "fn()"
		    },
		    "shouldStop": {
		     "!type": "fn()"
		    },
		    "set": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~RaycastResult#reset": {
		   "prototype": {
		    "shape": {},
		    "body": {},
		    "faceIndex": {},
		    "fraction": {},
		    "isStopped": {}
		   }
		  },
		  "<anonymous>~RaycastResult#stop": {
		   "prototype": {
		    "isStopped": {}
		   }
		  },
		  "<anonymous>~RaycastResult#set": {
		   "prototype": {
		    "shape": {},
		    "body": {},
		    "fraction": {},
		    "faceIndex": {}
		   }
		  },
		  "<anonymous>~SAPBroadphase": {
		   "prototype": {
		    "axisList": {},
		    "axisIndex": {},
		    "_addBodyHandler": {
		     "!type": "fn()"
		    },
		    "_removeBodyHandler": {
		     "!type": "fn()"
		    },
		    "setWorld": {
		     "!type": "fn()"
		    },
		    "sortList": {
		     "!type": "fn()"
		    },
		    "getCollisionPairs": {
		     "!type": "fn()"
		    },
		    "aabbQuery": {
		     "!type": "fn()"
		    }
		   },
		   "that": {},
		   "sortAxisList": {
		    "!type": "fn()",
		    "axisIndex": {},
		    "i": {},
		    "l": {},
		    "v": {},
		    "j": {}
		   }
		  },
		  "<anonymous>~SAPBroadphase#_removeBodyHandler": {
		   "idx": {}
		  },
		  "<anonymous>~SAPBroadphase#setWorld#axisList": {
		   "length": {}
		  },
		  "<anonymous>~SAPBroadphase#setWorld": {
		   "prototype": {
		    "world": {}
		   }
		  },
		  "<anonymous>~SAPBroadphase#sortList": {
		   "bodies": {},
		   "axisIndex": {}
		  },
		  "<anonymous>~SAPBroadphase#getCollisionPairs": {
		   "bodies": {},
		   "result": {},
		   "axisIndex": {},
		   "l": {},
		   "b": {},
		   "i": {},
		   "N": {},
		   "bi": {},
		   "j": {},
		   "bj": {},
		   "overlaps": {}
		  },
		  "<anonymous>~SAPBroadphase#getCollisionPairs~result": {
		   "length": {}
		  },
		  "<anonymous>~SAPBroadphase#aabbQuery": {
		   "result": {},
		   "axisIndex": {},
		   "axis": {},
		   "axisList": {},
		   "lower": {},
		   "upper": {},
		   "i": {},
		   "b": {}
		  },
		  "<anonymous>~Constraint": {
		   "prototype": {
		    "type": {
		     "!type": "number"
		    },
		    "equations": {},
		    "bodyA": {},
		    "bodyB": {},
		    "collideConnected": {},
		    "update": {
		     "!type": "fn()"
		    },
		    "setStiffness": {
		     "!type": "fn()"
		    },
		    "setRelaxation": {
		     "!type": "fn()"
		    }
		   },
		   "options": {},
		   "DISTANCE": {
		    "!type": "number"
		   },
		   "GEAR": {
		    "!type": "number"
		   },
		   "LOCK": {
		    "!type": "number"
		   },
		   "PRISMATIC": {
		    "!type": "number"
		   },
		   "REVOLUTE": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~Constraint#setStiffness": {
		   "eqs": {},
		   "i": {},
		   "eq": {}
		  },
		  "<anonymous>~Constraint#setStiffness~eq": {
		   "stiffness": {},
		   "needsUpdate": {}
		  },
		  "<anonymous>~Constraint#setRelaxation": {
		   "eqs": {},
		   "i": {},
		   "eq": {}
		  },
		  "<anonymous>~Constraint#setRelaxation~eq": {
		   "relaxation": {},
		   "needsUpdate": {}
		  },
		  "<anonymous>~DistanceConstraint": {
		   "options": {},
		   "prototype": {
		    "localAnchorA": {},
		    "localAnchorB": {},
		    "distance": {},
		    "equations": {},
		    "maxForce": {
		     "!type": "number"
		    },
		    "upperLimitEnabled": {
		     "!type": "bool"
		    },
		    "upperLimit": {
		     "!type": "number"
		    },
		    "lowerLimitEnabled": {
		     "!type": "bool"
		    },
		    "lowerLimit": {
		     "!type": "number"
		    },
		    "position": {
		     "!type": "number"
		    },
		    "update": {
		     "!type": "fn()"
		    },
		    "setMaxForce": {
		     "!type": "fn()"
		    },
		    "getMaxForce": {
		     "!type": "fn()"
		    }
		   },
		   "localAnchorA": {},
		   "localAnchorB": {},
		   "worldAnchorA": {},
		   "worldAnchorB": {},
		   "r": {},
		   "maxForce": {},
		   "normal": {},
		   "ri": {},
		   "rj": {},
		   "that": {}
		  },
		  "<anonymous>~DistanceConstraint~normal": {
		   "computeGq": {
		    "!type": "fn()",
		    "bodyA": {},
		    "bodyB": {},
		    "xi": {},
		    "xj": {}
		   }
		  },
		  "<anonymous>~DistanceConstraint#update": {
		   "normal": {},
		   "bodyA": {},
		   "bodyB": {},
		   "distance": {},
		   "xi": {},
		   "xj": {},
		   "normalEquation": {},
		   "G": {},
		   "prototype": {
		    "position": {},
		    "distance": {}
		   },
		   "violating": {},
		   "rixn": {},
		   "rjxn": {}
		  },
		  "<anonymous>~DistanceConstraint#update~normalEquation": {
		   "maxForce": {},
		   "minForce": {},
		   "enabled": {}
		  },
		  "<anonymous>~DistanceConstraint#update~G": {
		   "0]": {},
		   "1]": {},
		   "2]": {},
		   "3]": {},
		   "4]": {},
		   "5]": {}
		  },
		  "<anonymous>~DistanceConstraint#setMaxForce": {
		   "normal": {}
		  },
		  "<anonymous>~DistanceConstraint#setMaxForce~normal": {
		   "minForce": {},
		   "maxForce": {}
		  },
		  "<anonymous>~DistanceConstraint#getMaxForce": {
		   "normal": {}
		  },
		  "<anonymous>~GearConstraint": {
		   "options": {},
		   "prototype": {
		    "ratio": {},
		    "angle": {},
		    "equations": {},
		    "update": {
		     "!type": "fn()"
		    },
		    "setMaxTorque": {
		     "!type": "fn()"
		    },
		    "getMaxTorque": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~GearConstraint~options": {
		   "angle": {},
		   "ratio": {}
		  },
		  "<anonymous>~GearConstraint#update": {
		   "eq": {}
		  },
		  "<anonymous>~GearConstraint#update~eq": {
		   "angle": {}
		  },
		  "<anonymous>~LockConstraint": {
		   "options": {},
		   "maxForce": {},
		   "localAngleB": {},
		   "x": {},
		   "y": {},
		   "rot": {},
		   "l": {},
		   "g": {},
		   "that": {},
		   "r": {},
		   "t": {},
		   "prototype": {
		    "localOffsetB": {
		     "!type": "[?]"
		    },
		    "localAngleB": {
		     "!type": "number"
		    },
		    "setMaxForce": {
		     "!type": "fn()"
		    },
		    "getMaxForce": {
		     "!type": "fn()"
		    },
		    "update": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~LockConstraint~x": {
		   "computeGq": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~LockConstraint~y": {
		   "computeGq": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~LockConstraint~rot": {
		   "computeGq": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~LockConstraint#setMaxForce": {
		   "eqs": {},
		   "i": {}
		  },
		  "<anonymous>~LockConstraint#setMaxForce~eqs": {
		   "undefined].maxForce": {},
		   "undefined].minForce": {}
		  },
		  "<anonymous>~LockConstraint#update": {
		   "x": {},
		   "y": {},
		   "rot": {},
		   "bodyA": {},
		   "bodyB": {}
		  },
		  "<anonymous>~LockConstraint#update~x": {
		   "G[0]": {},
		   "G[1]": {},
		   "G[2]": {},
		   "G[3]": {}
		  },
		  "<anonymous>~LockConstraint#update~y": {
		   "G[0]": {},
		   "G[1]": {},
		   "G[2]": {},
		   "G[4]": {}
		  },
		  "<anonymous>~LockConstraint#update~rot": {
		   "G[0]": {},
		   "G[1]": {},
		   "G[3]": {},
		   "G[4]": {},
		   "G[5]": {}
		  },
		  "<anonymous>~PrismaticConstraint": {
		   "options": {},
		   "localAnchorA": {},
		   "localAxisA": {},
		   "localAnchorB": {},
		   "prototype": {
		    "localAnchorA": {},
		    "localAnchorB": {},
		    "localAxisA": {},
		    "maxForce": {},
		    "position": {},
		    "velocity": {},
		    "lowerLimitEnabled": {},
		    "upperLimitEnabled": {},
		    "lowerLimit": {},
		    "upperLimit": {},
		    "upperLimitEquation": {},
		    "lowerLimitEquation": {},
		    "motorEquation": {},
		    "motorEnabled": {},
		    "motorSpeed": {},
		    "update": {
		     "!type": "fn()"
		    },
		    "enableMotor": {
		     "!type": "fn()"
		    },
		    "disableMotor": {
		     "!type": "fn()"
		    },
		    "setLimits": {
		     "!type": "fn()"
		    }
		   },
		   "maxForce": {},
		   "trans": {},
		   "ri": {},
		   "rj": {},
		   "gg": {},
		   "t": {},
		   "rot": {},
		   "that": {},
		   "motorEquation": {},
		   "old": {}
		  },
		  "<anonymous>~PrismaticConstraint~trans": {
		   "computeGq": {
		    "!type": "fn()"
		   },
		   "updateJacobian": {
		    "!type": "fn()",
		    "G": {},
		    "xi": {},
		    "xj": {}
		   },
		   "updateJacobian~G": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {}
		   }
		  },
		  "<anonymous>~PrismaticConstraint#upperLimitEquation": {
		   "minForce": {},
		   "maxForce": {}
		  },
		  "<anonymous>~PrismaticConstraint#lowerLimitEquation": {
		   "minForce": {},
		   "maxForce": {}
		  },
		  "<anonymous>~PrismaticConstraint~motorEquation": {
		   "computeGq": {
		    "!type": "fn()"
		   },
		   "computeGW": {
		    "!type": "fn()",
		    "G": {},
		    "bi": {},
		    "bj": {},
		    "vi": {},
		    "vj": {},
		    "wi": {},
		    "wj": {}
		   }
		  },
		  "<anonymous>~PrismaticConstraint#update": {
		   "eqs": {},
		   "trans": {},
		   "upperLimit": {},
		   "lowerLimit": {},
		   "upperLimitEquation": {},
		   "lowerLimitEquation": {},
		   "bodyA": {},
		   "bodyB": {},
		   "localAxisA": {},
		   "localAnchorA": {},
		   "localAnchorB": {},
		   "relPosition": {},
		   "prototype": {
		    "position": {}
		   },
		   "G": {},
		   "idx": {}
		  },
		  "<anonymous>~PrismaticConstraint#update~G": {
		   "0]": {},
		   "1]": {},
		   "2]": {},
		   "3]": {},
		   "4]": {},
		   "5]": {}
		  },
		  "<anonymous>~PrismaticConstraint#enableMotor": {
		   "prototype": {
		    "motorEnabled": {}
		   }
		  },
		  "<anonymous>~PrismaticConstraint#disableMotor": {
		   "i": {},
		   "prototype": {
		    "motorEnabled": {}
		   }
		  },
		  "<anonymous>~PrismaticConstraint#setLimits": {
		   "prototype": {
		    "lowerLimit": {},
		    "lowerLimitEnabled": {},
		    "upperLimit": {},
		    "upperLimitEnabled": {}
		   }
		  },
		  "<anonymous>~RevoluteConstraint": {
		   "options": {},
		   "maxForce": {},
		   "prototype": {
		    "maxForce": {},
		    "pivotA": {
		     "!type": "[?]"
		    },
		    "pivotB": {
		     "!type": "[?]"
		    },
		    "equations": {},
		    "motorEquation": {},
		    "motorEnabled": {
		     "!type": "bool"
		    },
		    "angle": {},
		    "lowerLimitEnabled": {},
		    "upperLimitEnabled": {},
		    "lowerLimit": {},
		    "upperLimit": {},
		    "upperLimitEquation": {},
		    "lowerLimitEquation": {},
		    "setLimits": {
		     "!type": "fn()"
		    },
		    "update": {
		     "!type": "fn()"
		    },
		    "enableMotor": {
		     "!type": "fn()"
		    },
		    "disableMotor": {
		     "!type": "fn()"
		    },
		    "motorIsEnabled": {
		     "!type": "fn()"
		    },
		    "setMotorSpeed": {
		     "!type": "fn()"
		    },
		    "getMotorSpeed": {
		     "!type": "fn()"
		    }
		   },
		   "eqs": {},
		   "x": {},
		   "y": {},
		   "that": {}
		  },
		  "<anonymous>~RevoluteConstraint~x": {
		   "computeGq": {
		    "!type": "fn()"
		   },
		   "minForce": {},
		   "maxForce": {}
		  },
		  "<anonymous>~RevoluteConstraint~y": {
		   "computeGq": {
		    "!type": "fn()"
		   },
		   "minForce": {},
		   "maxForce": {}
		  },
		  "<anonymous>~RevoluteConstraint#upperLimitEquation": {
		   "minForce": {}
		  },
		  "<anonymous>~RevoluteConstraint#lowerLimitEquation": {
		   "maxForce": {}
		  },
		  "<anonymous>~RevoluteConstraint#setLimits": {
		   "prototype": {
		    "lowerLimit": {},
		    "lowerLimitEnabled": {},
		    "upperLimit": {},
		    "upperLimitEnabled": {}
		   }
		  },
		  "<anonymous>~RevoluteConstraint#update": {
		   "bodyA": {},
		   "bodyB": {},
		   "pivotA": {},
		   "pivotB": {},
		   "eqs": {},
		   "normal": {},
		   "tangent": {},
		   "x": {},
		   "y": {},
		   "upperLimit": {},
		   "lowerLimit": {},
		   "upperLimitEquation": {},
		   "lowerLimitEquation": {},
		   "relAngle": {},
		   "prototype": {
		    "angle": {}
		   },
		   "idx": {}
		  },
		  "<anonymous>~RevoluteConstraint#update~upperLimitEquation": {
		   "angle": {}
		  },
		  "<anonymous>~RevoluteConstraint#update~lowerLimitEquation": {
		   "angle": {}
		  },
		  "<anonymous>~RevoluteConstraint#update~x": {
		   "G[0]": {},
		   "G[1]": {},
		   "G[2]": {},
		   "G[3]": {},
		   "G[4]": {},
		   "G[5]": {}
		  },
		  "<anonymous>~RevoluteConstraint#update~y": {
		   "G[0]": {},
		   "G[1]": {},
		   "G[2]": {},
		   "G[3]": {},
		   "G[4]": {},
		   "G[5]": {}
		  },
		  "<anonymous>~RevoluteConstraint#enableMotor": {
		   "prototype": {
		    "motorEnabled": {}
		   }
		  },
		  "<anonymous>~RevoluteConstraint#disableMotor": {
		   "i": {},
		   "prototype": {
		    "motorEnabled": {}
		   }
		  },
		  "<anonymous>~RevoluteConstraint#setMotorSpeed": {
		   "i": {}
		  },
		  "<anonymous>~RevoluteConstraint#setMotorSpeed#equations[undefined]": {
		   "relativeVelocity": {}
		  },
		  "<anonymous>~AngleLockEquation": {
		   "options": {},
		   "prototype": {
		    "angle": {},
		    "ratio": {
		     "!type": "number"
		    },
		    "computeGq": {
		     "!type": "fn()"
		    },
		    "setRatio": {
		     "!type": "fn()"
		    },
		    "setMaxTorque": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~AngleLockEquation#setRatio": {
		   "G": {},
		   "prototype": {
		    "ratio": {}
		   }
		  },
		  "<anonymous>~AngleLockEquation#setRatio~G": {
		   "2]": {},
		   "5]": {}
		  },
		  "<anonymous>~AngleLockEquation#setMaxTorque": {
		   "prototype": {
		    "maxForce": {},
		    "minForce": {}
		   }
		  },
		  "<anonymous>~ContactEquation": {
		   "prototype": {
		    "contactPointA": {},
		    "penetrationVec": {},
		    "contactPointB": {},
		    "normalA": {},
		    "restitution": {},
		    "firstImpact": {},
		    "shapeA": {},
		    "shapeB": {},
		    "computeB": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~ContactEquation#computeB": {
		   "bi": {},
		   "bj": {},
		   "ri": {},
		   "rj": {},
		   "xi": {},
		   "xj": {},
		   "penetrationVec": {},
		   "n": {},
		   "G": {},
		   "rixn": {},
		   "rjxn": {},
		   "GW": {},
		   "Gq": {},
		   "GiMf": {},
		   "B": {}
		  },
		  "<anonymous>~ContactEquation#computeB~G": {
		   "0]": {},
		   "1]": {},
		   "2]": {},
		   "3]": {},
		   "4]": {},
		   "5]": {}
		  },
		  "<anonymous>~Equation": {
		   "prototype": {
		    "minForce": {},
		    "maxForce": {},
		    "bodyA": {},
		    "bodyB": {},
		    "stiffness": {},
		    "relaxation": {},
		    "G": {},
		    "G[undefined]": {},
		    "offset": {},
		    "a": {},
		    "b": {},
		    "epsilon": {},
		    "timeStep": {},
		    "needsUpdate": {
		     "!type": "bool"
		    },
		    "multiplier": {},
		    "relativeVelocity": {
		     "!type": "number"
		    },
		    "enabled": {
		     "!type": "bool"
		    },
		    "update": {
		     "!type": "fn()"
		    },
		    "gmult": {
		     "!type": "fn()"
		    },
		    "computeB": {
		     "!type": "fn()"
		    },
		    "computeGq": {
		     "!type": "fn()"
		    },
		    "computeGW": {
		     "!type": "fn()"
		    },
		    "computeGWlambda": {
		     "!type": "fn()"
		    },
		    "computeGiMf": {
		     "!type": "fn()"
		    },
		    "computeGiMGt": {
		     "!type": "fn()"
		    },
		    "addToWlambda": {
		     "!type": "fn()"
		    },
		    "computeInvC": {
		     "!type": "fn()"
		    }
		   },
		   "i": {},
		   "DEFAULT_STIFFNESS": {
		    "!type": "number"
		   },
		   "DEFAULT_RELAXATION": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~Equation#update": {
		   "k": {},
		   "d": {},
		   "h": {},
		   "prototype": {
		    "a": {},
		    "b": {},
		    "epsilon": {},
		    "needsUpdate": {}
		   }
		  },
		  "<anonymous>~Equation#computeB": {
		   "GW": {},
		   "Gq": {},
		   "GiMf": {}
		  },
		  "<anonymous>~Equation#computeGq": {
		   "G": {},
		   "bi": {},
		   "bj": {},
		   "xi": {},
		   "xj": {},
		   "ai": {},
		   "aj": {}
		  },
		  "<anonymous>~Equation#computeGW": {
		   "G": {},
		   "bi": {},
		   "bj": {},
		   "vi": {},
		   "vj": {},
		   "wi": {},
		   "wj": {}
		  },
		  "<anonymous>~Equation#computeGWlambda": {
		   "G": {},
		   "bi": {},
		   "bj": {},
		   "vi": {},
		   "vj": {},
		   "wi": {},
		   "wj": {}
		  },
		  "<anonymous>~Equation#computeGiMf": {
		   "bi": {},
		   "bj": {},
		   "fi": {},
		   "ti": {},
		   "fj": {},
		   "tj": {},
		   "invMassi": {},
		   "invMassj": {},
		   "invIi": {},
		   "invIj": {},
		   "G": {}
		  },
		  "<anonymous>~Equation#computeGiMGt": {
		   "bi": {},
		   "bj": {},
		   "invMassi": {},
		   "invMassj": {},
		   "invIi": {},
		   "invIj": {},
		   "G": {}
		  },
		  "<anonymous>~Equation#addToWlambda": {
		   "bi": {},
		   "bj": {},
		   "temp": {},
		   "Gi": {},
		   "Gj": {},
		   "ri": {},
		   "rj": {},
		   "invMassi": {},
		   "invMassj": {},
		   "invIi": {},
		   "invIj": {},
		   "Mdiag": {},
		   "G": {}
		  },
		  "<anonymous>~Equation#addToWlambda~Gi": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Equation#addToWlambda~Gj": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Equation#addToWlambda~bi": {
		   "wlambda": {}
		  },
		  "<anonymous>~Equation#addToWlambda~bj": {
		   "wlambda": {}
		  },
		  "<anonymous>~FrictionEquation": {
		   "prototype": {
		    "contactPointA": {},
		    "contactPointB": {},
		    "t": {},
		    "contactEquations": {},
		    "shapeA": {},
		    "shapeB": {},
		    "frictionCoefficient": {},
		    "setSlipForce": {
		     "!type": "fn()"
		    },
		    "getSlipForce": {
		     "!type": "fn()"
		    },
		    "computeB": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~FrictionEquation#setSlipForce": {
		   "prototype": {
		    "maxForce": {},
		    "minForce": {}
		   }
		  },
		  "<anonymous>~FrictionEquation#computeB": {
		   "bi": {},
		   "bj": {},
		   "ri": {},
		   "rj": {},
		   "t": {},
		   "G": {},
		   "GW": {},
		   "GiMf": {},
		   "B": {}
		  },
		  "<anonymous>~FrictionEquation#computeB~G": {
		   "0]": {},
		   "1]": {},
		   "2]": {},
		   "3]": {},
		   "4]": {},
		   "5]": {}
		  },
		  "<anonymous>~RotationalLockEquation": {
		   "options": {},
		   "prototype": {
		    "angle": {
		     "!type": "number"
		    },
		    "computeGq": {
		     "!type": "fn()"
		    }
		   },
		   "G": {}
		  },
		  "<anonymous>~RotationalLockEquation~G": {
		   "2]": {},
		   "5]": {}
		  },
		  "<anonymous>~RotationalVelocityEquation": {
		   "prototype": {
		    "relativeVelocity": {},
		    "ratio": {},
		    "computeB": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~RotationalVelocityEquation#computeB": {
		   "G": {},
		   "GiMf": {},
		   "GW": {},
		   "B": {}
		  },
		  "<anonymous>~RotationalVelocityEquation#computeB~G": {
		   "2]": {},
		   "5]": {}
		  },
		  "<anonymous>~EventEmitter": {
		   "prototype": {
		    "on": {
		     "!type": "fn()"
		    },
		    "has": {
		     "!type": "fn()"
		    },
		    "off": {
		     "!type": "fn()"
		    },
		    "emit": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "listener": {
		   "context": {}
		  },
		  "<anonymous>~EventEmitter#on": {
		   "prototype": {
		    "_listeners": {}
		   },
		   "listeners": {}
		  },
		  "<anonymous>~EventEmitter#on~listeners": {
		   "undefined]": {}
		  },
		  "<anonymous>~EventEmitter#has": {
		   "listeners": {}
		  },
		  "<anonymous>~EventEmitter#off": {
		   "listeners": {},
		   "index": {}
		  },
		  "<anonymous>~EventEmitter#emit": {
		   "listeners": {},
		   "listenerArray": {},
		   "i": {},
		   "l": {},
		   "listener": {}
		  },
		  "<anonymous>~ContactMaterial": {
		   "options": {},
		   "prototype": {
		    "id": {},
		    "materialA": {},
		    "materialB": {},
		    "friction": {},
		    "restitution": {},
		    "stiffness": {},
		    "relaxation": {},
		    "frictionStiffness": {},
		    "frictionRelaxation": {},
		    "surfaceVelocity": {
		     "!type": "number"
		    },
		    "contactSkinSize": {}
		   },
		   "idCounter": {}
		  },
		  "<anonymous>~Material": {
		   "prototype": {
		    "id": {}
		   },
		   "idCounter": {}
		  },
		  "<anonymous>~PolyK": {
		   "GetArea": {
		    "!type": "fn()",
		    "l": {},
		    "sum": {},
		    "i": {}
		   },
		   "Triangulate": {
		    "!type": "fn()",
		    "n": {},
		    "tgs": {},
		    "avl": {},
		    "i": {},
		    "al": {},
		    "i0": {},
		    "i1": {},
		    "i2": {},
		    "ax": {},
		    "ay": {},
		    "bx": {},
		    "by": {},
		    "cx": {},
		    "cy": {},
		    "earFound": {},
		    "j": {},
		    "vi": {}
		   },
		   "_PointInTriangle": {
		    "!type": "fn()",
		    "v0x": {},
		    "v0y": {},
		    "v1x": {},
		    "v1y": {},
		    "v2x": {},
		    "v2y": {},
		    "dot00": {},
		    "dot01": {},
		    "dot02": {},
		    "dot11": {},
		    "dot12": {},
		    "invDenom": {},
		    "u": {},
		    "v": {}
		   },
		   "_convex": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~Body": {
		   "options": {},
		   "prototype": {
		    "id": {},
		    "world": {},
		    "shapes": {},
		    "mass": {},
		    "invMass": {},
		    "inertia": {},
		    "invInertia": {},
		    "invMassSolve": {},
		    "invInertiaSolve": {},
		    "fixedRotation": {},
		    "fixedX": {
		     "!type": "bool"
		    },
		    "fixedY": {
		     "!type": "bool"
		    },
		    "massMultiplier": {
		     "!type": "+array"
		    },
		    "position": {},
		    "interpolatedPosition": {},
		    "interpolatedAngle": {},
		    "previousPosition": {},
		    "previousAngle": {},
		    "velocity": {},
		    "vlambda": {},
		    "wlambda": {},
		    "angle": {},
		    "angularVelocity": {},
		    "force": {},
		    "angularForce": {},
		    "damping": {},
		    "angularDamping": {},
		    "type": {},
		    "boundingRadius": {},
		    "aabb": {},
		    "aabbNeedsUpdate": {},
		    "allowSleep": {},
		    "wantsToSleep": {},
		    "sleepState": {},
		    "sleepSpeedLimit": {},
		    "sleepTimeLimit": {},
		    "gravityScale": {
		     "!type": "number"
		    },
		    "collisionResponse": {
		     "!type": "bool"
		    },
		    "idleTime": {
		     "!type": "number"
		    },
		    "timeLastSleepy": {
		     "!type": "number"
		    },
		    "ccdSpeedThreshold": {
		     "!type": "number"
		    },
		    "ccdIterations": {
		     "!type": "number"
		    },
		    "concavePath": {},
		    "_wakeUpAfterNarrowphase": {},
		    "updateSolveMassProperties": {
		     "!type": "fn()"
		    },
		    "setDensity": {
		     "!type": "fn()"
		    },
		    "getArea": {
		     "!type": "fn()"
		    },
		    "getAABB": {
		     "!type": "fn()"
		    },
		    "updateAABB": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "addShape": {
		     "!type": "fn()"
		    },
		    "removeShape": {
		     "!type": "fn()"
		    },
		    "updateMassProperties": {
		     "!type": "fn()"
		    },
		    "applyForce": {
		     "!type": "fn()"
		    },
		    "applyForceLocal": {
		     "!type": "fn()"
		    },
		    "applyImpulse": {
		     "!type": "fn()"
		    },
		    "applyImpulseLocal": {
		     "!type": "fn()"
		    },
		    "toLocalFrame": {
		     "!type": "fn()"
		    },
		    "toWorldFrame": {
		     "!type": "fn()"
		    },
		    "vectorToLocalFrame": {
		     "!type": "fn()"
		    },
		    "vectorToWorldFrame": {
		     "!type": "fn()"
		    },
		    "fromPolygon": {
		     "!type": "fn()"
		    },
		    "adjustCenterOfMass": {
		     "!type": "fn()"
		    },
		    "setZeroForce": {
		     "!type": "fn()"
		    },
		    "resetConstraintVelocity": {
		     "!type": "fn()"
		    },
		    "addConstraintVelocity": {
		     "!type": "fn()"
		    },
		    "applyDamping": {
		     "!type": "fn()"
		    },
		    "wakeUp": {
		     "!type": "fn()"
		    },
		    "sleep": {
		     "!type": "fn()"
		    },
		    "sleepTick": {
		     "!type": "fn()"
		    },
		    "overlaps": {
		     "!type": "fn()"
		    },
		    "integrate": {
		     "!type": "fn()"
		    },
		    "integrateToTimeOfImpact": {
		     "!type": "fn()"
		    },
		    "getVelocityAtPoint": {
		     "!type": "fn()"
		    }
		   },
		   "_idCounter": {},
		   "sleepyEvent": {
		    "type": {}
		   },
		   "sleepEvent": {
		    "type": {}
		   },
		   "wakeUpEvent": {
		    "type": {}
		   },
		   "DYNAMIC": {},
		   "STATIC": {},
		   "KINEMATIC": {},
		   "AWAKE": {},
		   "SLEEPY": {},
		   "SLEEPING": {}
		  },
		  "<anonymous>~Body#updateSolveMassProperties": {
		   "prototype": {
		    "invMassSolve": {},
		    "invInertiaSolve": {}
		   }
		  },
		  "<anonymous>~Body#setDensity": {
		   "totalArea": {},
		   "prototype": {
		    "mass": {}
		   }
		  },
		  "<anonymous>~Body#getArea": {
		   "totalArea": {},
		   "i": {}
		  },
		  "<anonymous>~Body#updateAABB": {
		   "shapes": {},
		   "N": {},
		   "offset": {},
		   "bodyAngle": {},
		   "i": {},
		   "shape": {},
		   "angle": {},
		   "prototype": {
		    "aabbNeedsUpdate": {}
		   }
		  },
		  "<anonymous>~Body#updateBoundingRadius": {
		   "shapes": {},
		   "N": {},
		   "radius": {},
		   "i": {},
		   "shape": {},
		   "offset": {},
		   "r": {},
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Body#addShape": {
		   "prototype": {
		    "aabbNeedsUpdate": {}
		   }
		  },
		  "<anonymous>~Body#removeShape": {
		   "idx": {},
		   "prototype": {
		    "aabbNeedsUpdate": {}
		   }
		  },
		  "<anonymous>~Body#updateMassProperties": {
		   "prototype": {
		    "mass": {},
		    "invMass": {},
		    "inertia": {},
		    "invInertia": {}
		   },
		   "shapes": {},
		   "N": {},
		   "m": {},
		   "I": {},
		   "i": {},
		   "shape": {},
		   "r2": {},
		   "Icm": {}
		  },
		  "<anonymous>~Body#applyForce": {
		   "rotForce": {},
		   "prototype": {
		    "angularForce": {}
		   }
		  },
		  "<anonymous>~Body#applyForceLocal": {
		   "localPoint": {},
		   "worldForce": {},
		   "worldPoint": {}
		  },
		  "<anonymous>~Body#applyImpulse": {
		   "velo": {},
		   "rotVelo": {},
		   "prototype": {
		    "angularVelocity": {}
		   }
		  },
		  "<anonymous>~Body#applyImpulseLocal": {
		   "localPoint": {},
		   "worldImpulse": {},
		   "worldPoint": {}
		  },
		  "<anonymous>~Body#fromPolygon": {
		   "options": {},
		   "i": {},
		   "p": {},
		   "prototype": {
		    "concavePath": {},
		    "concavePath[undefined]": {},
		    "aabbNeedsUpdate": {}
		   },
		   "v": {},
		   "convexes": {},
		   "cm": {},
		   "c": {},
		   "j": {}
		  },
		  "<anonymous>~Body#fromPolygon~p": {
		   "vertices": {}
		  },
		  "<anonymous>~Body#adjustCenterOfMass": {
		   "offset_times_area": {},
		   "sum": {},
		   "cm": {},
		   "totalArea": {},
		   "i": {},
		   "s": {}
		  },
		  "<anonymous>~Body#setZeroForce": {
		   "prototype": {
		    "angularForce": {}
		   }
		  },
		  "<anonymous>~Body#resetConstraintVelocity": {
		   "b": {},
		   "vlambda": {}
		  },
		  "<anonymous>~Body#resetConstraintVelocity~b": {
		   "wlambda": {}
		  },
		  "<anonymous>~Body#addConstraintVelocity": {
		   "b": {},
		   "v": {}
		  },
		  "<anonymous>~Body#addConstraintVelocity~b": {
		   "angularVelocity": {}
		  },
		  "<anonymous>~Body#applyDamping": {
		   "v": {},
		   "prototype": {
		    "angularVelocity": {}
		   }
		  },
		  "<anonymous>~Body#wakeUp": {
		   "s": {},
		   "prototype": {
		    "sleepState": {},
		    "idleTime": {}
		   }
		  },
		  "<anonymous>~Body#sleep": {
		   "prototype": {
		    "sleepState": {},
		    "angularVelocity": {},
		    "angularForce": {}
		   }
		  },
		  "<anonymous>~Body#sleepTick": {
		   "prototype": {
		    "wantsToSleep": {},
		    "idleTime": {},
		    "sleepState": {}
		   },
		   "sleepState": {},
		   "speedSquared": {},
		   "speedLimitSquared": {}
		  },
		  "<anonymous>~Body#integrate": {
		   "minv": {},
		   "f": {},
		   "pos": {},
		   "velo": {},
		   "prototype": {
		    "previousAngle": {},
		    "angularVelocity": {},
		    "angle": {},
		    "aabbNeedsUpdate": {}
		   }
		  },
		  "<anonymous>~Body#integrateToTimeOfImpact": {
		   "startToEndAngle": {},
		   "len": {},
		   "timeOfImpact": {},
		   "hit": {},
		   "that": {},
		   "rememberAngle": {},
		   "iter": {},
		   "tmin": {},
		   "tmid": {},
		   "tmax": {},
		   "prototype": {
		    "angle": {}
		   },
		   "overlaps": {}
		  },
		  "<anonymous>~ray": {
		   "callback": {
		    "!type": "fn()",
		    "hit": {},
		    "timeOfImpact": {}
		   }
		  },
		  "<anonymous>~LinearSpring": {
		   "options": {},
		   "prototype": {
		    "localAnchorA": {},
		    "localAnchorB": {},
		    "restLength": {},
		    "setWorldAnchorA": {
		     "!type": "fn()"
		    },
		    "setWorldAnchorB": {
		     "!type": "fn()"
		    },
		    "getWorldAnchorA": {
		     "!type": "fn()"
		    },
		    "getWorldAnchorB": {
		     "!type": "fn()"
		    },
		    "applyForce": {
		     "!type": "fn()"
		    }
		   },
		   "worldAnchorA": {},
		   "worldAnchorB": {},
		   "worldDistance": {}
		  },
		  "<anonymous>~LinearSpring#applyForce": {
		   "k": {},
		   "d": {},
		   "l": {},
		   "bodyA": {},
		   "bodyB": {},
		   "r": {},
		   "r_unit": {},
		   "u": {},
		   "f": {},
		   "tmp": {},
		   "worldAnchorA": {},
		   "worldAnchorB": {},
		   "ri": {},
		   "rj": {},
		   "rlen": {},
		   "ri_x_f": {},
		   "rj_x_f": {}
		  },
		  "<anonymous>~LinearSpring#applyForce~bodyA": {
		   "angularForce": {}
		  },
		  "<anonymous>~LinearSpring#applyForce~bodyB": {
		   "angularForce": {}
		  },
		  "<anonymous>~RotationalSpring": {
		   "options": {},
		   "prototype": {
		    "restAngle": {},
		    "applyForce": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~RotationalSpring#applyForce": {
		   "k": {},
		   "d": {},
		   "l": {},
		   "bodyA": {},
		   "bodyB": {},
		   "x": {},
		   "u": {},
		   "torque": {}
		  },
		  "<anonymous>~RotationalSpring#applyForce~bodyA": {
		   "angularForce": {}
		  },
		  "<anonymous>~RotationalSpring#applyForce~bodyB": {
		   "angularForce": {}
		  },
		  "<anonymous>~Spring": {
		   "options": {},
		   "prototype": {
		    "stiffness": {},
		    "damping": {},
		    "bodyA": {},
		    "bodyB": {},
		    "applyForce": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~TopDownVehicle": {
		   "options": {},
		   "prototype": {
		    "chassisBody": {
		     "!type": "+Body"
		    },
		    "wheels": {
		     "!type": "[?]"
		    },
		    "groundBody": {},
		    "world": {},
		    "preStepCallback": {
		     "!type": "fn()"
		    },
		    "addToWorld": {
		     "!type": "fn()"
		    },
		    "removeFromWorld": {
		     "!type": "fn()"
		    },
		    "addWheel": {
		     "!type": "fn()"
		    },
		    "update": {
		     "!type": "fn()"
		    }
		   },
		   "that": {}
		  },
		  "<anonymous>~TopDownVehicle#addToWorld": {
		   "prototype": {
		    "world": {}
		   },
		   "i": {},
		   "wheel": {}
		  },
		  "<anonymous>~TopDownVehicle#removeFromWorld": {
		   "world": {},
		   "i": {},
		   "wheel": {},
		   "prototype": {
		    "world": {}
		   }
		  },
		  "<anonymous>~TopDownVehicle#addWheel": {
		   "wheel": {}
		  },
		  "<anonymous>~TopDownVehicle#update": {
		   "i": {}
		  },
		  "<anonymous>~WheelConstraint": {
		   "options": {},
		   "prototype": {
		    "vehicle": {},
		    "forwardEquation": {},
		    "sideEquation": {},
		    "steerValue": {
		     "!type": "number"
		    },
		    "engineForce": {
		     "!type": "number"
		    },
		    "localForwardVector": {
		     "!type": "[?]"
		    },
		    "localPosition": {
		     "!type": "[?]"
		    },
		    "setBrakeForce": {
		     "!type": "fn()"
		    },
		    "setSideFriction": {
		     "!type": "fn()"
		    },
		    "getSpeed": {
		     "!type": "fn()"
		    },
		    "update": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Box": {
		   "options": {},
		   "width": {},
		   "prototype": {
		    "width": {},
		    "height": {},
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    }
		   },
		   "height": {},
		   "verts": {},
		   "axes": {}
		  },
		  "<anonymous>~Box~options": {
		   "width": {},
		   "height": {},
		   "vertices": {},
		   "axes": {},
		   "type": {}
		  },
		  "<anonymous>~Box#computeMomentOfInertia": {
		   "w": {},
		   "h": {}
		  },
		  "<anonymous>~Box#updateBoundingRadius": {
		   "w": {},
		   "h": {},
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Box#updateArea": {
		   "prototype": {
		    "area": {}
		   }
		  },
		  "<anonymous>~Capsule": {
		   "options": {},
		   "prototype": {
		    "length": {
		     "!type": "number"
		    },
		    "radius": {
		     "!type": "number"
		    },
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Capsule~options": {
		   "length": {},
		   "radius": {},
		   "type": {}
		  },
		  "<anonymous>~Capsule#computeMomentOfInertia": {
		   "r": {},
		   "w": {},
		   "h": {}
		  },
		  "<anonymous>~Capsule#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Capsule#updateArea": {
		   "prototype": {
		    "area": {}
		   }
		  },
		  "<anonymous>~Capsule#computeAABB": {
		   "radius": {}
		  },
		  "<anonymous>~Capsule#raycast": {
		   "from": {},
		   "to": {},
		   "direction": {},
		   "hitPointWorld": {},
		   "normal": {},
		   "l0": {},
		   "l1": {},
		   "halfLen": {},
		   "i": {},
		   "y": {},
		   "delta": {},
		   "diagonalLengthSquared": {},
		   "a": {},
		   "b": {},
		   "c": {},
		   "sqrtDelta": {},
		   "inv2a": {},
		   "d1": {},
		   "d2": {}
		  },
		  "<anonymous>~Circle": {
		   "options": {},
		   "prototype": {
		    "radius": {},
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Circle~options": {
		   "radius": {},
		   "type": {}
		  },
		  "<anonymous>~Circle#computeMomentOfInertia": {
		   "r": {}
		  },
		  "<anonymous>~Circle#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Circle#updateArea": {
		   "prototype": {
		    "area": {}
		   }
		  },
		  "<anonymous>~Circle#computeAABB": {
		   "r": {}
		  },
		  "<anonymous>~Circle#raycast": {
		   "from": {},
		   "to": {},
		   "r": {},
		   "a": {},
		   "b": {},
		   "c": {},
		   "delta": {},
		   "intersectionPoint": {},
		   "normal": {},
		   "sqrtDelta": {},
		   "inv2a": {},
		   "d1": {},
		   "d2": {}
		  },
		  "<anonymous>~Convex": {
		   "options": {},
		   "prototype": {
		    "vertices": {},
		    "axes": {},
		    "centerOfMass": {},
		    "triangles": {},
		    "boundingRadius": {},
		    "projectOntoLocalAxis": {
		     "!type": "fn()"
		    },
		    "projectOntoWorldAxis": {
		     "!type": "fn()"
		    },
		    "updateTriangles": {
		     "!type": "fn()"
		    },
		    "updateCenterOfMass": {
		     "!type": "fn()"
		    },
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   },
		   "vertices": {},
		   "i": {},
		   "v": {},
		   "axis": {},
		   "worldPoint0": {},
		   "worldPoint1": {},
		   "normal": {},
		   "triangleArea": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~Convex~options": {
		   "vertices": {},
		   "axes": {},
		   "type": {}
		  },
		  "<anonymous>~Convex#projectOntoLocalAxis": {
		   "max": {},
		   "min": {},
		   "v": {},
		   "value": {},
		   "localAxis": {},
		   "i": {},
		   "t": {}
		  },
		  "<anonymous>~Convex#projectOntoWorldAxis": {
		   "worldAxis": {},
		   "offset": {}
		  },
		  "<anonymous>~Convex#updateTriangles#triangles": {
		   "length": {}
		  },
		  "<anonymous>~Convex#updateTriangles": {
		   "polykVerts": {},
		   "i": {},
		   "v": {},
		   "triangles": {},
		   "id1": {},
		   "id2": {},
		   "id3": {}
		  },
		  "<anonymous>~Convex#updateCenterOfMass": {
		   "triangles": {},
		   "verts": {},
		   "cm": {},
		   "centroid": {},
		   "n": {},
		   "a": {},
		   "b": {},
		   "c": {},
		   "ac": {},
		   "ca": {},
		   "cb": {},
		   "centroid_times_mass": {},
		   "totalArea": {},
		   "i": {},
		   "t": {},
		   "m": {}
		  },
		  "<anonymous>~Convex#computeMomentOfInertia": {
		   "denom": {},
		   "numer": {},
		   "N": {},
		   "j": {},
		   "i": {},
		   "p0": {},
		   "p1": {},
		   "a": {},
		   "b": {}
		  },
		  "<anonymous>~Convex#updateBoundingRadius": {
		   "verts": {},
		   "r2": {},
		   "i": {},
		   "l2": {},
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Convex#updateArea": {
		   "prototype": {
		    "area": {}
		   },
		   "triangles": {},
		   "verts": {},
		   "i": {},
		   "t": {},
		   "a": {},
		   "b": {},
		   "c": {},
		   "m": {}
		  },
		  "<anonymous>~Convex#raycast": {
		   "rayStart": {},
		   "rayEnd": {},
		   "normal": {},
		   "vertices": {},
		   "n": {},
		   "i": {},
		   "q1": {},
		   "q2": {},
		   "delta": {}
		  },
		  "<anonymous>~Heightfield": {
		   "options": {},
		   "key": {},
		   "prototype": {
		    "heights": {
		     "!type": "+array"
		    },
		    "maxValue": {
		     "!type": "number"
		    },
		    "minValue": {
		     "!type": "number"
		    },
		    "elementWidth": {
		     "!type": "number"
		    },
		    "updateMaxMinValues": {
		     "!type": "fn()"
		    },
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "getLineSegment": {
		     "!type": "fn()"
		    },
		    "getSegmentIndex": {
		     "!type": "fn()"
		    },
		    "getClampedSegmentIndex": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Heightfield~options": {
		   "heights": {},
		   "undefined]": {},
		   "type": {}
		  },
		  "<anonymous>~Heightfield#updateMaxMinValues": {
		   "data": {},
		   "maxValue": {},
		   "minValue": {},
		   "i": {},
		   "v": {},
		   "prototype": {
		    "maxValue": {},
		    "minValue": {}
		   }
		  },
		  "<anonymous>~Heightfield#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Heightfield#updateArea": {
		   "data": {},
		   "area": {},
		   "i": {},
		   "prototype": {
		    "area": {}
		   }
		  },
		  "<anonymous>~Heightfield#getLineSegment": {
		   "data": {},
		   "width": {}
		  },
		  "<anonymous>~Heightfield#getClampedSegmentIndex": {
		   "i": {}
		  },
		  "<anonymous>~getLineSegmentsIntersection": {
		   "s1_x": {},
		   "s1_y": {},
		   "s2_x": {},
		   "s2_y": {},
		   "s": {},
		   "t": {},
		   "intX": {},
		   "intY": {}
		  },
		  "<anonymous>~Heightfield#raycast": {
		   "from": {},
		   "to": {},
		   "direction": {},
		   "hitPointWorld": {},
		   "worldNormal": {},
		   "l0": {},
		   "l1": {},
		   "localFrom": {},
		   "localTo": {},
		   "i0": {},
		   "i1": {},
		   "tmp": {},
		   "i": {},
		   "t": {}
		  },
		  "<anonymous>~Line~options": {
		   "length": {},
		   "type": {}
		  },
		  "<anonymous>~Line#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Line#computeAABB": {
		   "l2": {}
		  },
		  "<anonymous>~Line#raycast": {
		   "from": {},
		   "to": {},
		   "l0": {},
		   "l1": {},
		   "halfLen": {},
		   "fraction": {},
		   "normal": {}
		  },
		  "<anonymous>~Particle": {
		   "options": {},
		   "prototype": {
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Particle~options": {
		   "type": {}
		  },
		  "<anonymous>~Particle#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Plane": {
		   "options": {},
		   "prototype": {
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Plane~options": {
		   "type": {}
		  },
		  "<anonymous>~Plane#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Plane#computeAABB": {
		   "a": {},
		   "set": {},
		   "max": {},
		   "lowerBound": {},
		   "upperBound": {}
		  },
		  "<anonymous>~Plane#updateArea": {
		   "prototype": {
		    "area": {}
		   }
		  },
		  "<anonymous>~Plane#raycast": {
		   "from": {},
		   "to": {},
		   "direction": {},
		   "planePointToFrom": {},
		   "dir_scaled_with_t": {},
		   "hitPoint": {},
		   "normal": {},
		   "len": {},
		   "planeToFrom": {},
		   "planeToTo": {},
		   "n_dot_dir": {},
		   "t": {}
		  },
		  "<anonymous>~Shape": {
		   "options": {},
		   "prototype": {
		    "body": {
		     "!type": "+Body"
		    },
		    "position": {
		     "!type": "[?]"
		    },
		    "angle": {
		     "!type": "number"
		    },
		    "type": {
		     "!type": "number"
		    },
		    "id": {},
		    "boundingRadius": {},
		    "collisionGroup": {},
		    "collisionResponse": {
		     "!type": "bool"
		    },
		    "collisionMask": {},
		    "material": {},
		    "area": {},
		    "sensor": {
		     "!type": "bool"
		    },
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   },
		   "idCounter": {},
		   "CIRCLE": {
		    "!type": "number"
		   },
		   "PARTICLE": {
		    "!type": "number"
		   },
		   "PLANE": {
		    "!type": "number"
		   },
		   "CONVEX": {
		    "!type": "number"
		   },
		   "LINE": {
		    "!type": "number"
		   },
		   "BOX": {
		    "!type": "number"
		   },
		   "CAPSULE": {
		    "!type": "number"
		   },
		   "HEIGHTFIELD": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~GSSolver": {
		   "options": {},
		   "prototype": {
		    "iterations": {},
		    "tolerance": {},
		    "arrayStep": {},
		    "lambda": {},
		    "Bs": {},
		    "invCs": {},
		    "useZeroRHS": {},
		    "frictionIterations": {},
		    "usedIterations": {
		     "!type": "number"
		    },
		    "solve": {
		     "!type": "fn()"
		    }
		   },
		   "updateMultipliers": {
		    "!type": "fn()",
		    "l": {}
		   },
		   "iterateEquation": {
		    "!type": "fn()",
		    "B": {},
		    "invC": {},
		    "lambdaj": {},
		    "GWlambda": {},
		    "maxForce": {},
		    "minForce": {},
		    "deltalambda": {},
		    "lambdaj_plus_deltalambda": {}
		   }
		  },
		  "<anonymous>~setArrayZero": {
		   "l": {}
		  },
		  "<anonymous>~GSSolver#solve": {
		   "iter": {},
		   "maxIter": {},
		   "maxFrictionIter": {},
		   "equations": {},
		   "Neq": {},
		   "tolSquared": {},
		   "bodies": {},
		   "Nbodies": {},
		   "add": {},
		   "set": {},
		   "useZeroRHS": {},
		   "lambda": {},
		   "prototype": {
		    "usedIterations": {},
		    "lambda": {},
		    "Bs": {},
		    "invCs": {}
		   },
		   "i": {},
		   "b": {},
		   "invCs": {},
		   "Bs": {},
		   "c": {},
		   "q": {},
		   "B": {},
		   "deltalambdaTot": {},
		   "j": {},
		   "deltalambda": {},
		   "eq": {},
		   "f": {},
		   "k": {}
		  },
		  "<anonymous>~GSSolver#solve~c": {
		   "timeStep": {}
		  },
		  "<anonymous>~GSSolver#solve~Bs": {
		   "undefined]": {}
		  },
		  "<anonymous>~GSSolver#solve~invCs": {
		   "undefined]": {}
		  },
		  "<anonymous>~GSSolver#solve~eq": {
		   "maxForce": {},
		   "minForce": {}
		  },
		  "equations[undefined]": {
		   "multiplier": {}
		  },
		  "<anonymous>~Solver": {
		   "options": {},
		   "prototype": {
		    "type": {},
		    "equations": {},
		    "equationSortFunction": {},
		    "solve": {
		     "!type": "fn()"
		    },
		    "solveIsland": {
		     "!type": "fn()"
		    },
		    "sortEquations": {
		     "!type": "fn()"
		    },
		    "addEquation": {
		     "!type": "fn()"
		    },
		    "addEquations": {
		     "!type": "fn()"
		    },
		    "removeEquation": {
		     "!type": "fn()"
		    },
		    "removeAllEquations": {
		     "!type": "fn()"
		    }
		   },
		   "GS": {},
		   "ISLAND": {}
		  },
		  "<anonymous>~mockWorld": {
		   "bodies": {},
		   "bodies.length": {}
		  },
		  "<anonymous>~Solver#addEquations": {
		   "i": {},
		   "N": {},
		   "eq": {}
		  },
		  "<anonymous>~Solver#removeEquation": {
		   "i": {}
		  },
		  "<anonymous>~Solver#removeAllEquations#equations": {
		   "length": {}
		  },
		  "<anonymous>~ContactEquationPool": {
		   "prototype": {
		    "create": {
		     "!type": "fn()"
		    },
		    "destroy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "equation": {
		   "bodyA": {},
		   "bodyB": {}
		  },
		  "<anonymous>~FrictionEquationPool": {
		   "prototype": {
		    "create": {
		     "!type": "fn()"
		    },
		    "destroy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~IslandNodePool": {
		   "prototype": {
		    "create": {
		     "!type": "fn()"
		    },
		    "destroy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~IslandPool": {
		   "prototype": {
		    "create": {
		     "!type": "fn()"
		    },
		    "destroy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~OverlapKeeper": {
		   "prototype": {
		    "overlappingShapesLastState": {},
		    "overlappingShapesCurrentState": {},
		    "recordPool": {},
		    "tmpDict": {},
		    "tmpArray1": {},
		    "tick": {
		     "!type": "fn()"
		    },
		    "setOverlapping": {
		     "!type": "fn()"
		    },
		    "getNewOverlaps": {
		     "!type": "fn()"
		    },
		    "getEndOverlaps": {
		     "!type": "fn()"
		    },
		    "bodiesAreOverlapping": {
		     "!type": "fn()"
		    },
		    "getDiff": {
		     "!type": "fn()"
		    },
		    "isNewOverlap": {
		     "!type": "fn()"
		    },
		    "getNewBodyOverlaps": {
		     "!type": "fn()"
		    },
		    "getEndBodyOverlaps": {
		     "!type": "fn()"
		    },
		    "getBodyDiff": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~OverlapKeeper#tick": {
		   "last": {},
		   "current": {},
		   "l": {},
		   "key": {},
		   "lastObject": {},
		   "currentObject": {}
		  },
		  "<anonymous>~OverlapKeeper#setOverlapping": {
		   "last": {},
		   "current": {},
		   "data": {}
		  },
		  "<anonymous>~OverlapKeeper#bodiesAreOverlapping": {
		   "current": {},
		   "l": {},
		   "key": {},
		   "data": {}
		  },
		  "<anonymous>~OverlapKeeper#getDiff": {
		   "result": {},
		   "last": {},
		   "current": {},
		   "l": {},
		   "key": {},
		   "data": {},
		   "lastData": {}
		  },
		  "<anonymous>~OverlapKeeper#getDiff~result": {
		   "length": {}
		  },
		  "<anonymous>~OverlapKeeper#isNewOverlap": {
		   "idA": {},
		   "idB": {},
		   "last": {},
		   "current": {}
		  },
		  "<anonymous>~OverlapKeeper#getNewBodyOverlaps#tmpArray1": {
		   "length": {}
		  },
		  "<anonymous>~OverlapKeeper#getNewBodyOverlaps": {
		   "overlaps": {}
		  },
		  "<anonymous>~OverlapKeeper#getEndBodyOverlaps#tmpArray1": {
		   "length": {}
		  },
		  "<anonymous>~OverlapKeeper#getEndBodyOverlaps": {
		   "overlaps": {}
		  },
		  "<anonymous>~OverlapKeeper#getBodyDiff": {
		   "result": {},
		   "accumulator": {},
		   "l": {},
		   "data": {}
		  },
		  "<anonymous>~OverlapKeeperRecord": {
		   "prototype": {
		    "shapeA": {
		     "!type": "+Shape"
		    },
		    "shapeB": {
		     "!type": "+Shape"
		    },
		    "bodyA": {
		     "!type": "+Body"
		    },
		    "bodyB": {
		     "!type": "+Body"
		    },
		    "set": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~OverlapKeeperRecordPool": {
		   "prototype": {
		    "create": {
		     "!type": "fn()"
		    },
		    "destroy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "record": {
		   "bodyA": {
		    "record.shapeA": {}
		   },
		   "bodyB": {
		    "record.shapeB": {}
		   }
		  },
		  "<anonymous>~Pool": {
		   "options": {},
		   "prototype": {
		    "objects": {
		     "!type": "[?]"
		    },
		    "resize": {
		     "!type": "fn()"
		    },
		    "get": {
		     "!type": "fn()"
		    },
		    "release": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Pool#resize": {
		   "objects": {}
		  },
		  "<anonymous>~Pool#get": {
		   "objects": {}
		  },
		  "<anonymous>~TupleDictionary": {
		   "prototype": {
		    "data": {},
		    "keys": {
		     "!type": "[?]"
		    },
		    "getKey": {
		     "!type": "fn()"
		    },
		    "getByKey": {
		     "!type": "fn()"
		    },
		    "get": {
		     "!type": "fn()"
		    },
		    "set": {
		     "!type": "fn()"
		    },
		    "reset": {
		     "!type": "fn()"
		    },
		    "copy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~TupleDictionary#getKey": {
		   "id1": {},
		   "id2": {}
		  },
		  "<anonymous>~TupleDictionary#getByKey": {
		   "key": {}
		  },
		  "<anonymous>~TupleDictionary#set": {
		   "key": {},
		   "prototype": {
		    "data[undefined]": {}
		   }
		  },
		  "<anonymous>~TupleDictionary#reset": {
		   "data": {},
		   "keys": {},
		   "l": {}
		  },
		  "<anonymous>~TupleDictionary#reset~keys": {
		   "length": {}
		  },
		  "<anonymous>~TupleDictionary#copy": {
		   "l": {},
		   "key": {},
		   "prototype": {
		    "data[undefined]": {}
		   }
		  },
		  "<anonymous>~Utils": {
		   "appendArray": {
		    "!type": "fn()",
		    "i": {},
		    "len": {}
		   },
		   "splice": {
		    "!type": "fn()",
		    "howmany": {},
		    "i": {},
		    "len": {}
		   },
		   "ARRAY_TYPE": {},
		   "extend": {
		    "!type": "fn()",
		    "key": {}
		   },
		   "defaults": {
		    "!type": "fn()",
		    "options": {},
		    "key": {}
		   },
		   "defaults~options": {
		    "undefined]": {}
		   }
		  },
		  "array": {
		   "length": {}
		  },
		  "<anonymous>~Island": {
		   "prototype": {
		    "equations": {},
		    "bodies": {},
		    "reset": {
		     "!type": "fn()"
		    },
		    "getBodies": {
		     "!type": "fn()"
		    },
		    "wantsToSleep": {
		     "!type": "fn()"
		    },
		    "sleep": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Island#reset#equations": {
		   "length": {}
		  },
		  "<anonymous>~Island#reset#bodies": {
		   "length": {}
		  },
		  "<anonymous>~Island#getBodies": {
		   "bodies": {},
		   "eqs": {},
		   "i": {},
		   "eq": {}
		  },
		  "<anonymous>~bodyIds": {
		   "length": {}
		  },
		  "<anonymous>~Island#wantsToSleep": {
		   "i": {},
		   "b": {}
		  },
		  "<anonymous>~Island#sleep": {
		   "i": {},
		   "b": {}
		  },
		  "<anonymous>~IslandManager": {
		   "prototype": {
		    "nodePool": {},
		    "islandPool": {},
		    "equations": {
		     "!type": "[?]"
		    },
		    "islands": {
		     "!type": "[?]"
		    },
		    "nodes": {
		     "!type": "[?]"
		    },
		    "queue": {
		     "!type": "[?]"
		    },
		    "visit": {
		     "!type": "fn()"
		    },
		    "bfs": {
		     "!type": "fn()"
		    },
		    "split": {
		     "!type": "fn()"
		    }
		   },
		   "getUnvisitedNode": {
		    "!type": "fn()",
		    "Nnodes": {},
		    "i": {},
		    "node": {}
		   }
		  },
		  "<anonymous>~IslandManager#visit": {
		   "Neqs": {},
		   "i": {},
		   "eq": {}
		  },
		  "<anonymous>~IslandManager#bfs": {
		   "queue": {},
		   "node": {},
		   "child": {}
		  },
		  "<anonymous>~IslandManager#bfs~queue": {
		   "length": {}
		  },
		  "root": {
		   "visited": {}
		  },
		  "<anonymous>~IslandManager#bfs~child": {
		   "visited": {}
		  },
		  "<anonymous>~IslandManager#split": {
		   "bodies": {},
		   "nodes": {},
		   "equations": {},
		   "i": {},
		   "node": {},
		   "k": {},
		   "eq": {},
		   "j": {},
		   "ni": {},
		   "nj": {},
		   "islands": {},
		   "child": {},
		   "island": {}
		  },
		  "<anonymous>~IslandManager#split~node": {
		   "body": {}
		  },
		  "<anonymous>~IslandManager#split~islands": {
		   "length": {}
		  },
		  "<anonymous>~IslandNode": {
		   "prototype": {
		    "body": {
		     "!type": "+Body"
		    },
		    "neighbors": {
		     "!type": "[?]"
		    },
		    "equations": {
		     "!type": "[?]"
		    },
		    "visited": {},
		    "reset": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~IslandNode#reset#equations": {
		   "length": {}
		  },
		  "<anonymous>~IslandNode#reset#neighbors": {
		   "length": {}
		  },
		  "<anonymous>~IslandNode#reset": {
		   "prototype": {
		    "visited": {},
		    "body": {}
		   }
		  },
		  "<anonymous>~World": {
		   "options": {},
		   "prototype": {
		    "springs": {},
		    "bodies": {
		     "!type": "[?]"
		    },
		    "disabledBodyCollisionPairs": {
		     "!type": "[?]"
		    },
		    "solver": {
		     "!type": "+Solver"
		    },
		    "narrowphase": {},
		    "islandManager": {
		     "!type": "+IslandManager"
		    },
		    "gravity": {},
		    "frictionGravity": {
		     "!type": "number"
		    },
		    "useWorldGravityAsFrictionGravity": {
		     "!type": "bool"
		    },
		    "useFrictionGravityOnZeroGravity": {
		     "!type": "bool"
		    },
		    "broadphase": {},
		    "constraints": {},
		    "defaultMaterial": {
		     "!type": "+Material"
		    },
		    "defaultContactMaterial": {
		     "!type": "+ContactMaterial"
		    },
		    "lastTimeStep": {},
		    "applySpringForces": {},
		    "applyDamping": {},
		    "applyGravity": {},
		    "solveConstraints": {},
		    "contactMaterials": {},
		    "time": {},
		    "accumulator": {},
		    "stepping": {
		     "!type": "bool"
		    },
		    "bodiesToBeRemoved": {
		     "!type": "[?]"
		    },
		    "islandSplit": {
		     "!type": "bool"
		    },
		    "emitImpactEvent": {},
		    "_constraintIdCounter": {},
		    "_bodyIdCounter": {},
		    "postStepEvent": {},
		    "addBodyEvent": {},
		    "removeBodyEvent": {},
		    "addSpringEvent": {},
		    "impactEvent": {},
		    "postBroadphaseEvent": {},
		    "sleepMode": {},
		    "beginContactEvent": {},
		    "endContactEvent": {},
		    "preSolveEvent": {},
		    "overlappingShapesLastState": {},
		    "overlappingShapesCurrentState": {},
		    "overlapKeeper": {
		     "!type": "+OverlapKeeper"
		    },
		    "addConstraint": {
		     "!type": "fn()"
		    },
		    "addContactMaterial": {
		     "!type": "fn()"
		    },
		    "removeContactMaterial": {
		     "!type": "fn()"
		    },
		    "getContactMaterial": {
		     "!type": "fn()"
		    },
		    "removeConstraint": {
		     "!type": "fn()"
		    },
		    "step": {
		     "!type": "fn()"
		    },
		    "internalStep": {
		     "!type": "fn()"
		    },
		    "runNarrowphase": {
		     "!type": "fn()"
		    },
		    "addSpring": {
		     "!type": "fn()"
		    },
		    "removeSpring": {
		     "!type": "fn()"
		    },
		    "addBody": {
		     "!type": "fn()"
		    },
		    "removeBody": {
		     "!type": "fn()"
		    },
		    "getBodyById": {
		     "!type": "fn()"
		    },
		    "disableBodyCollision": {
		     "!type": "fn()"
		    },
		    "enableBodyCollision": {
		     "!type": "fn()"
		    },
		    "clear": {
		     "!type": "fn()"
		    },
		    "hitTest": {
		     "!type": "fn()"
		    },
		    "setGlobalStiffness": {
		     "!type": "fn()"
		    },
		    "setGlobalRelaxation": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   },
		   "NO_SLEEPING": {
		    "!type": "number"
		   },
		   "BODY_SLEEPING": {
		    "!type": "number"
		   },
		   "ISLAND_SLEEPING": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~World#postStepEvent": {
		   "type": {}
		  },
		  "<anonymous>~World#addBodyEvent": {
		   "type": {},
		   "body": {}
		  },
		  "<anonymous>~World#removeBodyEvent": {
		   "type": {},
		   "body": {}
		  },
		  "<anonymous>~World#addSpringEvent": {
		   "type": {},
		   "spring": {}
		  },
		  "<anonymous>~World#impactEvent": {
		   "type": {},
		   "bodyA": {},
		   "bodyB": {},
		   "shapeA": {},
		   "shapeB": {},
		   "contactEquation": {}
		  },
		  "<anonymous>~World#postBroadphaseEvent": {
		   "type": {},
		   "pairs": {}
		  },
		  "<anonymous>~World#beginContactEvent": {
		   "type": {},
		   "shapeA": {},
		   "shapeB": {},
		   "bodyA": {},
		   "bodyB": {},
		   "contactEquations": {}
		  },
		  "<anonymous>~World#endContactEvent": {
		   "type": {},
		   "shapeA": {},
		   "shapeB": {},
		   "bodyA": {},
		   "bodyB": {}
		  },
		  "<anonymous>~World#preSolveEvent": {
		   "type": {},
		   "contactEquations": {},
		   "frictionEquations": {}
		  },
		  "<anonymous>~World#overlappingShapesLastState": {
		   "keys": {}
		  },
		  "<anonymous>~World#overlappingShapesCurrentState": {
		   "keys": {}
		  },
		  "<anonymous>~World#removeContactMaterial": {
		   "idx": {}
		  },
		  "<anonymous>~World#getContactMaterial": {
		   "cmats": {},
		   "i": {},
		   "N": {},
		   "cm": {}
		  },
		  "<anonymous>~World#removeConstraint": {
		   "idx": {}
		  },
		  "<anonymous>~World#step": {
		   "maxSubSteps": {},
		   "timeSinceLastCalled": {},
		   "prototype": {
		    "time": {},
		    "accumulator": {}
		   },
		   "substeps": {},
		   "t": {},
		   "j": {},
		   "b": {}
		  },
		  "<anonymous>~World#step~b": {
		   "interpolatedAngle": {}
		  },
		  "<anonymous>~World#internalStep": {
		   "prototype": {
		    "stepping": {},
		    "lastTimeStep": {},
		    "frictionGravity": {}
		   },
		   "that": {},
		   "Nsprings": {},
		   "springs": {},
		   "bodies": {},
		   "g": {},
		   "solver": {},
		   "Nbodies": {},
		   "broadphase": {},
		   "np": {},
		   "constraints": {},
		   "t0": {},
		   "t1": {},
		   "fhMinv": {},
		   "velodt": {},
		   "mg": {},
		   "scale": {},
		   "add": {},
		   "rotate": {},
		   "islandManager": {},
		   "gravityLen": {},
		   "i": {},
		   "b": {},
		   "fi": {},
		   "s": {},
		   "result": {},
		   "ignoredPairs": {},
		   "j": {},
		   "Nconstraints": {},
		   "c": {},
		   "Nresults": {},
		   "bi": {},
		   "bj": {},
		   "k": {},
		   "Nshapesi": {},
		   "si": {},
		   "xi": {},
		   "ai": {},
		   "l": {},
		   "Nshapesj": {},
		   "sj": {},
		   "xj": {},
		   "aj": {},
		   "cm": {},
		   "tmp": {},
		   "body": {},
		   "e": {},
		   "data": {},
		   "preSolveEvent": {},
		   "island": {},
		   "ev": {},
		   "eq": {},
		   "bodiesToBeRemoved": {}
		  },
		  "<anonymous>~World#internalStep#postBroadphaseEvent": {
		   "pairs": {}
		  },
		  "<anonymous>~World#internalStep~body": {
		   "_wakeUpAfterNarrowphase": {}
		  },
		  "<anonymous>~World#internalStep~e": {
		   "shapeA": {},
		   "shapeB": {},
		   "bodyA": {},
		   "bodyB": {}
		  },
		  "<anonymous>~endOverlaps": {
		   "length": {}
		  },
		  "<anonymous>~World#internalStep~preSolveEvent": {
		   "contactEquations": {},
		   "frictionEquations": {}
		  },
		  "<anonymous>~World#internalStep~islandManager": {
		   "equations.length": {}
		  },
		  "<anonymous>~World#internalStep~ev": {
		   "bodyA": {},
		   "bodyB": {},
		   "shapeA": {},
		   "shapeB": {},
		   "contactEquation": {}
		  },
		  "<anonymous>~World#internalStep~bodiesToBeRemoved": {
		   "length": {}
		  },
		  "<anonymous>~World#runNarrowphase": {
		   "aiw": {},
		   "ajw": {},
		   "reducedMass": {},
		   "resolver": {},
		   "numContacts": {},
		   "sensor": {},
		   "numFrictionBefore": {},
		   "numFrictionEquations": {},
		   "speedSquaredB": {},
		   "speedLimitSquaredB": {},
		   "speedSquaredA": {},
		   "speedLimitSquaredA": {},
		   "e": {},
		   "i": {},
		   "f": {}
		  },
		  "np": {
		   "enableFriction": {},
		   "frictionCoefficient": {},
		   "slipForce": {},
		   "restitution": {},
		   "surfaceVelocity": {},
		   "frictionStiffness": {},
		   "frictionRelaxation": {},
		   "stiffness": {},
		   "relaxation": {},
		   "contactSkinSize": {},
		   "enabledEquations": {}
		  },
		  "bi": {
		   "_wakeUpAfterNarrowphase": {}
		  },
		  "bj": {
		   "_wakeUpAfterNarrowphase": {}
		  },
		  "<anonymous>~World#runNarrowphase~e": {
		   "shapeA": {},
		   "shapeB": {},
		   "bodyA": {},
		   "bodyB": {},
		   "contactEquations.length": {}
		  },
		  "<anonymous>~World#addSpring": {
		   "evt": {}
		  },
		  "<anonymous>~World#addSpring~evt": {
		   "spring": {}
		  },
		  "<anonymous>~World#removeSpring": {
		   "idx": {}
		  },
		  "<anonymous>~World#addBody": {
		   "evt": {}
		  },
		  "<anonymous>~World#addBody~evt": {
		   "body": {}
		  },
		  "<anonymous>~World#removeBody": {
		   "idx": {}
		  },
		  "<anonymous>~World#removeBody#removeBodyEvent": {
		   "body": {}
		  },
		  "<anonymous>~World#getBodyById": {
		   "bodies": {},
		   "i": {},
		   "b": {}
		  },
		  "<anonymous>~World#enableBodyCollision": {
		   "pairs": {},
		   "i": {}
		  },
		  "<anonymous>~World#clear": {
		   "prototype": {
		    "time": {}
		   },
		   "cs": {},
		   "i": {},
		   "bodies": {},
		   "springs": {},
		   "cms": {}
		  },
		  "<anonymous>~World#hitTest": {
		   "precision": {},
		   "pb": {},
		   "ps": {},
		   "px": {},
		   "pa": {},
		   "x": {},
		   "zero": {},
		   "tmp": {},
		   "n": {},
		   "result": {},
		   "i": {},
		   "N": {},
		   "b": {},
		   "j": {},
		   "NS": {},
		   "s": {},
		   "a": {}
		  },
		  "<anonymous>~World#setGlobalStiffness": {
		   "constraints": {},
		   "i": {},
		   "c": {},
		   "j": {},
		   "eq": {},
		   "contactMaterials": {}
		  },
		  "<anonymous>~World#setGlobalStiffness~eq": {
		   "stiffness": {},
		   "needsUpdate": {}
		  },
		  "<anonymous>~World#setGlobalStiffness~c": {
		   "stiffness": {},
		   "frictionStiffness": {}
		  },
		  "<anonymous>~World#setGlobalRelaxation": {
		   "i": {},
		   "c": {},
		   "j": {},
		   "eq": {}
		  },
		  "<anonymous>~World#setGlobalRelaxation~eq": {
		   "relaxation": {},
		   "needsUpdate": {}
		  },
		  "<anonymous>~World#setGlobalRelaxation~c": {
		   "relaxation": {},
		   "frictionRelaxation": {}
		  },
		  "<anonymous>~tmpArray": {
		   "length": {}
		  },
		  "p2": {
		   "Body": {
		    "prototype": {
		     "parent": {}
		    }
		   },
		   "Spring": {
		    "prototype": {
		     "parent": {}
		    }
		   }
		  },
		  "world": {
		   "defaultContactMaterial": {
		    "friction": {},
		    "restitution": {}
		   },
		   "applySpringForces": {},
		   "applyDamping": {},
		   "applyGravity": {},
		   "solveConstraints": {},
		   "emitImpactEvent": {},
		   "sleepMode": {}
		  },
		  "_mask": {
		   "isMask": {}
		  },
		  "_filterBlock": {
		   "target": {},
		   "filterPasses": {}
		  },
		  "renderSession": {
		   "currentBlendMode": {},
		   "context": {
		    "globalCompositeOperation": {},
		    "globalAlpha": {}
		   },
		   "scaleMode": {},
		   "context[undefined]": {},
		   "spriteBatch": {
		    "currentBlendMode": {}
		   }
		  },
		  "module:PIXI": {
		   "PIXI": {
		    "!type": "fn()"
		   }
		  },
		  "module:PIXI~PIXI": {
		   "WEBGL_RENDERER": {
		    "!type": "number"
		   },
		   "CANVAS_RENDERER": {
		    "!type": "number"
		   },
		   "VERSION": {
		    "!type": "string"
		   },
		   "_UID": {},
		   "Float32Array": {},
		   "Uint16Array": {},
		   "Uint32Array": {},
		   "ArrayBuffer": {},
		   "PI_2": {
		    "!type": "number"
		   },
		   "RAD_TO_DEG": {
		    "!type": "number"
		   },
		   "DEG_TO_RAD": {
		    "!type": "number"
		   },
		   "RETINA_PREFIX": {
		    "!type": "string"
		   },
		   "defaultRenderOptions": {
		    "view": {},
		    "transparent": {},
		    "antialias": {},
		    "preserveDrawingBuffer": {},
		    "resolution": {},
		    "clearBeforeRender": {},
		    "autoResize": {}
		   },
		   "Graphics": {
		    "!type": "fn()",
		    "prototype": {
		     "renderable": {},
		     "fillAlpha": {},
		     "lineWidth": {},
		     "lineColor": {},
		     "graphicsData": {},
		     "tint": {},
		     "blendMode": {},
		     "currentPath": {},
		     "_webGL": {},
		     "isMask": {},
		     "boundsPadding": {},
		     "_localBounds": {},
		     "dirty": {},
		     "webGLDirty": {},
		     "cachedSpriteDirty": {}
		    }
		   },
		   "Graphics#constructor": {},
		   "Graphics#lineStyle": {
		    "!type": "fn()",
		    "prototype": {
		     "lineWidth": {},
		     "lineColor": {},
		     "lineAlpha": {}
		    }
		   },
		   "Graphics#lineStyle#currentPath": {
		    "lineWidth": {},
		    "lineColor": {},
		    "lineAlpha": {}
		   },
		   "Graphics#moveTo": {
		    "!type": "fn()"
		   },
		   "Graphics#lineTo": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Graphics#quadraticCurveTo": {
		    "!type": "fn()",
		    "xa": {},
		    "ya": {},
		    "n": {},
		    "points": {},
		    "fromX": {},
		    "fromY": {},
		    "j": {},
		    "i": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Graphics#quadraticCurveTo#currentPath": {
		    "shape": {
		     "points": {}
		    }
		   },
		   "Graphics#bezierCurveTo": {
		    "!type": "fn()",
		    "n": {},
		    "dt": {},
		    "dt2": {},
		    "dt3": {},
		    "t2": {},
		    "t3": {},
		    "points": {},
		    "fromX": {},
		    "fromY": {},
		    "j": {},
		    "i": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Graphics#bezierCurveTo#currentPath": {
		    "shape": {
		     "points": {}
		    }
		   },
		   "Graphics#arcTo": {
		    "!type": "fn()",
		    "points": {},
		    "fromX": {},
		    "fromY": {},
		    "a1": {},
		    "b1": {},
		    "a2": {},
		    "b2": {},
		    "mm": {},
		    "dd": {},
		    "cc": {},
		    "tt": {},
		    "k1": {},
		    "k2": {},
		    "j1": {},
		    "j2": {},
		    "cx": {},
		    "cy": {},
		    "px": {},
		    "py": {},
		    "qx": {},
		    "qy": {},
		    "startAngle": {},
		    "endAngle": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Graphics#arc": {
		    "!type": "fn()",
		    "anticlockwise": {},
		    "endAngle": {},
		    "startAngle": {},
		    "sweep": {},
		    "segs": {},
		    "startX": {},
		    "startY": {},
		    "points": {},
		    "theta": {},
		    "theta2": {},
		    "cTheta": {},
		    "sTheta": {},
		    "segMinus": {},
		    "remainder": {},
		    "i": {},
		    "real": {},
		    "angle": {},
		    "c": {},
		    "s": {},
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Graphics#beginFill": {
		    "!type": "fn()",
		    "prototype": {
		     "filling": {},
		     "fillColor": {},
		     "fillAlpha": {}
		    }
		   },
		   "Graphics#beginFill#currentPath": {
		    "fill": {},
		    "fillColor": {},
		    "fillAlpha": {}
		   },
		   "Graphics#endFill": {
		    "!type": "fn()",
		    "prototype": {
		     "filling": {},
		     "fillColor": {},
		     "fillAlpha": {}
		    }
		   },
		   "Graphics#drawRect": {
		    "!type": "fn()"
		   },
		   "Graphics#drawRoundedRect": {
		    "!type": "fn()"
		   },
		   "Graphics#drawCircle": {
		    "!type": "fn()"
		   },
		   "Graphics#drawEllipse": {
		    "!type": "fn()"
		   },
		   "Graphics#drawPolygon": {
		    "!type": "fn()",
		    "path": {},
		    "points": {},
		    "i": {}
		   },
		   "Graphics#drawPolygon~points": {
		    "undefined]": {}
		   },
		   "Graphics#clear": {
		    "!type": "fn()",
		    "prototype": {
		     "lineWidth": {},
		     "filling": {},
		     "dirty": {},
		     "clearDirty": {},
		     "graphicsData": {}
		    }
		   },
		   "Graphics#generateTexture": {
		    "!type": "fn()",
		    "resolution": {},
		    "bounds": {},
		    "canvasBuffer": {},
		    "texture": {}
		   },
		   "Graphics#generateTexture~texture": {
		    "baseTexture.resolution": {}
		   },
		   "Graphics#_renderWebGL": {
		    "!type": "fn()",
		    "prototype": {
		     "cachedSpriteDirty": {},
		     "dirty": {},
		     "webGLDirty": {}
		    },
		    "blendModeWebGL": {},
		    "i": {}
		   },
		   "Graphics#_renderWebGL#_cachedSprite": {
		    "worldAlpha": {}
		   },
		   "Graphics#_renderCanvas": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {},
		     "_prevTint": {},
		     "cachedSpriteDirty": {}
		    },
		    "context": {},
		    "transform": {},
		    "resolution": {},
		    "i": {}
		   },
		   "Graphics#_renderCanvas#_cachedSprite": {
		    "alpha": {}
		   },
		   "Graphics#_renderCanvas~context": {
		    "globalCompositeOperation": {}
		   },
		   "Graphics#getBounds": {
		    "!type": "fn()",
		    "prototype": {
		     "webGLDirty": {},
		     "cachedSpriteDirty": {},
		     "dirty": {},
		     "_currentBounds": {}
		    },
		    "bounds": {},
		    "w0": {},
		    "w1": {},
		    "h0": {},
		    "h1": {},
		    "worldTransform": {},
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {},
		    "x1": {},
		    "y1": {},
		    "x2": {},
		    "y2": {},
		    "x3": {},
		    "y3": {},
		    "x4": {},
		    "y4": {},
		    "maxX": {},
		    "maxY": {},
		    "minX": {},
		    "minY": {}
		   },
		   "Graphics#getBounds#_bounds": {
		    "x": {},
		    "width": {},
		    "y": {},
		    "height": {}
		   },
		   "Graphics#containsPoint": {
		    "!type": "fn(point: +Point) -> ?",
		    "graphicsData": {},
		    "i": {},
		    "data": {}
		   },
		   "Graphics#updateLocalBounds": {
		    "!type": "fn()",
		    "minX": {},
		    "maxX": {},
		    "minY": {},
		    "maxY": {},
		    "shape": {},
		    "points": {},
		    "x": {},
		    "y": {},
		    "w": {},
		    "h": {},
		    "i": {},
		    "data": {},
		    "type": {},
		    "lineWidth": {},
		    "j": {},
		    "padding": {}
		   },
		   "Graphics#updateLocalBounds#_localBounds": {
		    "x": {},
		    "width": {},
		    "y": {},
		    "height": {}
		   },
		   "Graphics#_generateCachedSprite": {
		    "!type": "fn()",
		    "bounds": {},
		    "canvasBuffer": {},
		    "texture": {},
		    "prototype": {
		     "_cachedSprite": {},
		     "worldAlpha": {}
		    }
		   },
		   "Graphics#_generateCachedSprite#_cachedSprite": {
		    "buffer": {},
		    "worldTransform": {},
		    "anchor": {
		     "x": {},
		     "y": {}
		    },
		    "alpha": {}
		   },
		   "Graphics#updateCachedSpriteTexture": {
		    "!type": "fn()",
		    "cachedSprite": {},
		    "texture": {},
		    "canvas": {}
		   },
		   "Graphics#updateCachedSpriteTexture~texture": {
		    "baseTexture.width": {},
		    "baseTexture.height": {},
		    "crop.width": {},
		    "frame.width": {},
		    "crop.height": {},
		    "frame.height": {}
		   },
		   "Graphics#updateCachedSpriteTexture~cachedSprite": {
		    "_width": {},
		    "_height": {}
		   },
		   "Graphics#destroyCachedSprite": {
		    "!type": "fn()",
		    "prototype": {
		     "_cachedSprite": {}
		    }
		   },
		   "Graphics#drawShape": {
		    "!type": "fn()",
		    "prototype": {
		     "currentPath": {},
		     "dirty": {}
		    },
		    "shape": {},
		    "data": {}
		   },
		   "Graphics#drawShape~data": {
		    "shape.closed": {}
		   },
		   "GraphicsData#constructor": {},
		   "GraphicsData#clone": {
		    "!type": "fn() -> ?"
		   },
		   "CanvasGraphics": {
		    "!type": "fn()",
		    "renderGraphics": {
		     "worldAlpha": {},
		     "i": {},
		     "data": {},
		     "shape": {},
		     "fillColor": {},
		     "lineColor": {},
		     "points": {},
		     "j": {},
		     "w": {},
		     "h": {},
		     "x": {},
		     "y": {},
		     "kappa": {},
		     "ox": {},
		     "oy": {},
		     "xe": {},
		     "ye": {},
		     "xm": {},
		     "ym": {},
		     "rx": {},
		     "ry": {},
		     "width": {},
		     "height": {},
		     "radius": {},
		     "maxRadius": {}
		    },
		    "renderGraphicsMask": {
		     "len": {},
		     "i": {},
		     "data": {},
		     "shape": {},
		     "points": {},
		     "j": {},
		     "w": {},
		     "h": {},
		     "x": {},
		     "y": {},
		     "kappa": {},
		     "ox": {},
		     "oy": {},
		     "xe": {},
		     "ye": {},
		     "xm": {},
		     "ym": {},
		     "rx": {},
		     "ry": {},
		     "width": {},
		     "height": {},
		     "radius": {},
		     "maxRadius": {}
		    },
		    "updateGraphicsTint": {
		     "tintR": {},
		     "tintG": {},
		     "tintB": {},
		     "i": {},
		     "data": {},
		     "fillColor": {},
		     "lineColor": {}
		    },
		    "updateGraphicsTint~data": {
		     "_fillTint": {},
		     "_lineTint": {}
		    }
		   },
		   "CanvasGraphics.renderGraphics": {
		    "!type": "fn()"
		   },
		   "CanvasGraphics.renderGraphicsMask": {
		    "!type": "fn()"
		   },
		   "CanvasGraphics.updateGraphicsTint": {
		    "!type": "fn()"
		   },
		   "CanvasRenderer": {
		    "!type": "fn(width: number, height: number, options: ?, options_view: +HTMLCanvasElement, options_transparent: bool, options_autoResize: bool, options_resolution: number, options_clearBeforeRender: bool)",
		    "i": {},
		    "options": {},
		    "prototype": {
		     "type": {},
		     "resolution": {},
		     "clearBeforeRender": {},
		     "transparent": {},
		     "autoResize": {},
		     "width": {},
		     "height": {},
		     "view": {},
		     "context": {},
		     "refresh": {},
		     "count": {},
		     "maskManager": {},
		     "renderSession": {}
		    }
		   },
		   "defaultRenderer": {},
		   "CanvasRenderer#view": {
		    "width": {},
		    "height": {}
		   },
		   "CanvasRenderer#renderSession": {
		    "context": {},
		    "maskManager": {},
		    "scaleMode": {},
		    "smoothProperty": {},
		    "roundPixels": {}
		   },
		   "CanvasRenderer#constructor": {},
		   "CanvasRenderer#render": {
		    "!type": "fn()"
		   },
		   "CanvasRenderer#render#context": {
		    "globalAlpha": {},
		    "globalCompositeOperation": {},
		    "fillStyle": {}
		   },
		   "CanvasRenderer#render#renderSession": {
		    "currentBlendMode": {}
		   },
		   "CanvasRenderer#destroy": {
		    "!type": "fn()",
		    "removeView": {},
		    "prototype": {
		     "view": {},
		     "context": {},
		     "maskManager": {},
		     "renderSession": {}
		    }
		   },
		   "CanvasRenderer#resize": {
		    "!type": "fn()",
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "CanvasRenderer#resize#view": {
		    "width": {},
		    "height": {},
		    "style": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "CanvasRenderer#renderDisplayObject": {
		    "!type": "fn()"
		   },
		   "CanvasRenderer#renderDisplayObject#renderSession": {
		    "context": {},
		    "resolution": {}
		   },
		   "CanvasRenderer#mapBlendModes": {
		    "!type": "fn()"
		   },
		   "blendModesCanvas": {},
		   "blendModesCanvas[undefined]": {},
		   "CanvasBuffer": {
		    "!type": "fn(width: number, height: number)",
		    "prototype": {
		     "width": {},
		     "height": {},
		     "canvas": {},
		     "context": {}
		    }
		   },
		   "CanvasBuffer#canvas": {
		    "width": {},
		    "height": {}
		   },
		   "CanvasBuffer#constructor": {},
		   "CanvasBuffer#clear": {
		    "!type": "fn()"
		   },
		   "CanvasBuffer#resize": {
		    "!type": "fn()",
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "CanvasBuffer#resize#canvas": {
		    "width": {},
		    "height": {}
		   },
		   "CanvasBuffer#destroy": {
		    "!type": "fn()"
		   },
		   "CanvasMaskManager": {
		    "!type": "fn()"
		   },
		   "CanvasMaskManager#constructor": {},
		   "CanvasMaskManager#pushMask": {
		    "!type": "fn()",
		    "context": {},
		    "cacheAlpha": {},
		    "transform": {},
		    "resolution": {}
		   },
		   "CanvasMaskManager#popMask": {
		    "!type": "fn()"
		   },
		   "CanvasTinter": {
		    "!type": "fn()",
		    "getTintedTexture": {
		     "canvas": {}
		    },
		    "tintWithMultiply": {
		     "context": {},
		     "crop": {}
		    },
		    "tintWithMultiply~context": {
		     "fillStyle": {},
		     "globalCompositeOperation": {}
		    },
		    "tintWithPerPixel": {
		     "context": {},
		     "crop": {},
		     "rgbValues": {},
		     "r": {},
		     "g": {},
		     "b": {},
		     "pixelData": {},
		     "pixels": {},
		     "i": {},
		     "alpha": {}
		    },
		    "tintWithPerPixel~context": {
		     "globalCompositeOperation": {}
		    },
		    "tintWithPerPixel~pixels": {
		     "undefined]": {}
		    },
		    "checkInverseAlpha": {
		     "canvas": {},
		     "s1": {},
		     "s2": {}
		    },
		    "checkInverseAlpha~canvas": {
		     "context.fillStyle": {}
		    },
		    "canHandleAlpha": {},
		    "canUseMultiply": {}
		   },
		   "CanvasTinter.getTintedTexture": {
		    "!type": "fn()"
		   },
		   "CanvasTinter.tintWithMultiply": {
		    "!type": "fn()"
		   },
		   "CanvasTinter.tintWithPerPixel": {
		    "!type": "fn()"
		   },
		   "CanvasTinter.checkInverseAlpha": {
		    "!type": "fn()"
		   },
		   "CanvasTinter.tintMethod": {},
		   "ComplexPrimitiveShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "_UID": {},
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {}
		    }
		   },
		   "ComplexPrimitiveShader#constructor": {},
		   "ComplexPrimitiveShader#init": {
		    "!type": "fn()",
		    "gl": {},
		    "program": {},
		    "prototype": {
		     "projectionVector": {},
		     "offsetVector": {},
		     "tintColor": {},
		     "color": {},
		     "flipY": {},
		     "aVertexPosition": {},
		     "attributes": {},
		     "translationMatrix": {},
		     "alpha": {},
		     "program": {}
		    }
		   },
		   "ComplexPrimitiveShader#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "uniforms": {},
		     "gl": {},
		     "attribute": {}
		    }
		   },
		   "PixiFastShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "_UID": {},
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {},
		     "textureCount": {}
		    }
		   },
		   "PixiFastShader#constructor": {},
		   "PixiFastShader#init": {
		    "!type": "fn()",
		    "gl": {},
		    "program": {},
		    "prototype": {
		     "uSampler": {},
		     "projectionVector": {},
		     "offsetVector": {},
		     "dimensions": {},
		     "uMatrix": {},
		     "aVertexPosition": {},
		     "aPositionCoord": {},
		     "aScale": {},
		     "aRotation": {},
		     "aTextureCoord": {},
		     "colorAttribute": {},
		     "attributes": {},
		     "program": {}
		    }
		   },
		   "PixiFastShader#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "uniforms": {},
		     "gl": {},
		     "attributes": {}
		    }
		   },
		   "PixiShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "_UID": {},
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "textureCount": {},
		     "firstRun": {},
		     "dirty": {},
		     "attributes": {}
		    }
		   },
		   "PixiShader#constructor": {},
		   "PixiShader#init": {
		    "!type": "fn()",
		    "gl": {},
		    "program": {},
		    "prototype": {
		     "uSampler": {},
		     "projectionVector": {},
		     "offsetVector": {},
		     "dimensions": {},
		     "aVertexPosition": {},
		     "aTextureCoord": {},
		     "colorAttribute": {},
		     "attributes": {},
		     "program": {}
		    },
		    "key": {}
		   },
		   "PixiShader#init#uniforms[undefined]": {
		    "uniformLocation": {}
		   },
		   "PixiShader#initUniforms": {
		    "!type": "fn()",
		    "prototype": {
		     "textureCount": {}
		    },
		    "gl": {},
		    "uniform": {},
		    "key": {},
		    "type": {}
		   },
		   "PixiShader#initUniforms~uniform": {
		    "_init": {},
		    "glMatrix": {},
		    "glValueLength": {},
		    "glFunc": {}
		   },
		   "PixiShader#initSampler2D": {
		    "!type": "fn()",
		    "gl": {},
		    "data": {},
		    "magFilter": {},
		    "minFilter": {},
		    "wrapS": {},
		    "wrapT": {},
		    "format": {},
		    "width": {},
		    "height": {},
		    "border": {}
		   },
		   "PixiShader#syncUniforms": {
		    "!type": "fn()",
		    "prototype": {
		     "textureCount": {}
		    },
		    "uniform": {},
		    "gl": {},
		    "key": {}
		   },
		   "PixiShader#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "uniforms": {},
		     "gl": {},
		     "attributes": {}
		    }
		   },
		   "PixiShader.defaultVertexSrc": {},
		   "PrimitiveShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "_UID": {},
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {}
		    }
		   },
		   "PrimitiveShader#constructor": {},
		   "PrimitiveShader#init": {
		    "!type": "fn()",
		    "gl": {},
		    "program": {},
		    "prototype": {
		     "projectionVector": {},
		     "offsetVector": {},
		     "tintColor": {},
		     "flipY": {},
		     "aVertexPosition": {},
		     "colorAttribute": {},
		     "attributes": {},
		     "translationMatrix": {},
		     "alpha": {},
		     "program": {}
		    }
		   },
		   "PrimitiveShader#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "uniforms": {},
		     "gl": {},
		     "attributes": {}
		    }
		   },
		   "StripShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "_UID": {},
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {}
		    }
		   },
		   "StripShader#constructor": {},
		   "StripShader#init": {
		    "!type": "fn()",
		    "gl": {},
		    "program": {},
		    "prototype": {
		     "uSampler": {},
		     "projectionVector": {},
		     "offsetVector": {},
		     "colorAttribute": {},
		     "aVertexPosition": {},
		     "aTextureCoord": {},
		     "attributes": {},
		     "translationMatrix": {},
		     "alpha": {},
		     "program": {}
		    }
		   },
		   "StripShader#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "uniforms": {},
		     "gl": {},
		     "attribute": {}
		    }
		   },
		   "FilterTexture": {
		    "!type": "fn(gl: +WebGLContext, width: number, height: number, scaleMode: number)",
		    "prototype": {
		     "gl": {},
		     "frameBuffer": {},
		     "texture": {},
		     "renderBuffer": {}
		    },
		    "scaleMode": {}
		   },
		   "FilterTexture#constructor": {},
		   "FilterTexture#clear": {
		    "!type": "fn()",
		    "gl": {}
		   },
		   "FilterTexture#resize": {
		    "!type": "fn()",
		    "prototype": {
		     "width": {},
		     "height": {}
		    },
		    "gl": {}
		   },
		   "FilterTexture#destroy": {
		    "!type": "fn()",
		    "gl": {},
		    "prototype": {
		     "frameBuffer": {},
		     "texture": {}
		    }
		   },
		   "WebGLBlendModeManager": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "currentBlendMode": {}
		    }
		   },
		   "WebGLBlendModeManager#constructor": {},
		   "WebGLBlendModeManager#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {}
		    }
		   },
		   "WebGLBlendModeManager#setBlendMode": {
		    "!type": "fn()",
		    "prototype": {
		     "currentBlendMode": {}
		    },
		    "blendModeWebGL": {}
		   },
		   "WebGLBlendModeManager#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {}
		    }
		   },
		   "WebGLFastSpriteBatch": {
		    "!type": "fn()",
		    "prototype": {
		     "vertSize": {},
		     "maxSize": {},
		     "size": {},
		     "vertices": {},
		     "indices": {},
		     "vertexBuffer": {},
		     "indexBuffer": {},
		     "lastIndexCount": {},
		     "indices[undefined]": {},
		     "drawing": {},
		     "currentBatchSize": {},
		     "currentBaseTexture": {},
		     "currentBlendMode": {},
		     "renderSession": {},
		     "shader": {},
		     "matrix": {}
		    },
		    "numVerts": {},
		    "numIndices": {},
		    "i": {},
		    "j": {}
		   },
		   "WebGLFastSpriteBatch#constructor": {},
		   "WebGLFastSpriteBatch#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "vertexBuffer": {},
		     "indexBuffer": {}
		    }
		   },
		   "WebGLFastSpriteBatch#begin": {
		    "!type": "fn()",
		    "prototype": {
		     "renderSession": {},
		     "shader": {},
		     "matrix": {}
		    }
		   },
		   "WebGLFastSpriteBatch#end": {
		    "!type": "fn()"
		   },
		   "WebGLFastSpriteBatch#render": {
		    "!type": "fn()",
		    "children": {},
		    "sprite": {},
		    "prototype": {
		     "currentBaseTexture": {}
		    },
		    "i": {},
		    "j": {}
		   },
		   "WebGLFastSpriteBatch#renderSprite": {
		    "!type": "fn()",
		    "prototype": {
		     "currentBaseTexture": {}
		    },
		    "uvs": {},
		    "vertices": {},
		    "width": {},
		    "height": {},
		    "w0": {},
		    "w1": {},
		    "h0": {},
		    "h1": {},
		    "index": {},
		    "trim": {}
		   },
		   "WebGLFastSpriteBatch#renderSprite~vertices": {
		    "undefined]": {}
		   },
		   "WebGLFastSpriteBatch#flush": {
		    "!type": "fn()",
		    "gl": {},
		    "view": {},
		    "prototype": {
		     "currentBatchSize": {}
		    }
		   },
		   "WebGLFastSpriteBatch#stop": {
		    "!type": "fn()"
		   },
		   "WebGLFastSpriteBatch#start": {
		    "!type": "fn()",
		    "gl": {},
		    "projection": {},
		    "stride": {}
		   },
		   "WebGLFilterManager": {
		    "!type": "fn()",
		    "prototype": {
		     "filterStack": {},
		     "offsetX": {},
		     "offsetY": {}
		    }
		   },
		   "WebGLFilterManager#constructor": {},
		   "WebGLFilterManager#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "texturePool": {}
		    }
		   },
		   "WebGLFilterManager#begin": {
		    "!type": "fn()",
		    "prototype": {
		     "renderSession": {},
		     "defaultShader": {},
		     "width": {},
		     "height": {},
		     "buffer": {}
		    },
		    "projection": {}
		   },
		   "WebGLFilterManager#pushFilter": {
		    "!type": "fn()",
		    "gl": {},
		    "projection": {},
		    "offset": {},
		    "filter": {},
		    "prototype": {
		     "offsetX": {},
		     "offsetY": {}
		    },
		    "texture": {},
		    "filterArea": {},
		    "padding": {}
		   },
		   "WebGLFilterManager#pushFilter~filterArea": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {}
		   },
		   "WebGLFilterManager#pushFilter~projection": {
		    "x": {},
		    "y": {}
		   },
		   "WebGLFilterManager#pushFilter~offset": {
		    "x": {},
		    "y": {}
		   },
		   "WebGLFilterManager#popFilter": {
		    "!type": "fn()",
		    "gl": {},
		    "filterBlock": {},
		    "filterArea": {},
		    "texture": {},
		    "projection": {},
		    "offset": {},
		    "prototype": {
		     "vertexArray[0]": {},
		     "vertexArray[1]": {},
		     "vertexArray[2]": {},
		     "vertexArray[3]": {},
		     "vertexArray[4]": {},
		     "vertexArray[5]": {},
		     "vertexArray[6]": {},
		     "vertexArray[7]": {},
		     "uvArray[2]": {},
		     "uvArray[5]": {},
		     "uvArray[6]": {},
		     "uvArray[7]": {},
		     "offsetX": {},
		     "offsetY": {}
		    },
		    "inputTexture": {},
		    "outputTexture": {},
		    "i": {},
		    "filterPass": {},
		    "temp": {},
		    "filter": {},
		    "sizeX": {},
		    "sizeY": {},
		    "offsetX": {},
		    "offsetY": {},
		    "buffer": {},
		    "currentFilter": {},
		    "x": {},
		    "y": {}
		   },
		   "WebGLFilterManager#popFilter~projection": {
		    "x": {},
		    "y": {}
		   },
		   "WebGLFilterManager#popFilter~offset": {
		    "x": {},
		    "y": {}
		   },
		   "WebGLFilterManager#popFilter~filterBlock": {
		    "_glFilterTexture": {}
		   },
		   "WebGLFilterManager#applyFilterPass": {
		    "!type": "fn()",
		    "gl": {},
		    "shader": {}
		   },
		   "WebGLFilterManager#applyFilterPass~shader": {
		    "fragmentSrc": {},
		    "uniforms": {}
		   },
		   "WebGLFilterManager#initShaderBuffers": {
		    "!type": "fn()",
		    "gl": {},
		    "prototype": {
		     "vertexBuffer": {},
		     "uvBuffer": {},
		     "colorBuffer": {},
		     "indexBuffer": {},
		     "vertexArray": {},
		     "uvArray": {},
		     "colorArray": {}
		    }
		   },
		   "WebGLFilterManager#destroy": {
		    "!type": "fn()",
		    "gl": {},
		    "prototype": {
		     "filterStack": {},
		     "offsetX": {},
		     "offsetY": {},
		     "texturePool": {}
		    },
		    "i": {}
		   },
		   "WebGLGraphics": {
		    "!type": "fn()",
		    "renderGraphics": {
		     "gl": {},
		     "projection": {},
		     "offset": {},
		     "shader": {},
		     "webGLData": {},
		     "webGL": {},
		     "i": {}
		    },
		    "updateGraphics": {
		     "webGL": {},
		     "i": {},
		     "graphicsData": {},
		     "webGLData": {},
		     "data": {},
		     "canDrawUsingSimple": {}
		    },
		    "updateGraphics~webGL": {
		     "data": {},
		     "lastIndex": {}
		    },
		    "updateGraphics~data": {
		     "points": {}
		    },
		    "switchMode": {
		     "webGLData": {}
		    },
		    "switchMode~webGLData": {
		     "mode": {},
		     "dirty": {}
		    },
		    "buildRectangle": {
		     "rectData": {},
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {},
		     "color": {},
		     "alpha": {},
		     "r": {},
		     "g": {},
		     "b": {},
		     "verts": {},
		     "indices": {},
		     "vertPos": {},
		     "tempPoints": {}
		    },
		    "buildRoundedRectangle": {
		     "rrectData": {},
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {},
		     "radius": {},
		     "recPoints": {},
		     "color": {},
		     "alpha": {},
		     "r": {},
		     "g": {},
		     "b": {},
		     "verts": {},
		     "indices": {},
		     "vecPos": {},
		     "triangles": {},
		     "i": {},
		     "tempPoints": {}
		    },
		    "quadraticBezierCurve": {
		     "xa": {},
		     "ya": {},
		     "xb": {},
		     "yb": {},
		     "x": {},
		     "y": {},
		     "n": {},
		     "points": {},
		     "getPt": {
		      "!type": "fn()"
		     },
		     "j": {},
		     "i": {}
		    },
		    "quadraticBezierCurve~getPt": {
		     "diff": {}
		    },
		    "buildCircle": {
		     "circleData": {},
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {},
		     "totalSegs": {},
		     "seg": {},
		     "i": {},
		     "color": {},
		     "alpha": {},
		     "r": {},
		     "g": {},
		     "b": {},
		     "verts": {},
		     "indices": {},
		     "vecPos": {},
		     "tempPoints": {}
		    },
		    "buildLine": {
		     "i": {},
		     "points": {},
		     "firstPoint": {},
		     "lastPoint": {},
		     "midPointX": {},
		     "midPointY": {},
		     "verts": {},
		     "indices": {},
		     "length": {},
		     "indexCount": {},
		     "indexStart": {},
		     "width": {},
		     "color": {},
		     "alpha": {},
		     "r": {},
		     "g": {},
		     "b": {},
		     "px": {},
		     "py": {},
		     "p1x": {},
		     "p1y": {},
		     "p2x": {},
		     "p2y": {},
		     "p3x": {},
		     "p3y": {},
		     "perpx": {},
		     "perpy": {},
		     "perp2x": {},
		     "perp2y": {},
		     "perp3x": {},
		     "perp3y": {},
		     "a1": {},
		     "b1": {},
		     "c1": {},
		     "a2": {},
		     "b2": {},
		     "c2": {},
		     "denom": {},
		     "pdist": {},
		     "dist": {}
		    },
		    "buildLine~points": {
		     "undefined]": {}
		    },
		    "buildComplexPoly": {
		     "points": {},
		     "indices": {},
		     "minX": {},
		     "maxX": {},
		     "minY": {},
		     "maxY": {},
		     "x": {},
		     "y": {},
		     "i": {},
		     "length": {}
		    },
		    "buildPoly": {
		     "points": {},
		     "verts": {},
		     "indices": {},
		     "length": {},
		     "color": {},
		     "alpha": {},
		     "r": {},
		     "g": {},
		     "b": {},
		     "triangles": {},
		     "vertPos": {},
		     "i": {}
		    }
		   },
		   "WebGLGraphics.renderGraphics": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.updateGraphics": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.switchMode": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildRectangle": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildRoundedRectangle": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.quadraticBezierCurve": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildCircle": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildLine": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildComplexPoly": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildPoly": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.graphicsDataPool": {},
		   "WebGLGraphicsData": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "color": {},
		     "points": {},
		     "indices": {},
		     "buffer": {},
		     "indexBuffer": {},
		     "mode": {},
		     "alpha": {},
		     "dirty": {}
		    }
		   },
		   "WebGLGraphicsData#reset": {
		    "!type": "fn()",
		    "prototype": {
		     "points": {},
		     "indices": {}
		    }
		   },
		   "WebGLGraphicsData#upload": {
		    "!type": "fn()",
		    "gl": {},
		    "prototype": {
		     "glPoints": {},
		     "glIndicies": {},
		     "dirty": {}
		    }
		   },
		   "WebGLMaskManager": {
		    "!type": "fn()"
		   },
		   "WebGLMaskManager#constructor": {},
		   "WebGLMaskManager#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {}
		    }
		   },
		   "WebGLMaskManager#pushMask": {
		    "!type": "fn()",
		    "gl": {}
		   },
		   "WebGLMaskManager#popMask": {
		    "!type": "fn()",
		    "gl": {}
		   },
		   "WebGLMaskManager#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {}
		    }
		   },
		   "WebGLShaderManager": {
		    "!type": "fn()",
		    "prototype": {
		     "maxAttibs": {},
		     "attribState": {},
		     "tempAttribState": {},
		     "attribState[undefined]": {},
		     "stack": {}
		    },
		    "i": {}
		   },
		   "WebGLShaderManager#constructor": {},
		   "WebGLShaderManager#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "primitiveShader": {},
		     "complexPrimitiveShader": {},
		     "defaultShader": {},
		     "fastShader": {},
		     "stripShader": {}
		    }
		   },
		   "WebGLShaderManager#setAttribs": {
		    "!type": "fn()",
		    "i": {},
		    "prototype": {
		     "tempAttribState[undefined]": {},
		     "attribState[undefined]": {}
		    },
		    "attribId": {},
		    "gl": {}
		   },
		   "WebGLShaderManager#setShader": {
		    "!type": "fn()",
		    "prototype": {
		     "_currentId": {},
		     "currentShader": {}
		    }
		   },
		   "WebGLShaderManager#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "attribState": {},
		     "tempAttribState": {},
		     "gl": {}
		    }
		   },
		   "initDefaultShaders": {
		    "!type": "fn()"
		   },
		   "CompileVertexShader": {
		    "!type": "fn()"
		   },
		   "CompileFragmentShader": {
		    "!type": "fn()"
		   },
		   "_CompileShader": {
		    "!type": "fn()",
		    "src": {},
		    "shader": {}
		   },
		   "compileProgram": {
		    "!type": "fn()",
		    "fragmentShader": {},
		    "vertexShader": {},
		    "shaderProgram": {}
		   },
		   "WebGLSpriteBatch": {
		    "!type": "fn()",
		    "prototype": {
		     "vertSize": {},
		     "size": {},
		     "vertices": {},
		     "positions": {},
		     "colors": {},
		     "indices": {},
		     "lastIndexCount": {},
		     "indices[undefined]": {},
		     "drawing": {},
		     "currentBatchSize": {},
		     "currentBaseTexture": {},
		     "dirty": {},
		     "textures": {},
		     "blendModes": {},
		     "shaders": {},
		     "sprites": {},
		     "defaultShader": {}
		    },
		    "numVerts": {},
		    "numIndices": {},
		    "i": {},
		    "j": {}
		   },
		   "WebGLSpriteBatch#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "vertexBuffer": {},
		     "indexBuffer": {},
		     "currentBlendMode": {}
		    },
		    "shader": {}
		   },
		   "WebGLSpriteBatch#setContext~shader": {
		    "fragmentSrc": {},
		    "uniforms": {}
		   },
		   "WebGLSpriteBatch#setContext#defaultShader": {
		    "shaders[undefined]": {}
		   },
		   "WebGLSpriteBatch#begin": {
		    "!type": "fn()",
		    "prototype": {
		     "renderSession": {},
		     "shader": {}
		    }
		   },
		   "WebGLSpriteBatch#end": {
		    "!type": "fn()"
		   },
		   "WebGLSpriteBatch#render": {
		    "!type": "fn()",
		    "texture": {},
		    "wt": {},
		    "prototype": {
		     "currentBaseTexture": {},
		     "sprites[undefined]": {}
		    },
		    "uvs": {},
		    "aX": {},
		    "aY": {},
		    "w0": {},
		    "w1": {},
		    "h0": {},
		    "h1": {},
		    "trim": {},
		    "i": {},
		    "resolution": {},
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {},
		    "colors": {},
		    "positions": {},
		    "tint": {}
		   },
		   "WebGLSpriteBatch#render~positions": {
		    "undefined]": {}
		   },
		   "WebGLSpriteBatch#render~colors": {
		    "undefined]": {
		     "colors[undefined]": {}
		    }
		   },
		   "WebGLSpriteBatch#renderTilingSprite": {
		    "!type": "fn()",
		    "texture": {},
		    "prototype": {
		     "currentBaseTexture": {},
		     "sprites[undefined]": {}
		    },
		    "uvs": {},
		    "w": {},
		    "h": {},
		    "offsetX": {},
		    "offsetY": {},
		    "scaleX": {},
		    "scaleY": {},
		    "tint": {},
		    "color": {},
		    "positions": {},
		    "colors": {},
		    "width": {},
		    "height": {},
		    "aX": {},
		    "aY": {},
		    "w0": {},
		    "w1": {},
		    "h0": {},
		    "h1": {},
		    "i": {},
		    "resolution": {},
		    "wt": {},
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {}
		   },
		   "WebGLSpriteBatch#renderTilingSprite~uvs": {
		    "x0": {},
		    "y0": {},
		    "x1": {},
		    "y1": {},
		    "x2": {},
		    "y2": {},
		    "x3": {},
		    "y3": {}
		   },
		   "WebGLSpriteBatch#renderTilingSprite~positions": {
		    "undefined]": {}
		   },
		   "WebGLSpriteBatch#renderTilingSprite~colors": {
		    "undefined]": {}
		   },
		   "WebGLSpriteBatch#flush": {
		    "!type": "fn()",
		    "gl": {},
		    "shader": {},
		    "prototype": {
		     "dirty": {},
		     "currentBatchSize": {}
		    },
		    "stride": {},
		    "view": {},
		    "nextTexture": {},
		    "nextBlendMode": {},
		    "nextShader": {},
		    "batchSize": {},
		    "start": {},
		    "currentBaseTexture": {},
		    "currentBlendMode": {},
		    "currentShader": {},
		    "blendSwap": {},
		    "shaderSwap": {},
		    "sprite": {},
		    "i": {},
		    "j": {},
		    "projection": {},
		    "offsetVector": {}
		   },
		   "WebGLSpriteBatch#flush~shader": {
		    "fragmentSrc": {},
		    "uniforms": {}
		   },
		   "WebGLSpriteBatch#flush~currentShader": {
		    "shaders[undefined]": {}
		   },
		   "WebGLSpriteBatch#renderBatch": {
		    "!type": "fn()",
		    "gl": {}
		   },
		   "WebGLSpriteBatch#stop": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "WebGLSpriteBatch#start": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "WebGLSpriteBatch#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "vertices": {},
		     "indices": {},
		     "currentBaseTexture": {},
		     "gl": {}
		    }
		   },
		   "WebGLStencilManager": {
		    "!type": "fn()",
		    "prototype": {
		     "stencilStack": {},
		     "reverse": {},
		     "count": {}
		    }
		   },
		   "WebGLStencilManager#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {}
		    }
		   },
		   "WebGLStencilManager#pushStencil": {
		    "!type": "fn()",
		    "gl": {},
		    "prototype": {
		     "reverse": {},
		     "count": {}
		    },
		    "level": {}
		   },
		   "WebGLStencilManager#bindGraphics": {
		    "!type": "fn()",
		    "prototype": {
		     "_currentGraphics": {}
		    },
		    "gl": {},
		    "projection": {},
		    "offset": {},
		    "shader": {}
		   },
		   "WebGLStencilManager#popStencil": {
		    "!type": "fn()",
		    "gl": {},
		    "level": {},
		    "prototype": {
		     "reverse": {}
		    }
		   },
		   "WebGLStencilManager#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "stencilStack": {},
		     "gl": {}
		    }
		   },
		   "glContexts": {},
		   "instances": {},
		   "WebGLRenderer": {
		    "!type": "fn(width: number, height: number, options: ?, options_view: +HTMLCanvasElement, options_transparent: bool, options_autoResize: bool, options_antialias: bool, options_preserveDrawingBuffer: bool, options_resolution: number)",
		    "i": {},
		    "options": {},
		    "prototype": {
		     "type": {},
		     "resolution": {},
		     "transparent": {},
		     "autoResize": {},
		     "preserveDrawingBuffer": {},
		     "clearBeforeRender": {},
		     "width": {},
		     "height": {},
		     "view": {},
		     "_contextOptions": {},
		     "projection": {},
		     "offset": {},
		     "shaderManager": {},
		     "spriteBatch": {},
		     "maskManager": {},
		     "filterManager": {},
		     "stencilManager": {},
		     "blendModeManager": {},
		     "renderSession": {}
		    }
		   },
		   "WebGLRenderer#_contextOptions": {
		    "alpha": {},
		    "antialias": {},
		    "premultipliedAlpha": {},
		    "stencil": {},
		    "preserveDrawingBuffer": {}
		   },
		   "WebGLRenderer#renderSession": {
		    "gl": {},
		    "drawCount": {},
		    "shaderManager": {},
		    "maskManager": {},
		    "filterManager": {},
		    "blendModeManager": {},
		    "spriteBatch": {},
		    "stencilManager": {},
		    "renderer": {},
		    "resolution": {}
		   },
		   "WebGLRenderer#constructor": {},
		   "WebGLRenderer#initContext": {
		    "!type": "fn()",
		    "gl": {},
		    "prototype": {
		     "gl": {},
		     "glContextId": {}
		    }
		   },
		   "WebGLRenderer#initContext~gl": {
		    "id": {}
		   },
		   "glContexts[undefined]": {},
		   "instances[undefined]": {},
		   "WebGLRenderer#initContext#renderSession": {
		    "gl": {}
		   },
		   "WebGLRenderer#render": {
		    "!type": "fn()",
		    "prototype": {
		     "__stage": {}
		    },
		    "gl": {}
		   },
		   "WebGLRenderer#renderDisplayObject": {
		    "!type": "fn()"
		   },
		   "WebGLRenderer#renderDisplayObject#renderSession": {
		    "drawCount": {},
		    "flipY": {},
		    "projection": {},
		    "offset": {}
		   },
		   "WebGLRenderer#resize": {
		    "!type": "fn()",
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "WebGLRenderer#resize#view": {
		    "width": {},
		    "height": {},
		    "style": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "WebGLRenderer#resize#projection": {
		    "x": {},
		    "y": {}
		   },
		   "WebGLRenderer#updateTexture": {
		    "!type": "fn()",
		    "gl": {}
		   },
		   "WebGLRenderer#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "projection": {},
		     "offset": {},
		     "shaderManager": {},
		     "spriteBatch": {},
		     "maskManager": {},
		     "filterManager": {},
		     "gl": {},
		     "renderSession": {}
		    }
		   },
		   "WebGLRenderer#mapBlendModes": {
		    "!type": "fn()",
		    "gl": {}
		   },
		   "blendModesWebGL": {},
		   "blendModesWebGL[undefined]": {},
		   "WebGLRenderer.glContextId": {},
		   "BaseTextureCache": {},
		   "BaseTextureCacheIdGenerator": {},
		   "BaseTexture": {
		    "!type": "fn(source: string, scaleMode: number)",
		    "prototype": {
		     "resolution": {},
		     "width": {},
		     "height": {},
		     "scaleMode": {},
		     "hasLoaded": {},
		     "source": {},
		     "_UID": {},
		     "premultipliedAlpha": {},
		     "_glTextures": {},
		     "mipmap": {},
		     "_dirty": {},
		     "imageUrl": {},
		     "_powerOf2": {}
		    },
		    "fromImage": {
		     "baseTexture": {},
		     "crossorigin": {},
		     "image": {}
		    },
		    "fromImage~image": {
		     "crossOrigin": {},
		     "src": {}
		    },
		    "fromImage~baseTexture": {
		     "imageUrl": {},
		     "resolution": {}
		    },
		    "fromCanvas": {
		     "baseTexture": {}
		    }
		   },
		   "BaseTexture#constructor": {},
		   "BaseTexture#forceLoaded": {
		    "!type": "fn()",
		    "prototype": {
		     "hasLoaded": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "BaseTexture#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "imageUrl": {},
		     "source": {}
		    }
		   },
		   "BaseTexture#destroy#source": {
		    "src": {}
		   },
		   "BaseTexture#updateSourceImage": {
		    "!type": "fn()",
		    "prototype": {
		     "hasLoaded": {}
		    }
		   },
		   "BaseTexture#updateSourceImage#source": {
		    "src": {}
		   },
		   "BaseTexture#dirty": {
		    "!type": "fn()",
		    "i": {},
		    "prototype": {
		     "_dirty[undefined]": {}
		    }
		   },
		   "BaseTexture#unloadFromGPU": {
		    "!type": "fn()",
		    "i": {},
		    "glTexture": {},
		    "gl": {}
		   },
		   "BaseTexture#unloadFromGPU#_glTextures": {
		    "length": {}
		   },
		   "BaseTexture.fromImage": {
		    "!type": "fn()"
		   },
		   "BaseTextureCache[undefined]": {},
		   "BaseTexture.fromCanvas": {
		    "!type": "fn()"
		   },
		   "RenderTexture": {
		    "!type": "fn(width: number, height: number, renderer: +CanvasRenderer|+WebGLRenderer, scaleMode: number, resolution: number)",
		    "prototype": {
		     "width": {},
		     "height": {},
		     "resolution": {},
		     "frame": {},
		     "crop": {},
		     "baseTexture": {},
		     "renderer": {},
		     "textureBuffer": {},
		     "render": {},
		     "projection": {},
		     "valid": {},
		     "tempMatrix": {}
		    },
		    "gl": {}
		   },
		   "RenderTexture#baseTexture": {
		    "width": {},
		    "height": {},
		    "_glTextures": {},
		    "resolution": {},
		    "scaleMode": {},
		    "hasLoaded": {},
		    "_dirty[undefined]": {},
		    "_glTextures[undefined]": {},
		    "source": {}
		   },
		   "RenderTexture#constructor": {},
		   "RenderTexture#resize": {
		    "!type": "fn()",
		    "prototype": {
		     "valid": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "RenderTexture#resize#frame": {
		    "width": {},
		    "height": {}
		   },
		   "RenderTexture#resize#crop": {
		    "width": {},
		    "height": {}
		   },
		   "RenderTexture#resize#baseTexture": {
		    "width": {},
		    "height": {}
		   },
		   "RenderTexture#resize#projection": {
		    "x": {},
		    "y": {}
		   },
		   "RenderTexture#clear": {
		    "!type": "fn()"
		   },
		   "RenderTexture#renderWebGL": {
		    "!type": "fn()",
		    "wt": {},
		    "i": {},
		    "gl": {}
		   },
		   "RenderTexture#renderWebGL#renderer": {
		    "spriteBatch": {
		     "dirty": {}
		    }
		   },
		   "RenderTexture#renderCanvas": {
		    "!type": "fn()",
		    "wt": {},
		    "i": {},
		    "realResolution": {}
		   },
		   "RenderTexture#renderCanvas#renderer": {
		    "resolution": {}
		   },
		   "RenderTexture#getImage": {
		    "!type": "fn()",
		    "image": {}
		   },
		   "RenderTexture#getImage~image": {
		    "src": {}
		   },
		   "RenderTexture#getBase64": {
		    "!type": "fn()"
		   },
		   "RenderTexture#getCanvas": {
		    "!type": "fn()",
		    "gl": {},
		    "width": {},
		    "height": {},
		    "webGLPixels": {},
		    "tempCanvas": {},
		    "canvasData": {}
		   },
		   "TextureCache": {},
		   "FrameCache": {},
		   "TextureSilentFail": {},
		   "TextureCacheIdGenerator": {},
		   "Texture": {
		    "!type": "fn(baseTexture: +BaseTexture, frame: +Rectangle, crop: +Rectangle, trim: +Rectangle)",
		    "prototype": {
		     "noFrame": {},
		     "baseTexture": {},
		     "frame": {},
		     "trim": {},
		     "valid": {},
		     "isTiling": {},
		     "requiresUpdate": {},
		     "requiresReTint": {},
		     "_uvs": {},
		     "width": {},
		     "height": {},
		     "crop": {}
		    },
		    "frame": {},
		    "baseTexture": {},
		    "fromImage": {
		     "texture": {}
		    },
		    "fromFrame": {
		     "texture": {}
		    },
		    "fromCanvas": {
		     "baseTexture": {}
		    },
		    "removeTextureFromCache": {
		     "texture": {}
		    }
		   },
		   "Texture#constructor": {},
		   "Texture#onBaseTextureLoaded": {
		    "!type": "fn()",
		    "baseTexture": {},
		    "prototype": {
		     "frame": {}
		    }
		   },
		   "Texture#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "valid": {}
		    }
		   },
		   "Texture#setFrame": {
		    "!type": "fn()",
		    "prototype": {
		     "noFrame": {},
		     "frame": {},
		     "width": {},
		     "height": {},
		     "valid": {}
		    }
		   },
		   "Texture#setFrame#crop": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {}
		   },
		   "Texture#setFrame#frame": {
		    "width": {},
		    "height": {}
		   },
		   "Texture#_updateUvs": {
		    "!type": "fn()",
		    "prototype": {
		     "_uvs": {}
		    },
		    "frame": {},
		    "tw": {},
		    "th": {}
		   },
		   "Texture#_updateUvs#_uvs": {
		    "x0": {},
		    "y0": {},
		    "x1": {},
		    "y1": {},
		    "x2": {},
		    "y2": {},
		    "x3": {},
		    "y3": {}
		   },
		   "Texture.fromImage": {
		    "!type": "fn()"
		   },
		   "TextureCache[undefined]": {},
		   "Texture.fromFrame": {
		    "!type": "fn()"
		   },
		   "Texture.fromCanvas": {
		    "!type": "fn()"
		   },
		   "Texture.addTextureToCache": {
		    "!type": "fn()"
		   },
		   "Texture.removeTextureFromCache": {
		    "!type": "fn()"
		   },
		   "TextureUvs": {
		    "!type": "fn()",
		    "prototype": {
		     "x0": {},
		     "y0": {},
		     "x1": {},
		     "y1": {},
		     "x2": {},
		     "y2": {},
		     "x3": {},
		     "y3": {}
		    }
		   },
		   "CanvasPool": {
		    "create": {
		     "!type": "fn()",
		     "idx": {},
		     "canvas": {},
		     "container": {}
		    },
		    "create~container": {
		     "parent": {},
		     "canvas": {}
		    },
		    "create~canvas": {
		     "width": {},
		     "height": {}
		    },
		    "getFirst": {
		     "!type": "fn()",
		     "pool": {},
		     "i": {}
		    },
		    "remove": {
		     "!type": "fn()",
		     "pool": {},
		     "i": {}
		    },
		    "remove~pool": {
		     "undefined].parent": {}
		    },
		    "removeByCanvas": {
		     "!type": "fn()",
		     "pool": {},
		     "i": {}
		    },
		    "removeByCanvas~pool": {
		     "undefined].parent": {}
		    },
		    "getTotal": {
		     "!type": "fn()",
		     "pool": {},
		     "c": {},
		     "i": {}
		    },
		    "getFree": {
		     "!type": "fn()",
		     "pool": {},
		     "c": {},
		     "i": {}
		    },
		    "pool": {}
		   },
		   "CanvasPool.pool[undefined].parent": {},
		   "EventTarget": {
		    "call": {
		     "!type": "fn()",
		     "obj": {}
		    },
		    "mixin": {
		     "!type": "fn()"
		    }
		   },
		   "Event": {
		    "!type": "fn(target: ?, name: string, data: ?)",
		    "prototype": {
		     "__isEventObject": {},
		     "stopped": {},
		     "stoppedImmediate": {},
		     "target": {},
		     "type": {},
		     "data": {},
		     "content": {},
		     "timeStamp": {}
		    }
		   },
		   "Event#stopPropagation": {
		    "!type": "fn()",
		    "prototype": {
		     "stopped": {}
		    }
		   },
		   "Event#stopImmediatePropagation": {
		    "!type": "fn()",
		    "prototype": {
		     "stoppedImmediate": {}
		    }
		   },
		   "PolyK": {
		    "Triangulate": {
		     "sign": {},
		     "n": {},
		     "tgs": {},
		     "avl": {},
		     "i": {},
		     "al": {},
		     "i0": {},
		     "i1": {},
		     "i2": {},
		     "ax": {},
		     "ay": {},
		     "bx": {},
		     "by": {},
		     "cx": {},
		     "cy": {},
		     "earFound": {},
		     "j": {},
		     "vi": {}
		    },
		    "_PointInTriangle": {
		     "v0x": {},
		     "v0y": {},
		     "v1x": {},
		     "v1y": {},
		     "v2x": {},
		     "v2y": {},
		     "dot00": {},
		     "dot01": {},
		     "dot02": {},
		     "dot11": {},
		     "dot12": {},
		     "invDenom": {},
		     "u": {},
		     "v": {}
		    }
		   },
		   "PolyK.Triangulate": {
		    "!type": "fn()"
		   },
		   "PolyK._PointInTriangle": {
		    "!type": "fn()"
		   },
		   "PolyK._convex": {
		    "!type": "fn()"
		   },
		   "hex2rgb": {
		    "!type": "fn()"
		   },
		   "rgb2hex": {
		    "!type": "fn()"
		   },
		   "canUseNewCanvasBlendModes": {
		    "!type": "fn()",
		    "pngHead": {},
		    "pngEnd": {},
		    "magenta": {},
		    "yellow": {},
		    "canvas": {},
		    "context": {},
		    "data": {}
		   },
		   "canUseNewCanvasBlendModes~magenta": {
		    "src": {}
		   },
		   "canUseNewCanvasBlendModes~yellow": {
		    "src": {}
		   },
		   "canUseNewCanvasBlendModes~context": {
		    "globalCompositeOperation": {}
		   },
		   "getNextPowerOfTwo": {
		    "!type": "fn()",
		    "result": {}
		   },
		   "isPowerOfTwo": {
		    "!type": "fn()"
		   },
		   "blendModes": {},
		   "scaleModes": {},
		   "Texture.emptyTexture": {},
		   "DisplayObject._tempMatrix": {},
		   "RenderTexture.tempMatrix": {},
		   "Graphics.POLY": {},
		   "Graphics.RECT": {},
		   "Graphics.CIRC": {},
		   "Graphics.ELIP": {},
		   "Graphics.RREC": {}
		  },
		  "graphics": {
		   "dirty": {},
		   "_webGL[undefined]": {
		    "lastIndex": {},
		    "data": {},
		    "gl": {}
		   },
		   "clearDirty": {}
		  },
		  "maskData": {
		   "worldAlpha": {}
		  },
		  "canvas": {
		   "width": {},
		   "height": {},
		   "_pixiId": {},
		   "style": {
		    "backgroundColor": {},
		    "msTouchAction": {},
		    "'ms-touch-action'": {},
		    "'touch-action'": {},
		    "'-webkit-touch-callout'": {},
		    "'-webkit-user-select'": {},
		    "'-khtml-user-select'": {},
		    "'-moz-user-select'": {},
		    "'-ms-user-select'": {},
		    "'user-select'": {},
		    "'-webkit-tap-highlight-color'": {},
		    "'image-rendering'": {},
		    "msInterpolationMode": {}
		   }
		  },
		  "uniform": {
		   "_init": {}
		  },
		  "filterBlock": {
		   "_filterArea": {},
		   "_glFilterTexture": {}
		  },
		  "filter": {
		   "shaders[undefined]": {},
		   "uniforms": {
		    "dimensions": {
		     "value[0]": {},
		     "value[1]": {},
		     "value[2]": {},
		     "value[3]": {}
		    }
		   }
		  },
		  "graphicsData": {
		   "points": {}
		  },
		  "webGLData": {
		   "points": {},
		   "alpha": {},
		   "color": {}
		  },
		  "texture": {
		   "_glTextures[undefined]": {},
		   "_dirty[undefined]": {}
		  },
		  "obj": {
		   "listeners": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {}
		    }
		   },
		   "emit": {},
		   "dispatchEvent": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {}
		    },
		    "data": {},
		    "eventName": {},
		    "listeners": {},
		    "length": {},
		    "fn": {},
		    "i": {}
		   },
		   "on": {},
		   "addEventListener": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {},
		     "_listeners[undefined]": {}
		    }
		   },
		   "once": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {}
		    },
		    "self": {},
		    "onceHandlerWrapper": {
		     "!type": "fn()"
		    }
		   },
		   "once~onceHandlerWrapper": {
		    "_originalHandler": {}
		   },
		   "off": {},
		   "removeEventListener": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {}
		    },
		    "list": {},
		    "i": {}
		   },
		   "removeAllListeners": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {}
		    }
		   }
		  },
		  "Math": {
		   "trunc": {
		    "!type": "fn()"
		   }
		  },
		  "Function": {
		   "prototype": {
		    "bind": {}
		   }
		  },
		  "<anonymous>~bound": {
		   "args": {}
		  },
		  "Array": {
		   "isArray": {
		    "!type": "fn()"
		   },
		   "prototype": {
		    "forEach": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "Array#forEach": {
		   "t": {},
		   "len": {},
		   "thisArg": {},
		   "i": {}
		  },
		  "CheapArray": {
		   "proto": {}
		  },
		  "window[undefined]": {
		   "i": {}
		  },
		  "gainNode": {
		   "gain": {
		    "value": {}
		   }
		  },
		  "_sound": {
		   "volume": {}
		  },
		  "masterGain": {
		   "gain": {
		    "value": {}
		   }
		  },
		  "_sounds[undefined]": {
		   "volume": {}
		  },
		  "<anonymous>~canvas": {
		   "screencanvas": {}
		  },
		  "navigator": {
		   "getUserMedia": {},
		   "vibrate": {}
		  },
		  "value": {
		   "index": {}
		  },
		  "point": {
		   "x": {},
		   "y": {}
		  },
		  "_mc": {
		   "cw": {},
		   "ch": {}
		  },
		  "arguments[undefined]": {
		   "chainedTween": {}
		  },
		  "tween": {
		   "_manager": {}
		  },
		  "out": {
		   "rgba": {},
		   "color": {},
		   "color32": {}
		  },
		  "item": {
		   "prev": {
		    "next": {}
		   },
		   "next": {
		    "prev": {}
		   }
		  }
		 };
});