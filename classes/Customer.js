export class Customer {
    constructor(name, identifier) {
        this.name = name;
        this.identifier = identifier;
    }
}
export class Person extends Customer {
    constructor(name, identifier, pass, inn) {
        super(name, identifier);
        this.pass = pass;
        this.inn = inn;
    }
}
export class Business extends Customer {
    constructor(name, identifier, EDRPOU) {
        super(name, identifier);
        this.POSTerminals = [];
        this.EDRPOU = EDRPOU;
    }
    addPOSTerminal(POSTerminal) {
        this.POSTerminals.push(POSTerminal);
    }
}
//# sourceMappingURL=Customer.js.map