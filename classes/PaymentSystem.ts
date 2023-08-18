import { Bank } from "./Bank.js";

export class PaymentSystem{
    name: string;
    serverAdress: string;
    data: any[]=[];
    transResult: string;
    constructor(name: string,serverAdress: string)
    {
        this.name=name;
        this.serverAdress=serverAdress;
    }
    returnResult(bank: Bank): void
    {

    }
}

export class VISA extends PaymentSystem{
    transaction(data: any[]=[]): void
    {

    }
}
export class MASTERCARD extends PaymentSystem{
    transaction(data: any[]=[]): void
    {
        
    }
}