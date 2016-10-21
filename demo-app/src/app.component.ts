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

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.firstName = this.formBuilder.control('', ValidationExtensions.required());
        this.lastName = this.formBuilder.control('', ValidationExtensions.required('Last name is required!'));
        this.username = this.formBuilder.control('',[
            ValidationExtensions.required('Username is required!'),
            ValidationExtensions.minLength(3, 'Username must be atleast {0} symbols long!')
        ]);
        this.age = this.formBuilder.control('', ValidationExtensions.minNumber(18));
        this.email = this.formBuilder.control('', [ValidationExtensions.required(), ValidationExtensions.email()]);

        this.editorForm = this.formBuilder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            age: this.age,
            email: this.email,
        });
    }

    onSubmit() {
        console.log(this.editorForm);
    }
}