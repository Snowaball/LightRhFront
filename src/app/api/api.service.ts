// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Absence } from '../model/absence.model';
import { AbsenceCreateDto } from '../model/absenceCreateDto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/absences';

  constructor(private http: HttpClient) {}

  addAbsence(absence: AbsenceCreateDto): Observable<any> {
    return this.http.post(this.apiUrl, absence);
  }
}
