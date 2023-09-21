export class Customer {
    constructor(name, identifier, taxID) {
        this.name = name;
        this.identifier = identifier;
        this.taxID = taxID;
    }
}
export class Person extends Customer {
    constructor(name, identifier, pass, taxID) {
        super(name, identifier, taxID);
        this.pass = pass;
    }
}
export class Business extends Customer {
    constructor(name, identifier, taxID) {
        super(name, identifier, taxID);
        this.POSTerminals = [];
    }
    addPOSTerminal(POSTerminal) {
        this.POSTerminals.push(POSTerminal);
    }
}
//# sourceMappingURL=Customer.js.map