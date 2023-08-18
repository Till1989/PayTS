import { Card } from "./Card.js";
import { POSTerminal } from "./POSTerminal.js";
import { PaymentSystem } from "./PaymentSystem.js";
export class Bank{
    name: string;
    regCountry: string;
    cards: Card[]=[];
    data: any[]=[];
    operResult: string;
    constructor(name: string, regCountry: string)
    {
        this.name=name;
        this.regCountry=regCountry;
    }
    addCard(card: Card): void
    {
        this.cards.push(card);
    }
    retResToBank(bank: Bank, operResult: string): void
    {

    }
    retResToPOS(POSTerminal: POSTerminal, operResult: string): void
    {

    }
    sendData(data: any[]=[], bank: Bank): void
    {
        bank.data=data;
    }
    paymentRequest(data: any[]=[]): void
    {
        let paySys=data[0].paymentSystem;
        paySys.data=data;
    }
    checkBalance(data: any[]=[]): string
    {
        let bank: Bank;
        bank=data[0].issuerBank;
        let cardNumber=data[0].number;
        let userCardIndex=bank.cards.findIndex(crd=>crd.number==cardNumber);
        let balance: number;
        balance=bank.cards[userCardIndex].balance;
        let amount:number;
        amount=data[1];

        if(balance>=amount)
        {
            return "Balance Ok";
        }
        else
        {
            return "Balabce is not enougth";
        }
    }
}