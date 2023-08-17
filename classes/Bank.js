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
        }
        else {
            //
        }
    }
}
//# sourceMappingURL=Bank.js.map