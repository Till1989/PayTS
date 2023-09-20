import { Person, Business } from "./Customer.js";
export class Bank {
    constructor(name, regCountry, bankIdentifier) {
        this.cards = [];
        this.data = [];
        //balances;
        //operResult: string;
        this.customers = [];
        this.name = name;
        this.regCountry = regCountry;
        this.bankIdentifier = bankIdentifier;
    }
    addPersonCustomer(name, pass, inn) {
        let id = 0;
        if (this.customers.length == 0) {
            id = 0;
        }
        else {
            id = this.customers[this.customers.length - 1].identifier + 1;
        }
        this.customers.push(new Person(name, id, "hg8989779", 3334445551));
    }
    addBusinessCustomer(name, EDRPOU) {
        let id = 0;
        if (this.customers.length == 0) {
            id = 0;
        }
        else {
            id = this.customers[this.customers.length - 1].identifier + 1;
        }
        this.customers.push(new Business(name, id, 12345678));
    }
    addCard(card) {
        this.cards.push(card);
        //let tmp: string = "";
        //tmp = card.number + "_" + card.cvv + "_" + card.expDate + "_" + card.paymentSystem + "_" + card.issuerBank + "_" + card.customerIdentifier;
        //console.log(tmp);
    }
    /*
    retResToBank(bank: Bank, operResult: string): void {
        bank.operResult = operResult;
    }

    retResToPOS(POSTerminal: POSTerminal, operResult: string): void {
        POSTerminal.operResult = operResult;
    }

    sendData(data: any[] = [], bank: Bank): void {
        bank.data = data;
    }
*/
    paymentRequest(data = []) {
        let paySys = data[0].paymentSystem;
        paySys.data = data;
    }
    checkBalance(data = []) {
        return;
    }
}
//# sourceMappingURL=Bank.js.map