//Create World
//Lights
var Lights = new THREE.Group();

var light1 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light1.position.set(0, 8, 0);
Lights.add(light1);
var light2 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light2.position.set(0, 8, 100);
Lights.add(light2);
var light3 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light3.position.set(0, 8, 200);
Lights.add(light3);
var light4 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light4.position.set(0, 8, 300);
Lights.add(light4);
var light5 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light5.position.set(0, 8, 400);
Lights.add(light5);
var light6 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light6.position.set(0, 8, 500);
Lights.add(light6);
var light7 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light7.position.set(0, 8, 600);
Lights.add(light7);
var light8 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light8.position.set(0, 8, 700);
Lights.add(light8);
var light9 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light9.position.set(0, 8, 800);
Lights.add(light9);
var light10 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light10.position.set(0, 8, 900);
Lights.add(light10);
var light11 = new THREE.PointLight(0xffffff, 0.25, 0, 2);
light11.position.set(0, 8, 1000);
Lights.add(light11);

scene.add(Lights);


//Lockers
var Lockers = new THREE.Group();

const lockerGeometry = new THREE.BoxGeometry(1, 6, 0.9)
const lockerMaterial = new THREE.MeshStandardMaterial({color: 0x404040, Metalness: 100, Roughness: 0.60})

var locker1Left = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker1Left.position.set(5.5, 3, 11);
Lockers.add(locker1Left);
var locker2Left = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker2Left.position.set(5.5, 3, 12);
Lockers.add(locker2Left);
var locker3Left = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker3Left.position.set(5.5, 3, 13);
Lockers.add(locker3Left);
var locker4Left = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker4Left.position.set(5.5, 3, 14);
Lockers.add(locker4Left);
var locker5Left = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker5Left.position.set(5.5, 3, 15);
Lockers.add(locker5Left);
var locker6Left = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker6Left.position.set(5.5, 3, 16);
Lockers.add(locker6Left);
var locker7Left = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker7Left.position.set(5.5, 3, 17);
Lockers.add(locker7Left);
var locker8Left = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker8Left.position.set(5.5, 3, 18);
Lockers.add(locker8Left);
var locker9Left = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker9Left.position.set(5.5, 3, 19);
Lockers.add(locker9Left);
var locker10Left = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker10Left.position.set(5.5, 3, 20);
Lockers.add(locker10Left);

var locker1Right = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker1Right.position.set(-5.5, 3, 11);
Lockers.add(locker1Right);
var locker2Right = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker2Right.position.set(-5.5, 3, 12);
Lockers.add(locker2Right);
var locker3Right = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker3Right.position.set(-5.5, 3, 13);
Lockers.add(locker3Right);
var locker4Right = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker4Right.position.set(-5.5, 3, 14);
Lockers.add(locker4Right);
var locker5Right = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker5Right.position.set(-5.5, 3, 15);
Lockers.add(locker5Right);
var locker6Right = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker6Right.position.set(-5.5, 3, 16);
Lockers.add(locker6Right);
var locker7Right = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker7Right.position.set(-5.5, 3, 17);
Lockers.add(locker7Right);
var locker8Right = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker8Right.position.set(-5.5, 3, 18);
Lockers.add(locker8Right);
var locker9Right = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker9Right.position.set(-5.5, 3, 19);
Lockers.add(locker9Right);
var locker10Right = new THREE.Mesh(lockerGeometry, lockerMaterial);
locker10Right.position.set(-5.5, 3, 20);
Lockers.add(locker10Right);

scene.add(Lockers);


//Objects
const sideWallGeometry = new THREE.PlaneGeometry(1000, 8.333);
const flatWallGeometry = new THREE.PlaneGeometry(12, 1000);

const wallMaterial = new THREE.MeshStandardMaterial({color: 0xa4a4a4, side: THREE.FrontSide});

var wallTop = new THREE.Mesh(flatWallGeometry, wallMaterial);
var wallBottom = new THREE.Mesh(flatWallGeometry, wallMaterial);
var wallLeft = new THREE.Mesh(sideWallGeometry, wallMaterial);
var wallRight = new THREE.Mesh(sideWallGeometry, wallMaterial);

wallTop.position.set(0, 8.333, 500);
wallBottom.position.set(0, 0, 500);
wallLeft.position.set(-6, 4.166, 500);
wallRight.position.set(6, 4.166, 500);

wallTop.rotation.set((90 * (Math.PI / 180)), 0, 0);
wallBottom.rotation.set((-90 * (Math.PI / 180)), 0 , 0);
wallLeft.rotation.set(0, (90 * (Math.PI / 180)), 0);
wallRight.rotation.set(0, (-90 * (Math.PI / 180)), 0);

scene.add(wallTop);
scene.add(wallRight);
scene.add(wallBottom);
scene.add(wallLeft);
