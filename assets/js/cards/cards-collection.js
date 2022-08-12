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
        // const cardsDB = this._db.db;
        const cardsDB = this._db.getDb(this.filters);

        for (const card of cardsDB) {
            this._collection.push(
                new Card(card.id, card.title, card.text, card.date, card.status)
            )
        }
    }

    get filters() {
        let output = [];

        if (this._todoStatus) {
            output.push('todo')
        }

        if (this._doingStatus) {
            output.push('doing')
        }

        if (this._doneStatus) {
            output.push('done')
        }

        return output;
    }

    flushCardsDisplay() {
        this._collection = [];

        this.flushDisplay();
    }

    flushDisplay() {
        const cardsContainer = document.querySelector('#main');

        cardsContainer.innerHTML = '';
    }


    showCollection() {
        this._collection.forEach((Card) => {
            Card.showInDom();
            Card.hydrate();
        })
    }

    addItem(data) {
        data.status = 'todo';

        this._db.addItem(data);

        this.flushCardsDisplay();

        this.collectCards();

        this.showCollection();
    }

    SetFilterByTodoStatus(state) {
        this._todoStatus = state;
        this.filterByStatus();
    }

    SetFilterByDoingStatus(state) {
        this._doingStatus = state;
        this.filterByStatus();
    }

    SetFilterByDoneStatus(state) {
        this._doneStatus = state;
        this.filterByStatus();
    }

    filterByStatus() {
        this.flushCardsDisplay();
        this.collectCards();
        this.showCollection();
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