import { showTemplate } from "./build-template.js";
import { todoCardLayout } from "./todo-card-layout.js";

const fakeCard = {
    title: 'A super task',
    status: 'doing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores ipsam temporibus aspernatur veniam qui veritatis impedit maiores recusandae, quibusdam, nesciunt aliquam quo suscipit, assumenda excepturi quaerat eius sint repellendus!',
    date: 'a date'
}

export const showCards = () => {
    showTemplate(todoCardLayout, 42);// second parameter ID will be used for multiple cards
}

