// import "./style.css";

//A-FRAME

let gameghoul = document.querySelector("#gameghoulent");
let ggtext = document.querySelector("#ggtext");
let ggroom = document.querySelector("#rooment");
let ggcam = document.querySelector("#cameraRig");

let upright = false;
let ggRotation = 1;
let ggRotating = false;

let points = document.querySelectorAll(".point");

let currCube = "center";
let currTarget = "0 0.2 -2";

/* for (let i = 0; i < points.length; i++) {
  points[i].addEventListener("mouseenter", function () {
    if (currCube != points[i].getAttribute("id")) {
      gameghoul.setAttribute("look-at", "#" + points[i].getAttribute("id"));
      gameghoul.setAttribute("animation-mixer", "clip: GGWalkCycle");

      if (points[i].getAttribute("id") === "pointA") currTarget = "-3 0.2 0";
      else if (points[i].getAttribute("id") === "pointB")
        currTarget = "0 0.2 -3";
      else if (points[i].getAttribute("id") === "pointC")
        currTarget = "3 0.2 0";

      gameghoul.setAttribute(
        "animation",
        "property: position; to: " + currTarget + "; dur: 800;"
      );
      setTimeout(function () {
        // gameghoul.setAttribute("look-at", "[camera]");
        currCube = points[i].getAttribute("id");
        gameghoul.setAttribute("look-at", "[camera]");
        gameghoul.setAttribute(
          "animation-mixer",
          "clip: GGIdleBounce; loop: repeat; clampWhenFinished: false"
        );
      }, 800);
    }
  });
} */

function ggTurn(rotvalue) {
  if (upright && !ggRotating) {
    ggRotating = true;
    ggRotation += rotvalue;
    ggcam.setAttribute(
      "animation",
      "property: rotation; to: '0 " + (ggRotation - 1) * 90 + " 0'; dur: 800;"
    );
    setTimeout(function () {
      gameghoul.setAttribute(
        "animation-mixer",
        "clip: GGWalkCycle; loop: repeat; clampWhenFinished: false; timeScale: 1"
      );
      console.log("HERE");
      if (ggRotation % 4 == 1 || ggRotation % 4 == -3) {
        //DOOR
        // ggtext.setAttribute("text", "value: DOOR");
        gameghoul.setAttribute("look-at", "#pointD");
        gameghoul.setAttribute(
          "animation",
          "property: position; to: 0 0 -3.4; dur: 800;"
        );
      } else if (ggRotation % 4 == 2 || ggRotation % 4 == -2) {
        //TV
        // ggtext.setAttribute("text", "value: TV");
        gameghoul.setAttribute("look-at", "#pointA");
        gameghoul.setAttribute(
          "animation",
          "property: position; to: -3.4 0 0; dur: 800;"
        );
      } else if (ggRotation % 4 == 3 || ggRotation % 4 == -1) {
        //PC
        // ggtext.setAttribute("text", "value: PC");
        gameghoul.setAttribute("look-at", "#pointB");
        gameghoul.setAttribute(
          "animation",
          "property: position; to: 0 0 3.4; dur: 800;"
        );
      } else if (ggRotation % 4 == 0 || ggRotation % 4 == -0) {
        //EISEL
        // ggtext.setAttribute("text", "value: EISEL");
        gameghoul.setAttribute("look-at", "#pointC");
        gameghoul.setAttribute(
          "animation",
          "property: position; to: 3.4 0 0; dur: 800;"
        );
      }
    }, 600);
    setTimeout(function () {
      if (ggRotation % 4 == 1 || ggRotation % 4 == -3) {
        //DOOR
        gameghoul.setAttribute(
          "animation-mixer",
          "clip: GGIdleBounce; loop: repeat; clampWhenFinished: false"
        );
        ggroom.setAttribute(
          "animation-mixer",
          "clip: RoomReset; loop: once; clampWhenFinished: true; timeScale: 1"
        );
        gameghoul.setAttribute("look-at", "[camera]");
      } else if (ggRotation % 4 == 2 || ggRotation % 4 == -2) {
        //TV
        gameghoul.setAttribute(
          "animation-mixer",
          "clip: GGController; loop: once; clampWhenFinished: true; timeScale: 1"
        );
        ggroom.setAttribute(
          "animation-mixer",
          "clip: GGController; loop: once; clampWhenFinished: true; timeScale: 1"
        );
      } else if (ggRotation % 4 == 3 || ggRotation % 4 == -1) {
        //PC
        gameghoul.setAttribute(
          "animation-mixer",
          "clip: GGChair; loop: once; clampWhenFinished: true; timeScale: 1"
        );
        ggroom.setAttribute(
          "animation-mixer",
          "clip: GGChair; loop: once; clampWhenFinished: true; timeScale: 1"
        );
      } else if (ggRotation % 4 == 0 || ggRotation % 4 == -0) {
        //EISEL
        gameghoul.setAttribute(
          "animation-mixer",
          "clip: GGPaint; loop: once; clampWhenFinished: true; timeScale: 1"
        );
        ggroom.setAttribute(
          "animation-mixer",
          "clip: GGPaint; loop: once; clampWhenFinished: true; timeScale: 1"
        );
      }

      /* gameghoul.setAttribute(
        "animation-mixer",
        "clip: GGIdleBounce; loop: repeat; clampWhenFinished: false"
      ); */
      ggRotating = false;
    }, 1400);
  }
}

document.body.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowLeft":
      ggTurn(1);
      break;
    case "ArrowRight":
      ggTurn(-1);
      break;
    case "ArrowUp":
      if (
        gameghoul.getAttribute(
          "animation-mixer",
          "clip: GGDoorEnter; loop: once; clampWhenFinished: true; timeScale: 0"
        ) &&
        !upright
      ) {
        ggcam.setAttribute(
          "animation",
          "property: rotation; to: '0 0 0'; dur: 800;"
        );
        setTimeout(function () {
          gameghoul.setAttribute(
            "animation-mixer",
            "clip: GGDoorEnter; loop: once; clampWhenFinished: true; timeScale: 1"
          );
          ggroom.setAttribute(
            "animation-mixer",
            "clip: GGDoorEnter; loop: once; clampWhenFinished: true; timeScale: 1"
          );
          upright = true;
        }, 1000);
      }
      break;
    case "ArrowDown":
      // Down pressed
      break;
  }
});

function GrabTest(str) {
  if (ggRotation % 4 == 1 || ggRotation % 4 == -3) {
    //DOOR
    if (str == 1) {
      gameghoul.setAttribute(
        "animation-mixer",
        "clip: GGProdded; loop: repeat; clampWhenFinished: false"
      );
    } else if (str == 2) {
      gameghoul.setAttribute(
        "animation-mixer",
        "clip: GGIdleBounce; loop: repeat; clampWhenFinished: false"
      );
    }
  }
}

gameghoul.addEventListener("animation-finished", function () {
  if (ggRotation % 4 == 1 || ggRotation % 4 == -3) {
    //DOOR
    gameghoul.setAttribute(
      "animation-mixer",
      "clip: GGIdleBounce; loop: repeat; clampWhenFinished: false"
    );
    gameghoul.setAttribute("look-at", "[camera]");
  }
});

function updateLoop() {
  window.requestAnimationFrame(updateLoop);
}

updateLoop();

/* AFRAME.registerComponent("ggmove", {
  schema: {
    point: { type: "string" },
  },

  init: function () {
    this.toggleHandler = this.toggleVisibility.bind(this);
    this.el.addEventListener("click", this.toggleHandler);
  },

  update: function () {},
}); */

//THREE.JS
/* import * as THREE from "/node_modules/three";
import { Object3D } from "/node_modules/three";
import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "/node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "/node_modules/gsap";

//SIZES
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color("#e28db4");

//MESH

const loader = new GLTFLoader();

loader.load(
  "/meshes/gglowpoly.gltf",
  function (gltf) {
    // let mesh = gltf.scene.children[0];
    // mesh.scale.set(0.5, 0.5, 0.5);
    // mesh.position.set(0, 0, 0);
    // scene.add(mesh.scene);
    let gameghoul = new THREE.Object3D();
    scene.add(gltf.scene);
    console.log(gltf);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//LIGHT
const mainLight = new THREE.AmbientLight(0xffffff, 2);
// mainLight.position.set(10, 10, 10);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);

scene.add(mainLight, light);

//CAMERA
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 10;
scene.add(camera);

//RENDER
const canvas = document.getElementById("bg");
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

//CONTROLS
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;

//RESIZE
window.addEventListener("resize", () => {
  //UPDATE SIZES
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //UPDATE CAMERA
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

//LOOP
const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();

//APPEAR ANIMATION
const tl = gsap.timeline({ defaults: { duration: 1 } });
tl.fromTo(scene.children[0].scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 });
console.log(scene.children[2]);
 */
