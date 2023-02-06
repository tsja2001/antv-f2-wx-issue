module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1675241540259, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var wx_1 = require("./context/wx");
exports.wx = wx_1.default;
var my_1 = require("./context/my");
exports.my = my_1.default;
var util_1 = require("./util");
var auto = function (ctx) {
    if (util_1.isWx) {
        return wx_1.default(ctx);
    }
    if (util_1.isMy) {
        return my_1.default(ctx);
    }
    return ctx;
};
exports.auto = auto;

}, function(modId) {var map = {"./context/wx":1675241540260,"./context/my":1675241540261,"./util":1675241540262}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1675241540260, function(require, module, exports) {

// 微信程序的context适配
Object.defineProperty(exports, "__esModule", { value: true });
var CAPITALIZED_ATTRS_MAP = {
    fontSize: 'FontSize',
    opacity: 'GlobalAlpha',
    lineDash: 'LineDash',
    textAlign: 'TextAlign',
};
/**
 * wxapp textAlign align 可选值为 left|center|right
 * 标准canvas textAlign align 可选值为 left|center|right|start|end
 */
var TEXT_ALIGN_MAP = {
    start: 'left',
    end: 'right',
};
exports.default = (function (ctx) {
    Object.keys(CAPITALIZED_ATTRS_MAP).map(function (style) {
        Object.defineProperty(ctx, style, {
            set: function (value) {
                if (style === 'textAlign') {
                    value = TEXT_ALIGN_MAP[value] ? TEXT_ALIGN_MAP[value] : value;
                }
                var name = 'set' + CAPITALIZED_ATTRS_MAP[style];
                ctx[name](value);
            }
        });
        return style;
    });
});

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1675241540261, function(require, module, exports) {

// 支付宝小程序的context适配
Object.defineProperty(exports, "__esModule", { value: true });
var CAPITALIZED_ATTRS_MAP = {
    fillStyle: 'FillStyle',
    fontSize: 'FontSize',
    globalAlpha: 'GlobalAlpha',
    opacity: 'GlobalAlpha',
    lineCap: 'LineCap',
    lineJoin: 'LineJoin',
    lineWidth: 'LineWidth',
    miterLimit: 'MiterLimit',
    strokeStyle: 'StrokeStyle',
    textAlign: 'TextAlign',
    textBaseline: 'TextBaseline',
    shadow: 'Shadow',
    font: 'Font'
};
function strLen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
            len++;
        }
        else {
            len += 2;
        }
    }
    return len;
}
exports.default = (function (ctx) {
    Object.keys(CAPITALIZED_ATTRS_MAP).map(function (key) {
        Object.defineProperty(ctx, key, {
            set: function (value) {
                // 记录最新设置的值
                ctx["__" + key] = value;
                if (key === 'shadow' && ctx.setShadow && Array.isArray(value)) {
                    ctx.setShadow(value[0], value[1], value[2], value[3]);
                    return;
                }
                var name = 'set' + CAPITALIZED_ATTRS_MAP[key];
                if (!ctx[name]) {
                    return;
                }
                ctx[name](value);
            }
        });
        return key;
    });
    // 钉钉钉钉小程序框架不支持 measureText 方法，用此方法 mock
    if (!ctx.measureText) {
        ctx.measureText = function (text) {
            var fontSize = 12;
            var font = ctx.__font;
            if (font) {
                fontSize = parseInt(font.split(' ')[3], 10);
            }
            fontSize /= 2;
            return {
                width: strLen(text) * fontSize
            };
        };
    }
    return ctx;
});

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1675241540262, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
// weixin miniprogram
// @ts-ignore
var isWx = (typeof wx === 'object') && (typeof wx.getSystemInfoSync === 'function');
exports.isWx = isWx;
// ant miniprogram
// @ts-ignore
var isMy = (typeof my === 'object') && (typeof my.getSystemInfoSync === 'function');
exports.isMy = isMy;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1675241540259);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map