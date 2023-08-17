class Card{
    number: number;
    cvv: number;
    expDate: string;
    paySystem:PaySystem;
    issuerBank: Bank;
    constructor(number: number, cvv: number,expDate: string,paySystem:PaySystem,issuerBank: Bank)
    {
        this.number=number;
        this.cvv=cvv;
        this.expDate=expDate;
        this.paySystem=paySystem;
        this.issuerBank=issuerBank;
    }
}