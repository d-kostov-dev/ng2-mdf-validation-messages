import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ValidationMessageComponent } from './messages.component';
import { ValidationMessagesConfiguration } from './config';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        ValidationMessageComponent
    ],
    exports: [
        ValidationMessageComponent
    ],
})
export class Ng2MDFValidationMessagesModule {
    /**
     * Configure global values for the module.
     * @param configObject Object with custom global configurations. E.g. { defaultErrorMessages: { required: 'Default Custom Required Message' }}
     */
    static globalConfig(configObject: any): ModuleWithProviders {
        return {
            ngModule: Ng2MDFValidationMessagesModule,
            providers: [
                {
                    provide: ValidationMessagesConfiguration,
                    useValue: configObject
                }
            ]
        };
    }
}
