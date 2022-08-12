import { showForm } from "./build_form_layout.js";
import { CardsCollection } from "./cards/cards-collection.js";
import { listenSortButtons } from "./listen/cards-listeners.js";
import { listenFilterButtons } from "./listen/cards-listeners.js";
import { defaultSort } from "./cards/default-sort.js";
// import { getCardsDB } from "./model/cards-db.js";
import { DbController } from "./model/db-controller.js";




console.log('test');
let test = new DbController();
console.log(test.db);

test.addItem({
    title: 'test title',
    status: 'done',
    text: 'test text',
    date: [2023, 10, 22]
})


console.log('filter :');
console.log(test.getDb(['done']));



//console.log('by name');
// console.log(test.db('name'));
// console.log(test.db('date'));



const defaultSortStatus = 'date';
const Cards = new CardsCollection(defaultSortStatus);

defaultSort(defaultSortStatus);
Cards.showCollection();
listenSortButtons(Cards);
listenFilterButtons(Cards);

// Change Jul

let addB = document.getElementById('add-button');

addB.addEventListener("click", RespondClick);

function RespondClick() {
    showForm(Cards);
}