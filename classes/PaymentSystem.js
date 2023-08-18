export class PaymentSystem {
    constructor(name, serverAdress) {
        this.data = [];
        this.name = name;
        this.serverAdress = serverAdress;
    }
    returnResult(bank) {
    }
}
export class VISA extends PaymentSystem {
    transaction(data = []) {
    }
}
export class MASTERCARD extends PaymentSystem {
    transaction(data = []) {
    }
}
//# sourceMappingURL=PaymentSystem.js.map