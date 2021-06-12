[Utils. The utility library documentation](../README.md) / [Exports](../modules.md) / async

# Namespace: async

## Table of contents

### Functions

- [limit](async.md#limit)
- [retry](async.md#retry)

## Functions

### limit

▸ **limit**(`__namedParameters`: { `callback`: *any* ; `maxConcurrency`: *number* ; `params`: *any*[]  }): *Promise*<any\>

The function limits parallel task execution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | - |
| `__namedParameters.callback` | *any* | - |
| `__namedParameters.maxConcurrency` | *number* | The function will limit with `maxConcurrency` function execution. |
| `__namedParameters.params` | *any*[] | The `params` passed to task. |

**Returns:** *Promise*<any\>

Defined in: async/Limit/limit.ts:12

___

### retry

▸ **retry**(`__namedParameters`: { `asyncCallback`: *any* ; `errorCallback?`: *any* ; `interval?`: *number* ; `params`: *any* ; `times?`: *number*  }): *Promise*<IResult\>

The function tries to run async task several `times` with `interval`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | - |
| `__namedParameters.asyncCallback` | *any* | The task `asyncCallback` will be executed. |
| `__namedParameters.errorCallback?` | *any* | Optional `errorCallback` if you want to catch errors. |
| `__namedParameters.interval?` | *number* | The `interval` (ms) between function execution (default 0 ms). |
| `__namedParameters.params` | *any* | The `params` passed to task. |
| `__namedParameters.times?` | *number* | The function will try X `times` (default 3 times) to complete function. |

**Returns:** *Promise*<IResult\>

`err` status and `result` of the task.

Defined in: async/Retry/retry.ts:14
