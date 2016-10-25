export class ValidationMessagesConfiguration {
    class: string;
    defaultErrorMessages: DefaultErrorMessages;
}

export class DefaultErrorMessages {
    required: string;
    pattern: string;
    email: string;
    minLength: string;
    maxLength: string;
    minNumber: string;
    maxNumber: string;
    noEmpty: string;
    unknownError: string;
}

export const defaultConfig: ValidationMessagesConfiguration = {
    class: 'text-danger',
    defaultErrorMessages: {
        required: 'This field is required!',
        pattern: 'The input value does not match the pattern required!',
        email: 'Invalid email!',
        minLength: 'Minimum length is {0}!',
        maxLength: 'Maximum length is {0}!',
        minNumber: 'Minimal value is {0}!',
        maxNumber: 'Maximal value is {0}!',
        noEmpty: 'Only blank spaces are not allowed!',
        unknownError: 'Unknown Error!',
    },
};
