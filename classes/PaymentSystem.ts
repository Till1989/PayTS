export class PaymentSystem{
    name: string;
    serverAdress: string;
    constructor(name: string,serverAdress: string)
    {
        this.name=name;
        this.serverAdress=serverAdress;
    }
    pay():boolean
    {

        return true;
    }
}