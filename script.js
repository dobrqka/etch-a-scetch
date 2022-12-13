// select the container

const container = document.querySelector('.container');
container.style.display = 'grid';
container.style.boxSizing = 'border-box';
container.style.width = '500px';
container.style.height = '500px';
container.style.backgroundColor = '#EEEEEE';

// new div container for buttons

const buttonContainer = document.createElement('div');
buttonContainer.className = 'buttons';
document.body.appendChild(buttonContainer);

// create div, add to container and do it 256 (16x16) times

function setGrid () {
    const oldDivs = document.querySelectorAll('.container div');
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
newGrid.textContent = 'New Grid';
buttonContainer.appendChild(newGrid);
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
        boxes[i].addEventListener('click', (e) => {
           e.target.classList.add('new-color')
        });
        boxes[i].addEventListener('mouseenter', (e) => {e.target.classList.add('hover-color')});
        boxes[i].addEventListener('mouseleave', (e) => {e.target.classList.remove('hover-color')})
    }
}

// button that removes the grid lines

const toggleGrid = document.createElement('button');
toggleGrid.textContent = 'Toggle Grid';
buttonContainer.appendChild(toggleGrid);

function removeGridLines () {
    const theDivs = document.querySelectorAll('.container div');
    theDivs.forEach(singleDiv => singleDiv.classList.toggle('div-borders'))
}

toggleGrid.addEventListener('click', removeGridLines);

// "Clear" button that deletes everything you've painted

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
buttonContainer.appendChild(clearButton);

function clearDivs () {
    const theDivs = document.querySelectorAll('.container div');
    theDivs.forEach(singleDiv => singleDiv.className = 'div-borders');
    theDivs.forEach(singleDiv => singleDiv.style.backgroundColor = 'transparent');
}

clearButton.addEventListener('click', clearDivs)

function trippyColors() {
    const boxes = document.querySelectorAll('.container div');
    for (i=0; i<boxes.length; i++) {
        boxes[i].addEventListener('mousemove', (e) => {
            if(e.buttons == 1) {
             e.preventDefault();
             e.target.style.backgroundColor = 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')';
            }
           });
        boxes[i].addEventListener('click', (e) => {
           e.target.style.backgroundColor = 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')';;
           });
      
    }
}

const trippyColor = document.createElement('button');
trippyColor.textContent = 'Trippy';
buttonContainer.appendChild(trippyColor);
trippyColor.addEventListener('click', trippyColors);

// color choice

function colorChoice(theColor) {
    const boxes = document.querySelectorAll('.container div');
    for (i=0; i<boxes.length; i++) {
        boxes[i].addEventListener('mousemove', (e) => {
            if(e.buttons == 1) {
             e.preventDefault();
             e.target.style.backgroundColor = `${theColor}`;
            }
           });
         boxes[i].addEventListener('click', (e) => {
           e.target.style.backgroundColor = `${theColor}`;
           });
    }
}

const blackButton = document.createElement('button');
blackButton.style.color = 'black';
blackButton.style.backgroundColor = 'black';
blackButton.textContent = 'black';
blackButton.className = 'colorbutton'
buttonContainer.appendChild(blackButton);

const blueButton = document.createElement('button');
blueButton.style.color = 'blue';
blueButton.style.backgroundColor = 'blue';
blueButton.textContent = 'blue';
blueButton.className = 'colorbutton'
buttonContainer.appendChild(blueButton);

const greenButton = document.createElement('button');
greenButton.textContent = 'green';
greenButton.style.color = 'green';
greenButton.style.backgroundColor = 'green';
greenButton.className = 'colorbutton'
buttonContainer.appendChild(greenButton);

const redButton = document.createElement('button');
redButton.textContent = 'red';
redButton.style.color = 'red';
redButton.style.backgroundColor = 'red';
redButton.className = 'colorbutton'
buttonContainer.appendChild(redButton);

const yellowButton = document.createElement('button');
yellowButton.style.color = 'yellow';
yellowButton.style.backgroundColor = 'yellow';
yellowButton.textContent = 'yellow';
yellowButton.className = 'colorbutton'
buttonContainer.appendChild(yellowButton);

const colorButtons = document.querySelectorAll('.colorbutton')
for (i=0; i<colorButtons.length; i++) {
  colorButtons[i].addEventListener('click', (e) => colorChoice(e.target.textContent))
}

// eraser

function eraseThings() {
  const boxes = document.querySelectorAll('.container div');
    for (i=0; i<boxes.length; i++) {
        boxes[i].addEventListener('mousemove', (e) => {
            if(e.buttons == 1) {
             e.preventDefault();
             e.target.style.backgroundColor = '#EEEEEE';
             e.target.style.filter = 'brightness(100%)';
            }
           });
    }
}

const eraseButton = document.createElement('button');
eraseButton.textContent = 'Erase';
buttonContainer.appendChild(eraseButton);
eraseButton.addEventListener('click', eraseThings);

// tidy up the code