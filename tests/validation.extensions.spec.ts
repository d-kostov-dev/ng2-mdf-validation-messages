﻿import { FormControl, FormGroup } from '@angular/forms';

import { ValidationExtensions } from '../src/validation.extensions.ts';

const CUSTOM_MESSAGE = 'Lorem ipsum';

describe('Testing The Validation Extensions', () => {
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
            let actual = ValidationExtensions.required(CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                required: {
                    message: CUSTOM_MESSAGE,
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
            let actual = ValidationExtensions.noEmpty(CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                noEmpty: {
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when empty', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.noEmpty()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.noEmpty()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null value', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.noEmpty()(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "minLength" Validation', () => {
        it('should return minLength error with empty message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.minLength(5)(control);

            expect(actual).toEqual({
                minlength: {
                    requiredLength: 5,
                    actualLength: 3,
                    message: null,
                }
            });
        });

        it('should return minLength error with custom message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.minLength(5, CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                minlength: {
                    requiredLength: 5,
                    actualLength: 3,
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when exact', () => {
            let control = new FormControl('abcde');
            let actual = ValidationExtensions.minLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when more', () => {
            let control = new FormControl('abcdef');
            let actual = ValidationExtensions.minLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.minLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null', () => {
            let control = new FormControl('abcdef');
            let actual = ValidationExtensions.minLength(5)(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "maxLength" Validation', () => {
        it('should return maxLength error with empty message', () => {
            let control = new FormControl('abcdef');
            let actual = ValidationExtensions.maxLength(5)(control);

            expect(actual).toEqual({
                maxlength: {
                    requiredLength: 5,
                    actualLength: 6,
                    message: null,
                }
            });
        });

        it('should return maxLength error with custom message', () => {
            let control = new FormControl('abcdef');
            let actual = ValidationExtensions.maxLength(5, CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                maxlength: {
                    requiredLength: 5,
                    actualLength: 6,
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when less', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.maxLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when exact', () => {
            let control = new FormControl('abcde');
            let actual = ValidationExtensions.maxLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.maxLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.maxLength(5)(control);

            expect(actual).toEqual(null);
        });

    });

    describe('Testing "minNumber" Validation', () => {
        it('should return minNumber error with empty message', () => {
            let control = new FormControl(3);
            let actual = ValidationExtensions.minNumber(5)(control);

            expect(actual).toEqual({
                minNumber: {
                    requiredRange: 5,
                    message: null,
                }
            });
        });

        it('should return minNumber error with custom message', () => {
            let control = new FormControl(3);
            let actual = ValidationExtensions.minNumber(5, CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                minNumber: {
                    requiredRange: 5,
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when exact value', () => {
            let control = new FormControl(5);
            let actual = ValidationExtensions.minNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when higher value', () => {
            let control = new FormControl(6);
            let actual = ValidationExtensions.minNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.minNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.minNumber(5)(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "maxNumber" Validation', () => {
        it('should return maxNumber error with empty message', () => {
            let control = new FormControl(6);
            let actual = ValidationExtensions.maxNumber(5)(control);

            expect(actual).toEqual({
                maxNumber: {
                    requiredRange: 5,
                    message: null,
                }
            });
        });

        it('should return maxNumber error with custom message', () => {
            let control = new FormControl(6);
            let actual = ValidationExtensions.maxNumber(5, CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                maxNumber: {
                    requiredRange: 5,
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when exact value', () => {
            let control = new FormControl(5);
            let actual = ValidationExtensions.maxNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when value is less', () => {
            let control = new FormControl(4);
            let actual = ValidationExtensions.maxNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.maxNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.maxNumber(5)(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "email" Validation', () => {
        it('should return email error with empty message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.email()(control);

            expect(actual).toEqual({
                email: {
                    message: null,
                }
            });
        });

        it('should return email error with empty message', () => {
            let control = new FormControl('me@example');
            let actual = ValidationExtensions.email()(control);

            expect(actual).toEqual({
                email: {
                    message: null,
                }
            });
        });

        it('should return email error with custom message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.email(CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                email: {
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when valid email', () => {
            let control = new FormControl('me@example.com');
            let actual = ValidationExtensions.email()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.email()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.email()(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "pattern" Validation', () => {
        it('should return pattern error with empty message', () => {
            let control = new FormControl('abc1');
            let actual = ValidationExtensions.pattern('[a-zA-Z ]*')(control);

            expect(actual).toEqual({
                pattern: {
                    requiredPattern: '^[a-zA-Z ]*$',
                    actualValue: 'abc1',
                    message: null
                }
            });
        });

        it('should return pattern error with custom message', () => {
            let control = new FormControl('abc1');
            let actual = ValidationExtensions.pattern('[a-zA-Z ]*', CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                pattern: {
                    requiredPattern: '^[a-zA-Z ]*$',
                    actualValue: 'abc1',
                    message: CUSTOM_MESSAGE
                }
            });
        });

        it('should return null when valid', () => {
            let control = new FormControl('aBcD');
            let actual = ValidationExtensions.pattern('[a-zA-Z ]*')(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.pattern('[a-zA-Z ]*')(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.pattern('[a-zA-Z ]*')(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "rangeLength" Validation', () => {
        it('should return error with empty message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.rangeLength(5, 10)(control);

            expect(actual).toEqual({
                rangeLength: {
                    rangeMin: 5,
                    rangeMax: 10,
                    message: null,
                }
            });
        });

        it('should return error with empty message when value is longer', () => {
            let control = new FormControl('abcabcabcabc');
            let actual = ValidationExtensions.rangeLength(5, 10)(control);

            expect(actual).toEqual({
                rangeLength: {
                    rangeMin: 5,
                    rangeMax: 10,
                    message: null,
                }
            });
        });

        it('should return error with custom message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.rangeLength(5, 10, CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                rangeLength: {
                    rangeMin: 5,
                    rangeMax: 10,
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when exact min value', () => {
            let control = new FormControl('abcde');
            let actual = ValidationExtensions.rangeLength(5, 10)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when exact max value', () => {
            let control = new FormControl('abcdeabcde');
            let actual = ValidationExtensions.rangeLength(5, 10)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when value is in range', () => {
            let control = new FormControl('abcdeabc');
            let actual = ValidationExtensions.rangeLength(5, 10)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.rangeLength(5, 10)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.rangeLength(5, 10)(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "range" Validation', () => {
        it('should return error with empty message', () => {
            let control = new FormControl(4);
            let actual = ValidationExtensions.range(5, 10)(control);

            expect(actual).toEqual({
                range: {
                    rangeMin: 5,
                    rangeMax: 10,
                    message: null,
                }
            });
        });

        it('should return error with empty message when value is longer', () => {
            let control = new FormControl(11);
            let actual = ValidationExtensions.range(5, 10)(control);

            expect(actual).toEqual({
                range: {
                    rangeMin: 5,
                    rangeMax: 10,
                    message: null,
                }
            });
        });

        it('should return error with empty message when value is string', () => {
            let control = new FormControl('11');
            let actual = ValidationExtensions.range(5, 10)(control);

            expect(actual).toEqual({
                range: {
                    rangeMin: 5,
                    rangeMax: 10,
                    message: null,
                }
            });
        });

        it('should return error with custom message', () => {
            let control = new FormControl(4);
            let actual = ValidationExtensions.range(5, 10, CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                range: {
                    rangeMin: 5,
                    rangeMax: 10,
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when exact min value', () => {
            let control = new FormControl(5);
            let actual = ValidationExtensions.range(5, 10)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when exact max value', () => {
            let control = new FormControl(10);
            let actual = ValidationExtensions.range(5, 10)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when value is in range', () => {
            let control = new FormControl(6);
            let actual = ValidationExtensions.range(5, 10)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when value is string', () => {
            let control = new FormControl('6');
            let actual = ValidationExtensions.range(5, 10)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.range(5, 10)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.range(5, 10)(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "digit" Validation', () => {
        it('should return error with empty message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.digit()(control);

            expect(actual).toEqual({
                digit: {
                    message: null,
                }
            });
        });

        it('should return error with custom message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.digit(CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                digit: {
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when integer', () => {
            let control = new FormControl(5);
            let actual = ValidationExtensions.digit()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when float', () => {
            let control = new FormControl(5.5);
            let actual = ValidationExtensions.digit()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when integer as string', () => {
            let control = new FormControl('5');
            let actual = ValidationExtensions.digit()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when float as string', () => {
            let control = new FormControl('5.5');
            let actual = ValidationExtensions.digit()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.digit()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.digit()(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "equal" Validation', () => {
        it('should return error with empty message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.equal('123')(control);

            expect(actual).toEqual({
                equal: {
                    message: null,
                    comparer: '123',
                }
            });
        });

        it('should return error with empty message when not the same type', () => {
            let control = new FormControl(123);
            let actual = ValidationExtensions.equal('123')(control);

            expect(actual).toEqual({
                equal: {
                    message: null,
                    comparer: '123',
                }
            });
        });

        it('should return error with custom message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.equal('123', CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                equal: {
                    message: CUSTOM_MESSAGE,
                    comparer: '123',
                }
            });
        });

        it('should return null when valid', () => {
            let control = new FormControl(123);
            let actual = ValidationExtensions.equal(123)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when valid', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.equal('abc')(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.equal('abc')(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.equal('abc')(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "url" Validation', () => {
        it('should return error with empty message for www.abc', () => {
            let control = new FormControl('www.abc');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual({
                url: {
                    message: null,
                }
            });
        });

        it('should return error with empty message for abc.com', () => {
            let control = new FormControl('abc.com');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual({
                url: {
                    message: null,
                }
            });
        });

        it('should return error with empty message for http://www.', () => {
            let control = new FormControl('http://www.');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual({
                url: {
                    message: null,
                }
            });
        });

        it('should return error with custom message', () => {
            let control = new FormControl('www.abc');
            let actual = ValidationExtensions.url(CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                url: {
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return error with empty message for www.abc.com', () => {
            let control = new FormControl('www.abc.com');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual({
                url: {
                    message: null,
                }
            });
        });

        it('should return null with http', () => {
            let control = new FormControl('http://www.abc.com');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual(null);
        });

        it('should return null with sub domain', () => {
            let control = new FormControl('http://www.abc.abc.com');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual(null);
        });

        it('should return null with https', () => {
            let control = new FormControl('https://www.abc.com');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual(null);
        });

        it('should return null with http and /index.php', () => {
            let control = new FormControl('http://www.abc.com/index.php');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual(null);
        });

        it('should return null with https and /index.php', () => {
            let control = new FormControl('https://www.abc.com/index.php');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual(null);
        });

        it('should return null with ftp', () => {
            let control = new FormControl('ftp://www.abc.com/index.php');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual(null);
        })

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.url()(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "date" Validation', () => {
        it('should return error with empty message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual({
                date: {
                    message: null,
                }
            });
        });

        it('should return error with empty message', () => {
            let control = new FormControl('abc-1');
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual({
                date: {
                    message: null,
                }
            });
        });

        it('should return error with empty message', () => {
            let control = new FormControl('foo-bar 2014');
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual({
                date: {
                    message: null,
                }
            });
        });

        it('should return error with custom message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.date(CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                date: {
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        // This works on chrome but not on PhantomJS
        //it('should return null for 10-10-2016', () => {
        //    let control = new FormControl('10-10-2016');
        //    let actual = ValidationExtensions.date()(control);

        //    expect(actual).toEqual(null);
        //});

        it('should return null for 2016-10-10', () => {
            let control = new FormControl('2016-10-10');
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual(null);
        });

        it('should return null for 10/10/2016', () => {
            let control = new FormControl('10/10/2016');
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual(null);
        });

        it('should return null for 2016/10/10', () => {
            let control = new FormControl('2016/10/10');
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual(null);
        });

        it('should return null for Aug 9, 1995', () => {
            let control = new FormControl('Aug 9, 1995');
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual(null);
        });

        it('should return null for Wed, 09 Aug 1995 00:00:00 GMT', () => {
            let control = new FormControl('Wed, 09 Aug 1995 00:00:00 GMT');
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual(null);
        });

        it('should return null for Thu, 01 Jan 1970 00:00:00 GMT-0400', () => {
            let control = new FormControl('Thu, 01 Jan 1970 00:00:00 GMT-0400');
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.date()(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "areEqual" Validation', () => {
        it('should return error with empty message', () => {
            let foo = new FormControl('foo');
            let bar = new FormControl('bar');
            let group = new FormGroup({
                foo: foo,
                bar: bar
            });

            let actual = ValidationExtensions.areEqual()(group);

            expect(actual).toEqual({
                areEqual: {
                    message: null,
                }
            });
        });

        it('should return error with empty message', () => {
            let foo = new FormControl('foo');
            let bar = new FormControl('bar');
            let car = new FormControl('foo');
            let group = new FormGroup({
                foo: foo,
                bar: bar,
                car: car
            });

            let actual = ValidationExtensions.areEqual()(group);

            expect(actual).toEqual({
                areEqual: {
                    message: null,
                }
            });
        });

        it('should return error with custom message', () => {
            let foo = new FormControl('foo');
            let bar = new FormControl('bar');
            let group = new FormGroup({
                foo: foo,
                bar: bar
            });

            let actual = ValidationExtensions.areEqual(CUSTOM_MESSAGE)(group);

            expect(actual).toEqual({
                areEqual: {
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when valid', () => {
            let foo = new FormControl('foo');
            let bar = new FormControl('foo');
            let group = new FormGroup({
                foo: foo,
                bar: bar
            });

            let actual = ValidationExtensions.areEqual()(group);

            expect(actual).toEqual(null);
        });

        it('should return null when many valid', () => {
            let foo = new FormControl('foo');
            let bar = new FormControl('foo');
            let car = new FormControl('foo');

            let group = new FormGroup({
                foo: foo,
                bar: bar,
                car: car
            });

            let actual = ValidationExtensions.areEqual()(group);

            expect(actual).toEqual(null);
        });

        it('should return null when only one control', () => {
            let foo = new FormControl('foo');
            let group = new FormGroup({
                foo: foo,
            });

            let actual = ValidationExtensions.areEqual()(group);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "passwords" Validation', () => {
        it('should return error with empty message', () => {
            let foo = new FormControl('foo');
            let bar = new FormControl('bar');
            let group = new FormGroup({
                foo: foo,
                bar: bar
            });

            let actual = ValidationExtensions.passwords()(group);

            expect(actual).toEqual({
                passwords: {
                    message: null,
                }
            });
        });

        it('should return error with empty message', () => {
            let foo = new FormControl('foo');
            let bar = new FormControl('bar');
            let car = new FormControl('foo');
            let group = new FormGroup({
                foo: foo,
                bar: bar,
                car: car
            });

            let actual = ValidationExtensions.passwords()(group);

            expect(actual).toEqual({
                passwords: {
                    message: null,
                }
            });
        });

        it('should return error with custom message', () => {
            let foo = new FormControl('foo');
            let bar = new FormControl('bar');
            let group = new FormGroup({
                foo: foo,
                bar: bar
            });

            let actual = ValidationExtensions.passwords(CUSTOM_MESSAGE)(group);

            expect(actual).toEqual({
                passwords: {
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when valid', () => {
            let foo = new FormControl('foo');
            let bar = new FormControl('foo');
            let group = new FormGroup({
                foo: foo,
                bar: bar
            });

            let actual = ValidationExtensions.passwords()(group);

            expect(actual).toEqual(null);
        });

        it('should return null when many valid', () => {
            let foo = new FormControl('foo');
            let bar = new FormControl('foo');
            let car = new FormControl('foo');

            let group = new FormGroup({
                foo: foo,
                bar: bar,
                car: car
            });

            let actual = ValidationExtensions.passwords()(group);

            expect(actual).toEqual(null);
        });

        it('should return null when only one control', () => {
            let foo = new FormControl('foo');
            let group = new FormGroup({
                foo: foo,
            });

            let actual = ValidationExtensions.passwords()(group);

            expect(actual).toEqual(null);
        });
    });


});
