import { showForm } from "./build_form_layout.js";
import { CardsCollection } from "./cards/cards-collection.js";
import { listenSortButtons } from "./listen/cards-listeners.js";
import { listenFilterButtons } from "./listen/cards-listeners.js";

showForm();

const Cards = new CardsCollection();
Cards.filterByStatus('todo');
Cards.showCollection();
listenSortButtons(Cards);
listenFilterButtons(Cards);