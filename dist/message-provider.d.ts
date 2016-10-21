import { DefaultErrorMessages } from './config';
export declare class MessageProvider {
    private defaultMessages;
    constructor(defaultMessages: DefaultErrorMessages);
    /**
     * Provides the message that will be shown to the user.
     * There are default messages and user defined ones.
     * Strings with placeholders are also supported for given errors.
     * E.g. "Minimum length is {0}" where "{0}" will be replaced with the provided min length value.
     * @param errorType The type of the error. E.g. "required", "minlength" etc.
     * @param errorPayload Provides custom message and/or the required value. E.g. for ValidationExtensions.minNumber(18) the payload will contain the value "18"
     */
    getErrorMessage(errorType: string, errorPayload: any): string;
    /**
     * Replaces the placeholders in the string with the provided values. The order of the values must match the number of the placeholder.
     * @param text Text with placeholders. E.g: "Hello {0}"
     * @param params The params that will replace the placeholders. E.g: ['World'] or when single value only 'World'
     */
    private _stringFormat(text, ...params);
}
