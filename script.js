// select the container

const container = document.querySelector('.container');
container.style.display = 'grid';

// create div, add to container and do it 256 (16x16) times

function setGrid () {
    let gridSide = prompt('Set a grid side', '');
    for (i=0; i<(gridSide**2); i++) {
        container.style.gridTemplateColumns = `repeat(${gridSide}, 30px)`;
        const newDiv = document.createElement('div');
        newDiv.style.height = '30px';
        newDiv.style.width = '30px';
        newDiv.style.border = 'dotted black 1px';
        container.appendChild(newDiv);
    }
}

// button to create a grid according to a side size selection

const newGrid = document.createElement('button');
newGrid.textContent = 'Create a grid';
document.body.appendChild(newGrid);
newGrid.addEventListener('click', setGrid);