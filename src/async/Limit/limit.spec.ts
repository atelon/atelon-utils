import { limit } from './limit';

describe('limit', () => {
  test('Should be all true', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = await limit({
      maxConcurrency: 1,
      params: [true, true, true, true, true],
      callback(param) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return param;
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res[0].value).toBeTruthy();
  });
});
