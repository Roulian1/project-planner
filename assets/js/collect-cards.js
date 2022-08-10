import { cardsDB } from "./cards.db.js";
import { Card } from "./card.js";

export const collectCards = () => {
    let cards = [];
    for (const card of cardsDB) {
        let CardItem = new Card(card.id, card.title, card.text, card.date, card.status)
    }
    return cards;
}