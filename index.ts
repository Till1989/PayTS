//LET PAY

import {Business, Customer, User} from "./classes/Customer.js";
import {Bank} from "./classes/Bank.js";
import {PaymentSystem, MASTERCARD, VISA} from "./classes/PaymentSystem.js";
import {POSTerminal} from "./classes/POSTerminal.js";
import {Card} from "./classes/Card.js";
import { balance } from "./classes/Objects.js";


let bankID=0;
let banks:Bank[]=[];


addBank("Private", "Ukraine");
addBank("Reiff", "Ukraine");
addBank("Reiff", "Switzerland");






let id = selectBankIDbyNameCountry("Private", "Ukraine");


























function addBank(name: string, regCountry: string)
{
    let n = name;
    let rC = regCountry;
    banks.push(new Bank(n,rC,bankID));
    bankID++;
};

function selectBankIDbyNameCountry(name: string, regCountry: string): number {
    let temp = [];
    let tmp = [];
    for(let i = 0; i<banks.length; i++)
    {
        if(banks[i].name===name)
        {
            temp.push(banks[i]);
        }
    }
  
    for(let i = 0; i<temp.length; i++)
    {
        if(temp[i].regCountry===regCountry)
        {
            tmp.push(temp[i]);
        }
    }


    return tmp[0].bankIdentifier;
}

















