(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/util/eventListener.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd5b8a+2llBIxJAYR+ClLZej', 'eventListener', __filename);
// Script/util/eventListener.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var EventListener = function EventListener(obj) {
    var Register = {};
    obj.on = function (type, method) {
        if (!Register.hasOwnProperty(type)) {
            Register[type] = [];
        }
        // 检测重复
        var handerList = Register[type];
        for (var i = 0; i < handerList.length; i++) {
            var hander = handerList[i];
            if (hander == method) {
                console.log(' EventListener on method error : repeat method ');
                return;
            }
        }
        Register[type].push(method);
        console.log(' EventListener on method type = ' + type);
    };
    obj.fire = function (type) {
        if (Register.hasOwnProperty(type)) {
            var handerList = Register[type];
            var args = [];
            for (var j = 1; j < arguments.length; j++) {
                args.push(arguments[j]);
            }
            console.log('handerList.length = ' + handerList.length);
            for (var i = 0; i < handerList.length; i++) {
                var hander = handerList[i];
                hander.apply(this, args);
            }
        }
    };
    obj.off = function (type, method) {
        if (Register.hasOwnProperty(type)) {
            var handlerList = Register[type];
            for (var i = 0; i < handlerList.length; i++) {
                if (handlerList[i] === method) {
                    handlerList.splice(i, 1);
                    console.log("off handler name = " + type);
                }
            }
        }
    };
    obj.destroy = function () {
        Register = {};
    };
    return obj;
};
exports.default = EventListener;
module.exports = exports['default'];

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=eventListener.js.map
        