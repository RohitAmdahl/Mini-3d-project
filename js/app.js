//  Import the entire three.js core library.

import * as THREE from "https://unpkg.com/three/build/three.module.js";

//-------------------importing from node modules but getting type error
// import * as THREE from "../node_modules/three/build/three.js";

const scene = new THREE.Scene();
//--------------------------------------orbit control trying to get it but getting error type error
//import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//--------------------------------------orbit control trying to get it but getting error
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

camera.position.set(0, 2, 5);
// axes helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
//-----------------------------------------------------

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: "#0085FF" });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

//-create plane grids----------------
const geometry = new THREE.PlaneGeometry(8, 5);
const material = new THREE.MeshBasicMaterial({
  color: "#373737",
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

const size = 25;
const divisions = 25;

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);
plane.rotation.x = -0.5 * Math.PI;
// const gridsHelper = new THREE.GridsHelper(35);
// scene.add(gridsHelper);
// //-----------------------------------------------------orbit control

// const orbit = new OrbitControls(camera, renderer, domElement);
// orbit.update();

// //-----------------------------------------------------
function animate() {
  requestAnimationFrame(animate);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
// renderer.render(scene, camera);
