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
    }

    flushCardsDisplay() {
        const cardsContainer = document.querySelector('#main');

        cardsContainer.innerHTML = '';
    }

    showCollection() {
        this._collection.forEach((Card) => {
            Card.showInDom();
            Card.hydrate();
        })
    }

    filterByStatus(status) {
        this._collection = this._collection.filter((Card) => Card.getStatus() === status);
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