import { Component, } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { UserInfosService } from 'src/app/services/user-infos.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  connexionForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private userInfosService : UserInfosService){

  }

  submitForm(){
    this.userInfosService.getToken(this.connexionForm).subscribe();
  }
}
