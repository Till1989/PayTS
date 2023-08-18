//LET PAY

import { Business, Customer, User } from "./classes/Customer.js";
import { Bank } from "./classes/Bank.js";
import { MASTERCARD, VISA} from "./classes/PaymentSystem.js";
import { POSTerminal } from "./classes/POSTerminal.js";
import { Card } from "./classes/Card.js";



let privatBank = new Bank("PrivatBank","Ukraine");
let reifBank = new Bank("ReiffeisenBank","Ukraine");

let visa=new VISA("VISA","12345");
let mastercard=new MASTERCARD("MASTERCARD","98765");

let vasia = new User("Вася");
let shop = new Business("Магазин");

privatBank.addCard(new Card(123,654,"1234",visa,privatBank,vasia));
reifBank.addCard(new Card(456,999,"5678",mastercard,reifBank,shop));

shop.addPOSTerminal(new POSTerminal(reifBank));





















console.log(privatBank, reifBank);