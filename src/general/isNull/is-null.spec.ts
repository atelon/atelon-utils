import { isNull } from './is-null';

describe('isNull', () => {
  test('should be null', () => {
    // eslint-disable-next-line unicorn/no-null
    expect(isNull(null)).toBeTruthy();
  });

  test('should be not null', () => {
    expect(isNull('')).toBeFalsy();
  });
});
