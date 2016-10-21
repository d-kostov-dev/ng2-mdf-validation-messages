var MessageProvider = (function () {
    function MessageProvider(defaultMessages) {
        this.defaultMessages = defaultMessages;
    }
    MessageProvider.prototype.getErrorMessage = function (errorType, errorPayload) {
        switch (errorType) {
            case 'required':
                return errorPayload.message ? errorPayload.message : this.defaultMessages.required;
            case 'email':
                return errorPayload.message ? errorPayload.message : this.defaultMessages.email;
            case 'minlength':
                return errorPayload.message ? this._stringFormat(errorPayload.message, errorPayload.requiredLength) : this._stringFormat(this.defaultMessages.minLength, errorPayload.requiredLength);
            case 'maxlength':
                return errorPayload.message ? this._stringFormat(errorPayload.message, errorPayload.requiredLength) : this._stringFormat(this.defaultMessages.maxLength, errorPayload.requiredLength);
            case 'minNumber':
                return errorPayload.message ? this._stringFormat(errorPayload.message, errorPayload.requiredRange) : this._stringFormat(this.defaultMessages.minNumber, errorPayload.requiredRange);
            case 'maxNumber':
                return errorPayload.message ? this._stringFormat(errorPayload.message, errorPayload.requiredRange) : this._stringFormat(this.defaultMessages.maxNumber, errorPayload.requiredRange);
            case 'pattern':
                return errorPayload.message ? errorPayload.message : this.defaultMessages.pattern;
            default:
                return 'Uknown Error';
        }
    };
    MessageProvider.prototype._stringFormat = function (text) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        params.forEach(function (value, index) {
            text = text.replace(new RegExp('\\{' + index + '\\}', 'g'), value);
        });
        return text;
    };
    return MessageProvider;
}());
exports.MessageProvider = MessageProvider;
//# sourceMappingURL=message-provider.js.map