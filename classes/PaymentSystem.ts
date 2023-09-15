import {Bank} from "./Bank.js";

export abstract class PaymentSystem {
    name: string;
    identifier:number;
    serverAdress: string;
    data: any[] = [];
    transResult: string;
    constructor(name: string, serverAdress: string, identifier:number) {
        this.name = name;
        this.serverAdress = serverAdress;
        this.identifier=identifier;
    }
    abstract transaction(data: any[]): string;
    returnResult(bank: Bank): void {
        bank.operResult = this.transResult;
    }
}

export class VISA extends PaymentSystem {
    transaction(data: any[] = []): string {
        return "OK";
    }
}
export class MASTERCARD extends PaymentSystem {
    transaction(data: any[] = []): string {
        return "OK";
    }
}
