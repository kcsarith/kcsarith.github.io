import './style.css'
import * as THREE from 'three';
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

// CREATING GEOMETRY
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// CREATING LIGHT
const pointLight = new THREE.PointLight(0xff0000, 1, 100);
pointLight.position.set(50, 50, 50);

const ambientLight = new THREE.AmbientLight(0x404040); // soft white light

scene.add(pointLight, ambientLight);

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotateX(0.01);
  torusKnot.rotateY(0.01);
  torusKnot.rotateZ(0.01);

  renderer.render(scene, camera);
}

animate();
