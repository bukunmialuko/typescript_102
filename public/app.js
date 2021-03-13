import { Card } from './classes/Card.js';
import { ListTemplate } from './classes/ListTemplate.js';
console.log(`obkm`);
const form = document.querySelector('.new-item-form');
console.log(`form: ${form}`);
// inputs
const cardNumber = document.querySelector('#cc-number');
const cardExpiry = document.querySelector('#cc-exp');
const cardCvc = document.querySelector('#cc-cvc');
const cardHolderName = document.querySelector('#cc-holder-name');
console.log(`cardNumber: ${cardNumber}`);
console.log(`cardExpiry: ${cardExpiry}`);
console.log(`cardCvc: ${cardCvc}`);
console.log(`cardHolderName: ${cardHolderName}`);
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [cardNumber.value, cardExpiry.valueAsNumber, cardCvc.valueAsNumber, cardHolderName.valueAsNumber];
    let doc;
    doc = new Card(...values);
    list.render(doc, 0 /* MASTER */, 'end');
});
