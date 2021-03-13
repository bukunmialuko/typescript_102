import { Card } from './classes/Card.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

console.log(`obkm`);


const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(`form: ${form}`);

// inputs
const cardNumber = document.querySelector('#cc-number') as HTMLInputElement;
const cardExpiry = document.querySelector('#cc-exp') as HTMLInputElement;
const cardCvc = document.querySelector('#cc-cvc') as HTMLInputElement;
const cardHolderName = document.querySelector('#cc-holder-name') as HTMLInputElement;

console.log(`cardNumber: ${cardNumber}`);
console.log(`cardExpiry: ${cardExpiry}`);
console.log(`cardCvc: ${cardCvc}`);
console.log(`cardHolderName: ${cardHolderName}`);
// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, number, number, number];
  values = [cardNumber.value, cardExpiry.valueAsNumber, cardCvc.valueAsNumber, cardHolderName.valueAsNumber];

  let doc: HasFormatter;

  doc = new Card(...values);

  list.render(doc, CardType.MASTER, 'end');
});

