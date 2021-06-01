import { isDefined } from './is-defined';

describe('isDefined', () => {
  test('should be defined', () => {
    expect(isDefined('asdwq')).toBeTruthy();
  });

  test('should be undefined', () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isDefined(undefined)).toBeFalsy();
  });
});
