import { FormControl } from '@angular/forms';

import { ValidationExtensions } from '../src/validation.extensions.ts';

describe('Testing Validation Extensions', () => {
    describe('Testing "required" Validation', () => {
        it('should return required error with empty message', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.required()(control);

            expect(actual).toEqual({
                required: {
                    message: null,
                }
            });
        });

        it('should return required error with empty message', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.required()(control);

            expect(actual).toEqual({
                required: {
                    message: null,
                }
            });
        });

        it('should return required error with custom message', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.required('CUSTOM_MESSAGE')(control);

            expect(actual).toEqual({
                required: {
                    message: 'CUSTOM_MESSAGE',
                }
            });
        });

        it('should return null', () => {
            let control = new FormControl('SOME_VALUE');
            let actual = ValidationExtensions.required()(control);

            expect(actual).toEqual(null);
        });

        it('should return null', () => {
            let control = new FormControl(' ');
            let actual = ValidationExtensions.required()(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "noEmpty" Validation', () => {
        it('should return noEmpty error with empty message', () => {
            let control = new FormControl(' ');
            let actual = ValidationExtensions.noEmpty()(control);

            expect(actual).toEqual({
                noEmpty: {
                    message: null,
                }
            });
        });

        it('should return noEmpty error with custom message', () => {
            let control = new FormControl(' ');
            let actual = ValidationExtensions.noEmpty('CUSTOM_MESSAGE')(control);

            expect(actual).toEqual({
                noEmpty: {
                    message: 'CUSTOM_MESSAGE',
                }
            });
        });

        it('should return null', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.noEmpty()(control);

            expect(actual).toEqual(null);
        });

        it('should return null', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.noEmpty()(control);

            expect(actual).toEqual(null);
        });
    });
});
