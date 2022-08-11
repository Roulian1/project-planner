import { showForm } from "./build_form_layout.js";
import { CardsCollection } from "./cards/cards-collection.js";

showForm();

const Cards = new CardsCollection();
Cards.sortByDate();
Cards.showCollection();