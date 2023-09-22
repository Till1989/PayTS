//LET PAY

import { Business, Customer, Person } from "./classes/Customer.js";
import { Bank } from "./classes/Bank.js";
import { PaymentSystem, MASTERCARD, VISA } from "./classes/PaymentSystem.js";
import { POSTerminal } from "./classes/POSTerminal.js";
import { Card } from "./classes/Card.js";

let paymentSystemID = 0;
let paymentSystems: PaymentSystem[] = [];
addPaymentSystem(new VISA("VISA", "3253253636jhgh", paymentSystemID));
addPaymentSystem(new MASTERCARD("MASTERCARD", "546fyfce6646", paymentSystemID));

let bankID = 0;
let banks: Bank[] = [];
addBank("Private", "Ukraine");
addBank("Reiff", "Ukraine");
addBank("Reiff", "Switzerland");

banks[selectBankIDbyNameCountry("Private", "Ukraine")].addPersonCustomer("sefszd_zsdfsd", "er23438", 6868658581);
banks[selectBankIDbyNameCountry("Private", "Ukraine")].addPersonCustomer("qqqq_qqqq", "er23sefgr", 6864564511);
banks[selectBankIDbyNameCountry("Reiff", "Ukraine")].addBusinessCustomer("thdrthdrth", 75675678);
banks[selectBankIDbyNameCountry("Reiff", "Ukraine")].addBusinessCustomer("o;l;i.io", 12123123);

banks[selectBankIDbyNameCountry("Reiff", "Ukraine")].addCard(new Card(8888888888888888, 555, 1030, 0, selectBankIDbyNameCountry("Reiff", "Ukraine"), 0)); //business
banks[selectBankIDbyNameCountry("Private", "Ukraine")].addCard(new Card(2222222222222222, 579, 1232, 1, selectBankIDbyNameCountry("Private", "Ukraine"), 0)); //person

banks[selectBankIDbyNameCountry("Reiff", "Ukraine")].businessCustomers[selectBusinessCustomerByTaxID(banks[selectBankIDbyNameCountry("Reiff", "Ukraine")].businessCustomers, 12123123)].addPOSTerminal(
    new POSTerminal(banks[selectBankIDbyNameCountry("Reiff", "Ukraine")].bankIdentifier, 8888888888888888)
);

//

//!!!!!!!!!!!!!!!!!!!!!

/*************************************functions********************************* */
function addBank(name: string, regCountry: string) {
    let n = name;
    let rC = regCountry;
    banks.push(new Bank(n, rC, bankID));
    bankID++;
}

function addPaymentSystem(paymentSystem: PaymentSystem) {
    paymentSystems.push(paymentSystem);
    paymentSystemID++;
}

function selectBankIDbyNameCountry(name: string, regCountry: string): number {
    let temp = [];
    let tmp = [];
    for (let i = 0; i < banks.length; i++) {
        if (banks[i].name === name) {
            temp.push(banks[i]);
        }
    }

    for (let i = 0; i < temp.length; i++) {
        if (temp[i].regCountry === regCountry) {
            tmp.push(temp[i]);
        }
    }

    return tmp[0].bankIdentifier;
}

function selectPersonCustomerByTaxID(array: Person[], taxID: number): number {
    let tmp = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].taxID === taxID) {
            tmp.push(array[i]);
        }
    }
    if (tmp.length == 1) {
        return tmp[0].identifier;
    } else {
        return null;
    }
}
function selectBusinessCustomerByTaxID(array: Business[], taxID: number): number {
    let tmp = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].taxID === taxID) {
            tmp.push(array[i]);
        }
    }
    if (tmp.length == 1) {
        return tmp[0].identifier;
    } else {
        return null;
    }
}
