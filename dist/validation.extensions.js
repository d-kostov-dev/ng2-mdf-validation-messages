var forms_1 = require('@angular/forms');
var emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
var urlRegExp = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
var ValidationExtensions = (function () {
    function ValidationExtensions() {
    }
    /**
     * Set the input as required.
     * @param message Custom error message that will be shown to the user.
     */
    ValidationExtensions.required = function (message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (!forms_1.Validators.required(control)) {
                return null;
            }
            return {
                required: {
                    message: message,
                }
            };
        };
    };
    /**
     * Will not accept input containing only empty spaces.
     * @param message Custom error message that will be shown to the user.
     */
    ValidationExtensions.noEmpty = function (message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            if (control.value.trim() !== '') {
                return null;
            }
            return {
                noEmpty: {
                    message: message,
                }
            };
        };
    };
    /**
     * Set the minimal required length of the input value
     * @param length Minimal length.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    ValidationExtensions.minLength = function (length, message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            var validationResult = forms_1.Validators.minLength(length)(control);
            if (validationResult) {
                validationResult['minlength'].message = message;
            }
            return validationResult;
        };
    };
    /**
     * Set the maximal required length of the input value
     * @param length Maximal length.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    ValidationExtensions.maxLength = function (length, message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            var validationResult = forms_1.Validators.maxLength(length)(control);
            if (validationResult) {
                validationResult['maxlength'].message = message;
            }
            return validationResult;
        };
    };
    /**
     * Set the minimal required value of the number input
     * @param min Minimal value.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    ValidationExtensions.minNumber = function (min, message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            if (control.value >= min) {
                return null;
            }
            return {
                minNumber: {
                    requiredRange: min,
                    message: message,
                },
            };
        };
    };
    /**
     * Set the maximal required value of the number input
     * @param max Maximal value.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    ValidationExtensions.maxNumber = function (max, message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            if (control.value <= max) {
                return null;
            }
            return {
                maxNumber: {
                    requiredRange: max,
                    message: message,
                },
            };
        };
    };
    /**
     * Requires a valid email input.
     * @param message Custom error message that will be shown to the user.
     */
    ValidationExtensions.email = function (message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            if (control.value.match(emailRegExp)) {
                return null;
            }
            return {
                email: {
                    message: message,
                }
            };
        };
    };
    /**
     * Requires the input to follow a specific pattern.
     * @param pattern The required pattern.
     * @param message Custom error message that will be shown to the user.
     */
    ValidationExtensions.pattern = function (pattern, message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            var validationResult = forms_1.Validators.pattern(pattern)(control);
            if (validationResult) {
                validationResult['pattern'].message = message;
            }
            return validationResult;
        };
    };
    /**
     * Requires the input length to be between specific range.
     * @param min Required minimum length.
     * @param max Required maximum length.
     * @param message Custom error message that will be shown to the user.
     */
    ValidationExtensions.rangeLength = function (min, max, message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            if (control.value.length >= min && control.value.length <= max) {
                return null;
            }
            return {
                rangeLength: {
                    message: message,
                    rangeMin: min,
                    rangeMax: max,
                }
            };
        };
    };
    /**
    * Requires the input value to be between specific range.
    * @param min Required minimum value.
    * @param max Required maximum value.
    * @param message Custom error message that will be shown to the user.
    */
    ValidationExtensions.range = function (min, max, message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            if (control.value >= min && control.value <= max) {
                return null;
            }
            return {
                range: {
                    message: message,
                    rangeMin: min,
                    rangeMax: max,
                }
            };
        };
    };
    /**
     * Requires the input value to be a number.
     * @param message Custom error message that will be shown to the user.
     */
    ValidationExtensions.digit = function (message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            if (!isNaN(control.value) && isFinite(control.value)) {
                return null;
            }
            return {
                digit: {
                    message: message
                }
            };
        };
    };
    /**
     * Requires the input to euqal specific value and type.
     * @param comparer The value that the input must match.
     * @param message Custom error message that will be shown to the user.
     */
    ValidationExtensions.equal = function (comparer, message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            if (control.value === comparer) {
                return null;
            }
            return {
                equal: {
                    message: message,
                    comparer: comparer
                }
            };
        };
    };
    /**
     * Requires the input to be a valid URL. Urls without http, https or ftp are invalid.
     * @param message Custom error message that will be shown to the user.
     */
    ValidationExtensions.url = function (message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            if (control.value.match(urlRegExp)) {
                return null;
            }
            return {
                url: {
                    message: message,
                }
            };
        };
    };
    /**
     * Requires the input to be a valid date.
     * @param message Custom error message that will be shown to the user.
     */
    ValidationExtensions.date = function (message) {
        if (message === void 0) { message = null; }
        return function (control) {
            if (forms_1.Validators.required(control)) {
                return null;
            }
            var parsedDate = new Date(control.value);
            if (parsedDate.toString() !== 'Invalid Date' && !isNaN(parsedDate.valueOf())) {
                return null;
            }
            return {
                date: {
                    message: message,
                }
            };
        };
    };
    return ValidationExtensions;
}());
exports.ValidationExtensions = ValidationExtensions;
//# sourceMappingURL=validation.extensions.js.map