"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const limit_1 = require("../../async/Limit/limit");
class Queue {
    constructor() {
        this.data = [];
    }
    setCallback(callback) {
        this.callback = callback;
        return this;
    }
    setLimit(limit) {
        this.limit = limit;
        return this;
    }
    setErrorCallback(callback) {
        this.errorCallback = callback;
        return this;
    }
    add(data) {
        this.data.push(data);
        return this.length - 1;
    }
    remove(position) {
        this.data = this.data.splice(position, 1);
    }
    async drain() {
        const resValues = await limit_1.limit({
            maxConcurrency: this.limit,
            params: this.data,
            callback: this.callback,
        });
        for (let i = 0; i < resValues.length; i += 1) {
            if (resValues[i].status === 'rejected')
                await this.errorCallback(resValues[i].value);
        }
        return resValues;
    }
    isEmpty() {
        return this.data.length === 0;
    }
    get length() {
        return this.data.length;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map