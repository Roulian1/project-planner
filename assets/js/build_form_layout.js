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
export const showForm = (Cards) => {
    let layout = display.concat(entrance);
    for (const element of layout) {
        createInDom(
            element
        );
    }
    const objName = document.getElementById('name');
    const objDescriptive = document.getElementById('descriptive');
    const objDueDate = document.getElementById('due_date');

    document.getElementById('add_entrance_button').addEventListener('click', function(e) {
        console.log(objName.value + " " + objDescriptive.value + " " + objDueDate.value);
        const data = {
            nameEnt : objName.value, 
            descriptiveEnt : objDescriptive.value, 
            dateEnt : objDueDate.value
        };
        Cards.addItem(Cards); 
    },);
};