import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    },
  ],
})
export class PasswordComponent implements OnInit, ControlValueAccessor, Validator {


  passwordControl: FormControl;

  @Input() showHints = true;
  @Input() autocomplete = 'current-password';

  onChanged: (value: string) => {};
  onTouched: () => {};
  onValidationChanged: () => {};

  showPassword = false;

  constructor() {
  }

  ngOnInit(): void {
    this.passwordControl = new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&\/,><\’:;|_~`])\S{8,99}$/),
    ]);

    this.passwordControl.valueChanges.subscribe(x => {
      if (x) {
        this.propagate(x);
      }
    });
  }

  get hasAtLeastOneLowerCaseChar(): boolean {
    return !!this.passwordControl.value.toString().match(/(?=.*[a-z])/);
  }

  get hasAtLeastOneUpperCaseChar(): boolean {
    return !!this.passwordControl.value.toString().match(/(?=.*[A-Z])/);
  }

  get hasAtLeastOneNumericChar(): boolean {
    return !!this.passwordControl.value.toString().match(/(?=.*[0-9])/);
  }

  get hasAtLeastOneSpecialChar(): boolean {
    return !!this.passwordControl.value.toString().match(/(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&\/,><\’:;|_~`])/);
  }

  get hasAtLeastEightChar(): boolean {
    return this.passwordControl.value.toString().length >= 8;
  }

  writeValue(value: string): void {
    this.passwordControl.patchValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(): { invalidPassword: boolean } | null {
    return this.passwordControl.invalid ? {invalidPassword: true} : null;
  }

  registerOnValidatorChange(fn: any): void {
    this.onValidationChanged = fn;
  }

  propagate(value: string): void {
    this.onChanged(value);
    this.onTouched();
    this.onValidationChanged();
  }
}
