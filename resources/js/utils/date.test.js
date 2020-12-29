import * as date from './date';

describe('formatDate', () => {
  const { formatDate } = date;

  it('should return a Date from a date string', () => {
    const expectedResult = new Date('2004', '08', '22', 12, 0o0, 0o0);
    expect(formatDate('2004-09-22')).toEqual(expectedResult);
  });
});

describe('getNextBirthday', () => {

});

describe('getBirthdays', () => {

});

describe('getBirthdaysByMonth', () => {

});

describe('calculateAge', () => {

});

describe('calculateNextBirthdayAge', () => {

});

describe('getBirthdayText', () => {

});

describe('getListDate', () => {

});
