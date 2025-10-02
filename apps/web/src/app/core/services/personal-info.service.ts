import { IPersonalInfo } from '../../features/resume-constructor/state/types/personal-info.type';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.local';
import { IUserProfile } from '../../features/resume-constructor/state/types/user-profile.type ';

@Injectable({ providedIn: 'root' })
export class PersonalInfoService {
  private baseUrl = environment.apiUrl;
  private http = inject(HttpClient)

  savePersonalInfo(payload: IPersonalInfo): Observable<IPersonalInfo> {
    return this.http.put<IPersonalInfo>(`${this.baseUrl}/api/user/cmg6dn3ul0000vmzs8eou7e1s/update-personal-info`, payload
    );
  }

  getMyProfileById(): Observable<IUserProfile> {
    return this.http.get<IUserProfile>(`${this.baseUrl}/api/user/cmg6dn3ul0000vmzs8eou7e1s`)
  }
}

