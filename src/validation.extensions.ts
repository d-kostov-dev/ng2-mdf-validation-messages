import { AbstractControl, Validators, ValidatorFn, FormGroup } from '@angular/forms';

const emailRegExp: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const urlRegExp: RegExp = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;

export class ValidationExtensions {
    /**
     * Set the input as required.
     * @param message Custom error message that will be shown to the user.
     */
    static required(message: string = null): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!Validators.required(control)) {
                return null;
            }

            return {
                required: {
                    message: message,
                }
            };
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

            if (control.value.trim() !== '') {
                return null;
            }

            return {
                noEmpty: {
                    message: message,
                }
            };
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
            }

            return {
                minNumber: {
                    requiredRange: min,
                    message: message,
                },
            };
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
            }

            return {
                maxNumber: {
                    requiredRange: max,
                    message: message,
                },
            };
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
            }

            return {
                email: {
                    message: message,
                }
            };
        };
    }

    /**
     * Requires the input to follow a specific pattern.
     * @param pattern The required pattern.
     * @param message Custom error message that will be shown to the user.
     */
    static pattern(pattern: string | RegExp, message: string = null): ValidatorFn {
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
    }

    /**
     * Requires the input value to be a number.
     * @param message Custom error message that will be shown to the user.
     */
    static digit(message: string = null): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (Validators.required(control)) {
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
    }

    /**
     * Requires the input to euqal specific value and type.
     * @param comparer The value that the input must match.
     * @param message Custom error message that will be shown to the user.
     */
    static equal(comparer: any, message: string = null): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (Validators.required(control)) {
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
    }

    /**
     * Requires the input to be a valid URL. Urls without http, https or ftp are invalid. 
     * @param message Custom error message that will be shown to the user.
     */
    static url(message: string = null): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (Validators.required(control)) {
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
    }

    /**
     * Requires the input to be a valid date.
     * @param message Custom error message that will be shown to the user.
     */
    static date(message: string = null): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (Validators.required(control)) {
                return null;
            }

            let parsedDate = new Date(control.value);

            if (parsedDate.toString() !== 'Invalid Date' && !isNaN(parsedDate.valueOf())) {
                return null;
            }

            return {
                date: {
                    message: message,
                }
            };
        };
    }

    /**
     * Requires all values in a group to be the same.
     * @param message Custom error message that will be shown to the user.
     */
    static areEqual(message: string = null): ValidatorFn {
        return (group: FormGroup): { [key: string]: any } => {
            if (ValidationExtensions._areGroupInputValuesEqual(group)) {
                return null;
            }

            return {
                areEqual: {
                    message: message,
                }
            };
        };
    }

    /**
     * Requires all values in a group to be equal. Like the 'areEqual' validation extension, but with specific passwords message.
     * @param message Custom error message that will be shown to the user.
     */
    static passwords(message: string = null): ValidatorFn {
        return (group: FormGroup): { [key: string]: any } => {
            if (ValidationExtensions._areGroupInputValuesEqual(group)) {
                return null;
            }

            return {
                passwords: {
                    message: message,
                }
            };
        };
    }

    private static _areGroupInputValuesEqual(group: FormGroup): boolean {
        let keys: string[] = Object.keys(group.controls);
        let keysLength = keys.length;

        if (!keysLength) {
            return true;
        }

        let initialControl = group.controls[keys[0]];

        for (let i = 1; i < keysLength; i++) {
            let currentKey = keys[i];

            if (initialControl.value !== group.controls[currentKey].value) {
                return false;
            }
        }

        return true;
    }

    // TODO: Add Compose
}
