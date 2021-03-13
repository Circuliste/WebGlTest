import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'

export default (e:HTMLElement)=>{
    const scene = new THREE.Scene()
    const geometry = new THREE.SphereGeometry(50,10,10)
    const material = new THREE.MeshLambertMaterial({color:0xff0000})
    const mesh = new THREE.Mesh(geometry,material)
    scene.add(mesh)

    const geometry2 = new THREE.SphereGeometry(10,10,10)
    const material2 = new THREE.MeshLambertMaterial({color:0x0000ff})
    const Earth = new THREE.Mesh(geometry2,material2)
    
    const EarthOrbit = new THREE.Group()
    Earth.position.set(200,0,0)
    
    mesh.add(EarthOrbit)
    EarthOrbit.add(Earth)
    
    const geometry3 = new THREE.SphereGeometry(2,10,10)
    const material3 = new THREE.MeshLambertMaterial({color:0x00ff00})
    const Moon = new THREE.Mesh(geometry3,material3)
    const MoonOrbit = new THREE.Group()
    Moon.position.set(20,0,0)
    Earth.add(MoonOrbit)
    MoonOrbit.add(Moon)

    const point = new THREE.PointLight(0xffffff)
    point.position.set(400,200,300)
    scene.add(point)
    
    const ambient = new THREE.AmbientLight(0x000000)
    scene.add(ambient)
    
    const width = window.innerWidth
    const height = window.innerHeight
    const k = width/height
    const s = 200
    const camera = new THREE.OrthographicCamera(-s*k,s*k,s,-s,1,1000)
    camera.position.set(200,300,200)
    camera.lookAt(scene.position)
    
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width,height)
    renderer.setClearColor(0x000000,1)
    e.appendChild(renderer.domElement)
    renderer.render(scene,camera)

    let T0 = new Date().getTime();//上次时间
    function render() {

        let T1 = new Date().getTime();//本次时间
        let t = T1-T0;//时间差
        T0 = T1;//把本次时间赋值给上次时间
        requestAnimationFrame(render);
        renderer.render(scene,camera);//执行渲染操作
        EarthOrbit.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
        MoonOrbit.rotateY(0.005*t)
    }
    render();

    const controls = new OrbitControls(camera,renderer.domElement)
    controls.addEventListener('change', render);

    const axisHelper = new THREE.AxesHelper(250);
    scene.add(axisHelper);

}