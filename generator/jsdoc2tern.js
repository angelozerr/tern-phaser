(function(root, mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports); // CommonJS
    if (typeof define == "function" && define.amd) return define([ "exports" ], mod); // AMD
    mod(root.jsdoc2tern || (root.jsdoc2tern = {})); // Plain browser env
})(this,function(exports) {
  "use strict";
  
  var Generator = exports.Generator = function(options) {
    this.options = options;
  };
  
  Generator.prototype.process = function(jsDoc) {
    var ternDef = {
      "!name" : this.options.name,
      "!define" : {
        
      }
    };
    if (this.options.initialize) this.options.initialize(ternDef);
    this.visitDoc(jsDoc, ternDef);
    return ternDef;
  };
  
  Generator.prototype.visitDoc = function(jsDoc, ternDef) { 
    // Iterate over all jsdoc items
    for ( var i = 0; i < jsDoc.length; i++) {
      var jsdocItem = jsDoc[i];
      if (this.options.tweek) this.options.tweek(jsdocItem);
      if (isIgnore(jsdocItem)) continue;
      var parent = getParent(jsdocItem, ternDef);
      if (parent) {
        var type = null, description = jsdocItem.description; 
        switch(jsdocItem.kind) {         
          case "member":            
            var properties = jsdocItem.properties;
            if (properties && properties[0]) {
              var prop = properties[0];
              description = prop.description;
              type = getParamType(prop, this.options, true);
            }
            if (type == null) {
              type = getParamType(jsdocItem, this.options, true);
            } 
            break;
          case "function":
            type = getFunctionType(jsdocItem, ternDef, this.options);
            break;
          case "class":
            type = getFunctionType(jsdocItem, ternDef, this.options);
            break;
          case "event":
            type = null;            
            break;
          case "mixin":
            type = null;            
            break;
          case "constant":
            type = getParamType(jsdocItem, this.options);
            break;
          case "typedef":
            type = null;            
            break;
          case "package":
            type = null;            
            break;                  
          default:
            //console.log("   " + jsdocItem.name)
        }
        if (type) parent["!type"] = type;
        if (description) parent["!doc"] = description;
      }
    }
  }
  
  function isIgnore(jsdocItem) {
    if (jsdocItem.access === "private") return true;
    if(jsdocItem.undocumented == true) return true;
    if (jsdocItem.kind == "member" && jsdocItem.scope == "inner") return true;
    if (jsdocItem.kind == "file") return true;
  }
  
  function getParent(jsdocItem, ternDef) {
	var parent = ternDef, memberof = getMemberOf(jsdocItem);
    if (memberof) { 
      var names = memberof.split(".");    
        for (var i = 0; i < names.length; i++) {
          parent = getOrCreate(parent, names[i])
        }
    }
    if (jsdocItem.scope == "instance") parent = getOrCreate(parent, "prototype");
    return getOrCreate(parent, jsdocItem.name);
  }
  
  function getMemberOf(jsdocItem) {
	  var memberof = jsdocItem.memberof
	  if (memberof && startsWith(memberof, "<anonymous>~")) return memberof.substring("<anonymous>~".length, memberof.length); 
	  return memberof;	  
  }
  
  function getOrCreate(item, name) {
    if (item[name]) return item[name];
    return item[name] = {};
  }
  
  var getFunctionType = function(jsdocItem, ternDef, options) {
    var type = "fn(", params = jsdocItem.params;
    if (params) {
      var objName = jsdocItem.longname.replace(".", "").replace("<", "").replace(">", "").replace("#", "").replace("~", "");
      for (var i = 0; i < params.length; i++) {    	
        var param = params[i], paramType = getParamType(param, options), paramName = param.name;
        if (!paramName) paramName = "arg" + i;
        var index = paramName.indexOf(".");
        if (index == -1) {
          if (i > 0) type+= ", ";
          // param name doesn't contains "."
          // check if param is object literal 
          if (param.type && param.type.names && param.type.names[0] == "object") {
            if (i + 1 < params.length) {
              if (params[i + 1].name.indexOf(".") != -1) {
                // create object type in define
                paramType = objName + param.name.charAt(0).toUpperCase() + param.name.substring(1, param.name.length); 
                getOrCreate(ternDef["!define"], paramType);
                paramType = "+" + paramType; 
              }
            }
          }
          type+= paramName ? paramName : "arg" + i; 
          type+= ": ";
          type+= paramType;          
        } else {
          var n = paramName.substring(0, index), objLitName = objName + n.charAt(0).toUpperCase() + n.substring(1, n.length);
          var ternItem = getOrCreate(ternDef["!define"], objLitName);
          ternItem = getOrCreate(ternItem, paramName.substring(index + 1, paramName.length));
          ternItem["!type"] = paramType;
          if (param.description) ternItem["!doc"] = param.description;
        }
	  }
    }
    type+= ")";
    if (jsdocItem.returns) {
      type+= " -> ";
      for (var i = 0; i < jsdocItem.returns.length; i++) {
        if (i > 0) type+= "|";
        type+= getParamType(jsdocItem.returns[i], options);
      }
    }
    return type;
  }
  
  var getParamType = function(param, options, returnNullIfUnkwown)  {
    var jsdocType = param.type, type = "";
    if (jsdocType) {
      var names = jsdocType.names, t, firstTypeIsFn = false;
      for (var i = 0; i < names.length; i++) {
    	  t = getTernType(names[i], options);    	  
    	  if (t) {
    		if(i == 0 && startsWith(t, "fn(")) {
    		  firstTypeIsFn = true;
    		  type += t;
        	} else {
        	  if (firstTypeIsFn) {
        		  type = t + "|" + type;
            	  firstTypeIsFn = false;
        	  } else {
        		if (i > 0) type+= "|";
          	    type += t;  
        	  }        		
        	}    	     
    	  }
	  }
    }
    if (type != "") return type;
    return returnNullIfUnkwown ? null : "?";
  }
  
  var getTernType = function(name, options) {
	var overridedType = options.getTernType ? options.getTernType(name) : null;
	if (overridedType) name = overridedType;
	switch(name.toLowerCase()) {
	  case "string":
		return "string";
	  case "integer":
	  case "number":
		return "number";
	  case "boolean":
	  case "bool":		  
		return "bool";
	  case "object":		
	  case "*":
		return "?";
	  case "function":
        return "fn()";	
      default:
    	if (startsWith(name, "Array")) {
    	  // todo : improve to extract type of the array Array.<string> => [string]
    	  return "[?]";	
    	}
        if (startsWith(name, "module:")) {
          //name = getModuleName(name);
        	//return "?";
    	}
        if (name.indexOf("/") != -1) {
        	return "?";
        }
        
        var type = "";
  	    type += "+";
  	    type += name;
  	    return type;    	  
	}
  }
  
  var startsWith = function(str, prefix) {
	return str && str.slice(0, prefix.length) == prefix;
  }
  
  var endsWith = function(str, suffix) {
    return str && str.slice(-suffix.length) == suffix;
  }  
    
});  