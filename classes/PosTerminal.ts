import { Bank } from "./Bank";

export class POSTerminal {
    bankIdentifier: number;
    cardNumber: number;
    operResult: string;
    constructor(bankIdentifier: number, cardNumber: number) {
        this.bankIdentifier = bankIdentifier;
        this.cardNumber = cardNumber;
    }
    sendDataToBank(data: any[] = []): void {
        //this.bank.data = data;
    }
}
