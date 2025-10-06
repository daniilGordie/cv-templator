import {Component, inject, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { PersonalInfoFormComponent } from '../personal-info-form/personal-info-form.component';

@Component({
  selector: 'cv-constructor-stepper',
  templateUrl: 'stepper.component.html',
  styleUrl: 'stepper.component.scss',
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    PersonalInfoFormComponent
  ],
})
export class StepperComponent {
  public isPersonalFormValid: WritableSignal<boolean> = signal(false);
  private readonly _formBuilder = inject(FormBuilder);

  public generalInfoGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
}