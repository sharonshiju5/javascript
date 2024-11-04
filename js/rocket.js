function moveImageUp() {
    let rotationAngle = 0;
    let moveDown = 0;
    const image = document.getElementById("myImage");
    const currentTop = parseInt(window.getComputedStyle(image).top) || 0;
    image.style.top = (currentTop - 50) + "px";
    rotationAngle += 0;
    moveDown += 50;
    image.style.transform = `translateY(${moveDown}px) rotate(${rotationAngle}deg)`;
}
function down() {
    let rotationAngle = 0;
    let moveDown = 0;
    const image = document.getElementById("myImage");
    const currentTop = parseInt(window.getComputedStyle(image).top) || 0;
    image.style.top = (currentTop + 50) + "px";
    rotationAngle += 180;
    moveDown += 50;
    image.style.transform = `translateY(${moveDown}px) rotate(${rotationAngle}deg)`;
}
function left() {
    let rotationAngle = 0;
    let moveDown = 0;
    const image = document.getElementById("myImage");
    const currentTop = parseInt(window.getComputedStyle(image).left) || 0;
    image.style.left = (currentTop - 50) + "px";
    rotationAngle += 270;
    moveDown += 50;
    image.style.transform = `translateY(${moveDown}px) rotate(${rotationAngle}deg)`;
}
function right() {
    let rotationAngle = 0;
    let moveDown = 0;
    const image = document.getElementById("myImage");
    const currentTop = parseInt(window.getComputedStyle(image).left) || 0;
    image.style.left = (currentTop + 50) + "px";
    rotationAngle += 90;
    moveDown += 50;
    image.style.transform = `translateY(${moveDown}px) rotate(${rotationAngle}deg)`;
    
}