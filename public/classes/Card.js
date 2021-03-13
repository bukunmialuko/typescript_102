export class Card {
    constructor(name, number, expiry, cvc) {
        this.name = name;
        this.number = number;
        this.expiry = expiry;
        this.cvc = cvc;
    }
    format() {
        return `NAME: ${this.name} \n NUMBER: ${this.number} \n EXPIRY: ${this.expiry} \n CVC: ${this.cvc}`;
    }
    getCardType() {
        if (this.number.charAt(0) === "5") {
            return 0 /* MASTER */;
        }
        else if (this.number.charAt(0) === "4") {
            return 1 /* VISA */;
        }
        else {
            return 2 /* UNKNOWN */;
        }
    }
}
