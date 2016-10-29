import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ng2MDFValidationMessagesModule } from 'ng2-mdf-validation-messages';

@NgModule({
    imports: [
        BrowserModule,
        Ng2MDFValidationMessagesModule,
        //Ng2MDFValidationMessagesModule.globalConfig({ defaultErrorMessages: { required: 'Default Custom Required Message' } }),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
