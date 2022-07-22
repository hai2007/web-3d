
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/three/quick/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('42');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('43');
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
// Original file:./src/App/pages/three/quick/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['42']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= ""
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/three/quick/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['43']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"doc-view\">\r\n    <header id=\"fixed-top\">\r\n        快速入门\r\n    </header>\r\n    <p>\r\n        这是一个底层基于\r\n        <span class=\"important\">WebGL</span>\r\n        开发的3D渲染引擎（ 当然，后续是否会正式发布基于<span class=\"important\">WebGPU</span>的版本，也是可能的）。\r\n    </p>\r\n    <p>\r\n        和直接使用WebGL相比，比如\r\n        <span class=\"important\">着色器</span>\r\n        ，大部分情况下你无需自己开发，不过，情况并不总是这样，如果你的需求太过特殊，我们依旧可以用更接近原生的方式来绘制，这是一个非常友好的设计。\r\n    </p>\r\n    <h2 id=\"fixed-struct\">\r\n        绘制流程\r\n    </h2>\r\n    <p>\r\n        一般最通用的绘制流程大致如下：\r\n    </p>\r\n    <p>\r\n        <span class=\"pip-block\">\r\n            准备好场景\r\n        </span>\r\n        →\r\n        <span class=\"pip-block\">\r\n            准备好相机\r\n        </span>\r\n        →\r\n        <span class=\"pip-block\">\r\n            使用渲染器渲染出来\r\n        </span>\r\n    </p>\r\n    <p>\r\n        你可以提前看看我们最终要绘制的效果：\r\n    </p>\r\n    <iframe width=\"300px\" height=\"300px\" border=\"0\" src=\"./examples/three-rotate-box.html?\"></iframe>\r\n    <p>\r\n        这是一个旋转的立方体。\r\n    </p>\r\n    <button ui-goto-example='three-rotate-box'>查看用例>>></button>\r\n    <h2 id=\"fixed-scene\">\r\n        场景\r\n    </h2>\r\n    <p>\r\n        所谓的场景，也就是空间的属性，就是当前空间里面有什么东西；比如：有什么物体（物体的材质、形状、尺寸）、有没有光（点光源还是环境光、或者平行光）等。\r\n    </p>\r\n    <p>\r\n        对我们这里而言，很明显，空间里有一个正六面体，而且，好像还有光照在上面。\r\n    </p>\r\n    <p>\r\n        那么，我们首先创建好场景，后续再补充场景中的内容：\r\n    </p>\r\n    <pre ui-code>\r\n        var scene = new THREE.Scene();\r\n    </pre>\r\n    <h3 id=\"fixed-scene_mesh\">\r\n        网格模型\r\n    </h3>\r\n    <p>\r\n        现在，我们来创建一个立方体：\r\n    </p>\r\n    <pre ui-code>\r\n        var geometry = new THREE.BoxGeometry(100, 100, 100);\r\n    </pre>\r\n    <p>\r\n        立方体是红色的，所以，还需要创建一个材质对象：\r\n    </p>\r\n    <pre ui-code>\r\nvar material = new THREE.MeshLambertMaterial({\r\n    color: \"red\"\r\n});\r\n    </pre>\r\n    <p>\r\n        然后，把立方体和材质对象关联起来，就获得了表示这个完整立方体信息的模型对象了：\r\n    </p>\r\n    <pre ui-code>\r\n        var mesh = new THREE.Mesh(geometry, material);\r\n    </pre>\r\n    <p>\r\n        最后，把这个立方体放到之前创建的空间中去：\r\n    </p>\r\n    <pre ui-code>\r\n        scene.add(mesh);\r\n    </pre>\r\n    <h3 id=\"fixed-scene_light\">\r\n        光照\r\n    </h3>\r\n    <p>\r\n        光一般有多种，比如环境光，其实我们就可以认为是漫反射，在原生代码中，我们需要自己设计光叠加的算法，而在这里，你只需要调用api设置参数即可：\r\n    </p>\r\n    <pre ui-code>\r\n        var ambient = new THREE.AmbientLight(\"green\");\r\n    </pre>\r\n    <p>\r\n        同样的，也需要被添加到当前空间中去：\r\n    </p>\r\n    <pre ui-code>\r\n        scene.add(ambient);\r\n    </pre>\r\n    <p>\r\n        别的类型的光也类似，只是设置的参数不一样，这里就不再赘述了。\r\n    </p>\r\n    <h2 id=\"fixed-camera\">\r\n        相机\r\n    </h2>\r\n    <p>\r\n        其实就相当于你的眼睛的可视区域。空间中有什么，不代表你就应该看见什么，通过相机来确定你看的位置、方向、范围等。\r\n    </p>\r\n    <p>\r\n        还有一点需要特别说明，因为你看见的其实是平面，空间本身是3D的，那就存在一个投影算法，不同的投影算法最终你空间的内容也是不一样的（我们这里选择的是正射投影），整体来说比较好理解，直接看代码：\r\n    </p>\r\n    <pre ui-code>\r\nvar width = window.innerWidth; //窗口宽度\r\nvar height = window.innerHeight; //窗口高度\r\nvar k = width / height; //窗口宽高比\r\nvar s = 100; //三维场景显示范围控制系数，系数越大，显示的范围越大\r\n\r\nvar camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);\r\n\r\ncamera.position.set(200, 300, 200); //设置相机位置\r\ncamera.lookAt(scene.position); //设置相机方向(指向的场景对象)\r\n    </pre>\r\n    <h2 id=\"fixed-render\">\r\n        渲染器\r\n    </h2>\r\n    <p>\r\n        好了，空间准备好了，相机也准备好了，接下来就是渲染出来了。\r\n    </p>\r\n    <p>\r\n        首先，创建好渲染器：\r\n    </p>\r\n    <pre ui-code>\r\n        var renderer = new THREE.WebGLRenderer();\r\n    </pre>\r\n    <p>\r\n        然后，设置好参数：\r\n    </p>\r\n    <pre ui-code>\r\nrenderer.setSize(width, height);//设置渲染区域尺寸\r\nrenderer.setClearColor(0xb9d3ff, 1); //设置背景颜色\r\n    </pre>\r\n    <p>\r\n        最终渲染的内容在哪里显示？当前是页面了，所以渲染器需要关联到页面中：\r\n    </p>\r\n    <pre ui-code>\r\n        document.body.appendChild(renderer.domElement); \r\n    </pre>\r\n    <p>\r\n        一切准备就绪，渲染即可：\r\n    </p>\r\n    <pre ui-code>\r\n        renderer.render(scene, camera);\r\n    </pre>\r\n    <h2 id=\"fixed-matrix4\">\r\n        变换\r\n    </h2>\r\n    <p>\r\n        相比最终的效果，我们绘制出来的是一个静止的，怎么办？\r\n    </p>\r\n    <p>\r\n        你可以修改相机的位置、角度等，或者改变物体的位置。比如这里，我们改变物体的位置：\r\n    </p>\r\n    <pre ui-code>\r\n        mesh.rotateY(0.01);\r\n    </pre>\r\n    <p>\r\n        同样的，改变完毕后，重新使用渲染器渲染即可。\r\n    </p>\r\n    <h2 id=\"fixed-more\">\r\n        更多\r\n    </h2>\r\n    <p>\r\n        更多复杂的场景，也是在上面每步的调整，比如空间中有什么，不是只有上面的写法，你也可以使用顶点来自定义表示，只不过，上面的一个大体的思路，后续更丰富的学习，有了上面的大的架子，会更容易理解。\r\n    </p>\r\n    <p>\r\n        始终记住一点：难的绝不是3D本身，而是其背后一系列的算法和数学知识。不过，相信聪明的你，一定会轻松掌握这一切。\r\n    </p>\r\n</div>"
  
    return __etcpack__scope_bundle__;
}
