import { Bank } from "./Bank";

export class POSTerminal {
  bank: Bank;
  operResult: string;
  constructor(bank: Bank) {
    this.bank = bank;
  }
  sendData(data: any[] = []): void {
    this.bank.data = data;
  }
}
