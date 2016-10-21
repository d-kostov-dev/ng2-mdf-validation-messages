import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationMessagesConfiguration } from './config';
import { MessageProvider } from './message-provider';
export declare class ValidationMessageComponent implements OnInit {
    private customConfig;
    control: FormControl;
    isShown: boolean;
    class: string;
    config: ValidationMessagesConfiguration;
    messageProvider: MessageProvider;
    constructor(customConfig: ValidationMessagesConfiguration);
    ngOnInit(): void;
    readonly errorMessage: string;
    private _mergeWithLocalConfiguration();
}
