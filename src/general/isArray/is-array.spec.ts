import { isArray } from './is-array';

describe('isArray', () => {
  test('should be array', () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
  });

  test('should not be array', () => {
    expect(isArray('safdsdafasdf')).toBeFalsy();
  });
});
