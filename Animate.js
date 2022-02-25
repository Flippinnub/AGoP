//Animate
function animate() {
    requestAnimationFrame(animate);
    camera.position.z += 0.5;
    renderer.render(scene, camera);
};

animate();
