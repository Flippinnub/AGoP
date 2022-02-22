//Create World
//Lights
var Lights = new THREE.Group();

var light1 = new THREE.PointLight(0xffffff, 1, 0, 2);
light1.position.set(0, 0, 0);
Lights.add(light1);
var light2 = new THREE.PointLight(0xffffff, 1, 0, 2);
light2.position.set(0, 0, 50);
Lights.add(light2);
var light3 = new THREE.PointLight(0xffffff, 1, 0, 2);
light3.position.set(0, 0, 100);
Lights.add(light3);
var light4 = new THREE.PointLight(0xffffff, 1, 0, 2);
light4.position.set(0, 0, 150);
Lights.add(light4);
var light5 = new THREE.PointLight(0xffffff, 1, 0, 2);
light5.position.set(0, 0, 200);
Lights.add(light5);
var light6 = new THREE.PointLight(0xffffff, 1, 0, 2);
light6.position.set(0, 0, 250);
Lights.add(light6);
var light7 = new THREE.PointLight(0xffffff, 1, 0, 2);
light7.position.set(0, 0, 300);
Lights.add(light7);
var light8 = new THREE.PointLight(0xffffff, 1, 0, 2);
light8.position.set(0, 0, 350);
Lights.add(light8);
var light9 = new THREE.PointLight(0xffffff, 1, 0, 2);
light9.position.set(0, 0, 400);
Lights.add(light9);
var light10 = new THREE.PointLight(0xffffff, 1, 0, 2);
light10.position.set(0, 0, 450);
Lights.add(light10);
var light11 = new THREE.PointLight(0xffffff, 1, 0, 2);
light11.position.set(0, 0, 500);
Lights.add(light11);
var light12 = new THREE.PointLight(0xffffff, 1, 0, 2);
light12.position.set(0, 0, 550);
Lights.add(light12);
var light13 = new THREE.PointLight(0xffffff, 1, 0, 2);
light13.position.set(0, 0, 600);
Lights.add(light13);
var light14 = new THREE.PointLight(0xffffff, 1, 0, 2);
light14.position.set(0, 0, 650);
Lights.add(light14);
var light15 = new THREE.PointLight(0xffffff, 1, 0, 2);
light15.position.set(0, 0, 700);
Lights.add(light15);
var light16 = new THREE.PointLight(0xffffff, 1, 0, 2);
light16.position.set(0, 0, 750);
Lights.add(light16);
var light17 = new THREE.PointLight(0xffffff, 1, 0, 2);
light17.position.set(0, 0, 800);
Lights.add(light17);
var light18 = new THREE.PointLight(0xffffff, 1, 0, 2);
light18.position.set(0, 0, 850);
Lights.add(light18);
var light19 = new THREE.PointLight(0xffffff, 1, 0, 2);
light19.position.set(0, 0, 900);
Lights.add(light19);
var light20 = new THREE.PointLight(0xffffff, 1, 0, 2);
light20.position.set(0, 0, 950);
Lights.add(light20);
var light21 = new THREE.PointLight(0xffffff, 1, 0, 2);
light21.position.set(0, 0, 1000);
Lights.add(light21);

Lights.castShadow = true;
Lights.shadow.mapSize.width = 512; 
Lights.shadow.mapSize.height = 512; 
Lights.shadow.camera.near = 0.5; 
Lights.shadow.camera.far = 500; 

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

cube.castShadow = true;
wallTop.receiveShadow = true;
wallBottom.receiveShadow = true;
wallLeft.receiveShadow = true;
wallRight.receiveShadow = true;

scene.add(cube);
scene.add(wallTop);
scene.add(wallRight);
scene.add(wallBottom);
scene.add(wallLeft);