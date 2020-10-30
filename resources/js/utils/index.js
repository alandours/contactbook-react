/**
 * @function isArrayNotEmpty
 * @description Validates if the parameter is an array that it's not empty
 * @param {any} arr - A parameter to validate
 * @returns {boolean}
*/

export const isArrayNotEmpty = (arr) => !!(arr instanceof Array && arr.length);

/**
 * @function isObjectNotEmpty
 * @description Validates if the parameter is an object that it's not empty
 * @param {any} obj - A parameter to validate
 * @returns {boolean}
*/

export const isObjectNotEmpty = (obj) => !obj || !!(obj.constructor === Object && Object.keys(obj).length);

/**
 * @function sanitizeString
 * @description Sanitize string
 * @param {string} str - A string to sanitize
 * @param {string} rp - A string with a whitespace replacement
 * @returns {string} The sanitized string
 * @example
 * // returns 'population_51201'
 * sanitizeString('Population 51,201', '_')
*/

export const sanitizeString = (str, rp) => {
  const wsReplace = typeof rp === 'string' ? rp : '-';
  let string = str.toLowerCase();

  string = string.replace(/[\[\]\(\)\-\{\}\^\,]/g, '');
  string = string.replace(/[àáâãäåª]/g, 'a');
  string = string.replace(/[éèëê]/g, 'e');
  string = string.replace(/[íìïî]/g, 'i');
  string = string.replace(/[óòöô]/g, 'o');
  string = string.replace(/[úùüû]/g, 'u');
  string = string.replace(/[ñ]/g, 'n');
  string = string.replace(/[ç]/g, 'c');
  string = string.replace(/ /g, wsReplace);

  return string;
};

/**
 * @function setPageTitle
 * @description Set page title for each page
 * @param {string} title - A string with the page title
*/

export const setPageTitle = (title) => {
  const sitename = process.env.MIX_APP_NAME;
  document.title = title ? `${sitename} - ${title}` : sitename;
};
