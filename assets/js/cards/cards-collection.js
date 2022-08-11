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

    sortByName() {
        this._collection.sort(this.byName);
    }

    sortByDate() {
        this._collection.sort(this.byDate);
    }

    byName(a, b) {
        let aFirst = a.getTitle().toLowerCase(),
            bFirst = b.getTitle().toLowerCase();

        if (aFirst < bFirst) {
            return -1;
        }
        if (aFirst > bFirst) {
            return 1;
        }
        return 0;
    };

    byDate(a, b) {
        let dateA = new Date(a.getDate()),
            dateB = new Date(b.getDate());

        return dateA - dateB;
    }
}