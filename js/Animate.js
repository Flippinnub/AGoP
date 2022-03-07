//Animate
function animate() {
    requestAnimationFrame(animate);
    camera.position.z += 0.001;
    renderer.render(scene, camera);
};

animate();
