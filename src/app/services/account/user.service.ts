import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/employee/admin/createEmployee';

  constructor(private http: HttpClient) { }


  // getEmployees() {
  //   return this.http.get<Employee[]>('http://localhost:8080/employee/admin/getEmployee');
  // }


  createUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
