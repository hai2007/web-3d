
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/webgl/quick/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('40');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('41');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/_createClass(function _class2() {
  _classCallCheck(this, _class2);
})) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/webgl/quick/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= ""
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/webgl/quick/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['41']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"doc-view\">\n    <header id=\"fixed-top\">\n        快速入门\n    </header>\n    <p>\n        这里，我们将向大家演示WebGL的一些朴素说明和基本使用，即使你后续使用第三方3D渲染引擎进行绘制，这里的基本概念依旧是非常有益的，或者说是必要的。\n    </p>\n    <p>\n        在演示和说明的时候，我们选择基于\n        <a href=\"https://hai2007.gitee.io/image3d/index.html#/api\" target=\"_blank\">image3D.js</a>\n        来作为依赖库，但由于其朴素的语法几乎和原生WebGL是一致的，因此我们认为这不是一个糟糕的选择（如果直接使用原生，代码会变得过于冗余，不好说明）。\n    </p>\n    <h2 id=\"fixed-struct\">\n        绘制流程\n    </h2>\n    <p>\n        一般最通用的绘制流程大致如下：\n    </p>\n    <p>\n        <span class=\"pip-block\">\n            准备好着色器\n        </span>\n        →\n        <span class=\"pip-block\">\n            数据写入缓冲区并完成分配\n        </span>\n        →\n        <span class=\"pip-block\">\n            调用绘制方法进行绘制\n        </span>\n    </p>\n    <p>\n        具体的代码我们可以稍后说明，让我们先来理解一下上面的过程。\n    </p>\n    <p>\n        不知道你是不是有这样的疑惑，为什么3D的绘制不可以像2D那样，提供一个画笔，画笔上有绘制各种几何体的方法？\n    </p>\n    <p>\n\n    </p>\n    <h2 id=\"fixed-shader\">\n        着色器\n    </h2>\n    <p>\n\n    </p>\n    <h2 id=\"fixed-object\">\n        3D对象\n    </h2>\n    <p>\n\n    </p>\n    <h2 id=\"fixed-data\">\n        传递数据\n    </h2>\n    <p>\n\n    </p>\n    <h2 id=\"fixed-draw\">\n        绘制\n    </h2>\n    <p>\n\n    </p>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
