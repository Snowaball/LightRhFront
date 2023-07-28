import { Component } from '@angular/core';
import { AbsenceCreateDto } from 'src/app/models/absenceCreateDto';
import { AbsenceService } from 'src/app/services/absence.service';
import { UserInfosService } from 'src/app/services/user-infos.service';

@Component({
  selector: 'app-creation-absence',
  templateUrl: './creation-absence.component.html',
  styleUrls: ['./creation-absence.component.scss']
})
export class CreationAbsenceComponent {
  absenceInitial: AbsenceCreateDto={
    dateEnd: new Date(),
    dateStart: new Date(),
    motif: "",
    type: "EMPLOYEE_RTT",
    label: "Congé",
    email: this.userInfoService.userInfos.email
  };
  absence: AbsenceCreateDto= this.absenceInitial;

  constructor(private absenceService: AbsenceService, private userInfoService : UserInfosService) {}

  onSubmitForm() {
    this.absenceService.addAbsence(this.absence).subscribe();
  }
}
