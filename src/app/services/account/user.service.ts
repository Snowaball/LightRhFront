import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Employee} from '../../models/Employee'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/employee/admin/createEmployee';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/employee/admin/getAllEmployees').pipe(
      tap(employees => console.log('fetched employees', employees)),
    );
  }

  createUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData).pipe(
      tap(response => console.log('created user', response)),
    );
  }
}
