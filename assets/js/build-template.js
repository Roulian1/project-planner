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
const createElement = (
    elementTag,
    elementClass,
    elementId,
    elementInnerText
) => {
    // create a new section element
    const newElement = document.createElement(elementTag);
    // add class to it
    newElement.classList.add(elementClass);
    // add id to it
    newElement.id = elementId;
    // add text to it
    newElement.innerText = elementInnerText;

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
const createInDom = (
    elementTag,
    elementClass,
    elementId,
    parentId,
    elementInnerText,
    id
) => {
    // If parent is main, don't add a id number
    parentId = parentId === 'main' ? parentId : `#${formatId(parentId, id)}`

    // get the parent element
    const parent = document.querySelector(parentId);
    // create Element
    const newElement = createElement(
        elementTag,
        elementClass,
        formatId(elementId, id),
        elementInnerText
    );

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
        createInDom(
            element.tag,
            element.class,
            element.id,
            element.parentId,
            element.text,
            id
        );
    }
};
