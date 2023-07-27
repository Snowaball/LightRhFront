import { Component } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { UserInfo } from '../../models/user-info';
import { UserInfosService } from 'src/app/services/user-infos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userInfos? : UserInfo;

  constructor(private userInfosService : UserInfosService){
    userInfosService.userInfos$.pipe(
      map(userInfo => this.userInfos = userInfo)
    ).subscribe();
  }
}
