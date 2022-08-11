export const listenSortButtons = (Cards) => {
    sortByNameListener(Cards);
    sortByDateListener(Cards);
}

const sortByNameListener = (Cards) => {
    sortButtonElement().name.addEventListener('click', () => sortByNameHandler(Cards));
}

const sortByDateListener = (Cards) => {
    sortButtonElement().date.addEventListener('click', () => sortByDateHandler(Cards));
}

const sortByNameHandler = (Cards) => {
    const buttonsElement = sortButtonElement();

    Cards.flushCardsDisplay();
    Cards.sortByName();
    Cards.showCollection();

    buttonsElement.date.disabled = false;
    buttonsElement.name.disabled = true;
}

const sortByDateHandler = (Cards) => {
    const buttonsElement = sortButtonElement();

    Cards.flushCardsDisplay();
    Cards.sortByDate();
    Cards.showCollection();

    buttonsElement.date.disabled = true;
    buttonsElement.name.disabled = false;
}

const sortButtonElement = () => {
    return {
        name: document.querySelector('#name-filter-button'),
        date: document.querySelector('#date-filter-button')
    }
}