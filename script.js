const container = document.getElementById('gridContainer');

for (let i = 0; i < 256; i++) { // 16 * 16 = 256 squares
    const square = document.createElement('div'); // Create a new div
    square.classList.add('grid-square'); // Add 'grid-square' class
    container.appendChild(square); // Append to container
}
