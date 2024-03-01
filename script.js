const shape = document.getElementById('shape');
const changeColorBtn = document.getElementById('changeColorBtn');
const changeShapeBtn = document.getElementById('changeShapeBtn');

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33C1', '#33C1FF', '#C1FF33', '#FF3333', '#33FF33', '#3333FF', '#FFFF33'];


const shapes = ['circle', 'square', 'rectangle'];

let currentShapeIndex = 0;

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}


function changeShape() {
    shape.style.display = 'none'; 
    const currentShape = shapes[currentShapeIndex];
    shape.className = `shape ${currentShape}`;
    shape.style.display = 'block';
    currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
}

changeColorBtn.addEventListener('click', () => {
    shape.style.backgroundColor = getRandomColor();
});

changeShapeBtn.addEventListener('click', () => {
    changeShape();
});


changeShape();
