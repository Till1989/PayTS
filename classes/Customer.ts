import {POSTerminal} from "./POSTerminal.js";////

export class Customer {
    name: string;
    identifier: number;
    constructor(name: string,identifier: number) {
        this.name = name;
        this.identifier=identifier;
    }
}

export class User extends Customer {
    pass: string;
    inn: string;
}
export class Business extends Customer {
    EDRPOU: number;
    POSTerminals: POSTerminal[]=[];

    addPOSTerminal(POSTerminal: POSTerminal): void {
        this.POSTerminals.push(POSTerminal);
    }
}
