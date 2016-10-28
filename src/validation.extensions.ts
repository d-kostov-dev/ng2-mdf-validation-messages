import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

const emailRegExp: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export class ValidationExtensions {
    /**
     * Set the input as required.
     * @param message Custom error message that will be shown to the user.
     */
    static required(message: string = null): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
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
        return (control: AbstractControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            if (control.value.trim() === '') {
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
        return (control: AbstractControl): { [key: string]: any } => {
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
    static maxLength(length: number, message: string = null): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
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
        return (control: AbstractControl): { [key: string]: any } => {
            if (Validators.required(control)) {
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
        return (control: AbstractControl): { [key: string]: any } => {
            if (Validators.required(control)) {
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
        return (control: AbstractControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            if (control.value.match(emailRegExp)) {
                return null;
            } else {
                return {
                    email: {
                        message: message,
                    }
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
        return (control: AbstractControl): { [key: string]: any } => {
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

    /**
     * Requires the input length to be between specific range.
     * @param min Required minimum length.
     * @param max Required maximum length.
     * @param message Custom error message that will be shown to the user.
     */
    static rangeLength(min: number, max: number, message: string = null): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            if (control.value.length < min || control.value.length > max) {
                return {
                    rangeLength: {
                        message: message,
                        rangeMin: min,
                        rangeMax: max,
                    }
                };
            }

            return null;
        };
    }

     /**
     * Requires the input value to be between specific range.
     * @param min Required minimum value.
     * @param max Required maximum value.
     * @param message Custom error message that will be shown to the user.
     */
    static range(min: number, max: number, message: string = null): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            if (control.value < min || control.value > max) {
                return {
                    range: {
                        message: message,
                        rangeMin: min,
                        rangeMax: max,
                    }
                };
            }

            return null;
        };
    }

    // TODO: Add equalTo (for passwords)
    // TODO: Add date
    // TODO: Add equal
    // TODO: Add url
    // TODO: Add Compose
    // TODO: Add number
}
