import { Component, Input, WritableSignal } from '@angular/core';
import { TextInputComponent } from '../../../../../shared/ui/text-input/text-input.component';
import { TextAreaInputComponent } from '../../../../../shared/ui/text-area/textarea-input.component';
import { DateInputComponent } from '../../../../../shared/ui/date-input/date-input.component';
import { SelectInputComponent } from '../../../../../shared/ui/select-input/select-input.component';
import { FieldConfig } from '../../../state/types/field-config.type';
import { CamelCaseToWordsPipe } from '../../../../../shared/pipes/camel-case-to-words.pipe';

@Component({
  selector: 'form-section-wrapper',
  standalone: true,
  imports: [TextInputComponent, TextAreaInputComponent, DateInputComponent, SelectInputComponent, CamelCaseToWordsPipe],
  templateUrl: './form-section-wrapper.component.html'
})
export class FormSectionWrapperComponent {
  @Input() sectionName!: string;
  @Input() fields: FieldConfig[] = [];
  @Input() fieldSignals!: Record<string, {
    value: WritableSignal<string>;
    error: WritableSignal<string>;
    touched: WritableSignal<boolean>;
  }>;
}
