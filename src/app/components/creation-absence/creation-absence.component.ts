// creation-absence.component.ts
import { Component } from '@angular/core';
import { AbsenceCreateDto } from '../../models/absenceCreateDto';
import { AbsenceService } from 'src/app/services/absence.service';

@Component({
  selector: 'app-creation-absence',
  templateUrl: './creation-absence.component.html',
  styleUrls: ['./creation-absence.component.scss']
})
export class CreationAbsenceComponent {
  absenceInitial: AbsenceCreateDto={
    dateEnd: new Date(),
    dateStart: new Date(),
    motif: "blabla",
    type: "EMPLOYEE_RTT",
    label: "bla",
    email: "m.balouzet1@gmail.com"
  };
  absence: AbsenceCreateDto= this.absenceInitial;

  constructor(private absenceService: AbsenceService) {}

  onSubmitForm() {
    this.absenceService.addAbsence(this.absence).subscribe(
      () => {
        console.log('Absence ajoutée avec succès.');
        this.absence = this.absenceInitial;
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'absence :', error);
      }
    );
  }
}
