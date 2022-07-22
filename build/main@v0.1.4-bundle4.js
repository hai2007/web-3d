
/*************************** [bundle] ****************************/
// Original file:./examples/three-rotate-box.html
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <script src=\"https://unpkg.com/three@0\"></script>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <script>\r\n\r\n        // 【1】创建场景对象Scene\r\n        var scene = new THREE.Scene();\r\n\r\n        // 创建网格模型\r\n\r\n        //创建一个立方体几何对象\r\n        var geometry = new THREE.BoxGeometry(100, 100, 100);\r\n\r\n        //材质对象Material\r\n        var material = new THREE.MeshLambertMaterial({\r\n            color: \"red\"\r\n        });\r\n\r\n        //网格模型对象Mesh\r\n        var mesh = new THREE.Mesh(geometry, material);\r\n\r\n        // 网格模型添加到场景中\r\n        scene.add(mesh);\r\n\r\n        // 光源设置\r\n\r\n        //点光源\r\n        var point = new THREE.PointLight(\"white\");\r\n        point.position.set(400, 200, 300); //点光源位置\r\n        scene.add(point); //点光源添加到场景中\r\n\r\n        //环境光\r\n        var ambient = new THREE.AmbientLight(\"green\");\r\n        scene.add(ambient);\r\n\r\n        // 【2】相机设置\r\n\r\n        var width = window.innerWidth; //窗口宽度\r\n        var height = window.innerHeight; //窗口高度\r\n        var k = width / height; //窗口宽高比\r\n        var s = 100; //三维场景显示范围控制系数，系数越大，显示的范围越大\r\n\r\n        //创建相机对象\r\n        var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);\r\n\r\n        camera.position.set(200, 300, 200); //设置相机位置\r\n        camera.lookAt(scene.position); //设置相机方向(指向的场景对象)\r\n\r\n        // 【3】创建渲染器对象\r\n\r\n        var renderer = new THREE.WebGLRenderer();\r\n\r\n        renderer.setSize(width, height);//设置渲染区域尺寸\r\n        renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色\r\n        document.body.appendChild(renderer.domElement); //body元素中插入canvas对象\r\n\r\n        function render() {\r\n\r\n            //执行渲染操作   指定场景、相机作为参数\r\n            renderer.render(scene, camera);\r\n\r\n            mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度\r\n            requestAnimationFrame(render);//请求再次执行渲染函数render\r\n\r\n        }\r\n\r\n        render();\r\n\r\n    </script>\r\n</body>\r\n\r\n</html>"
  
    return __etcpack__scope_bundle__;
}