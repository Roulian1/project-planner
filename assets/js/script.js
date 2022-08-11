import { showForm } from "./build_form_layout.js";
import { CardsCollection } from "./cards/cards-collection.js";
import { listenSortButtons } from "./listen/cards-listeners.js";
import { listenFilterButtons } from "./listen/cards-listeners.js";
import { defaultSort } from "./cards/default-sort.js";
// import { getCardsDB } from "./model/cards-db.js";


let addB = document.getElementById('add-button');

addB.addEventListener("click", RespondClick);

function RespondClick() {
    showForm();
}


const defaultSortStatus = 'date';
const Cards = new CardsCollection(defaultSortStatus);

defaultSort(defaultSortStatus);
Cards.showCollection();
listenSortButtons(Cards);
listenFilterButtons(Cards);
