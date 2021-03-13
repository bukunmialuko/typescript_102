import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Card implements HasFormatter {
  constructor(
    private name: string,
    private number: string,
    private expiry: string,
    private cvc: string,

  ) { }

  format() {
    return `NAME: ${this.name} \n NUMBER: ${this.number} \n EXPIRY: ${this.expiry} \n CVC: ${this.cvc}`;
  }

  getCardType() {
    if (this.number.charAt(0) === "5") {
      return CardType.MASTER;
    } else if (this.number.charAt(0) === "4") {
      return CardType.VISA;
    } else {
      return CardType.UNKNOWN;
    }
  }

}