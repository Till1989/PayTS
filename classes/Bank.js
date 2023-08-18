export class Bank {
    constructor(name, regCountry) {
        this.cards = [];
        this.data = [];
        this.name = name;
        this.regCountry = regCountry;
    }
    addCard(card) {
        this.cards.push(card);
    }
    retResToBank(bank, operResult) {
    }
    retResToPOS(POSTerminal, operResult) {
    }
    sendData(data = [], bank) {
    }
    paymentRequest(data = [], paymentSystem) {
    }
    checkBalance(data = []) {
        return;
    }
}
//# sourceMappingURL=Bank.js.map