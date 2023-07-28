import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http: HttpClient) { }

  getAbsences(): Observable<any[]> {
    return this.http.get<any[]>('URL_DE_VOTRE_API/absences');
  }
}
