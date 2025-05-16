const myElement = document.getElementById('myElement');
const changeTextButton = document.getElementById('changeText');
const changeStyleButton = document.getElementById('changeStyle');
const addElementButton = document.getElementById('addElement');
const removeElementButton = document.getElementById('removeElement');
const container = document.getElementById('container');

changeTextButton.addEventListener('click', () => {
    myElement.textContent = 'Text has changed!';
});

changeStyleButton.addEventListener('click', () => {
    myElement.style.color = 'red';
    myElement.style.fontSize = '24px';
});

addElementButton.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This element was added dynamically.';
    newElement.classList.add('addedElement');
    container.appendChild(newElement);
});

removeElementButton.addEventListener('click', () => {
    const addedElements = document.querySelectorAll('.addedElement');
    addedElements.forEach(element => element.remove());
});