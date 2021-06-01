import { isNumber } from './is-number';

describe('isNumber', () => {
  test('should be number', () => {
    expect(isNumber(5)).toBeTruthy();
  });

  test('should not be number', () => {
    expect(isNumber('5')).toBeFalsy();
  });
});
