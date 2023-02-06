module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1675241540296, function(require, module, exports) {


var _f = require("@antv/f2");
var _f2Context = require("@antv/f2-context");
function wrapEvent(e) {
  if (!e) return;
  if (!e.preventDefault) {
    e.preventDefault = function () {};
  }
  return e;
}
var getPixelRatio = function getPixelRatio() {
  return my.getSystemInfoSync().pixelRatio;
};
// 判断是否是新版 canvas 所支持的调用方法（AppX 2.7.0 及以上）
var isAppX2CanvasEnv = function isAppX2CanvasEnv() {
  return my.canIUse('canvas.onReady') && my.canIUse('createSelectorQuery.return.node');
};
Component({
  props: {
    onRender: function onRender(_props) {},
    // width height 会作为元素兜底的宽高使用
    width: null,
    height: null,
    type: '2d' // canvas 2d, 基础库 2.7 以上支持
  },
  /**
   * 组件创建时触发
   * 注意：
   *    使用该生命周期，项目配置需启用："component2": true
   */
  onInit: function onInit() {
    this.setCanvasId();
  },
  didMount: function didMount() {
    var _this = this;
    if (isAppX2CanvasEnv()) {
      return;
    }
    var id = this.data.id;
    var query = my.createSelectorQuery({
      page: this.$page
    });
    query.select("#".concat(id)).boundingClientRect().exec(function (res) {
      // 获取画布实际宽高, 用props的宽高做失败兜底
      var _ref = res && res[0] ? res[0] : _this.props,
        width = _ref.width,
        height = _ref.height;
      var pixelRatio = getPixelRatio();
      // 高清解决方案
      _this.setData({
        width: width * pixelRatio,
        height: height * pixelRatio
      }, function () {
        var myCtx = my.createCanvasContext(id);
        var context = (0, _f2Context.my)(myCtx);
        _this.canvasRender({
          width: width,
          height: height,
          context: context,
          pixelRatio: pixelRatio
        });
      });
    });
  },
  didUpdate: function didUpdate() {
    var canvas = this.canvas,
      props = this.props;
    if (!canvas) return;
    var children = props.onRender(props);
    canvas.update({
      children: children
    });
  },
  didUnmount: function didUnmount() {
    var canvas = this.canvas;
    if (!canvas) return;
    canvas.destroy();
  },
  methods: {
    setCanvasId: function setCanvasId() {
      var pageId = this.$page && this.$page.$id || 0;
      var id = "f2-canvas-".concat(pageId, "-").concat(this.$id);
      this.setData({
        id: id
      });
    },
    onCanvasReady: function onCanvasReady() {
      var _this2 = this;
      var id = this.data.id;
      var query = my.createSelectorQuery();
      query.select("#".concat(id))
      // @ts-ignore
      .node().exec(function (res) {
        if (!res[0]) {
          return;
        }
        var canvas = res[0].node;
        var width = canvas.width,
          height = canvas.height;
        var pixelRatio = getPixelRatio();
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        var context = canvas.getContext('2d');
        _this2.canvasRender({
          width: width,
          height: height,
          pixelRatio: pixelRatio,
          context: context
        });
      });
    },
    canvasRender: function canvasRender(_ref2) {
      var width = _ref2.width,
        height = _ref2.height,
        pixelRatio = _ref2.pixelRatio,
        context = _ref2.context;
      if (!width || !height) {
        return;
      }
      var children = this.props.onRender(this.props);
      var canvas = new _f.Canvas({
        pixelRatio: pixelRatio,
        width: width,
        height: height,
        context: context,
        children: children
      });
      canvas.render();
      this.canvas = canvas;
      this.canvasEl = canvas.canvas.get('el');
    },
    click: function click(e) {
      var canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      var event = wrapEvent(e);
      var detail = e.detail,
        target = e.target;
      var x = detail.x,
        y = detail.y;
      var _target$offsetLeft = target.offsetLeft,
        offsetLeft = _target$offsetLeft === void 0 ? 0 : _target$offsetLeft,
        _target$offsetTop = target.offsetTop,
        offsetTop = _target$offsetTop === void 0 ? 0 : _target$offsetTop;
      // 包装成 touch 对象
      event.touches = [{
        x: x - offsetLeft,
        y: y - offsetTop
      }];
      canvasEl.dispatchEvent('click', event);
    },
    touchStart: function touchStart(e) {
      var canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      canvasEl.dispatchEvent('touchstart', wrapEvent(e));
    },
    touchMove: function touchMove(e) {
      var canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      canvasEl.dispatchEvent('touchmove', wrapEvent(e));
    },
    touchEnd: function touchEnd(e) {
      var canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      canvasEl.dispatchEvent('touchend', wrapEvent(e));
    }
  }
});
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1675241540296);
})()
//miniprogram-npm-outsideDeps=["@antv/f2","@antv/f2-context"]
//# sourceMappingURL=index.js.map