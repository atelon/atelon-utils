"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retry = void 0;
const delay_1 = require("../../helpers/Delay/delay");
const is_defined_1 = require("../../general/isDefined/is-defined");
async function retry({ times = 3, interval = 0, params = {}, asyncCallback, errorCallback, }) {
    let result;
    for (let i = 0; i < times; i += 1) {
        try {
            result = await asyncCallback(params);
            return { err: false, result };
        }
        catch (error) {
            if (is_defined_1.isDefined(errorCallback)) {
                errorCallback(error);
            }
        }
        await delay_1.delay(interval);
    }
    return { err: true };
}
exports.retry = retry;
//# sourceMappingURL=retry.js.map