import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'

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

    function render() {
        renderer.render(scene,camera);//执行渲染操作
      }
      render();
      var controls = new OrbitControls(camera,renderer.domElement);//创建控件对象
      controls.addEventListener('change', render);//监听鼠标、键盘事件
    render();
}