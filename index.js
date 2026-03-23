const crosshair = document.querySelector('.crosshair');

document.addEventListener("mousemove", (e) => {
    crosshair.style.left = e.pageX + 'px';
    crosshair.style.top = e.pageY + 'px';
    mouseX = e.clientX;
    mouseY = e.clientY;
})

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;

let lastX = mouseX;
let lastY = mouseY;

let rotation = 0;
let rotationSpeed = 0;

function animateCrosshair() {
    currentX += (mouseX - currentX) * 0.18;
    currentY += (mouseY - currentY) * 0.18;

    crosshair.style.left = `${currentX}px`;
    crosshair.style.top = `${currentY}px`;

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
