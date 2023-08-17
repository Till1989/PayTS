//LET PAY
import { Bank } from "./classes/Bank.js";
let privat = new Bank("PrivatBank", "Ukraine");
let reif = new Bank("ReiffeisenBank", "Ukraine");
let paySysV = new PaySystem("VISA", "xdfgdfgvfv");
let paySysM = new PaySystem("MASTERCARD", "gugvjuykguy");
let privatCard = new Card(4534654364567, 456, "1225", paySysV, privat);
let reifCard = new Card(8967097807890789, 123, "0928", paySysM, reif);
let usr = new User("seDc");
usr.addCard(privatCard);
usr.addCard(reifCard);
console.log(usr);
//# sourceMappingURL=index.js.map