import { Bank } from "./Bank";

export class PosTerminal{
    bank: Bank;
    constructor(bank: Bank)
    {
        this.bank=bank;
    }
    sendPaydata(data: any[]=[]): void
    {
        data[data.length-1].receivePaydata(data);
    }
}