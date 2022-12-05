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
             e.target.classList.add('new-color')
            }
           });
        boxes[i].addEventListener('mouseenter', (e) => {e.target.classList.add('hover-color')})
        boxes[i].addEventListener('mouseleave', (e) => {e.target.classList.remove('hover-color')})
    }
}