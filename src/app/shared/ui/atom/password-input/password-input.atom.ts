import { Component, Input, inject, signal } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  imports: [],
  templateUrl: './password-input.atom.html',
})
export class PasswordInput implements ControlValueAccessor {
  private readonly ngControl = inject(NgControl, { optional: true, self: true });

  @Input() id = 'password';
  @Input() placeholder = '';
  @Input() autocomplete = 'current-password';

  protected readonly value = signal('');
  protected readonly disabled = signal(false);
  protected readonly showPassword = signal(false);

  private onChange: (value: string) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  protected get invalid(): boolean {
    return !!this.ngControl?.invalid && !!this.ngControl?.touched;
  }

  protected onInput(inputValue: string): void {
    this.value.set(inputValue);
    this.onChange(inputValue);
  }

  protected onBlur(): void {
    this.onTouched();
  }

  protected togglePasswordVisibility(): void {
    this.showPassword.update((current) => !current);
  }

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
