export class POSTerminal {
    constructor(bank) {
        this.bank = bank;
    }
    sendPaydata(data = []) {
        data[data.length - 1].receivePaydata(data);
    }
}
//# sourceMappingURL=PosTerminal.js.map