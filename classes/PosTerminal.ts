import { Bank } from "./Bank";

export class POSTerminal{
    bank: Bank;
    operResult: string;
    constructor(bank: Bank)
    {
        this.bank=bank;
    }
    senddata(data: any[]=[], bank: Bank): void
    {
        
    }
}