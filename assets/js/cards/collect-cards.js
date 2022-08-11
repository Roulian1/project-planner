import { cardsDB } from "./cards.db.js";
import { Card } from "./card.js";

export class CardsCollection {

    constructor() {
        this._collection = [];
        this.collectCards();
    }

    collectCards() {
        for (const card of cardsDB) {
            this._collection.push(
                new Card(card.id, card.title, card.text, card.date, card.status)
            )
        }
        console.log(this._collection);
    }

    showCollection() {
        this._collection.forEach((Card) => {
            Card.showInDom();
            Card.hydrate();
        })
    }
}