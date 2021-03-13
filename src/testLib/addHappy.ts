import * as THREE from 'three'

export default (e:HTMLElement)=>{
    const scene = new THREE.Scene()
    const geometry = new THREE.BoxGeometry(100,100,100)
    const material = new THREE.MeshLambertMaterial({color:0x0000ff})
    const mesh = new THREE.Mesh(geometry,material)
    scene.add(mesh)
    
    const point = new THREE.PointLight(0xffffff)
    point.position.set(400,200,300)
    scene.add(point)
    
    const ambient = new THREE.AmbientLight(0x444444)
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
    renderer.setClearColor(0xb9dff,1)
    e.appendChild(renderer.domElement)
    renderer.render(scene,camera)

    let T0 = new Date().getTime();//上次时间
    function render() {
        let T1 = new Date().getTime();//本次时间
        let t = T1-T0;//时间差
        T0 = T1;//把本次时间赋值给上次时间
        requestAnimationFrame(render);
        renderer.render(scene,camera);//执行渲染操作
        mesh.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
    }
    render();
}