import { POSTerminal } from "./POSTerminal.js"; ////

export abstract class Customer {
    name: string;
    taxID: number;
    constructor(name: string, taxID: number) {
        this.name = name;
        this.taxID = taxID;
    }
}

export class Person extends Customer {
    pass: string;
    identifier: number;
    constructor(name: string, identifier: number, pass: string, taxID: number) {
        super(name, taxID);
        this.identifier = identifier;
        this.pass = pass;
    }
}
export class Business extends Customer {
    POSTerminals: POSTerminal[] = [];
    identifier: number;
    constructor(name: string, identifier: number, taxID: number) {
        super(name, taxID);
        this.identifier = identifier;
    }

    addPOSTerminal(POSTerminal: POSTerminal): void {
        this.POSTerminals.push(POSTerminal);
    }
}
