function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Clear existing grid if any
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.style.width = `calc(960px / ${size})`;
        square.style.height = `calc(960px / ${size})`;
        
        // Add event listener for the 'mouseenter' event
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black'; // Change to desired color
        });
        container.appendChild(square);
    }
}

document.getElementById('gridSizeButton').addEventListener('click', () => {
    let newSize = prompt("Enter the new grid size (max 100):", 16);
    newSize = Math.min(100, Math.max(1, newSize)); // Limit size to 1 and 100
    createGrid(newSize);
})


createGrid(16);