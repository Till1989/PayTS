import { Bank } from "./Bank.js";

export abstract class PaymentSystem {
  name: string;
  serverAdress: string;
  data: any[] = [];
  transResult: string;
  constructor(name: string, serverAdress: string) {
    this.name = name;
    this.serverAdress = serverAdress;
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
