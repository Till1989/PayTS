//LET PAY
import { Bank } from "./classes/Bank.js";
let bankID = 0;
let banks = [];
addBank("Reiff", "Ukraine");
addBank("Private", "Ukraine");
function addBank(name, regCountry) {
    let n = name;
    let rC = regCountry;
    banks.push(new Bank(n, rC, bankID));
    bankID++;
}
;
console.log(banks);
//# sourceMappingURL=index.js.map