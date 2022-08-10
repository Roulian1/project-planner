import { Card } from "./card.js";

const fakeCard = {
    title: 'A super task',
    status: 'doing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores ipsam temporibus aspernatur veniam qui veritatis impedit maiores recusandae, quibusdam, nesciunt aliquam quo suscipit, assumenda excepturi quaerat eius sint repellendus!',
    date: 'a date',
    id: 35
}

export const showCards = () => {
    let TestCard = new Card(fakeCard.id, fakeCard.title, fakeCard.text, fakeCard.date, fakeCard.status)
}

