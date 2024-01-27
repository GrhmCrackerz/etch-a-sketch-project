let isGradient = true;

function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Clear existing grid if any
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.style.width = `calc(960px / ${size})`;
        square.style.height = `calc(960px / ${size})`;
        
        square.dataset.darkness = 0;

        square.addEventListener('mouseenter', () => {
            if(isGradient){
                let darkness = parseInt(square.dataset.darkness, 10);
            if (darkness < 10) {
                darkness += 1; // Increase darkness level by 1
                square.dataset.darkness = darkness;
                square.style.backgroundColor = `rgba(0, 0, 0, ${darkness * 0.1})`; // Update background color
            }
            } else {
                square.style.backgroundColor = 'black';
            }
            
        });
        container.appendChild(square);
    }
}

function toggleMode(){
    isGradient = !isGradient;
    document.getElementById('toogleModeButton').textContent = isGradient ? "Toggle to Solid Color" : "Toggle to Gradient";
    createGrid(16);
}

document.getElementById('gridSizeButton').addEventListener('click', () => {
    let newSize = prompt("Enter the new grid size (max 100):", 16);
    newSize = Math.min(100, Math.max(1, newSize)); // Limit size to 1 and 100
    createGrid(newSize);
})

document.getElementById('toggleModeButton').addEventListener('click', toggleMode);

createGrid(16);