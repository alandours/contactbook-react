import * as utils from './index';

describe('isArrayNotEmpty', () => {
  const { isArrayNotEmpty } = utils;

  it("should return true if the input is an array and it's not empty", () => {
    expect(isArrayNotEmpty(['red', 'green', 'blue'])).toBe(true);
  });

  it('should return false if the input is an empty array', () => {
    expect(isArrayNotEmpty([])).toBe(false);
  });

  it('should return false if the input is not an array', () => {
    expect(isArrayNotEmpty({ name: 'Elliot', lastname: 'Anderson' })).toBe(false);
    expect(isArrayNotEmpty(true)).toBe(false);
    expect(isArrayNotEmpty('array')).toBe(false);
  });
});

describe('isObjectNotEmpty', () => {
  const { isObjectNotEmpty } = utils;

  it("should return true if the input is an object and it's not empty", () => {
    expect(isObjectNotEmpty({ name: 'Elliot', lastname: 'Anderson' })).toBe(true);
  });

  it('should return false if the input is an empty object', () => {
    expect(isObjectNotEmpty({})).toBe(false);
  });

  it('should return false if the input is not an object', () => {
    expect(isObjectNotEmpty(['red', 'green', 'blue'])).toBe(false);
    expect(isObjectNotEmpty(true)).toBe(false);
    expect(isObjectNotEmpty('object')).toBe(false);
  });
});

describe('sanitizeString', () => {
  const { sanitizeString } = utils;

  it('should return the sanitized string', () => {
    expect(sanitizeString('Cumpleaños 1993')).toBe('cumpleanos-1993');
  });

  it('should return the sanitized string replacing whitespaces with the second argument', () => {
    expect(sanitizeString('Cumpleaños 1993', '_')).toBe('cumpleanos_1993');
  });
});

describe('setPageTitle', () => {
  const { setPageTitle } = utils;

  it('should set the page title to: ContactBook - {given title}', () => {
    global.document = {
      title: ''
    };

    global.process = {
      env: {
        MIX_APP_NAME: 'ContactBook'
      }
    };

    setPageTitle('Settings');
    expect(global.document.title).toBe('ContactBook - Settings');
    setPageTitle('Birthdays');
    expect(global.document.title).toBe('ContactBook - Birthdays');
  });
});

describe('getRandomInt', () => {
  const { getRandomInt } = utils;

  it('should return a random integer between two numbers', () => {
    expect(getRandomInt(1, 2)).toBeGreaterThanOrEqual(1);
    expect(getRandomInt(1, 2)).toBeLessThan(2);
    expect(getRandomInt(4, 8)).toBeGreaterThanOrEqual(4);
    expect(getRandomInt(4, 8)).toBeLessThan(8);
  });
});
