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
}
export declare const defaultConfig: ValidationMessagesConfiguration;
