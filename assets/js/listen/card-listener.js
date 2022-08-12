import { formatId } from "../cards/format-id.js";

export const cardStatusListener = (id, status, CardsCollection) => {
    const buttonElement = getButtonElement(id, status);

    console.log(buttonElement);

    buttonElement.addEventListener('click', updateCard(id, status));
}

const getButtonElement = (id, status) => {
    return document.querySelector(`#${getButtonId(id, status)}`);
}

const getButtonId = (id, status) => {
    const baseId = `card-${status}-button`;
    return formatId(baseId, id);
}

const updateCard = (id, status, CardsCollection) => {
    console.log('update');
    updateCardButtons(id, status);
}

const updateCardButtons = (id, status) => {
    const statusStates = ['todo', 'doing', 'done'];

    // enable all button excepted the selected status one.
    statusStates.forEach((statusState => {
        // get the status button element
        const button = getButtonElement(id, statusState);

        // if the button element correspond to the selected status,
        // disable it, otherwise enable it.
        status === statusState ? button.disabled = true : button.disabled = false;
    }))

}