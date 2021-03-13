export class Card {
    constructor(name, number, expiry, cvc) {
        this.name = name;
        this.number = number;
        this.expiry = expiry;
        this.cvc = cvc;
    }
    format() {
        return `name ${this.name} number ${this.number} expiry ${this.expiry} cvc ${this.cvc}`;
    }
}
