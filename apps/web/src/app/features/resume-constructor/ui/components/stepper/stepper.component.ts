import {Component, inject} from '@angular/core';
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
  isPersonalFormValid = false;
  private _formBuilder = inject(FormBuilder);

  generalInfoGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
}