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
    element
) => {
    // create a new section element
    const newElement = document.createElement(element.tag);
    // add class to it
    newElement.classList.add(element.class);
    // add id to it
    newElement.id = element.id;
    // add text to it
    if (element.text) {
        newElement.innerText = element.text;
    };
    // add type to it
    if (element.type) {
        newElement.type = element.type;
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
    element
) => {
    // get the parent element
    const parent = document.querySelector(`#${element.parentId}`);
    // create Element
    const newElement = createElement(
        element
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
export const showForm = () => {
    let layout = display.concat(entrance);
    console.log(layout);
    for (const element of layout) {
        console.log(element);
        createInDom(
            element
        );
    }
};