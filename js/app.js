//  Import the entire three.js core library.

import * as THREE from "https://unpkg.com/three/build/three.module.js";

//-------------------importing from node modules but getting type error
// import * as THREE from "../node_modules/three/build/three.js";
const scene = new THREE.Scene();
//--------------------------------------orbit control trying to get it but getting error type error
// import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
//--------------------------------------orbit control trying to get it but getting error
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//------------------orbit control
// const orbit = new OrbitControls(camera, renderer, domElement);
// orbit.update();

//-----------------------------------------------------
camera.position.set(0, 2, 5);
// axes helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
//-----------------------------------------------------
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: "#0085FF" });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

function animate() {
  requestAnimationFrame(animate);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
renderer.render(scene, camera);
