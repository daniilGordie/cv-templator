import { Component } from '@angular/core';
import { GeneralInfoFormComponent } from "./ui/components/general-info-form/general-info-form.component";

@Component({
  selector: 'resume-constructor',
  standalone: true,
  templateUrl: 'resume-constructor.page.html',
  imports: [GeneralInfoFormComponent]
})

export class ResumeConstructorPage  {
}