import { formatId } from "./format-id.js";

/**
 * Create an element ready to be injected in DOM.
 *
 * @param {String} elementTag
 * @param {String} elementClass
 * @param {String} elementId
 * @param {String} elementInnerText
 *
 * @returns {Node}
 */
const createElement = (element, id) => {
    // create a new section element
    const newElement = document.createElement(element.tag);
    // add class to it
    newElement.classList.add(element.class);
    // add id to it
    newElement.id = formatId(element.id, id);
    // add text to it
    newElement.innerText = element.text;

    return newElement;
};

/**
 * Create An element and append it in DOM as a child of the element
 * with the provided ID.
 *
 * @param {String} elementTag
 * @param {String} elementClass
 * @param {String} elementId
 * @param {String} parentId
 * @param {String} elementInnerText
 */
const createInDom = (element, id) => {
    // If parent is main, don't add an id number
    const parentId = element.parentId === 'main' ? element.parentId : `#${formatId(element.parentId, id)}`

    // get the parent element
    const parent = document.querySelector(parentId);
    // create Element
    const newElement = createElement(element, id);
    // create and append new element to parent
    parent.append(newElement);
};

/**
 * Read the provided array containing object with elements attributes
 * and injects them in DOM.
 *
 * @param {Array.<Object>} layout
 */
export const showTemplate = (layout, id) => {// id will be used for multiple cards
    for (const element of layout) {
        createInDom(element, id);
    }
};
