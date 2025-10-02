import { Component, Input, WritableSignal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'textarea-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatError],
  templateUrl: './textarea-input.component.html'
})
export class TextAreaInputComponent {
  @Input() label!: string;
  @Input() valueSignal!: WritableSignal<string>;
  @Input() errorSignal!: WritableSignal<string>;
  @Input() touchedSignal!: WritableSignal<boolean>;

  onInput(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  this.valueSignal.set(target.value);
}
}
