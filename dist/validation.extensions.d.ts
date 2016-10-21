import { ValidatorFn } from '@angular/forms';
export declare class ValidationExtensions {
    /**
     * Set the input as required.
     * @param message Custom error message that will be shown to the user.
     */
    static required(message?: string): ValidatorFn;
    static minLength(length: number, message?: string): ValidatorFn;
    static maxLength(length: number, message: string): ValidatorFn;
    static minNumber(min: number, message?: string): ValidatorFn;
    static maxNumber(max: number, message?: string): ValidatorFn;
    static email(message?: string): ValidatorFn;
    static pattern(pattern: string, message?: string): ValidatorFn;
}
