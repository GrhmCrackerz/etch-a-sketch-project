function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Clear existing grid if any

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        
        // Add event listener for the 'mouseenter' event
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black'; // Change to desired color
        });

        container.appendChild(square);
    }
}

createGrid(16); // Creates a 16x16 grid


createGrid(16);