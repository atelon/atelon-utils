// Use Promise.allSettled instead of allSettled if you compile code to es2020
// import { allSettled } from 'promise.allsettled';
// Fixed TS bug :O
import allSettled = require('promise.allsettled');

/**
 * The function limits parallel task execution.
 * @param maxConcurrency The function will limit with `maxConcurrency` function execution.
 * @param params The `params` passed to task.
 * @param task The task `task` will be executed.
 */
export async function limit({
  maxConcurrency,
  params,
  callback,
}: {
  maxConcurrency: number;
  params: Array<any>;
  callback: any;
}): Promise<any> {
  const paramsLength = params.length;
  const returnTasks = [];
  const executingTasks = [];
  for (let i = 0; i < paramsLength; i += 1) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, promise/no-callback-in-promise
    const currentTask = Promise.resolve().then(() => callback(params[i]));
    returnTasks.push(currentTask);

    if (maxConcurrency <= paramsLength) {
      const executeTask = currentTask.then(() =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        executingTasks.splice(executingTasks.indexOf(executeTask), 1),
      );
      executingTasks.push(executeTask);
      if (executingTasks.length >= maxConcurrency) {
        // eslint-disable-next-line no-await-in-loop
        await Promise.race(executingTasks);
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
  return allSettled(returnTasks);
}
