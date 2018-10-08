const listItems = document.getElementsByTagName('li');
console.log(listItems);

const ul = document.getElementById('groceryList');
const firstChild = groceryList.firstElementChild;
console.log(firstChild);

//Add element to the DOM.
const ph = document.getElementById('groceryList');
// Creeër het element.
const newListItem = document.createElement('li');
newListItem.innerText = 'Krop Sla';
// Voeg het element in op zijn plek in de DOM.
ph.appendChild(newListItem);
console.log(groceryList);
