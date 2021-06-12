import { IResult } from './result.interface';
export declare function retry({ times, interval, params, asyncCallback, errorCallback, }: {
    times?: number;
    interval?: number;
    params: any;
    asyncCallback: any;
    errorCallback?: any;
}): Promise<IResult>;
