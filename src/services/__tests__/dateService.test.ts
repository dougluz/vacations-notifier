import { DateService } from '@src/services/dateService';

describe('DateService Tests', () => {
  it('should return date in the DD/MM/YYYY format', function () {
    const date = '10/08/20';
    const formatted = DateService.toLocaleDateFormat(date);
    expect(formatted).toEqual('10/08/2020');
  });
  it('should return an array with two dates in the DD/MM/YYYY format', function () {
    const dateString = '10/08/20 à 30/08/20';
    const formatted = DateService.splitVacationPeriod(dateString);
    expect(formatted).toEqual(['10/08/2020', '30/08/2020']);
  });
  it('should return false when passing a date in a diferent format than DD/MM/YY', function () {
    const date = '10/08/2020';
    const isValid = DateService.validDateFormat(date);
    expect(isValid).toBeTruthy();
  });
  it('should return a date in the correct format when passing date in DD/MM/YYYY format', function () {
    const date = '10/08/2020 à 30/08/2020';
    const formatted = DateService.splitVacationPeriod(date);
    expect(formatted).toEqual(['10/08/2020', '30/08/2020']);
  });
  it('should throw a error when passing a invalid date string as argument to toLocaleDateFormat', function () {
    const date = '20/10/199999999';
    expect(() => DateService.toLocaleDateFormat(date)).toThrow();
  });
});
