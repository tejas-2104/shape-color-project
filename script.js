const shape = document.getElementById('shape');
const changeColorBtn = document.getElementById('changeColorBtn');
const changeShapeBtn = document.getElementById('changeShapeBtn');


const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33C1', '#33C1FF', '#C1FF33', '#FF3333', '#33FF33', '#3333FF', '#FFFF33'];


const shapes = ['triangle', 'square', 'circle', 'rectangle', 'diamond'];


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomShape() {
    return shapes[Math.floor(Math.random() * shapes.length)];
}

changeColorBtn.addEventListener('click', () => {
    shape.style.backgroundColor = getRandomColor();
});

changeShapeBtn.addEventListener('click', () => {
    const randomShape = getRandomShape();
    shape.className = `shape ${randomShape}`;
});
