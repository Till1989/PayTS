//LET PAY
import { Bank } from "./classes/Bank.js";
import { PaySystem } from "./classes/PaySystem.js";
import { Card } from "./classes/Card.js";
import { User } from "./classes/User.js";
import { PosTerminal } from "./classes/PosTerminal.js";
import { Business } from "./classes/Busyness.js";
let privat = new Bank("PrivatBank", "Ukraine");
let reif = new Bank("ReiffeisenBank", "Ukraine");
let paySysV = new PaySystem("VISA", "xdfgdfgvfv");
let paySysM = new PaySystem("MASTERCARD", "gugvjuykguy");
let privatCard = new Card(4534654364567, 456, "1225", paySysV, privat);
privatCard.balance = 100;
let reifCard = new Card(8967097807890789, 123, "0928", paySysM, reif);
reifCard.balance = 1000;
let usr = new User("seDc");
usr.addCard(privatCard);
usr.addCard(reifCard);
let pos = new PosTerminal(privat);
let busines = new Business("dfmgjhm", pos);
console.log(usr);
console.log(busines);
//# sourceMappingURL=index.js.map