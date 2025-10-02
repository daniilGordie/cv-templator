import { Component, Input, WritableSignal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'date-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatError],
  templateUrl: './date-input.component.html'
})
export class DateInputComponent {
  @Input() label!: string;
  @Input() valueSignal!: WritableSignal<string>;
  @Input() errorSignal!: WritableSignal<string>;
  @Input() touchedSignal!: WritableSignal<boolean>;
}
