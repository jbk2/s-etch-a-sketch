
document.addEventListener("DOMContentLoaded", () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  
  const container = document.getElementById('squares-container');
  const gridSizeBtn = document.getElementById('grid-size');
  let gridSize = 10;
  
  function buildGrid() {
    let sqWidth = Math.floor(windowWidth / gridSize) - 1;
    let sqHeight = Math.floor(windowHeight / gridSize) - 1;
    console.log(sqWidth);
    console.log(sqHeight);
    container.innerHTML = "";

    for (let i = 1; i <= gridSize; i++) {
      for (let i = 1; i <= gridSize; i++) {
        let square = document.createElement('div')
        square.classList.add('square');
        square.style.width = sqWidth + 'px';
        square.style.height = sqHeight + 'px';
        square.style.border = '1px solid black';
        container.appendChild(square);
      }
    }
  };

  function getGridSize() {
    gridSize = prompt('what size  grid do you want');
    console.log(gridSize);
    buildGrid();
  };

  function updateWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    console.log(`Width: ${windowWidth}, Height: ${windowHeight}`);
  }
  
  window.addEventListener('resize', updateWindowSize);
  updateWindowSize();

  buildGrid();
  gridSizeBtn.addEventListener('click', getGridSize);

  
});
