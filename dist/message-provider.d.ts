import { DefaultErrorMessages } from './config';
export declare class MessageProvider {
    private defaultMessages;
    constructor(defaultMessages: DefaultErrorMessages);
    getErrorMessage(errorType: string, errorPayload: any): string;
    private _stringFormat(text, ...params);
}
