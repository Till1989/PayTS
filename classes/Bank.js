export class Bank {
    constructor(name, regCountry) {
        this.name = name;
        this.regCountry = regCountry;
    }
    receivePaydata(data = []) {
        this.sendPaydata(data);
    }
    sendPaydata(data = []) {
        if (data[0].balance >= data[1]) {
            if (data[0].paySystem.pay()) {
                data[0].balance -= data[1];
                return true;
            }
        }
    }
}
//# sourceMappingURL=Bank.js.map