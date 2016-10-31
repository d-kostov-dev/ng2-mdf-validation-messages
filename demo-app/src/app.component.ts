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
    lastName: FormControl;
    username: FormControl;
    age: FormControl;
    email: FormControl;
    password: FormControl;
    confirmPassword: FormControl;
    passwordsGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.firstName = this.formBuilder.control('', ValidationExtensions.required());
        this.lastName = this.formBuilder.control('', ValidationExtensions.required('Last name is required!'));
        this.username = this.formBuilder.control('', [
            ValidationExtensions.required('Username is required!'),
            ValidationExtensions.minLength(3, 'Username must be at least {0} symbols long!')
        ]);
        this.age = this.formBuilder.control('', ValidationExtensions.minNumber(18));
        this.email = this.formBuilder.control('', [
            ValidationExtensions.required(),
            ValidationExtensions.email()
        ]);

        this.password = this.formBuilder.control('', [
            ValidationExtensions.required('Password is required.'),
            ValidationExtensions.minLength(3, 'Password must be more than 3 symbols.'),
            ValidationExtensions.maxLength(20, 'Password must be less than 20 symbols.'),
        ]);

        this.confirmPassword = this.formBuilder.control('', [
            ValidationExtensions.required('Confirm Password is required.'),
            ValidationExtensions.minLength(3, 'Password must be more than 3 symbols.'),
            ValidationExtensions.maxLength(20, 'Password must be less than 20 symbols.'),
        ]);

        this.passwordsGroup = this.formBuilder.group({
            password: this.password,
            confirmPassword: this.confirmPassword,
        }, { validator: ValidationExtensions.passwords() });

        this.editorForm = this.formBuilder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            age: this.age,
            email: this.email,
            passwordsGroup: this.passwordsGroup
        });
    }

    onSubmit() {
        console.log(this.editorForm);
    }
}
