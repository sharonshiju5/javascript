const Div = document.getElementById('movec');

document.addEventListener('mousemove', (event) => {
    Div.style.left = `${event.pageX}px`;
    Div.style.top = `${event.pageY}px`;
});
