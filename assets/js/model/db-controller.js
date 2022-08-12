import { cardsDB } from "./cards.db.js";
import { dbId } from "./cards.db.js";

export class DbController {

    constructor() {
        this._lastId = dbId.lastId;
        this._collection = cardsDB;
    }

    get lastId() {
        return this._lastId;
    }

    get db() {
        return this.getDb();
    }

    getDb(filters = ['todo', 'done', 'doing']) {
        let output = [];

        for (const filter of filters) {
            let filtered = this._collection.filter(
                Card => Card.status === filter);

            output = output.concat(filtered);
        }

        return output;
    }

    addItem(data) {
        // data must be : {title: 'my title', status: 'todo', text: 'my text', date: date}
        this.incrementId();

        this._collection.push({
            title: data.title,
            status: data.status,
            text: data.text,
            date: new Date(data.date
            ),
            id: this._lastId
        })
    }

    incrementId() {
        this._lastId++;
    }

    updateItem(id, data) {

    }

    getItemById(id) {
        return this._collection.reduce(
            (match, item) => Number(item.id) === id ? item : match
            , null
        );
    }
}