var MessageProvider = (function () {
    function MessageProvider(defaultMessages) {
        this.defaultMessages = defaultMessages;
    }
    /**
     * Provides the message that will be shown to the user.
     * There are default messages and user defined ones.
     * Strings with placeholders are also supported for given errors.
     * E.g. "Minimum length is {0}" where "{0}" will be replaced with the provided min length value.
     * @param errorType The type of the error. E.g. "required", "minlength" etc.
     * @param errorPayload Provides custom message and/or the required value. E.g. for ValidationExtensions.minNumber(18) the payload will contain the value "18"
     */
    MessageProvider.prototype.getErrorMessage = function (errorType, errorPayload) {
        var errorMessageActual = errorPayload.message || this.defaultMessages[errorType];
        // TODO: Throw exception on inadequate errorPayload;
        switch (errorType) {
            case 'required':
            case 'email':
            case 'pattern':
            case 'noEmpty':
            case 'digit':
            case 'url':
            case 'date':
            case 'areEqual':
            case 'passwords':
                return errorMessageActual;
            case 'minlength':
                return this._stringFormat(errorMessageActual || this.defaultMessages.minLength, errorPayload.requiredLength);
            case 'maxlength':
                return this._stringFormat(errorMessageActual || this.defaultMessages.maxLength, errorPayload.requiredLength);
            case 'minNumber':
            case 'maxNumber':
                return this._stringFormat(errorMessageActual, errorPayload.requiredRange);
            case 'rangeLength':
            case 'range':
                return this._stringFormat(errorMessageActual, [errorPayload.rangeMin, errorPayload.rangeMax]);
            case 'equal':
                return this._stringFormat(errorMessageActual, errorPayload.comparer);
            default:
                if (!errorPayload.message) {
                    return this.defaultMessages.unknownError;
                }
                var placeholderValues = Object.keys(errorPayload)
                    .filter(function (key) { return key !== 'message'; })
                    .map(function (key) { return errorPayload[key]; });
                return this._stringFormat(errorPayload.message, placeholderValues);
        }
    };
    /**
     * Replaces the placeholders in the string with the provided values. The order of the values must match the number of the placeholder.
     * @param text Text with placeholders. E.g: "Hello {0}"
     * @param params The params that will replace the placeholders. E.g: ['World'] or when single value only 'World'
     */
    MessageProvider.prototype._stringFormat = function (text, params) {
        if (params) {
            if (!Array.isArray(params)) {
                params = [params];
            }
            params.forEach(function (value, index) {
                text = text.replace(new RegExp('\\{' + index + '\\}', 'g'), value);
            });
        }
        return text;
    };
    return MessageProvider;
}());
exports.MessageProvider = MessageProvider;
//# sourceMappingURL=message-provider.js.map