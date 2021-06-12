"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.stack = [];
    }
    push(data) {
        this.stack.push(data);
    }
    pop() {
        return this.stack.pop();
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    get length() {
        return this.stack.length;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map