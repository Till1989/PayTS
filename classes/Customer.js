export class Customer {
    constructor(name, taxID) {
        this.name = name;
        this.taxID = taxID;
    }
}
export class Person extends Customer {
    constructor(name, identifier, pass, taxID) {
        super(name, taxID);
        this.identifier = identifier;
        this.pass = pass;
    }
}
export class Business extends Customer {
    constructor(name, identifier, taxID) {
        super(name, taxID);
        this.POSTerminals = [];
        this.identifier = identifier;
    }
    addPOSTerminal(POSTerminal) {
        this.POSTerminals.push(POSTerminal);
    }
}
//# sourceMappingURL=Customer.js.map