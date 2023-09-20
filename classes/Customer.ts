import { POSTerminal } from "./POSTerminal.js"; ////

export class Customer {
  name: string;
  identifier: number;
  constructor(name: string, identifier: number) {
    this.name = name;
    this.identifier = identifier;
  }
}

export class Person extends Customer {
  pass: string;
  inn: number;
  constructor(name: string, identifier: number, pass: string, inn: number) {
    super(name, identifier);
    this.pass = pass;
    this.inn = inn;
  }
}
export class Business extends Customer {
  EDRPOU: number;
  POSTerminals: POSTerminal[] = [];
  constructor(name: string, identifier: number, EDRPOU: number) {
    super(name, identifier);
    this.EDRPOU = EDRPOU;
  }

  addPOSTerminal(POSTerminal: POSTerminal): void {
    this.POSTerminals.push(POSTerminal);
  }
}
