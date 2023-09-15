import {POSTerminal} from "./POSTerminal.js";////

export class Customer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export class User extends Customer {
    pass: string;
    inn: string;
}
export class Business extends Customer {
    EDRPOU: number;
    POSTerminal: POSTerminal[];

    addPOSTerminal(POSTerminal: POSTerminal): void {
        this.POSTerminal.push(POSTerminal);
    }
}
