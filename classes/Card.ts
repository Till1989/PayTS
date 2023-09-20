import {Bank} from "./Bank.js";
import {PaymentSystem} from "./PaymentSystem.js";
import {Customer} from "./Customer.js";

export class Card {
    number: number;
    cvv: number;
    expDate: string;
    paymentSystem: number;
    issuerBank: number;
    customerIdentifier: number;

    constructor(number: number, cvv: number, expDate: string, paymentSystem: number, 
                issuerBank: number, customerIdentifier: number) {
        this.number = number;
        this.cvv = cvv;
        this.expDate = expDate;
        this.paymentSystem = paymentSystem;
        this.issuerBank = issuerBank;
        this.customerIdentifier=customerIdentifier;

    }
}
