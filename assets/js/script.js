import { showForm } from "./build_form_layout.js";
import { CardsCollection } from "./cards/cards-collection.js";
import { listenSortButtons } from "./listen/cards-listeners.js";

showForm();

const Cards = new CardsCollection();
Cards.showCollection();
listenSortButtons(Cards);