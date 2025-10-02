import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
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
    MatButtonModule
  ],
  templateUrl: './personal-info-form.component.html',
  styleUrl: './personal-info-form.component.scss',
})
export class PersonalInfoFormComponent {
  private fb = inject(FormBuilder);
  private personalInfoService = inject(PersonalInfoService);

  form = this.fb.group({
    firstName: ['', Validators.required],
    secondName: [''],
    phoneNumber: ['', Validators.pattern(/^\+?[1-9][0-9]{9,14}$/)],
    homeTown: [''],
    dateOfBirth: ['', Validators.required],
  });

  getControl(name: string) {
    return this.form.get(name);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: IPersonalInfo = {
      firstName: this.form.value.firstName!,
      secondName: this.form.value.secondName || undefined,
      phoneNumber: this.form.value.phoneNumber || undefined,
      homeTown: this.form.value.homeTown || undefined,
      dateOfBirth: new Date(this.form.value.dateOfBirth!),
    };

    this.personalInfoService
      .savePersonalInfo(payload)
      .pipe(take(1))
      .subscribe({
        next: (data) => console.log('Saved:', data),
      });
  }
}
