import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(private container: HTMLUListElement) { }

  render(item: HasFormatter, cardType: CardType, pos: 'start' | 'end') {
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    if (cardType == CardType.MASTER) {
      h4.innerText = "Master";
    } else {
      h4.innerText = "Visa";
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
}