//global variable
const container = document.getElementById("grid-container");

//removes all the children of a node
function removeAllChildren(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

//makes a grid with given dimensions
function makeGrid(rows, cols) {
    removeAllChildren(container);
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.addEventListener("mouseover", () => {
            event.target.style.backgroundColor = "black";
        });
        container.appendChild(cell);
    };
};

//makes a grid with custom dimensions
function makeCustomGrid() {
    let rows = prompt("Please enter the amount of rows/columns (max 100)", "16");
    if (parseInt(rows, "10") < 100) {
        makeGrid(parseInt(rows, "10"), parseInt(rows, "10"))
    }
    else {
        makeGrid(100, 100);
    };
};


//clears the canvas, mantaining the size
function resetGrid() {
    let cells = container.children; 
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.style.backgroundColor = "transparent";
    }
}

//default size
makeGrid(16, 16);
