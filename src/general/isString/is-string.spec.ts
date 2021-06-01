import { isString } from './is-string';

describe('isString', () => {
  test('should be string', () => {
    expect(isString('5')).toBeTruthy();
  });

  test('should not be string', () => {
    expect(isString(5)).toBeFalsy();
  });
});
