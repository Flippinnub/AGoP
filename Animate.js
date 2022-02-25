//Animate
function animate() {
	requestAnimationFrame(animate);
    if (controls.enabled != true) {camera.position.z += 0.5;}
    controls.update();
    renderer.render(scene, camera);
};

animate();