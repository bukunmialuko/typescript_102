import { Card } from './classes/Card.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs
const cardNumber = document.querySelector('#cc-number');
const cardExpiry = document.querySelector('#cc-exp');
const cardCvc = document.querySelector('#cc-cvc');
const cardHolderName = document.querySelector('#cc-holder-name');
const noCardAdded = document.querySelector('#no-card-added');
const clear = document.querySelector('#clear-list');
noCardAdded.style.display = "block";
clear.style.display = "none";
console.log(`noCardAdded: ${noCardAdded.textContent}`);
// console.log(`clear: ${clear.textContent}`);
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
var listOfCards = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [cardHolderName.value, cardNumber.value, cardExpiry.value, cardCvc.value];
    listOfCards.push(new Card(...values));
    if (!clear.hidden) {
        clear.style.display = "block";
    }
    if (noCardAdded.style.display == "block") {
        noCardAdded.style.display = "none";
    }
    let card = new Card(...values);
    list.render(card, 'end');
});
clear.addEventListener('click', (e) => {
    listOfCards = [];
    list.clear();
    clear.style.display = "none";
    noCardAdded.style.display = "block";
    console.log("List Cleared");
});
