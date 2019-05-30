import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../models/profile';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  constructor(private http : HttpClient){}
  getProfile(id: string): Observable<Profile> {
    return this.http.get<Profile>(`http://localhost:8080/api/profiles/${id}`)
  }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>('http://localhost:8080/api/profiles')
  }

  createProfile(profile: Profile): any {
    return this.http.post<Profile>('http://localhost:8080/api/profiles/create', profile)
  }

  updateProfile(profile: Profile): any {
    return this.http.put<Profile>(`http://localhost:8080/api/profiles/${profile._id}/update`, profile)
  }

  deleteProfile(profile: Profile): any {
    return this.http.delete<Profile>(`http://localhost:8080/api/profiles/${profile._id}/delete`)
  }
}
