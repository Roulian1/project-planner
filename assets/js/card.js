import { showTemplate } from "./build-template.js";
import { todoCardLayout } from "./todo-card-layout.js";
import { formatId } from "./format-id.js";
import { daysSince } from "./dates.js";

export class Card {

    constructor(id, title, text, date, status) {
        this.setId(id);
        this.setTitle(title);
        this.setText(text);
        this.setDate(date);
        this.setStatus(status);

        this.showInDom();
        this.hydrate();
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
        this._date = daysSince(date);
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

    titleElement() {
        return this.findElement('card-header-top');
    }

    textElement() {
        return this.findElement('card-main-text');
    }

    timeElement() {
        return this.findElement('card-footer-text');
    }

    findElement(baseId) {
        return document.querySelector(`#${formatId(baseId, this._id)}`);
    }

    showInDom() {
        showTemplate(todoCardLayout, this._id);
    }

    refreshTitle() {
        this.titleElement().textContent = this._title;
    }

    refreshText() {
        this.textElement().textContent = this._text;
    }

    refreshDate() {
        this.timeElement().textContent = this._date;
    }

    hydrate() {
        this.refreshTitle();
        this.refreshText();
        this.refreshDate();
    }
}