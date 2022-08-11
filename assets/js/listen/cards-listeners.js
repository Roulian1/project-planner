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

    //Cards.flushCardsDisplay();

    if (filterButtons.todo.disabled) {
        // filterButtons.todo.disabled = false;
        Cards.SetFilterByTodoStatus(true);
    } else {
        // filterButtons.todo.disabled = true;
        Cards.SetFilterByTodoStatus(false);
    }

    switchDisabled(filterButtons.todo);

    // Cards.filterByStatus();
    // Cards.showCollection();

    // filterButtons.todo.disabled = true;
    // filterButtons.doing.disabled = false;
    // filterButtons.done.disabled = false;
}

const filterByDoingHandler = (Cards) => {
    const filterButtons = filterButtonsElement();

    if (filterButtons.doing.disabled) {
        // filterButtons.doing.disabled = false;
        Cards.SetFilterByDoingStatus(true);
    } else {
        // filterButtons.doing.disabled = true;
        Cards.SetFilterByDoingStatus(false);
    }

    switchDisabled(filterButtons.doing);

    // Cards.flushCardsDisplay();
    // Cards.filterByStatus('doing');
    // Cards.showCollection();

    // filterButtons.todo.disabled = false;
    // filterButtons.doing.disabled = true;
    // filterButtons.done.disabled = false;
}

const filterByDoneHandler = (Cards) => {
    const filterButtons = filterButtonsElement();

    if (isDisabled(filterButtons.done)) {
        // filterButtons.done.disabled = false;
        Cards.SetFilterByDoneStatus(true);
    } else {
        // filterButtons.done.disabled = true;
        Cards.SetFilterByDoneStatus(false);
    }

    switchDisabled(filterButtons.done);

    // Cards.flushCardsDisplay();
    // Cards.filterByStatus('done');
    // Cards.showCollection();

    // filterButtons.todo.disabled = false;
    // filterButtons.doing.disabled = false;
    // filterButtons.done.disabled = true;
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