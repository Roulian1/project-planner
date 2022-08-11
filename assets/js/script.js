import { showForm } from "./build_form_layout.js";
import { collectCards } from "./collect-cards.js";

// Let button + display entrance form layout

let addB = document.getElementById('add-button');

addB.addEventListener("click", RespondClick);

function RespondClick() {
    showForm(); 
}

collectCards();
