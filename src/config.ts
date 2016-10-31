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
    rangeLength: string;
    range: string;
    digit: string;
    equal: string;
    url: string;
    date: string;
    areEqual: string;
    passwords: string;
    [key: string]: string;
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
        rangeLength: 'The input must be between {0} and {1} symbols long!',
        range: 'The input must be between {0} and {1}!',
        digit: 'The input must be a number!',
        equal: 'The input must be equal to {0}!',
        url: 'The input must be a valid URL!',
        date: 'The input must be a valid date!',
        areEqual: 'The values in the group must match!',
        passwords: 'Both fields "Password" and "Confirm Password" must match!',
        unknownError: 'Unknown Error!',
    },
};
