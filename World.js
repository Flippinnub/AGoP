//Create World
//Lights
var Lights = new THREE.Group();

var light1 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light1.position.set(0, 9.9, 0);
Lights.add(light1);
var light2 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light2.position.set(0, 9.9, 100);
Lights.add(light2);
var light3 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light3.position.set(0, 9.9, 200);
Lights.add(light3);
var light4 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light4.position.set(0, 9.9, 300);
Lights.add(light4);
var light5 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light5.position.set(0, 9.9, 400);
Lights.add(light5);
var light6 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light6.position.set(0, 9.9, 500);
Lights.add(light6);
var light7 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light7.position.set(0, 9.9, 600);
Lights.add(light7);
var light8 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light8.position.set(0, 9.9, 700);
Lights.add(light8);
var light9 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light9.position.set(0, 9.9, 800);
Lights.add(light9);
var light10 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light10.position.set(0, 9.9, 900);
Lights.add(light10);
var light11 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light11.position.set(0, 9.9, 1000);
Lights.add(light11);

scene.add(Lights);

//Objects
const sideWallGeometry = new THREE.PlaneGeometry(1000, 20);
const flatWallGeometry = new THREE.PlaneGeometry(20, 1000);
const cubeGeometry = new THREE.BoxGeometry(5, 5, 5)

const wallMaterial = new THREE.MeshStandardMaterial({color: 0xa4a4a4, side: THREE.DoubleSide});
const cubeMaterial = new THREE.MeshStandardMaterial({color: 0x00ff00})

var wallTop = new THREE.Mesh(flatWallGeometry, wallMaterial);
var wallBottom = new THREE.Mesh(flatWallGeometry, wallMaterial);
var wallLeft = new THREE.Mesh(sideWallGeometry, wallMaterial);
var wallRight = new THREE.Mesh(sideWallGeometry, wallMaterial);
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.set(5, 5, 10);
wallTop.position.set(0, 10, 500);
wallBottom.position.set(0, -10, 500);
wallLeft.position.set(-10, 0, 500);
wallRight.position.set(10, 0, 500);

wallTop.rotation.set((90 * (Math.PI / 180)), 0, 0);
wallBottom.rotation.set((-90 * (Math.PI / 180)), 0 , 0);
wallLeft.rotation.set(0, (-90 * (Math.PI / 180)), 0);
wallRight.rotation.set(0, (90 * (Math.PI / 180)), 0);

scene.add(cube);
scene.add(wallTop);
scene.add(wallRight);
scene.add(wallBottom);
scene.add(wallLeft);
