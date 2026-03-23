const cursor = document.querySelector('.cursor');
const crosshair = document.querySelector('.crosshair');

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;

let lastX = mouseX;
let lastY = mouseY;

let rotation = 0;
let rotationSpeed = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCrosshair() {
    currentX += (mouseX - currentX) * 0.18;
    currentY += (mouseY - currentY) * 0.18;

    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;

    const dx = currentX - lastX;
    const dy = currentY - lastY;
    const speed = Math.sqrt(dx * dx + dy * dy);

    rotationSpeed += speed * 0.8;
    rotationSpeed *= 0.92;

    rotation += rotationSpeed;

    crosshair.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

    lastX = currentX;
    lastY = currentY;

    requestAnimationFrame(animateCrosshair);
}

animateCrosshair();
