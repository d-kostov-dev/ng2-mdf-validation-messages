export declare class ValidationMessagesConfiguration {
    class: string;
    defaultErrorMessages: DefaultErrorMessages;
}
export declare class DefaultErrorMessages {
    required: string;
    pattern: string;
    email: string;
    minLength: string;
    maxLength: string;
    minNumber: string;
    maxNumber: string;
    noEmpty: string;
    unknownError: string;
    rangeLength: string;
    range: string;
    [key: string]: string;
}
export declare const defaultConfig: ValidationMessagesConfiguration;
