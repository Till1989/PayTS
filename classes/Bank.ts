import { PaySystem } from "./PaySystem.js";
export class Bank{
    name: string;
    regCountry: string;
    constructor(name: string, regCountry: string)
    {
        this.name=name;
        this.regCountry=regCountry;
    }
    receivePaydata(data: any[]=[]): void
    {
        this.sendPaydata(data);
    }
    sendPaydata(data: any[]=[]): boolean
    {
       if(data[0].balance>=data[1])
       {
        if(data[0].paySystem.pay())
        {
            data[0].balance-=data[1];
            return true;
        }
       }

    }
}