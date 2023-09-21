//LET PAY
import { Bank } from "./classes/Bank.js";
import { MASTERCARD, VISA } from "./classes/PaymentSystem.js";
import { Card } from "./classes/Card.js";
let paymentSystemID = 0;
let paymentSystems = [];
addPaymentSystem(new VISA("VISA", "3253253636jhgh", paymentSystemID));
addPaymentSystem(new MASTERCARD("MASTERCARD", "546fyfce6646", paymentSystemID));
let bankID = 0;
let banks = [];
addBank("Private", "Ukraine");
addBank("Reiff", "Ukraine");
addBank("Reiff", "Switzerland");
banks[selectBankIDbyNameCountry("Private", "Ukraine")].addPersonCustomer("sefszd_zsdfsd", "er23438", 686865858);
banks[selectBankIDbyNameCountry("Private", "Ukraine")].addPersonCustomer("qqqq_qqqq", "er23sefgr", 68645645);
banks[selectBankIDbyNameCountry("Reiff", "Ukraine")].addBusinessCustomer("thdrthdrth", 7567567);
banks[selectBankIDbyNameCountry("Reiff", "Ukraine")].addBusinessCustomer("o;l;i.io", 1212312312);
banks[selectBankIDbyNameCountry("Reiff", "Ukraine")].addCard(new Card(8888888888888888, 555, 1030, 0, selectBankIDbyNameCountry("Reiff", "Ukraine"), 0)); //business
banks[selectBankIDbyNameCountry("Private", "Ukraine")].addCard(new Card(2222222222222222, 579, 1232, 1, selectBankIDbyNameCountry("Private", "Ukraine"), 0)); //person
console.log(banks);
//!!!!!!!!!!!!!!!!!!!!!
/*************************************functions********************************* */
function addBank(name, regCountry) {
    let n = name;
    let rC = regCountry;
    banks.push(new Bank(n, rC, bankID));
    bankID++;
}
function addPaymentSystem(paymentSystem) {
    paymentSystems.push(paymentSystem);
    paymentSystemID++;
}
function selectBankIDbyNameCountry(name, regCountry) {
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
//# sourceMappingURL=index.js.map