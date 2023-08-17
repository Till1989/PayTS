export class User {
    constructor(name) {
        this.cards = [];
        this.name = name;
    }
    addCard(card) {
        this.cards.push(card);
    }
    pay(data = []) {
    }
}
//# sourceMappingURL=User.js.map