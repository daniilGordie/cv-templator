import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export interface FieldConfig {
  id: string;
  name: string;
  value?: string;
  type: 'text' | 'textarea' | 'date' | 'select';
  options?: any[];
}
