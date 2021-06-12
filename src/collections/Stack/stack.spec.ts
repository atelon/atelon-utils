import { Stack } from './stack';

describe('Stack', () => {
  test('Should push', () => {
    const res = new Stack();
    res.push(1);
    expect(res.length).toBe(1);
  });

  test('Should pop', () => {
    const res = new Stack();
    res.push(2);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res2 = res.pop();
    expect(res2).toBe(2);
  });
});
