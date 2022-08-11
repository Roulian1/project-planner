//import { cardsDB } from "../model/cards.db.js";
import { Card } from "./card.js";
//import { getCardsDB } from "../model/cards-db.js";
import { DbController } from "../model/db-controller.js";

export class CardsCollection {

    constructor(defaultSortStatus) {
        this._db = new DbController();
        this._collection = [];
        this._filterStatus = '';// no filter
        this._todoStatus = true;
        this._doingStatus = true;
        this._doneStatus = true;
        this.collectCards();
        this.setSortStatus(defaultSortStatus);

    }

    setSortStatus(sortStatus) {
        this._sortStatus = sortStatus;
    }

    setDefaultStatus(sortStatus) {
        this.setSortStatus(sortStatus);

        console.log('default sort :');
        console.log(this._sortStatus);

        switch (this._sortStatus) {
            case 'name':
                console.log('switch name');
                this.sortByName();
                break;

            case 'date':
                console.log('switch date');
                this.sortByDate();
                break;

            default:
                break;
        }

    }

    collectCards() {
        const cardsDB = this._db.db;

        for (const card of cardsDB) {
            this._collection.push(
                new Card(card.id, card.title, card.text, card.date, card.status)
            )
        }
    }

    flushCardsDisplay() {
        this._collection = [];

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
        // this.flushCardsDisplay();
        this._todoStatus = state;
        this.filterByStatus();
        this.showCollection();
    }

    SetFilterByDoingStatus(state) {
        // this.flushCardsDisplay();
        this._doingStatus = state;
        this.filterByStatus();
        this.showCollection();
    }

    SetFilterByDoneStatus(state) {
        // this.flushCardsDisplay();
        this._doneStatus = state;
        this.filterByStatus();
        this.showCollection();
    }

    filterByStatus() {
        // this._collection = [];
        this.flushCardsDisplay();
        this.collectCards();
        // this._collection = this._collection.filter((Card) => Card.getStatus() === status);
        // this._collection = this._collection.filter((Card) => this.filterByStatusCondition(Card.getStatus()));

        console.log(this._collection);

        console.log('todo : ');
        console.log(this._todoStatus);
        console.log('doing : ');
        console.log(this._doingStatus);
        console.log('done : ');
        console.log(this._doneStatus);

        this._collection = this._collection.filter((Card) => {
            const status = Card.getStatus();

            console.log('actual status : ');
            console.log(status);

            return (
                (this._todoStatus && status === 'todo') || (this._doingStatus && status === 'doing') || (this._doneStatus && status === 'done')
            )

        });

        console.log(this._collection);
    }

    filterByStatusCondition(status) {
        return (
            (this._todoStatus === true && this._todoStatus === status) || (this._doingStatus === true && this._doingStatus === status) || (this._doneStatus === true && this._doneStatus === status)

        )
    }

    sortByName() {
        this.setSortStatus('name');
        this.collectCards();
        console.log(this._collection);
        this._collection.sort(this.byName);
        console.log('name sorted :');
        console.log(this._collection);
    }

    sortByDate() {
        this.setSortStatus('date');
        this.collectCards();
        console.log(this._collection);
        this._collection.sort(this.byDate);
        console.log('date sorted :');
        console.log(this._collection);
    }

    byName(a, b) {
        let aFirst = a.getTitle().toLowerCase(),
            bFirst = b.getTitle().toLowerCase();

        console.log('by name');

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

        console.log('by date');

        return dateA - dateB;
    }
}