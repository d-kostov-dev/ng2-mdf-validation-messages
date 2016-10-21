import { FormControl, Validators, ValidatorFn } from '@angular/forms';

const emailRegExp: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export class ValidationExtensions {
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
