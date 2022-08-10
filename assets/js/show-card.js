import { showTemplate } from "./build-template.js";
import { todoCardLayout } from "./todo-card-layout.js";

export const showCards = () => {
    showTemplate(todoCardLayout, 1);// second parameter ID will be used for multiple cards
}

