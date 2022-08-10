import { showTemplate } from "./build-template.js";
import { todoCardLayout } from "./todo-card-layout.js";

export class Card {

    constructor(id, title, text, date, status) {
        this._id = id;
        this._title = title;
        this._text = text;
        this._date = date;
        this._status = status;
    }

    setId(id) {
        this._id = id;
    }

    setTitle(title) {
        this._title = title;
    }

    setText(text) {
        this._text = text;
    }

    setDate(date) {
        this._date = date;
    }

    setStatus(status) {
        this._status = status;
    }

    getId() {
        return this._id;
    }

    getTitle() {
        return this._title;
    }

    getText() {
        return this._text;
    }

    getDate() {
        return this._date;
    }

    getStatus() {
        return this._status;
    }

    showInDom() {
        showTemplate(todoCardLayout, this._id);
    }
}