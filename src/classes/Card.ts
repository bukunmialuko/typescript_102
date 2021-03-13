import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Card implements HasFormatter {
  constructor(
    private name: string,
    private number: number,
    private expiry: number,
    private cvc: number,

  ) { }

  format() {
    return `name ${this.name} number ${this.number} expiry ${this.expiry} cvc ${this.cvc}`;
  }
}