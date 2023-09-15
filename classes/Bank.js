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
        bank.operResult = operResult;
    }
    retResToPOS(POSTerminal, operResult) {
        POSTerminal.operResult = operResult;
    }
    sendData(data = [], bank) {
        bank.data = data;
    }
    paymentRequest(data = []) {
        let paySys = data[0].paymentSystem;
        paySys.data = data;
    }
    checkBalance(data = []) {
        let bank;
        bank = data[0].issuerBank;
        let cardNumber = data[0].number;
        let userCardIndex = bank.cards.findIndex((crd) => crd.number == cardNumber);
        let balance;
        balance = bank.cards[userCardIndex].balance;
        let amount;
        amount = data[1];
        if (balance >= amount) {
            return "Balance Ok";
        }
        else {
            return "Balabce is not enougth";
        }
    }
}
//# sourceMappingURL=Bank.js.map