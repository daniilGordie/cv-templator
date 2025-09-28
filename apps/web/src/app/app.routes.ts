import { Routes } from '@angular/router';
import { ResumeConstructorPage } from './features/resume-constructor/resume-constructor.page';

export const routes: Routes = [
  {
    path: 'resume-constructor',
    component: ResumeConstructorPage
  },
  {
    path: '',
    redirectTo: '/resume-constructor',
    pathMatch: 'full'
  }
];
