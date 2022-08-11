export const listenSortButtons = () => {
    sortByNameListener();
    sortByDateListener();
}

const sortByNameListener = () => {
    sortButtonElement().name.addEventListener('click', () => sortByNameHandler());
}

const sortByDateListener = () => {
    sortButtonElement().date.addEventListener('click', () => sortByDateHandler());
}

const sortByNameHandler = () => {
    const buttonsElement = sortButtonElement();

    buttonsElement.date.disabled = false;
    buttonsElement.name.disabled = true;
}

const sortByDateHandler = () => {
    const buttonsElement = sortButtonElement();

    buttonsElement.date.disabled = true;
    buttonsElement.name.disabled = false;
}

const sortButtonElement = () => {
    return {
        name: document.querySelector('#name-filter-button'),
        date: document.querySelector('#date-filter-button')
    }
}