
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
    __etcpack__scope_bundle__.default= "<div class=\"doc-view\">\r\n    <header id=\"fixed-top\">\r\n        快速入门\r\n    </header>\r\n    <p>\r\n        这里，我们将向大家演示WebGL的一些朴素说明和基本使用，即使你后续使用第三方3D渲染引擎进行绘制，这里的基本概念依旧是非常有益的，或者说是必要的。\r\n    </p>\r\n    <p>\r\n        在演示和说明的时候，我们选择基于\r\n        <a href=\"https://github.com/hai2007/image3D\" target=\"_blank\">image3D.js</a>\r\n        来作为依赖库，但由于其朴素的语法几乎和原生WebGL是一致的，因此我们认为这不是一个糟糕的选择（如果直接使用原生，代码会变得过于冗余，不好说明）。\r\n    </p>\r\n    <p>\r\n        在后续的说明中，你都无需查阅别的文档，当然，如果你想知道的更具体，也可以直接访问\r\n        <a href=\"https://hai2007.gitee.io/image3d/\" target=\"_blank\">image3D.js 文档</a>\r\n        进行查阅。\r\n    </p>\r\n    <h2 id=\"fixed-struct\">\r\n        绘制流程\r\n    </h2>\r\n    <p>\r\n        一般最通用的绘制流程大致如下：\r\n    </p>\r\n    <p>\r\n        <span class=\"pip-block\">\r\n            准备好着色器\r\n        </span>\r\n        →\r\n        <span class=\"pip-block\">\r\n            数据写入缓冲区并完成分配\r\n        </span>\r\n        →\r\n        <span class=\"pip-block\">\r\n            调用绘制方法进行绘制\r\n        </span>\r\n    </p>\r\n    <p>\r\n        不知道你是否可以理解上面每个步骤是在干什么，我们下面将通过一个逐渐丰富的例子来进行解释。\r\n    </p>\r\n    <p>\r\n        你可以提前看看我们最终要绘制的效果：\r\n    </p>\r\n    <iframe width=\"300px\" height=\"300px\" border=\"0\" src=\"./examples/webgl-two-function.html?\"></iframe>\r\n    <p>\r\n        这是二元函数 ： y=x<sup>2</sup> + z<sup>2</sup> 的图像。\r\n    </p>\r\n    <button ui-goto-example='webgl-two-function'>查看用例>>></button>\r\n    <h2 id=\"fixed-shader\">\r\n        着色器\r\n    </h2>\r\n    <p>\r\n        绘制的第一步，就是准备好两个着色器：\r\n        <span class=\"important\">\r\n            顶点着色器\r\n        </span>\r\n        和\r\n        <span class=\"important\">\r\n            片段着色器\r\n        </span>\r\n        。前者用于描述绘制的图形的点的位置，后者用于描述每个点的颜色。\r\n    </p>\r\n    <p>\r\n        可能这样说你会无法理解，其实简单的说就是：我们在绘图的时候，会一次性的把数据都传递给GPU，传递给GPU的数据需要一些\"整理\"后再使用，而着色器就是驻留在GPU上的这段\"整理程序\"。\r\n    </p>\r\n    <p>\r\n        我们传递的数据是什么？不就是点的位置和点的颜色吗。所以，着色器就分为了顶点着色器和片段着色器（有时候也叫片元着色器），前者处理点，后者处理颜色。\r\n    </p>\r\n    <p>\r\n        所以，让我们先看看这里的顶点着色器的具体代码：\r\n    </p>\r\n    <pre ui-code>\r\nattribute vec4 a_position;\r\nattribute vec4 a_color;\r\nvarying vec4 v_color;\r\nvoid main(){\r\n    gl_Position = a_position;\r\n    v_color = a_color;\r\n}\r\n    </pre>\r\n    <p>\r\n        内置变量\r\n        <span class=\"important\">gl_Position</span>\r\n        就是绘图最终接收的点的数据，而我们定义的变量\r\n        <span class=\"important\">a_position</span>\r\n        好比一个管道，我们后续可以给这个变量赋值，也就间接的给gl_Position赋值了（也就是点的位置）。\r\n    </p>\r\n    <p>\r\n        那\r\n        <span class=\"important\">v_color</span>\r\n        是什么？你可以理解，绘图的时候，是以点为主的，每个点的颜色，需要借助点的位置来设置，而v_color就是位置到颜色的桥梁。还是直接看看片段着色器：\r\n    </p>\r\n    <pre ui-code>\r\nprecision mediump float;\r\nvarying vec4 v_color;\r\nvoid main(){\r\n    gl_FragColor=v_color;\r\n}\r\n    </pre>\r\n    <p>\r\n        同样的存在一个内置变量，这里叫\r\n        <span class=\"important\">gl_FragColor</span>，\r\n        其接收了来自顶点着色器的v_color。\r\n    </p>\r\n    <p>\r\n        我不知道你是否理解了上面的行为，不过你可能也感觉到了，点的位置和颜色如何处理已经准备好了，后续我们只需要借助a_position和a_color就可以设置数据了。\r\n    </p>\r\n    <h2 id=\"fixed-object\">\r\n        3D对象\r\n    </h2>\r\n    <p>\r\n        在传递数据前，我们先就基于这两个着色器创建3D对象，这一步非常简单，直接看代码：\r\n    </p>\r\n    <pre ui-code>\r\nvar image3d = new image3D(document.getElementsByTagName('canvas')[0], {\r\n    \"vertex-shader\": vsCode,\r\n    \"fragment-shader\": fsCode,\r\n    depth: true\r\n});\r\n    </pre>\r\n    <p>\r\n        后续的所有操作，包括传递绘制和绘制等，直接调用这个对象上的接口就可以了。\r\n    </p>\r\n    <p>\r\n        特别说明：vsCode和fsCode就是上面两个着色器的代码，是字符串。\r\n    </p>\r\n    <h2 id=\"fixed-data\">\r\n        传递数据\r\n    </h2>\r\n    <p>\r\n        终于，可以给GPU传递数据了，所以，我们先来准备好数据：\r\n    </p>\r\n    <pre ui-code>\r\nvar points = [];\r\n/**\r\n    具体的写法你可以直接看最终的代码，获取的思路大概就是：\r\n\r\n    三个点拼接成一个三角形，\r\n    每个点由6个数据组成，前3个表示点的位置，后3个表示点的颜色，\r\n    而一个个三角形拼接成最终的图形。\r\n*/\r\n\r\n// 因此，点的个数就是\r\nvar num = points.length / 6;\r\n    </pre>\r\n    <p>\r\n        这些三角形如何确定的？对xoz面，范围是-1 ～ 1，切割成一个个正方形，然后斜切一下就可以了：\r\n    </p>\r\n    <img src=\"./images/webgl-two-function_calc-tan.png\" />\r\n    <p>\r\n        对于y值，由 y=x<sup>2</sup> + z<sup>2</sup> 计算获取。\r\n    </p>\r\n    <p>\r\n        数据准备好了，直接设置即可：\r\n    </p>\r\n    <pre ui-code>\r\n        image3d.Buffer().write(new Float32Array(points)).use('a_position', 3, 6, 0).use('a_color', 3, 6, 3);\r\n    </pre>\r\n    <p>\r\n        数据写入缓冲区，然后分配给a_position和a_color即可。\r\n    </p>\r\n    <h2 id=\"fixed-draw\">\r\n        绘制\r\n    </h2>\r\n    <p>\r\n        因为是三角形，一共num个，直接执行绘制方法即可：\r\n    </p>\r\n    <pre ui-code>\r\n        image3d.Painter().drawTriangle(0, num);\r\n    </pre>\r\n    <h2 id=\"fixed-matrix4\">\r\n        变换\r\n    </h2>\r\n    <p>\r\n        虽然上面的话，图形应该已经出来了，不过，我们看最终的例子好像一直在旋转，那旋转效果是如何出来的？\r\n    </p>\r\n    <p>\r\n        聪明的你一定想到了顶点着色器，是的，我们只需要修改一下顶点着色器中内置变量gl_Position接收的值，让其都和一个矩阵相乘就可以了。着色器中对应代码修改：\r\n    </p>\r\n    <pre ui-code>\r\n        gl_Position=u_matrix * a_position;\r\n    </pre>\r\n    <p>\r\n        后续，我们不停的重新绘制，而在绘制前，都传递一个新的矩阵即可：\r\n    </p>\r\n    <pre ui-code>\r\n//  创建相机对象\r\nvar camera = image3d.Camera({\r\n    size: 2\r\n}).rotateBody(0.9, 0, 1, 0).rotateBody(0.3, 1, 0, 0, 0, 0, 1).moveBody(0.5, 0, -1, 0);\r\n\r\nsetInterval(function () {\r\n\r\n    // 每次重新绘制前，都围绕射线（0,0,0）→ (0,1,0)旋转弧度0.05\r\n    camera.rotateBody(0.05, 0, 1, 0);\r\n\r\n    // 传递照相机\r\n    image3d.setUniformMatrix(\"u_matrix\",\r\n        camera.value()\r\n    );\r\n\r\n    // 绘制\r\n    painter.drawTriangle(0, num);\r\n\r\n}, 30);\r\n    </pre>\r\n    <h2 id=\"fixed-more\">\r\n        更多\r\n    </h2>\r\n    <p>\r\n        如果说，我们希望再加上光照、投影，或者说，可不可以给图形贴上“皮肤”等，怎么写，是不是不言而喻了。\r\n    </p>\r\n    <p>\r\n        是的，思路都非常简单，通过修改两个着色器最终获取的变量值即可，如何修改？那你就可以借助一系列的数学计算和着色器的内置函数了。\r\n    </p>\r\n</div>"
  
    return __etcpack__scope_bundle__;
}
