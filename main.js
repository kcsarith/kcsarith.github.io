import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
/*
Need 3 things
1. Scene == Container which holds all objects, cameras, and lights.
2. Camera, 1st argument is fieldOfView, 2nd is aspectRatio, 3rd and 4th are the viewFustrum relative to the camera itself.
3. Renderer to draw the graphics to the scene which takes in a canvas element.
*/

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#bg") });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight); // Makes it a full screen canvas by setting it to the window height and width.
camera.position.setZ(30); //put the camera in a good perspective.

// ORBIT CONTROLS
const orbitControls = new OrbitControls(camera, renderer.domElement);

// CREATING GEOMETRY
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0xDD6655 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// CREATING LIGHT
const pointLight = new THREE.PointLight(0xFFFFFF, 1, 100);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0x808080); // soft white light

scene.add(pointLight, ambientLight);

// GENERATE STARS
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomHex);
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

for (let i = 0; i < 2000; i++) {
  addStar();
};

// BACKGROUND
const backgroundTexture = new THREE.TextureLoader().load('images/pic04.jpg');
scene.background = backgroundTexture;

// ANIMATE SCENE PER FRAME
function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotateX(0.01);
  torusKnot.rotateY(0.001);
  torusKnot.rotateZ(0.01);

  orbitControls.update();
  renderer.render(scene, camera);
}
animate();
