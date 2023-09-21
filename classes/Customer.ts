import { POSTerminal } from "./POSTerminal.js"; ////

export abstract class Customer {
    name: string;
    identifier: number;
    taxID: number;
    constructor(name: string, identifier: number, taxID: number) {
        this.name = name;
        this.identifier = identifier;
        this.taxID = taxID;
    }
}

export class Person extends Customer {
    pass: string;
    constructor(name: string, identifier: number, pass: string, taxID: number) {
        super(name, identifier, taxID);
        this.pass = pass;
    }
}
export class Business extends Customer {
    POSTerminals: POSTerminal[] = [];
    constructor(name: string, identifier: number, taxID: number) {
        super(name, identifier, taxID);
    }

    addPOSTerminal(POSTerminal: POSTerminal): void {
        this.POSTerminals.push(POSTerminal);
    }
}
