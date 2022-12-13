// select the container

const container = document.querySelector('.container');
container.style.display = 'grid';
container.style.boxSizing = 'border-box';
container.style.width = '610px';
container.style.height = '610px';
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

// default grid on start-up

function startupGrid() {
    for (i=0; i<(16**2); i++) {
        container.style.gridTemplateColumns = `repeat(16, auto`;
        const newDiv = document.createElement('div');
        newDiv.style.height = 'auto';
        newDiv.style.width = 'auto';
        newDiv.style.boxSizing = 'border-box';
        newDiv.classList.add('div-borders');
        container.appendChild(newDiv);
    }
    changeColor();
}

startupGrid();

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
    theDivs.forEach(singleDiv => singleDiv.classList.remove('black', 'blue', 'green', 'yellow', 'red', 'new-color'));
    theDivs.forEach(singleDiv => singleDiv.style.removeProperty('background-color'));
}

clearButton.addEventListener('click', clearDivs)

function trippyColors() {
    const boxes = document.querySelectorAll('.container div');
    for (i=0; i<boxes.length; i++) {
        boxes[i].addEventListener('mousemove', (e) => {
            if(e.buttons == 1) {
             e.preventDefault();
             e.target.style.backgroundColor = 'hsl('+Math.round(Math.random()*360)+', 100%, 80%)';
            }
           });
        boxes[i].addEventListener('click', (e) => {
           e.target.style.backgroundColor = 'hsl('+Math.round(Math.random()*360)+', 100%, 80%)';
           });
      
    }
    }

const trippyColor = document.createElement('button');
trippyColor.style.backgroundImage = 'url("images/trippy.png")';
trippyColor.style.backgroundSize = 'contain';
trippyColor.style.backgroundRepeat = 'no-repeat';
trippyColor.style.backgroundPosition = 'center';
buttonContainer.appendChild(trippyColor);
trippyColor.addEventListener('click', trippyColors);

// color choice

function colorChoice(theColor) {
    const boxes = document.querySelectorAll('.container div');
    for (i=0; i<boxes.length; i++) {
        boxes[i].addEventListener('mousemove', (e) => {
            if(e.buttons == 1) {
             e.preventDefault();
             e.target.style.removeProperty('background-color');
             e.target.classList.remove('black', 'blue', 'green', 'yellow', 'red');
             e.target.classList.add(`${theColor}`);
            }
           });
         boxes[i].addEventListener('click', (e) => {
           e.target.style.removeProperty('background-color');
           e.target.classList.remove('black', 'blue', 'green', 'yellow', 'red');
           e.target.classList.add(`${theColor}`);
           });
    }
}

const blackButton = document.createElement('button');
blackButton.style.color = 'rgb(114, 114, 114)';
blackButton.style.backgroundColor = 'rgb(114, 114, 114)';
blackButton.textContent = 'black';
blackButton.className = 'colorbutton'
buttonContainer.appendChild(blackButton);

const blueButton = document.createElement('button');
blueButton.style.color = 'rgb(96, 96, 238)';
blueButton.style.backgroundColor = 'rgb(96, 96, 238)';
blueButton.textContent = 'blue';
blueButton.className = 'colorbutton'
buttonContainer.appendChild(blueButton);

const greenButton = document.createElement('button');
greenButton.textContent = 'green';
greenButton.style.color = 'rgb(66, 207, 66)';
greenButton.style.backgroundColor = 'rgb(66, 207, 66)';
greenButton.className = 'colorbutton'
buttonContainer.appendChild(greenButton);

const redButton = document.createElement('button');
redButton.textContent = 'red';
redButton.style.color = 'rgb(228, 62, 62)';
redButton.style.backgroundColor = 'rgb(228, 62, 62)';
redButton.className = 'colorbutton'
buttonContainer.appendChild(redButton);

const yellowButton = document.createElement('button');
yellowButton.style.color = 'rgb(250, 250, 100)';
yellowButton.style.backgroundColor = 'rgb(250, 250, 100)';
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
             e.target.style.removeProperty('background-color');
             e.target.classList.remove('black', 'blue', 'green', 'yellow', 'red', 'new-color');
            }
           });
        boxes[i].addEventListener('click', (e) => {
             e.target.style.removeProperty('background-color');
             e.target.classList.remove('black', 'blue', 'green', 'yellow', 'red', 'new-color');
            });
    }
}

const eraseButton = document.createElement('button');
eraseButton.style.backgroundImage = 'url("images/eraser.png")';
eraseButton.style.backgroundSize = 'contain';
eraseButton.style.backgroundRepeat = 'no-repeat';
eraseButton.style.backgroundPosition = 'center';
buttonContainer.appendChild(eraseButton);
eraseButton.addEventListener('click', eraseThings);

let taralej = document.createElement('img');
taralej.src = 'images/hedgehog.jpg';
taralej.className = 'taralej';
document.body.appendChild(taralej);

// tidy up the code