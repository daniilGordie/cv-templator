import { SectionDictionary } from './../../../state/store/store';
import { Component, WritableSignal, signal } from '@angular/core';
import { FormSectionWrapperComponent } from '../form-section-wrapper/form-section-wrapper.component';
import { FieldConfig } from '../../../state/types/field-config.type';

@Component({
  selector: 'general-info-form',
  standalone: true,
  imports: [FormSectionWrapperComponent],
  templateUrl: './general-info-form.component.html',
})
export class GeneralInfoFormComponent {
  sectionDictionary = SectionDictionary;

  sections = Object.keys(this.sectionDictionary).map((name) => ({
    id: crypto.randomUUID(),
    name,
  }));

  sectionSignals: Record<
    string,
    Record<
      string,
      {
        value: WritableSignal<string>;
        error: WritableSignal<string>;
        touched: WritableSignal<boolean>;
      }
    >
  > = {};

  constructor() {
    for (const sectionName of Object.keys(this.sectionDictionary)) {
      const fields = this.sectionDictionary[sectionName];
      this.sectionSignals[sectionName] = {};
      fields.forEach((f) => {
        this.sectionSignals[sectionName][f.name] = {
          value: signal(f.value || ''),
          error: signal(''),
          touched: signal(false),
        };
      });
    }
  }

  // validateField(
  //   valueSignal: WritableSignal<string>,
  //   errorSignal: WritableSignal<string>,
  //   required = false,
  //   minLength?: number
  // ) {
  //   const value = valueSignal();
  //   if (minLength && value.length < minLength) {
  //     errorSignal.set(`Minimum length is ${minLength}`);
  //     return false;
  //   }
  //   errorSignal.set('');
  //   return true;
  // }

  onSubmit() {
    
    // for (const sectionName of Object.keys(this.sectionSignals)) {
    //   for (const fieldName of Object.keys(this.sectionSignals[sectionName])) {
    //     const signals = this.sectionSignals[sectionName][fieldName];
    //     this.validateField(signals.value, signals.error, true, 3);
    //   }
    // }

    const formData: Record<string, Record<string, string>> = {};

    for (const sectionName of Object.keys(this.sectionSignals)) {
      formData[sectionName] = {};
      for (const fieldName of Object.keys(this.sectionSignals[sectionName])) {
        formData[sectionName][fieldName] =
          this.sectionSignals[sectionName][fieldName].value();
      }
    }

    console.log('Form data:', formData);
  }
}
