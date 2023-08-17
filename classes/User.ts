import { Card } from "./Card.js";
export class User {
    name: string;
    cards: Card[]=[];
    constructor(name:string) {
        this.name=name;
    }
    addCard(card: Card)
    {
        this.cards.push(card);
    }
}