import { Person, Business } from "./Customer.js";
export class Bank {
    constructor(name, regCountry, bankIdentifier) {
        this.cards = [];
        this.data = [];
        //balances: Object[] = [];
        this.balance = {};
        //operResult: string;
        this.personCustomers = [];
        this.businessCustomers = [];
        this.name = name;
        this.regCountry = regCountry;
        this.bankIdentifier = bankIdentifier;
    }
    addPersonCustomer(name, pass, taxID) {
        //add taxID length checking - 10 digits//add absolute id counter
        let id = 0;
        if (this.personCustomers.length == 0) {
            id = 0;
        }
        else {
            id = this.personCustomers[this.personCustomers.length - 1].identifier + 1;
        }
        this.personCustomers.push(new Person(name, id, pass, taxID));
    }
    addBusinessCustomer(name, taxID) {
        //add taxID length checking - 8 digits//add absolute id counter
        let id = 0;
        if (this.businessCustomers.length == 0) {
            id = 0;
        }
        else {
            id = this.businessCustomers[this.businessCustomers.length - 1].identifier + 1;
        }
        this.businessCustomers.push(new Business(name, id, taxID));
    }
    addCard(card) {
        this.cards.push(card);
        let sefse = card.number + "_" + card.cvv + "_" + card.expDate + "_" + card.paymentSystem + "_" + card.issuerBank + "_" + card.customerIdentifier;
        this.balance.data = 0;
        //this.balances.push(balance);
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