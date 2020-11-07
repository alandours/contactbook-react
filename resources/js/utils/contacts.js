import { getRandomInt } from '@utils';
import { getMainColor } from '@utils/color';

/**
 * @function formatFullName
 * @description Format the contacts name according to the orderLastnameFirst setting
 * @param {string} name - A string with the contact's name
 * @param {string} lastname - A string with the contact's lastname
 * @returns {string} A string with the contact's full name
 * @example
 * // returns 'Laura Palmer'
 * formatFullName('Laura', 'Palmer')
*/

const formatFullName = (name, lastname) => {
  if (!lastname) return name;
  const orderLastnameFirst = localStorage.getItem('orderLastnameFirst');
  return orderLastnameFirst ? `${lastname}, ${name}` : `${name} ${lastname}`;
};

/**
 * @function addFullNames
 * @description Add the full name to each contact
 * @param {array} contacts - An array of contacts
 * @returns {array} An array of contacts, each with a full name
*/

export const addFullNames = (contacts) => {
  return contacts.map((contact) => {
    const { name, lastname } = contact || {};
    return {
      ...contact,
      fullName: formatFullName(name, lastname)
    };
  });
};

/**
 * @function sortContacts
 * @description Sort contacts according to the orderLastnameFirst setting
 * @param {array} contacts - An array of contacts
 * @returns {array} An array with the sorted contacts
*/

export const sortContacts = (contacts) => {
  const orderLastnameFirst = localStorage.getItem('orderLastnameFirst');

  if (orderLastnameFirst) {
    return contacts.sort((c1, c2) => {
      const name1 = c1.name;
      const name2 = c2.name;
      const lastname1 = (c1.lastname || name1).toLowerCase();
      const lastname2 = (c2.lastname || name2).toLowerCase();

      const lastnameCompare = lastname1.localeCompare(lastname2);

      if (lastnameCompare === 0)
        return name1.localeCompare(name2);

      return lastnameCompare;
    });
  }

  return contacts;
};

/**
 * @function getFirstLetter
 * @description Return the first letter of a string in uppercase
 * @param {string} str - A string to get the first letter
 * @returns {string} The first character of str
 * @example
 * // returns 'L'
 * getFirstLetter('Laura')
*/

export const getFirstLetter = (str) => str.toUpperCase()[0];

/**
 * @function appendParsedData
 * @description Parse the form data and append it to the FormData object
 * @param {object} formData - A FormData object to append the data
 * @param {object} data - An object with the form data
*/

export const appendParsedData = (formData, data) => {
  Object.keys(data).forEach((key) => {
    const parsedData = data[key] === null ? '' : data[key];
    const value = typeof parsedData === 'string' ? parsedData : JSON.stringify(parsedData);
    formData.append(`${key}`, value);
  });
};

/**
 * @function getDefaultPhoto
 * @description Get the default profile picture name
 * @returns {string} A string of the default profile picture name
 * @example
 * // returns 'contact-orange.jpg'
 * getDefaultPhoto()
*/

export const getDefaultPhoto = () => `contact-${getMainColor()}.jpg`;

/**
 * @function getRandomContact
 * @description Get a random contact
 * @returns {object} The random contact
*/

export const getRandomContact = (contacts) => {
  const randomId = getRandomInt(1, contacts.length);
  const randomContact = contacts.find((contact) => contact.id === randomId);
  return randomContact || getRandomContact(contacts);
};
