export default {
    "webgl": {
        "quick": () => import('./webgl/quick/index.ts'),
    },
    "three": {
        "quick": () => import('./three/quick/index.ts'),
        "model": () => import('./three/model/index.ts'),
        "geometry": () => import('./three/geometry/index.ts'),
        "texture": () => import('./three/texture/index.ts'),
        "light": () => import('./three/light/index.ts'),
        "vertices": () => import('./three/vertices/index.ts'),
        "camera": () => import('./three/camera/index.ts')
    }
}
