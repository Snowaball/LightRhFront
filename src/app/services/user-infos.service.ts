import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserInfo } from '../models/user-info';
import { HttpClient } from '@angular/common/http';
import { LoginParamsDto } from '../models/login-paramsDto';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserInfosService {
  public userInfos$ : BehaviorSubject<UserInfo> = new BehaviorSubject<UserInfo>(
    {
      firstName : "",
      lastName : "",
      email : "",
      expirationDate : new Date(),
      role:"",
      profile:""
    }
  );
  private apiUrl = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { 
  }

  getToken(form : FormGroup){
    let loginParams : LoginParamsDto = {
      email : form.controls["email"].value, 
      password : form.controls["password"].value
    }
    console.log(loginParams);
    this.httpClient.post<string>(this.apiUrl+"user/login", loginParams).pipe(
    tap((token : string)=> console.log(token)))
    .subscribe();
  }
}
