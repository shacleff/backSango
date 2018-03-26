(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gamedata/playerData.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9c338LeC9lERqgvnfTU/eHK', 'playerData', __filename);
// Script/gamedata/playerData.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var PlayerData = function PlayerData() {
    var that = {};
    that.uid = '';
    that.nickname = '';
    that.avatar = '';
    that.vip = 0;
    that.deadBattle = 0;
    that.deadStarve = 0;
    return that;
};
exports.default = PlayerData;
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
        //# sourceMappingURL=playerData.js.map
        