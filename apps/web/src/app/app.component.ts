import { Component } from '@angular/core';
import { ResumeConstructorPage } from "./features/resume-constructor/resume-constructor.page";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ResumeConstructorPage],
})
export class AppComponent {
  
}
