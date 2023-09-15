//LET PAY

import {Business, Customer, User} from "./classes/Customer.js";
import {Bank} from "./classes/Bank.js";
import {PaymentSystem, MASTERCARD, VISA} from "./classes/PaymentSystem.js";
import {POSTerminal} from "./classes/POSTerminal.js";
import {Card} from "./classes/Card.js";
import { balance } from "./classes/Objects.js";


let bankID=0;
let banks:Bank[]=[];



addBank("Reiff", "Ukraine");
addBank("Private", "Ukraine");






























function addBank(name: string, regCountry: string)
{
    let n = name;
    let rC = regCountry;
    banks.push(new Bank(n,rC,bankID));
    bankID++;
};










console.log(banks);








