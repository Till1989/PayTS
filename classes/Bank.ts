import { Card } from "./Card.js";
import { POSTerminal } from "./POSTerminal.js";
import { Customer, Person, Business } from "./Customer.js";
export class Bank {
    name: string;
    regCountry: string;
    bankIdentifier: number;
    cards: Card[] = [];
    data: any[] = [];
    //balances: Object[] = [];
    balance: { [data: string]: number } = {};
    //operResult: string;
    personCustomers: Person[] = [];
    businessCustomers: Business[] = [];

    constructor(name: string, regCountry: string, bankIdentifier: number) {
        this.name = name;
        this.regCountry = regCountry;
        this.bankIdentifier = bankIdentifier;
    }

    addPersonCustomer(name: string, pass: string, taxID: number) {
        //add taxID length checking - 10 digits//add absolute id counter
        let id = 0;
        if (this.personCustomers.length == 0) {
            id = 0;
        } else {
            id = this.personCustomers[this.personCustomers.length - 1].identifier + 1;
        }
        this.personCustomers.push(new Person(name, id, pass, taxID));
    }

    addBusinessCustomer(name: string, taxID: number) {
        //add taxID length checking - 8 digits//add absolute id counter
        let id = 0;
        if (this.businessCustomers.length == 0) {
            id = 0;
        } else {
            id = this.businessCustomers[this.businessCustomers.length - 1].identifier + 1;
        }
        this.businessCustomers.push(new Business(name, id, taxID));
    }

    addCard(card: Card): void {
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
    paymentRequest(data: any[] = []): void {
        let paySys = data[0].paymentSystem;
        paySys.data = data;
    }

    checkBalance(data: any[] = []): string {
        return;
    }
}
