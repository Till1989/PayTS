export class PaymentSystem {
    constructor(name, serverAdress) {
        this.data = [];
        this.name = name;
        this.serverAdress = serverAdress;
    }
    returnResult(bank) {
        bank.operResult = this.transResult;
    }
}
export class VISA extends PaymentSystem {
    transaction(data = []) {
        return "OK";
    }
}
export class MASTERCARD extends PaymentSystem {
    transaction(data = []) {
        return "OK";
    }
}
//# sourceMappingURL=PaymentSystem.js.map