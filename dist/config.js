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
        minLength: 'Minimum length is {0}',
        maxLength: 'Maximum length is {0}',
        minNumber: 'Minimal value is {0}',
        maxNumber: 'Maximal value is {0}',
    },
};
//# sourceMappingURL=config.js.map