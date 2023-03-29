const container = document.querySelector('#container');
const redParagraph = document.createElement('p');
const blueHeader3 = document.createElement('h3');
const elementsContainer = document.createElement('div');
const header1 = document.createElement('h1');
const paragraph = document.createElement('p');


redParagraph.textContent = "Hey I’m red!";
redParagraph.style.color = 'red';

blueHeader3.textContent = "I'm a blue h3!";
blueHeader3.style.color = 'blue';

elementsContainer.style.backgroundColor = 'pink';
elementsContainer.style.border ='thin solid black';

header1.textContent = "I'm a div";
paragraph.textContent = "ME TOO!";

container.appendChild(redParagraph);
container.appendChild(blueHeader3);
elementsContainer.appendChild(header1);
elementsContainer.appendChild(paragraph);
container.appendChild(elementsContainer);

