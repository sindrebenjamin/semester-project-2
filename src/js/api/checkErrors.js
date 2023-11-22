/**
 * 
 * @param {*} result Takes JSON body content from response (result) as an argument.
 * Checks if there are any errors. If true, creates an array containing all error messages, joins them as one string and then throws an error with it.
 */

export const checkErrors = (result) => {
    if(result.errors && result.errors.length > 0) {
        const errorMessages = result.errors.map(error => error.message);
        throw new Error(errorMessages.join(", "));
    }
}