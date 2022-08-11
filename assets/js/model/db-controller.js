import { cardsDB } from "./cards.db.js";
import { dbId } from "./cards.db.js";

export class DbController {

    constructor() {
        this._lastId = dbId.lastId;
        this._collection = cardsDB;
        console.log(this._collection);
    }

    get lastId() {
        return this._lastId;
    }

    get db() {
        return this._collection;
    }

    // db(sort) {
    //     switch (sort) {
    //         case 'name':
    //             return this.sortByName();
    //             break;

    //         case 'date':
    //             return this.sortByDate();
    //             break;

    //         default:
    //             break;
    //     }
    // }

    addItem(data) {
        // data must be : {title: 'my title', status: 'todo', text: 'my text', date: [year, month, day]}
        this.incrementId();
        this._collection.push({
            title: data.title,
            status: data.status,
            text: data.text,
            date: new Date(
                data.date[0],
                data.date[1],
                data.date[2]
            ),
            id: this._lastId
        })
    }

    incrementId() {
        this._lastId++;
    }

    // sortByName() {
    //     let output = this._collection.sort(this.byName);
    //     console.log(output);
    //     return output;
    // }

    // sortByDate() {
    //     let output = this._collection.sort(this.byDate);
    //     console.log(output);
    //     return output;
    // }

    // byName(a, b) {
    //     console.log('title');
    //     console.log(a.title);
    //     let aFirst = a.title.toLowerCase()[0],
    //         bFirst = b.title.toLowerCase()[0];
    //     console.log('a first');
    //     console.log(aFirst);
    //     console.log('b first');
    //     console.log(bFirst);

    //     console.log('by name');

    //     if (aFirst < bFirst) {
    //         console.log('-1');
    //         return -1;
    //     }
    //     if (aFirst > bFirst) {
    //         console.log('1');
    //         return 1;
    //     }
    //     console.log('0');
    //     return 0;
    // };

    // byDate(a, b) {
    //     let dateA = a.date,
    //         dateB = b.date;

    //     console.log('by date');

    //     return dateA - dateB;
    // }

}