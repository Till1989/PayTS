//LET PAY
import { Bank } from "./classes/Bank.js";
let bankID = 0;
let banks = [];
addBank("Private", "Ukraine");
addBank("Reiff", "Ukraine");
addBank("Reiff", "Switzerland");
let id = selectBankIDbyNameCountry("Private", "Ukraine");
function addBank(name, regCountry) {
    let n = name;
    let rC = regCountry;
    banks.push(new Bank(n, rC, bankID));
    bankID++;
}
;
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