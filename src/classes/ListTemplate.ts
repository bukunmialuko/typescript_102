import { Card } from "../classes/Card";

export class ListTemplate {

  constructor(private container: HTMLUListElement) { }

  render(item: Card, pos: 'start' | 'end') {
    const li = document.createElement('li');

    const h4 = document.createElement('h4');

    if (item.getCardType() === CardType.MASTER) {
      h4.innerText = "Master Card";
    } else if (item.getCardType() === CardType.VISA) {
      h4.innerText = "Visa card";
    } else {
      h4.innerText = "Unknown card type";
    }

    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if (pos === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }

  clear() {
    let x = this.container

    while (this.container.firstChild) {
      console.log(`First Child ${this.container}`)
      this.container.firstChild.remove()
    }

  }
}