
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

__etcpack__scope_args__=window.__etcpack__getBundle('45');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('46');
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
window.__etcpack__bundleSrc__['45']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= ""
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/webgl/quick/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['46']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"doc-view\">\n    <header id=\"fixed-top\">\n        快速入门\n    </header>\n    <p>\n        这里，我们将向大家演示WebGL的一些朴素说明和基本使用，即使你后续使用第三方3D渲染引擎进行绘制，这里的基本概念依旧是非常有益的，或者说是必要的。\n    </p>\n    <p>\n        在演示和说明的时候，我们选择基于\n        <a href=\"https://github.com/hai2007/image3D\" target=\"_blank\">image3D.js</a>\n        来作为依赖库，但由于其朴素的语法几乎和原生WebGL是一致的，因此我们认为这不是一个糟糕的选择（如果直接使用原生，代码会变得过于冗余，不好说明）。\n    </p>\n    <p>\n        在后续的说明中，你都无需查阅别的文档，当然，如果你想知道的更具体，也可以直接访问\n        <a href=\"https://hai2007.gitee.io/image3d/\" target=\"_blank\">image3D.js 文档</a>\n        进行查阅。\n    </p>\n    <h2 id=\"fixed-struct\">\n        绘制流程\n    </h2>\n    <p>\n        一般最通用的绘制流程大致如下：\n    </p>\n    <p>\n        <span class=\"pip-block\">\n            准备好着色器\n        </span>\n        →\n        <span class=\"pip-block\">\n            数据写入缓冲区并完成分配\n        </span>\n        →\n        <span class=\"pip-block\">\n            调用绘制方法进行绘制\n        </span>\n    </p>\n    <p>\n        不知道你是否可以理解上面每个步骤是在干什么，我们下面将通过一个逐渐丰富的例子来进行解释。\n    </p>\n    <p>\n        你可以提前看看我们最终要绘制的效果：\n    </p>\n    <img src=\"./images/webgl-two-function.png\" />\n    <p>\n        这是二元函数 ： y=x<sup>2</sup> + z<sup>2</sup> 的图像。\n    </p>\n    <button ui-goto-example='webgl-two-function'>查看用例>>></button>\n    <h2 id=\"fixed-shader\">\n        着色器\n    </h2>\n    <p>\n        绘制的第一步，就是准备好两个着色器：\n        <span class=\"important\">\n            顶点着色器\n        </span>\n        和\n        <span class=\"important\">\n            片段着色器\n        </span>\n        。前者用于描述绘制的图形的点的位置，后者用于描述每个点的颜色。\n    </p>\n    <p>\n        可能这样说你会无法理解，其实简单的说就是：我们在绘图的时候，会一次性的把数据都传递给GPU，传递给GPU的数据需要一些\"整理\"后再使用，而着色器就是驻留在GPU上的这段\"整理程序\"。\n    </p>\n    <p>\n        我们传递的数据是什么？不就是点的位置和点的颜色吗。所以，着色器就分为了顶点着色器和片段着色器（有时候也叫片元着色器），前者处理点，后者处理颜色。\n    </p>\n    <p>\n        所以，让我们先看看这里的顶点着色器的具体代码：\n    </p>\n    <pre ui-code>\nattribute vec4 a_position;\nattribute vec4 a_color;\nvarying vec4 v_color;\nvoid main(){\n    gl_Position = a_position;\n    v_color = a_color;\n}\n    </pre>\n    <p>\n        内置变量\n        <span class=\"important\">gl_Position</span>\n        就是绘图最终接收的点的数据，而我们定义的变量\n        <span class=\"important\">a_position</span>\n        好比一个管道，我们后续可以给这个变量赋值，也就间接的给gl_Position赋值了（也就是点的位置）。\n    </p>\n    <p>\n        那\n        <span class=\"important\">v_color</span>\n        是什么？你可以理解，绘图的时候，是以点为主的，每个点的颜色，需要借助点的位置来设置，而v_color就是位置到颜色的桥梁。还是直接看看片段着色器：\n    </p>\n    <pre ui-code>\nprecision mediump float;\nvarying vec4 v_color;\nvoid main(){\n    gl_FragColor=v_color;\n}\n    </pre>\n    <p>\n        同样的存在一个内置变量，这里叫\n        <span class=\"important\">gl_FragColor</span>，\n        其接收了来自顶点着色器的v_color。\n    </p>\n    <p>\n        我不知道你是否理解了上面的行为，不过你可能也感觉到了，点的位置和颜色如何处理已经准备好了，后续我们只需要借助a_position和a_color就可以设置数据了。\n    </p>\n    <h2 id=\"fixed-object\">\n        3D对象\n    </h2>\n    <p>\n        在传递数据前，我们先就基于这两个着色器创建3D对象，这一步非常简单，直接看代码：\n    </p>\n    <pre ui-code>\nvar image3d = new image3D(document.getElementsByTagName('canvas')[0], {\n    \"vertex-shader\": vsCode,\n    \"fragment-shader\": fsCode,\n    depth: true\n});\n    </pre>\n    <p>\n        后续的所有操作，包括传递绘制和绘制等，直接调用这个对象上的接口就可以了。\n    </p>\n    <p>\n        特别说明：vsCode和fsCode就是上面两个着色器的代码，是字符串。\n    </p>\n    <h2 id=\"fixed-data\">\n        传递数据\n    </h2>\n    <p>\n        终于，可以给GPU传递数据了，所以，我们先来准备好数据：\n    </p>\n    <pre ui-code>\nvar points = [];\n/**\n    具体的写法你可以直接看最终的代码，获取的思路大概就是：\n\n    三个点拼接成一个三角形，\n    每个点由6个数据组成，前3个表示点的位置，后3个表示点的颜色，\n    而一个个三角形拼接成最终的图形。\n*/\n\n// 因此，点的个数就是\nvar num = points.length / 6;\n    </pre>\n    <p>\n        这些三角形如何确定的？对xoz面，范围是-1 ～ 1，切割成一个个正方形，然后斜切一下就可以了：\n    </p>\n    <img src=\"./images/webgl-two-function_calc-tan.png\" />\n    <p>\n        对于y值，由 y=x<sup>2</sup> + z<sup>2</sup> 计算获取。\n    </p>\n    <p>\n        数据准备好了，直接设置即可：\n    </p>\n    <pre ui-code>\n        image3d.Buffer().write(new Float32Array(points)).use('a_position', 3, 6, 0).use('a_color', 3, 6, 3);\n    </pre>\n    <p>\n        数据写入缓冲区，然后分配给a_position和a_color即可。\n    </p>\n    <h2 id=\"fixed-draw\">\n        绘制\n    </h2>\n    <p>\n        因为是三角形，一共num个，直接执行绘制方法即可：\n    </p>\n    <pre ui-code>\n        image3d.Painter().drawTriangle(0, num);\n    </pre>\n    <h2 id=\"fixed-matrix4\">\n        变换\n    </h2>\n    <p>\n        虽然上面的话，图形应该已经出来了，不过，我们看最终的例子好像一直在旋转，那旋转效果是如何出来的？\n    </p>\n    <p>\n        聪明的你一定想到了顶点着色器，是的，我们只需要修改一下顶点着色器中内置变量gl_Position接收的值，让其都和一个矩阵相乘就可以了。着色器中对应代码修改：\n    </p>\n    <pre ui-code>\n        gl_Position=u_matrix * a_position;\n    </pre>\n    <p>\n        后续，我们不停的重新绘制，而在绘制前，都传递一个新的矩阵即可：\n    </p>\n    <pre ui-code>\n//  创建相机对象\nvar camera = image3d.Camera({\n    size: 2\n}).rotateBody(0.9, 0, 1, 0).rotateBody(0.3, 1, 0, 0, 0, 0, 1).moveBody(0.5, 0, -1, 0);\n\nsetInterval(function () {\n\n    // 每次重新绘制前，都围绕射线（0,0,0）→ (0,1,0)旋转弧度0.05\n    camera.rotateBody(0.05, 0, 1, 0);\n\n    // 传递照相机\n    image3d.setUniformMatrix(\"u_matrix\",\n        camera.value()\n    );\n\n    // 绘制\n    painter.drawTriangle(0, num);\n\n}, 30);\n    </pre>\n    <h2 id=\"fixed-more\">\n        更多\n    </h2>\n    <p>\n        如果说，我们希望再加上光照、投影，或者说，可不可以给图形贴上“皮肤”等，怎么写，是不是不言而喻了。\n    </p>\n    <p>\n        是的，思路都非常简单，通过修改两个着色器最终获取的变量值即可，如何修改？那你就可以借助一系列的数学计算和着色器的内置函数了。\n    </p>\n</div>"
  
    return __etcpack__scope_bundle__;
}
