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

/**
 * @function getRandomInt
 * @description Get a random integer between two values
 * @returns {number} The random integer
 * @example
 * // returns 8
 * getRandomInt(4, 15)
*/

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

/**
 * @function isMedia
 * @description Validate if the current width is equal or greater to a given device
 * @param {string} media - The device name
 * @param {string} px - A custom value in pixels (optional)
 * @returns {boolean} The validation result
 * @example
 * // returns true
 * isMedia('desktop')
*/

export const isMedia = (media, px) => {
  const devices = {
    mobileXs: '320',
    mobileXsLandscape: '320',
    mobile: '360',
    mobileLandscape: '480',
    tablet: '768',
    tabletLandscape: '992',
    laptop: '1024',
    desktop: '1270',
    custom: px
  };

  return window.matchMedia(`(min-width: ${Number(devices[media])}px)`).matches;
};
