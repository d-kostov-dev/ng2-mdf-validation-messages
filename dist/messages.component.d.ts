import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationMessagesConfiguration } from './config';
import { MessageProvider } from './message-provider';
export declare class ValidationMessageComponent implements OnInit {
    private customConfig;
    control: AbstractControl;
    class: string;
    config: ValidationMessagesConfiguration;
    messageProvider: MessageProvider;
    constructor(customConfig: ValidationMessagesConfiguration);
    ngOnInit(): void;
    readonly errorMessage: string;
    /**
     * Merge instance specific configuration with the default and/or custom one.
     */
    private _mergeWithLocalConfiguration();
}
