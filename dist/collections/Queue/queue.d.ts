export declare class Queue {
    protected data: any[];
    protected limit: number;
    protected callback: any;
    protected errorCallback: any;
    setCallback(callback: any): Queue;
    setLimit(limit: number): Queue;
    setErrorCallback(callback: any): Queue;
    add(data: any): number;
    remove(position: number): void;
    drain(): Promise<any>;
    isEmpty(): boolean;
    get length(): number;
}
