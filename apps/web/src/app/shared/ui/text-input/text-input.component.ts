import { Component, Input, WritableSignal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './text-input.component.html'
})
export class TextInputComponent {
  @Input() label!: string;
  @Input() valueSignal!: WritableSignal<string>;
  @Input() errorSignal!: WritableSignal<string>;
  @Input() touchedSignal!: WritableSignal<boolean>;
}
