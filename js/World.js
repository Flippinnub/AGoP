//Create World

//Lights
var Lights = new THREE.Group();

function createLight (x, y, z, color, Intensity, Distance, Decay) {
    let Light = new THREE.PointLight(color, Intensity, Distance, Decay)
    Light.position.set(x, y, z);
    Light.castShadow = true;
    Light.shadow.mapSize.width = 256; // default
    Light.shadow.mapSize.height = 256; // default
    Light.shadow.camera.near = 0.5; // default
    Light.shadow.camera.far = 500; // default
    return(Light);
}

var light1 = createLight(0,4.9, 0, 0xffffff, 0.5, 0, 2); Lights.add(light1);
var light2 = createLight(0,4.9, 50, 0xffffff, 0.5, 0, 2); Lights.add(light2);
var light3 = createLight(0,4.9, 100, 0xffffff, 0.5, 0, 2); Lights.add(light3);
var light4 = createLight(0,4.9, 150, 0xffffff, 0.5, 0, 2); Lights.add(light4);
var light5 = createLight(0,4.9, 200, 0xffffff, 0.5, 0, 2); Lights.add(light5);
var light6 = createLight(0,4.9, 250, 0xffffff, 0.5, 0, 2); Lights.add(light6);
var light7 = createLight(0,4.9, 300, 0xffffff, 0.5, 0, 2); Lights.add(light7);
var light8 = createLight(0,4.9, 350, 0xffffff, 0.5, 0, 2); Lights.add(light8);
var light9 = createLight(0,4.9, 400, 0xffffff, 0.5, 0, 2); Lights.add(light9);
var light10 = createLight(0,4.9, 450, 0xffffff, 0.5, 0, 2); Lights.add(light10);
var light11 = createLight(0,4.9, 500, 0xffffff, 0.5, 0, 2); Lights.add(light11);
var light12 = createLight(0,4.9, 550, 0xffffff, 0.5, 0, 2); Lights.add(light2);
var light13 = createLight(0,4.9, 600, 0xffffff, 0.5, 0, 2); Lights.add(light3);
var light14 = createLight(0,4.9, 650, 0xffffff, 0.5, 0, 2); Lights.add(light4);
var light15 = createLight(0,4.9, 700, 0xffffff, 0.5, 0, 2); Lights.add(light5);
var light16 = createLight(0,4.9, 750, 0xffffff, 0.5, 0, 2); Lights.add(light6);
var light17 = createLight(0,4.9, 600, 0xffffff, 0.5, 0, 2); Lights.add(light7);
var light18 = createLight(0,4.9, 850, 0xffffff, 0.5, 0, 2); Lights.add(light8);
var light19 = createLight(0,4.9, 800, 0xffffff, 0.5, 0, 2); Lights.add(light9);
var light20 = createLight(0,4.9, 950, 0xffffff, 0.5, 0, 2); Lights.add(light10);
var light21 = createLight(0,4.9, 1000, 0xffffff, 0.5, 0, 2); Lights.add(light11);

scene.add(Lights);


//Lockers
const lockerBlockGeometry = new THREE.BoxGeometry(1, 4, 12);

const lockerMaterials = [
    new THREE.MeshBasicMaterial({map: loader.load('http://flippinnub.github.io/AGoP/Assets/Textures/LockerUnseen.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://flippinnub.github.io/AGoP/Assets/Textures/LockerRow.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://flippinnub.github.io/AGoP/Assets/Textures/LockerBlockTop.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://flippinnub.github.io/AGoP/Assets/Textures/LockerUnseen.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://flippinnub.github.io/AGoP/Assets/Textures/LockerVisibleSide.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://flippinnub.github.io/AGoP/Assets/Textures/LockerVisibleSide.jpg')}),
];

var lockerBlock = new THREE.Mesh(lockerBlockGeometry, lockerMaterials);
lockerBlock.position.set(1, 2, 30);

var Lockers = new THREE.Group();

const lockerGeometry = new THREE.BoxGeometry(1, 4, 0.9);
const lockerMaterial = new THREE.MeshStandardMaterial({color: 0x404040});

function createLocker (x, y, z, Geo, Mat) {
    let Locker = new THREE.Mesh(Geo, Mat);
    Locker.position.set(x, y, z);
    Locker.castShadow = true;
    Locker.receiveShadow
    return(Locker);
}

var locker1Left = createLocker(3.5, 2, 1, lockerGeometry, lockerMaterial); Lockers.add(locker1Left);
var locker2Left = createLocker(3.5, 2, 2, lockerGeometry, lockerMaterial); Lockers.add(locker2Left);
var locker3Left = createLocker(3.5, 2, 3, lockerGeometry, lockerMaterial); Lockers.add(locker3Left);
var locker4Left = createLocker(3.5, 2, 4, lockerGeometry, lockerMaterial); Lockers.add(locker4Left);
var locker5Left = createLocker(3.5, 2, 5, lockerGeometry, lockerMaterial); Lockers.add(locker5Left);
var locker6Left = createLocker(3.5, 2, 6, lockerGeometry, lockerMaterial); Lockers.add(locker6Left);
var locker7Left = createLocker(3.5, 2, 7, lockerGeometry, lockerMaterial); Lockers.add(locker7Left);
var locker8Left = createLocker(3.5, 2, 8, lockerGeometry, lockerMaterial); Lockers.add(locker8Left);
var locker9Left = createLocker(3.5, 2, 9, lockerGeometry, lockerMaterial); Lockers.add(locker9Left);
var locker10Left = createLocker(3.5, 2, 10, lockerGeometry, lockerMaterial); Lockers.add(locker10Left);
var locker11Left = createLocker(3.5, 2, 11, lockerGeometry, lockerMaterial); Lockers.add(locker11Left);
var locker12Left = createLocker(3.5, 2, 12, lockerGeometry, lockerMaterial); Lockers.add(locker12Left);
var locker13Left = createLocker(3.5, 2, 13, lockerGeometry, lockerMaterial); Lockers.add(locker13Left);
var locker14Left = createLocker(3.5, 2, 14, lockerGeometry, lockerMaterial); Lockers.add(locker14Left);
var locker15Left = createLocker(3.5, 2, 15, lockerGeometry, lockerMaterial); Lockers.add(locker15Left);
var locker16Left = createLocker(3.5, 2, 16, lockerGeometry, lockerMaterial); Lockers.add(locker16Left);
var locker17Left = createLocker(3.5, 2, 17, lockerGeometry, lockerMaterial); Lockers.add(locker17Left);
var locker18Left = createLocker(3.5, 2, 18, lockerGeometry, lockerMaterial); Lockers.add(locker18Left);
var locker19Left = createLocker(3.5, 2, 19, lockerGeometry, lockerMaterial); Lockers.add(locker19Left);
var locker20Left = createLocker(3.5, 2, 20, lockerGeometry, lockerMaterial); Lockers.add(locker20Left);
var locker21Left = createLocker(3.5, 2, 21, lockerGeometry, lockerMaterial); Lockers.add(locker21Left);
var locker22Left = createLocker(3.5, 2, 22, lockerGeometry, lockerMaterial); Lockers.add(locker22Left);
var locker23Left = createLocker(3.5, 2, 23, lockerGeometry, lockerMaterial); Lockers.add(locker23Left);
var locker24Left = createLocker(3.5, 2, 24, lockerGeometry, lockerMaterial); Lockers.add(locker24Left);
var locker25Left = createLocker(3.5, 2, 25, lockerGeometry, lockerMaterial); Lockers.add(locker25Left);
var locker26Left = createLocker(3.5, 2, 26, lockerGeometry, lockerMaterial); Lockers.add(locker26Left);
var locker27Left = createLocker(3.5, 2, 27, lockerGeometry, lockerMaterial); Lockers.add(locker27Left);
var locker28Left = createLocker(3.5, 2, 28, lockerGeometry, lockerMaterial); Lockers.add(locker28Left);
var locker29Left = createLocker(3.5, 2, 29, lockerGeometry, lockerMaterial); Lockers.add(locker29Left);
var locker30Left = createLocker(3.5, 2, 30, lockerGeometry, lockerMaterial); Lockers.add(locker30Left);
var locker31Left = createLocker(3.5, 2, 31, lockerGeometry, lockerMaterial); Lockers.add(locker31Left);
var locker32Left = createLocker(3.5, 2, 32, lockerGeometry, lockerMaterial); Lockers.add(locker32Left);
var locker33Left = createLocker(3.5, 2, 33, lockerGeometry, lockerMaterial); Lockers.add(locker33Left);
var locker34Left = createLocker(3.5, 2, 34, lockerGeometry, lockerMaterial); Lockers.add(locker34Left);
var locker35Left = createLocker(3.5, 2, 35, lockerGeometry, lockerMaterial); Lockers.add(locker35Left);
var locker36Left = createLocker(3.5, 2, 36, lockerGeometry, lockerMaterial); Lockers.add(locker36Left);
var locker37Left = createLocker(3.5, 2, 37, lockerGeometry, lockerMaterial); Lockers.add(locker37Left);
var locker38Left = createLocker(3.5, 2, 38, lockerGeometry, lockerMaterial); Lockers.add(locker38Left);
var locker39Left = createLocker(3.5, 2, 39, lockerGeometry, lockerMaterial); Lockers.add(locker39Left);
var locker40Left = createLocker(3.5, 2, 40, lockerGeometry, lockerMaterial); Lockers.add(locker40Left);
var locker41Left = createLocker(3.5, 2, 41, lockerGeometry, lockerMaterial); Lockers.add(locker41Left);
var locker42Left = createLocker(3.5, 2, 42, lockerGeometry, lockerMaterial); Lockers.add(locker42Left);
var locker43Left = createLocker(3.5, 2, 43, lockerGeometry, lockerMaterial); Lockers.add(locker43Left);
var locker44Left = createLocker(3.5, 2, 44, lockerGeometry, lockerMaterial); Lockers.add(locker44Left);
var locker45Left = createLocker(3.5, 2, 45, lockerGeometry, lockerMaterial); Lockers.add(locker45Left);
var locker46Left = createLocker(3.5, 2, 46, lockerGeometry, lockerMaterial); Lockers.add(locker46Left);
var locker47Left = createLocker(3.5, 2, 47, lockerGeometry, lockerMaterial); Lockers.add(locker47Left);
var locker48Left = createLocker(3.5, 2, 48, lockerGeometry, lockerMaterial); Lockers.add(locker48Left);
var locker49Left = createLocker(3.5, 2, 49, lockerGeometry, lockerMaterial); Lockers.add(locker49Left);
var locker50Left = createLocker(3.5, 2, 50, lockerGeometry, lockerMaterial); Lockers.add(locker50Left);
var locker51Left = createLocker(3.5, 2, 51, lockerGeometry, lockerMaterial); Lockers.add(locker51Left);
var locker52Left = createLocker(3.5, 2, 52, lockerGeometry, lockerMaterial); Lockers.add(locker52Left);
var locker53Left = createLocker(3.5, 2, 53, lockerGeometry, lockerMaterial); Lockers.add(locker53Left);
var locker54Left = createLocker(3.5, 2, 54, lockerGeometry, lockerMaterial); Lockers.add(locker54Left);
var locker55Left = createLocker(3.5, 2, 55, lockerGeometry, lockerMaterial); Lockers.add(locker55Left);
var locker56Left = createLocker(3.5, 2, 56, lockerGeometry, lockerMaterial); Lockers.add(locker56Left);
var locker57Left = createLocker(3.5, 2, 57, lockerGeometry, lockerMaterial); Lockers.add(locker57Left);
var locker58Left = createLocker(3.5, 2, 58, lockerGeometry, lockerMaterial); Lockers.add(locker58Left);
var locker59Left = createLocker(3.5, 2, 59, lockerGeometry, lockerMaterial); Lockers.add(locker59Left);
var locker60Left = createLocker(3.5, 2, 60, lockerGeometry, lockerMaterial); Lockers.add(locker60Left);
var locker61Left = createLocker(3.5, 2, 61, lockerGeometry, lockerMaterial); Lockers.add(locker61Left);
var locker62Left = createLocker(3.5, 2, 62, lockerGeometry, lockerMaterial); Lockers.add(locker62Left);
var locker63Left = createLocker(3.5, 2, 63, lockerGeometry, lockerMaterial); Lockers.add(locker63Left);
var locker64Left = createLocker(3.5, 2, 64, lockerGeometry, lockerMaterial); Lockers.add(locker64Left);
var locker65Left = createLocker(3.5, 2, 65, lockerGeometry, lockerMaterial); Lockers.add(locker65Left);
var locker66Left = createLocker(3.5, 2, 66, lockerGeometry, lockerMaterial); Lockers.add(locker66Left);
var locker67Left = createLocker(3.5, 2, 67, lockerGeometry, lockerMaterial); Lockers.add(locker67Left);
var locker68Left = createLocker(3.5, 2, 68, lockerGeometry, lockerMaterial); Lockers.add(locker68Left);
var locker69Left = createLocker(3.5, 2, 69, lockerGeometry, lockerMaterial); Lockers.add(locker69Left);
var locker70Left = createLocker(3.5, 2, 70, lockerGeometry, lockerMaterial); Lockers.add(locker70Left);
var locker71Left = createLocker(3.5, 2, 71, lockerGeometry, lockerMaterial); Lockers.add(locker71Left);
var locker72Left = createLocker(3.5, 2, 72, lockerGeometry, lockerMaterial); Lockers.add(locker72Left);
var locker73Left = createLocker(3.5, 2, 73, lockerGeometry, lockerMaterial); Lockers.add(locker73Left);
var locker74Left = createLocker(3.5, 2, 74, lockerGeometry, lockerMaterial); Lockers.add(locker74Left);
var locker75Left = createLocker(3.5, 2, 75, lockerGeometry, lockerMaterial); Lockers.add(locker75Left);
var locker76Left = createLocker(3.5, 2, 76, lockerGeometry, lockerMaterial); Lockers.add(locker76Left);
var locker77Left = createLocker(3.5, 2, 77, lockerGeometry, lockerMaterial); Lockers.add(locker77Left);
var locker78Left = createLocker(3.5, 2, 78, lockerGeometry, lockerMaterial); Lockers.add(locker78Left);
var locker79Left = createLocker(3.5, 2, 79, lockerGeometry, lockerMaterial); Lockers.add(locker79Left);
var locker80Left = createLocker(3.5, 2, 80, lockerGeometry, lockerMaterial); Lockers.add(locker80Left);
var locker81Left = createLocker(3.5, 2, 81, lockerGeometry, lockerMaterial); Lockers.add(locker81Left);
var locker82Left = createLocker(3.5, 2, 82, lockerGeometry, lockerMaterial); Lockers.add(locker82Left);
var locker83Left = createLocker(3.5, 2, 83, lockerGeometry, lockerMaterial); Lockers.add(locker83Left);
var locker84Left = createLocker(3.5, 2, 84, lockerGeometry, lockerMaterial); Lockers.add(locker84Left);
var locker85Left = createLocker(3.5, 2, 85, lockerGeometry, lockerMaterial); Lockers.add(locker85Left);
var locker86Left = createLocker(3.5, 2, 86, lockerGeometry, lockerMaterial); Lockers.add(locker86Left);
var locker87Left = createLocker(3.5, 2, 87, lockerGeometry, lockerMaterial); Lockers.add(locker87Left);
var locker88Left = createLocker(3.5, 2, 88, lockerGeometry, lockerMaterial); Lockers.add(locker88Left);
var locker89Left = createLocker(3.5, 2, 89, lockerGeometry, lockerMaterial); Lockers.add(locker89Left);
var locker90Left = createLocker(3.5, 2, 90, lockerGeometry, lockerMaterial); Lockers.add(locker90Left);
var locker91Left = createLocker(3.5, 2, 91, lockerGeometry, lockerMaterial); Lockers.add(locker91Left);
var locker92Left = createLocker(3.5, 2, 92, lockerGeometry, lockerMaterial); Lockers.add(locker92Left);
var locker93Left = createLocker(3.5, 2, 93, lockerGeometry, lockerMaterial); Lockers.add(locker93Left);
var locker94Left = createLocker(3.5, 2, 94, lockerGeometry, lockerMaterial); Lockers.add(locker94Left);
var locker95Left = createLocker(3.5, 2, 95, lockerGeometry, lockerMaterial); Lockers.add(locker95Left);
var locker96Left = createLocker(3.5, 2, 96, lockerGeometry, lockerMaterial); Lockers.add(locker96Left);
var locker97Left = createLocker(3.5, 2, 97, lockerGeometry, lockerMaterial); Lockers.add(locker97Left);
var locker98Left = createLocker(3.5, 2, 98, lockerGeometry, lockerMaterial); Lockers.add(locker98Left);
var locker99Left = createLocker(3.5, 2, 99, lockerGeometry, lockerMaterial); Lockers.add(locker99Left);
var locker100Left = createLocker(3.5, 2, 100, lockerGeometry, lockerMaterial); Lockers.add(locker100Left);


var locker1Right = createLocker(-3.5, 2, 1, lockerGeometry, lockerMaterial); Lockers.add(locker1Right);
var locker2Right = createLocker(-3.5, 2, 2, lockerGeometry, lockerMaterial); Lockers.add(locker2Right);
var locker3Right = createLocker(-3.5, 2, 3, lockerGeometry, lockerMaterial); Lockers.add(locker3Right);
var locker4Right = createLocker(-3.5, 2, 4, lockerGeometry, lockerMaterial); Lockers.add(locker4Right);
var locker5Right = createLocker(-3.5, 2, 5, lockerGeometry, lockerMaterial); Lockers.add(locker5Right);
var locker6Right = createLocker(-3.5, 2, 6, lockerGeometry, lockerMaterial); Lockers.add(locker6Right);
var locker7Right = createLocker(-3.5, 2, 7, lockerGeometry, lockerMaterial); Lockers.add(locker7Right);
var locker8Right = createLocker(-3.5, 2, 8, lockerGeometry, lockerMaterial); Lockers.add(locker8Right);
var locker9Right = createLocker(-3.5, 2, 9, lockerGeometry, lockerMaterial); Lockers.add(locker9Right);
var locker10Right = createLocker(-3.5, 2, 10, lockerGeometry, lockerMaterial); Lockers.add(locker10Right);
var locker11Right = createLocker(-3.5, 2, 11, lockerGeometry, lockerMaterial); Lockers.add(locker11Right);
var locker12Right = createLocker(-3.5, 2, 12, lockerGeometry, lockerMaterial); Lockers.add(locker12Right);
var locker13Right = createLocker(-3.5, 2, 13, lockerGeometry, lockerMaterial); Lockers.add(locker13Right);
var locker14Right = createLocker(-3.5, 2, 14, lockerGeometry, lockerMaterial); Lockers.add(locker14Right);
var locker15Right = createLocker(-3.5, 2, 15, lockerGeometry, lockerMaterial); Lockers.add(locker15Right);
var locker16Right = createLocker(-3.5, 2, 16, lockerGeometry, lockerMaterial); Lockers.add(locker16Right);
var locker17Right = createLocker(-3.5, 2, 17, lockerGeometry, lockerMaterial); Lockers.add(locker17Right);
var locker18Right = createLocker(-3.5, 2, 18, lockerGeometry, lockerMaterial); Lockers.add(locker18Right);
var locker19Right = createLocker(-3.5, 2, 19, lockerGeometry, lockerMaterial); Lockers.add(locker19Right);
var locker20Right = createLocker(-3.5, 2, 20, lockerGeometry, lockerMaterial); Lockers.add(locker20Right);
var locker21Right = createLocker(-3.5, 2, 21, lockerGeometry, lockerMaterial); Lockers.add(locker21Right);
var locker22Right = createLocker(-3.5, 2, 22, lockerGeometry, lockerMaterial); Lockers.add(locker22Right);
var locker23Right = createLocker(-3.5, 2, 23, lockerGeometry, lockerMaterial); Lockers.add(locker23Right);
var locker24Right = createLocker(-3.5, 2, 24, lockerGeometry, lockerMaterial); Lockers.add(locker24Right);
var locker25Right = createLocker(-3.5, 2, 25, lockerGeometry, lockerMaterial); Lockers.add(locker25Right);
var locker26Right = createLocker(-3.5, 2, 26, lockerGeometry, lockerMaterial); Lockers.add(locker26Right);
var locker27Right = createLocker(-3.5, 2, 27, lockerGeometry, lockerMaterial); Lockers.add(locker27Right);
var locker28Right = createLocker(-3.5, 2, 28, lockerGeometry, lockerMaterial); Lockers.add(locker28Right);
var locker29Right = createLocker(-3.5, 2, 29, lockerGeometry, lockerMaterial); Lockers.add(locker29Right);
var locker30Right = createLocker(-3.5, 2, 30, lockerGeometry, lockerMaterial); Lockers.add(locker30Right);
var locker31Right = createLocker(-3.5, 2, 31, lockerGeometry, lockerMaterial); Lockers.add(locker31Right);
var locker32Right = createLocker(-3.5, 2, 32, lockerGeometry, lockerMaterial); Lockers.add(locker32Right);
var locker33Right = createLocker(-3.5, 2, 33, lockerGeometry, lockerMaterial); Lockers.add(locker33Right);
var locker34Right = createLocker(-3.5, 2, 34, lockerGeometry, lockerMaterial); Lockers.add(locker34Right);
var locker35Right = createLocker(-3.5, 2, 35, lockerGeometry, lockerMaterial); Lockers.add(locker35Right);
var locker36Right = createLocker(-3.5, 2, 36, lockerGeometry, lockerMaterial); Lockers.add(locker36Right);
var locker37Right = createLocker(-3.5, 2, 37, lockerGeometry, lockerMaterial); Lockers.add(locker37Right);
var locker38Right = createLocker(-3.5, 2, 38, lockerGeometry, lockerMaterial); Lockers.add(locker38Right);
var locker39Right = createLocker(-3.5, 2, 39, lockerGeometry, lockerMaterial); Lockers.add(locker39Right);
var locker40Right = createLocker(-3.5, 2, 40, lockerGeometry, lockerMaterial); Lockers.add(locker40Right);
var locker41Right = createLocker(-3.5, 2, 41, lockerGeometry, lockerMaterial); Lockers.add(locker41Right);
var locker42Right = createLocker(-3.5, 2, 42, lockerGeometry, lockerMaterial); Lockers.add(locker42Right);
var locker43Right = createLocker(-3.5, 2, 43, lockerGeometry, lockerMaterial); Lockers.add(locker43Right);
var locker44Right = createLocker(-3.5, 2, 44, lockerGeometry, lockerMaterial); Lockers.add(locker44Right);
var locker45Right = createLocker(-3.5, 2, 45, lockerGeometry, lockerMaterial); Lockers.add(locker45Right);
var locker46Right = createLocker(-3.5, 2, 46, lockerGeometry, lockerMaterial); Lockers.add(locker46Right);
var locker47Right = createLocker(-3.5, 2, 47, lockerGeometry, lockerMaterial); Lockers.add(locker47Right);
var locker48Right = createLocker(-3.5, 2, 48, lockerGeometry, lockerMaterial); Lockers.add(locker48Right);
var locker49Right = createLocker(-3.5, 2, 49, lockerGeometry, lockerMaterial); Lockers.add(locker49Right);
var locker50Right = createLocker(-3.5, 2, 50, lockerGeometry, lockerMaterial); Lockers.add(locker50Right);
var locker51Right = createLocker(-3.5, 2, 51, lockerGeometry, lockerMaterial); Lockers.add(locker51Right);
var locker52Right = createLocker(-3.5, 2, 52, lockerGeometry, lockerMaterial); Lockers.add(locker52Right);
var locker53Right = createLocker(-3.5, 2, 53, lockerGeometry, lockerMaterial); Lockers.add(locker53Right);
var locker54Right = createLocker(-3.5, 2, 54, lockerGeometry, lockerMaterial); Lockers.add(locker54Right);
var locker55Right = createLocker(-3.5, 2, 55, lockerGeometry, lockerMaterial); Lockers.add(locker55Right);
var locker56Right = createLocker(-3.5, 2, 56, lockerGeometry, lockerMaterial); Lockers.add(locker56Right);
var locker57Right = createLocker(-3.5, 2, 57, lockerGeometry, lockerMaterial); Lockers.add(locker57Right);
var locker58Right = createLocker(-3.5, 2, 58, lockerGeometry, lockerMaterial); Lockers.add(locker58Right);
var locker59Right = createLocker(-3.5, 2, 59, lockerGeometry, lockerMaterial); Lockers.add(locker59Right);
var locker60Right = createLocker(-3.5, 2, 60, lockerGeometry, lockerMaterial); Lockers.add(locker60Right);
var locker61Right = createLocker(-3.5, 2, 61, lockerGeometry, lockerMaterial); Lockers.add(locker61Right);
var locker62Right = createLocker(-3.5, 2, 62, lockerGeometry, lockerMaterial); Lockers.add(locker62Right);
var locker63Right = createLocker(-3.5, 2, 63, lockerGeometry, lockerMaterial); Lockers.add(locker63Right);
var locker64Right = createLocker(-3.5, 2, 64, lockerGeometry, lockerMaterial); Lockers.add(locker64Right);
var locker65Right = createLocker(-3.5, 2, 65, lockerGeometry, lockerMaterial); Lockers.add(locker65Right);
var locker66Right = createLocker(-3.5, 2, 66, lockerGeometry, lockerMaterial); Lockers.add(locker66Right);
var locker67Right = createLocker(-3.5, 2, 67, lockerGeometry, lockerMaterial); Lockers.add(locker67Right);
var locker68Right = createLocker(-3.5, 2, 68, lockerGeometry, lockerMaterial); Lockers.add(locker68Right);
var locker69Right = createLocker(-3.5, 2, 69, lockerGeometry, lockerMaterial); Lockers.add(locker69Right);
var locker70Right = createLocker(-3.5, 2, 70, lockerGeometry, lockerMaterial); Lockers.add(locker70Right);
var locker71Right = createLocker(-3.5, 2, 71, lockerGeometry, lockerMaterial); Lockers.add(locker71Right);
var locker72Right = createLocker(-3.5, 2, 72, lockerGeometry, lockerMaterial); Lockers.add(locker72Right);
var locker73Right = createLocker(-3.5, 2, 73, lockerGeometry, lockerMaterial); Lockers.add(locker73Right);
var locker74Right = createLocker(-3.5, 2, 74, lockerGeometry, lockerMaterial); Lockers.add(locker74Right);
var locker75Right = createLocker(-3.5, 2, 75, lockerGeometry, lockerMaterial); Lockers.add(locker75Right);
var locker76Right = createLocker(-3.5, 2, 76, lockerGeometry, lockerMaterial); Lockers.add(locker76Right);
var locker77Right = createLocker(-3.5, 2, 77, lockerGeometry, lockerMaterial); Lockers.add(locker77Right);
var locker78Right = createLocker(-3.5, 2, 78, lockerGeometry, lockerMaterial); Lockers.add(locker78Right);
var locker79Right = createLocker(-3.5, 2, 79, lockerGeometry, lockerMaterial); Lockers.add(locker79Right);
var locker80Right = createLocker(-3.5, 2, 80, lockerGeometry, lockerMaterial); Lockers.add(locker80Right);
var locker81Right = createLocker(-3.5, 2, 81, lockerGeometry, lockerMaterial); Lockers.add(locker81Right);
var locker82Right = createLocker(-3.5, 2, 82, lockerGeometry, lockerMaterial); Lockers.add(locker82Right);
var locker83Right = createLocker(-3.5, 2, 83, lockerGeometry, lockerMaterial); Lockers.add(locker83Right);
var locker84Right = createLocker(-3.5, 2, 84, lockerGeometry, lockerMaterial); Lockers.add(locker84Right);
var locker85Right = createLocker(-3.5, 2, 85, lockerGeometry, lockerMaterial); Lockers.add(locker85Right);
var locker86Right = createLocker(-3.5, 2, 86, lockerGeometry, lockerMaterial); Lockers.add(locker86Right);
var locker87Right = createLocker(-3.5, 2, 87, lockerGeometry, lockerMaterial); Lockers.add(locker87Right);
var locker88Right = createLocker(-3.5, 2, 88, lockerGeometry, lockerMaterial); Lockers.add(locker88Right);
var locker89Right = createLocker(-3.5, 2, 89, lockerGeometry, lockerMaterial); Lockers.add(locker89Right);
var locker90Right = createLocker(-3.5, 2, 90, lockerGeometry, lockerMaterial); Lockers.add(locker90Right);
var locker91Right = createLocker(-3.5, 2, 91, lockerGeometry, lockerMaterial); Lockers.add(locker91Right);
var locker92Right = createLocker(-3.5, 2, 92, lockerGeometry, lockerMaterial); Lockers.add(locker92Right);
var locker93Right = createLocker(-3.5, 2, 93, lockerGeometry, lockerMaterial); Lockers.add(locker93Right);
var locker94Right = createLocker(-3.5, 2, 94, lockerGeometry, lockerMaterial); Lockers.add(locker94Right);
var locker95Right = createLocker(-3.5, 2, 95, lockerGeometry, lockerMaterial); Lockers.add(locker95Right);
var locker96Right = createLocker(-3.5, 2, 96, lockerGeometry, lockerMaterial); Lockers.add(locker96Right);
var locker97Right = createLocker(-3.5, 2, 97, lockerGeometry, lockerMaterial); Lockers.add(locker97Right);
var locker98Right = createLocker(-3.5, 2, 98, lockerGeometry, lockerMaterial); Lockers.add(locker98Right);
var locker99Right = createLocker(-3.5, 2, 99, lockerGeometry, lockerMaterial); Lockers.add(locker99Right);
var locker100Right = createLocker(-3.5, 2, 100, lockerGeometry, lockerMaterial); Lockers.add(locker100Right);

scene.add(Lockers);


//Objects
const sideWallGeometry = new THREE.PlaneGeometry(1000, 5);
const flatWallGeometry = new THREE.PlaneGeometry(8, 1000);
const backWallGeometry = new THREE.PlaneGeometry(8, 5);

const wallMaterial = new THREE.MeshStandardMaterial({color: 0xa4a4a4, side: THREE.FrontSide});

var wallTop = new THREE.Mesh(flatWallGeometry, wallMaterial);
var wallBottom = new THREE.Mesh(flatWallGeometry, wallMaterial);
var wallLeft = new THREE.Mesh(sideWallGeometry, wallMaterial);
var wallRight = new THREE.Mesh(sideWallGeometry, wallMaterial);
var wallBack = new THREE.Mesh(backWallGeometry, wallMaterial)

wallTop.position.set(0, 5, 500);
wallBottom.position.set(0, 0, 500);
wallLeft.position.set(-4, 2.5, 500);
wallRight.position.set(4, 2.5, 500);
wallBack.position.set(0, 2.5, 0);

wallTop.rotation.set((90 * (Math.PI / 180)), 0, 0);
wallBottom.rotation.set((-90 * (Math.PI / 180)), 0 , 0);
wallLeft.rotation.set(0, (90 * (Math.PI / 180)), 0);
wallRight.rotation.set(0, (-90 * (Math.PI / 180)), 0);
wallBack.rotation.set(0, 0, 0);

scene.add(wallTop);
scene.add(wallRight);
scene.add(wallBottom);
scene.add(wallLeft);
scene.add(wallBack);