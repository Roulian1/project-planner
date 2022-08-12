export const listenSortButtons = (Cards) => {
    sortByNameListener(Cards);
    sortByDateListener(Cards);
}

export const listenFilterButtons = (Cards) => {
    filterByToDoListener(Cards);
    filterByDoingListener(Cards);
    filterByDoneListener(Cards);
}

const filterByToDoListener = (Cards) => {
    filterButtonsElement().todo.addEventListener('click', () => filterByToDoHandler(Cards));
}

const filterByDoingListener = (Cards) => {
    filterButtonsElement().doing.addEventListener('click', () => filterByDoingHandler(Cards));
}

const filterByDoneListener = (Cards) => {
    filterButtonsElement().done.addEventListener('click', () => filterByDoneHandler(Cards));
}

const filterByToDoHandler = (Cards) => {
    const filterButtons = filterButtonsElement();

    if (isDisabled(filterButtons.todo)) {
        Cards.SetFilterByTodoStatus(true);
    } else {
        Cards.SetFilterByTodoStatus(false);
    }

    switchDisabled(filterButtons.todo);
}


const filterByDoingHandler = (Cards) => {
    const filterButtons = filterButtonsElement();

    if (isDisabled(filterButtons.doing)) {
        Cards.SetFilterByDoingStatus(true);
    } else {
        Cards.SetFilterByDoingStatus(false);
    }

    switchDisabled(filterButtons.doing);
}

const filterByDoneHandler = (Cards) => {
    const filterButtons = filterButtonsElement();

    if (isDisabled(filterButtons.done)) {
        Cards.SetFilterByDoneStatus(true);
    } else {
        Cards.SetFilterByDoneStatus(false);
    }

    switchDisabled(filterButtons.done);
}

const isDisabled = (element) => {
    return element.classList.contains('disabled');
}

const switchDisabled = (element) => {
    element.classList.toggle('disabled');
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

const filterButtonsElement = () => {
    return {
        todo: document.querySelector('#todo-button'),
        doing: document.querySelector('#doing-button'),
        done: document.querySelector('#done-button')
    }
}

const sortButtonElement = () => {
    return {
        name: document.querySelector('#name-filter-button'),
        date: document.querySelector('#date-filter-button')
    }
}