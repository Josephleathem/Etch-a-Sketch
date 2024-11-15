// create a variable for grid container to append new elements too
const container = document.getElementById('gridContainer')

// create a for loop to iterate the number of squares needed to be created and appended
for (let i = 0; i < 256; i++) { // row * columns = gris squares (Here 16*16 = 256)
  // create a div element for grid square, save it to a variable, add class to ne div, append to container
  const square = document.createElement('div'); // creates the div element
  square.classList.add('gridSquare'); // add's gridSquare class
  container.appendChild(square); // appends square to container. 
}