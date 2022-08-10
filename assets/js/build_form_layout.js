// Displaying the entrance form layout with button +

import { display } from './display_form_layout.js';
import { entrance } from './entrance_form_layout.js';

/**
 * Create an element ready to be injected in DOM.
 *
 * @param {String} elementTag
 * @param {String} elementClass
 * @param {String} elementId
 * @param {String} elementInnerText
 * @param {String} elementType
 *
 * @returns {Node}
 */
const createElement = (
    elementTag,
    elementClass,
    elementId,
    elementInnerText,
    elementType,
) => {
    // create a new section element
    const newElement = document.createElement(elementTag);
    // add class to it
    newElement.classList.add(elementClass);
    // add id to it
    newElement.id = elementId;
    // add text to it
    if (elementInnerText) {
        newElement.innerText = elementInnerText;
    };
    // add type to it
    if (elementType) {
        newElement.type = elementType;
    };

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
 * @param {string} elementType
 */
const createInDom = (
    elementTag,
    elementClass,
    elementId,
    parentId,
    elementInnerText,
    elementType,
) => {
    console.log(elementTag);
    // get the parent element
    const parent = document.querySelector(`#${parentId}`);
    // create Element
    const newElement = createElement(
        elementTag,
        elementClass,
        elementId,
        elementInnerText,
        elementType,
    );
console.log(newElement);
    // create and append new element to parent
    parent.append(newElement);

};

/**
 * Read the provided array containing object with elements attributes
 * and injects them in DOM.
 *
 * @param {Array.<Object>} layout
 */
export const showForm = () => {
    let layout = display.concat(entrance);
    console.log(layout);
    for (const element of layout) {
        console.log(element);
        createInDom(
            element.tag,
            element.class,
            element.id,
            element.parentId,
            element.text,
            element.type,
        );
    }
};