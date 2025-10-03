import { Routes } from '@angular/router';
import { PersonalInfoFormComponent } from './features/resume-constructor/ui/components/personal-info-form/personal-info-form.component';
import { MainLayoutComponent } from './shared/ui/layouts/main-layout/main-layout.component';
import { StepperComponent } from './features/resume-constructor/ui/components/stepper/stepper.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
      { path: 'personal-info', component: StepperComponent }
    ]
  },
];
