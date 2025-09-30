import { Routes } from '@angular/router';
import { PersonalInfoFormComponent } from './features/resume-constructor/ui/components/personal-info-form/personal-info-form.component';

export const routes: Routes = [
  {
    path: 'general-info',
    component: PersonalInfoFormComponent,
  },
  {
    path: '',
    redirectTo: '/general-info',
    pathMatch: 'full',
  },
];
