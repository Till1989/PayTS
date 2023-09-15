export class Customer {
    constructor(name) {
        this.name = name;
    }
}
export class User extends Customer {
}
export class Business extends Customer {
    addPOSTerminal(POSTerminal) {
        this.POSTerminal.push(POSTerminal);
    }
}
//# sourceMappingURL=Customer.js.map