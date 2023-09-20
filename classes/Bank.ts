import { Card } from "./Card.js";
import { POSTerminal } from "./POSTerminal.js";
import { Customer, Person, Business } from "./Customer.js";
export class Bank {
    name: string;
    regCountry: string;
    bankIdentifier: number;
    cards: Card[] = [];
    balances: { data: string; value: number };
    data: any[] = [];
    //operResult: string;
    customers: Customer[] = [];

    constructor(name: string, regCountry: string, bankIdentifier: number) {
        this.name = name;
        this.regCountry = regCountry;
        this.bankIdentifier = bankIdentifier;
    }

    addPersonCustomer(name: string, pass: string, inn: number) {
        let id = 0;
        console.log(this.customers.length);
        if (this.customers.length == 0) {
            id = 0;
        } else {
            id = this.customers[this.customers.length - 1].identifier + 1;
        }
        this.customers.push(new Person(name, id, "hg8989779", 3334445551));
    }

    addBusinessCustomer(name: string, EDRPOU: number) {
        let id = 0;
        if (this.customers.length == 0) {
            id = 0;
        } else {
            id = this.customers[this.customers.length - 1].identifier + 1;
        }
        this.customers.push(new Business(name, id, 12345678));
    }

    addCard(card: Card): void {
        this.cards.push(card);
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
    paymentRequest(data: any[] = []): void {
        let paySys = data[0].paymentSystem;
        paySys.data = data;
    }

    checkBalance(data: any[] = []): string {
        return;
    }
}
