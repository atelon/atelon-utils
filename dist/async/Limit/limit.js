"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.limit = void 0;
const allSettled = require("promise.allsettled");
async function limit({ maxConcurrency, params, callback, }) {
    const paramsLength = params.length;
    const returnTasks = [];
    const executingTasks = [];
    for (let i = 0; i < paramsLength; i += 1) {
        const currentTask = Promise.resolve().then(() => callback(params[i]));
        returnTasks.push(currentTask);
        if (maxConcurrency <= paramsLength) {
            const executeTask = currentTask.then(() => executingTasks.splice(executingTasks.indexOf(executeTask), 1));
            executingTasks.push(executeTask);
            if (executingTasks.length >= maxConcurrency) {
                await Promise.race(executingTasks);
            }
        }
    }
    return allSettled(returnTasks);
}
exports.limit = limit;
//# sourceMappingURL=limit.js.map