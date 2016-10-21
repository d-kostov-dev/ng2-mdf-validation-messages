var DefaultErrorMessages = (function () {
    function DefaultErrorMessages() {
    }
    return DefaultErrorMessages;
}());
exports.DefaultErrorMessages = DefaultErrorMessages;
var ValidationMessagesConfiguration = (function () {
    function ValidationMessagesConfiguration() {
    }
    return ValidationMessagesConfiguration;
}());
exports.ValidationMessagesConfiguration = ValidationMessagesConfiguration;
exports.defaultConfig = {
    class: 'text-danger',
    defaultErrorMessages: {
        required: 'This field is required!',
        pattern: 'The input value does not match the pattern required!',
        email: 'The provided email is invalid!',
        minLength: 'Minimum length is {0}',
        maxLength: 'Maximum length is {0}',
        minNumber: 'Minimal value is {0}',
        maxNumber: 'Maximal value is {0}',
    },
};
//# sourceMappingURL=config.js.map