# Angular 2 Model Driven Forms - Validation Messages
The idea behind `ng2-mdf-validation-messages` is to make your Angular 2 forms validation easier, faster and with less code in a way that it is like using the original Angular 2 validations. It currently supports default and custom error messages. Global and local configuration. Just one line of code to show errors.

## Dependencies
No external dependencies except Angular 2 itself.

### Angular 2 Version
This is currently written with version 2.1.2, but it should work with 2.0.0 even RC6.

## Quick start

1. A recommended way to install ***ng2-mdf-validation-messages*** is through [npm](https://www.npmjs.com/package/ng2-mdf-validation-messages) package manager using the following command:

  `npm install ng2-mdf-validation-messages --save`

Usage
-----

Import `Ng2MDFValidationMessagesModule` into your app's modules:

```TypeScript
import { Ng2MDFValidationMessagesModule } from 'ng2-mdf-validation-messages';

@NgModule({
  imports: [
    Ng2MDFValidationMessagesModule
  ]
})
```

This makes all the `ng2-mdf-validation-messages` components available for use in your app components.
## Basic Example

You can also check the demo-app in the repository for more complete examples.

#### Component
```TypeScript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ValidationExtensions } from 'ng2-mdf-validation-messages';

@Component({
    selector: 'my-app',
    templateUrl: './src/app.component.html',
})
export class AppComponent implements OnInit {
    editorForm: FormGroup;
    firstName: FormControl;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.firstName = this.formBuilder.control('', ValidationExtensions.required());
        this.editorForm = this.formBuilder.group({
            firstName: this.firstName,
        });
    }
}
```

#### Template

```HTML
<form [formGroup]="editorForm" novalidate>
    <label>First Name</label>
    <input formControlName="firstName" type="text">
    <ng2-mdf-validation-message [control]="firstName" *ngIf="!firstName.pristine"></ng2-mdf-validation-message>
</form>
```


## Advanced (and actually useful) Examples

### Global error messages configuration.
`ng2-mdf-validation-messages` comes with the option to configure globally the messages that the errors return and the class of the div where the error is displayed.

```TypeScript
import { Ng2MDFValidationMessagesModule } from 'ng2-mdf-validation-messages';

@NgModule({
  imports: [
    Ng2MDFValidationMessagesModule.globalConfig({
        class: 'text-danger',
        defaultErrorMessages: {
            required: 'Default Custom Required Message',
            email: 'Invalid email!',
            minLength: 'Minimum length is {0}!',
        }
    })
  ]
})
```

As you can see placeholders in the strings are supported. For this example, `ValidationExtensions.minLength(3)` will output error `'Minimum length is 3!'`

#### Currently supported errors and their default messages.
* **required:** 'This field is required!',
* **pattern:** 'The input value does not match the pattern required!',
* **email:** 'Invalid email!',
* **minLength:** 'Minimum length is {0}!',
* **maxLength:** 'Maximum length is {0}!',
* **minNumber:** 'Minimal value is {0}!',
* **maxNumber:** 'Maximal value is {0}!',
* **noEmpty:** 'Only blank spaces are not allowed!',
* **rangeLength:** 'The input must be between {0} and {1} symbols long!',
* **range:** 'The input must be between {0} and {1}!',
* **unknownError:** 'Unknown Error!',

### Configure specific errors

#### The Style
You can configure the class of the div where the error is shown locally on each error.

```HTML
<ng2-mdf-validation-message [control]="firstName" *ngIf="!firstName.pristine" [class]="'text-danger'"></ng2-mdf-validation-message>
```

#### Custom error messages

The real "power" of this component is the ability to give custom error messages for every single validation. And again placeholders are supported. Example:

```TypeScript
    this.firstName = this.formBuilder.control('', ValidationExtensions.required('First name is required!'));

    this.username = this.formBuilder.control('', [
            ValidationExtensions.required('Username is required!'),
            ValidationExtensions.minLength(3, 'Username must be at least {0} symbols long!')
        ]);

    this.age = this.formBuilder.control('', ValidationExtensions.minNumber(18, 'Minimum age to enter is {0}!'));
}
```

#### Custom Validation Extensions
You can create your custom validations following this example:

```TypeScript
static VALIDATION_NAME(...PROPS_IF_NEEDED, message: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        // VALIDATION LOGIC

       return {
            ERROR_TYPE: {
                message: message,
                //...PROPS (will be used for placeholders)
            }
        };
    };
}
```

## TODOs
### Validation Extensions
* Add equalTo (for passwords)
* Add date
* Add equal
* Add url
* Add compose
* Add number

## Development

1. Download this repo.
2. Run `npm install`.
3. Run `npm start`
3. Go to demo-app
5. Run `npm install`.
4. Run `npm start`
7. To build run `npm run build.prod`
8. Run tests `npm run test`
