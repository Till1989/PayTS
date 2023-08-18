import { Card } from "./Card.js";
import { POSTerminal } from "./POSTerminal.js";
import { PaymentSystem } from "./PaymentSystem.js";
export class Bank{
    name: string;
    regCountry: string;
    cards: Card;
    data: any[]=[];
    operResult: string;
    constructor(name: string, regCountry: string)
    {
        this.name=name;
        this.regCountry=regCountry;
    }
    addCard(card: Card): void
    {

    }
    retResToBank(bank: Bank, operResult: string): void
    {

    }
    retResToPOS(POSTerminal: POSTerminal, operResult: string): void
    {

    }
    sendData(data: any[]=[], bank: Bank): void
    {

    }
    paymentRequest(data: any[]=[], paymentSystem: PaymentSystem ): void
    {

    }
    checkBalance(data: any[]=[]): string
    {
        return;
    }
}