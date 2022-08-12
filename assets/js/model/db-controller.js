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
        console.log('id before');
        console.log(this._lastId);
        this.incrementId();
        console.log('id after');
        console.log(this._lastId);
        this._collection.push({
            title: data.title,
            status: data.status,
            text: data.text,
            date: new Date(data.date
            ),
            id: this._lastId
        })

        console.log(this._collection);
    }

    incrementId() {
        this._lastId++;
    }
}