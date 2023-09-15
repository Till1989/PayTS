export class POSTerminal {
    constructor(bank) {
        this.bank = bank;
    }
    sendData(data = []) {
        this.bank.data = data;
    }
}
//# sourceMappingURL=POSTerminal.js.map