import { cardsDB } from "./cards.db.js";
import { Card } from "./card.js";

export class CardsCollection {

    constructor(defaultSortStatus) {
        this._collection = [];
        this._filterStatus = '';// no filter
        this._sortStatus = defaultSortStatus;
        this._filterByTodoStatus = true;
        this._filterByDoingStatus = true;
        this._filterByDoneStatus = true;
        this.collectCards();
    }

    setSortStatus(sortStatus) {
        this._sortStatus = sortStatus;
    }

    collectCards() {
        for (const card of cardsDB) {
            this._collection.push(
                new Card(card.id, card.title, card.text, card.date, card.status)
            )
        }

        switch (this._sortStatus) {
            case 'name':
                this.sortByName();
                break;

            case 'date':
                this.sortByDate();
                break;

            default:
                break;
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

    SetFilterByTodoStatus(state) {
        this.flushCardsDisplay();
        this._filterByTodoStatus = state;
        this.filterByStatus();
        this.showCollection();
    }

    SetFilterByDoingStatus(state) {
        this.flushCardsDisplay();
        this._filterByDoingStatus = state;
        this.filterByStatus();
        this.showCollection();
    }

    SetFilterByDoneStatus(state) {
        this.flushCardsDisplay();
        this._filterByDoneStatus = state;
        this.filterByStatus();
        this.showCollection();
    }

    filterByStatus() {
        this._collection = [];
        this.collectCards();
        // this._collection = this._collection.filter((Card) => Card.getStatus() === status);
        this._collection = this._collection.filter((Card) => this.filterByStatusCondition(Card.getStatus()));
    }

    filterByStatusCondition(status) {
        return (
            (this._filterByTodoStatus === true && this._filterByTodoStatus === status) || (this._filterByDoingStatus === true && this._filterByDoingStatus === status) || (this._filterByDoneStatus === true && this._filterByDoneStatus === status)

        )
    }

    sortByName() {
        this.setSortStatus('name');
        this._collection.sort(this.byName);
    }

    sortByDate() {
        this.setSortStatus('date');
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