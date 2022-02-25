//Animate
function animate() {
	requestAnimationFrame(animate);
	camera.position.z += 0.1;
	renderer.render(scene, camera);
};

animate();
