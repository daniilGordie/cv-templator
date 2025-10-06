import { MatMenuModule } from '@angular/material/menu';
import { Component, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { PersonalInfoService } from '../../../../core/services/personal-info.service';
import { take } from 'rxjs';
import { IUserProfile } from '../../../../features/resume-constructor/state/types/user-profile.type ';

@Component({
  selector: 'sidenav-responsive-example',
  templateUrl: 'main-layout.component.html',
  styleUrl: 'main-layout.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatMenuModule
  ],
})
export class MainLayoutComponent  {
  private readonly personalInfoService = inject(PersonalInfoService);
  public userProfileInfo = signal<IUserProfile | null>(null);
  
  public opened = signal<boolean>(false);

  public ngOnInit(): void {
    this.loadUserProfileInfo()
  }

  public toggleSidenav(drawer: MatSidenav): void  {
    drawer.toggle();
  }

  private loadUserProfileInfo(): void {
    this.personalInfoService.getMyProfileById()
      .pipe(take(1))
      .subscribe({
        next: (info: IUserProfile) => this.userProfileInfo.set(info),
      });
  }
}
