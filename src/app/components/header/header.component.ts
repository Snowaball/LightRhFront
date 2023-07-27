import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInfo } from '../../model/user-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userInfos$ : Observable<UserInfo>;

  constructor(){
    this.userInfos$ = of({
      firstName : "",
      lastName : "",
      role : "",
      profile : ""
    });
  }
}
