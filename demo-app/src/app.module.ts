import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WwsValidationMessagesModule } from 'ng2-mdf-validation-messages';

@NgModule({
    imports: [
        BrowserModule,
        WwsValidationMessagesModule,
        //WwsValidationMessagesModule.globalConfig({ defaultErrorMessages: { required: 'Default Custom Required Message' } }),
        FormsModule,
        ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }