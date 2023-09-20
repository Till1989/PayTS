import {Bank} from "./Bank";

export class POSTerminal {
    bankIdentifier: number;
    operResult: string;
    constructor(bankIdentifier: number) {
        this.bankIdentifier = bankIdentifier;
    }
    sendDataToBank(data: any[] = []): void {
        //this.bank.data = data;
    }
}
