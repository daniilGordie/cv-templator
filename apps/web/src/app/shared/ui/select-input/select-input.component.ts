import { Component, Input, WritableSignal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatError } from '@angular/material/form-field';
import { SelectOption } from '../../models/types/select-options.type';

@Component({
  selector: 'select-input',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatError],
  templateUrl: './select-input.component.html'
})
export class SelectInputComponent {
  @Input() label!: string;
  @Input() options?: SelectOption[] = [];
  @Input() valueSignal!: WritableSignal<string>;
  @Input() errorSignal!: WritableSignal<string>;
  @Input() touchedSignal!: WritableSignal<boolean>;
}
