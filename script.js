document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('gridContainer');

  // Function to create the grid
  function createGrid(squaresPerSide) {
      container.innerHTML = ''; // Clear the existing grid
      const gridSize = 640; // Fixed size of the grid container in pixels
      const squareSize = gridSize / squaresPerSide; // Calculate the size of each square

      // Loop to create squares
      for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
          const square = document.createElement('div');
          square.classList.add('gridSquare');
          square.style.width = `${squareSize}px`;
          square.style.height = `${squareSize}px`;

          // Function to generate a random RGB color
          function getRandomColor() {
              const r = Math.floor(Math.random() * 256);
              const g = Math.floor(Math.random() * 256);
              const b = Math.floor(Math.random() * 256);
              return `rgb(${r}, ${g}, ${b})`;
          }

          // Add mouseover event listener to change the background color
          square.addEventListener('mouseover', () => {
              // Randomize the color on each hover
              const randomColor = getRandomColor();
              square.style.backgroundColor = randomColor;
          });

          container.appendChild(square);
      }
  }

  // Function to prompt the user for grid size
  function promptForGridSize() {
      let squaresPerSide = parseInt(prompt("Enter the number of squares per side (1-100):"));
      while (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
          squaresPerSide = parseInt(prompt("Invalid input. Please enter a number between 1 and 100:"));
      }
      createGrid(squaresPerSide); // Create the grid with the validated input
  }

  // Add event listener to the button for changing the grid size
  document.querySelector('.changeGridButton').addEventListener('click', promptForGridSize);

  // Create an initial 16x16 grid
  createGrid(16);
});
