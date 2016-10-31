var ValidationMessagesConfiguration = (function () {
    function ValidationMessagesConfiguration() {
    }
    return ValidationMessagesConfiguration;
}());
exports.ValidationMessagesConfiguration = ValidationMessagesConfiguration;
var DefaultErrorMessages = (function () {
    function DefaultErrorMessages() {
    }
    return DefaultErrorMessages;
}());
exports.DefaultErrorMessages = DefaultErrorMessages;
exports.defaultConfig = {
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
//# sourceMappingURL=config.js.map