import { retry } from './retry';

describe('retry', () => {
  test('should work with default values', async () => {
    const result = await retry({
      params: '',
      asyncCallback: async function stub() {
        return new Promise((resolve) => {
          resolve(true);
        });
      },
    });
    expect(result.result).toBeTruthy();
  });
});
