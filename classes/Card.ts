import { Bank } from "./Bank.js";
import { PaymentSystem } from "./PaymentSystem.js";
import {Customer} from "./Customer.js";

export class Card{
    number: number;
    cvv: number;
    expDate: string;
    paymentSystem:PaymentSystem;
    issuerBank: Bank;
    customer: Customer;
    constructor(number: number, cvv: number,expDate: string, paymentSystem: PaymentSystem, issuerBank: Bank, customer: Customer)
    {
        this.number=number;
        this.cvv=cvv;
        this.expDate=expDate;
        this.paymentSystem=paymentSystem;
        this.issuerBank=issuerBank;
        this.customer=customer;
    }
}