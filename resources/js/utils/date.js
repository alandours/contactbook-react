/**
 * @function formatDate
 * @description Transform the birthday string to a date
 * @param {string} birthdayDate - A birthday string in YYYY-MM-DD format
 * @returns {date} The birthday as a date
*/

const formatDate = (birthdayDate) => {
  const parts = birthdayDate.split('-');
  return new Date(parts[0], (parts[1] - 1), parts[2], 12, 0o0, 0o0);
};

/**
 * @function getNextBirthday
 * @description Update the birthday with the next birthday year (current year or next)
 * @param {string} birthday - A birthday string in YYYY-MM-DD format
 * @returns {date} The date of the next birthday
*/

const getNextBirthday = (birthday) => {
  const todayDate = new Date();
  const birthdayDate = formatDate(birthday);

  const currentYear = todayDate.getFullYear();
  birthdayDate.setFullYear(currentYear);

  const isBirthdayInCurrentYear = (birthdayDate - todayDate) > 0;
  const isBirthdayToday = birthdayDate.toDateString() === todayDate.toDateString();

  return (isBirthdayInCurrentYear || isBirthdayToday) ? birthdayDate : birthdayDate.setFullYear(currentYear + 1) && birthdayDate;
};

/**
 * @function getBirthdays
 * @description Keep the contacts with birthdays and sort them by date
 * @param {array} contacts - An array with all the contacts
 * @returns {array} An array with the contacts that have a birthday sorted by date
*/

export const getBirthdays = (contacts) => {
  const withBirthdays = contacts.filter((contact) => contact.birthday);

  if (!withBirthdays.length) return null;

  const withNextBirthday = withBirthdays.map((contact) => ({
    ...contact,
    nextBirthday: getNextBirthday(contact.birthday)
  }));

  const sortedByBirthday = withNextBirthday.sort((c1, c2) => c1.nextBirthday - c2.nextBirthday);

  return sortedByBirthday;
};

/**
 * @function getBirthdaysByMonth
 * @description Get birthdays grouped by month
 * @param {array} birthdays - An array of birthdays
 * @returns {object} An object with each birthday month as a key and an array of the month's birthdays as its value
*/

export const getBirthdaysByMonth = (birthdays) => {
  return birthdays.reduce((acc, curr) => {
    const group = acc;
    const { nextBirthday } = curr || {};

    const monthYear = `${nextBirthday.toLocaleString('en', { month: 'long' })} ${nextBirthday.getFullYear()}`;

    group[monthYear] = group[monthYear] ? [...group[monthYear], curr] : [curr];

    return group;
  }, {});
};

/**
 * @function calculateAge
 * @description Calculate the age for a given birthday
 * @param {string} birthdayDate - A birthday string in YYYY-MM-DD format
 * @returns {number|null} The current age
 * @example
 * // returns 27
 * calculateAge('1993-01-01')
*/

export const calculateAge = (birthdayDate) => {
  const today = new Date();
  const birthday = new Date(birthdayDate);

  const month = today.getMonth() - birthday.getMonth();
  let age = today.getFullYear() - birthday.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) age -= 1;

  return (age < 100) ? age : null;
};

/**
 * @function calculateNextBirthdayAge
 * @description Calculate the age for the next birthday
 * @param {string} birthday - A birthday string in YYYY-MM-DD format
 * @param {date} nextBirthday - A birthday date with the updated year
 * @returns {number|null} The age for the next birthday
*/

export const calculateNextBirthdayAge = (birthday, nextBirthday) => {
  const currentMonth = new Date().getMonth();
  const nextBirthdayMonth = nextBirthday.getMonth();
  const isNextYearBirthday = (currentMonth - nextBirthdayMonth) > 0;
  const age = calculateAge(birthday);
  if (!age) return null;
  return isNextYearBirthday ? age + 1 : age;
};

/**
 * @function getBirthdayText
 * @description Get the birthday as formatted text
 * @param {string} birthday - A birthday string in YYYY-MM-DD format
 * @returns {string} A string of the formatted birthday
 * @example
 * return January 1, 1993
 * getBirthdayText('1993-01-01')
*/

export const getBirthdayText = (birthday) => {
  const birthdayDate = formatDate(birthday);
  const options = { month: 'long' };
  const locale = 'en';

  if (calculateAge(birthdayDate))
    return `${birthdayDate.toLocaleDateString(locale, options)} ${birthdayDate.getUTCDate()}, ${birthdayDate.getUTCFullYear()}`;

  return `${birthdayDate.toLocaleDateString(locale, options)} ${birthdayDate.getUTCDate()}`;
};
