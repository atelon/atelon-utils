[Utils. The utility library documentation](../README.md) / [Exports](../modules.md) / [collections](../modules/collections.md) / Queue

# Class: Queue

[collections](../modules/collections.md).Queue

The generic Queue.

## Table of contents

### Constructors

- [constructor](collections.queue.md#constructor)

### Properties

- [callback](collections.queue.md#callback)
- [data](collections.queue.md#data)
- [errorCallback](collections.queue.md#errorcallback)
- [limit](collections.queue.md#limit)

### Accessors

- [length](collections.queue.md#length)

### Methods

- [add](collections.queue.md#add)
- [drain](collections.queue.md#drain)
- [isEmpty](collections.queue.md#isempty)
- [remove](collections.queue.md#remove)
- [setCallback](collections.queue.md#setcallback)
- [setErrorCallback](collections.queue.md#seterrorcallback)
- [setLimit](collections.queue.md#setlimit)

## Constructors

### constructor

\+ **new Queue**(): [*Queue*](collections.queue.md)

**Returns:** [*Queue*](collections.queue.md)

## Properties

### callback

• `Protected` **callback**: *any*

The task to run.

Defined in: collections/Queue/queue.ts:20

___

### data

• `Protected` **data**: *any*[]= []

The stored data.

Defined in: collections/Queue/queue.ts:10

___

### errorCallback

• `Protected` **errorCallback**: *any*

The error callback for task.

Defined in: collections/Queue/queue.ts:25

___

### limit

• `Protected` **limit**: *number*

The limit for parallel task run.

Defined in: collections/Queue/queue.ts:15

## Accessors

### length

• get **length**(): *number*

The getter return length of the queue.

**Returns:** *number*

The length of the queue.

Defined in: collections/Queue/queue.ts:113

## Methods

### add

▸ **add**(`data`: *any*): *number*

Set data for task.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | *any* | The data would be proceed by task. |

**Returns:** *number*

The index of added data.

Defined in: collections/Queue/queue.ts:64

___

### drain

▸ **drain**(): *Promise*<any\>

Executes tasks inside queue.

**Returns:** *Promise*<any\>

Array of results.

Defined in: collections/Queue/queue.ts:81

___

### isEmpty

▸ **isEmpty**(): *boolean*

The function checks state of queue.

**Returns:** *boolean*

The queue is empty - return true, otherwise - false.

Defined in: collections/Queue/queue.ts:105

___

### remove

▸ **remove**(`position`: *number*): *void*

Remove data from task by index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | *number* | The index of the data you want to remove. |

**Returns:** *void*

Defined in: collections/Queue/queue.ts:73

___

### setCallback

▸ **setCallback**(`callback`: *any*): [*Queue*](collections.queue.md)

Set task to run

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | *any* | The task to run. |

**Returns:** [*Queue*](collections.queue.md)

The reference on Queue obj.

Defined in: collections/Queue/queue.ts:32

___

### setErrorCallback

▸ **setErrorCallback**(`callback`: *any*): [*Queue*](collections.queue.md)

Set error callback for task.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | *any* | The task to run. |

**Returns:** [*Queue*](collections.queue.md)

The reference on Queue obj.

Defined in: collections/Queue/queue.ts:53

___

### setLimit

▸ **setLimit**(`limit`: *number*): [*Queue*](collections.queue.md)

Set limit for parallel task run.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | *number* | The limit for parallel task run. |

**Returns:** [*Queue*](collections.queue.md)

The reference on Queue obj.

Defined in: collections/Queue/queue.ts:43
