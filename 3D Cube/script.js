const container = document.getElementById('container');
const cube = document.getElementById('cube');

container.addEventListener('mousemove', (e) => {
    const yRotation = -((e.clientX / container.clientWidth) * 360);
    const xRotation = ((e.clientY / container.clientHeight) * 360);

    cube.style.transform = `rotateY(${yRotation}deg) rotateX(${xRotation}deg)`;
});
