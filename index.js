//LET PAY
import { Business, User } from "./classes/Customer.js";
import { Bank } from "./classes/Bank.js";
import { MASTERCARD, VISA } from "./classes/PaymentSystem.js";
import { POSTerminal } from "./classes/POSTerminal.js";
import { Card } from "./classes/Card.js";
let privatBank = new Bank("PrivatBank", "Ukraine");
let reifBank = new Bank("ReiffeisenBank", "Ukraine");
let visa = new VISA("VISA", "12345");
let mastercard = new MASTERCARD("MASTERCARD", "98765");
let vasia = new User("Вася");
let shop = new Business("Магазин");
reifBank.addCard(new Card(456, 999, "5678", mastercard, reifBank, shop));
privatBank.addCard(new Card(123, 654, "1234", visa, privatBank, vasia));
reifBank.addCard(new Card(5653, 456, "0890", mastercard, reifBank, vasia));
reifBank.addCard(new Card(5654, 453, "0890", mastercard, reifBank, vasia));
shop.addPOSTerminal(new POSTerminal(reifBank));
/******************************************************* */
let userCardIndex = privatBank.cards.findIndex(crd => crd.number == 123);
let userCard = privatBank.cards[userCardIndex];
let busCardIndex = reifBank.cards.findIndex(crd => crd.number == 456);
let busCard = reifBank.cards[busCardIndex];
privatBank.cards[0].balance = 4000;
/*************************************************************** */
let data = [];
data.push(userCard, 200, busCard);
shop.POSTerminal[0].sendData(data); //(1)pos to pos bank
shop.POSTerminal[0].bank.sendData(shop.POSTerminal[0].bank.data, userCard.issuerBank); //(2) pos bank to card bank
userCard.issuerBank.operResult = userCard.issuerBank.checkBalance(userCard.issuerBank.data); //(3) chacking balance to amount
if (userCard.issuerBank.operResult == "Balance Ok") //(4)
 {
}
else {
}
//console.log(privatBank, reifBank);
//# sourceMappingURL=index.js.map