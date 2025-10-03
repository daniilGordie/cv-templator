import { MatMenuModule } from '@angular/material/menu';
import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
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
export class MainLayoutComponent implements OnDestroy {
  private personalInfoService = inject(PersonalInfoService);
  opened: boolean = false;
  protected readonly isMobile = signal(true);

  userProfileInfo = signal<IUserProfile | null>(null);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener); // через media-query
  }

  ngOnInit(): void {
    this.loadUserProfileInfo()
  }

  toggleSidenav(drawer: MatSidenav) {
    drawer.toggle();
  }

  private loadUserProfileInfo() {
    this.personalInfoService.getMyProfileById()
      .pipe(take(1))
      .subscribe({
        next: (info: IUserProfile) => this.userProfileInfo.set(info),
      });
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
