// select the container

const container = document.querySelector('.container');
container.style.display = 'grid';
container.style.boxSizing = 'border-box';
container.style.width = '500px';
container.style.height = '500px';

// create div, add to container and do it 256 (16x16) times

function setGrid () {
    const oldDivs = document.querySelectorAll('.container div')
    oldDivs.forEach(ofthem => ofthem.remove());
    let gridSide = prompt('Number of squares per side', '');
    if (gridSide<2) {
        alert('Please insert a number higher than 1');
        setGrid();
        }
    else if (gridSide<100) {
        for (i=0; i<(gridSide**2); i++) {
            container.style.gridTemplateColumns = `repeat(${gridSide}, auto`;
            const newDiv = document.createElement('div');
            newDiv.style.height = 'auto';
            newDiv.style.width = 'auto';
            newDiv.style.boxSizing = 'border-box';
            newDiv.classList.add('div-borders');
            container.appendChild(newDiv);
        }
    }
    else {
        alert('Please insert a number below 100');
        setGrid();
        }
    changeColor();
}

// button to create a grid according to a side size selection

const newGrid = document.createElement('button');
newGrid.textContent = 'Create a grid';
document.body.appendChild(newGrid);
newGrid.addEventListener('click', setGrid);

// make the divs change color

function changeColor() {
    const boxes = document.querySelectorAll('.container div');
    for (i=0; i<boxes.length; i++) {
        boxes[i].addEventListener('mousemove', (e) => {
            if(e.buttons == 1) {
             e.preventDefault();
             e.target.classList.add('new-color')
            }
           });
        boxes[i].addEventListener('mouseenter', (e) => {e.target.classList.add('hover-color')})
        boxes[i].addEventListener('mouseleave', (e) => {e.target.classList.remove('hover-color')})
    }
}

// button that removes the grid lines

const toggleGrid = document.createElement('button');
toggleGrid.textContent = 'Toggle Grid';
document.body.appendChild(toggleGrid);

function removeGridLines () {
    const theDivs = document.querySelectorAll('.container div');
    theDivs.forEach(singleDiv => singleDiv.classList.toggle('div-borders'))
}

toggleGrid.addEventListener('click', removeGridLines);

// "Clear" button that deletes everything you've painted

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
document.body.appendChild(clearButton);

function clearDivs () {
    const theDivs = document.querySelectorAll('.container div');
    theDivs.forEach(singleDiv => singleDiv.classList.remove('new-color'))
}

clearButton.addEventListener('click', clearDivs)


// color choice, including a rainbow color

// shading option

// eraser

// css to make it look cool