import ColorThief from 'colorthief/dist/color-thief.mjs';

const colorThief = new ColorThief();

/**
 * @function getPalette
 * @description Get the color palette of an image
 * @param {HTMLElement} img - The image element
 * @param {number} colorAmount - The amount of colors to take from the image
 * @param {number} quality - Number of pixels to skip before taking a new sample
 * @returns {array} An array of rgb values
*/

export const getPalette = (img, colorAmount, quality = 10) => {
  const palette = colorThief.getPalette(img, colorAmount, quality);
  return palette.map((color) => {
    const [red, green, blue] = color;
    return `rgb(${red}, ${green}, ${blue})`;
  });
};

/**
 * @function getDominantColor
 * @description Get the dominant color of an image
 * @param {HTMLElement} img - The image element
 * @param {number} quality - Number of pixels to skip before taking a new sample
 * @returns {string} The rgb value of the dominant color
 * @example
 * // returns 'rgb(200. 140, 120)'
 * getDominantColor(imageRef.current)
*/

export const getDominantColor = (img, quality = 10) => {
  const color = colorThief.getColor(img, quality);
  const [red, green, blue] = color;
  return `rgb(${red}, ${green}, ${blue})`;
};

/**
 * @function getTheme
 * @description Get the theme
 * @returns {string} The 'light' or 'dark' theme
 * @example
 * // returns 'dark'
 * getTheme()
*/

export const getTheme = () => {
  return localStorage.getItem('darkTheme') ? 'dark' : 'light';
};

/**
 * @function getMainColor
 * @description Get the main color
 * @returns {string} The main color: 'green', 'orange' or 'violet'
 * @example
 * // returns 'orange'
 * getMainColor()
*/

export const getMainColor = () => {
  const defaultColor = 'green';
  const mainColor = localStorage.getItem('mainColor');
  return mainColor || defaultColor;
};
