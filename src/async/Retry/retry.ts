import { delay } from '../../helpers/Delay/delay';
import { isDefined } from '../../general/isDefined/is-defined';
import { IResult } from './result.interface';

/**
 * The function tries to run async task several `times` with `interval`.
 * @param times The function will try X `times` (default 3 times) to complete function.
 * @param interval The `interval` (ms) between function execution (default 0 ms).
 * @param params The `params` passed to task.
 * @param asyncCallback The task `asyncCallback` will be executed.
 * @param errorCallback Optional `errorCallback` if you want to catch errors.
 * @returns `err` status and `result` of the task.
 */
export async function retry({
  times = 3,
  interval = 0,
  params = {},
  asyncCallback,
  errorCallback,
}: {
  times?: number;
  interval?: number;
  params: any;
  asyncCallback: any;
  errorCallback?: any;
}): Promise<IResult> {
  let result: IResult;

  for (let i = 0; i < times; i += 1) {
    try {
      // eslint-disable-next-line no-await-in-loop, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
      result = await asyncCallback(params);
      return { err: false, result };
    } catch (error) {
      if (isDefined(errorCallback)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        errorCallback(error);
      }
    }
    // eslint-disable-next-line no-await-in-loop, @typescript-eslint/no-unsafe-call
    await delay(interval);
  }
  return { err: true };
}
