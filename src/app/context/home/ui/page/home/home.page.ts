import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordInput } from '../../../../../shared/ui/atom/password-input/password-input.atom';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, PasswordInput],
  templateUrl: './home.page.html',
})
export class Home {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
}
