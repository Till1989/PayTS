import { Bank } from "./Bank.js";
import { PaySystem } from "./PaySystem.js";

export class Card{
    number: number;
    cvv: number;
    expDate: string;
    paySystem:PaySystem;
    issuerBank: Bank;
    balance: number;
    constructor(number: number, cvv: number,expDate: string,paySystem:PaySystem,issuerBank: Bank)
    {
        this.number=number;
        this.cvv=cvv;
        this.expDate=expDate;
        this.paySystem=paySystem;
        this.issuerBank=issuerBank;
    }
}