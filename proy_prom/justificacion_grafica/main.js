import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import {GUI} from 'three/addons/libs/lil-gui.module.min.js';
import {ColorGUIHelper} from './gui_helper/gui_helper.js';

//===== Manual =====//
//===== Rendering on Demand =====//

// https://threejs.org/manual/#en/rendering-on-demand
function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    const gui = new GUI();
    // Posicionar la GUI dentro de su contenedor
    const gui_container = document.getElementById('gui_container')
    gui.domElement.style.position = 'relative';
    gui.domElement.style.top = '0';
    gui.domElement.style.right = '0';
    gui_container.appendChild(gui.domElement);
    console.log('gui:', gui);


    // Crear la cámara
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    // Crear los controles, para mover la cámara
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    controls.target.set(0, 0, 0);
    controls.update();
    console.log(controls);

    // Inicializar una escena
    const scene = new THREE.Scene();

    // Crear la geometría
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshPhongMaterial({color: 0x44aa88});

    // Función para crear meshes (cubos)
    function makeInstance(geometry, color, x) {
        // Crear el material (MeshPhongMaterial para que cambie con la luz)
        const material = new THREE.MeshPhongMaterial({color});
        // Crear la mesh a partir de la geometría y el material
        const cube = new THREE.Mesh(geometry, material);
        // Agregar la mesh a la escena
        scene.add(cube);
        // Definir la posición x del cubo a partir del parámetro x
        cube.position.x = x;

        // Seteado de la GUI para modificar cada cubo
        const folder = gui.addFolder(`Cube at x=${x}`);
        folder.addColor(new ColorGUIHelper(material, 'color'), 'value')
            .name('color')
            .onChange(requestRenderIfNotRequested);
        folder.add(cube.scale, 'x', .1, 1.5)
            .name('scale x')
            .onChange(requestRenderIfNotRequested);
        folder.open();

        // Devuelve el mesh
        return cube;
    }

    // Crear tres cubos separados 2 unidades en x
    makeInstance(geometry, 0x44aa88,  0);
    makeInstance(geometry, 0x8844aa, -2);
    makeInstance(geometry, 0xaa8844,  2);

    // Crear una luz direccional y agregarla a la escena
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.DirectionalLight(color, intensity);
    // La posición un poco a la izquierda, arriba y detrás de cámara
    //  por omisión apunta al origen (0, 0, 0)
    light.position.set(-1, 2, 4);
    scene.add(light);

    // Agregar función que decida si corresponde redimensionar
    //  la resolución del canvas
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        // Ajuste para hd-dpi monitores
        const pixelRatio = window.devicePixelRatio;
        const width  = Math.floor( canvas.clientWidth  * pixelRatio );
        const height = Math.floor( canvas.clientHeight * pixelRatio );
        // Definir si corresponde redimensionar
        const needResize = canvas.width !== width || canvas.height !== height;
        // Si needResize es verdadero, redimensiona el renderer y devuelve true
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        // Devuelve verdadero o falso
        return needResize;
    }
    // Variable que controla cuándo solicitar nuevo renderizado
    let renderRequested = false;

    // Crear función de renderizado con rotación del mesh (cubo) por segundo
    function render() {
        // Llevar a falso la bandera para evitar un infinite loop
        renderRequested = false;
        // Verificar si corresponde redimensionar la resolución del canvas
        //  es decir el tamaño del renderer (no del renderizado)
        if (resizeRendererToDisplaySize(renderer)) {
            // Si el resultado es verdadero, en la misma función se actualiza el
            //  renderizador, y ahora se actualiza el aspecto de la cámara
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        // Se necesita actualizar el control de la cámara en cada renderizado
        // El método update dispara el evento "change" mientras dure el Damping
        //  por lo que se requiere una interfaz que involucre las solicitudes
        //  de repintado del navegador, para que no vuelva a llamar a
        //  render automáticamente.
        controls.update();


        // Renderizar
        renderer.render(scene, camera);
    }

    // Renderizar al inicio
    render();

    // Solicitar renderizado
    //  función de interface entre los controles y el renderizador
    function requestRenderIfNotRequested() {
        if (!renderRequested) {
            // Filtra subsiguientes llamadas desde el evento 'change'
            //  supongo que para que solo sucedan cada 60avos de segundo
            renderRequested = true;
            // Solicita repintar el navegador
            requestAnimationFrame(render);
        }
    }

    // Agregar listeners para eventos que requieren re-renderizar
    controls.addEventListener('change', requestRenderIfNotRequested);
    window.addEventListener('resize', requestRenderIfNotRequested);

};


main();
