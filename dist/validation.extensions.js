var forms_1 = require('@angular/forms');
var emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
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
            var validationResult = forms_1.Validators.required(control);
            if (validationResult) {
                return {
                    'required': {
                        message: message,
                    }
                };
            }
            return validationResult;
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
            if (control.value.trim() === '') {
                return {
                    noEmpty: {
                        message: message,
                    }
                };
            }
            else {
                return null;
            }
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
            if (isNaN(control.value)) {
                return null;
            }
            if (control.value >= min) {
                return null;
            }
            else {
                return {
                    minNumber: {
                        requiredRange: min,
                        message: message,
                    },
                };
            }
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
            if (isNaN(control.value)) {
                return null;
            }
            if (control.value <= max) {
                return null;
            }
            else {
                return {
                    maxNumber: {
                        requiredRange: max,
                        message: message,
                    },
                };
            }
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
            else {
                return {
                    email: true
                };
            }
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
    return ValidationExtensions;
}());
exports.ValidationExtensions = ValidationExtensions;
//# sourceMappingURL=validation.extensions.js.map