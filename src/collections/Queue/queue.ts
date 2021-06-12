import { limit as Limit } from '../../async/Limit/limit';

/**
 * The generic Queue.
 */
export class Queue {
  /**
   * The stored data.
   */
  protected data = [];

  /**
   * The limit for parallel task run.
   */
  protected limit: number;

  /**
   * The task to run.
   */
  protected callback: any;

  /**
   * The error callback for task.
   */
  protected errorCallback: any;

  /**
   * Set task to run
   * @param callback The task to run.
   * @return The reference on Queue obj.
   */
  setCallback(callback: any): Queue {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.callback = callback;
    return this;
  }

  /**
   * Set limit for parallel task run.
   * @param limit The limit for parallel task run.
   * @return The reference on Queue obj.
   */
  setLimit(limit: number): Queue {
    this.limit = limit;
    return this;
  }

  /**
   * Set error callback for task.
   * @param callback The task to run.
   * @return The reference on Queue obj.
   */
  setErrorCallback(callback: any): Queue {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.errorCallback = callback;
    return this;
  }

  /**
   * Set data for task.
   * @param data The data would be proceed by task.
   * @return The index of added data.
   */
  add(data: any): number {
    this.data.push(data);
    return this.length - 1;
  }

  /**
   * Remove data from task by index.
   * @param position The index of the data you want to remove.
   */
  remove(position: number): void {
    this.data = this.data.splice(position, 1);
  }

  /**
   * Executes tasks inside queue.
   * @return Array of results.
   */
  async drain(): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const resValues = await Limit({
      maxConcurrency: this.limit,
      params: this.data,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      callback: this.callback,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, unicorn/no-for-loop
    for (let i = 0; i < resValues.length; i += 1) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (resValues[i].status === 'rejected')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, no-await-in-loop, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        await this.errorCallback(resValues[i].value);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return resValues;
  }

  /**
   * The function checks state of queue.
   * @return The queue is empty - return true, otherwise - false.
   */
  isEmpty(): boolean {
    return this.data.length === 0;
  }

  /**
   * The getter return length of the queue.
   * @return The length of the queue.
   */
  get length(): number {
    return this.data.length;
  }
}
