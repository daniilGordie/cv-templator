import { Component, inject, output } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { take } from 'rxjs';
import { PersonalInfoService } from '../../../../../core/services/personal-info.service';
import { IPersonalInfo } from '../../../state/types/personal-info.type';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'personal-info-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './personal-info-form.component.html',
  styleUrl: './personal-info-form.component.scss',
})

export class PersonalInfoFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly personalInfoService = inject(PersonalInfoService);

  public readonly isFormSavingSuccess = output<boolean>();

  readonly form = this.fb.group({
    firstName: ['', Validators.required],
    secondName: [''],
    phoneNumber: ['', Validators.pattern(/^\+?[1-9][0-9]{9,14}$/)],
    homeTown: [''],
    dateOfBirth: ['', Validators.required],
  });

  public getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: IPersonalInfo = this.form.value as IPersonalInfo;

    this.personalInfoService
      .savePersonalInfo(payload)
      .pipe(take(1))
      .subscribe({
        next: () => {
          console.log();
          this.isFormSavingSuccess.emit(true);
        },
        error: (error) => {
          console.log(error.message);
          this.isFormSavingSuccess.emit(false);
        }
      });
  }
}
