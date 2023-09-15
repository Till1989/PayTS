import {Card} from "./Card.js";
import {POSTerminal} from "./POSTerminal.js";
import { Customer } from "./Customer.js";
export class Bank {
    name: string;
    regCountry: string;
    bankIdentifier:number;
    cards: Card[] = [];
    balances: Object[];
    data: any[] = [];
    operResult: string;
    customers: Customer[];


    constructor(name: string, regCountry: string, bankIdentifier:number) {
        this.name = name;
        this.regCountry = regCountry;
        this.bankIdentifier=bankIdentifier;
    }
/*
    addCard(card: Card): void {
        this.cards.push(card);
    }

    retResToBank(bank: Bank, operResult: string): void {
        bank.operResult = operResult;
    }

    retResToPOS(POSTerminal: POSTerminal, operResult: string): void {
        POSTerminal.operResult = operResult;
    }

    sendData(data: any[] = [], bank: Bank): void {
        bank.data = data;
    }

    paymentRequest(data: any[] = []): void {
        let paySys = data[0].paymentSystem;
        paySys.data = data;
    }

    checkBalance(data: any[] = []): string {

    }*/
}
