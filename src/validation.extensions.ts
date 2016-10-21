import { FormControl, Validators, ValidatorFn } from '@angular/forms';

const emailRegExp: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export class ValidationExtensions {
    /**
     * Set the input as required.
     * @param message Custom error message that will be shown to the user.
     */
    static required(message: string = null): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            let validationResult = Validators.required(control);

            if (validationResult) {
                return {
                    'required': {
                        message: message,
                    }
                };
            }

            return validationResult;
        };
    }

    /**
     * Will not accept input containing only empty spaces.
     * @param message Custom error message that will be shown to the user.
     */
    static noEmpty(message: string = null): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            if (control.value.trim() === "") {
                return {
                    noEmpty: {
                        message: message,
                    }
                };
            } else {
                return null;
            }
        };
    }

    /**
     * Set the minimal required length of the input value
     * @param length Minimal length.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    static minLength(length: number, message: string = null): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            let validationResult = Validators.minLength(length)(control);

            if (validationResult) {
                validationResult['minlength'].message = message;
            }

            return validationResult;
        };
    }

    /**
     * Set the maximal required length of the input value
     * @param length Maximal length.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    static maxLength(length: number, message: string): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            let validationResult = Validators.maxLength(length)(control);

            if (validationResult) {
                validationResult['maxlength'].message = message;
            }

            return validationResult;
        };
    }

    /**
     * Set the minimal required value of the number input
     * @param min Minimal value.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    static minNumber(min: number, message: string = null): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            if (isNaN(control.value)) {
                return null;
            }

            if (control.value >= min) {
                return null;
            } else {
                return {
                    minNumber: {
                        requiredRange: min,
                        message: message,
                    },
                };
            }
        };
    }

    /**
     * Set the maximal required value of the number input
     * @param max Maximal value.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    static maxNumber(max: number, message: string = null): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            if (isNaN(control.value)) {
                return null;
            }

            if (control.value <= max) {
                return null;
            } else {
                return {
                    maxNumber: {
                        requiredRange: max,
                        message: message,
                    },
                };
            }
        };
    }

    /**
     * Requires a valid email input.
     * @param message Custom error message that will be shown to the user.
     */
    static email(message: string = null): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            if (control.value.match(emailRegExp)) {
                return null;
            } else {
                return {
                    email: true
                };
            }
        };
    }

    /**
     * Requires the input to follow a specific pattern.
     * @param pattern The required pattern.
     * @param message Custom error message that will be shown to the user.
     */
    static pattern(pattern: string, message: string = null): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            let validationResult = Validators.pattern(pattern)(control);

            if (validationResult) {
                validationResult['pattern'].message = message;
            }

            return validationResult;
        };
    }

    // TODO: Add range
    // TODO: Add rangeLength
    // TODO: Add equalTo (for passwords)
    // TODO: Add date
    // TODO: Add number
    // TODO: Add equal
    // TODO: Add url
    // TODO: Add creditCard
}
