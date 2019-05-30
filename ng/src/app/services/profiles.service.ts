import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../models/profile';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  constructor(private http : HttpClient){}
  getBook(id: string): Observable<Profile> {
    return this.http.get<Profile>(`http://localhost:8080/api/profiles/${id}`)
  }

  getBooks(): Observable<Profile[]> {
    return this.http.get<Profile[]>('http://localhost:8080/api/profiles')
  }

  createBook(profile: Profile): any {
    return this.http.post<Profile>('http://localhost:8080/api/profiles/create', profile)
  }

  updateBook(profile: Profile): any {
    return this.http.put<Profile>(`http://localhost:8080/api/profiles/${profile._id}/update`, profile)
  }

  deleteBook(profile: Profile): any {
    return this.http.delete<Profile>(`http://localhost:8080/api/profiles/${profile._id}/delete`)
  }
}
