import { defaultConfig } from '../src/config';
import { MessageProvider } from '../src/message-provider';

const messageProvider = new MessageProvider(defaultConfig.defaultErrorMessages);
const CUSTOM_MESSAGE = 'Lorem ipsum';
const CUSTOM_MESSAGE_WITH_PLACEHOLDER = 'Lorem {0} ipsum';
const CUSTOM_MESSAGE_WITH_MORE_PLACEHOLDERS = 'Lorem {0} ipsum {1}';

describe('Testing The Message Provider', () => {
    describe('Testing required error messages', () => {
        it('should throw an error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('required', null);
            }).toThrow();
        });

        it('should return default message when boolean payload', () => {
            let actual = messageProvider.getErrorMessage('required', true);
            let expected = defaultConfig.defaultErrorMessages.required;

            expect(actual).toEqual(expected);
        });

        it('should return default message when empty payload', () => {
            let actual = messageProvider.getErrorMessage('required', '');
            let expected = defaultConfig.defaultErrorMessages.required;

            expect(actual).toEqual(expected);
        });

        it('should return custom message when custom payload', () => {
            let actual = messageProvider.getErrorMessage('required', { message: CUSTOM_MESSAGE });
            let expected = CUSTOM_MESSAGE;

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing email error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('email', null);
            }).toThrow();
        });

        it('should return default message when boolean', () => {
            let actual = messageProvider.getErrorMessage('email', true);
            let expected = defaultConfig.defaultErrorMessages.email;

            expect(actual).toEqual(expected);
        });

        it('should return default message empty payload', () => {
            let actual = messageProvider.getErrorMessage('email', '');
            let expected = defaultConfig.defaultErrorMessages.email;

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('email', { message: CUSTOM_MESSAGE });
            let expected = CUSTOM_MESSAGE;

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing pattern error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('pattern', null);
            }).toThrow();
        });

        it('should return default message when boolean', () => {
            let actual = messageProvider.getErrorMessage('pattern', true);
            let expected = defaultConfig.defaultErrorMessages.pattern;

            expect(actual).toEqual(expected);
        });

        it('should return default message empty payload', () => {
            let actual = messageProvider.getErrorMessage('pattern', '');
            let expected = defaultConfig.defaultErrorMessages.pattern;

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('pattern', { message: CUSTOM_MESSAGE });
            let expected = CUSTOM_MESSAGE;

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing noEmpty error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('noEmpty', null);
            }).toThrow();
        });

        it('should return default message when boolean', () => {
            let actual = messageProvider.getErrorMessage('noEmpty', true);
            let expected = defaultConfig.defaultErrorMessages.noEmpty;

            expect(actual).toEqual(expected);
        });

        it('should return default message empty payload', () => {
            let actual = messageProvider.getErrorMessage('noEmpty', '');
            let expected = defaultConfig.defaultErrorMessages.noEmpty;

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('noEmpty', { message: CUSTOM_MESSAGE });
            let expected = CUSTOM_MESSAGE;

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing minlength error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('minlength', null);
            }).toThrow();
        });

        it('should return default message when payload without message', () => {
            let actual = messageProvider.getErrorMessage('minlength', { requiredLength: 3 });
            let expected = stringFormat(defaultConfig.defaultErrorMessages.minLength, 3);

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('minlength', { message: CUSTOM_MESSAGE_WITH_PLACEHOLDER, requiredLength: 3 });
            let expected = stringFormat(CUSTOM_MESSAGE_WITH_PLACEHOLDER, 3);

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing maxlength error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('maxlength', null);
            }).toThrow();
        });

        it('should return default message when payload without message', () => {
            let actual = messageProvider.getErrorMessage('maxlength', { requiredLength: 3 });
            let expected = stringFormat(defaultConfig.defaultErrorMessages.maxLength, 3);

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('maxlength', { message: CUSTOM_MESSAGE_WITH_PLACEHOLDER, requiredLength: 3 });
            let expected = stringFormat(CUSTOM_MESSAGE_WITH_PLACEHOLDER, 3);

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing minNumber error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('minNumber', null);
            }).toThrow();
        });

        it('should return default message when payload without message', () => {
            let actual = messageProvider.getErrorMessage('minNumber', { requiredRange: 3 });
            let expected = stringFormat(defaultConfig.defaultErrorMessages.minNumber, 3);

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('minNumber', { message: CUSTOM_MESSAGE_WITH_PLACEHOLDER, requiredRange: 3 });
            let expected = stringFormat(CUSTOM_MESSAGE_WITH_PLACEHOLDER, 3);

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing maxNumber error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('maxNumber', null);
            }).toThrow();
        });

        it('should return default message when payload without message', () => {
            let actual = messageProvider.getErrorMessage('maxNumber', { requiredRange: 3 });
            let expected = stringFormat(defaultConfig.defaultErrorMessages.maxNumber, 3);

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('maxNumber', { message: CUSTOM_MESSAGE_WITH_PLACEHOLDER, requiredRange: 3 });
            let expected = stringFormat(CUSTOM_MESSAGE_WITH_PLACEHOLDER, 3);

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing rangeLength error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('rangeLength', null);
            }).toThrow();
        });

        it('should return default message with data', () => {
            let actual = messageProvider.getErrorMessage('rangeLength', { rangeMin: 5, rangeMax: 10 });
            let expected = stringFormat(defaultConfig.defaultErrorMessages.rangeLength, [5, 10]);

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('rangeLength', { message: CUSTOM_MESSAGE_WITH_MORE_PLACEHOLDERS, rangeMin: 5, rangeMax: 10 });
            let expected = stringFormat(CUSTOM_MESSAGE_WITH_MORE_PLACEHOLDERS, [5, 10]);

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing range error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('range', null);
            }).toThrow();
        });

        it('should return default message with data', () => {
            let actual = messageProvider.getErrorMessage('range', { rangeMin: 5, rangeMax: 10 });
            let expected = stringFormat(defaultConfig.defaultErrorMessages.range, [5, 10]);

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('range', { message: CUSTOM_MESSAGE_WITH_MORE_PLACEHOLDERS, rangeMin: 5, rangeMax: 10 });
            let expected = stringFormat(CUSTOM_MESSAGE_WITH_MORE_PLACEHOLDERS, [5, 10]);

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing unexisting error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage(null, null);
            }).toThrow();
        });

        it('should return default message when empty payload', () => {
            let actual = messageProvider.getErrorMessage('unexisting', '');
            let expected = stringFormat(defaultConfig.defaultErrorMessages.unknownError);

            expect(actual).toEqual(expected);
        });

        it('should return default message when payload without message', () => {
            let actual = messageProvider.getErrorMessage('unexisting', {});
            let expected = stringFormat(defaultConfig.defaultErrorMessages.unknownError);

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('unexisting', { message: CUSTOM_MESSAGE_WITH_MORE_PLACEHOLDERS, rangeMin: 5, rangeMax: 10 });
            let expected = stringFormat(CUSTOM_MESSAGE_WITH_MORE_PLACEHOLDERS, [5, 10]);

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing digit error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('digit', null);
            }).toThrow();
        });

        it('should return default message empty payload', () => {
            let actual = messageProvider.getErrorMessage('digit', '');
            let expected = defaultConfig.defaultErrorMessages.digit;

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('digit', { message: CUSTOM_MESSAGE });
            let expected = CUSTOM_MESSAGE;

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing equal error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('equal', null);
            }).toThrow();
        });

        it('should return default message when payload without message', () => {
            let actual = messageProvider.getErrorMessage('equal', { comparer: 'abc' });
            let expected = stringFormat(defaultConfig.defaultErrorMessages.equal, 'abc');

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('equal', { message: CUSTOM_MESSAGE_WITH_PLACEHOLDER, comparer: 'abc' });
            let expected = stringFormat(CUSTOM_MESSAGE_WITH_PLACEHOLDER, 'abc');

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing url error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('url', null);
            }).toThrow();
        });

        it('should return default message empty payload', () => {
            let actual = messageProvider.getErrorMessage('url', '');
            let expected = defaultConfig.defaultErrorMessages.url;

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('url', { message: CUSTOM_MESSAGE });
            let expected = CUSTOM_MESSAGE;

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing date error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('date', null);
            }).toThrow();
        });

        it('should return default message empty payload', () => {
            let actual = messageProvider.getErrorMessage('date', '');
            let expected = defaultConfig.defaultErrorMessages.date;

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('date', { message: CUSTOM_MESSAGE });
            let expected = CUSTOM_MESSAGE;

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing areEqual error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('areEqual', null);
            }).toThrow();
        });

        it('should return default message empty payload', () => {
            let actual = messageProvider.getErrorMessage('areEqual', '');
            let expected = defaultConfig.defaultErrorMessages.areEqual;

            expect(actual).toEqual(expected);
        });

        it('should return default message object payload', () => {
            let actual = messageProvider.getErrorMessage('areEqual', {});
            let expected = defaultConfig.defaultErrorMessages.areEqual;

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('areEqual', { message: CUSTOM_MESSAGE });
            let expected = CUSTOM_MESSAGE;

            expect(actual).toEqual(expected);
        });
    });

    describe('Testing passwords error messages', () => {
        it('should throw error when null payload', () => {
            expect(function () {
                messageProvider.getErrorMessage('passwords', null);
            }).toThrow();
        });

        it('should return default message empty payload', () => {
            let actual = messageProvider.getErrorMessage('passwords', '');
            let expected = defaultConfig.defaultErrorMessages.passwords;

            expect(actual).toEqual(expected);
        });

        it('should return default message object payload', () => {
            let actual = messageProvider.getErrorMessage('passwords', {});
            let expected = defaultConfig.defaultErrorMessages.passwords;

            expect(actual).toEqual(expected);
        });

        it('should return custom message', () => {
            let actual = messageProvider.getErrorMessage('passwords', { message: CUSTOM_MESSAGE });
            let expected = CUSTOM_MESSAGE;

            expect(actual).toEqual(expected);
        });
    });
});

function stringFormat(text: string, params?: any): string {
    if (params) {
        if (!Array.isArray(params)) {
            params = [params];
        }

        params.forEach((value: any, index: number) => {
            text = text.replace(new RegExp('\\{' + index + '\\}', 'g'), value);
        });
    }

    return text;
}
