//Animate

const controls = new FirstPersonControls(camera, renderer.domElement, scene);

controls.addEventListener( 'change', function () {

	renderer.render( scene, camera );

} );

function animate() {
	requestAnimationFrame(animate);
    
    camera.position.z += 0.5;

    renderer.render(scene, camera);
};

animate();