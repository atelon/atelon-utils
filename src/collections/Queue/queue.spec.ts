import { Queue } from './queue';

describe('Queue', () => {
  test('Work properly', async () => {
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();

    const res = new Queue()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      .setCallback(mockCallback1)
      .setLimit(1)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      .setErrorCallback(mockCallback2);

    res.add(true);

    await res.drain();

    expect(mockCallback1).toHaveBeenCalledWith(true);
    expect(mockCallback2).toHaveBeenCalledTimes(0);
  });
});
