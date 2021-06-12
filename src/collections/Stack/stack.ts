export class Stack {
  private stack = [];

  push(data: any): void {
    this.stack.push(data);
  }

  pop(): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.stack.pop();
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  get length(): number {
    return this.stack.length;
  }
}
