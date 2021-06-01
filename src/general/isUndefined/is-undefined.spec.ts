import { isUndefined } from './is-undefined';

describe('isUndefined', () => {
  test('should be defined', () => {
    expect(isUndefined('asdwq')).toBeFalsy();
  });

  test('should be undefined', () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isUndefined(undefined)).toBeTruthy();
  });
});
