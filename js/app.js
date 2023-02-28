//  Import the entire three.js core library.
import * as THREE from "https://unpkg.com/three/build/three.module.js";

import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js";
//--------------------------------------orbit control trying to get it but getting error type error
// import * as THREE from "../node_modules/three/build/three.js";
// import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//--------------------------------------orbit control trying to get it but getting error
//-------------------importing from node modules but getting type error

const scene = new THREE.Scene();
scene.background = new THREE.Color("#000000");

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 2, 5);
// axes helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
//-----------------------------------------------------

const aGeometry = new THREE.TorusGeometry(2.0, 0.1, 8, 45);
const vMaterial = new THREE.MeshBasicMaterial({ color: "#FEBFC8" });
const torus = new THREE.Mesh(aGeometry, vMaterial);
scene.add(torus);

const boxGeometry = new THREE.SphereGeometry(0.6, 12, 9);
const boxMaterial = new THREE.MeshBasicMaterial({
  color: "#FCB500",
  side: THREE.DoubleSide,
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

//-create plane grids----------------
const geometry = new THREE.PlaneGeometry(20, 20, 32, 32);
const material = new THREE.MeshBasicMaterial({
  color: "#373737",
  side: THREE.DoubleSide,
  flatShading: true,
  opacity: 0.7,
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

//-create grids----------------
const size = 25;
const divisions = 25;
const gridHelper = new THREE.GridHelper(size, divisions);
plane.rotation.x = -0.5 * Math.PI;
scene.add(gridHelper);
// //-----------------------------------------------------orbit control
function init() {
  const controls = new OrbitControls(camera, renderer.domElement);
  //---light--------------------------------------------------
  const light = new THREE.AmbientLight("#fff", 2);
  scene.add(light);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(20, 20, 0);
  light.castShadow = true;
  //Set up shadow properties for the light
  light.shadow.mapSize.width = 400;
  light.shadow.mapSize.height = 200;
  light.shadow.camera.near = 0.9;
  light.shadow.camera.far = 600;
  const Helper = new THREE.DirectionalLightHelper(directionalLight, 2);
  scene.add(directionalLight, Helper, light, shadow);

  const shadowHelper = new THREE.cameraHelper(light.shadow);
  scene.add(shadowHelper);
}

// //-----------------------------------------------------

//--function animate
function animate() {
  requestAnimationFrame(animate);

  box.rotation.y += 0.01;
  torus.rotation.x += 0.01;

  renderer.render(scene, camera);
}

animate();
// renderer.render(scene, camera);
init();
