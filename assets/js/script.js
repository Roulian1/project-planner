import { showForm } from "./build_form_layout.js";
import { CardsCollection } from "./cards/collect-cards.js";

showForm();

const Cards = new CardsCollection();
Cards.showCollection();