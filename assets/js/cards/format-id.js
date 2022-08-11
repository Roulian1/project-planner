/**
 * Return a formated id in this form : my-element--0001
 * 
 * @param {String} id 
 * @param {String} baseId 
 * @returns 
 */
export const formatId = (baseId, id) => `${baseId}--${toFourDigits(id)}`;

/**
 * Return provided number to a 4 digits String.
 * Eg. : 42 become 0042
 * 
 * @param {Integer} id 
 * @returns {String}
 */
const toFourDigits = (id) => {
    // convert integer to string
    id = id.toString();
    // format to 4 digits
    while (id.length < 4) id = "0" + id;
    return id;
};