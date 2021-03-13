import { Card } from './classes/Card.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;


// inputs
const cardNumber = document.querySelector('#cc-number') as HTMLInputElement;
const cardExpiry = document.querySelector('#cc-exp') as HTMLInputElement;
const cardCvc = document.querySelector('#cc-cvc') as HTMLInputElement;
const cardHolderName = document.querySelector('#cc-holder-name') as HTMLInputElement;
const noCardAdded = document.querySelector('#no-card-added') as HTMLHeadingElement;
const clear = document.querySelector('#clear-list') as HTMLHeadingElement;
noCardAdded.style.display = "block"
clear.style.display = "none"

console.log(`noCardAdded: ${noCardAdded.textContent}`);
// console.log(`clear: ${clear.textContent}`);

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

var listOfCards: HasFormatter[] = [];

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, string, string];
  values = [cardHolderName.value, cardNumber.value, cardExpiry.value, cardCvc.value];

  listOfCards.push(new Card(...values))

  if (!clear.hidden) {
    clear.style.display = "block"
  }

  if (noCardAdded.style.display == "block") {
    noCardAdded.style.display = "none";
  }

  let card = new Card(...values);
  list.render(card, 'end');

});


clear.addEventListener('click', (e: Event) => {
  listOfCards = [];
  list.clear();
  clear.style.display = "none"
  noCardAdded.style.display = "block"
  console.log("List Cleared")
});

